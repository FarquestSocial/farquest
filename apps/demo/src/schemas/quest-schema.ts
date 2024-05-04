import { z } from "zod";

export const questSchema = z.object({
	selectedQuestType: z.object({
		id: z.string().optional(),
		questType: z.string().optional(),
		description: z.string().optional(),
	}),
	title: z.string().min(1).max(50),
	description: z.string().min(1).max(250),
	options: z.array(
		z.object({
			text: z.string(),
			isCorrect: z.boolean(),
		}),
	),
	isFeatured: z.boolean(),
	image: z.string(),
	rewardType: z.enum(["POINTS"]),
	rewardXp: z.number().optional(),
	rewardMaraScore: z.number().optional(),
	rewardEv3rModule: z.number().optional(),
	startsAt: z.date().or(z.string()),
	endsAt: z.date().or(z.string()),
	questTypeId: z.string().optional(),
	questData: z.any(), // error will throw if type does not match in backend
});

export type QuestSchema = z.infer<typeof questSchema>;
