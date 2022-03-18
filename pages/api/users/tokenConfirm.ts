import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;
  const existToken = await client.token.findUnique({
    where: {
      content: token,
    },
  });

  if (!existToken) {
    res.status(404).end();
    return;
  }
  req.session.user = {
    id: existToken.userId,
  };
  console.log(req.session.user);
  await req.session.save();

  res.status(200).end();
}

export default withSession(withHandler("POST", handler));
