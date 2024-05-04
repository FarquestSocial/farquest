import type { PrismaClient } from "database";

export class CompletionRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async canUserCompleteQuest(userId: string, questId: string) {
    const fid = await this.getUserFid(userId);
    if (!fid) {
      return false;
    }
    const hasCompleted = await this.hasCompletedQuest(userId, questId);
    if (hasCompleted) {
      return false;
    }
  }
  async getQuestValidationCriteria(questId: string) {
    const criteria = await this.prisma.quests
      .findUniqueOrThrow({
        where: {
          id: questId,
        },
        select: {
          validationCriteria: true,
        },
      })
      .catch((e) => {
        throw new Error("Quest not found");
      });
    if (!criteria.validationCriteria) {
      throw new Error("Quest does not have validation criteria");
    }
    return criteria.validationCriteria;
  }
  //bad dont do this
  async getUserFid(userId: string) {
    return this.prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        fid: true,
      },
    });
  }
  async hasCompletedQuest(userId: string, questId: string) {
    const hasCompleted = await this.prisma.userQuestCompletion.findUnique({
      where: {
        userId_questId: {
          userId: userId,
          questId: questId,
        },
      },
      select: {
        id: true,
      },
    });
    if (hasCompleted) {
      return true;
    }
    return false;
  }
  async completeQuest(userId: string, questId: string) {
    return this.prisma.userQuestCompletion.create({
      data: {
        userId: userId,
        questId: questId,
      },
    });
  }
}
