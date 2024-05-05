import { Redis } from "@upstash/redis";

export class RedisService {
  public readonly client: Redis;
  constructor() {
    if (!Bun.env.REDIS_URL) throw new Error("REDIS_URL not found in env");
    if (!Bun.env.REDIS_TOKEN) throw new Error("REDIS_TOKEN not found in env");
    this.client = new Redis({
      url: Bun.env.REDIS_URL,
      token: Bun.env.REDIS_TOKEN,
    });
  }
}
