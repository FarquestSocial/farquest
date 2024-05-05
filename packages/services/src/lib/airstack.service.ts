import { fetchQuery, init } from "@airstack/node";
import Logger from "../common/logger";

export class AirStackService {
	private readonly logger = Logger(AirStackService.name);
	constructor() {
		//initialize the airStack skd
		init(Bun.env.AIRSTACK_API_KEY, "dev");
	}

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
		/* sample response:
    {
      "data": {
        "Socials": {
          "Social": [
            {
              "profileImageContentValue": {
                "image": {
                  "original": "https://assets.airstack.xyz/v2/image/social/10/AvgSDH/GGNvVhlAEyvU5Rh7K84Cflvk7Flr4FUIvJcxeO+Fyg1x59bj+XnWaFhojxTRVmewzRNHcCR42ZNYiB0QCclmRh/MzpWD73vIVw4qKaBIphmgV5TlH46BVNm7nhGer6T3uWyS1eM/bs+Zg8dXKCPT4PSVA9RDR3Rfxh9cy/w9dAk+Qd8L9ODm1+CwNUYzHM29RBCoyf5HtMw3XGf0jneWpIIe7IpR7Om71xig=/original_image.jpg"
                }
              }
            }
          ]
        }
      }
    }
    */
		return data.Socials.Social[0].profileImageContentValue.image.original;
	}

	async hasUserCommentedOnCast(fid: number, castUrl: string): Promise<boolean> {
		//check if the user has commented on a cast
		// const query = `query HasCommented {
		//   FarcasterReplies(
		//     input: {filter: {repliedBy: {_eq: "fc_fid:${fid}"}, parentUrl: {_eq: "${castUrl}"}}, blockchain: ALL} input
		//   ) {
		//     Reply {
		//       rawText
		//       parentHash
		//       parentUrl
		//     }
		//   }
		// }`;
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
		// return data.Reply.length > 0;
	}
	async hasUserLikedCast(fid: number, castUrl: string): Promise<boolean> {
		//check if the user has liked a cast
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
	async hasUserReCastedCast(fid: number, castUrl: string): Promise<boolean> {
		//check if the user has reCasted a cast
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
	async hasUserFollowedUser(
		userFid: number,
		targetFid: string,
	): Promise<boolean> {
		//check if the user has followed another user
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
		/* sample response:
    {
      "data": {
        "SocialFollowings": {
          "Following": [
            {
              "followingAddress": {
                "socials": [
                  {
                    "userId": "188926"
                  }
                ]
              }
            },
            {
              "followingAddress": {
                "socials": [
                  {
                    "userId": "2602"
                  },
                  {
                    "userId": "0xb59aa5bb9270d44be3fa9b6d67520a2d28cf80ab"
                  }
                ]
              }
            }
          ]
        }
      }
    }
    */
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
	async getUserBio(fid: number): Promise<string> {
		//return users bio
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
		return data.Socials.Social[0].userId;
	}
}
