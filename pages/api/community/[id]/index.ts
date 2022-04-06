import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
    query: { id },
  } = req;

  if (!id) {
    return res.status(403).json({
      ok: false,
      error: "권한이 없습니다.",
    });
  }

  const post = await client.communityPost.findUnique({
    where: {
      id: Number(id.toString()),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
      answer: {
        select: {
          id: true,
          content: true,
          user: true,
        },
      },
      _count: {
        select: {
          wonder: true,
        },
      },
    },
  });

  if (!post) {
    return res.status(500).json({
      ok: false,
      error: "알 수 없습니다.",
    });
  }

  const isWonder = Boolean(
    await client.wonder.findFirst({
      where: {
        userId: user?.id,
        AND: {
          communityPostId: Number(id.toString()),
        },
      },
    })
  );

  return res.status(200).json({
    ok: true,
    post,
    isWonder,
  });
}

export default withSession(withHandler({ method: ["GET"], fn: handler }));
