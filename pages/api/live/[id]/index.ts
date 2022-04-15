import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;

  const liveInfo = await client.stream
    .findUnique({
      where: {
        id: Number(query.id.toString()),
      },
      select: {
        id: true,
        name: true,
        createdAt: true,
        description: true,
        price: true,
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        messages: {
          select: {
            content: true,
            user: {
              select: {
                id: true,
                avatar: true,
                name: true,
              },
            },
          },
          where: {
            createdAt: {
              gte: new Date(Number(query.time.toString())),
            },
          },
          take: -5,
        },
      },
    })
    .catch(() => {
      throw res.status(400).json({
        ok: false,
        error: "옳지 않은 요청입니다.",
      });
    });

  if (!liveInfo) {
    return res.status(404).json({
      ok: false,
      error: "해당 정보가 없습니다.",
    });
  }

  return res.status(200).json({
    ok: true,
    live: {
      id: liveInfo.id,
      title: liveInfo.name,
      createdAt: liveInfo.createdAt,
      price: liveInfo.price,
      streamerId: liveInfo.user.id,
      streamer: liveInfo.user.name,
      messages: liveInfo.messages,
    },
  });
}

export default withSession(withHandler({ fn: handler, method: ["GET"] }));
