import type { Prisma, PrismaClient } from "database";

export class QuestRepository {
  constructor(private readonly prisma: PrismaClient) {}

  //get all quests for an organization with filter and pagination
  async getQuestsForOrganizationWithFilter(
    organizationId: string,
    page: number,
    limit: number,
    filter: 'ACTIVE' | 'COMPLETE' | 'ALL' | 'NOT_STARTED' = 'ALL'
  ) {
    const now = new Date();
    const conditions: Prisma.QuestsWhereInput[] = [];

    if (filter !== 'ALL') {
      if (filter === 'ACTIVE') {
        conditions.push({
          startsAt: { lte: now },
          endsAt: { gte: now },
        });
      }
      if (filter === 'COMPLETE') {
        conditions.push({
          userCompletions: {
            some: {}, // At least one completion
          }
        });
      }
      if (filter === 'NOT_STARTED') {
        conditions.push({
          startsAt: { gt: now } // Has not started yet
        });
      }
    }

    return this.prisma.quests.findMany({
      where: {
        organizationId,
        ...(conditions.length > 0 && { OR: conditions }),
      },
      skip: (page - 1) * limit,
      take: limit,
      include: {
        questType: true, // Assuming you might want details about the quest type
        userCompletions: filter === 'COMPLETE' // Include completions if requested
      },
    });
  }

  async getAllQuestTypes() {
    return this.prisma.questType.findMany({
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
  }
  async getQuestTypeFromId(questTypeId: string) {
    const $ = await this.prisma.questType.findUnique({
      where: {
        id: questTypeId,
      },
      select: {
        type: true,
      },
    });
    return $?.type;
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
