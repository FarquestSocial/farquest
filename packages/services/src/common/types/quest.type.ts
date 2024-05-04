export enum QuestTypes {
  CommentQuest = "Comment",
  LikeQuest = "Like",
  ReCastQuest = "ReCast",
  FollowQuest = "Follow",
  BioKeywordQuest = "BioKeyword",
  ProfilePictureQuest = "ProfilePicture",
  OwensNftsQuest = "OwensNfts",
  OwensERC20Quest = "OwensERC20",
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

export class ProfilePictureValidationCriteria {
  //@ts-ignore
  targetImageUrl: string;
}

export class OwensNftsValidationCriteria {
  //@ts-ignore
  contractAddress: string;
}

export class OwensERC20ValidationCriteria {
  //@ts-ignore
  contractAddress: string;
}
