import { PrismaClient } from "@prisma/client";

declare global {
  var client: PrismaClient;
}

//hot-loading 으로 인한 여러 인스턴스 생성 방지
const client = global.client || new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV === "development") {
  global.client = client;
}

export default client;
