import { useEffect, useState } from "react";
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
} from "./modal-wrapper";

import { useQuestTypeById } from "@/hooks/admin/useQuestTypeById";
import { useQuestsTypes } from "@/hooks/admin/useQuestTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { routes } from "@/constants/admin-routes";
import { type QuestSchema, questSchema } from "@/schemas/quest-schema";
import { formatDateTime, setHoursOnDate } from "@/utils/formatter";
// import type { IAdminQuest, IRewardType } from "@/utils/types";
import { uploadImage } from "@/utils/upload-image";
import axios from "axios";
import { X } from "phosphor-react";
import { GeneralButton } from "../buttons/GeneralButton";
import { Input } from "../input/Input";
import { MediaInput } from "../input/MediaInput";
import { MultiInput } from "../input/MultiInput";
import { Select } from "../input/Select";
import { Toggle } from "../input/Toggle";

interface QuestModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  questToEdit?: any;
  isEditMode: boolean;
  refreshData: () => Promise<void>;
}

export const QuestModal = ({
  isOpen,
  closeModal,
  title,
  questToEdit,
  isEditMode,
  refreshData,
}: QuestModalProps) => {
  const { questTypes } = useQuestsTypes();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<QuestSchema>({
    defaultValues: {
      selectedQuestType: {
        id: "",
        name: "",
        description: "",
      },
      name: "",
      description: "",
      isFeatured: false,
      image: "",
      rewardType: "POINTS",
      startsAt: new Date(),
      endsAt: new Date(),
      questTypeId: "",
      warpCastUrl: "",
    },
    resolver: zodResolver(questSchema),
  });
  const questTitle = watch("name");
  const description = watch("description");
  const selectedQuestType = watch("selectedQuestType");

  const rewardType = watch("rewardType");
  const startDate = watch("startsAt");
  const endDate = watch("endsAt");
  const warpCastUrl = watch("warpCastUrl");
  const { questTypeById } = useQuestTypeById({
    id: selectedQuestType?.id,
  });

  const handleModalClose = () => {
    closeModal();
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setValue("questTypeId", selectedQuestType?.id);
  }, [selectedQuestType]);

  console.log("errors", errors);

  const submitForm: SubmitHandler<QuestSchema> = async (data) => {
    if (new Date(data.endsAt) < new Date(data.startsAt)) {
      toast.warning("End date must be greater than start date");
      return;
    }

    const _questData = { ...data.questData };

    setIsSubmitting(true);
    try {
      const body = {
        name: data.name,
        description: data.description,
        image: data.image ?? "/defaults/default-quest-image.webp",
        rewardType: "POINTS",
        startsAt: setHoursOnDate(new Date(data.startsAt), "beginning"),
        endsAt: setHoursOnDate(new Date(data.endsAt), "end"),
        questTypeId: data.questTypeId,
        questData: _questData,
        validationCriteria: {
          warpCastUrl: data.warpCastUrl,
        },
      };

      console.log("body", body);

      await axios.post("/api/create-quest", body);

      toast.success("Quest created successfully");
      closeModal();

      await refreshData();
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
      toast.error(
        `An error occurred ${isEditMode ? "editting" : "creating"} quest.`
      );
    }
  };

  return (
    <ModalWrapper
      className=''
      isOpen={isOpen}
      onClose={handleModalClose}
    >
      <ModalHeader>
        <h2 className='text-left text-[1.25rem] font-bold md:text-2xl'>
          {title}
          {selectedQuestType?.name
            ? ` - ${selectedQuestType?.name?.replaceAll("_", " ")}`
            : ""}
        </h2>
        <button
          type='button'
          onClick={handleModalClose}
        >
          <X />
        </button>
      </ModalHeader>
      <ModalBody
        className={`px-5 ${
          !selectedQuestType?.id && !isEditMode ? "" : "overflow-y-auto"
        }`}
      >
        <form>
          {!selectedQuestType?.id && !isEditMode ? (
            <Select
              options={
                questTypes && questTypes?.length > 0
                  ? questTypes?.map((i) => {
                      return {
                        id: i.description,
                        value: i.name,
                      };
                    })
                  : []
              }
              selected={selectedQuestType.name ?? ""}
              placeholder='Select Quest Type'
              handleSelected={(type) => {
                const i = questTypes?.find((i) => i.name === type);
                console.log("i", i);

                setValue("selectedQuestType", {
                  id: i?.id,
                  name: i?.name,
                  description: i?.description,
                });
              }}
              id='questType'
              error={errors.selectedQuestType?.message}
              fullWidth={true}
            />
          ) : (
            <div className='flex flex-col gap-4'>
              <Input
                label='name'
                id='name'
                error={errors.name?.message}
                type='text'
                name='name'
                placeholder='Quest Name'
                value={questTitle}
                onChange={(e) => {
                  setValue("name", e.target.value);
                }}
              />
              <Input
                label='Description'
                id='description'
                error={errors.description?.message}
                type='text'
                name='description'
                placeholder='Quest Description'
                isTextArea={true}
                value={description}
                onChange={(e) => {
                  setValue("description", e.target.value);
                }}
              />

              {/* <MediaInput
                label='Quest Image'
                id='image'
                onFileChange={async (file) => {
                  const res = await uploadImage(file);
                  setValue("image", res?.url ?? "");
                }}
                isBannerImage={true}
                initialSrc={image}
                error={errors.image?.message}
              /> */}
              {!isEditMode ? (
                <div className='flex flex-col w-full gap-2'>
                  <div>Reward Type</div>
                  <Select
                    options={[{ id: "rewards points", value: "POINTS" }]}
                    selected={rewardType}
                    placeholder='Select Quest Type'
                    id='questType'
                    handleSelected={(i) => {
                      setValue("rewardType", i as any);
                    }}
                    fullWidth={true}
                  />
                </div>
              ) : null}

              <Input
                label='Starts At'
                id='startsAt'
                error={errors.startsAt?.message}
                type='date'
                name='startsAt'
                placeholder='Starts At'
                value={formatDateTime(new Date(startDate))}
                onChange={(e) => {
                  setValue(
                    "startsAt",
                    setHoursOnDate(new Date(e.target.value), "beginning")
                  );
                }}
              />
              <Input
                label='Ends At'
                id='endsAt'
                error={errors.endsAt?.message}
                type='date'
                name='endsAt'
                placeholder='Ends At'
                value={formatDateTime(new Date(endDate))}
                onChange={(e) => {
                  setValue(
                    "endsAt",
                    setHoursOnDate(new Date(e.target.value), "end")
                  );
                }}
              />
              {questTypeById && questTypeById?.length > 0 && !isEditMode
                ? questTypeById.map((i, idx) => {
                    const cleanLabel = i.value
                      .replace(/([A-Z])/g, " $1")
                      .toUpperCase();
                    if (!i.isArray) {
                      return (
                        <div key={`${i}`}>
                          <Input
                            label={cleanLabel}
                            id={i.value}
                            inputClassName='normal-case'
                            type={i.type}
                            name={i.value}
                            placeholder={cleanLabel}
                            onChange={(e) => {
                              setValue(`questData.${i.value}`, e.target.value);
                            }}
                          />
                        </div>
                      );
                    }
                    return (
                      <MultiInput
                        key={`${i.value}-${idx}`}
                        className='w-full normal-case'
                        id={i.value}
                        label={cleanLabel}
                        input={Input}
                        value={""}
                        onChange={(val) => {
                          const items = val.split(" ");
                          const filteredItems = items.filter((i) => i !== "");
                          setValue(`questData.${i.value}`, [...filteredItems]);
                        }}
                        delimiter={" "}
                      />
                    );
                  })
                : null}
              {selectedQuestType.name === "Like" && (
                <Input
                  label='Warpcast Url'
                  id='warpCastUrl'
                  error={errors.warpCastUrl?.message}
                  type='text'
                  name='warpCastUrl'
                  placeholder='Cast Url to like'
                  value={warpCastUrl}
                  onChange={(e) => {
                    setValue("warpCastUrl", e.target.value);
                  }}
                />
              )}
            </div>
          )}
        </form>
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
            onClick={handleSubmit(submitForm)}
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
