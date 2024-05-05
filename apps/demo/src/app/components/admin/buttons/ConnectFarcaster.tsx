"use client";

import { routes } from "@/constants/routes";
import { useMe } from "@/hooks/client/useMe";
import axios from "axios";

export const ConnectFarcaster = () => {
  const { me } = useMe();
  console.log("me", me);

  return (
    <button
      className='px-3 py-2 border border-accent rounded-xl'
      onClick={async () => {
        try {
          console.log("connect farcaster clicked");
          const url = routes.createSession;
          const res = await axios.post(url, {
            correlatedId: me.userId,
          });

          console.log("res", res);
        } catch (error) {
          console.error("error", error);
        }
      }}
    >
      Connect Farcaster
    </button>
  );
};
