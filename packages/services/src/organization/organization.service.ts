import type { OrganizationRepository } from "./organization.repository";

export class OrganizationService {
  constructor(
    private readonly organizationRepository: OrganizationRepository
  ) {}

  async getOrganizationIdByApiKey(apiKey: string) {
    const prefix = "use regex to get prefix"
    const $ = await this.organizationRepository.getOrganizationIdByApiKeyPrefix(prefix)
    if(!$){
      return null;
    }
    //user bytecrypt to compare the api key
    return $.id;
  } 


    async createOrganization(data: any) {
        //generate the api key and prefix
        // return `${preix}-${apiKey}`;
        return this.organizationRepository.createOrganization(data);
    }
}
