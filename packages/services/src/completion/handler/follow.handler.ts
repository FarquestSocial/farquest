import Logger from "../../common/logger";
import { FollowQuestValidationCriteria } from "../../common/types/quest.type";
import type { AirStackService } from "../../lib/airstack.service";
import type { CompletionRepository } from "../completion.repository";

/**
 * Handles the completion of a quest that requires the user to follow another user.
 */
export class FollowQuestHandler {
	private readonly logger = Logger(FollowQuestHandler.name);

	/**
	 * Constructs a new FollowQuestHandler instance.
	 * @param completionRepository The repository for quest completion data.
	 * @param airStackService The service for interacting with the AirStack API.
	 */
	constructor(
		private readonly completionRepository: CompletionRepository,
		private readonly airStackService: AirStackService,
	) {}

	/**
	 * Completes a quest that requires the user to follow another user.
	 * @param userId The ID of the user completing the quest.
	 * @param questId The ID of the quest to be completed.
	 * @returns A boolean indicating whether the quest was completed successfully.
	 * @throws If there was an error completing the quest.
	 */
	async completeQuest(userId: string, questId: string): Promise<boolean> {
		this.logger.info(
			`Starting quest completion for user ${userId} and quest ${questId}`,
		);

		try {
			// Get the validation criteria which includes the farCastId (target user ID to follow)
			const validationCriteria: FollowQuestValidationCriteria =
				await this.completionRepository.getQuestValidationCriteria(
					questId,
					FollowQuestValidationCriteria,
				);
				
			if (!validationCriteria || !validationCriteria.farCastId) {
				this.logger.error(
					`No or invalid validation criteria found for quest ${questId}`,
				);
				return false;
			}

			const userFid = await this.completionRepository.getUserFid(userId);

			// Check if the user has followed the specified farCastId
			const hasFollowed = await this.airStackService.hasUserFollowedUser(
				userFid,
				validationCriteria.farCastId,
			);
			if (!hasFollowed) {
				this.logger.info(
					`User ${userId} has not followed the required user ${validationCriteria.farCastId} for quest ${questId}`,
				);
				return false;
			}

			this.logger.info(
				`Quest ${questId} completed successfully for user ${userId}`,
			);
			return true;
		} catch (error) {
			this.logger.error(
				`Error completing quest for user ${userId} on quest ${questId}: ${error}`,
			);
			throw error; // Rethrow the error to be handled by an upper layer or error management system
		}
	}
}
