import { NextApiRequest, NextApiResponse } from "next";

export default function enterHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ ok: true });
}
