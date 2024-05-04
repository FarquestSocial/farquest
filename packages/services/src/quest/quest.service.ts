import { QuestTypes } from "../common/types/quest.type";
import type { QuestRepository } from "./quest.repository";

export class QuestService {
	constructor(private readonly questRepository: QuestRepository) {}
	
  //get all quests for an organization with filter and pagination
  
  //get all quest types
	//called first
	async getAllQuestTypes() {
		return this.questRepository.getAllQuestTypes();
	}

	//called third
	//create a quest
	async createQuest(
		organizationId: string,
		name: string,
		description: string,
		image: string, //url
		validationCriteria: unknown,
		questTypeId: string,
		customMetadata?: unknown,
		customCallbackMetadata?: unknown,
	) {
		const questType =
			await this.questRepository.getQuestTypeFromId(questTypeId);
		if (!questType) {
			console.error("Quest type not found");
			return null;
		}
		const validationCriteriaSchema =
			await this.getQuestTypeRequiredFields(questType);
		//@TODO:validate the validation criteria passed

		//validate the validation criteria passed
		return this.questRepository.createQuest({
			organization: {
				connect: {
					id: organizationId,
				},
			},
			name,
			description,
			image,
			validationCriteria,
			questType: {
				connect: {
					id: questTypeId,
				},
			},
			customMetadata,
			customCallbackMetadata,
		});
	}

	//get number of quest completions for quest id
	async getNumberOfQuestCompletions(questId: string) {
		return this.questRepository.getNumberOfQuestCompletions(questId);
	}

	//validate quest criteria

	//called second
	//get required field for quest type
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
					value: "castId",
					type: "string",
					isArray: false,
					isRequired: true,
				},
			];
		} else if ($ === QuestTypes.FollowQuest) {
			return [
				{
					value: "farCastId",
					type: "string",
					isArray: false,
					isRequired: true,
				},
			];
		} else if ($ === QuestTypes.BioKeywordQuest) {
			return [
				{
					value: "keywords",
					type: "string",
					isArray: true,
					isRequired: true,
				},
			];
		} else if ($ === QuestTypes.ProfilePictureQuest) {
			return [
				{
					value: "targetImageUrl",
					type: "string",
					isArray: false,
					isRequired: true,
				},
			];
		} else if ($ === QuestTypes.OwensNftsQuest) {
			return [
				{
					value: "contractAddress",
					type: "string",
					isArray: false,
					isRequired: true,
				},
				{
					value: "nftIds",
					type: "string",
					isArray: true,
					isRequired: true,
				},
			];
		} else if ($ === QuestTypes.OwensERC20Quest) {
			return [
				{
					value: "contractAddress",
					type: "string",
					isArray: false,
					isRequired: true,
				},
			];
		} else {
			throw new Error("Quest type not found");
		}
	}
}
