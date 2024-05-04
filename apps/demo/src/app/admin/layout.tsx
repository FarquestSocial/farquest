import { AdminWrapper } from "@/contexts/admin-context";
import type { Metadata } from "next";
import { FilterBar } from "../components/admin/filters/FilterBar";
import { Sidebar } from "../components/admin/sidebar/Sidebar";

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
		<div className="text-text ">
			<AdminWrapper>
				<div className={"p-24 flex gap-x-4 h-screen container mx-auto"}>
					<div className="basis-2/6">
						<Sidebar />
					</div>
					<div className="w-full gap-y-4 flex flex-col">
						<FilterBar />
						<div className="w-full rounded-2xl">{children}</div>
					</div>
				</div>
			</AdminWrapper>
		</div>
	);
}
