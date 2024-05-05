import { fetchQuery, init } from "@airstack/node";
import Logger from "../common/logger";

/**
 * Service for interacting with the AirStack API.
 */
export class AirStackService {
	private readonly logger = Logger(AirStackService.name);

	constructor() {
		//initialize the airStack skd
		init(Bun.env.AIRSTACK_API_KEY, "dev");
	}

	/**
	 * Retrieves the user's profile picture URL.
	 * @param fid - The user's ID.
	 * @returns A promise that resolves to the profile picture URL.
	 */
	async getUserProfilePicture(fid: number): Promise<string> {
		const query = `query ProfilePicture {
			Socials(
				input: {filter: {userId: {_eq: "${fid.toString()}"}, dappName: {_eq: farcaster}}, blockchain: ethereum}
			) {
				Social {
					profileImageContentValue {
						image {
							original
						}
					}
				}
			}
		}`;
		const { data, error } = await fetchQuery(query);
		if (error) {
			this.logger.error(`Failed to get profile picture for user ${fid}`, error);
			return error.toString();
		}
		return data.Socials.Social[0].profileImageContentValue.image.original;
	}

	/**
	 * Checks if the user has commented on a cast.
	 * @param fid - The user's ID.
	 * @param castUrl - The URL of the cast.
	 * @returns A promise that resolves to a boolean indicating if the user has commented on the cast.
	 */
	async hasUserCommentedOnCast(fid: number, castUrl: string): Promise<boolean> {
		const query = `query HasLiked {
			FarcasterReactions(
				input: {filter: {castUrl: {_eq: "${castUrl}"}, criteria: replied, reactedBy: {_eq: "fc_fid:${fid}"}}, blockchain: ALL} input: 
			) {
				Reaction {
					reactedBy {
						userId
					}
				}
			}
		}`;
		const { data, error } = await fetchQuery(query);
		if (error) {
			this.logger.error(
				`Failed to check if user ${fid} has commented on cast ${castUrl}`,
				error,
			);
			return error.toString();
		}
		if (data.FarcasterReactions.Reaction) {
			this.logger.debug(`User ${fid} has commented on cast ${castUrl}`);
			return true;
		}
		this.logger.info(`User ${fid} has not commented on cast ${castUrl}`);
		return false;
	}

	/**
	 * Checks if the user has liked a cast.
	 * @param fid - The user's ID.
	 * @param castUrl - The URL of the cast.
	 * @returns A promise that resolves to a boolean indicating if the user has liked the cast.
	 */
	async hasUserLikedCast(fid: number, castUrl: string): Promise<boolean> {
		const query = `query HasLiked {
			FarcasterReactions(
				input: {filter: {castUrl: {_eq: "${castUrl}"}, criteria: liked, reactedBy: {_eq: "fc_fid:${fid}"}}, blockchain: ALL} input: 
			) {
				Reaction {
					reactedBy {
						userId
					}
				}
			}
		}`;
		const { data, error } = await fetchQuery(query);
		if (error) {
			this.logger.error(
				`Failed to check if user ${fid} has liked cast ${castUrl}`,
				error,
			);
			return error.toString();
		}
		if (data.FarcasterReactions.Reaction) {
			this.logger.debug(`User ${fid} has liked cast ${castUrl}`);
			return true;
		}
		this.logger.info(`User ${fid} has not liked cast ${castUrl}`);
		return false;
	}

	/**
	 * Checks if the user has reCasted a cast.
	 * @param fid - The user's ID.
	 * @param castUrl - The URL of the cast.
	 * @returns A promise that resolves to a boolean indicating if the user has reCasted the cast.
	 */
	async hasUserReCastedCast(fid: number, castUrl: string): Promise<boolean> {
		const query = `query HasLiked {
			FarcasterReactions(
				input: {filter: {castUrl: {_eq: "${castUrl}"}, criteria: recasted, reactedBy: {_eq: "fc_fid:${fid}"}}, blockchain: ALL} input: 
			) {
				Reaction {
					reactedBy {
						userId
					}
				}
			}
		}`;
		const { data, error } = await fetchQuery(query);
		if (error) {
			this.logger.error(
				`Failed to check if user ${fid} has reCasted cast ${castUrl}`,
				error,
			);
			return error.toString();
		}
		if (data.FarcasterReactions.Reaction) {
			this.logger.debug(`User ${fid} has reCasted cast ${castUrl}`);
			return true;
		}
		this.logger.info(`User ${fid} has not reCasted cast ${castUrl}`);
		return false;
	}

	/**
	 * Checks if the user has followed another user.
	 * @param userFid - The user's ID.
	 * @param targetFid - The ID of the user being followed.
	 * @returns A promise that resolves to a boolean indicating if the user has followed the target user.
	 */
	async hasUserFollowedUser(userFid: number, targetFid: string): Promise<boolean> {
		const query = `query HasFollowed {
			SocialFollowings(
				input: {filter: {identity: {_eq: "fc_fid:${userFid}"}, dappName: {_eq: farcaster}}, blockchain: ALL}
			) {
				Following {
					followingAddress {
						socials {
							userId
						}
					}
				}
			}
		}`;
		const { data, error } = await fetchQuery(query);
		if (error) {
			console.log(error);
			return error.toString();
		}
		for (const following of data.SocialFollowings.Following) {
			if (
				following.followingAddress.socials.some(
					(i: { userId: string }) => i.userId === targetFid.toString(),
				)
			) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Retrieves the user's bio.
	 * @param fid - The user's ID.
	 * @returns A promise that resolves to the user's bio.
	 */
	async getUserBio(fid: number): Promise<string> {
		const query = `query ProfileBio {
			Socials(
				input: {filter: {userId: {_eq: "${fid.toString()}"}, dappName: {_eq: farcaster}}, blockchain: ethereum}
			) {
				Social {
					profileBio
				}
			}
		}`;
		const { data, error } = await fetchQuery(query);
		if (error) {
			console.log(error);
			return error.toString();
		}
		return data.Socials.Social[0].profileBio;
	}

	/**
	 * Retrieves the latest first name associated with the user's ID.
	 * @param fid - The user's ID.
	 * @returns A promise that resolves to the latest first name.
	 */
	async getFnameByFid(fid: number): Promise<string> {
		const query = `query FnameByFid {
			Socials(
				input: {filter: {userId: {_eq: "${fid.toString()}"}, dappName: {_eq: farcaster}}, blockchain: ethereum}
			) {
				Social {
					fnames
				}
			}
		}`;
		const { data, error } = await fetchQuery(query);
		if (error) {
			console.log(error);
			return error.toString();
		}
		const fnames = data.Socials.Social[0].fnames;
		return fnames[fnames.length - 1];
	}

	/**
	 * Retrieves the user's ID based on the given first name.
	 * @param fname - The first name.
	 * @returns A promise that resolves to the user's ID.
	 */
	async getFidByFname(fname: string): Promise<number> {
		const query = `query FidByFname {
			Socials(
				input: {filter: {userId: {_eq: "${fname.toString().replace("@", "")}"}, dappName: {_eq: farcaster}}, blockchain: ethereum}
			) {
				Social {
					userId
				}
			}
		}`;
		const { data, error } = await fetchQuery(query);
		if (error) {
			console.log(error);
			return error.toString();
		}
		this.logger.debug(`User ID for first name ${fname} is ${data.Socials.Social[0].userId}`);	
		return data.Socials.Social[0].userId;
	}
}
