"use client";

import { type ReactNode, createContext, useContext, useState } from "react";

interface AdminContextType {
	openQuestModal?: (_type: "edit" | "new") => void;
	isOpenQuestModal?: boolean;
	closeQuestModal?: () => void;
	type?: "edit" | "new";
}

const AdminContext = createContext<AdminContextType>({
	openQuestModal: () => {},
	closeQuestModal: () => {},
	isOpenQuestModal: false,
	type: "new",
});

export const AdminWrapper = ({ children }: { children: ReactNode }) => {
	const [isOpenQuestModal, setIsOpenQuestModal] = useState(false);
	const [type, setType] = useState<"edit" | "new">("new");

	const openQuestModal = (_type: "edit" | "new") => {
		setType(_type);
		setIsOpenQuestModal(true);
	};

	const closeQuestModal = () => {
		setIsOpenQuestModal(false);
	};

	const settings = {
		openQuestModal,
		closeQuestModal,
		isOpenQuestModal,
		type,
	};

	return (
		<AdminContext.Provider value={settings}>{children}</AdminContext.Provider>
	);
};

export const useAdminContext = () => {
	return useContext(AdminContext);
};
