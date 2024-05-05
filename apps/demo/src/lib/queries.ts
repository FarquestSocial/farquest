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

