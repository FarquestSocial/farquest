import { routes } from "@/constants/admin-routes";
import { fetcher } from "@/constants/fetcher";
import axios from "axios";
import useSWR from "swr";

export const useQuestTypeById = ({ id }: { id?: string }) => {
  const url = routes.getQuestTypeById(id);

  const { data, error, isLoading, mutate } = useSWR<any[]>(url, fetcher);

  return {
    questTypeById: data,
    isLoading,
    error,
    mutate,
  };
};
