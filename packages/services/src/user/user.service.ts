import Logger from "../common/logger";
import { AuthEventTypes, AuthWebhook } from "../common/webhooks/auth.webhook";
import type { AirStackService } from "../lib/airstack.service";
import type { WebhookService } from "../webhook/webhook.service";
import type { UserRepository } from "./user.repository";

/**
 * Service class for managing user-related operations.
 */
export class UserService {
  private readonly logger = Logger(UserService.name);

  /**
   * Constructs a new instance of the UserService class.
   * @param userRepository The user repository.
   * @param airstackService The AirStack service.
   */
  constructor(
    private readonly userRepository: UserRepository,
    private readonly airstackService: AirStackService,
    private readonly webhookService: WebhookService
  ) {}

  /**
   * Retrieves users for an organization with optional filtering.
   * @param organizationId The ID of the organization.
   * @param page The page number.
   * @param limit The maximum number of users to retrieve per page.
   * @param filter Optional filter (eth address or correlation id).
   * @returns A promise that resolves to the users matching the specified criteria.
   * @throws If an error occurs while retrieving the users.
   */
  async getUsersForOrganizationWithFilter(
    organizationId: string,
    page: number,
    limit: number,
    filter?: string
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

  /**
   * Retrieves the FID (Fname ID) for a given Fname.
   * @param fname The Fname to search for.
   * @returns A promise that resolves to the FID.
   * @throws If an error occurs while retrieving the FID.
   */
  async getFidByFname(fname: string) {
    try {
      const data = await this.airstackService.getFidByFname(fname);
      this.logger.info(`Fname: ${fname} has FID: ${data}`);
      return data;
    } catch (error) {
      this.logger.error(`Failed to get user by fname: ${fname}`, error);
      throw error;
    }
  }

  /**
   * Retrieves the Fname for a given FID (Fname ID).
   * @param fid The FID to search for.
   * @returns A promise that resolves to the Fname.
   * @throws If an error occurs while retrieving the Fname.
   */
  async getFnameByFid(fid: number) {
    try {
      return await this.airstackService.getFnameByFid(fid);
    } catch (error) {
      this.logger.error(`Failed to get fname by fid: ${fid}`, error);
      throw error;
    }
  }

  /**
   * Creates a new user and returns the authentication redirect URL for the organization.
   * @param correlationId The correlation ID for the user.
   * @param organizationId The ID of the organization.
   * @param fid The FID (Fname ID) of the user.
   * @param ethAddress The Ethereum address of the user.
   * @returns A promise that resolves to the authentication redirect URL.
   * @throws If an error occurs while creating the user or retrieving the redirect URL.
   */
  async createUser(
    correlationId: string,
    organizationId: string,
    fid: number,
    ethAddress: string
  ): Promise<string> {
    try {
      await this.userRepository.createUser({
        correlationId,
        fid,
        ethAddress,
        organization: {
          connect: {
            id: organizationId,
          },
        },
      });

      const callbackUrl =
        await this.userRepository.getCallBackUrlForOrganization(organizationId);

      await this.webhookService.sendWebhook(
        callbackUrl,
        new AuthWebhook(
          AuthEventTypes.AUTH_COMPLETE,
          correlationId,
          ethAddress,
          new Date(),
          "user has successfully authenticated to farcaster"
        )
      );

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

  /**
   * Retrieves the user ID for a given organization ID and correlation ID.
   * @param organizationId The ID of the organization.
   * @param correlationId The correlation ID of the user.
   * @returns A promise that resolves to the user ID.
   * @throws If an error occurs while retrieving the user ID.
   */
  async getUserIdFromOrganizationIdAndCorrelationId(
    organizationId: string,
    correlationId: string
  ) {
    try {
      return this.userRepository.getUserIdFromCorAndOrgIf(
        organizationId,
        correlationId
      );
    } catch (error) {
      this.logger.error(
        `Failed to get user ID from correlation ID: ${correlationId} and organization ID: ${organizationId}`,
        error
      );
      throw error;
    }
  }

  /**
   * Retrieves the correlation ID for a given user ID.
   * @param userId The ID of the user.
   * @returns A promise that resolves to the correlation ID.
   * @throws If an error occurs while retrieving the correlation ID.
   */
  async getUserCorrelationId(userId: string) {
    try {
      return this.userRepository.getUserCorrelationId(userId);
    } catch (error) {
      this.logger.error(
        `Failed to get correlation ID for user: ${userId}`,
        error
      );
      throw error;
    }
  }

  /**
   * Retrieves the quest completion status for a given user and quest.
   * @param userId The ID of the user.
   * @param questId The ID of the quest.
   * @returns A promise that resolves to the quest completion status.
   * @throws If an error occurs while retrieving the quest completion status.
   */
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

  /**
   * Retrieves a user by their ID.
   * @param userId The ID of the user.
   * @returns A promise that resolves to the user.
   * @throws If an error occurs while retrieving the user.
   */
  async getUserById(userId: string) {
    try {
      return this.userRepository.getUserById(userId);
    } catch (error) {
      this.logger.error(`Failed to get user by ID: ${userId}`, error);
      throw error;
    }
  }
}
