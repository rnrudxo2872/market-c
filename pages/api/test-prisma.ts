import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function testHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      name: "KJoo",
    },
  });
  res.json({ ok: true });
}
