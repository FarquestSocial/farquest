import { NextRequest, NextResponse } from "next/server";
import Session from "@/lib/session";

export const GET = async (req: NextRequest) => {
  try {
    // Initialize session from request
    const session = await Session.fromRequest(req);
    console.log("sesh userid", session);
    if (session && session.userId) {
      // Assuming `userId` determines a valid session
      console.log("User session:", session);
      return new NextResponse(JSON.stringify({ user: session }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      console.log("No active session found.");
      return new NextResponse(JSON.stringify({ user: null }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

export default GET;
