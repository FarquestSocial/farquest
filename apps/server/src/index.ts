import { logger } from "@bogeychan/elysia-logger";
import cors from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import type { AuthTokenClaims } from "@privy-io/server-auth";
import { PrivyClient } from "@privy-io/server-auth";
import { Elysia, error, t } from "elysia";
import { customAlphabet, urlAlphabet } from "nanoid";
import { services } from "services";
import type { Session } from "services/src/common/types/session.type";

const nanoId = customAlphabet(urlAlphabet, 20);

export const privy = new PrivyClient(
  Bun.env.PRIVY_APP_ID,
  Bun.env.PRIVY_APP_SECRET
);

async function doAuth(headers: Record<string, string | undefined>) {
  if (!headers.authorization?.startsWith("Bearer ")) {
    return {
      status: 400,
    };
  }
  const verifiedClaims = await privy.verifyAuthToken(
    headers.authorization.replace("Bearer ", "")
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
  .use(
    cors({
      origin: "*",
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "farquestapikey",
        "Farquestapikey",
      ],
    })
  )
  .use(
    swagger({
      documentation: {
        info: {
          title: "Farquest API",
          version: "1.0.2",
          description:
            "Documentation for using the api.farquest.social questing API",
        },
        tags: [
          {
            name: "quest",
            description: "Quest related endpoints",
          },
          {
            name: "user",
            description: "User related endpoints",
          },
          {
            name: "organization",
            description: "Organization related endpoints",
          },
          {
            name: "session",
            description: "Session related endpoints",
          },
          {
            name: "auth",
            description: "Auth related endpoints",
          },
        ],
      },
    })
  )
  .use(
    logger({
      level: "info",
    })
  )
  .post(
    "/organizations/create",
    async ({ body }) => {
      const organizationId =
        await services.organizationService.createOrganization(
          body.name,
          body.authRedirectUrl,
          body.callbackUrl
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
      detail: {
        tags: ["organization"],
        description: "Create a new organization",
      },
    }
  )
  .get(
    "/fidToFname/:fid",
    async ({ params }) => {
      const fname = await services.userService.getFnameByFid(Number.parseInt(params.fid));
      if (!fname) {
        return {
          status: 404,
        };
      }
      return {
        username: fname,
      };
    },
    {
      params: t.Object({
        fid: t.String(),
      }),
      detail: {
        tags: ["user"],
        description: "Get a Farcaster username by their FID",
      },
    }
  )
  .get(
    "/fnameToFid/:fname",
    async ({ params }) => {
      const fid = await services.userService.getFidByFname(params.username);
      if (!fid) {
        return {
          status: 404,
        };
      }
      return {
        fid: fid,
      };
    },
    {
      params: t.Object({
        username: t.String(),
      }),
      detail: {
        tags: ["user"],
        description: "Get a Farcaster FID by their username",
      },
    }
  )
  .get(
    "/quest/types",
    async ({ params }) => {
      const questTypes = await services.questService.getAllQuestTypes();
      return questTypes;
    },
    {
      detail: {
        tags: ["quest"],
        description: "Get all quest types",
      },
    }
  )
  .get(
    "/quest/requiredFields/:id",
    async ({ params }) => {
      const quest = await services.questService.getQuestTypeRequiredFields(
        params.id
      );
      return quest;
    },
    {
      params: t.Object({
        id: t.String(),
      }),
      detail: {
        tags: ["quest"],
        description: "Get the required fields for a quest",
      },
    }
  )
  .guard(
    {
      async beforeHandle({ set, headers, cookie: { session } }) {
        if (!session.value) {
          const apiKey = headers.farquestapikey;
          console.log("api key", apiKey);
          if (!apiKey) {
            console.log("no api key");
            return (set.status = "Unauthorized");
          }

          const userOrgId =
            await services.organizationService.getOrganizationIdByApiKey(
              apiKey
            );
          if (!userOrgId) {
            console.log("no org id");
            return (set.status = "Unauthorized");
          }
          session.value = {
            orgId: userOrgId,
          };
        }
      },
      // headers: t.Object({
      //   farquestapikey: t.String(),
      // }),
      cookie: t.Cookie({
        session: t.Optional(
          t.Object({
            orgId: t.String(),
          })
        ),
      }),
    },
    (app) =>
      app
        .post(
          "/session/:correlatedId",
          async ({ body, cookie }) => {
            const sessionToken = nanoId();
            if (!cookie.session.value?.orgId) {
              return error(401);
            }
            services.redisService.client.set(
              sessionToken,
              JSON.stringify({
                userId: body.correlatedId,
                organizationId: cookie.session.value.orgId,
              } as Session)
            );
            return {
              redirectUrl: `${Bun.env.AUTH_URL}/?state=${sessionToken}`,
            };
          },
          {
            body: t.Object({
              correlatedId: t.String(),
            }),
            detail: {
              tags: ["session"],
              description: "Create a new session with a correlated ID",
            },
          }
        )

        // .get(
        // 	"/auth/:state",
        // 	async ({ params }) => {
        // 		const sessionRaw = (await services.redisService.client.get(
        // 			params.state,
        // 		)) as string;
        // 		const session = JSON.parse(sessionRaw);
        // 		if (!session) {
        // 			return error(401);
        // 		}
        // 		return redirect(`https://localhost:5173/?state=${params.state}`);
        // 	},
        // 	{
        // 		detail: {
        // 			tags: ["auth"],
        // 			description: "Get the redirect URL to start a session",
        // 		},
        // 	},
        // )
        .post(
          "/auth/callback",
          async ({ body, headers }) => {
            const auth = await doAuth(headers);
            console.log("auth", auth);
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
            console.log("verifiedClaims", verifiedClaims);

            const privyUser = await privy.getUser(verifiedClaims.userId);
            if (!privyUser.farcaster) {
              return error(401);
            }
            // console.log("privyUser", privyUser);
            const sessionRaw = (await services.redisService.client.get(
              body.state
            )) as string;
            const session: {
              userId: string;
              organizationId: string;
            } = sessionRaw as unknown as {
              userId: string;
              organizationId: string;
            };

            console.log("sessionzz", session);
            if (!session) {
              return error(401);
            }
            if (!session.organizationId) {
              return error(401);
            }

            // console.log("before create user and getting returnUrl");

            const returnUrl = await services.userService.createUser(
              session.userId,
              session.organizationId,
              privyUser.farcaster.fid,
              privyUser.farcaster.ownerAddress
            );
            console.log("returnUrl", returnUrl);

            return `${returnUrl}?auth=true`;
          },
          {
            body: t.Object({
              state: t.String(),
            }),
            detail: {
              tags: ["auth"],
              description:
                "Callback to session with Privy Auth, returns URL to redirect back to your app",
            },
            headers: t.Object({
              authorization: t.String(),
              farquestapikey: t.String(),
            }),
          }
        )
        .get(
          "/quest/completions/count/:id",
          async ({ params }) => {
            const questCompletions =
              await services.questService.getNumberOfQuestCompletions(
                params.id
              );
            return questCompletions;
          },
          {
            params: t.Object({
              id: t.String(),
            }),
            detail: {
              tags: ["quest"],
              description: "Get the number of quest completions for a quest",
            },
          }
        )
        .get(
          "/quest/validation/:id",
          async ({ params }) => {
            const questValidationCriteria =
              await services.questService.getQuestTypeRequiredFields(params.id);
            return questValidationCriteria;
          },
          {
            params: t.Object({
              id: t.String(),
            }),
            detail: {
              tags: ["quest"],
              description: "Get the validation criteria for a quest",
            },
          }
        )
        .get(
          "/quest/:id",
          async ({ params, cookie }) => {
            const quest = await services.questService.getQuestById(params.id);
            return quest;
          },
          {
            params: t.Object({
              id: t.String(),
            }),
            detail: {
              tags: ["quest"],
              description: "Get a quest by ID",
            },
          }
        )
        .get(
          "/quest/:id/user/:userId",
          async ({ params, cookie }) => {
            if (!cookie.session.value?.orgId) {
              return error(401);
            }
            const userId =
              await services.userService.getUserIdFromOrganizationIdAndCorrelationId(
                cookie.session.value.orgId,
                params.correlatedId
              );
            const quest = await services.questService.getQuestById(
              params.id,
              userId
            );
            return quest;
          },
          {
            params: t.Object({
              id: t.String(),
              correlatedId: t.String(),
            }),
            detail: {
              tags: ["quest"],
              description: "Get a quest by ID for a specific user by their ID",
            },
          }
        )
        .get(
          "/quest/list/:page/:filter",
          async ({ params, cookie }) => {
            if (!cookie.session.value?.orgId) {
              return error(401);
            }
            const quests =
              await services.questService.getQuestsForOrganizationWithFilter(
                cookie.session.value?.orgId,
                Number.parseInt(params.page),
                10,
                params.filter ?? "ALL"
              );
            return quests;
          },
          {
            params: t.Object({
              page: t.String(),
              filter: t.Optional(
                t.Union([
                  t.Literal("ACTIVE"),
                  t.Literal("COMPLETE"),
                  t.Literal("ALL"),
                  t.Literal("NOT_STARTED"),
                ])
              ),
            }),
            cookie: t.Cookie({
              session: t.Optional(
                t.Object({
                  orgId: t.String(),
                })
              ),
            }),
            detail: {
              tags: ["quest"],
              description: "Get quests paginated, optionally with a filter",
            },
          }
        )
        .post(
          "/quest/create",
          async ({ body, cookie }) => {
            if (!cookie.session.value?.orgId) {
              return error(401);
            }
            const quest = await services.questService.createQuest(
              cookie.session.value.orgId,
              body.name,
              body.description,
              body.image,
              new Date(body.startsAt),
              new Date(body.endsAt),
              body.questTypeId,
              body.validationCriteria,
              body.customMetadata,
              body.customCallbackMetadata
            );
            return quest;
          },
          {
            body: t.Object({
              name: t.String(),
              description: t.String(),
              image: t.String(),
              startsAt: t.String({
                format: "date-time",
              }),
              endsAt: t.String({
                format: "date-time",
              }),
              questTypeId: t.String(),
              validationCriteria: t.Any(),
              customMetadata: t.Optional(t.Any()),
              customCallbackMetadata: t.Optional(t.Any()),
            }),
            detail: {
              tags: ["quest"],
              description: "Create a new quest",
            },
          }
        )
        .post(
          "/quest/complete",
          async ({ body, cookie }) => {
            if (!cookie.session.value?.orgId) {
              return error(401);
            }
            const userId =
              await services.userService.getUserIdFromOrganizationIdAndCorrelationId(
                cookie.session.value.orgId,
                body.correlationId
              );
            const questStatus = await services.completionService.completeQuest(
              userId,
              body.questId
            );
            if (!questStatus) {
              return error(401);
            }
            return {
              status: 200,
            };
          },
          {
            body: t.Object({
              questId: t.String(),
              correlationId: t.String(),
            }),
            detail: {
              tags: ["quest"],
              description: "Complete a quest",
            },
          }
        )
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
