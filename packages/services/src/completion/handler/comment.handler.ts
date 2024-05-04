import { CommentQuestValidationCriteria } from "../../common/types/quest.type";
import type { AirStackService } from "../../lib/airstack.service";
import type { CompletionRepository } from "../completion.repository";

export class CommentQuestHandler {
	constructor(
		private readonly completionRepository: CompletionRepository,
		private readonly airStackService: AirStackService,
	) {}

	async completeQuest(userId: string, questId: string): Promise<boolean> {
		console.log(
			`CommentQuestHandler: Starting quest completion for user ${userId} and quest ${questId}`,
		);

		try {
			// Get the validation criteria which includes the castId to be commented on
			const validationCriteria: CommentQuestValidationCriteria =
				await this.completionRepository.getQuestValidationCriteria(
					questId,
					CommentQuestValidationCriteria,
				);
			if (!validationCriteria || !validationCriteria.castId) {
				console.error(
					`No or invalid validation criteria found for quest ${questId}`,
				);
				return false;
			}
			const userFid = await this.completionRepository.getUserFid(userId);

			// Check if the user has commented on the specified cast
			const hasCommented = await this.airStackService.hasUserCommentedOnCast(
				userFid,
				validationCriteria.castId,
			);
			if (!hasCommented) {
				console.log(
					`User ${userId} has not commented on the required cast for quest ${questId}`,
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
