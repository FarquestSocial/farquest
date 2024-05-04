import { QuestTypes } from "../common/types/quest.type";
import type { AirStackService } from "../lib/airstack.service";
import type { CompletionRepository } from "./completion.repository";
import { BioKeywordQuestHandler } from "./handler/biokeyword.handler";
import { CommentQuestHandler } from "./handler/comment.handler";
import { FollowQuestHandler } from "./handler/follow.handler";
import { LikeQuestHandler } from "./handler/like.handler";
import { RecastQuestHandler } from "./handler/recast.handler";

export class CompletionService {
  constructor(
    private readonly completionRepository: CompletionRepository,
    private readonly airStackService: AirStackService
  ) {}

  async completeQuest(userId: string, questId: string) {
    const canComplete = await this.completionRepository.canUserCompleteQuest(userId, questId);
    if (!canComplete) {
      throw new Error("User cannot complete quest");
    }


  }
  private async callHandler(
    questType: QuestTypes,
    userId: string,
    questId: string
  ) {
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
        return new RecastQuestHandler(
          this.completionRepository,
          this.airStackService
        ).completeQuest(userId, questId);
      case QuestTypes.BioKeywordQuest:
        return new BioKeywordQuestHandler(
          this.completionRepository,
          this.airStackService
        ).completeQuest(userId, questId);
      default:
        return new Error("Quest type not found");
    }
  }
}
