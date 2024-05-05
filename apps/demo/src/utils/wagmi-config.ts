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
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
    // Required API Keys
    walletConnectProjectId: "bb12715933336f06282a18512494dc6b",
    // Required App Info
    appName: "Demo App",
    ssr: true,
  })
);
