import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id: productId },
    session: { user },
  } = req;

  if (!user) {
    return res.status(401).json({
      ok: false,
      error: "권한이 없습니다.",
    });
  }

  const like = await client.productLike.findFirst({
    where: {
      userId: user.id,
      productId: +productId,
    },
  });

  like
    ? await client.productLike.delete({
        where: {
          id: like.id,
        },
      })
    : await client.productLike.create({
        data: {
          userId: user.id,
          productId: +productId,
        },
      });

  return res.status(201).json({
    ok: true,
  });
}

export default withSession(withHandler({ method: ["POST"], fn: handler }));
