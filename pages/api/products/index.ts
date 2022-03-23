import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body,
    session: { user },
  } = req;
  console.log(body);

  res.status(200).end();
}

export default withSession(withHandler({ method: "POST", fn: handler }));
