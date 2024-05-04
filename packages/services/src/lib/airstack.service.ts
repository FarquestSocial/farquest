import { fetchQuery, init } from "@airstack/node";

export class AirStackService {
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
			console.log(error);
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
			console.log(error);
			return error.toString();
		}
		if (data.FarcasterReactions.Reaction) {
			return true;
		}
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
			console.log(error);
			return error.toString();
		}
		if (data.FarcasterReactions.Reaction) {
			return true;
		}
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
			console.log(error);
			return error.toString();
		}
		if (data.FarcasterReactions.Reaction) {
			return true;
		}
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
		for (const following of data.data.SocialFollowings.Following) {
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
		return data.data.Socials.Social[0].profileBio;
	}
}
