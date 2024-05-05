import { upsertUser } from "@/lib/queries";
import Session from "@/lib/session";
import { tap } from "@/utils/tap";
import { NextRequest, NextResponse } from "next/server";
import { SiweErrorType, SiweMessage, generateNonce } from "siwe";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const session = await Session.fromRequest(req);

  return NextResponse.json(session.toJSON());
};

export const PUT = async (req: NextRequest): Promise<NextResponse> => {
  const session = await Session.fromRequest(req);
  if (!session?.nonce) session.nonce = generateNonce();

  return tap(new NextResponse(session.nonce), (res) => session.persist(res));
};

export const POST = async (req: NextRequest) => {
  const { message, signature } = await req.json();
  const session = await Session.fromRequest(req);

  try {
    const siweMessage = new SiweMessage(message);
    const { data: fields } = await siweMessage.verify({
      signature,
      nonce: session.nonce,
    });

    if (fields.nonce !== session.nonce) {
      return tap(new NextResponse("Invalid nonce.", { status: 422 }), (res) =>
        session.clear(res)
      );
    }
    //upsert user in database
    const userId = await upsertUser(fields.address);

    session.address = fields.address;
    session.chainId = fields.chainId;
    session.userId = userId.id;
  } catch (error) {
    console.error("Failed to verify message:", error);
    switch (error) {
      case SiweErrorType.INVALID_NONCE:
      case SiweErrorType.INVALID_SIGNATURE:
        return tap(new NextResponse(String(error), { status: 422 }), (res) =>
          session.clear(res)
        );

      default:
        return tap(new NextResponse(String(error), { status: 400 }), (res) =>
          session.clear(res)
        );
    }
  }

  return tap(new NextResponse(""), (res) => session.persist(res));
};

export const DELETE = async (req: NextRequest) => {
  const session = await Session.fromRequest(req);

  return tap(new NextResponse(""), (res) => session.clear(res));
};
