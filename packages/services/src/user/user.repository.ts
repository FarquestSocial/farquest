import type { Prisma, PrismaClient } from "database";

export class UserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  getUserQuestCompletion(userId: string, questId:string) {
    return this.prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        questCompletion: true,
      },
    });
  }
  createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: data,
    });
  }

  getUserCorelationId(userId: string) {
    return this.prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        corelationId: true,
      },
    });
  }

  getUserById(userId: string) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
}
