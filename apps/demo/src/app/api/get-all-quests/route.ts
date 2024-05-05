import { NextResponse } from "next/server";
import { z } from "zod";
import api from "../../../lib/api";

const schema = z.object({
    page: z.number(),
    take: z.number(),
    filter: z.optional(z.union([z.literal("ACTIVE"), z.literal("COMPLETE"), z.literal("ALL"), z.literal("NOT_STARTED")])),
  });

const GET = async (req: Request) => {
    const body = schema.parse(req.body);
    // const quests = await api.quest.list.get(
    //     { page: body.page, take: body.take, filter: body.filter ?? "ALL" }
    // );
    // return NextResponse.json(quests);
    // NextResponse.json("Hello World");
};