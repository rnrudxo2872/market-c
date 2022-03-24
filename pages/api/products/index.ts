import { IApiResponse } from "@libs/server/interfaces";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IApiResponse>
) {
  if (req.method === "GET") {
    const products = await client.product.findMany({ include: { user: true } });

    return res.status(200).json({
      ok: true,
      products: products.map(
        ({ id, name, price, user: { name: userName } }) => ({
          id,
          name,
          price,
          userName,
        })
      ),
    });
  }

  if (req.method === "POST") {
    const {
      body: { name, description, price },
      session: { user },
    } = req;

    if (!user) {
      return res.status(403).json({
        ok: false,
        error: "권한이 없습니다.",
      });
    }

    const product = await client.product.create({
      data: {
        name,
        description,
        price: Number(price),
        image: "xx",
        user: { connect: { id: user.id } },
      },
    });

    return res.status(200).json({
      ok: true,
      post: {
        id: product.id,
      },
    });
  }
}

export default withSession(
  withHandler({ method: ["GET", "POST"], fn: handler })
);
