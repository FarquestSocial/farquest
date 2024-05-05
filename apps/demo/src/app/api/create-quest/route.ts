import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import api from "../../../lib/api";

//shema for input validation
const schema = z.object({});
export const POST = async (req: NextRequest, res: NextResponse) => {
    //@TODO call api to create quest

    return NextResponse.json({ message: "Quest created" });
};