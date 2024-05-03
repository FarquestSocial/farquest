/// <reference types="@types/bun" />

declare module "bun" {
    interface Env {
        AIRSTACK_API_KEY: string;
        DATABASE_HOST: string;
        DATABASE_USERNAME: string;
        DATABASE_PASSWORD: string;
    }
}