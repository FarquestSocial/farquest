import type { Prisma, PrismaClient } from "database";

export class UserRepostory {
  constructor(private readonly prisma: PrismaClient) {}

  createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: data,
    });
  }
  getUserCorelationId(userId: string) {
    return this.prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        corilatedId: true,
      },
    });
  }

  getUserById(userId: string) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
}
