import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

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
  });

  if (isExist) {
    await client.wonder.delete({
      where: {
        id: isExist.id,
      },
    });
    return res.status(201).json({
      ok: true,
    });
  }

  const created = await client.wonder.create({
    data: {
      communityPostId: Number(id.toString()),
      userId: user!.id,
    },
  });

  return res.status(201).json({
    ok: true,
  });
}

export default withSession(withHandler({ method: ["POST"], fn: handler }));
