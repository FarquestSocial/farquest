import { NextRequest, NextResponse } from "next/server";
import api from "@/lib/api";
import type { IQuestType } from "@/utils/types";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
    const resp = await api.quest.types.get();
    const data = resp.data as IQuestType[];
    return NextResponse.json(data);

}