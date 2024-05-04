
import { ProfilePictureValidationCriteria } from "../../common/types/quest.type";
import type { AirStackService } from "../../lib/airstack.service";
import type { ImageService } from "../../lib/image.service";
import type { CompletionRepository } from "../completion.repository";

export class ProfilePictureQuestHandler {
	constructor(
		private readonly completionRepository: CompletionRepository,
        private readonly airStackService: AirStackService,
		private readonly imageService: ImageService
	) {}

	async completeQuest(userId: string, questId: string): Promise<boolean> {
		console.log(
			`ProfilePictureQuestHandler: Starting quest completion for user ${userId} and quest ${questId}`,
		);

		try {
			// Get the validation criteria which includes the castId to be liked
			const validationCriteria: ProfilePictureValidationCriteria =
				await this.completionRepository.getQuestValidationCriteria(
					questId,
					ProfilePictureValidationCriteria,
				);
			if (!validationCriteria || !validationCriteria.targetImageUrl) {
				console.error(
					`No or invalid validation criteria found for quest ${questId}`,
				);
				return false;
			}

			// Check if the user has liked the specified cast
			const doesImageMatch = await this.imageService.doesImageMatch(
                userId,
                validationCriteria.targetImageUrl,
                0.5
            );
			if (!doesImageMatch) {
				console.log(
					`User ${userId} profile picture match score ${validationCriteria.targetImageUrl} for quest ${questId}`,
				);
				return false;
			}

			console.log(`Quest ${questId} completed successfully for user ${userId}`);
			return true;
		} catch (error) {
			console.error(
				`Error completing quest for user ${userId} on quest ${questId}: ${error}`,
			);
			throw error; // Rethrow the error to be handled by an upper layer or error management system
		}
	}
}