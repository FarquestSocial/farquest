"use client";

import { useMe } from "@/hooks/client/useMe";
import api from "@/lib/api";

export const ConnectFarcaster = () => {
  const { me } = useMe();
  console.log("me", me);

  return (
    <button
      className='px-3 py-2 border border-accent rounded-xl'
      onClick={async () => {
        console.log("connect farcaster clicked");
        const res = await api
          .session({
            correlatedId: me?.correlatedId,
          })
          .post(
            {
              correlatedId: me?.correlatedId,
            },
            {
              headers: {
                authorization: `Bearer ${"1fe5ce.afbccea670f467da160c672be0813fc0"}`,
              },
            }
          );

        console.log("res", res);
      }}
    >
      Connect Farcaster
    </button>
  );
};
