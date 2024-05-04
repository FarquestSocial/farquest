import type  { PrismaClient, Prisma } from "database";
import Logger from "../common/logger";  // Assuming you have a common Logger setup

export class QuestRepository {
  private readonly logger = Logger(QuestRepository.name);

  constructor(private readonly prisma: PrismaClient) {}

  async getQuestsForOrganizationWithFilter(
    organizationId: string,
    page: number,
    limit: number,
    filter: "ACTIVE" | "COMPLETE" | "ALL" | "NOT_STARTED" = "ALL"
  ) {
    try {
      const now = new Date();
      const conditions: Prisma.QuestsWhereInput[] = [];

      if (filter !== "ALL") {
        if (filter === "ACTIVE") {
          conditions.push({
            startsAt: { lte: now },
            endsAt: { gte: now },
          });
        }
        if (filter === "COMPLETE") {
          conditions.push({
            startsAt: { lte: now },
            endsAt: { lte: now },
          });
        }
        if (filter === "NOT_STARTED") {
          conditions.push({
            startsAt: { gt: now },
          });
        }
      }

      const quests = await this.prisma.quests.findMany({
        where: {
          organizationId,
          ...(conditions.length > 0 && { OR: conditions }),
        },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          questType: true,
        },
      });
      this.logger.info(`Retrieved quests for organization ${organizationId}`);
      return quests;
    } catch (error) {
      this.logger.error(`Failed to retrieve quests for organization ${organizationId}`, error);
      throw new Error("Database operation failed");
    }
  }

  async getQuestById(questId: string) {
    try {
      const quest = await this.prisma.quests.findUnique({
        where: {
          id: questId,
        },
      });
      this.logger.info(`Retrieved quest ${questId}`);
      return quest;
    } catch (error) {
      this.logger.error(`Failed to retrieve quest ${questId}`, error);
      throw new Error("Database operation failed");
    }
  }

  async getAllQuestTypes() {
    try {
      const questTypes = await this.prisma.questType.findMany({
        select: {
          id: true,
          name: true,
          description: true,
        },
      });
      this.logger.info("Retrieved all quest types");
      return questTypes;
    } catch (error) {
      this.logger.error("Failed to retrieve quest types", error);
      throw new Error("Database operation failed");
    }
  }

  async getQuestTypeFromId(questTypeId: string) {
    try {
      const questType = await this.prisma.questType.findUnique({
        where: {
          id: questTypeId,
        },
        select: {
          type: true,
        },
      });
      this.logger.info(`Retrieved quest type from ID ${questTypeId}`);
      return questType?.type;
    } catch (error) {
      this.logger.error(`Failed to retrieve quest type from ID ${questTypeId}`, error);
      throw new Error("Database operation failed");
    }
  }

  async createQuest(data: Prisma.QuestsCreateInput) {
    try {
      const quest = await this.prisma.quests.create({
        data: data,
      });
      this.logger.info(`Created quest ${quest.id}`);
      return quest;
    } catch (error) {
      this.logger.error("Failed to create quest", error);
      throw new Error("Database operation failed");
    }
  }

  async getNumberOfQuestCompletions(questId: string) {
    try {
      const count = await this.prisma.userQuestCompletion.count({
        where: {
          questId: questId,
        },
      });
      this.logger.info(`Retrieved number of completions for quest ${questId}: ${count}`);
      return count;
    } catch (error) {
      this.logger.error(`Failed to retrieve number of completions for quest ${questId}`, error);
      throw new Error("Database operation failed");
    }
  }
}
