import { init } from "@airstack/node";

export class AirStackService {
  constructor() {
    //initialize the airStack skd
    init("YOUR_AIRSTACK_API_KEY", "dev");
  }

  async hasUserCommentedOnCast(fid: string, castId: string): Promise<Boolean> {
    //check if the user has commented on a cast
    return true;
  }
  async hasUserLikedCast(fid: string, castId: string): Promise<Boolean> {
    //check if the user has liked a cast
    return true;
  }
  async hasUserFollowedUser(userFid: string, targetFid: string): Promise<Boolean> {
    //check if the user has followed another user
    return true;
  }
  async getUerBio(fid: string): Promise<string> {
    //return users bio
    return "User Bio";
  }
  async hasUserReCastedCast(fid: string, castId: string): Promise<Boolean> {
    //check if the user has reCasted a cast
    return true;
  }
}
