import { treaty } from "@elysiajs/eden";
import type { App } from "server";
console.log("process.env.BASE_URL", process.env.NEXT_PUBLIC_BASE_URL);
const api = treaty<App>(process.env.BASE_URL);
export default api;
