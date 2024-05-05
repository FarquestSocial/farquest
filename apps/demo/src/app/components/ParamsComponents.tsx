"use client";
import { useEffect } from "react";
import { isAuth } from "./isAuth";
import axios from "axios";
import { useMe } from "@/hooks/client/useMe";

export const ParamsComponents = () => {
  const _isAuth = isAuth();
  const { me } = useMe();
  useEffect(() => {
    const updateFarcastLinkedStatus = async () => {
      if (_isAuth) {
        console.log("inside updateFarcastLinkedStatus");
        try {
          const url = "/api/user/me";
          const res = await axios.patch(url, {
            userId: me?.userId,
          });

          console.log("res", res.data);
        } catch (error) {
          console.error("error", error);
        }
      }
    };

    updateFarcastLinkedStatus();
  }, [isAuth]);

  return <div></div>;
};
