import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { init, fetchQuery } from "@airstack/node";
import { Redis } from "@upstash/redis"
import { privy } from "./privy";

init(Bun.env.AIRSTACK_API_KEY);

const app = new Elysia()
	.use(swagger())
	.get("/", () => "Hello Elysia")
	.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
