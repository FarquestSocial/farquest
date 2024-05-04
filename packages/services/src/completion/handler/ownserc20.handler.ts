import { OwnsERC20ValidationCriteria } from "../../common/types/quest.type";
import type { AlchemyService } from "../../lib/alchemy.service";
import type { CompletionRepository } from "../completion.repository";

export class OwnsERC20QuestHandler {
  constructor(
    private readonly completionRepository: CompletionRepository,
    private readonly alchemyService: AlchemyService
  ) {}

  async completeQuest(userId: string, questId: string): Promise<boolean> {
    console.log(
      `OwnsERC20QuestHandler: Starting quest completion for user ${userId} and quest ${questId}`
    );

    try {
      // Get the validation criteria which includes the castId to be liked
      const validationCriteria: OwnsERC20ValidationCriteria =
        await this.completionRepository.getQuestValidationCriteria(
          questId,
          OwnsERC20ValidationCriteria
        );
      if (!validationCriteria || !validationCriteria.contractAddress) {
        console.error(
          `No or invalid validation criteria found for quest ${questId}`
        );
        return false;
      }
    
      const walletAddress = await this.completionRepository.getUserWalletAddress(userId);

      // Check if the user has any of the specified ERC20 tokens
      const ownsERC20Token = await this.alchemyService.checkIfUserOwnsERC20(
        walletAddress,
        validationCriteria.contractAddress
      );
      if (!ownsERC20Token) {
        console.log(
          `User ${userId}:${walletAddress} has does not have a ballance of contract address: ${validationCriteria.contractAddress} for quest ${questId}`
        );
        return false;
      }

      console.log(`Quest ${questId} completed successfully for user ${userId}`);
      return true;
    } catch (error) {
      console.error(
        `Error completing quest for user ${userId} on quest ${questId}: ${error}`
      );
      throw error;
    }
  }
}
