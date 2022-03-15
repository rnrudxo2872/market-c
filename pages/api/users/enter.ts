import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function enterHandler(req: NextApiRequest, res: NextApiResponse) {
  const { email, phone } = req.body;
  const method = email ? { email } : { phone: Number(phone) };
  const randNum = Math.floor(Math.random() * 1000000) + "";
  const token = await client.token.create({
    data: {
      content: randNum,
      user: {
        connectOrCreate: {
          where: { ...method },
          create: {
            name: "Unknown?",
            ...method,
          },
        },
      },
    },
  });

  res.status(200).json({ ok: true });
}

export default withHandler("POST", enterHandler);
