import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
    query: { id },
  } = req;

  if (!id || id.length === 0) {
    return res.status(500).json({
      ok: false,
      error: "잘못된 요청입니다.",
    });
  }

  const isExist = await client.wonder.findFirst({
    where: {
      communityPostId: Number(id.toString()),
      userId: user!.id,
    },
    select: {
      id: true,
    },
  });
  console.log("isExist? --> ", isExist);

  const deleted = client.wonder.deleteMany({
    where: {
      communityPostId: Number(id.toString()),
      userId: user?.id,
    },
  });

  if (isExist) {
    await prisma.$transaction([deleted]);
    return res.status(201).json({
      ok: true,
    });
  }

  const created = client.wonder.create({
    data: {
      user: {
        connect: {
          id: user!.id,
        },
      },
      communityPost: {
        connect: {
          id: Number(id.toString()),
        },
      },
    },
  });

  await prisma.$transaction([deleted, created]);
  return res.status(201).json({
    ok: true,
  });
}

export default withSession(withHandler({ method: ["POST"], fn: handler }));
