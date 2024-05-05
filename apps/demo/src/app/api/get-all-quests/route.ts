import { NextResponse } from "next/server";
import { z } from "zod";
import api from "../../../lib/api";
import type { IQuest } from "@/utils/types";

const schema = z.object({
    page: z.number(),
    filter: z.optional(z.union([z.literal("ACTIVE"), z.literal("COMPLETE"), z.literal("ALL"), z.literal("NOT_STARTED")])),
  });

const GET = async (req: Request) => {
    const body = schema.parse(req.body);
    const quests = await api.quest.list({page: body.page})({filter: body.filter ?? "ALL"}).get({
        headers: {
            farquestapikey: Bun.env.FARQUEST_API_KEY,
        },
    });
    const data = quests.data as IQuest[];
    return NextResponse.json(data);
};