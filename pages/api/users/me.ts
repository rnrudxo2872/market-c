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

    const userState = await client.user.findUnique({
      where: {
        id: user!.id,
      },
    });

    if (userState) {
      if (name && name !== userState.name) {
        if (await isUnique({ userId: user!.id, col: "name", value: name }))
          return res.json({
            ok: false,
            error: "사용할 수 없는 이름 입니다.",
          });
      }
      if (email && email !== userState.email) {
        if (await isUnique({ userId: user!.id, col: "email", value: email }))
          return res.json({
            ok: false,
            error: "사용할 수 없는 이메일 입니다.",
          });
      }
      if (phone && phone !== userState.phone) {
        if (await isUnique({ userId: user!.id, col: "phone", value: phone }))
          return res.json({
            ok: false,
            error: "사용할 수 없는 휴대번호 입니다.",
          });
      }
    }

    const updatedUser = await client.user
      .update({
        data: {
          name: name === "" ? null : name,
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

async function isUnique({
  userId,
  col,
  value,
}: {
  userId: number;
  col: string;
  value: string;
}) {
  return Boolean(
    await client.user.findMany({
      where: {
        [col]: value,
        NOT: {
          id: userId,
        },
      },
    })
  );
}

export default withSession(
  withHandler({ method: ["GET", "PATCH"], fn: handler })
);
