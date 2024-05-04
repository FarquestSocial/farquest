import type { Prisma, PrismaClient } from "database";

export class QuestRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async getAllQuestTypes() {
    return this.prisma.questType.findMany({
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
  }
  async createQuest(data: Prisma.QuestsCreateInput) {
    return this.prisma.quests.create({
      data: data,
    });
  }
  async getNumberOfQuestCompletions(questId: string) {
    return this.prisma.userQuestCompletion.count({
      where: {
        questId: questId,
      },
    });
  }
}
