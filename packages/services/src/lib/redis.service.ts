import { Redis } from "@upstash/redis";

export class RedisService {
	public readonly client: Redis;
	constructor() {
		this.client = new Redis({
			url: "https://usw1-fun-grouse-33163.upstash.io",
			token:
				"AYGLASQgYjY1ZDEyMmQtYjViNC00OTAxLWIxOWEtMzgyNGU0ODlhZTQ3OGYzMzgyOTkwMDc1NDdiMDg1YmZmN2Q0NTYzYTllNzU=",
		});
	}
}
