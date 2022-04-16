import { PrismaClient } from "@prisma/client";
import { repeat } from "../libs/client/utils";

const client = new PrismaClient();
(async function () {
  repeat<any>(50)(
    async (_, i) => (
      await client.stream.create({
        data: {
          name: String(i),
          description: String(i),
          price: Number(i),
          userId: 20,
        },
      }),
      console.log(`${i}/50`),
      _
    )
  )({});
})().finally(() => client.$disconnect());
