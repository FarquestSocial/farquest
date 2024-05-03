import { PrismaClient } from "database";
import type { Prisma } from "@prisma/client";

export class OrganizationRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async createOrganization(
    data: Prisma.OrganizationCreateInput
  ) {
    return this.prisma.organization.create({
      data: data,
    });
  }

  async getOrganizationById(id: string) {
    return this.prisma.organization.findUnique({
      where: {
        id,
      },
    });
  }
}
