import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

async function enterHandler(req: NextApiRequest, res: NextApiResponse) {
  const { email, phone } = req.body;
  const method = email ? { email } : { phone: Number(phone) };
  const randNum = Math.floor(Math.random() * 1000000) + "";
  const token = await client.token.create({
    data: {
      content: randNum,
      user: {
        connectOrCreate: {
          where: { ...method },
          create: {
            name: "Unknown?",
            ...method,
          },
        },
      },
    },
  });

  if (phone) {
    console.log("");
    console.log("User account by phone number.");
    console.log(`User number => ${phone}`);

    const twilioClient = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    twilioClient.messages
      .create({
        to: process.env.USER_PHONE_NUM ?? "",
        body: randNum,
        messagingServiceSid: process.env.TWILIO_MS_ID,
      })
      .then(console.log);
  }

  res.status(200).json({ ok: true });
}

export default withHandler("POST", enterHandler);
