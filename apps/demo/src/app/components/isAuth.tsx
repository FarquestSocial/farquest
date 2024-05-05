"use client";
import { useSearchParams } from "next/navigation";

export function isAuth() {
  const searchParams = useSearchParams();
  const isAuth = searchParams.get("auth") === "true";

  return isAuth;
}
