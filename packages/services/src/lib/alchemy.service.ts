import { Alchemy, Network } from "alchemy-sdk";
import Logger from "../common/logger";

export class AlchemyService {
	private readonly alchemy: Alchemy;
	private readonly logger = Logger(AlchemyService.name);

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
		try {
			const balances = await this.alchemy.core.getTokenBalances(address, [
				contractAddress,
			]);
			const balance = balances.tokenBalances[0].tokenBalance;
			if (!balance) {
				this.logger.info(
					`No balance found for ERC20 token at address ${contractAddress} for user ${address}`,
				);
				return false;
			}
			const ownsToken = Number.parseInt(balance) > 0;
			this.logger.info(
				`Checked ERC20 ownership for ${address}, owns token: ${ownsToken}`,
			);
			return ownsToken;
		} catch (error) {
			this.logger.error(
				`Error checking ERC20 token ownership for address ${address} on contract ${contractAddress}`,
				error,
			);
			throw new Error("Failed to check ERC20 token ownership");
		}
	};

	checkIfUserOwnsNFT = async (
		address: string,
		contractAddress: string,
	): Promise<boolean> => {
		try {
			const ownedNfts = await this.alchemy.nft.getNftsForOwner(address, {
				contractAddresses: [contractAddress],
			});
			const ownsNFT = ownedNfts.ownedNfts.length > 0;
			this.logger.info(
				`Checked NFT ownership for ${address}, owns NFT: ${ownsNFT}`,
			);
			return ownsNFT;
		} catch (error) {
			this.logger.error(
				`Error checking NFT ownership for address ${address} on contract ${contractAddress}`,
				error,
			);
			throw new Error("Failed to check NFT ownership");
		}
	};
}
