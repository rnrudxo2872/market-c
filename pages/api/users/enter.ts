import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function enterHandler(req: NextApiRequest, res: NextApiResponse) {
  const { email, phone } = req.body;
  const method = email ? { email } : { phone: Number(phone) };

  const user = await client.user.upsert({
    where: { ...method },
    create: { name: "Unknown", ...method },
    update: {},
  });

  res.status(200).json({ ok: true });
}

export default withHandler("POST", enterHandler);
