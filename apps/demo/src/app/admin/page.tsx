"use client";
import { useQuests } from "@/hooks/client/useQuests";
import { QuestsTable } from "../components/admin/tables/quests-table";

export default function AdminPage() {
  const { quests } = useQuests();

  const questsFormattedForTable = quests?.map((quest) => {
    return {
      title: quest?.name,
      id: quest?.id,
    };
  });

  return (
    <main className='flex flex-col items-center justify-between w-full'>
      <QuestsTable
        quests={questsFormattedForTable}
        openDeleteModal={() => {}}
        openEditModal={() => {}}
      />
    </main>
  );
}
