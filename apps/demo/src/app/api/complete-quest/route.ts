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
    const _body = await req.json();
    const { questId } = schema.parse(_body);

    // Complete the quest with the provided questId
    console.log("Completing quest with ID:", questId);
    console.log("User ID:", session.userId);
    // console.log("API Key:", Bun.env.FARQUEST_API_KEY);
    const resp = await api.quest.complete.post(
      {
        questId: questId,
        correlationId: session.userId,
      },
      {
        headers: {
          farquestapikey: "1fe5ce.afbccea670f467da160c672be0813fc0",
        },
      }
    );

    console.log("Quest completion response:", resp);

    // Check if the quest completion was successful
    if (!resp.data) {
      return new NextResponse(
        JSON.stringify({ error: "Could not complete quest" }),
        {
          status: 500,
        }
      );
    }

    // Return success response
    return new NextResponse(JSON.stringify({ status: resp.data.status }));
  } catch (error) {
    console.error("Failed to complete quest:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
      }
    );
  }
};

// curl --request POST \
//   --url http://localhost:3003/api/complete-quest \
//   --header 'Content-Type: application/json' \
//   --data '{"questId": "clvsukhvl000d1374wqncyy8g"}'
