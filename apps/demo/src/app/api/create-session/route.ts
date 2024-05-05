import { NextRequest, NextResponse } from "next/server";
import Session from "@/lib/session";
import { z } from "zod";
import api from "../../../lib/api";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await Session.fromRequest(req);
  if (!session.userId) {
    return NextResponse.json({ error: "User not found" });
  }
  //validate request body

  //@TODO we should not need the auth header here
  const authheader = "REPLACEME";
  const resp = await api.session({
    correlatedId: session.userId
  }).post({
    correlatedId: session.userId,
  }, {
    headers: {
      farquestapikey: Bun.env.FARQUEST_API_KEY,
      authorization: `Bearer ${authheader}`,
    },
  });
  if (!resp.data) {
    return NextResponse.json({ error: "Could not get redirectUrl" });
  }
  return NextResponse.redirect(resp.data.redirectUrl);
};
