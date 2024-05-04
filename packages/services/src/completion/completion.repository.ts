import type { PrismaClient } from "database";



export class CompletionRepository{
    constructor(private readonly prisma: PrismaClient) {}
}