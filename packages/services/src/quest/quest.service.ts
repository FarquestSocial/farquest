import type { QuestRepository } from "./quest.repository";


export class QuestService {
    constructor(private readonly questRepository: QuestRepository) {}
    //get all quest types
    async getAllQuestTypes() {
        return this.questRepository.getAllQuestTypes();
    }

    //get required field for quest type

    //create a quest

    //get number of quest completions for quest id
    
    //validate quest criteria
}