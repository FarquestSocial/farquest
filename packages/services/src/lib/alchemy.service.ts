import { Alchemy, Network } from "alchemy-sdk";

export class AlchemyService {
	private readonly alchemy: Alchemy;
	constructor() {
		this.alchemy = new Alchemy({
			apiKey: Bun.env.ALCHEMY_API_KEY,
			network: Network.BASE_MAINNET,
		});
	}

	checkIfUserOwnsERC20 = async (
		address: string,
		contractAddress: string,
	): Promise<boolean> => {
		const $ = await this.alchemy.core.getTokenBalances(address, [
			contractAddress,
		]);
		const balance = $.tokenBalances[0].tokenBalance;
		if (!balance) {
			return false;
		}
		return parseInt(balance) > 0;
	};

	checkIfUserOwnsNFT = async (
		address: string,
		contractAddress: string,
	): Promise<boolean> => {
		const ownedNfts = await this.alchemy.nft.getNftsForOwner(address, {
			contractAddresses: [contractAddress],
		});
		const numberOfOwnedTokens = ownedNfts.ownedNfts.length;
		return numberOfOwnedTokens > 0;
	};
}
