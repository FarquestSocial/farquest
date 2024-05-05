/// <reference types="@types/bun" />

declare module "bun" {
	interface Env {
		AIRSTACK_API_KEY: string;
		DATABASE_HOST: string;
		DATABASE_USERNAME: string;
		DATABASE_PASSWORD: string;
		DATABASE_URL: string;
		PRIVY_APP_ID: string;
		BASE_URL: string;
		NEXTAUTH_URL: string;
		NEXTAUTH_SECRET: string;

		// should be the same as PRIVY_APP_ID
		VITE_PRIVY_APP_ID: string;
		PRIVY_APP_SECRET: string;
		PRIVY_JWKS_ENDPOINT: string;
		PRIVY_JWT_KEY: string;

		DEMO_PRIVY_APP_ID: string;
		// should be the same as DEMO_PRIVY_APP_ID
		VITE_DEMO_PRIVY_APP_ID: string;
		DEMO_PRIVY_APP_SECRET: string;
		DEMO_PRIVY_JWKS_ENDPOINT: string;
		DEMO_PRIVY_JWT_KEY: string;
	}
}
