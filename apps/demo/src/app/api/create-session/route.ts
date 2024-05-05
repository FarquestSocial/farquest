import { NextRequest, NextResponse } from "next/server";
import Session from "@/lib/session";
import { z } from "zod";
import api from "../../../lib/api";

const schema = z.object({
  correlatedId: z.string(),
});

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const _body = await req.json();
    const body = schema.parse(_body);
    if (!body.correlatedId) {
      return NextResponse.json({ error: "Correlated ID is required" });
    }

    const session = await Session.fromRequest(req);
    if (!session.userId) {
      console.error("User session not found");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log("Processing request for userId:", session.userId);

    const resp = await api
      .session({
        correlatedId: session.userId,
      })
      .post(
        {
          correlatedId: session.userId,
        },
        {
          headers: {
            farquestapikey: "1fe5ce.afbccea670f467da160c672be0813fc0",
          },
        }
      );

    console.log("Response from API:", resp);

    if (!resp.data || !resp.data.redirectUrl) {
      console.error("API response is missing data:", resp);
      return NextResponse.json(
        { error: "Could not get redirectUrl" },
        { status: 500 }
      );
    }

    return NextResponse.json({ redirectUrl: resp.data.redirectUrl });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.flatten());
      return NextResponse.json(
        { error: "Invalid input data", details: error.flatten() },
        { status: 400 }
      );
    }
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
