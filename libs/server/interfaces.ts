import { NextApiRequest, NextApiResponse } from "next";

export interface IWithConfig {
  method: "GET" | "POST" | "DELETE";
  fn: (req: NextApiRequest, res: NextApiResponse) => any;
  isPublic?: boolean;
}

export interface IApiResponse {
  ok: boolean;
  [key: string]: any;
}
