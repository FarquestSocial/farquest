import type { PrismaClient } from "database";



export class  UserRepostory {
    constructor(private readonly prisma: PrismaClient) {}


    getUserById(userId: string) {
        return this.prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
    }
}