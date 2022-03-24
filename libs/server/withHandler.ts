import { NextApiRequest, NextApiResponse } from "next";
import { IWithConfig, RequestMethod } from "./interfaces";

export default function withHandler({
  method,
  fn,
  isPublic = false,
}: IWithConfig) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (!req.method) {
      return res.status(400).end();
    }

    if (!method.includes(req.method as RequestMethod)) {
      return res.status(405).end();
    }

    if (!isPublic && !req.session.user) {
      return res.status(403).json({
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
