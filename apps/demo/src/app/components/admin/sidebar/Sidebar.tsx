"use client";
import Image from "next/image";
import { SidebarItem } from "./SidebarItem";
import { MapTrifold, SignOut, TagChevron } from "phosphor-react";
import { usePathname, useRouter } from "next/navigation";

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const sideBarItems = [
    {
      title: "Quests",
      pathname: "/admin/quests",
      icon: <MapTrifold />,
    },
  ];

  return (
    <main className='flex gap-y-3 items-center p-4 h-full justify-between flex-col bg-secondary rounded-2xl'>
      <section>
        <div className='flex gap-x-2 items-center text-text font-bold'>
          <Image
            src='/images/icon.png'
            alt='logo'
            width={30}
            height={30}
          />
          Farquest
        </div>
      </section>
      <section className='grow w-full'>
        {sideBarItems.map((item, idx) => {
          return (
            <SidebarItem
              key={idx}
              title={item.title}
              icon={item.icon}
              active={pathname.startsWith(item.pathname)}
              onClick={() => {
                router.push(item.pathname);
              }}
            />
          );
        })}
      </section>
      <section>
        <div className='flex gap-x-2 items-center justify-between'>
          <div className='rounded-full w-8 h-8 bg-blue-500'></div>
          <div className='text-text font-bold text-xs'>typeofant</div>
          <SignOut className='text-text/70' />
        </div>
      </section>
    </main>
  );
};
