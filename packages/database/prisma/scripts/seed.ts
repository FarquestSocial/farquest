import { PrismaClient } from "@prisma/client";
import type { Prisma } from "../client";

const prisma = new PrismaClient();

const seed = async () => {
  //

  const followQuestType = await prisma.questType.create({
    data: {
      name: "Follow",
      description: "Follow a user",
      type: "Follow",
    },
  });

  const commentQuestType = await prisma.questType.create({
    data: {
      name: "Comment",
      description: "Comment on a cast",
      type: "Comment",
    },
  });

  const likeQuestType = await prisma.questType.create({
    data: {
      name: "Like",
      description: "Like a cast",
      type: "Like",
    },
  });

  const recastQuestType = await prisma.questType.create({
    data: {
      name: "ReCast",
      description: "ReCast a cast",
      type: "ReCast",
    },
  });

  const bioKeywordQuestType = await prisma.questType.create({
    data: {
      name: "BioKeyword",
      description: "Add a keyword to your bio",
      type: "BioKeyword",
    },
  });

  const profilePictureQuestType = await prisma.questType.create({
    data: {
      name: "ProfilePicture",
      description: "Change your profile picture",
      type: "ProfilePicture",
    },
  });

  const ownsNftsQuestType = await prisma.questType.create({
    data: {
      name: "OwnsNfts",
      description: "Own NFTs",
      type: "OwnsNfts",
    },
  });

  const ownsERC20QuestType = await prisma.questType.create({
    data: {
      name: "OwnsERC20",
      description: "Own ERC20 tokens",
      type: "OwnsERC20",
    },
  });

  // create a quest for each quest type

  const generic = {
    organization: {
      connect: {
        id: "clvstx07y00009hb0j0ejs53b",
      },
    },
    customCallbackMetadata: {},
    customMetadata: {},
    startsAt: new Date("2021-01-01"),
    endsAt: new Date("2022-12-31"),
  };

  const quests = [
    {
      name: "Follow @dylsteck.eth",
      description: "Follow @dylsteck.eth to complete the quest",
      image:
        "https://images.unsplash.com/photo-1709203401459-64ac9935c725?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNDg3MDYzMw&ixlib=rb-4.0.3&q=80&w=1920",
      validationCriteria: {
        warpCastUrl: "616",
      },
      questType: {
        connect: {
          id: followQuestType.id,
        },
      },
      ...generic,
      startsAt: new Date("2021-01-01"),
      endsAt: new Date("2022-12-31"),
    },
    {
      name: "Comment on the pinned cast in the /farhack channel",
      description: "Comment on cast to complete the quest",
      image:
        "https://images.unsplash.com/photo-1709203401459-64ac9935c725?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNDg3MDYzMw&ixlib=rb-4.0.3&q=80&w=1920",
      validationCriteria: {
        warpCastUrl: "https://warpcast.com/dylsteck.eth/0x436d0277",
      },
      questType: {
        connect: {
          id: commentQuestType.id,
        },
      },
      ...generic,
    },
    {
      name: "Like the pinned cast in the /farhack channel",
      description: "Like a cast to complete the quest",
      image:
        "https://images.unsplash.com/photo-1709203401459-64ac9935c725?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNDg3MDYzMw&ixlib=rb-4.0.3&q=80&w=1920",
      validationCriteria: {
        warpCastUrl: "https://warpcast.com/dylsteck.eth/0x436d0277",
      },
      questType: {
        connect: {
          id: likeQuestType.id,
        },
      },
      ...generic,
    },
    {
      name: "ReCast on the pinned cast in the /farhack channel",
      description: "ReCast a cast to complete the quest",
      image:
        "https://images.unsplash.com/photo-1709171614365-5a67d594cb5f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNDg3MDYxNQ&ixlib=rb-4.0.3&q=80&w=1920",
      validationCriteria: {
        warpCastUrl: "https://warpcast.com/dylsteck.eth/0x436d0277",
      },
      questType: {
        connect: {
          id: recastQuestType.id,
        },
      },
      ...generic,
    },
    {
      name: 'Add the keyword "farhack" to your bio',
      description:
        "Add the keyword 'farhack' to your bio to complete the quest",
      image:
        "https://images.unsplash.com/photo-1709203401459-64ac9935c725?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNDg3MDYzMw&ixlib=rb-4.0.3&q=80&w=1920",
      validationCriteria: {
        keywords: ["farhack"],
      },
      questType: {
        connect: {
          id: bioKeywordQuestType.id,
        },
      },
      ...generic,
    },
    {
      name: 'Change your profile picture to the "farquest" logo',
      description:
        'Change your profile picture to the "farhack" logo to complete the quest',
      image:
        "https://images.unsplash.com/photo-1709171614365-5a67d594cb5f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNDg3MDYxNQ&ixlib=rb-4.0.3&q=80&w=1920",
      validationCriteria: {
        targetImageUrl:
          "https://images.unsplash.com/photo-1709171614365-5a67d594cb5f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNDg3MDYxNQ&ixlib=rb-4.0.3&q=80&w=1920",
      },
      questType: {
        connect: {
          id: profilePictureQuestType.id,
        },
      },
      ...generic,
    },
    // {
    //   name: "Own NFTs",
    //   description: "Own NFTs to complete the quest",
    //   image:
    //     "https://images.unsplash.com/photo-1709203401459-64ac9935c725?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNDg3MDYzMw&ixlib=rb-4.0.3&q=80&w=1920",
    //   validationCriteria: {
    //     contractAddress: "0x1234567890updateMe",
    //   },
    //   questType: {
    //     connect: {
    //       id: ownsNftsQuestType.id,
    //     },
    //   },
    //   ...generic,
    // },
    // {
    //   name: "Own ERC20 tokens",
    //   description: "Own ERC20 tokens to complete the quest",
    //   image:
    //     "https://images.unsplash.com/photo-1709203401459-64ac9935c725?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNDg3MDYzMw&ixlib=rb-4.0.3&q=80&w=1920",
    //   validationCriteria: {
    //     contractAddress: "0x1234567890",
    //   },
    //   questType: {
    //     connect: {
    //       id: ownsERC20QuestType.id,
    //     },
    //   },
    //   ...generic,

    // }
  ];

  for (const quest of quests) {
    await prisma.quests.create({
      data: quest,
    });
    console.log(`Created quest: ${quest.name}`);
  }
};

await seed();
