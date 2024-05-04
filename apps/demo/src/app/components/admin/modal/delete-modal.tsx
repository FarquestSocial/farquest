import { X } from "phosphor-react";
import { GeneralButton } from "../buttons/GeneralButton";
import {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalWrapper,
} from "./modal-wrapper";

interface DeleteModalProps {
	isOpen: boolean;
	onDelete: () => Promise<void>;
	closeModal: () => void;
	itemToDelete: string;
	isSubmitting: boolean;
}

export const DeleteModal = ({
	isOpen,
	closeModal,
	itemToDelete,
	onDelete,
	isSubmitting,
}: DeleteModalProps) => {
	return (
		<ModalWrapper className="" isOpen={isOpen} onClose={closeModal}>
			<ModalHeader>
				<h2 className="text-left text-[1.25rem] font-bold md:text-2xl">
					Delete {itemToDelete}
				</h2>
				<button type="button" onClick={closeModal}>
					<X />
				</button>
			</ModalHeader>
			<ModalBody className={"px-5"}>
				<p className="text-center font-semibold normal-case">
					Are you sure you want to delete this {itemToDelete}?
				</p>
			</ModalBody>
			<ModalFooter>
				<section className="flex gap-x-4">
					<GeneralButton
						className="py-3 text-lg capitalize"
						onClick={closeModal}
						disabled={isSubmitting}
					>
						Cancel
					</GeneralButton>
					<GeneralButton
						className={`text-lg capitalize bg-primary ${
							isSubmitting ? "animate-pulse" : ""
						}`}
						onClick={onDelete}
						disabled={isSubmitting}
					>
						{isSubmitting ? "Confirming..." : "Confirm"}
					</GeneralButton>
				</section>
			</ModalFooter>
		</ModalWrapper>
	);
};
