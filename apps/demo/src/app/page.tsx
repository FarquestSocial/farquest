import { treaty } from "@elysiajs/eden";
import type { App } from "../../../server/src";

const client = treaty<App>("localhost:3000");

export default function Home() {
	return <main className="flex flex-col items-center justify-between p-24" />;
}
