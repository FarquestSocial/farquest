"use client";

import { useAdminContext } from "@/contexts/admin-context";
import { Plus } from "phosphor-react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { DropdownMenu } from "../menu/Menu";

export const FilterBar = () => {
	const { openQuestModal } = useAdminContext();

	return (
		<div className="rounded-xl bg-secondary justify-between flex items-center p-6">
			<DropdownMenu options={["Newest", "Oldest"]} title="Sort" />
			<PrimaryButton onClick={() => openQuestModal?.("new")}>
				<div className="flex items-center py-2">
					<Plus />
					<p className="pl-2 capitalize">New Quest</p>
				</div>
			</PrimaryButton>
		</div>
	);
};
