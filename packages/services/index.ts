import { PrismaClient } from "database";
import { CompletionRepository } from "./src/completion/completion.repository";
import { CompletionService } from "./src/completion/completion.service";
import { AirStackService } from "./src/lib/airstack.service";
import { RedisService } from "./src/lib/redis.service";
import { OrganizationRepository } from "./src/organization/organization.repository";
import { OrganizationService } from "./src/organization/organization.service";
import { QuestRepository } from "./src/quest/quest.repository";
import { QuestService } from "./src/quest/quest.service";
import { UserRepository } from "./src/user/user.repository";
import { UserService } from "./src/user/user.service";
import { WebhookService } from "./src/webhook/webhook.service";

// Shared instances
const prisma = new PrismaClient({
	datasourceUrl: Bun.env.DATABASE_URL,
});
const completionRepository = new CompletionRepository(prisma);
const webhookService = new WebhookService();
const airStackService = new AirStackService();

/**
 * The services object contains instances of various services used in the application.
 */
export const services = {
	/**
	 * The organization service handles operations related to organizations.
	 */
	organizationService: new OrganizationService(
		new OrganizationRepository(prisma),
	),
	/**
	 * The user service handles operations related to users.
	 */
	userService: new UserService(new UserRepository(prisma), airStackService, webhookService),
	/**
	 * The quest service handles operations related to quests.
	 */
	questService: new QuestService(
		new QuestRepository(prisma),
		completionRepository,
	),
	/**
	 * The webhook service handles webhook operations.
	 */
	webhookService,
	/**
	 * The redis service handles operations related to Redis.
	 */
	redisService: new RedisService(),
	/**
	 * The completion service handles operations related to quest completions.
	 */
	completionService: new CompletionService(
		completionRepository,
		airStackService,
		webhookService,
	),
};

