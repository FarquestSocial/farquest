import type { Prisma, PrismaClient } from "database";
import Logger from "../common/logger";

export class UserRepository {
	private readonly logger = Logger(UserRepository.name);

	constructor(private readonly prisma: PrismaClient) {}

	async getUsersForOrganizationWithFilter(
		organizationId: string,
		page: number,
		limit: number,
		filter?: string, // eth address or correlation id
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
				error,
			);
			throw new Error(
				`Could not retrieve users for organization ${organizationId}`,
			);
		}
	}

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
				error,
			);
			throw error;
		}
	}

	async getUserIdFromCorAndOrgId(
		organizationId: string,
		correlationId: string,
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
				error,
			);
			throw error;
		}
	}

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
				error,
			);
			throw error;
		}
	}

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

	async getUserIdFromCorAndOrgIf(
		organizationId: string,
		correlationId: string,
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
					`User not found for correlation ID: ${correlationId} and organization ID: ${organizationId}`,
				);
				throw new Error("User not found");
			}
			return $.id;
		} catch (error) {
			this.logger.error(
				`Failed to get user ID from correlation ID: ${correlationId} and organization ID: ${organizationId}`,
				error,
			);
			throw error;
		}
	}

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
				error,
			);
			throw error;
		}
	}

	async createUser(data: Prisma.UserCreateInput) {
		try {
			return await this.prisma.user.create({
				data: data,
			});
		} catch (error) {
			this.logger.error("Failed to create user", error);
			throw error;
		}
	}

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
}
