import type { Prisma } from "database";
import type { PrismaClient } from "database";
import Logger from "../common/logger";

/**
 * Repository class for managing organization data.
 */
export class OrganizationRepository {
	private readonly logger = Logger(OrganizationRepository.name);

	constructor(private readonly prisma: PrismaClient) {}

	/**
	 * Retrieves the organization ID by API key prefix.
	 * @param apiKeyPrefix - The API key prefix.
	 * @returns The organization ID and API key.
	 * @throws Error if the database operation fails.
	 */
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
				error,
			);
			throw new Error("Database operation failed");
		}
	}

	/**
	 * Creates a new organization.
	 * @param data - The organization data to create.
	 * @returns The created organization.
	 * @throws Error if the database operation fails.
	 */
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

	/**
	 * Updates an existing organization.
	 * @param organizationId - The ID of the organization to update.
	 * @param data - The updated organization data.
	 * @returns The updated organization.
	 * @throws Error if the database operation fails.
	 */
	async updateOrganization(
		organizationId: string,
		data: Prisma.OrganizationUpdateInput,
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
				error,
			);
			throw new Error("Database operation failed");
		}
	}

	/**
	 * Retrieves the organization's authentication redirect URL by ID.
	 * @param organizationId - The ID of the organization.
	 * @returns The organization's authentication redirect URL.
	 * @throws Error if the database operation fails.
	 */
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
				error,
			);
			throw new Error("Database operation failed");
		}
	}

	/**
	 * Retrieves the organization's redirect URL by ID.
	 * @param organizationId - The ID of the organization.
	 * @returns The organization's redirect URL.
	 * @throws Error if the database operation fails.
	 */
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
				error,
			);
			throw new Error("Database operation failed");
		}
	}

	/**
	 * Retrieves the organization by ID.
	 * @param organizationId - The ID of the organization.
	 * @returns The organization.
	 * @throws Error if the database operation fails.
	 */
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
				error,
			);
			throw new Error("Database operation failed");
		}
	}
}
