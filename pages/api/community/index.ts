import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
    body: { content },
  } = req;

  if (!user || !content) {
    return res.status(402).json({
      ok: false,
      error: "옳지않은 요청입니다.",
    });
  }

  const communityPost = await client.communityPost.create({
    data: {
      content,
      userId: user.id,
    },
  });

  return res.status(201).json({
    ok: true,
    postId: communityPost.id,
  });
}

export default withSession(withHandler({ method: ["POST"], fn: handler }));
