import { Alchemy, Network } from "alchemy-sdk";

export class AlchemyService {
  private readonly alchemy: Alchemy;
  constructor() {
    this.alchemy = new Alchemy({
      apiKey: Bun.env.ALCHEMY_API_KEY,
      network: Network.BASE_MAINNET,
    });
  }
}
