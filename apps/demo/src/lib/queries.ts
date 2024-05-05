import { prisma } from "@/lib/prisma";

//upsertUser
export const upsertUser = async (ethWalletAddress: string) => {
  return await prisma.user.upsert({
    where: {
      ethWalletAddress,
    },
    update: {},
    create: {
      ethWalletAddress,
    },
  });
};
//get first party quests
export const getQuests = async () => {
  return await prisma.quest.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      image: true,
      options: {
        select: {
          id: true,
          text: true,
        }
      },
    },
  });
} 

