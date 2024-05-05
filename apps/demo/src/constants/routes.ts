export const routes = {
	completeQuest: `api/complete-quest`,// POST
	createQuest: `api/create-quest`,// POST
	createSession: `api/create-session`,// POST
	getAllQuestTypes: `api/get-all-quest-types`,// GET: IQuestType[]
	getAllRequiredFields: `api/get-all-required-fields`,// GET: IQuestTypeFieldsResponse
	getAllQuests: `api/get-all-quests`,// GET: IQuest[]
	getQuestById: `api/get-quest-by-id`,// GET: IQuestResponse
};
