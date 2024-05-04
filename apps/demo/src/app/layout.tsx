import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "./components/admin/sidebar/Sidebar";
import { FilterBar } from "./components/admin/filters/FilterBar";
import { AdminWrapper } from "@/contexts/admin-context";

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
		<html lang="en" className="text-text">
			<AdminWrapper>
				<body className={"p-24 flex gap-x-4 container mx-auto"}>
					<div className="basis-2/6 h-full">
						<Sidebar />
					</div>
					<div className="w-full gap-y-4 flex flex-col">
						<FilterBar />
						<div className="w-full rounded-2xl">{children}</div>
					</div>
				</body>
			</AdminWrapper>
		</html>
	);
}
