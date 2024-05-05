"use client";

import { useMe } from "@/hooks/client/useMe";
import { ConnectFarcaster } from "../components/admin/buttons/ConnectFarcaster";
import { Suspense } from "react";
import { ParamsComponents } from "../components/ParamsComponents";

export default function ProfilePage() {
  const { me } = useMe();

  const truncateAddress = (address: string) => {
    return `${address?.slice(0, 6)}...${address?.slice(-4)}`;
  };

  return (
    <div className='p-4 text-white'>
      <div className='text-2xl font-bold'>Profile</div>
      <div className='mx-auto bg-secondary rounded-2xl p-8 w-[700px] mt-8 h-[600px]'>
        <section className='flex items-center'>
          <div className='w-20 h-20 rounded-full bg-blue-500'></div>
          <div className='ml-4'>
            <div className='text-2xl font-bold'>
              {truncateAddress(me?.address ?? "")}
            </div>
            <div>0 quests completed</div>
          </div>
        </section>
        <section className='pt-4'>
          <p className='bold text-xl'>Accounts</p>
          <ConnectFarcaster />
        </section>
        <Suspense>
          <ParamsComponents />
        </Suspense>
      </div>
    </div>
  );
}
