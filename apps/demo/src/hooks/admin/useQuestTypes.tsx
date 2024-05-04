import { routes } from "@/constants/admin-routes";
import { fetcher } from "@/constants/fetcher";
import type { IQuestTypes } from "@/utils/types";
import useSWR from "swr";

export const useQuestsTypes = () => {
	const url = routes.getAllQuestTypes;

	const { data, error, isLoading, mutate } = useSWR<IQuestTypes[]>(
		url,
		fetcher,
	);

	return {
		questTypes: data,
		isLoading,
		error,
		mutate,
	};
};
