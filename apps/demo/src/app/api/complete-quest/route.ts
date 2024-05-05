import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import api from "@/lib/api";
import Session from "@/lib/session";

// Zod schema for input validation
const schema = z.object({
  questId: z.string(),
});

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    // Extract and validate session
    const session = await Session.fromRequest(req);
    if (!session.userId) {
      return new NextResponse(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }
    

    // Validate request body using Zod
    const { questId } = schema.parse(req.body);

    // Complete the quest with the provided questId
    const resp = await api.quest.complete.post(
      {
        questId: questId,
        correlationId: session.userId,
      },
      {
        headers: {
          'farquestapikey': Bun.env.FARQUEST_API_KEY,
        },
      }
    );

    // Check if the quest completion was successful
    if (!resp.data) {
      return new NextResponse(JSON.stringify({ error: "Could not complete quest" }), {
        status: 500,
      });
    }

    // Return success response
    return new NextResponse(JSON.stringify({ status: resp.data.status }));
  } catch (error) {
    console.error("Failed to complete quest:", error);
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};