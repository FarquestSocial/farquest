//this class validates that a user has liked a specific cast

import Logger from "../../common/logger";
import { LikeQuestValidationCriteria } from "../../common/types/quest.type";
import type { AirStackService } from "../../lib/airstack.service";
import type { CompletionRepository } from "../completion.repository";

/**
 * Handles the completion of a quest based on a "like" action.
 */
export class LikeQuestHandler {
	private readonly logger = Logger(LikeQuestHandler.name);

	/**
	 * Constructs a new instance of the LikeQuestHandler class.
	 * @param completionRepository The repository for quest completion data.
	 * @param airStackService The service for interacting with the AirStack API.
	 */
	constructor(
		private readonly completionRepository: CompletionRepository,
		private readonly airStackService: AirStackService,
	) {}

	/**
	 * Completes a quest for a user by checking if they have liked a specified cast.
	 * @param userId The ID of the user.
	 * @param questId The ID of the quest.
	 * @returns A Promise that resolves to a boolean indicating whether the quest was completed successfully.
	 * @throws If there is an error completing the quest.
	 */
	async completeQuest(userId: string, questId: string): Promise<boolean> {
		this.logger.info(
			`Starting quest completion for user ${userId} and quest ${questId}`,
		);

		try {
			// Get the validation criteria which includes the castId to be liked
			const validationCriteria: LikeQuestValidationCriteria =
				await this.completionRepository.getQuestValidationCriteria(
					questId,
					LikeQuestValidationCriteria,
				);
			if (!validationCriteria || !validationCriteria.warpCastUrl) {
				this.logger.error(
					`No or invalid validation criteria found for quest ${questId}`,
				);
				return false;
			}

			const userFid = await this.completionRepository.getUserFid(userId);

			// Check if the user has liked the specified cast
			const hasLiked = await this.airStackService.hasUserLikedCast(
				userFid,
				validationCriteria.warpCastUrl,
			);
			if (!hasLiked) {
				this.logger.info(
					`User ${userId} has not liked the required cast ${validationCriteria.warpCastUrl} for quest ${questId}`,
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
