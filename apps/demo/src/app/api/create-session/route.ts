import { NextRequest, NextResponse } from "next/server";
import Session from "@/lib/session";
import { z } from "zod";
import api from "../../../lib/api";

const schema = z.object({
  correlatedId: z.string(),
});

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = schema.parse(req.body);
  if (!body.correlatedId) {
    return NextResponse.json({ error: "Correlated ID is required" });
  }
  const session = await Session.fromRequest(req);
  if (!session.userId) {
    return NextResponse.json({ error: "User not found" });
  }
  //validate request body

  const resp = await api.session({
    correlatedId: session.userId
  }).post({
    correlatedId: session.userId,
  }, {
    headers: {
      farquestapikey: Bun.env.FARQUEST_API_KEY,
    },
  });
  if (!resp.data) {
    return NextResponse.json({ error: "Could not get redirectUrl" });
  }
  return NextResponse.redirect(resp.data.redirectUrl);
};
