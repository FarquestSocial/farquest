"use client";

import { routes } from "@/constants/routes";
import { useMe } from "@/hooks/client/useMe";
import api from "@/lib/api";
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
          console.log("url", url);
          const res = await axios.post(url, {
            correlatedId: me.userId,
          });

          const { redirectUrl } = res.data;

          console.log("redirectUrl", redirectUrl);

          window.open(redirectUrl, "_blank");
        } catch (error) {
          console.error("error", error);
        }
      }}
    >
      {me?.isFarcasterLinked ? "Disconnect Farcaster" : "Connect Farcaster"}
    </button>
  );
};
