/* eslint-disable no-unused-vars */
export type IWalletAddress = `0x${string}` | undefined | string;

export type IMe = {
  userId: string;
  twitterId: string;
  isAdmin: boolean;
};

export enum RewardType {
  NFT = "NFT/Skin/Emote",
  Token = "Token",
  Title = "Title",
}

export type IReward = {
  level: number;
  xpRequired: number;
  cumulativeXP: number;
  rewardType: RewardType;
  rewardTitle: string | number;
  rewardImage: string;
};

export type IUser = {
  id: string;
  username: string;
  phone: null | string;
  walletAddress: null | IWalletAddress;
  level: number;
  weeklyXp: number;
  xp: number;
  totalXp: number;
  xpToNextLevel: number;
  percentComplete: number;
  currentReward: IReward;
  accounts: {
    telegram: IOuthAccount;
    discord: IOuthAccount;
    twitter: IOuthAccount;
  };
  referralCount: number;
};

type IOuthAccount = {
  username: string;
};

export type IPosition = number | undefined;

export type IMessage = {
  domain: {
    name: "Polyland Dashboard";
    version: "1";
    chainId: 1;
    verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC";
  };
  types: {
    WalletAddress: [
      { name: "walletAddress"; type: "address" },
      { name: "expiration"; type: "uint256" },
      { name: "issuedAt"; type: "string" },
      { name: "expiresAt"; type: "string" },
      { name: "uri"; type: "string" },
    ];
  };
  message: {
    walletAddress: `0x${string}`;
    expiration: bigint;
    nonce: `0x${string}`;
    issuedAt: string;
    expiresAt: string;
    uri: string; // The URI from which the request was made
  };
  nonce: `0x${string}`;
  primaryType: "WalletAddress";
};

export type IFeaturedQuest = {
  id: string;
  title: string;
  image: string;
  description: string;
  isCompleted: boolean;
  reward: number;
  rewardType: IRewardType;
  completedAt?: Date;
  completionStatus?: QuestStatus;
};

export enum QuestStatus {
  COMPLETED = "COMPLETED",
  PARTIAL_COMPLETE = "PARTIAL_COMPLETE",
  FAILED = "FAILED",
}

export type Reward = {
  id: string;
  questId: string;
  type: string;
  description: string | null;
  value: number;
};

export type IQuestById = {
  id: string;
  title: string;
  description: string;
  image: string;
  rewards: Reward[] | null;
  userQuests: {
    createdAt: Date;
    status: QuestStatus;
    partialCompletion: {
      like: boolean;
      comment: boolean;
      retweet: boolean;
      userAnswerId: string | null;
      commentTweetUrl: string | null;
      email: string | null;
      quoteTweetUrl: string | null;
      mentionTweetUrl: string | null;
    } | null;
  }[];
  questType: {
    questType: IQuestType;
    inputName: string | null;
    subDescription: string | null;
  };
  questValidations: {
    criteria: {
      targetTweetUrl?: string;
      keywordTargets?: string[];
      parentTweetUrl?: string | string[];
      xpForComment?: number;
      xpForRetweet?: number;
      xpForLike?: number;
      inviteUrl?: string;
      serverId?: string;
      targetUsernames?: string[];
      serverUrl?: string;
      twitterHandlesToFollow?: string[];
    };
  } | null;
  options:
    | []
    | {
        text: string;
        id: string;
        isCorrect?: boolean;
      }[];
  requiredActions: string[] | [];
};

export type FilterType = "DAILY" | "WEEKLY" | "UPCOMING";

export enum RewardType {
  POINTS = "POINTS",
  MARA_SCORE = "MARA_SCORE",
  EV3R_MODULE = "EV3R_MODULE",
}

export type IRewardType = "POINTS";

export type IQuestResponse = {
  quests: IQuest[];
  hasMore: boolean;
};

export type IQuest = {
  id: string;
  title: string;
  image: string;
  description: string;
  rewardType: RewardType;
  rewardAmount: number;
  isCompleted: false;
};

export type IQuestType =
  | "MULTIPLE_CHOICE"
  | "TWITTER_FOLLOW"
  | "TELEGRAM_JOIN_CHANNEL"
  | "TWITTER_ENGAGEMENT"
  | "DISCORD_JOIN_SERVER"
  | "TWITTER_QUOTE_TWEET"
  | "TWITTER_MENTION"
  | "TWITTER_COMMENT"
  | "EPIC_GAMES_WISHLIST"
  | "SUBSCRIBE_NEWSLETTER";

export type IQuestTypes = {
  id: string;
  questType: IQuestType;
  description: string;
};

export type IQuestTypeById = {
  required: boolean;
  value: string;
  isArray: boolean;
  type: string;
};

export type IAdminQuest = {
  id: string;
  title: string;
  description: string;
  image: string;
  isFeatured: boolean;
  rewards: Reward[];

  startsAt: Date;
  endsAt: Date;
};
