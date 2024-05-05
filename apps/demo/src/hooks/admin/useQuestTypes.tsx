import { routes } from "@/constants/admin-routes";
import { fetcher } from "@/constants/fetcher";
import { IQuestTypeFieldsResponse } from "@/utils/types";
import useSWR from "swr";

export const useQuestsTypes = () => {
  const url = routes.getAllQuestTypes;
  console.log("useQuestsTypes URL:", url);

  const { data, error, isLoading, mutate } = useSWR<
    {
      id: string;
      name: string;
      description: string;
    }[]
  >(url, fetcher);

  console.log("Quest Types:", data);

  return {
    questTypes: data,
    isLoading,
    error,
    mutate,
  };
};
