import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { Sidebar } from "../components/admin/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} p-24 flex gap-x-3`}>
        <div className='basis-2/6 h-full'>
          <Sidebar />
        </div>
        <div className='border border-green-300 w-full'>{children}</div>
      </body>
    </html>
  );
}
