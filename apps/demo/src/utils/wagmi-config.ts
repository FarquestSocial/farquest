import { IS_TESTNET } from "@/constants/is-testnet";
import { getDefaultConfig } from "connectkit";
import { mainnet, sepolia } from "viem/chains";
import { createConfig, http } from "wagmi";

export const wagmiConfig = createConfig(
	getDefaultConfig({
		// Your dApps chains
		chains: [IS_TESTNET ? sepolia : mainnet],
		transports: {
			// RPC URL for each chain
			[mainnet.id]: http(
				`https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID_MAINNET}`
			),
			[sepolia.id]: http(
				`https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID_SEPOLIA}`
			),
		},

		// Required API Keys
		walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

		// Required App Info
		appName: "Demo App",
		ssr: true,
	})
);