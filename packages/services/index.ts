import { PrismaClient } from "database";
import { OrganizationService } from "./src/organization/organization.service";
import { OrganizationRepository } from "./src/organization/organization.repository";
import { UserService } from "./src/user/user.service";
import { UserRepository } from "./src/user/user.repository";
import { QuestService } from "./src/quest/quest.service";
import { QuestRepository } from "./src/quest/quest.repository";
import { WebhookService } from "./src/webhook/wenhook.service";
import { CompletionService } from "./src/completion/completion.service";
import { CompletionRepository } from "./src/completion/completion.repository";

const prisma = new PrismaClient({
  datasourceUrl: Bun.env.DATABASE_URL,
});

export const services = {
  organizationService: new OrganizationService(
    new OrganizationRepository(prisma)
  ),
  userService: new UserService(new UserRepository(prisma)),
  questService: new QuestService(new QuestRepository(prisma)),
  webhookService: new WebhookService(),
  //completionService: new CompletionService(new CompletionRepository(prisma)),
};
