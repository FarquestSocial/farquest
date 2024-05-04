import { PrivyClient } from "@privy-io/server-auth";

export const privy = new PrivyClient(
	Bun.env.PRIVY_APP_ID,
	Bun.env.PRIVY_APP_SECRET,
);

if (Bun.env.NODE_ENV === "development") {
	const privyUsers = await privy.getUsers();
	for (const user of privyUsers) {
        const id = user.id.replace("did:privy:", "");
        // TODO: grab associated user from database
		// const privyUser = await db.fetch<User>(`user:${id}`);
		// if (!privyUser) {
		// 	await db.create<User>("user", {
		// 		id: id,
		// 		username: id,
		// 		email: user.email?.address,
		// 		createdAt: user.createdAt,
		// 		updatedAt: new Date(),
		// 	});
		// }
	}
}