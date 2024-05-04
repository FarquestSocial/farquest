import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import api from "../../../../lib/api";

export const POST = async (req: NextRequest, res: NextResponse) => {
  //validate request body
  const correlationId = "REPLACEME";
  const farquestApiKey = "REPLACEME";
  const authheader = "REPLACEME";
  const resp = await api.session({
    correlatedId: correlationId
  }).post({
    correlatedId: correlationId,
  }, {
    headers: {
      farquestapikey: farquestApiKey,
      authorization: `Bearer ${authheader}`,
    },
  });
  if (!resp.data) {
    return NextResponse.json({ error: "Could not get redirectUrl" });
  }
  return NextResponse.redirect(resp.data.redirectUrl);
};
