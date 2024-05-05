import { plainToInstance } from "class-transformer";
import type { PrismaClient } from "database";

/**
 * Repository class for handling quest completion related operations.
 */
export class CompletionRepository {
  /**
   * Creates an instance of CompletionRepository.
   * @param prisma - The Prisma client instance.
   */
  constructor(private readonly prisma: PrismaClient) {}

  /**
   * Checks if a user can complete a quest.
   * @param userId - The ID of the user.
   * @param questId - The ID of the quest.
   * @returns A Promise that resolves to a boolean indicating if the user can complete the quest.
   */
  async canUserCompleteQuest(
    userId: string,
    questId: string
  ): Promise<boolean> {
    const fid = await this.getUserFid(userId);
    if (!fid) {
      return false;
    }
    const hasCompleted = await this.hasCompletedQuest(userId, questId);
    if (hasCompleted) {
      return false;
    }
    return true;
  }

  /**
   * Retrieves the correlation ID associated with a user.
   * @param userId - The ID of the user.
   * @returns A Promise that resolves to the correlation ID of the user.
   * @throws Error if the user is not found.
   */
  getCorrelationIdFromUserId = async (userId: string) => {
    const $ = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        correlationId: true,
      },
    });
    if (!$) {
      throw new Error("User not found");
    }
    return $.correlationId;
  };

  /**
   * Retrieves the callback URL and callback metadata for a quest.
   * @param questId - The ID of the quest.
   * @returns A Promise that resolves to an object containing the callback URL and metadata.
   * @throws Error if the quest is not found.
   */
  getCallBackUrlAndCallBackMetadataForQuest = async (questId: string) => {
    const $ = await this.prisma.quests.findUnique({
      where: {
        id: questId,
      },
      select: {
        customCallbackMetadata: true,
        organization: {
          select: {
            callbackUrl: true,
          },
        },
      },
    });
    if (!$) {
      throw new Error("Quest not found");
    }
    return {
      callback: $.organization.callbackUrl,
      metadata: $.customCallbackMetadata,
    };
  };

  /**
   * Retrieves the wallet address of a user.
   * @param userId - The ID of the user.
   * @returns A Promise that resolves to the wallet address of the user.
   * @throws Error if the user is not found.
   */
  getUserWalletAddress = async (userId: string) => {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        ethAddress: true,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user.ethAddress;
  };

  /**
   * Retrieves the validation criteria for a quest.
   * @param questId - The ID of the quest.
   * @param type - The type of the validation criteria.
   * @returns A Promise that resolves to the validation criteria of the quest.
   * @throws Error if the quest is not found or if it does not have validation criteria.
   */
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

  /**
   * Retrieves the FID (Firebase ID) of a user.
   * @param userId - The ID of the user.
   * @returns A Promise that resolves to the FID of the user.
   * @throws Error if the user is not found.
   */
  async getUserFid(userId: string) {
    const $ = await this.prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        fid: true,
      },
    });
    if (!$) {
      throw new Error("User not found");
    }
    return $.fid;
  }

  /**
   * Retrieves the type of a quest.
   * @param questId - The ID of the quest.
   * @returns A Promise that resolves to the type of the quest.
   * @throws Error if the quest is not found.
   */
  async getQuestType(questId: string) {
    const data = await this.prisma.quests.findUnique({
      where: {
        id: questId,
      },
      select: {
        questType: {
          select: {
            type: true,
          },
        },
      },
    });
    if (!data) {
      throw new Error("Quest not found");
    }
    return data.questType.type;
  }

  /**
   * Checks if a user has completed a quest.
   * @param userId - The ID of the user.
   * @param questId - The ID of the quest.
   * @returns A Promise that resolves to a boolean indicating if the user has completed the quest.
   */
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

  /**
   * Marks a quest as completed for a user.
   * @param userId - The ID of the user.
   * @param questId - The ID of the quest.
   * @returns A Promise that resolves when the quest is marked as completed.
   */
  async completeQuest(userId: string, questId: string) {
    return this.prisma.userQuestCompletion.create({
      data: {
        userId: userId,
        questId: questId,
      },
    });
  }
}
