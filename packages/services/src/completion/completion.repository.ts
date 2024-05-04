import type { PrismaClient } from "database";
import { plainToInstance } from "class-transformer";
//auto like retweet and post stretch goal
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
  getQuestValidationCriteria = async <T>(
    questId: string,
    type: new () => T
  ): Promise<T> => {
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
    return plainToInstance(type, criteria.validationCriteria);
  };
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
  async getQuestType(questId: string) {
    const data = await this.prisma.quests.findUnique({
      where: {
        id: questId,
      },
      select: {
        questType: {
          select: {
            type: true,
          }
        }
      },
    });
    if (!data) {
      throw new Error("Quest not found");
    }
    return data.questType.type;
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
