import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
    body: { content },
    query: { id },
  } = req;

  if (!user) {
    return res.status(400).json({
      ok: false,
      erorr: "권한이 없습니다.",
    });
  }

  const answer = await client.answer.create({
    data: {
      content,
      userId: user.id,
      communityPostId: Number(id.toString()),
    },
  });

  return res.status(201).json({
    ok: true,
  });
}

export default withSession(withHandler({ method: ["POST"], fn: handler }));
