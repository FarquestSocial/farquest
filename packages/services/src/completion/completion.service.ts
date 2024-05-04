import type { CompletionRepository } from "./completion.repository";

export class CompletionService {
  constructor(private readonly completionRepository: CompletionRepository) {}

  completeQuest(userId: string, questId: string) { 
  }
}
