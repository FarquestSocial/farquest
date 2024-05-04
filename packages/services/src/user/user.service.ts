import type { UserRepository } from "./user.repository";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserFidFromUserID(userId: string) {
    return await this.userRepository.getUserFidFromUserID(userId);
  }

  async createUser(corelationId: string, organizationId: string, fid: number) {
    return this.userRepository.createUser({
      corelationId: corelationId,
      fid: fid,
      organization: {
        connect: {
          id: organizationId,
        },
      },
    });
  }

  async getUserCorelationId(userId: string) {
    return this.userRepository.getUserCorelationId(userId);
  }
  
  async getUserQuestCompletion(userId: string, questId: string) {
    return this.userRepository.getUserQuestCompletion(userId, questId);
  }

  async getUserById(userId: string) {
    return this.userRepository.getUserById(userId);
  }
}
