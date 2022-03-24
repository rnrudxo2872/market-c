import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;

  if (!id) {
    return res.status(400).json({ ok: false, error: "잘못된 요청입니다." });
  }

  const product = await client.product.findUnique({
    where: {
      id: +id,
    },
    include: {
      user: true,
    },
  });

  if (!product) {
    return res
      .status(404)
      .json({ ok: false, error: "제품에 대한 정보가 없습니다." });
  }

  return res.status(200).json({
    ok: true,
    product: {
      name: product.name,
      description: product.description,
      price: product.price,
      userName: product.user.name,
    },
  });
}

export default withSession(withHandler({ method: ["GET"], fn: handler }));
