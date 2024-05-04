import { FilterType } from "@/utils/types";
import { BASE_URL } from "./base-url";

export const routes = {
  twitterAuth: `${BASE_URL}/twitter/auth`,
  getMe: `${BASE_URL}/user/me`,
  getUser: `${BASE_URL}/user/profile`,
  getPosition: `${BASE_URL}/user/position`,
  getNonce: `${BASE_URL}/user/nonce`,
  getMessageToSign: (walletAddress: string) => {
    let queryParams = new URLSearchParams();

    if (!walletAddress) throw new Error("Wallet Address is required");

    queryParams.append("walletAddress", walletAddress);

    return `${BASE_URL}/user/wallet-address-challenge?${queryParams.toString()}`;
  },
  updateWalletAddress: `${BASE_URL}/user/wallet-address`,
  updateUser: `${BASE_URL}/user/update`,
  validateUsername: `${BASE_URL}/user/validate-username`,
  getFeaturedQuest: `${BASE_URL}/quests/featured`,
  getQuestById: (id: string) => {
    return `${BASE_URL}/quests/${id}`;
  },
  getQuests: ({
    page,
    take,
    filter,
  }: {
    page: number;
    take: number;
    filter: FilterType;
  }) => {
    let queryParams = new URLSearchParams();

    if (page !== undefined) {
      queryParams.append("page", page.toString());
    }
    if (take !== undefined) {
      queryParams.append("take", take.toString());
    }
    if (filter !== undefined) {
      queryParams.append("filter", filter);
    }

    return `${BASE_URL}/quests?${queryParams.toString()}`;
  },
  completeQuest: ({
    questId,
    token,
    tweetUrl,
    userAnswerId,
    email,
  }: {
    questId: string;
    token: string;
    tweetUrl?: string;
    userAnswerId?: string;
    email?: string;
  }) => {
    let params = new URLSearchParams();
    if (!questId) throw new Error("Quest ID is required");
    if (!token) throw new Error("Token is required");
    if (tweetUrl) {
      params.append("tweetUrl", tweetUrl);
    }
    if (userAnswerId) {
      params.append("userAnswerId", userAnswerId);
    }

    if (email) {
      params.append("email", email);
    }

    params.append("token", token);

    return `${BASE_URL}/completion/${questId}/server-sent?${params.toString()}`;
  },
  disconnectTelegram: `${BASE_URL}/user/disconnect-telegram`,
  disconnectDiscord: `${BASE_URL}/user/disconnect-discord`,
  connectDiscord: `${BASE_URL}/discord/auth`,
};
