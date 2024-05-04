import type { BioKeywordQuestValidationCriteria } from "../../common/types/quest.type";
import type { AirStackService } from "../../lib/airstack.service";
import type { CompletionRepository } from "../completion.repository";

export class BioKeywordQuestHandler {
  constructor(
    private readonly completionRepository: CompletionRepository,
    private readonly airStackService: AirStackService
  ) {}
  async completeQuest(userId: string, questId: string): Promise<Boolean> {
    //validate that a user has liked a specific cast
    console.log(`BioKeywordQuestHandler: ${userId} ${questId}`);

    //get the validation schema
    const validationCriteria =
      await this.completionRepository.getQuestValidationCriteria(questId);
      

    return true;
  }
}
