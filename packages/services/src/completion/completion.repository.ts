import { plainToInstance } from "class-transformer";
import type { PrismaClient } from "database";
//auto like retweet and post stretch goal
export class CompletionRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async canUserCompleteQuest(userId: string, questId: string) {
		const fid = await this.getUserFid(userId);
		if (!fid) {
			return false;
		}
		const hasCompleted = await this.hasCompletedQuest(userId, questId);
		if (hasCompleted) {
			return false;
		}
		return true;
	}

  getUserWalletAddress = async (userId: string) => {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        ethAddress: true,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user.ethAddress;
  }

	getQuestValidationCriteria = async <T>(
		questId: string,
		type: new () => T,
	): Promise<T> => {
		const criteria = await this.prisma.quests
			.findUniqueOrThrow({
				where: {
					id: questId,
				},
				select: {
					validationCriteria: true,
				},
			})
			.catch((e) => {
				throw new Error("Quest not found");
			});
		if (!criteria.validationCriteria) {
			throw new Error("Quest does not have validation criteria");
		}
		return plainToInstance(type, criteria.validationCriteria);
	};
	//bad dont do this
	async getUserFid(userId: string) {
		const $ = await this.prisma.user.findFirst({
			where: {
				id: userId,
			},
			select: {
				fid: true,
			},
		});
		if (!$) {
			throw new Error("User not found");
		}
		return $.fid;
	}
	async getQuestType(questId: string) {
		const data = await this.prisma.quests.findUnique({
			where: {
				id: questId,
			},
			select: {
				questType: {
					select: {
						type: true,
					},
				},
			},
		});
		if (!data) {
			throw new Error("Quest not found");
		}
		return data.questType.type;
	}
	async hasCompletedQuest(userId: string, questId: string) {
		const hasCompleted = await this.prisma.userQuestCompletion.findUnique({
			where: {
				userId_questId: {
					userId: userId,
					questId: questId,
				},
			},
			select: {
				id: true,
			},
		});
		if (hasCompleted) {
			return true;
		}
		return false;
	}
	async completeQuest(userId: string, questId: string) {
		return this.prisma.userQuestCompletion.create({
			data: {
				userId: userId,
				questId: questId,
			},
		});
	}
}
