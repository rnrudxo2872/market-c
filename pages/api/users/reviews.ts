import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
  } = req;

  const reviews = await client.review.findMany({
    where: {
      createdForId: user!.id,
    },
    select: {
      createdBy: {
        select: {
          name: true,
          id: true,
          avatar: true,
        },
      },
      id: true,
      createdAt: true,
      content: true,
      score: true,
    },
    take: 5,
  });

  return res.status(200).json({
    ok: true,
    reviews,
  });
}

export default withSession(withHandler({ fn: handler, method: ["GET"] }));
