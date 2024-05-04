import { FollowQuestValidationCriteria } from "../../common/types/quest.type";
import type { AirStackService } from "../../lib/airstack.service";
import type { CompletionRepository } from "../completion.repository";

export class FollowQuestHandler {
	constructor(
		private readonly completionRepository: CompletionRepository,
		private readonly airStackService: AirStackService,
	) {}

	async completeQuest(userId: string, questId: string): Promise<boolean> {
		console.log(
			`FollowQuestHandler: Starting quest completion for user ${userId} and quest ${questId}`,
		);

		try {
			// Get the validation criteria which includes the farCastId (target user ID to follow)
			const validationCriteria: FollowQuestValidationCriteria =
				await this.completionRepository.getQuestValidationCriteria(
					questId,
					FollowQuestValidationCriteria,
				);
			if (!validationCriteria || !validationCriteria.farCastId) {
				console.error(
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
				console.log(
					`User ${userId} has not followed the required user ${validationCriteria.farCastId} for quest ${questId}`,
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
