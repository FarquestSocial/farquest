import Image from "next/image";

export const Sidebar = () => {
  return (
    <main className='flex items-center justify-between flex-col h-full bg-secondary rounded-md'>
      <section>
        <Image
          src='/images/logo.png'
          alt='logo'
          width={54}
          height={54}
        />
      </section>
    </main>
  );
};
