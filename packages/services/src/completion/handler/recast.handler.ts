import { ReCastQuestValidationCriteria } from "../../common/types/quest.type";
import type { AirStackService } from "../../lib/airstack.service";
import type { CompletionRepository } from "../completion.repository";

export class ReCastQuestHandler {
	constructor(
		private readonly completionRepository: CompletionRepository,
		private readonly airStackService: AirStackService,
	) {}

	async completeQuest(userId: string, questId: string): Promise<boolean> {
		console.log(
			`ReCastQuestHandler: Starting quest completion for user ${userId} and quest ${questId}`,
		);

		try {
			// Get the validation criteria which includes the castId to be recasted
			const validationCriteria: ReCastQuestValidationCriteria =
				await this.completionRepository.getQuestValidationCriteria(
					questId,
					ReCastQuestValidationCriteria,
				);
			if (!validationCriteria || !validationCriteria.castId) {
				console.error(
					`No or invalid validation criteria found for quest ${questId}`,
				);
				return false;
			}

			// Check if the user has recasted the specified cast
			const hasReCasted = await this.airStackService.hasUserReCastedCast(
				userId,
				validationCriteria.castId,
			);
			if (!hasReCasted) {
				console.log(
					`User ${userId} has not recasted the required cast ${validationCriteria.castId} for quest ${questId}`,
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
