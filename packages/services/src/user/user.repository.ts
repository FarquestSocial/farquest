import type { Prisma, PrismaClient } from "database";
import Logger from "../common/logger";

/**
 * Repository class for managing user data.
 */
export class UserRepository {
  private readonly logger = Logger(UserRepository.name);

  /**
   * Constructs a new UserRepository instance.
   * @param prisma - The PrismaClient instance.
   */
  constructor(private readonly prisma: PrismaClient) {}

  /**
   * Retrieves users for an organization with optional filtering.
   * @param organizationId - The ID of the organization.
   * @param page - The page number.
   * @param limit - The maximum number of users to retrieve per page.
   * @param filter - Optional filter string for filtering users by ETH address or correlation ID.
   * @returns A Promise that resolves to an array of users.
   * @throws If there was an error retrieving the users.
   */
  async getUsersForOrganizationWithFilter(
    organizationId: string,
    page: number,
    limit: number,
    filter?: string // eth address or correlation id
  ) {
    try {
      return await this.prisma.user.findMany({
        where: {
          organizationId,
          OR: [
            {
              correlationId: {
                contains: filter,
              },
            },
            {
              ethAddress: {
                contains: filter,
              },
            },
          ],
        },
        skip: (page - 1) * limit,
        take: limit,
      });
    } catch (error) {
      this.logger.error(
        `Failed to get users for organization: ${organizationId}`,
        error
      );
      throw new Error(
        `Could not retrieve users for organization ${organizationId}`
      );
    }
  }

  /**
   * Retrieves the authentication redirect URL for an organization.
   * @param organizationId - The ID of the organization.
   * @returns A Promise that resolves to the authentication redirect URL.
   * @throws If the organization was not found or there was an error retrieving the URL.
   */
  async getAuthRedirectUrlForOrganizationId(organizationId: string) {
    try {
      const organization = await this.prisma.organization.findFirst({
        where: { id: organizationId },
        select: { authRedirectUrl: true },
      });
      if (!organization) {
        this.logger.warn(`Organization not found: ${organizationId}`);
        throw new Error("Organization not found");
      }
      return organization.authRedirectUrl;
    } catch (error) {
      this.logger.error(
        `Failed to get auth redirect URL for organization: ${organizationId}`,
        error
      );
      throw error;
    }
  }

  /**
   * Retrieves the user ID from a correlation ID and organization ID.
   * @param organizationId - The ID of the organization.
   * @param correlationId - The correlation ID.
   * @returns A Promise that resolves to the user ID.
   * @throws If the user ID was not found or there was an error retrieving it.
   */
  async getUserIdFromCorAndOrgId(
    organizationId: string,
    correlationId: string
  ) {
    try {
      return await this.prisma.user.findUnique({
        where: {
          correlationId_organizationId: {
            correlationId,
            organizationId,
          },
        },
        select: {
          id: true,
        },
      });
    } catch (error) {
      this.logger.error(
        `Failed to get user ID from correlation ID: ${correlationId} and organization ID: ${organizationId}`,
        error
      );
      throw error;
    }
  }

  /**
   * Retrieves the FID (Firebase ID) for a user.
   * @param userId - The ID of the user.
   * @returns A Promise that resolves to the FID.
   * @throws If the FID was not found or there was an error retrieving it.
   */
  async getUserFid(userId: string) {
    try {
      return await this.prisma.user.findFirst({
        where: { id: userId },
        select: { fid: true },
      });
    } catch (error) {
      this.logger.error(`Failed to get FID for user: ${userId}`, error);
      throw error;
    }
  }

  /**
   * Retrieves the quest completion status for a user and quest.
   * @param userId - The ID of the user.
   * @param questId - The ID of the quest.
   * @returns A Promise that resolves to the quest completion status.
   * @throws If there was an error retrieving the quest completion status.
   */
  async getUserQuestCompletion(userId: string, questId: string) {
    try {
      return await this.prisma.userQuestCompletion.findUnique({
        where: {
          userId_questId: {
            userId,
            questId,
          },
        },
      });
    } catch (error) {
      this.logger.error(
        `Failed to get quest completion for user: ${userId} and quest: ${questId}`,
        error
      );
      throw error;
    }
  }

  /**
   * Retrieves the FID (Firebase ID) for a user from their user ID.
   * @param userId - The ID of the user.
   * @returns A Promise that resolves to the FID.
   * @throws If the user was not found or there was an error retrieving the FID.
   */
  async getUserFidFromUserID(userId: string) {
    try {
      const $ = await this.prisma.user.findFirst({
        where: {
          id: userId,
        },
        select: {
          fid: true,
        },
      });
      if (!$) {
        this.logger.warn(`User not found: ${userId}`);
        throw new Error("User not found");
      }
      return $.fid;
    } catch (error) {
      this.logger.error(`Failed to get FID for user: ${userId}`, error);
      throw error;
    }
  }

  /**
   * Retrieves the user ID from a correlation ID and organization ID.
   * @param organizationId - The ID of the organization.
   * @param correlationId - The correlation ID.
   * @returns A Promise that resolves to the user ID.
   * @throws If the user ID was not found or there was an error retrieving it.
   */
  async getUserIdFromCorAndOrgIf(
    organizationId: string,
    correlationId: string
  ) {
    try {
      const $ = await this.prisma.user.findUnique({
        where: {
          correlationId_organizationId: {
            correlationId,
            organizationId,
          },
        },
        select: {
          id: true,
        },
      });
      if (!$) {
        this.logger.warn(
          `User not found for correlation ID: ${correlationId} and organization ID: ${organizationId}`
        );
        throw new Error("User not found");
      }
      return $.id;
    } catch (error) {
      this.logger.error(
        `Failed to get user ID from correlation ID: ${correlationId} and organization ID: ${organizationId}`,
        error
      );
      throw error;
    }
  }

  /**
   * Retrieves the correlation ID for a user.
   * @param userId - The ID of the user.
   * @returns A Promise that resolves to the correlation ID.
   * @throws If the user was not found or there was an error retrieving the correlation ID.
   */
  async getUserCorrelationId(userId: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          correlationId: true,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user.correlationId;
    } catch (error) {
      this.logger.error(
        `Failed to get correlation ID for user: ${userId}`,
        error
      );
      throw error;
    }
  }

  /**
   * Creates a new user.
   * @param data - The user data.
   * @returns A Promise that resolves to the created user.
   * @throws If there was an error creating the user.
   */
  async createUser(data: Prisma.UserCreateInput) {
    console.log("data", data);

    try {
      return await this.prisma.user.upsert({
        where: {
          correlationId_organizationId: {
            correlationId: data.correlationId,
            organizationId: data.organization.connect?.id as string,
          },
        },
        update: {},
        create: data,
      });
    } catch (error) {
      this.logger.error("Failed to create user", error);
      throw error;
    }
  }

  /**
   * Retrieves a user by their ID.
   * @param userId - The ID of the user.
   * @returns A Promise that resolves to the user.
   * @throws If there was an error retrieving the user.
   */
  async getUserById(userId: string) {
    try {
      return await this.prisma.user.findUnique({
        where: { id: userId },
      });
    } catch (error) {
      this.logger.error(`Failed to get user by ID: ${userId}`, error);
      throw error;
    }
  }

  getCallBackUrlForOrganization = async (organizationId: string) => {
    const $ = await this.prisma.organization.findUnique({
      where: {
        id: organizationId,
      },
      select: {
        callbackUrl: true,
      },
    });
    if (!$) {
      throw new Error("Organization not found");
    }
    return $.callbackUrl;
  }
}
