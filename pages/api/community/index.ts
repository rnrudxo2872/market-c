import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const {
      query: { latitude, longitude },
    } = req;
    const lat = Number(latitude.toString());
    const long = Number(longitude.toString());
    const RANGE_CONST = 0.01;

    const communityPosts = await client.communityPost.findMany({
      where: {
        latitude: {
          gte: lat - RANGE_CONST,
          lte: lat + RANGE_CONST,
        },
        longitude: {
          gte: long - RANGE_CONST,
          lte: long + RANGE_CONST,
        },
      },
      include: {
        user: true,
        _count: {
          select: {
            answer: true,
            wonder: true,
          },
        },
      },
    });

    return res.status(200).json({
      ok: true,
      posts: communityPosts.map(
        ({ id, content, user: { name }, _count: { answer, wonder } }) => ({
          id,
          content,
          userName: name,
          answers: answer,
          wonders: wonder,
        })
      ),
    });
  }

  if (req.method === "POST") {
    const {
      session: { user },
      body: {
        content,
        coords: { latitude, longitude },
      },
    } = req;
    console.log(req.body);
    if (!content) {
      return res.status(402).json({
        ok: false,
        error: "옳지않은 요청입니다.",
      });
    }

    const communityPost = await client.communityPost.create({
      data: {
        content,
        userId: user!.id,
        latitude,
        longitude,
      },
    });

    return res.status(201).json({
      ok: true,
      postId: communityPost.id,
    });
  }
}

export default withSession(
  withHandler({ method: ["GET", "POST"], fn: handler })
);
