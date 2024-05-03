import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia()
	.use(swagger())
	.get("/", () => "Hello Elysia")
	.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
