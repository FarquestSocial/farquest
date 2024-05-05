import { IQuest } from "@/utils/types";
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
} from "../../admin/modal/modal-wrapper";
import { GeneralButton } from "../../admin/buttons/GeneralButton";
import { X } from "phosphor-react";
import { useQuestById } from "@/hooks/client/useQuestById";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const QuestModal = ({
  questId,
  isOpen,
  handleModalClose,
}: {
  isOpen: boolean;
  questId: string;
  handleModalClose: () => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { quest } = useQuestById(questId);

  const closeModal = () => {
    handleModalClose();
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    // await mutate();
    setIsSubmitting(false);
    closeModal();
  };

  const completeQuest = async () => {
    try {
      console.log("completeQuest");
      const res = await axios.post("/api/complete-quest", {
        questId,
      });

      toast.success("Quest completed successfully");

      console.log("res", res.data);
    } catch (error) {
      console.error("error", error);
      toast.error("Failed to complete quest");
    }
  };

  console.log("quest", quest);

  return (
    <ModalWrapper
      className=''
      isOpen={isOpen}
      onClose={handleModalClose}
    >
      <ModalHeader>
        <h2 className='text-left text-text text-[1.25rem] font-bold md:text-2xl'>
          Title: {quest?.name}
        </h2>
        <button
          type='button'
          onClick={handleModalClose}
        >
          <X />
        </button>
      </ModalHeader>
      <ModalBody>
        <div className='w-full text-left'>
          Description: {quest?.description}
        </div>
      </ModalBody>
      <ModalFooter>
        <section className='flex gap-x-4'>
          <GeneralButton
            disabled={isSubmitting}
            className='py-3 text-lg capitalize border'
            onClick={closeModal}
          >
            Cancel
          </GeneralButton>

          <GeneralButton
            onClick={completeQuest}
            className={`text-lg capitalize bg-yellow bg-primary ${
              isSubmitting ? "animate-pulse" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </GeneralButton>
        </section>
      </ModalFooter>
    </ModalWrapper>
  );
};
