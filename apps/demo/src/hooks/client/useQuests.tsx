"use client";
import { routes } from "@/constants/admin-routes";
import { fetcher } from "@/constants/fetcher";
import { IQuestType } from "@/utils/types";
// import type { IAdminQuest } from "@/utils/types";
import useSWR from "swr";

export const useQuests = () => {
  const url = routes.getAllQuests;
  console.log("url", url);

  const { data, error, isLoading, mutate } = useSWR<IQuestType[]>(url, fetcher);

  return {
    quests: data,
    isLoading,
    error,
    mutate,
  };
};
