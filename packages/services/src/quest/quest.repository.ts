import type { Prisma, PrismaClient } from "database";
import Logger from "../common/logger"; // Assuming you have a common Logger setup

/**
 * Repository class for managing quests.
 */
export class QuestRepository {
	private readonly logger = Logger(QuestRepository.name);

	constructor(private readonly prisma: PrismaClient) {}

	/**
	 * Retrieves quests for an organization with optional filtering.
	 * @param organizationId - The ID of the organization.
	 * @param page - The page number.
	 * @param limit - The maximum number of quests to retrieve per page.
	 * @param filter - The filter to apply to the quests (optional, defaults to "ALL").
	 * @returns A list of quests that match the specified criteria.
	 * @throws Error if the database operation fails.
	 */
	async getQuestsForOrganizationWithFilter(
		organizationId: string,
		page: number,
		limit: number,
		filter: "ACTIVE" | "COMPLETE" | "ALL" | "NOT_STARTED" = "ALL"
	) {
		try {
			const now = new Date();
			let condition: Prisma.QuestsWhereInput = {};

			switch (filter) {
				case "ACTIVE":
					condition = {
						startsAt: { lte: now },
						endsAt: { gte: now },
					};
					break;
				case "COMPLETE":
					condition = {
						startsAt: { lte: now },
						endsAt: { lte: now },
					};
					break;
				case "NOT_STARTED":
					condition = {
						startsAt: { gt: now },
					};
					break;
				default:
					// For "ALL", we don't apply any specific condition related to dates
					break;
			}

			const quests = await this.prisma.quests.findMany({
				where: {
					organizationId,
					...condition,
				},
				skip: (page - 1) * limit,
				take: 20,
				include: {
					questType: true,
				},
			});
			this.logger.info(`Retrieved quests for organization ${organizationId}`);
			return quests;
		} catch (error) {
			this.logger.error(
				`Failed to retrieve quests for organization ${organizationId}`,
				error
			);
			throw new Error("Database operation failed");
		}
	}

	/**
	 * Retrieves a quest by its ID.
	 * @param questId - The ID of the quest.
	 * @returns The quest with the specified ID.
	 * @throws Error if the database operation fails.
	 */
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

	/**
	 * Retrieves all quest types.
	 * @returns A list of all quest types.
	 * @throws Error if the database operation fails.
	 */
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

	/**
	 * Retrieves the type of a quest from its ID.
	 * @param questTypeId - The ID of the quest type.
	 * @returns The type of the quest with the specified ID.
	 * @throws Error if the database operation fails.
	 */
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
			this.logger.error(
				`Failed to retrieve quest type from ID ${questTypeId}`,
				error
			);
			throw new Error("Database operation failed");
		}
	}

	/**
	 * Creates a new quest.
	 * @param data - The data for the new quest.
	 * @returns The created quest.
	 * @throws Error if the database operation fails.
	 */
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

	/**
	 * Retrieves the number of completions for a quest.
	 * @param questId - The ID of the quest.
	 * @returns The number of completions for the quest.
	 * @throws Error if the database operation fails.
	 */
	async getNumberOfQuestCompletions(questId: string) {
		try {
			const count = await this.prisma.userQuestCompletion.count({
				where: {
					questId: questId,
				},
			});
			this.logger.info(
				`Retrieved number of completions for quest ${questId}: ${count}`
			);
			return count;
		} catch (error) {
			this.logger.error(
				`Failed to retrieve number of completions for quest ${questId}`,
				error
			);
			throw new Error("Database operation failed");
		}
	}
}
