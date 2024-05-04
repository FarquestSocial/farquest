interface EditButtonProps {
	onEditClick: () => void;
}

export const EditButton = ({ onEditClick }: EditButtonProps) => {
	return (
		<button className="border px-3 py-2 text-2xs font-semibold" onClick={onEditClick}>
			EDIT
		</button>
	);
};
