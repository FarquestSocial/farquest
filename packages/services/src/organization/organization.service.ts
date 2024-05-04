import crypto from "node:crypto";
import type { OrganizationRepository } from "./organization.repository";
import Logger from "../common/logger";

export class OrganizationService {
  private readonly logger = Logger(OrganizationService.name);

  constructor(
    private readonly organizationRepository: OrganizationRepository
  ) {}

  async getOrganizationIdByApiKey(apiKey: string): Promise<string | null> {
    try {
      // Extract prefix using regex that captures characters before the first dot
      const prefixMatch = apiKey.match(/^([^\.]+)/);
      const prefix = prefixMatch ? prefixMatch[1] : null;

      if (!prefix) {
        this.logger.info("API key prefix extraction failed.");
        return null;
      }

      const organization =
        await this.organizationRepository.getOrganizationIdByApiKeyPrefix(
          prefix
        );
      if (!organization || !organization.apikey) {
        this.logger.info(`No organization found with prefix: ${prefix}`);
        return null;
      }

      // Use Bun.password to compare the API key without the prefix to the stored API key
      const apiKeyWithoutPrefix = apiKey.substring(prefix.length + 1);
      const isMatch = await Bun.password.verify(
        apiKeyWithoutPrefix,
        organization.apikey
      );
      if (!isMatch) {
        this.logger.info(`API key verification failed for prefix: ${prefix}`);
        return null;
      }

      return organization.id;
    } catch (error) {
      this.logger.error("Failed to retrieve organization by API key.", error);
      throw error;
    }
  }

  async createOrganization(
    name: string,
    authRedirectUrl: string,
    callbackUrl: string
  ): Promise<string> {
    try {
      // Generate a random prefix and API key
      const prefix = crypto.randomBytes(3).toString("hex");
      const apiKey = crypto.randomBytes(16).toString("hex");

      const hashedApiKey = await Bun.password.hash(apiKey);

      await this.organizationRepository.createOrganization({
        name,
        authRedirectUrl,
        callbackUrl,
        apiKeyPrefix: prefix,
        apikey: hashedApiKey,
      });

      this.logger.info(`Organization created with prefix: ${prefix}`);
      // Combine prefix and API key for use
      return `${prefix}.${apiKey}`;
    } catch (error) {
      this.logger.error("Failed to create organization.", error);
      throw error;
    }
  }
}
