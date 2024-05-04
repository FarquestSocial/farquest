import type { Prisma } from "@prisma/client";
import type { PrismaClient } from "database";

export class OrganizationRepository {
	constructor(private readonly prisma: PrismaClient) {}

	getOrganizationIdByApiKeyPrefix(apiKeyPrefix: string) {
		return this.prisma.organization.findFirst({
			where: {
				apiKeyPrefix,
			},
			select: {
				id: true,
				apikey: true,
			},
		});
	}

	async createOrganization(data: Prisma.OrganizationCreateInput) {
		return this.prisma.organization.create({
			data: data,
		});
	}

	async updateOrganization(
		organizationId: string,
		data: Prisma.OrganizationUpdateInput,
	) {
		return this.prisma.organization.update({
			where: {
				id: organizationId,
			},
			data: data,
		});
	}

	async getOrganizationAuthRedirectUrl(organizationId: string) {
		return this.prisma.organization.findUnique({
			where: {
				id: organizationId,
			},
			select: {
				callbackUrl: true,
			},
		});
	}

	async getOrganizationRedirectUrl(organizationId: string) {
		return this.prisma.organization.findUnique({
			where: {
				id: organizationId,
			},
			select: {
				authRedirectUrl: true,
			},
		});
	}

	async getOrganizationById(organizationId: string) {
		return this.prisma.organization.findUnique({
			where: {
				id: organizationId,
			},
		});
	}
}
