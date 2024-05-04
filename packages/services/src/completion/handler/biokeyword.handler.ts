import { BioKeywordQuestValidationCriteria } from "../../common/types/quest.type";
import type { AirStackService } from "../../lib/airstack.service";
import type { CompletionRepository } from "../completion.repository";

export class BioKeywordQuestHandler {
  constructor(
    private readonly completionRepository: CompletionRepository,
    private readonly airStackService: AirStackService
  ) {}

  async completeQuest(userId: string, questId: string): Promise<boolean> {
    console.log(
      `BioKeywordQuestHandler: Starting quest completion for user ${userId} and quest ${questId}`
    );

    try {
      // Get the validation criteria which includes a list of keywords
      const validationCriteria =
        await this.completionRepository.getQuestValidationCriteria(
          questId,
          BioKeywordQuestValidationCriteria
        );
      if (
        !validationCriteria ||
        !validationCriteria.keywords ||
        validationCriteria.keywords.length === 0
      ) {
        console.error(
          `No or invalid validation criteria found for quest ${questId}`
        );
        return false;
      }

      // Retrieve user bio from AirStack service
      const userBio = await this.airStackService.getUerBio(userId);
      if (!userBio) {
        console.error(`No bio found for user ${userId}`);
        return false;
      }

      // Check if the user's bio contains any of the keywords from the validation criteria
      const hasKeyword = validationCriteria.keywords.some((keyword) =>
        userBio.includes(keyword)
      );
      if (!hasKeyword) {
        console.log(
          `User bio does not contain any of the required keywords for quest ${questId}`
        );
        return false;
      }

      console.log(`Quest ${questId} completed successfully for user ${userId}`);
      return true;
    } catch (error) {
      console.error(
        `Error completing quest for user ${userId} on quest ${questId}: ${error}`
      );
      throw error;
    }
  }
}
