export enum QuestTypes {
  CommentQuest = "Comment",
  LikeQuest = "Like",
  ReCastQuest = "ReCast",
  FollowQuest = "Follow",
  BioKeywordQuest = "BioKeyword",
}

export interface LikeQuestValidationCriteria {
  castId: string;
}

export interface ReCastQuestValidationCriteria {
  castId: string;
}

export interface CommentQuestValidationCriteria {
  castId: string;
}

export interface FollowQuestValidationCriteria {
  farCastId: string;
}

export interface BioKeywordQuestValidationCriteria {
  keywords: string[];
}
