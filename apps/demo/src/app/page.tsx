import { treaty } from "@elysiajs/eden";
import type { App } from "../../../server/src";
import { Navbar } from "./components/client/navbar/Navbar";

const client = treaty<App>("localhost:3000");

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-24'></main>
  );
}
