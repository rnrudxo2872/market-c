import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.session.user);
  if (!req.session.user) {
    res.status(405).end();
    return;
  }

  const profile = await client.user.findUnique({
    where: {
      id: Number(req.session.user.id),
    },
  });

  profile
    ? res.status(200).json({
        ok: true,
        profile,
      })
    : res.status(403).end();
}

export default withSession(withHandler({ method: "GET", fn: handler }));
