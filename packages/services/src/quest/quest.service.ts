import Logger from "../common/logger";
import { QuestTypes } from "../common/types/quest.type";
import type { CompletionRepository } from "../completion/completion.repository";
import type { QuestRepository } from "./quest.repository";

/**
 * Service class for managing quests.
 */
export class QuestService {
  private readonly logger = Logger(QuestService.name);

  constructor(
    private readonly questRepository: QuestRepository,
    private readonly completionRepository: CompletionRepository
  ) {}

  /**
   * Retrieves quests for an organization with optional filtering.
   * @param organizationId - The ID of the organization.
   * @param page - The page number.
   * @param limit - The maximum number of quests to retrieve per page.
   * @param filter - The filter to apply to the quests (optional, defaults to "ALL").
   * @returns A promise that resolves to an array of quests.
   * @throws An error if the quests cannot be retrieved.
   */
  async getQuestsForOrganizationWithFilter(
    organizationId: string,
    page: number,
    limit: number,
    filter: "ACTIVE" | "COMPLETE" | "ALL" | "NOT_STARTED" = "ALL"
  ) {
    try {
      const quests =
        await this.questRepository.getQuestsForOrganizationWithFilter(
          organizationId,
          page,
          limit,
          filter
        );
      this.logger.info(`Retrieved quests for organization ${organizationId}`);
      return quests;
    } catch (error) {
      this.logger.error(
        `Failed to retrieve quests for organization ${organizationId}`,
        error
      );
      throw new Error("Unable to fetch quests");
    }
  }

  /**
   * Retrieves a quest by its ID.
   * @param questId - The ID of the quest.
   * @param userId - The ID of the user (optional).
   * @returns A promise that resolves to an object containing the quest and a flag indicating if the user can complete the quest.
   * @throws An error if the quest cannot be retrieved.
   */
  async getQuestById(questId: string, userId?: string) {
    try {
      const quest = await this.questRepository.getQuestById(questId);
      let canComplete = false;
      if (userId) {
        canComplete = await this.completionRepository.canUserCompleteQuest(
          userId,
          questId
        );
      }
      return { quest, canComplete };
    } catch (error) {
      this.logger.error(`Failed to retrieve quest ${questId}`, error);
      throw new Error("Unable to fetch quest details");
    }
  }

  /**
   * Retrieves all quest types.
   * @returns A promise that resolves to an array of quest types.
   * @throws An error if the quest types cannot be retrieved.
   */
  async getAllQuestTypes() {
    try {
      return await this.questRepository.getAllQuestTypes();
    } catch (error) {
      this.logger.error("Failed to retrieve all quest types", error);
      throw new Error("Unable to fetch quest types");
    }
  }

  /**
   * Creates a new quest.
   * @param organizationId - The ID of the organization.
   * @param name - The name of the quest.
   * @param description - The description of the quest.
   * @param image - The URL of the quest image.
   * @param startsAt - The start date and time of the quest.
   * @param endsAt - The end date and time of the quest.
   * @param questTypeId - The ID of the quest type.
   * @param validationCriteria - The validation criteria for completing the quest.
   * @param customMetadata - Custom metadata for the quest (optional).
   * @param customCallbackMetadata - Custom callback metadata for the quest (optional).
   * @returns A promise that resolves to the created quest.
   * @throws An error if the quest cannot be created.
   */
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
    try {
      console.log("getting quest type from id", questTypeId);
      const questType = await this.questRepository.getQuestTypeFromId(
        questTypeId
      );
      if (!questType) {
        this.logger.error("Quest type not found", { questTypeId });
        throw new Error("Invalid quest type");
      }

      console.log("found quest type", questType);

      // Additional validation logic here

      console.log("creating quest", {
        organizationId,
        name,
        description,
        image,
        startsAt,
        endsAt,
        questTypeId,
        validationCriteria,
        customMetadata,
        customCallbackMetadata,
      });
      const quest = await this.questRepository.createQuest({
        organization: { connect: { id: organizationId } },
        name,
        description,
        image,
        startsAt,
        endsAt,
        questType: { connect: { id: questTypeId } },
        validationCriteria,
        customMetadata: {},
        customCallbackMetadata: {},
      });
      this.logger.info(`Quest created successfully: ${quest.id}`);
      return quest;
    } catch (error) {
      this.logger.error("Failed to create quest", error);
      throw new Error("Unable to create quest");
    }
  }

  /**
   * Retrieves the number of completions for a quest.
   * @param questId - The ID of the quest.
   * @returns A promise that resolves to the number of completions.
   * @throws An error if the completion count cannot be retrieved.
   */
  async getNumberOfQuestCompletions(questId: string) {
    try {
      const count = await this.questRepository.getNumberOfQuestCompletions(
        questId
      );
      return count;
    } catch (error) {
      this.logger.error(
        `Failed to retrieve completion count for quest ${questId}`,
        error
      );
      throw new Error("Unable to fetch completion count");
    }
  }

  /**
   * Retrieves the required fields for a quest type.
   * @param questType - The quest type.
   * @returns An array of objects representing the required fields for the quest type.
   * @throws An error if the quest type is not found.
   */
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
