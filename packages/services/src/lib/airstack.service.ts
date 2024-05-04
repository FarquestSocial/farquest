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
          profileImage
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
		const query = `query HasCommented {
      FarcasterReplies(
        input: {filter: {repliedBy: {_eq: "fc_fid:${fid}"}, parentUrl: {_eq: "${castUrl}"}}, blockchain: ALL} input
      ) {
        Reply {
          rawText
          parentHash
          parentUrl
        }
      }
    }`;
		const { data, error } = await fetchQuery(query);
		if (error) {
			console.log(error);
			return error.toString();
		}
		return data.Reply.length > 0;
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
	async hasUserFollowedUser(
		userFid: number,
		targetFid: string,
	): Promise<boolean> {
		//check if the user has followed another user
		return true;
	}
	async getUerBio(fid: number): Promise<string> {
		//return users bio
		return "User Bio";
	}
	async hasUserReCastedCast(fid: number, castId: string): Promise<boolean> {
		//check if the user has reCasted a cast
		return true;
	}
}
