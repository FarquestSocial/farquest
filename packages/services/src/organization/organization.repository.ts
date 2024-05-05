import type { Prisma } from "database";
import type { PrismaClient } from "database";
import Logger from "../common/logger";
export class OrganizationRepository {
  private readonly logger = Logger(OrganizationRepository.name);
  constructor(private readonly prisma: PrismaClient) {}

  async getOrganizationIdByApiKeyPrefix(apiKeyPrefix: string) {
    try {
      return await this.prisma.organization.findFirst({
        where: {
          apiKeyPrefix,
        },
        select: {
          id: true,
          apikey: true,
        },
      });
    } catch (error) {
      this.logger.error(
        `Failed to retrieve organization by API key prefix: ${apiKeyPrefix}`,
        error
      );
      throw new Error("Database operation failed");
    }
  }

  async createOrganization(data: Prisma.OrganizationCreateInput) {
    try {
      return await this.prisma.organization.create({
        data: data,
      });
    } catch (error) {
      this.logger.error("Failed to create organization", error);
      throw new Error("Database operation failed");
    }
  }

  async updateOrganization(
    organizationId: string,
    data: Prisma.OrganizationUpdateInput
  ) {
    try {
      return await this.prisma.organization.update({
        where: {
          id: organizationId,
        },
        data: data,
      });
    } catch (error) {
      this.logger.error(
        `Failed to update organization with ID: ${organizationId}`,
        error
      );
      throw new Error("Database operation failed");
    }
  }

  async getOrganizationAuthRedirectUrl(organizationId: string) {
    try {
      return await this.prisma.organization.findUnique({
        where: {
          id: organizationId,
        },
        select: {
          callbackUrl: true,
        },
      });
    } catch (error) {
      this.logger.error(
        `Failed to retrieve organization auth redirect URL for ID: ${organizationId}`,
        error
      );
      throw new Error("Database operation failed");
    }
  }

  async getOrganizationRedirectUrl(organizationId: string) {
    try {
      return await this.prisma.organization.findUnique({
        where: {
          id: organizationId,
        },
        select: {
          authRedirectUrl: true,
        },
      });
    } catch (error) {
      this.logger.error(
        `Failed to retrieve organization redirect URL for ID: ${organizationId}`,
        error
      );
      throw new Error("Database operation failed");
    }
  }

  async getOrganizationById(organizationId: string) {
    try {
      return await this.prisma.organization.findUnique({
        where: {
          id: organizationId,
        },
      });
    } catch (error) {
      this.logger.error(
        `Failed to retrieve organization by ID: ${organizationId}`,
        error
      );
      throw new Error("Database operation failed");
    }
  }
}
