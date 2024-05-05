import { treaty } from "@elysiajs/eden";
import type { App } from "server";
// console.log("Bun.env.BASE_URL", Bun.env.NEXT_PUBLIC_BASE_URL);
const api = treaty<App>("https://api.farquest.social");
export default api;
