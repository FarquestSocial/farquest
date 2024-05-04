import { fetchQuery, init } from "@airstack/node";

export class AirStackService {
	constructor() {
		//initialize the airStack skd
		init(Bun.env.AIRSTACK_API_KEY, "dev");
	}

	async getUserProfilePicture(fid: number): Promise<string> {
		//return user profile picture
		const query = `query MyQuery {
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
		const data = await fetchQuery(query);
		return data.user.profilePictureUrl;
	}

	async hasUserCommentedOnCast(fid: number, castId: string): Promise<boolean> {
		//check if the user has commented on a cast
		return true;
	}
	async hasUserLikedCast(fid: number, castId: string): Promise<boolean> {
		//check if the user has liked a cast
		return true;
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
