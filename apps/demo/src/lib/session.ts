import { ISession } from "@/utils/types";
import { sealData, unsealData } from "iron-session";
import { NextRequest, NextResponse } from "next/server";

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET cannot be empty.");
}

const SESSION_OPTIONS = {
  ttl: 60 * 60 * 24, // 1 day
  password: process.env.SESSION_SECRET,
};

const COOKIE_NAME = "demo-app-connectkit-next-siwe";

class Session {
  nonce?: string;
  chainId?: number;
  address?: string;
  userId?: string;

  constructor(session?: ISession) {
    this.nonce = session?.nonce;
    this.chainId = session?.chainId;
    this.address = session?.address;
    this.userId = session?.userId;
  }

  static async fromRequest(req: NextRequest): Promise<Session> {
    const sessionCookie = req.cookies.get(COOKIE_NAME)?.value;

    if (!sessionCookie) return new Session();
    return new Session(
      await unsealData<ISession>(sessionCookie, SESSION_OPTIONS)
    );
  }

  clear(res: NextResponse): Promise<void> {
    this.nonce = undefined;
    this.chainId = undefined;
    this.address = undefined;
    this.userId = undefined;

    return this.persist(res);
  }

  toJSON(): ISession {
    return {
      nonce: this.nonce,
      address: this.address,
      chainId: this.chainId,
      userId: this.userId,
    };
  }

  async persist(res: NextResponse): Promise<void> {
    res.cookies.set(
      COOKIE_NAME,
      await sealData(this.toJSON(), SESSION_OPTIONS),
      {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      }
    );
  }
}

export default Session;
