import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiHandler } from "next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const OPTION = {
  cookieName: "pt-mt",
  password: process.env.IRON_PASS!,
};

export function withSession(fn: NextApiHandler<void>) {
  return withIronSessionApiRoute(fn, OPTION);
}
