import { NextApiRequest, NextApiResponse } from "next";

export default function withHandler(
  method: "GET" | "POST" | "DELETE",
  fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (method !== req.method) {
      res.status(405).end();
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
