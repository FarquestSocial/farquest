import { useQuests } from "@/hooks/client/useQuests";
import { Quests } from "./components/client/quests/quests";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-between p-24'>
      <Quests />
    </div>
  );
}
