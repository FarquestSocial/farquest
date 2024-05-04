"use client";

import { routes } from "@/constants/admin-routes";
import { useQuests } from "@/hooks/admin/useQuests";
import type { IAdminQuest } from "@/utils/types";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { RenderIfReady } from "@/app/components/shared/general/RenderIfReady";
import { QuestsTable } from "@/app/components/admin/tables/quests-table";
import { QuestModal } from "@/app/components/admin/modal/quests-modal";
import { DeleteModal } from "@/app/components/admin/modal/delete-modal";
import { useAdminContext } from "@/contexts/admin-context";

export default function QuestPage() {
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [questIdToDelete, setQuestIdToDelete] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [questToEdit, setQuestToEdit] = useState<IAdminQuest | undefined>(
		undefined,
	);
	const { quests, isLoading, error, mutate } = useQuests();
	const { isOpenQuestModal, type, openQuestModal, closeQuestModal } =
		useAdminContext();

	const toggleDeleteModal = () => {
		setIsDeleteModalOpen(!isDeleteModalOpen);
	};

	const deleteQuest = async () => {
		try {
			setIsDeleting(true);
			const url = routes.deleteQuest(questIdToDelete);
			const res = await axios.delete(url);

			setIsDeleting(false);
			toggleDeleteModal();
			await refreshQuests();
			toast.success("Quest deleted successfully");
		} catch (error) {
			console.log(error);
			toast.error("Failed to delete quest");
			setIsDeleting(false);
		}
	};

	const refreshQuests = async () => {
		await mutate();
	};

	return (
		<main className="">
			<div className="w-full flex flex-col gap-4">
				<section className="flex justify-between">
					<h1 className="text-left text-[24px] font-bold md:text-2xl">
						Quests
					</h1>
				</section>

				<section className="max-h-[500px] overflow-y-auto overflow-x-hidden pr-2">
					<RenderIfReady
						data={quests}
						isLoading={isLoading}
						isError={error}
						subject={"Quests"}
					>
						<QuestsTable
							openDeleteModal={(id) => {
								toggleDeleteModal();
								setQuestIdToDelete(id);
							}}
							openEditModal={(quest) => {
								openQuestModal?.("edit");
								setQuestToEdit(quest);
							}}
							quests={quests as IAdminQuest[]}
						/>
					</RenderIfReady>
				</section>
			</div>
			{isOpenQuestModal ? (
				<QuestModal
					isOpen={isOpenQuestModal}
					closeModal={() => {
						closeQuestModal?.();
						setQuestToEdit(undefined);
					}}
					title={type === "new" ? "New Quest" : "Edit Quest"}
					questToEdit={questToEdit}
					isEditMode={type === "edit"}
					refreshData={refreshQuests}
				/>
			) : null}
			{isDeleteModalOpen ? (
				<DeleteModal
					isOpen={isDeleteModalOpen}
					closeModal={toggleDeleteModal}
					itemToDelete="quest"
					onDelete={deleteQuest}
					isSubmitting={isDeleting}
				/>
			) : null}
		</main>
	);
}
