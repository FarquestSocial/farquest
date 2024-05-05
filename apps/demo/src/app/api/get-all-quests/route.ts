import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import api from "../../../lib/api";
import type { IQuest } from "@/utils/types";

// const querySchema = z.object({
//   page: z.string().transform((v) => (v ? parseInt(v) : 1)),
//   filter: z.optional(z.enum(["ACTIVE", "COMPLETE", "ALL", "NOT_STARTED"])),
// });

export const GET = async (req: NextRequest) => {
  try {
    //const body = querySchema.parse(req.nextUrl.searchParams);
    const quests = await api.quest
      .list({ page: 1 })({ filter: "ALL" })
      .get({
        headers: {
          farquestapikey: "1fe5ce.afbccea670f467da160c672be0813fc0",
        },
      });

    const data = quests.data as IQuest[];

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error on input:", error.flatten());
      return NextResponse.json(
        { error: "Invalid query parameters", details: error.flatten() },
        { status: 400 }
      );
    }
    console.error("Failed to fetch quests:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
