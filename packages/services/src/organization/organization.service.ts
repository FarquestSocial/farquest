import type { OrganizationRepository } from "./organization.repository";
import crypto from "node:crypto";

export class OrganizationService {
  constructor(
    private readonly organizationRepository: OrganizationRepository
  ) {}

  async getOrganizationIdByApiKey(apiKey: string): Promise<string | null> {
    // Extract prefix using regex that captures characters before the first dot
    const prefixMatch = apiKey.match(/^([^\.]+)/);
    const prefix = prefixMatch ? prefixMatch[1] : null;

    if (!prefix) {
      return null;
    }

    const organization =
      await this.organizationRepository.getOrganizationIdByApiKeyPrefix(prefix);
    if (!organization || !organization.apikey) {
      return null;
    }

    // Use bytecryp to compare the API key without the prefix to the stored API key
    const apiKeyWithoutPrefix = apiKey.substring(prefix.length + 1);
    const isMatch = await Bun.password.verify(
      apiKeyWithoutPrefix,
      organization.apikey
    );
    if (!isMatch) {
      return null;
    }

    return organization.id;
  }

  async createOrganization(
    name: string,
    authRedirectUrl: string,
    callbackUrl: string
  ): Promise<string> {
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

    // Combine prefix and API key for use
    return `${prefix}.${apiKey}`;
  }
}
