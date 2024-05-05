import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import api from "../../../lib/api";
//zod schema
const schema = z.object({
  questId: z.string(),
});
export const POST = async (req: NextRequest, res: NextResponse) => {
  //validate request body
  const { questId } = schema.parse(req.body);
  const correlationId = "REPLACEME";
  const farquestApiKey = "REPLACEME";
  const authheader = "REPLACEME";
  // TODO: do the graphql silly stuff
  const resp = await api.quest.complete.post({
    questId: questId,
    correlationId: correlationId,
  }, {
    headers: {
      farquestapikey: farquestApiKey,
      authorization: `Bearer ${authheader}`,
    },
  });
  if (!resp.data) {
    return NextResponse.json({ error: "Could not get redirectUrl" });
  }
  return NextResponse.json({ status: resp.data.status });
};
