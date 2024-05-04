import useSWR from "swr";
import { routes } from "@/constants/admin-routes";
import { IAdminQuest } from "@/utils/types";
import { fetcher } from "@/constants/fetcher";

export const useQuests = () => {
  const url = routes.getAllQuests;

  const { data, error, isLoading, mutate } = useSWR<IAdminQuest[]>(
    url,
    fetcher
  );

  return {
    quests: data,
    isLoading,
    error,
    mutate,
  };
};
