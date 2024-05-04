import { PrismaClient } from "database";
import { OrganizationService } from "./src/organization/organization.service";
import { OrganizationRepository } from "./src/organization/organization.repository";
import { UserService } from "./src/user/user.service";
import { UserRepository } from "./src/user/user.repository";

const prisma = new PrismaClient({
  datasourceUrl: Bun.env.DATABASE_URL,
});

export const services = {
  organizationService: new OrganizationService(
    new OrganizationRepository(prisma)
  ),
  userService: new UserService(new UserRepository(prisma)),
};
