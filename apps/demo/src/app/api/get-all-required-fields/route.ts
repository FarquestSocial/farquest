
import {  NextResponse } from "next/server";
import { z } from "zod";
import api from "@/lib/api";

const schema = z.object({
    id: z.string(),
});

export const GET = async (req: Request) => {
    const body = schema.parse(req.body);
    const resp = await api.quest.requiredFields({ id: body.id }).get();
    
    return NextResponse.json(resp.data);

}