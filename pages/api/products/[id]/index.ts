import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;

  if (!id || id.length === 0) {
    return res.status(400).json({ ok: false, error: "잘못된 요청입니다." });
  }

  //상품정보
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

  //관련상품
  const relatedProducts = await client.product.findMany({
    where: {
      OR: product.name.split(" ").map((word) => ({
        name: {
          contains: word,
        },
      })),
      NOT: {
        id: product.id,
      },
    },
  });

  //좋아요 표시
  const isLike = Boolean(
    await client.productLike.findFirst({
      where: {
        userId: user!.id,
        productId: product.id,
      },
    })
  );

  return res.status(200).json({
    ok: true,
    product: {
      name: product.name,
      description: product.description,
      price: product.price,
      userName: product.user.name,
      images: product.image.split(","),
    },
    relatedProducts: relatedProducts.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
    })),
    isLike,
  });
}

export default withSession(withHandler({ method: ["GET"], fn: handler }));
