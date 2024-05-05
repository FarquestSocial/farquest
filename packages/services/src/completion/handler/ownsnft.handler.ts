import Logger from "../../common/logger";
import { OwnsNftsValidationCriteria } from "../../common/types/quest.type";
import type { AlchemyService } from "../../lib/alchemy.service";
import type { CompletionRepository } from "../completion.repository";

/**
 * Handles the completion of a quest based on whether the user owns a specific NFT.
 */
export class OwnsNFTQuestHandler {
	private readonly logger = Logger(OwnsNFTQuestHandler.name);

	/**
	 * Constructs a new instance of the OwnsNFTQuestHandler class.
	 * @param completionRepository The repository for quest completion data.
	 * @param alchemyService The service for interacting with the Alchemy API.
	 */
	constructor(
		private readonly completionRepository: CompletionRepository,
		private readonly alchemyService: AlchemyService,
	) {}

	/**
	 * Completes a quest for a user based on whether they own a specific NFT.
	 * @param userId The ID of the user.
	 * @param questId The ID of the quest.
	 * @returns A boolean indicating whether the quest was completed successfully.
	 * @throws If there was an error completing the quest.
	 */
	async completeQuest(userId: string, questId: string): Promise<boolean> {
		this.logger.info(
			`Starting quest completion for user ${userId} and quest ${questId}`,
		);

		try {
			// Get the validation criteria which includes the NFT contract address
			const validationCriteria: OwnsNftsValidationCriteria =
				await this.completionRepository.getQuestValidationCriteria(
					questId,
					OwnsNftsValidationCriteria,
				);
			if (!validationCriteria || !validationCriteria.contractAddress) {
				this.logger.error(
					`No or invalid validation criteria found for quest ${questId}`,
				);
				return false;
			}
			const walletAddress =
				await this.completionRepository.getUserWalletAddress(userId);

			// Check if the user owns any NFTs from the specified contract
			const ownsNFT = await this.alchemyService.checkIfUserOwnsNFT(
				walletAddress,
				validationCriteria.contractAddress,
			);
			if (!ownsNFT) {
				this.logger.info(
					`User ${userId} (${walletAddress}) does not own any NFTs from contract address: ${validationCriteria.contractAddress} for quest ${questId}`,
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
