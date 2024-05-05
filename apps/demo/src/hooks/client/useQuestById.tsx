"use client";
import { routes } from "@/constants/admin-routes";
import { fetcher } from "@/constants/fetcher";
import { IQuest, IQuestType } from "@/utils/types";
// import type { IAdminQuest } from "@/utils/types";
import useSWR from "swr";

export const useQuestById = (questId: string) => {
  const url = "/api/get-quest-by-id?questId=" + questId;
  console.log("url", url);

  const { data, error, isLoading, mutate } = useSWR<IQuest>(url, fetcher);

  console.log("useQuestById data", data);

  console.log("useQuestById data", data);
  return {
    quest: data,
    isLoading,
    error,
    mutate,
  };
};
