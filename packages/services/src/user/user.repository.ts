import type { Prisma, PrismaClient } from "database";

export class UserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  getUserQuestCompletion(userId: string, questId: string) {
    return this.prisma.userQuestCompletion.findUnique({
      where: {
        userId_questId: {
          userId: userId,
          questId: questId,
        },
      },
    });
  }

  completeQuest(userId: string, questId: string) {
    return this.prisma.userQuestCompletion.create({
      data: {
        userId: userId,
        questId: questId,
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
