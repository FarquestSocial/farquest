import { init } from "@airstack/node";

export class AirStackService {
  constructor() {
    //initialize the airStack skd
    init("YOUR_AIRSTACK_API_KEY", "dev");
  }

  async getUserProfilePicture(fid: number): Promise<string> {
    //return user profile picture
    return "https://images.ctfassets.net/q5ulk4bp65r7/1bCAEs75IaQY3G88OtkU9y/c88ff7264b91574f0ad7fea9fd699ddc/image1.png";
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
    targetFid: string
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
