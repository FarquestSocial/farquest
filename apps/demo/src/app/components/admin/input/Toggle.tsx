export const Toggle = ({
	isEnabled,
	toggle,
	id,
}: { isEnabled: boolean; toggle: () => void; id: string }) => {
	return (
		<label
			onKeyDown={(e) => {
				if (e.code === "Enter") {
					toggle();
				}
			}}
			htmlFor={id}
			className={` relative m-0 block h-[26px] w-10 rounded-[50px] bg-white transition-colors ${
				isEnabled ? "" : " bg-opacity-[45%]"
			} shadow-[inset_0px_0px_1px_rgba(0,0,0,0.4)]`}
		>
			<input
				id={id}
				type="checkbox"
				name={id}
				aria-labelledby={id}
				aria-label={id}
				onChange={toggle}
				className={`absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0 focus:ring`}
			/>
			<span
				className={`${
					isEnabled ? "translate-x-full" : "right-0"
				} absolute left-[4px] bg-primary top-1/2 flex h-4 w-4 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full shadow-toggle  transition`}
			/>
		</label>
	);
};
