import { NextResponse } from "next/server";
import { z } from "zod";
import api from "../../../lib/api";

//request schema
const schema = z.object({});

const GET = async (req: Request) => {

    NextResponse.json("Hello World");
};