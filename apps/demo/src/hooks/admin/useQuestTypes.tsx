import useSWR from "swr";
import { routes } from "@/constants/admin-routes";
import { IQuestTypes } from "@/utils/types";
import { fetcher } from "@/constants/fetcher";

export const useQuestsTypes = () => {
  const url = routes.getAllQuestTypes;

  const { data, error, isLoading, mutate } = useSWR<IQuestTypes[]>(
    url,
    fetcher
  );

  return {
    questTypes: data,
    isLoading,
    error,
    mutate,
  };
};
