import type { AirStackService } from "../../lib/airstack.service";
import type { CompletionRepository } from "../completion.repository";


export class CommentQuestHandler {
    constructor(
        private readonly completionRepository: CompletionRepository,
        private readonly airStackService: AirStackService
      ) {}
    async completeQuest(userId: string, questId: string): Promise<Boolean>{
        //validate that a user has liked a specific cast
        return true;
    }
}