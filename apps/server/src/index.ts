import { swagger } from "@elysiajs/swagger";
import type { AuthTokenClaims } from "@privy-io/server-auth";
import { Elysia, error, redirect, t } from "elysia";
import { Logestic } from "logestic";
import { customAlphabet, urlAlphabet } from "nanoid";
import { services } from "services";
import type { Session } from "services/src/common/types/session.type";
import { privy } from "./privy";

const nanoId = customAlphabet(urlAlphabet, 20);

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
	.post(
		"/organizations/create",
		async ({ body }) => {
			const organizationId =
				await services.organizationService.createOrganization(
					body.name,
					body.authRedirectUrl,
					body.callbackUrl,
				);
			return {
				id: organizationId,
			};
		},
		{
			body: t.Object({
				name: t.String(),
				authRedirectUrl: t.String(),
				callbackUrl: t.String(),
			}),
		},
	)
	.guard(
		{
			beforeHandle({ set, headers, cookie }) {
				if (!cookie.session.value.orgId) {
					const apiKey = headers.farquestapikey;
					if (!apiKey) {
						console.log("no api key");
						return (set.status = "Unauthorized");
					}
					const userOrgId =
						services.organizationService.getOrganizationIdByApiKey(apiKey);
					if (!userOrgId) {
						console.log("no org id");
						return (set.status = "Unauthorized");
					}
					cookie.session.value.orgId = userOrgId;
				}
			},
		},
		(app) =>
			app
				.post(
					"/session/:correlatedId",
					async ({ body, cookie }) => {
						const sessionToken = nanoId();
						services.redisService.client.set(
							sessionToken,
							JSON.stringify({
								userId: body.correlatedId,
								organizationId: cookie.session.value.orgId,
							} as Session),
						);
						return {
							redirectUrl: `https://localhost:5173/?state=${sessionToken}`,
						};
					},
					{
						headers: t.Object({
							authorization: t.String(),
							farquestapikey: t.String(),
						}),
						body: t.Object({
							correlatedId: t.String(),
						}),
					},
				)
				.get("/auth/:state", async ({ params }) => {
					const sessionRaw = (await services.redisService.client.get(
						params.state,
					)) as string;
					const session = JSON.parse(sessionRaw);
					if (!session) {
						return error(401);
					}
					return {
						userId: session.userId,
						organizationId: session.organizationId,
					};
				})
				.post(
					"/auth/callback",
					async ({ body, headers }) => {
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
						const privyUser = await privy.getUser(verifiedClaims.userId);
						if (!privyUser.farcaster) {
							return error(401);
						}
						const sessionRaw = (await services.redisService.client.get(
							body.state,
						)) as string;
						const session = JSON.parse(sessionRaw);
						if (!session) {
							return error(401);
						}
						if (!session.organizationId) {
							return error(401);
						}
						await services.userService.createUser(
							verifiedClaims.userId,
							session.organizationId,
							privyUser.farcaster.fid,
							privyUser.farcaster.ownerAddress,
						);
						const returnUrl = await services.userService.createUser(
							session.userId,
							session.organizationId,
							privyUser.farcaster.fid,
							privyUser.farcaster.ownerAddress,
						);
						return redirect(returnUrl);
					},
					{
						body: t.Object({
							state: t.String(),
						}),
					},
				),
	)
	.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
