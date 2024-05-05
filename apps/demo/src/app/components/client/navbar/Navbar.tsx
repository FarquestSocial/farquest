"use client";
import { ConnectKitButton, useModal } from "connectkit";
import { PrimaryButton } from "../../admin/buttons/PrimaryButton";
// import { ConnectKitButton } from "connectkit";

export const Navbar = () => {
  const { setOpen } = useModal();
  return (
    <nav className='flex justify-between items-center w-full  p-4'>
      <div className='text-white font-bold text-lg'>DemoQuester</div>
      <div className='border-b-[3px] border-accent pb-1'>
        <a
          href='/quests'
          className='text-white'
        >
          Quests
        </a>
      </div>
      <div className='flex space-x-4'>
        {/* <PrimaryButton onClick={() => setOpen(true)}>Log in</PrimaryButton> */}
        <ConnectKitButton
          key={"connectkit-buttonz"}
          theme='auto'
          showAvatar={false}
        />
      </div>
    </nav>
  );
};
