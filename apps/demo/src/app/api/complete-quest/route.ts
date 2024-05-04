import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import api from "../../../../lib/api";
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
  await api.session({
    correlatedId: correlationId
  }).post({
    correlatedId: correlationId,
  }, {
    headers: {
      farquestapikey: farquestApiKey,
      authorization: `Bearer ${authheader}`,
    },
  });

  //call completion service
  const response = await fetch(
    `${process.env.BASE_URL}/completion/${questId}/server-sent`,
    {
      method: "POST",
      headers: {
        farquestapikey: `${Bun.env.FARQUEST_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questId: questId,
      }),
    }
  );
  return NextResponse.json(await response.json());
};
