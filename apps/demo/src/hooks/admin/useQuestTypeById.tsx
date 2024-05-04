import useSWR from "swr";
import { routes } from "@/constants/admin-routes";
import { IQuestTypeById } from "@/utils/types";
import axios from "axios";
import { fetcher } from "@/constants/fetcher";

export const useQuestTypeById = ({ id }: { id?: string }) => {
  const url = routes.getQuestTypeById(id);

  const { data, error, isLoading, mutate } = useSWR<IQuestTypeById[]>(
    url,
    fetcher
  );

  return {
    questTypeById: data,
    isLoading,
    error,
    mutate,
  };
};
