import type { Prisma, PrismaClient } from "database";

export class UserRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async getUserIdFromCorAndOrgIf(organizationId: string, corelationId: string) {
		return this.prisma.user.findUnique({
			where: {
				corelationId_organizationId: {
					corelationId,
					organizationId,
				},
			},
			select: {
				id: true,
			},
		});
	}
	async getUserFid(userId: string) {
		return this.prisma.user.findFirst({
			where: {
				id: userId,
			},
			select: {
				fid: true,
			},
		});
	}
	async getUserQuestCompletion(userId: string, questId: string) {
		return this.prisma.userQuestCompletion.findUnique({
			where: {
				userId_questId: {
					userId: userId,
					questId: questId,
				},
			},
		});
	}

	async createUser(data: Prisma.UserCreateInput) {
		return this.prisma.user.create({
			data: data,
		});
	}

	async getUserCorelationId(userId: string) {
		return this.prisma.user.findFirst({
			where: {
				id: userId,
			},
			select: {
				corelationId: true,
			},
		});
	}

	async getUserFidFromUserID(userId: string) {
		return this.prisma.user.findFirst({
			where: {
				id: userId,
			},
			select: {
				fid: true,
			},
		});
	}

	async getUserById(userId: string) {
		return this.prisma.user.findUnique({
			where: {
				id: userId,
			},
		});
	}
}
