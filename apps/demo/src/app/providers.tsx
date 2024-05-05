"use client";
import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, SIWEProvider } from "connectkit";
import { siweConfig } from "../utils/siwe-config";
import { wagmiConfig } from "../utils/wagmi-config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<WagmiProvider config={wagmiConfig}>
			<QueryClientProvider client={queryClient}>
				<SIWEProvider {...siweConfig}>
					<ConnectKitProvider theme="midnight">
							{children}
							<ToastContainer
								position="top-right"
								autoClose={5000}
								hideProgressBar={false}
								newestOnTop
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
								theme="dark"
							/>
					</ConnectKitProvider>
				</SIWEProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
};