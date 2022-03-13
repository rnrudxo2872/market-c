import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function enterHandler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ok: true });
}

export default withHandler("POST", enterHandler);
