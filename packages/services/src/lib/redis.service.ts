import { Redis } from "@upstash/redis";

/**
 * Represents a Redis service.
 */
export class RedisService {
  /**
   * The Redis client instance.
   */
  public readonly client: Redis;

  /**
   * Constructs a new instance of the RedisService class.
   * @throws {Error} Throws an error if UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN is not found in the environment variables.
   */
  constructor() {
    if (!Bun.env.UPSTASH_REDIS_REST_URL)
      throw new Error("UPSTASH_REDIS_REST_URL not found in env");
    if (!Bun.env.UPSTASH_REDIS_REST_TOKEN)
      throw new Error("UPSTASH_REDIS_REST_TOKEN not found in env");

    /**
     * The Redis client instance.
     * @type {Redis}
     */
    this.client = new Redis({
      url: Bun.env.UPSTASH_REDIS_REST_URL,
      token: Bun.env.UPSTASH_REDIS_REST_TOKEN,
    });
  }
}
