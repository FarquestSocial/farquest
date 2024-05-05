import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import api from "../../../lib/api";

//schema for input validation
const schema = z.object({
    name: z.string(),
    description: z.string(),
    image: z.string(),
    startsAt: z.string({
        // format: "date-time",
    }),
    endsAt: z.string({
        // format: "date-time",
    }),
    questTypeId: z.string(),
    validationCriteria: z.any(),
    customMetadata: z.optional(z.any()),
    customCallbackMetadata: z.optional(z.any()),
});
export const POST = async (req: NextRequest, res: NextResponse) => {
    //@TODO call api to create quest
    const body = schema.parse(req.body);
    
    // return NextResponse.json(quest);

    // return NextResponse.json({ message: "Quest created" });
};