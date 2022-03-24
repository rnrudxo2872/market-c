import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token, email, phone } = req.body;
  const method = email ? { email } : { phone };
  const existToken = await client.token.findUnique({
    where: {
      content: token,
    },
  });

  if (!existToken) {
    return res.status(404).end();
  }

  const existUser = await client.user.findUnique({
    where: {
      ...method,
    },
  });

  if (!existUser || existUser.id !== existToken.userId) {
    return res.status(405).end();
  }

  req.session.user = {
    id: existToken.userId,
  };
  console.log(req.session.user);
  await req.session.save();

  return res.status(200).json({
    ok: true,
  });
}

export default withSession(
  withHandler({ method: ["POST"], fn: handler, isPublic: true })
);
