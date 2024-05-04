import { ProfilePictureValidationCriteria } from "../../common/types/quest.type";
import type { AirStackService } from "../../lib/airstack.service";
import type { ImageService } from "../../lib/image.service";
import type { CompletionRepository } from "../completion.repository";
import Logger from "../../common/logger"; 

export class ProfilePictureQuestHandler {
  private readonly logger = Logger(ProfilePictureQuestHandler.name);

  constructor(
    private readonly completionRepository: CompletionRepository,
    private readonly airStackService: AirStackService,
    private readonly imageService: ImageService
  ) {}

  async completeQuest(userId: string, questId: string): Promise<boolean> {
    this.logger.info(
      `Starting quest completion for user ${userId} and quest ${questId}`
    );

    try {
      // Get the validation criteria which includes the target image URL
      const validationCriteria: ProfilePictureValidationCriteria =
        await this.completionRepository.getQuestValidationCriteria(
          questId,
          ProfilePictureValidationCriteria
        );
      if (!validationCriteria || !validationCriteria.targetImageUrl) {
        this.logger.error(
          `No or invalid validation criteria found for quest ${questId}`
        );
        return false;
      }

      const userFid = await this.completionRepository.getUserFid(userId);
      const userProfilePictureUrl = await this.airStackService.getUserProfilePicture(userFid);

      // Check if the images match 50% similarity
      const doesImageMatch = await this.imageService.doesImageMatch(
        userProfilePictureUrl,
        validationCriteria.targetImageUrl,
        0.5
      );
      if (!doesImageMatch) {
        this.logger.info(
          `User ${userId}'s profile picture does not match the target image URL (${validationCriteria.targetImageUrl}) required for quest ${questId}`
        );
        return false;
      }

      this.logger.info(`Quest ${questId} completed successfully for user ${userId}`);
      return true;
    } catch (error) {
      this.logger.error(
        `Error completing quest for user ${userId} on quest ${questId}: ${error}`
      );
      throw error; 
    }
  }
}
