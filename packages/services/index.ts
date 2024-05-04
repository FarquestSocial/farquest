import { PrismaClient } from "database";
import { CompletionRepository } from "./src/completion/completion.repository";
import { CompletionService } from "./src/completion/completion.service";
import { RedisService } from "./src/lib/redis.service";
import { OrganizationRepository } from "./src/organization/organization.repository";
import { OrganizationService } from "./src/organization/organization.service";
import { QuestRepository } from "./src/quest/quest.repository";
import { QuestService } from "./src/quest/quest.service";
import { UserRepository } from "./src/user/user.repository";
import { UserService } from "./src/user/user.service";
import { WebhookService } from "./src/webhook/webhook.service";
import { AirStackService } from "./src/lib/airstack.service";

// Shared instances
const prisma = new PrismaClient({
  datasourceUrl: Bun.env.DATABASE_URL,
});
const completionRepository = new CompletionRepository(prisma);
const webhookService = new WebhookService();
const airStackService = new AirStackService();

// Services with dependencies
export const services = {
  organizationService: new OrganizationService(
    new OrganizationRepository(prisma)
  ),
  userService: new UserService(new UserRepository(prisma)),
  questService: new QuestService(
    new QuestRepository(prisma),
    completionRepository
  ),
  webhookService,
  redisService: new RedisService(),
  completionService: new CompletionService(
    completionRepository,
    airStackService,
    webhookService
  ),
};
