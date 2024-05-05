export const dynamic = "force-dynamic";

import Session from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import api from "@/lib/api";
import type { IQuestResponse } from "@/utils/types";
import { BASE_URL } from "@/constants/base-url";

// Zod schema for input validation
const querySchema = z.object({
  questId: z.string(),
});

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    // Parse and validate the query string parameters
    const queryParams = querySchema.parse(
      Object.fromEntries(req.nextUrl.searchParams)
    );
    const session = await Session.fromRequest(req);

    if (!session.userId) {
      console.error("User session not found for request:", req);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const res = await fetch(`${BASE_URL}/quest/${queryParams.questId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Farquestapikey: "1fe5ce.afbccea670f467da160c672be0813fc0",
      },
    });

    const resp = await res.json();
    if (!resp.quest) {
      console.error("No quest data found for quest ID:", queryParams.questId);
      return NextResponse.json({ error: "Quest not found" }, { status: 404 });
    }

    const data = resp.quest as IQuestResponse;
    return NextResponse.json(data);
  } catch (error) {
    // Handle Zod validation errors specifically
    if (error instanceof z.ZodError) {
      console.error("Validation error on input:", error.flatten());
      return NextResponse.json(
        { error: "Invalid query parameters", details: error.flatten() },
        { status: 400 }
      );
    }

    // Log general errors
    console.error("Failed to retrieve quest data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
