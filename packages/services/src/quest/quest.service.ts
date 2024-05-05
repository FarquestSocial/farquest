import Logger from "../common/logger";
import { QuestTypes } from "../common/types/quest.type";
import type { CompletionRepository } from "../completion/completion.repository";
import type { QuestRepository } from "./quest.repository";

export class QuestService {
	private readonly logger = Logger(QuestService.name);

	constructor(
		private readonly questRepository: QuestRepository,
		private readonly completionRepository: CompletionRepository,
	) {}

	async getQuestsForOrganizationWithFilter(
		organizationId: string,
		page: number,
		limit: number,
		filter: "ACTIVE" | "COMPLETE" | "ALL" | "NOT_STARTED" = "ALL",
	) {
		try {
			const quests =
				await this.questRepository.getQuestsForOrganizationWithFilter(
					organizationId,
					page,
					limit,
					filter,
				);
			return quests;
		} catch (error) {
			this.logger.error(
				`Failed to retrieve quests for organization ${organizationId}`,
				error,
			);
			throw new Error("Unable to fetch quests");
		}
	}

	async getQuestById(questId: string, userId?: string) {
		try {
			const quest = await this.questRepository.getQuestById(questId);
			let canComplete = false;
			if (userId) {
				canComplete = await this.completionRepository.canUserCompleteQuest(
					userId,
					questId,
				);
			}
			return { quest, canComplete };
		} catch (error) {
			this.logger.error(`Failed to retrieve quest ${questId}`, error);
			throw new Error("Unable to fetch quest details");
		}
	}

	async getAllQuestTypes() {
		try {
			return await this.questRepository.getAllQuestTypes();
		} catch (error) {
			this.logger.error("Failed to retrieve all quest types", error);
			throw new Error("Unable to fetch quest types");
		}
	}

	async createQuest(
		organizationId: string,
		name: string,
		description: string,
		image: string, //url
		startsAt: Date,
		endsAt: Date,
		questTypeId: string,
		validationCriteria: any,
		customMetadata?: any,
		customCallbackMetadata?: any,
	) {
		try {
			const questType =
				await this.questRepository.getQuestTypeFromId(questTypeId);
			if (!questType) {
				this.logger.error("Quest type not found", { questTypeId });
				throw new Error("Invalid quest type");
			}

			// Additional validation logic here

			const quest = await this.questRepository.createQuest({
				organization: { connect: { id: organizationId } },
				name,
				description,
				image,
				startsAt,
				endsAt,
				questType: { connect: { id: questTypeId } },
				validationCriteria,
				customMetadata,
				customCallbackMetadata,
			});
			this.logger.info(`Quest created successfully: ${quest.id}`);
			return quest;
		} catch (error) {
			this.logger.error("Failed to create quest", error);
			throw new Error("Unable to create quest");
		}
	}

	async getNumberOfQuestCompletions(questId: string) {
		try {
			const count =
				await this.questRepository.getNumberOfQuestCompletions(questId);
			return count;
		} catch (error) {
			this.logger.error(
				`Failed to retrieve completion count for quest ${questId}`,
				error,
			);
			throw new Error("Unable to fetch completion count");
		}
	}

	async getQuestTypeRequiredFields(questType: string) {
		const $ = await this.questRepository.getQuestTypeFromId(questType);
		if (!$) {
			return null;
		}
		if (
			$ === QuestTypes.LikeQuest ||
			$ === QuestTypes.CommentQuest ||
			$ === QuestTypes.ReCastQuest
		) {
			return [
				{
					value: "warpCastUrl",
					type: "string",
					isArray: false,
					isRequired: true,
				},
			];
		}
		if ($ === QuestTypes.FollowQuest) {
			return [
				{
					value: "farCastId",
					type: "string",
					isArray: false,
					isRequired: true,
				},
			];
		}
		if ($ === QuestTypes.BioKeywordQuest) {
			return [
				{
					value: "keywords",
					type: "string",
					isArray: true,
					isRequired: true,
				},
			];
		}
		if ($ === QuestTypes.ProfilePictureQuest) {
			return [
				{
					value: "targetImageUrl",
					type: "string",
					isArray: false,
					isRequired: true,
				},
			];
		}
		if ($ === QuestTypes.OwnsNftsQuest) {
			return [
				{
					value: "contractAddress",
					type: "string",
					isArray: false,
					isRequired: true,
				},
			];
		}
		if ($ === QuestTypes.OwnsERC20Quest) {
			return [
				{
					value: "contractAddress",
					type: "string",
					isArray: false,
					isRequired: true,
				},
			];
		}
		throw new Error("Quest type not found");
	}
}
