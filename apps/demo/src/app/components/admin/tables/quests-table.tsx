// import type { IAdminQuest } from "@/utils/types";
import { type ReactNode, useMemo } from "react";
import { DeleteButton } from "./delete-button";
import { EditButton } from "./edit-button";
import { Table } from "./table";

interface QuestsTableProps {
  openDeleteModal: (id: string) => void;
  openEditModal: (_quest: any) => void;
  quests: any[] | undefined;
}

const columnNames = ["name"];

export const QuestsTable = ({
  openDeleteModal,
  openEditModal,
  quests,
}: QuestsTableProps) => {
  const rows = useMemo(() => {
    return quests?.map((quest) => {
      return [
        quest?.title,
        <div className='flex w-full justify-end gap-x-1.5'>
          {/* <EditButton
						onEditClick={() => {
							openEditModal(quest);
						}}
					/>
					<DeleteButton openDeleteModal={() => openDeleteModal(quest?.id)} /> */}
        </div>,
      ];
    }) as ReactNode[][];
  }, [quests]);

  return (
    <Table
      columnNames={columnNames}
      rows={rows}
    />
  );
};
