import Session from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import api from "@/lib/api";

// Zod schema for input validation
const schema = z.object({
  questId: z.string(),
});

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const session = await Session.fromRequest(req);
    const { questId } = schema.parse(req.body);

  const $ = await api.quest.get({})

  return NextResponse.json(session.toJSON());
};
