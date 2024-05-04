export interface SidebarItemProps {
	icon: React.ReactNode;
	title: string;
	active: boolean;
	onClick: () => void;
}

export const SidebarItem = ({
	icon,
	title,
	active,
	onClick,
}: SidebarItemProps) => {
	return (
		<button
			className={`flex w-full items-center px-3 py-2 text-sm font-medium rounded-md ${
				active ? "bg-gray-200 text-gray-900" : "text-text"
			}`}
			onClick={onClick}
		>
			{icon}
			<span className="ml-2">{title}</span>
		</button>
	);
};
