import { NextApiRequest, NextApiResponse } from "next";

export interface IWithConfig {
  method: RequestMethod[];
  fn: (req: NextApiRequest, res: NextApiResponse) => any;
  isPublic?: boolean;
}

export interface IApiResponse {
  ok: boolean;
  [key: string]: any;
}

export type RequestMethod = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
