import Logger from "../../common/logger";
import { OwnsERC20ValidationCriteria } from "../../common/types/quest.type";
import type { AlchemyService } from "../../lib/alchemy.service";
import type { CompletionRepository } from "../completion.repository";

/**
 * Handles the completion of the OwnsERC20 quest.
 */
export class OwnsERC20QuestHandler {
	private readonly logger = Logger(OwnsERC20QuestHandler.name);

	/**
	 * Constructs a new instance of the OwnsERC20QuestHandler class.
	 * @param completionRepository The completion repository.
	 * @param alchemyService The Alchemy service.
	 */
	constructor(
		private readonly completionRepository: CompletionRepository,
		private readonly alchemyService: AlchemyService,
	) {}

	/**
	 * Completes the OwnsERC20 quest for a user.
	 * @param userId The ID of the user.
	 * @param questId The ID of the quest.
	 * @returns A promise that resolves to a boolean indicating whether the quest was completed successfully.
	 */
	async completeQuest(userId: string, questId: string): Promise<boolean> {
		this.logger.info(
			`Starting quest completion for user ${userId} and quest ${questId}`,
		);

		try {
			// Get the validation criteria which includes the contract address
			const validationCriteria: OwnsERC20ValidationCriteria =
				await this.completionRepository.getQuestValidationCriteria(
					questId,
					OwnsERC20ValidationCriteria,
				);
			if (!validationCriteria || !validationCriteria.contractAddress) {
				this.logger.error(
					`No or invalid validation criteria found for quest ${questId}`,
				);
				return false;
			}

			const walletAddress =
				await this.completionRepository.getUserWalletAddress(userId);

			// Check if the user owns any of the specified ERC20 tokens
			const ownsERC20Token = await this.alchemyService.checkIfUserOwnsERC20(
				walletAddress,
				validationCriteria.contractAddress,
			);
			if (!ownsERC20Token) {
				this.logger.info(
					`User ${userId} (${walletAddress}) does not have a balance of contract address: ${validationCriteria.contractAddress} for quest ${questId}`,
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
