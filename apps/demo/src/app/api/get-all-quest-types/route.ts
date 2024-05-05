import { NextRequest, NextResponse } from "next/server";
import api from "@/lib/api";
import type { IQuestType } from "@/utils/types";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const resp = await api.quest.types.get();
    if (!resp.data || resp.data.length === 0) {
      console.error("No quest types found");
      return NextResponse.json(
        { error: "No quest types available" },
        { status: 404 }
      );
    }

    const data = resp.data as IQuestType[];
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to retrieve quest types:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
