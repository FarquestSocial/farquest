import type { InputHTMLAttributes } from "react";

interface InputProps
	extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
	type: string;
	name: string;
	id: string;
	placeholder: string;
	label: string;
	className?: string;
	error?: string;
	isTextArea?: boolean;
	inputClassName?: string;
}

export const Input = ({
	type,
	name,
	id,
	placeholder,
	label,
	className,
	error,
	isTextArea,
	inputClassName,
	...rest
}: InputProps) => {
	const isDate = type === "date";

	return (
		<div
			className={`border bg-secondary backdrop-blur-sm border-secondary w-full px-4 py-2 flex flex-col gap-0 ${
				className ?? ""
			}`}
		>
			<label htmlFor={id} className="text-[12px]">
				{label}
			</label>
			{isTextArea ? (
				<textarea
					name={name}
					id={id}
					placeholder={placeholder}
					className={`w-full text-[18px] bg-transparent font-[600] border-0 ring-0 focus:outline-none ${
						inputClassName ?? ""
					}`}
					{...rest}
				/>
			) : (
				<input
					onWheel={(e) => {
						if (type === "number") {
							e.currentTarget.blur();
						}
					}}
					type={type}
					name={name}
					id={id}
					placeholder={placeholder}
					className={`${
						isDate ? "w-fit" : "w-full"
					} disabled:text-[#9e9e9e] disabled:cursor-not-allowed text-[18px] dark-scheme bg-transparent font-[600] border-0 ring-0 focus:outline-none ${
						inputClassName ?? ""
					}`}
					{...rest}
				/>
			)}
			{error && <span className="text-[12px] text-red">{error}</span>}
		</div>
	);
};
