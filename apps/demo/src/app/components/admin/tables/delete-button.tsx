interface DeleteButtonProps {
	openDeleteModal: () => void;
}

export const DeleteButton = ({ openDeleteModal }: DeleteButtonProps) => {
	return (
		<button className="border-[1.5px] px-3 py-2 text-2xs font-semibold" onClick={openDeleteModal}>
			DELETE
		</button>
	);
};
