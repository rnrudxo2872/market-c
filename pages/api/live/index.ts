import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

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
      .catch((error) => {
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
