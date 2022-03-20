import { withIronSessionApiRoute } from "iron-session/next";

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

export function withSession(fn: any) {
  return withIronSessionApiRoute(fn, OPTION);
}
