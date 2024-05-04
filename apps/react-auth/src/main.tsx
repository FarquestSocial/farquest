import { PrivyProvider } from "@privy-io/react-auth";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<PrivyProvider
			appId={import.meta.env.VITE_PRIVY_APP_ID}
			config={{
				// Display email and wallet as login methods
				loginMethods: ["farcaster"],
				// Customize Privy's appearance in your app
				appearance: {
					theme: "#8A63D1",
					logo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/61d5e5e7-57b2-4250-9c95-a03d3fa5f82d_400x400.png",
				},
				// Create embedded wallets for users who don't have a wallet
				embeddedWallets: {
					createOnLogin: "users-without-wallets",
				},
			}}
		>
			<App />
		</PrivyProvider>
	</React.StrictMode>,
);
