import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import api from "../../../lib/api";

const schema = z.object({
    name: z.string(),
    description: z.string(),
    image: z.string(),
    startsAt: z.coerce.date(),
    endsAt: z.coerce.date(),
    questTypeId: z.string(),
    validationCriteria: z.any(),
    customMetadata: z.optional(z.any()),
    customCallbackMetadata: z.optional(z.any()),
});
export const POST = async (req: NextRequest, res: NextResponse) => {
    const body = schema.parse(req.body);
    
    const quest = await api.quest.create.post({
        name: body.name,
        description: body.description,
        image: body.image,
        startsAt: body.startsAt.toISOString(),
        endsAt: body.endsAt.toISOString(),
        questTypeId: body.questTypeId, 
        validationCriteria: body.validationCriteria,
    }, {
        headers: {
            farquestapikey: Bun.env.FARQUEST_API_KEY,
        },
    });
    if (!quest.data) {
        return NextResponse.json({ error: "Could not create quest" });
    }
    return NextResponse.json({status: quest.status});
};