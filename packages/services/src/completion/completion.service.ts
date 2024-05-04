import { QuestTypes } from "../common/types/quest.type";
import {
  QuestEventTypes,
  QuestWebhook,
} from "../common/webhooks/quest.webhook";
import type { AirStackService } from "../lib/airstack.service";
import { AlchemyService } from "../lib/alchemy.service";
import { ImageService } from "../lib/image.service";
import type { WebhookService } from "../webhook/webhook.service";
import type { CompletionRepository } from "./completion.repository";
import { BioKeywordQuestHandler } from "./handler/biokeyword.handler";
import { CommentQuestHandler } from "./handler/comment.handler";
import { FollowQuestHandler } from "./handler/follow.handler";
import { LikeQuestHandler } from "./handler/like.handler";
import { OwnsERC20QuestHandler } from "./handler/ownserc20.handler";
import { OwnsNFTQuestHandler } from "./handler/ownsnft.handler";
import { ProfilePictureQuestHandler } from "./handler/profilepicture.handler";
import { ReCastQuestHandler } from "./handler/recast.handler";

export class CompletionService {
  constructor(
    private readonly completionRepository: CompletionRepository,
    private readonly airStackService: AirStackService,
    private readonly webhookService: WebhookService
  ) {}

  async completeQuest(userId: string, questId: string): Promise<boolean> {
    try {
      console.log(`Checking if user ${userId} can complete quest ${questId}`);
      const canComplete = await this.completionRepository.canUserCompleteQuest(
        userId,
        questId
      );
      if (!canComplete) {
        console.log(`User ${userId} cannot complete quest ${questId}`);
        throw new Error("User cannot complete quest");
      }

      const questType = await this.completionRepository.getQuestType(questId);
      const completed = await this.callHandler(questType, userId, questId);

      const corelationId =
        await this.completionRepository.getCorelationIdFromUserId(userId);
      const { callback, metadata } =
        await this.completionRepository.getCallBackUrlAndCallBackMetadataForQuest(
          questId
        );

      if (!completed) {
        console.log(
          `Quest completion failed for user ${userId} on quest ${questId}`
        );
        await this.webhookService.sendWebhook(
          callback,
          new QuestWebhook(
            QuestEventTypes.QUEST_FAILED,
            new Date(),
            "User failed to complete quest",
            questId,
            corelationId,
            metadata
          )
        );
        return false;
      }

      console.log(`Quest ${questId} completed successfully by user ${userId}`);
      await this.webhookService.sendWebhook(
        callback,
        new QuestWebhook(
          QuestEventTypes.QUEST_COMPLETED,
          new Date(),
          "User completed quest",
          questId,
          corelationId,
          metadata
        )
      );

      return true;
    } catch (error) {
      console.log(
        `Error in completing quest for user ${userId} on quest ${questId}: ${error}`
      );
      throw error; // Optionally rethrow the error if you want the error to propagate
    }
  }
  private async callHandler(
    questType: string,
    userId: string,
    questId: string
  ) {
    try {
      switch (questType) {
        case QuestTypes.LikeQuest:
          return new LikeQuestHandler(
            this.completionRepository,
            this.airStackService
          ).completeQuest(userId, questId);
        case QuestTypes.CommentQuest:
          return new CommentQuestHandler(
            this.completionRepository,
            this.airStackService
          ).completeQuest(userId, questId);
        case QuestTypes.FollowQuest:
          return new FollowQuestHandler(
            this.completionRepository,
            this.airStackService
          ).completeQuest(userId, questId);
        case QuestTypes.ReCastQuest:
          return new ReCastQuestHandler(
            this.completionRepository,
            this.airStackService
          ).completeQuest(userId, questId);
        case QuestTypes.BioKeywordQuest:
          return new BioKeywordQuestHandler(
            this.completionRepository,
            this.airStackService
          ).completeQuest(userId, questId);
        case QuestTypes.ProfilePictureQuest:
          return new ProfilePictureQuestHandler(
            this.completionRepository,
            this.airStackService,
            new ImageService()
          ).completeQuest(userId, questId);
        case QuestTypes.OwnsNftsQuest:
          return new OwnsNFTQuestHandler(
            this.completionRepository,
            new AlchemyService()
          ).completeQuest(userId, questId);
        case QuestTypes.OwnsERC20Quest:
          return new OwnsERC20QuestHandler(
            this.completionRepository,
            new AlchemyService()
          ).completeQuest(userId, questId);
        default:
          return new Error("Quest type not found");
      }
    } catch (error) {
      console.error(`Error in calling handler for quest ${questId}: ${error}`);
      throw error;
    }
  }
}
