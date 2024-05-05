import Logger from "../../common/logger"; // Ensure the import path is correct
import { ReCastQuestValidationCriteria } from "../../common/types/quest.type";
import type { AirStackService } from "../../lib/airstack.service";
import type { CompletionRepository } from "../completion.repository";

export class ReCastQuestHandler {
	private readonly logger = Logger(ReCastQuestHandler.name);

	constructor(
		private readonly completionRepository: CompletionRepository,
		private readonly airStackService: AirStackService,
	) {}

	async completeQuest(userId: string, questId: string): Promise<boolean> {
		this.logger.info(
			`Starting quest completion for user ${userId} and quest ${questId}`,
		);

		try {
			// Get the validation criteria which includes the castId to be recasted
			const validationCriteria: ReCastQuestValidationCriteria =
				await this.completionRepository.getQuestValidationCriteria(
					questId,
					ReCastQuestValidationCriteria,
				);
			if (!validationCriteria || !validationCriteria.warpCastUrl) {
				this.logger.error(
					`No or invalid validation criteria found for quest ${questId}`,
				);
				return false;
			}

			const userFid = await this.completionRepository.getUserFid(userId);

			// Check if the user has recasted the specified cast
			const hasReCasted = await this.airStackService.hasUserReCastedCast(
				userFid,
				validationCriteria.warpCastUrl,
			);
			if (!hasReCasted) {
				this.logger.info(
					`User ${userId} has not recasted the required cast ${validationCriteria.warpCastUrl} for quest ${questId}`,
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
