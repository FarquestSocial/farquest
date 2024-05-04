import { CommentQuestValidationCriteria } from "../../common/types/quest.type";
import type { AirStackService } from "../../lib/airstack.service";
import type { CompletionRepository } from "../completion.repository";
import Logger from "../../common/logger"; 

export class CommentQuestHandler {
  private readonly logger = Logger(CommentQuestHandler.name);

  constructor(
    private readonly completionRepository: CompletionRepository,
    private readonly airStackService: AirStackService,
  ) {}

  async completeQuest(userId: string, questId: string): Promise<boolean> {
    this.logger.info(
      `Starting quest completion for user ${userId} and quest ${questId}`,
    );

    try {
      // Get the validation criteria which includes the castId to be commented on
      const validationCriteria: CommentQuestValidationCriteria =
        await this.completionRepository.getQuestValidationCriteria(
          questId,
          CommentQuestValidationCriteria,
        );
      if (!validationCriteria || !validationCriteria.warpCastUrl) {
        this.logger.error(
          `No or invalid validation criteria found for quest ${questId}`,
        );
        return false;
      }

      const userFid = await this.completionRepository.getUserFid(userId);

      // Check if the user has commented on the specified cast
      const hasCommented = await this.airStackService.hasUserCommentedOnCast(
        userFid,
        validationCriteria.warpCastUrl,
      );
      if (!hasCommented) {
        this.logger.info(
          `User ${userId} has not commented on the required cast for quest ${questId}`,
        );
        return false;
      }

      this.logger.info(`Quest ${questId} completed successfully for user ${userId}`);
      return true;
    } catch (error) {
      this.logger.error(
        `Error completing quest for user ${userId} on quest ${questId}: ${error}`,
      );
      throw error; // Rethrow the error to be handled by an upper layer or error management system
    }
  }
}

