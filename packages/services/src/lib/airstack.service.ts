import { init } from "@airstack/node";

export class AirStackService {
  constructor() {
    //initialize the airStack skd
    init("YOUR_AIRSTACK_API_KEY", "dev");
  }

  async getUserProfilePicture(fid: string): Promise<string> {
    //return user profile picture
    return "https://images.ctfassets.net/q5ulk4bp65r7/1bCAEs75IaQY3G88OtkU9y/c88ff7264b91574f0ad7fea9fd699ddc/image1.png";
  }

  async hasUserCommentedOnCast(fid: string, castId: string): Promise<boolean> {
    //check if the user has commented on a cast
    return true;
  }
  async hasUserLikedCast(fid: string, castId: string): Promise<boolean> {
    //check if the user has liked a cast
    return true;
  }
  async hasUserFollowedUser(
    userFid: string,
    targetFid: string
  ): Promise<boolean> {
    //check if the user has followed another user
    return true;
  }
  async getUerBio(fid: string): Promise<string> {
    //return users bio
    return "User Bio";
  }
  async hasUserReCastedCast(fid: string, castId: string): Promise<boolean> {
    //check if the user has reCasted a cast
    return true;
  }
}
