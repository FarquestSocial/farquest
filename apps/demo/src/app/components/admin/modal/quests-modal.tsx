import {
	ModalWrapper,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "./modal-wrapper";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useQuestsTypes } from "@/hooks/admin/useQuestTypes";
import { useQuestTypeById } from "@/hooks/admin/useQuestTypeById";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { IAdminQuest, IRewardType } from "@/utils/types";
import { routes } from "@/constants/admin-routes";
import type { QuestSchema, questSchema } from "@/schemas/quest-schema";
import {
	addAtSymbolToUsernames,
	formatDateTime,
	setHoursOnDate,
} from "@/utils/formatter";
import { X } from "phosphor-react";
import { Select } from "../input/Select";
import { Input } from "../input/Input";
import { Toggle } from "../input/Toggle";
import { MediaInput } from "../input/MediaInput";
import { MultiInput } from "../input/MultiInput";
import { GeneralButton } from "../buttons/GeneralButton";
import axios from "axios";
import { uploadImage } from "@/utils/upload-image";

interface QuestModalProps {
	isOpen: boolean;
	closeModal: () => void;
	title: string;
	questToEdit?: IAdminQuest;
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
				questType: "",
				description: "",
			},
			title: "",
			description: "",
			isFeatured: false,
			image: "",
			rewardType: "POINTS",
			rewardXp: 10,
			startsAt: new Date(),
			endsAt: new Date(),
			questTypeId: "",
			questData: {},
			options: [
				{ text: "", isCorrect: false },
				{ text: "", isCorrect: false },
				{ text: "", isCorrect: false },
				{ text: "", isCorrect: false },
			],
		},
		resolver: zodResolver(questSchema),
	});
	const questTitle = watch("title");
	const description = watch("description");
	const selectedQuestType = watch("selectedQuestType");
	const options = watch("options");
	const isFeatured = watch("isFeatured");
	const rewardType = watch("rewardType");
	const image = watch("image");
	const startDate = watch("startsAt");
	const endDate = watch("endsAt");
	const xpAmount = watch("rewardXp");
	const { questTypeById } = useQuestTypeById({
		id: selectedQuestType?.id,
	});

	const handleModalClose = () => {
		closeModal();
	};

	useEffect(() => {
		setValue("questTypeId", selectedQuestType?.id);
	}, [selectedQuestType]);

	useEffect(() => {
		if (isEditMode && questToEdit) {
			setValue("title", questToEdit.title);
			setValue("description", questToEdit.description);
			setValue("isFeatured", questToEdit.isFeatured);
			setValue("image", questToEdit.image);
			if (questToEdit?.rewards?.[0]?.value) {
				//TODO get new type from backend for rewardAmount
				setValue("rewardXp", questToEdit.rewards[0].value);
				setValue("rewardType", "POINTS");
			}

			setValue("startsAt", questToEdit.startsAt);
			setValue("endsAt", questToEdit.endsAt);
		}
	}, [isEditMode, questToEdit]);

	const submitForm: SubmitHandler<QuestSchema> = async (data) => {
		if (new Date(data.endsAt) < new Date(data.startsAt)) {
			toast.warning("End date must be greater than start date");
			return;
		}
		if (
			selectedQuestType.questType === "MULTIPLE_CHOICE" &&
			data.options.length !== 4
		) {
			toast.warning("Multiple choice questions must have 4 options");
			return;
		}

		if (selectedQuestType.questType === "MULTIPLE_CHOICE") {
			const correctOptions = data.options.filter((i) => i.isCorrect);
			if (correctOptions.length === 0) {
				toast.warning(
					"At least one option must be marked as correct for multiple choice questions",
				);
				return;
			}
		}

		let _questData = { ...data.questData };
		let _rewardXp = data.rewardXp;

		if (selectedQuestType?.questType === "TWITTER_ENGAGEMENT") {
			const xpForComment = _questData.xpForComment;
			const xpForLike = _questData.xpForLike;
			const xpForRetweet = _questData.xpForRetweet;

			const totalXp = (
				parseInt(xpForComment) +
				parseInt(xpForLike) +
				parseInt(xpForRetweet)
			).toFixed(0);

			_rewardXp = Number(totalXp);
		}

		if (selectedQuestType?.questType === "TWITTER_MENTION") {
			const handles = _questData.targetUsernames;
			const newHandles = addAtSymbolToUsernames(handles);

			_questData.targetUsernames = newHandles;
		}

		if (selectedQuestType?.questType === "TWITTER_FOLLOW") {
			const handles = _questData.twitterHandlesToFollow;
			const newHandles = addAtSymbolToUsernames(handles);

			_questData.twitterHandlesToFollow = newHandles;
		}

		if (data.rewardType === "POINTS" && Number(_rewardXp) <= 0) {
			toast.warning("Reward XP must be greater than 0");
			return;
		}

		setIsSubmitting(true);
		try {
			const body = {
				title: data.title,
				description: data.description,
				image: data.image ?? "/defaults/default-quest-image.webp",
				isFeatured: data.isFeatured,
				rewardType: data.rewardType,
				options: data.options,
				rewardXp: _rewardXp,
				rewardMaraScore: data.rewardMaraScore,
				rewardEv3rModule: data.rewardEv3rModule,
				startsAt: setHoursOnDate(new Date(data.startsAt), "beginning"),
				endsAt: setHoursOnDate(new Date(data.endsAt), "end"),
				questTypeId: data.questTypeId,
				questData: _questData,
			};
			if (isEditMode && questToEdit) {
				const url = routes.editQuest(questToEdit.id);
				await axios.patch(url, {
					title: body.title,
					description: body.description,
					image: body.image,
					isFeatured: body.isFeatured,
					rewardXp: body.rewardXp,
					startsAt: body.startsAt,
					endsAt: body.endsAt,
				});

				toast.success("Quest edited successfully");
				closeModal();
			} else {
				const url = routes.createQuest;

				await axios.post(url, body);

				toast.success("Quest created successfully");
				closeModal();
			}
			await refreshData();
			setIsSubmitting(false);
		} catch (error) {
			setIsSubmitting(false);
			console.log(error);
			toast.error(
				`An error occurred ${isEditMode ? "editting" : "creating"} quest.`,
			);
		}
	};

	return (
		<ModalWrapper className="" isOpen={isOpen} onClose={handleModalClose}>
			<ModalHeader>
				<h2 className="text-left text-[1.25rem] font-bold md:text-2xl">
					{title}
					{selectedQuestType?.questType
						? ` - ${selectedQuestType?.questType?.replaceAll("_", " ")}`
						: ""}
				</h2>
				<button onClick={handleModalClose}>
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
												value: i.questType.replaceAll("_", " "),
											};
										})
									: []
							}
							selected={selectedQuestType.questType ?? ""}
							placeholder="Select Quest Type"
							handleSelected={(i) => {
								const foundQuest = questTypes?.find(
									(q) =>
										q.questType.toUpperCase() ===
										i.toUpperCase().replaceAll(" ", "_"),
								);
								if (foundQuest) {
									setValue("selectedQuestType", foundQuest);
								}
							}}
							id="questType"
							error={errors.selectedQuestType?.message}
							fullWidth={true}
						/>
					) : (
						<div className="flex flex-col gap-4">
							<Input
								label="title"
								id="title"
								error={errors.title?.message}
								type="text"
								name="title"
								placeholder="Quest Title"
								value={questTitle}
								onChange={(e) => {
									setValue("title", e.target.value);
								}}
							/>
							<Input
								label={
									selectedQuestType.questType === "MULTIPLE_CHOICE"
										? "Question"
										: "description"
								}
								id="description"
								error={errors.description?.message}
								type="text"
								name="description"
								placeholder={
									selectedQuestType.questType === "MULTIPLE_CHOICE"
										? "Quest Question"
										: "Quest Description"
								}
								isTextArea={true}
								value={description}
								onChange={(e) => {
									setValue("description", e.target.value);
								}}
								inputClassName="normal-case"
							/>
							{selectedQuestType.questType === "MULTIPLE_CHOICE" &&
							!isEditMode ? (
								<div className="flex flex-col w-full gap-2">
									<div>Answers - Toggle To Mark As Correct</div>
									{options?.map((i, idx) => {
										return (
											<div key={idx} className="flex gap-2 items-center">
												<Input
													label={`Option ${idx + 1}`}
													id={`option${idx}`}
													error={errors.options?.message}
													type="text"
													name={`option${idx}`}
													placeholder={`Option ${idx + 1}`}
													onChange={(e) => {
														const newOptions = options.map((o, i) => {
															if (i === idx) {
																return {
																	text: e.target.value,
																	isCorrect: o.isCorrect,
																};
															}
															return o;
														});
														setValue("options", newOptions);
													}}
												/>
												<Toggle
													isEnabled={i.isCorrect}
													toggle={() => {
														const newOptions = options.map((o, i) => {
															//toggle the isCorrect value of the option
															//toggle the other options to false
															if (i === idx) {
																return { ...o, isCorrect: !o.isCorrect };
															}
															return { ...o, isCorrect: false };
														});
														setValue("options", newOptions);
													}}
													id={`option${idx}`}
												/>
											</div>
										);
									})}
								</div>
							) : null}

							<MediaInput
								label="Quest Image"
								id="image"
								onFileChange={async (file) => {
									const res = await uploadImage(file);
									setValue("image", res?.url ?? "");
								}}
								isBannerImage={true}
								initialSrc={image}
								error={errors.image?.message}
							/>
							{!isEditMode ? (
								<div className="flex flex-col w-full gap-2">
									<div>Reward Type</div>
									<Select
										options={[{ id: "Increase XP", value: "POINTS" }]}
										selected={rewardType}
										placeholder="Select Quest Type"
										id="questType"
										handleSelected={(i) => {
											setValue("rewardType", i as IRewardType);
										}}
										fullWidth={true}
									/>
								</div>
							) : null}
							{rewardType === "POINTS" &&
							selectedQuestType &&
							selectedQuestType?.questType !== "TWITTER_ENGAGEMENT" ? (
								<Input
									label="Reward XP"
									id="rewardXp"
									error={errors.rewardXp?.message}
									type="number"
									name="rewardXp"
									placeholder="Reward XP Amount"
									value={xpAmount}
									onChange={(e) => {
										setValue("rewardXp", Number.parseInt(e.target.value));
									}}
								/>
							) : null}
							<Input
								label="Starts At"
								id="startsAt"
								error={errors.startsAt?.message}
								type="date"
								name="startsAt"
								placeholder="Starts At"
								value={formatDateTime(new Date(startDate))}
								onChange={(e) => {
									setValue(
										"startsAt",
										setHoursOnDate(new Date(e.target.value), "beginning"),
									);
								}}
							/>
							<Input
								label="Ends At"
								id="endsAt"
								error={errors.endsAt?.message}
								type="date"
								name="endsAt"
								placeholder="Ends At"
								value={formatDateTime(new Date(endDate))}
								onChange={(e) => {
									setValue(
										"endsAt",
										setHoursOnDate(new Date(e.target.value), "end"),
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
														inputClassName="normal-case"
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
												className="w-full normal-case"
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
							<div className="flex items-center gap-2">
								<div>Is Featured Quest: </div>
								<Toggle
									isEnabled={isFeatured}
									toggle={() => {
										setValue("isFeatured", !isFeatured);
									}}
									id="isFeatured"
								/>
							</div>
						</div>
					)}
				</form>
			</ModalBody>
			<ModalFooter>
				<section className="flex gap-x-4">
					<GeneralButton
						disabled={isSubmitting}
						className="py-3 text-lg capitalize border"
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
