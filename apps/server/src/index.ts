import { Elysia, error, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { Logestic } from "logestic";
import { privy } from "./privy";
import { customAlphabet, urlAlphabet } from "nanoid";
import type { AuthTokenClaims } from "@privy-io/server-auth";
import { services } from "services";

async function doAuth(headers: Record<string, string | undefined>) {
	if (!headers.authorization?.startsWith("Bearer ")) {
		return {
			status: 400,
		};
	}
	const verifiedClaims = await privy.verifyAuthToken(
		headers.authorization.replace("Bearer ", ""),
	);
	if (!verifiedClaims.userId)
		return {
			status: 403,
		};
	return {
		id: verifiedClaims.userId,
		status: 200,
	};
}

const app = new Elysia()
	.use(swagger())
	.use(Logestic.preset("common"))
	.get("/", () => "Hello Elysia")
	// TODO: make work
	.post("/organizations/create", async ({ headers }) => {
		const orginizationId = await services.organizationService.createOrganization(
			"Farquest",
			"https://localhost:5173/auth",
			"https://localhost:5173/auth/callback",
		);
		return {
			id: orginizationId,
		};
	})
	.guard({
		beforeHandle({ set, headers }) {
			const header = headers["FARQUEST-API-KEY"];
			if (!header) {
				return (set.status = 'Unauthorized');
			}
			const userApiKey = services.organizationService.getOrganizationIdByApiKey(
				// biome-ignore lint/style/noNonNullAssertion: <explanation>
				headers["FARQUEST-API-KEY"]!,
			);
			return true;
		},
	})
	.post(
		"/session/:correlatedId",
		async ({ headers, params }) => {
			const auth = await doAuth(headers);
			if (auth.status !== 200) {
				return error(auth.status);
			}
			let verifiedClaims: AuthTokenClaims;
			try {
				if (!headers.authorization) return error(401);
				const bearer = headers.authorization.replace("Bearer ", "");
				verifiedClaims = await privy.verifyAuthToken(bearer);
			} catch (e) {
				console.error(`Token verification failed with error ${e}.`);
				return error(401);
			}
			const user = await privy.getUser(verifiedClaims.userId);
			const orginizationId =
				services.organizationService.getOrganizationIdByApiKey();
			await services.userService.createUser(
				verifiedClaims.userId,
				user.orginizationId,
				user.farcaster?.fid,
			);
			const sessionToken = customAlphabet(urlAlphabet, 20);
			// TODO: store session token in redis
			return {
				redirectUrl: `https://localhost:5173/auth?state=${sessionToken}`,
			};
		},
		{
			headers: t.Object({
				authorization: t.String(),
			}),
		},
	)
	.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
