"use client";
import { ConnectKitButton } from "connectkit";
import Link from "next/link";
// import { ConnectKitButton } from "connectkit";

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full  p-4'>
      <Link
        href={"/"}
        className='text-white font-bold text-lg'
      >
        DemoQuester
      </Link>
      <div className='flex gap-x-3'>
        <div className='border-b-[3px] border-accent pb-1'>
          <a
            href='/'
            className='text-white'
          >
            Quests
          </a>
        </div>
        <div className='border-b-[3px] border-accent pb-1'>
          <a
            href='/profile'
            className='text-white'
          >
            Profile
          </a>
        </div>
      </div>
      <div className='flex space-x-4'>
        <ConnectKitButton
          key={"connectkit-buttonz"}
          theme='auto'
          showAvatar={false}
        />
      </div>
    </nav>
  );
};
