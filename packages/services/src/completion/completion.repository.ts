import type { PrismaClient } from "database";

export class CompletionRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async completeQuest(userId: string, questId: string) {
    return this.prisma.userQuestCompletion.create({
      data: {
        userId: userId,
        questId: questId,
      },
    });
  }
}
