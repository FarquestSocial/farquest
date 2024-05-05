import { treaty } from "@elysiajs/eden";
import type { App } from "server";
const api = treaty<App>(Bun.env.BASE_URL);
export default api
