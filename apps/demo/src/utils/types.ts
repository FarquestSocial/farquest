/* eslint-disable no-unused-vars */
export type IWalletAddress = `0x${string}` | undefined | string;

export type ISession = {
  nonce?: string;
  chainId?: number;
  address?: string;
  userId?: string;
  jwtToken?: string;
};
export type FilterType = "ACTIVE" | "COMPLETE" | "ALL" | "NOT_STARTED";
export type IQuestTypeFieldsResponse = FieldRequirement[] | null;

export type IQuestResponse = {
  quest: IQuest | null;
  canComplete: boolean;
};

export type IQuestType = {
  id: string;
  name: string;
  description: string;
};

export type IQuest = {
  id: string;
  name: string;
  description: string;
  image: string;
  customMetadata: any;
  customCallbackMetadata: any;
  validationCriteria: any;
  organizationId: string;
  questTypeId: string;
  startsAt: Date;
  endsAt: Date;
  createdAt: Date;
  updatedAt: Date;
  questType: QuestType;
};

interface QuestType {
  id: string;
  name: string;
  description: string;
  type: string;
}

interface FieldRequirement {
  value: string;
  type: "string";
  isArray: boolean;
  isRequired: true;
}
