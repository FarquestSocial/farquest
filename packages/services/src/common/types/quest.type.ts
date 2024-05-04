export enum QuestTypes {
	CommentQuest = "Comment",
	LikeQuest = "Like",
	ReCastQuest = "ReCast",
	FollowQuest = "Follow",
	BioKeywordQuest = "BioKeyword",
	ProfilePictureQuest = "ProfilePicture",
	OwnsNftsQuest = "OwnsNfts",
	OwnsERC20Quest = "OwnsERC20",
}

export class LikeQuestValidationCriteria {
	//@ts-ignore
	warpCastUrl: string;
}

export class ReCastQuestValidationCriteria {
	//@ts-ignore
	warpCastUrl: string;
}

export class CommentQuestValidationCriteria {
	//@ts-ignore
	warpCastUrl: string;
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

export class OwnsNftsValidationCriteria {
	//@ts-ignore
	contractAddress: string;
}

export class OwnsERC20ValidationCriteria {
	//@ts-ignore
	contractAddress: string;
}
