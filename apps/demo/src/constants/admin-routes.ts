import { ADMIN_BASE_URL } from "./base-url";

export const routes = {
	getAllQuestTypes: `${ADMIN_BASE_URL}/quest/types`,
	getQuestTypeById: (id?: string) => {
		if (!id) return "";
		return `${ADMIN_BASE_URL}/quest/types/fields/${id}`;
	},
	getAllQuests: `${ADMIN_BASE_URL}/quest`,
	createQuest: `${ADMIN_BASE_URL}/quest`,
	deleteQuest: (id: string) => {
		return `${ADMIN_BASE_URL}/quest/${id}`;
	},
	editQuest: (id: string) => {
		return `${ADMIN_BASE_URL}/quest/${id}`;
	},
};
