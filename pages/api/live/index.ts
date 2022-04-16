import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "GET") {
    const { query } = req;
    const page = Number(query.page.toString()) - 1;
    const liveList = await client.stream
      .findMany({
        select: {
          id: true,
          name: true,
          createdAt: true,
          user: {
            select: {
              name: true,
            },
          },
        },
        skip: page * 5,
        take: 5,
      })
      .catch(() => {
        return res.status(400).json({
          ok: false,
          error: "잘못된 형식의 요청입니다.",
        });
      });

    if (!liveList) {
      return res.status(400).json({
        ok: false,
        error: "잘못된 형식의 요청입니다.",
      });
    }

    return res.status(200).json({
      ok: true,
      data: liveList.map(({ id, name, createdAt, user }) => ({
        id,
        title: name,
        createdAt,
        userName: user.name,
      })),
    });
  }

  if (method === "POST") {
    const {
      body: { title, price, description },
      session: { user },
    } = req;
    const createdLive = await client.stream
      .create({
        data: {
          name: title,
          description,
          price,
          userId: user!.id,
        },
      })
      .catch(() => {
        return res.status(400).json({
          ok: false,
          error: "잘못된 형식의 입력입니다.",
        });
      });

    if (!createdLive) {
      return res.status(406).json({
        ok: false,
        error:
          "방송을 등록하는데 실패하였습니다! \n 계속 같은 현상이 발생하면 문의를 해주십시오.",
      });
    }

    return res.status(201).json({
      ok: true,
      liveId: createdLive!.id,
    });
  }
}

export default withSession(
  withHandler({ fn: handler, method: ["GET", "POST"] })
);
