import { routes } from "@/constants/admin-routes";
import { fetcher } from "@/constants/fetcher";
import useSWR from "swr";

export const useMe = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/user/me", fetcher);
  return {
    me: data?.user,
    isLoading,
    error,
    mutate,
  };
};
