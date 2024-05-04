import Logger from "../../common/logger";
import { BioKeywordQuestValidationCriteria } from "../../common/types/quest.type";
import type { AirStackService } from "../../lib/airstack.service";
import type { CompletionRepository } from "../completion.repository";

export class BioKeywordQuestHandler {
	private readonly logger = Logger(BioKeywordQuestHandler.name);

	constructor(
		private readonly completionRepository: CompletionRepository,
		private readonly airStackService: AirStackService,
	) {}

	async completeQuest(userId: string, questId: string): Promise<boolean> {
		this.logger.info(
			`Starting quest completion for user ${userId} and quest ${questId}`,
		);

		try {
			// Get the validation criteria which includes a list of keywords
			const validationCriteria =
				await this.completionRepository.getQuestValidationCriteria(
					questId,
					BioKeywordQuestValidationCriteria,
				);
			if (
				!validationCriteria ||
				!validationCriteria.keywords ||
				validationCriteria.keywords.length === 0
			) {
				this.logger.error(
					`No or invalid validation criteria found for quest ${questId}`,
				);
				return false;
			}

			const userFid = await this.completionRepository.getUserFid(userId);

			// Retrieve user bio from AirStack service
			const userBio = await this.airStackService.getUserBio(userFid);
			if (!userBio) {
				this.logger.error(`No bio found for user ${userId}`);
				return false;
			}

			// Check if the user's bio contains any of the keywords from the validation criteria
			const hasKeyword = validationCriteria.keywords.some((keyword) =>
				userBio.includes(keyword),
			);
			if (!hasKeyword) {
				this.logger.info(
					`User bio does not contain any of the required keywords for quest ${questId}`,
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
			throw error;
		}
	}
}
