import { z } from "zod";

export const questSchema = z.object({
  selectedQuestType: z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
  }),
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(250),
  isFeatured: z.boolean(),
  image: z.string(),
  rewardType: z.enum(["POINTS"]),
  rewardMaraScore: z.number().optional(),
  rewardEv3rModule: z.number().optional(),
  startsAt: z.date().or(z.string()),
  endsAt: z.date().or(z.string()),
  questTypeId: z.string().optional(),
  questData: z.any(), // error will throw if type does not match in backend
  warpCastUrl: z.string().optional(),
});

export type QuestSchema = z.infer<typeof questSchema>;
