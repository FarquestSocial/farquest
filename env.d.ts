/// <reference types="@types/bun" />

declare module "bun" {
    interface Env {
        AIRSTACK_API_KEY: string;
        DATABASE_HOST: string;
        DATABASE_USERNAME: string;
        DATABASE_PASSWORD: string;
        DATABASE_URL: string;
        PRIVY_APP_ID: string;
        PRIVY_APP_SECRET: string;
        PRIVY_JWKS_ENDPOINT: string;
        PRIVY_JWT_KEY: string;
    }
}