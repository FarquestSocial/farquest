// import { ADMIN_BASE_URL } from "./base-url";

const ADMIN_BASE_URL = "";

export const routes = {
  getAllQuestTypes: `${ADMIN_BASE_URL}/api/get-all-quest-types`,
  getQuestTypeById: (id?: string) => {
    if (!id) return "";
    return `${ADMIN_BASE_URL}/quest/types/fields/${id}`;
  },
  getAllQuests: `${ADMIN_BASE_URL}/api/get-all-quests`,
  createQuest: `${ADMIN_BASE_URL}/quest`,
  deleteQuest: (id: string) => {
    return `${ADMIN_BASE_URL}/quest/${id}`;
  },
  editQuest: (id: string) => {
    return `${ADMIN_BASE_URL}/quest/${id}`;
  },
};
