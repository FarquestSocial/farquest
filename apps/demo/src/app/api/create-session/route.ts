import { NextRequest, NextResponse } from "next/server";
import Session from "@/lib/session";
import { z } from "zod";
import api from "../../../lib/api";

const schema = z.object({
  correlatedId: z.string(),
});

export const POST = async (req: NextRequest, res: NextResponse) => {
  const _body = await req.json();
  const body = schema.parse(_body);

  if (!body.correlatedId) {
    return NextResponse.json({ error: "Correlated ID is required" });
  }
  const session = await Session.fromRequest(req);
  if (!session.userId) {
    return NextResponse.json({ error: "User not found" });
  }
  //validate request body

  console.log("process.env.FARQUEST_API_KEY", process.env.FARQUEST_API_KEY);
  console.log("session.userId", session.userId);
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
          farquestapikey: process.env.FARQUEST_API_KEY,
        },
      }
    );

  console.log("resp", resp);
  if (!resp.data) {
    return NextResponse.json({ error: "Could not get redirectUrl" });
  }
  return NextResponse.redirect(resp.data.redirectUrl);
};

export default POST;
