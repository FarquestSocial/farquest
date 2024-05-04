export const truncateText = (str: string | `0x${string}`, n = 5): string => {
	if (str) {
		if (str.length <= n) {
			return str;
		}
		return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
	}
	return "";
};

export const cleanPhoneNumber = (phoneNumber: string): string => {
	return phoneNumber.replace(/\D/g, "");
};

export const setHoursOnDate = (
	date: Date,
	timeOfDay: "end" | "beginning",
): Date => {
	if (timeOfDay === "end") {
		return new Date(new Date(date).setUTCHours(23, 59, 59, 999));
	}
	return new Date(new Date(date).setUTCHours(0, 0, 0, 0));
};

export const formatDateTime = (date: Date): string => {
	//ex. 2024-04-29T09:37:54.340Z -> 2024-04-29
	return new Date(date).toISOString()?.split("T")?.[0];
};

export const addAtSymbolToUsernames = (usernames: string[]): string[] => {
	return usernames.map((i: string) => {
		if (!i.startsWith("@")) {
			return `@${i}`;
		}
		return i;
	});
};

export const extractTweetIdFromUrl = (tweetUrl: string): string => {
	const urlParts = tweetUrl.split("/");
	let tweetId = urlParts.pop() || "";

	if (tweetId.includes("?")) {
		tweetId = tweetId.split("?")[0];
	}

	return tweetId;
};
