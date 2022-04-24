import client from "@libs/server/client";
import { IApiResponse } from "@libs/server/interfaces";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IApiResponse>
) {
  const { method } = req;
  if (method === "GET") {
    const {
      query: { page },
    } = req;
    const pageNum = Number(page.toString()) - 1;

    const products = await client.product.findMany({
      include: {
        user: true,
        _count: {
          select: {
            like: true,
          },
        },
      },
      skip: pageNum * 5,
      take: 5,
    });

    return res.status(200).json({
      ok: true,
      data: products.map(
        ({
          id,
          name,
          price,
          image,
          user: { name: userName },
          _count: { like: likes },
        }) => ({
          id,
          name,
          price,
          image,
          userName,
          likes,
        })
      ),
    });
  }

  if (method === "POST") {
    const {
      body: { name, description, price, images },
      session: { user },
    } = req;

    const product = await client.product.create({
      data: {
        name,
        description,
        price: Number(price),
        image: (images as string[]).join(","),
        user: { connect: { id: user!.id } },
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
