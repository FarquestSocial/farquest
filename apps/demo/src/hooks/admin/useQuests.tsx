import { routes } from "@/constants/admin-routes";
import { fetcher } from "@/constants/fetcher";
// import type { IAdminQuest } from "@/utils/types";
import useSWR from "swr";

export const useQuests = () => {
	const url = routes.getAllQuests;

	const { data, error, isLoading, mutate } = useSWR<any[]>(
		url,
		fetcher,
	);

	return {
		quests: data,
		isLoading,
		error,
		mutate,
	};
};
