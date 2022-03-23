import { NextApiRequest, NextApiResponse } from "next";
import { IWithConfig } from "./interfaces";

export default function withHandler({
  method,
  fn,
  isPublic = false,
}: IWithConfig) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (method !== req.method) {
      res.status(405).end();
    }

    if (!isPublic && !req.session.user) {
      res.status(403).json({
        ok: false,
        error: "You do not have permission.",
      });
    }

    try {
      await fn(req, res);
    } catch (err) {
      console.error(err);
      res.status(500).end();
      return;
    }
  };
}
