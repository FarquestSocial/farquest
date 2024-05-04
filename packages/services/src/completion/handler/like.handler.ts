//this class validates that a user has liked a specific cast

import { LikeQuestValidationCriteria } from "../../common/types/quest.type";
import type { AirStackService } from "../../lib/airstack.service";
import type { CompletionRepository } from "../completion.repository";

export class LikeQuestHandler {
  constructor(
    private readonly completionRepository: CompletionRepository,
    private readonly airStackService: AirStackService
  ) {}

  async completeQuest(userId: string, questId: string): Promise<boolean> {
    console.log(
      `LikeQuestHandler: Starting quest completion for user ${userId} and quest ${questId}`
    );

    try {
      // Get the validation criteria which includes the castId to be liked
      const validationCriteria: LikeQuestValidationCriteria =
        await this.completionRepository.getQuestValidationCriteria(
          questId,
          LikeQuestValidationCriteria
        );
      if (!validationCriteria || !validationCriteria.castId) {
        console.error(
          `No or invalid validation criteria found for quest ${questId}`
        );
        return false;
      }

      // Check if the user has liked the specified cast
      const hasLiked = await this.airStackService.hasUserLikedCast(
        userId,
        validationCriteria.castId
      );
      if (!hasLiked) {
        console.log(
          `User ${userId} has not liked the required cast ${validationCriteria.castId} for quest ${questId}`
        );
        return false;
      }

      console.log(`Quest ${questId} completed successfully for user ${userId}`);
      return true;
    } catch (error) {
      console.error(
        `Error completing quest for user ${userId} on quest ${questId}: ${error}`
      );
      throw error; // Rethrow the error to be handled by an upper layer or error management system
    }
  }
}
