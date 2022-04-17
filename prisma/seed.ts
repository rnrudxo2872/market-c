import { PrismaClient } from "@prisma/client";
import { repeat } from "../libs/client/utils";

const client = new PrismaClient();
(async function () {
  repeat<any>(20)(
    async (_, i) => (
      await client.product.create({
        data: {
          name: String(i),
          description: String(i),
          price: i,
          image: "",
          userId: 20,
        },
      }),
      console.log(`${i}/20`),
      _
    )
  )({});
})().finally(() => client.$disconnect());
