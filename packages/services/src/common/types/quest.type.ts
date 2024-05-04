export enum QuestTypes {
  CommentQuest = "Comment",
  LikeQuest = "Like",
  ReCastQuest = "ReCast",
  FollowQuest = "Follow",
  BioKeywordQuest = "BioKeyword",
}

export class LikeQuestValidationCriteria {
  //@ts-ignore
  castId: string;
}

export class ReCastQuestValidationCriteria {
  //@ts-ignore
  castId: string;
}

export class CommentQuestValidationCriteria {
  //@ts-ignore
  castId: string;
}

export class FollowQuestValidationCriteria {
  //@ts-ignore
  farCastId: string;
}

export class BioKeywordQuestValidationCriteria {
  //@ts-ignore
  keywords: string[];
}
