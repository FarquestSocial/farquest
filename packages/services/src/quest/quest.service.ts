import { isArray } from "class-validator";
import { QuestTypes } from "../common/types/quest.type";
import type { QuestRepository } from "./quest.repository";
import type { Prisma } from "database";

export class QuestService {
  constructor(private readonly questRepository: QuestRepository) {}
  //get all quest types
  async getAllQuestTypes() {
    return this.questRepository.getAllQuestTypes();
  }

  //create a quest
  async createQuest(
    organizationId: string,
    name: string,
    description: string,
    image: string,
    validationCriteria: any,
    questTypeId: string,
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

  //get required field for quest type
  async getQuestTypeRequiredFields(questType: string) {
    const $ = await this.questRepository.getQuestTypeFromId(questType);
    if (!$) {
      return null;
    }
    if (
      $ == QuestTypes.LikeQuest ||
      $ == QuestTypes.CommentQuest ||
      $ == QuestTypes.ReCastQuest
    ) {
      return [
        {
          value: "castId",
          type: "string",
          isArray: false,
          isRequired: true,
        },
      ];
    } else if ($ == QuestTypes.FollowQuest) {
      return [
        {
          value: "farCastId",
          type: "string",
          isArray: false,
          isRequired: true,
        },
      ];
    } else if ($ == QuestTypes.BioKeywordQuest) {
      return [
        {
          value: "keywords",
          type: "string",
          isArray: true,
          isRequired: true,
        },
      ];
    }
  }
}
