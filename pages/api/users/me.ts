import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
    method,
  } = req;

  if (method === "GET") {
    const profile = await client.user.findUnique({
      where: {
        id: Number(user!.id),
      },
    });

    return profile
      ? res.status(200).json({
          ok: true,
          profile,
        })
      : res.status(403).end();
  }

  if (method === "PATCH") {
    const {
      body: { name, email, phone },
    } = req;

    const updatedUser = await client.user
      .update({
        data: {
          // name: name === "" ? null,
          email: email === "" ? null : email,
          phone: phone === "" ? null : phone,
        },
        where: {
          id: user!.id,
        },
      })
      .catch((error) => {
        return res.status(451).json({
          ok: false,
          error: "Something wrong.",
        });
      });

    return res.status(200).end();
  }
}

export default withSession(
  withHandler({ method: ["GET", "PATCH"], fn: handler })
);
