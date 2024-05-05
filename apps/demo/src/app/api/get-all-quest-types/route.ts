import { NextRequest, NextResponse } from "next/server";
import api from "@/lib/api";


export const GET = async (req: NextRequest): Promise<NextResponse> => {

    const resp = await api.quest.types({
        
    }).get({
        query: {
            fields: "name"
        }
    });

    return NextResponse.json(resp.data);

}