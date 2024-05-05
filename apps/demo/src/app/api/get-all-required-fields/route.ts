export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import api from "@/lib/api";
import type { IQuestTypeFieldsResponse } from "@/utils/types";

const querySchema = z.object({
  id: z.string(),
});

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    // Parse and validate the query string parameters
    const queryParams = querySchema.parse(
      Object.fromEntries(req.nextUrl.searchParams)
    );

    // API call using the validated id
    const resp = await api.quest.requiredFields({ id: queryParams.id }).get();

    // Check if the response has data and handle cases where it might not
    if (!resp.data) {
      console.error("No data found for ID:", queryParams.id);
      return NextResponse.json(
        { error: "No quest type fields available for the provided ID" },
        { status: 404 }
      );
    }

    const data = resp.data as IQuestTypeFieldsResponse;
    return NextResponse.json(data);
  } catch (error) {
    // Handling Zod validation errors specifically
    if (error instanceof z.ZodError) {
      console.error("Validation error on input:", error.flatten());
      return NextResponse.json(
        { error: "Invalid query parameters", details: error.flatten() },
        { status: 400 }
      );
    }

    // Log general errors and return a generic error message
    console.error("Failed to fetch quest type fields:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
