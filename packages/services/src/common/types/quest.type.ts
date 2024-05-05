/**
 * Enum representing different types of quests.
 */
export enum QuestTypes {
	/**
	 * Quest type for commenting.
	 */
	CommentQuest = "Comment",

	/**
	 * Quest type for liking.
	 */
	LikeQuest = "Like",

	/**
	 * Quest type for recasting.
	 */
	ReCastQuest = "ReCast",

	/**
	 * Quest type for following.
	 */
	FollowQuest = "Follow",

	/**
	 * Quest type for searching keywords in bio.
	 */
	BioKeywordQuest = "BioKeyword",

	/**
	 * Quest type for changing profile picture.
	 */
	ProfilePictureQuest = "ProfilePicture",

	/**
	 * Quest type for owning NFTs.
	 */
	OwnsNftsQuest = "OwnsNfts",

	/**
	 * Quest type for owning ERC20 tokens.
	 */
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
