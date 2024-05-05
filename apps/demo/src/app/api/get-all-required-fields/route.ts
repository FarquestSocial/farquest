
import {  NextResponse } from "next/server";
import { z } from "zod";
import api from "@/lib/api";
import type { IQuestTypeFieldsResponse } from "@/utils/types";

const schema = z.object({
    id: z.string(),
});

export const GET = async (req: Request) => {
    const body = schema.parse(req.body);
    const resp = await api.quest.requiredFields({ id: body.id }).get();
    const data = resp.data as IQuestTypeFieldsResponse;
    return NextResponse.json(data);

}