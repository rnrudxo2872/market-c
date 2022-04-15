import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "POST") {
    const {
      session: { user },
      body,
      query: { id },
    } = req;

    if (!body) {
      return res.status(400).json({
        ok: false,
        error: "잘못된 요청입니다.",
      });
    }
    const createMsg = await client.message.create({
      data: {
        user: {
          connect: {
            id: user!.id,
          },
        },
        content: body.chat,
        stream: {
          connect: {
            id: Number(id.toString()),
          },
        },
      },
    });

    return res.status(201).json({
      ok: true,
    });
  }

  if (method === "GET") {
    const { query } = req;

    const messages = await client.message.findMany({
      select: {
        content: true,
        user: {
          select: {
            id: true,
            avatar: true,
            name: true,
          },
        },
        createdAt: true,
      },
      where: {
        streamId: Number(query.id.toString()),
        createdAt: {
          gte: new Date(Number(query.time.toString())),
        },
      },
    });
    return res.status(200).json({
      ok: true,
      messages,
    });
  }
}

export default withSession(
  withHandler({ fn: handler, method: ["POST", "GET"] })
);
