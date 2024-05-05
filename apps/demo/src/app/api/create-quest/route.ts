import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import api from "../../../lib/api";

const schema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string(),
  startsAt: z.string(),
  endsAt: z.string(),
  questTypeId: z.string(),
  validationCriteria: z.any(),
  customMetadata: z.optional(z.any()),
  customCallbackMetadata: z.optional(z.any()),
});

export const POST = async (req: NextRequest) => {
  console.log("Creating quest...");
  try {
    const _body = await req.json();
    const body = schema.parse(_body);

    console.log("Creating quest with data:", body);

    const startsAtDate = new Date(body.startsAt);
    const endsAtDate = new Date(body.endsAt);

    const bodyObj = {
      name: body.name,
      description: body.description,
      image: body.image,
      startsAt: startsAtDate.toISOString(),
      endsAt: endsAtDate.toISOString(),
      questTypeId: body.questTypeId,
      validationCriteria: body.validationCriteria,
      customMetadata: body.customMetadata,
      customCallbackMetadata: body.customCallbackMetadata,
    };

    console.log("body", bodyObj);

    const quest = await api.quest.create.post(bodyObj, {
      headers: {
        farquestapikey: "1fe5ce.afbccea670f467da160c672be0813fc0",
      },
    });

    console.log("Quest created:", quest);

    if (!quest.data) {
      console.error("Failed to create quest:", quest);
      return NextResponse.json({ error: "Could not create quest" });
    }

    console.log("Quest created successfully:", quest);
    return NextResponse.json({ status: quest.status }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.flatten());
      return NextResponse.json(
        { error: "Invalid input data", details: error.flatten() },
        { status: 400 }
      );
    }
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
