import { QuestTypes } from "../common/types/quest.type";
import type { CompletionRepository } from "../completion/completion.repository";
import type { QuestRepository } from "./quest.repository";

export class QuestService {
  constructor(
    private readonly questRepository: QuestRepository,
    private readonly completionRepository: CompletionRepository
  ) {}

  //get all quests for an organization with filter and pagination
  getQuestsForOrganizationWithFilter(
    organizationId: string,
    page: number,
    limit: number,
    filter: "ACTIVE" | "COMPLETE" | "ALL" | "NOT_STARTED" = "ALL"
  ) {
    return this.questRepository.getQuestsForOrganizationWithFilter(
      organizationId,
      page,
      limit,
      filter
    );
  }

  async getQuestById(questId: string, userId?: string) {
    const quest = await this.questRepository.getQuestById(questId);
    let canComplete = false;
    if (userId) {
      canComplete = await this.completionRepository.canUserCompleteQuest(
        userId,
        questId
      );
    }
    return {
      quest,
      canComplete,
    };
  }

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
    startsAt: Date,
    endsAt: Date,
    questTypeId: string,
    validationCriteria: any,
    customMetadata?: any,
    customCallbackMetadata?: any
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
      startsAt,
      endsAt,
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
        {
          value: "nftIds",
          type: "string",
          isArray: true,
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
