import Logger from "../common/logger";
import type { UserRepository } from "./user.repository";

export class UserService {
  private readonly logger = Logger(UserService.name);

  constructor(private readonly userRepository: UserRepository) {}

  async getUsersForOrganizationWithFilter(
    organizationId: string,
    page: number,
    limit: number,
    filter?: string // eth address or correlation id
  ) {
    try {
      return await this.userRepository.getUsersForOrganizationWithFilter(
        organizationId,
        page,
        limit,
        filter
      );
    } catch (error) {
      this.logger.error(
        `Failed to get users with filter for organization: ${organizationId}`,
        error
      );
      throw error;
    }
  }

  async getUserFidFromUserID(userId: string) {
    try {
      return await this.userRepository.getUserFidFromUserID(userId);
    } catch (error) {
      this.logger.error(`Failed to get FID for user: ${userId}`, error);
      throw error;
    }
  }

  async createUser(
    corelationId: string,
    organizationId: string,
    fid: number,
    ethAddress: string
  ): Promise<string> {
    try {
      await this.userRepository.createUser({
        corelationId,
        fid,
        ethAddress,
        organization: {
          connect: {
            id: organizationId,
          },
        },
      });
      return await this.userRepository.getAuthRedirectUrlForOrganizationId(
        organizationId
      );
    } catch (error) {
      this.logger.error(
        `Failed to create user and get auth redirect URL for organization: ${organizationId}`,
        error
      );
      throw error;
    }
  }

  async getUserIdFromOrganizationIdAndCorelationId(
    organizationId: string,
    corelationId: string
  ) {
    try {
      return this.userRepository.getUserIdFromCorAndOrgIf(
        organizationId,
        corelationId
      );
    } catch (error) {
      this.logger.error(
        `Failed to get user ID from correlation ID: ${corelationId} and organization ID: ${organizationId}`,
        error
      );
      throw error;
    }
  }

  async getUserCorelationId(userId: string) {
    try {
      return this.userRepository.getUserCorelationId(userId);
    } catch (error) {
      this.logger.error(
        `Failed to get correlation ID for user: ${userId}`,
        error
      );
      throw error;
    }
  }

  async getUserQuestCompletion(userId: string, questId: string) {
    try {
      return this.userRepository.getUserQuestCompletion(userId, questId);
    } catch (error) {
      this.logger.error(
        `Failed to get quest completion for user: ${userId} and quest: ${questId}`,
        error
      );
      throw error;
    }
  }

  async getUserById(userId: string) {
    try {
      return this.userRepository.getUserById(userId);
    } catch (error) {
      this.logger.error(`Failed to get user by ID: ${userId}`, error);
      throw error;
    }
  }
}
