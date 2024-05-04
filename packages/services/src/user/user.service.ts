import type { UserRepository } from "./user.repository";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsersForOrganizationWithFilter(
    organizationId: string,
    page: number,
    limit: number,
    filter?: string //eth address or corelation id
  ) {
    return this.userRepository.getUsersForOrganizationWithFilter(
      organizationId,
      page,
      limit,
      filter
    );
  }
  async getUserFidFromUserID(userId: string) {
    return await this.userRepository.getUserFidFromUserID(userId);
  }

  async createUser(
    corelationId: string,
    organizationId: string,
    fid: number,
    ethAddress: string
  ) {
    return this.userRepository.createUser({
      corelationId: corelationId,
      fid: fid,
      ethAddress: ethAddress,
      organization: {
        connect: {
          id: organizationId,
        },
      },
    });
  }

  async getUserIdFromCorAndOrgIf(organizationId: string, corelationId: string) {
    return this.userRepository.getUserIdFromCorAndOrgIf(
      organizationId,
      corelationId
    );
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
