"use client";
import { useQuests } from "@/hooks/client/useQuests";
import Image from "next/image";
import { useState } from "react";
import { ModalWrapper } from "../../admin/modal/modal-wrapper";
import { QuestModal } from "./quest-modal";

export const Quests = () => {
  const { quests } = useQuests();
  const [questToComplete, setQuestToComplete] = useState("");
  console.log("quests", quests);

  return (
    <>
      <div className='flex flex-col items-center w-full'>
        <div className='p-24 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
          {quests?.map((quest) => (
            // these are the quest cards
            <button
              className='quest-card relative w-full h-full rounded-lg shadow-md p-6 grid gap-4 grid-cols-1'
              onClick={() => {
                setQuestToComplete(quest.id);
              }}
            >
              {/* <Image
                src={quest.image}
                alt=''
                fill
              /> */}
              <h2 className='text-xl font-bold text-fg'>{quest.name}</h2>
              <p className='text-fg'>{quest.description}</p>
            </button>
          ))}
        </div>
      </div>
      {!!questToComplete && (
        <QuestModal
          isOpen={!!questToComplete}
          handleModalClose={() => setQuestToComplete("")}
          questId={questToComplete}
        />
      )}
    </>
  );
};
