import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, phone } = req.body;
  const method = email ? { email } : { phone };
  const randNum = Math.floor(Math.random() * 1000000) + "";

  const isUser = await client.user.findUnique({ where: { ...method } });
  if (isUser) {
    await client.token.deleteMany({ where: { userId: isUser.id } });
  }
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

  // if (phone) {
  //   const twilioClient = twilio(
  //     process.env.TWILIO_ACCOUNT_SID,
  //     process.env.TWILIO_AUTH_TOKEN
  //   );
  //   twilioClient.messages
  //     .create({
  //       to: process.env.USER_PHONE_NUM ?? "",
  //       body: randNum,
  //       messagingServiceSid: process.env.TWILIO_MS_ID,
  //     })
  //     .then(console.log);
  // }

  // if (email) {
  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: process.env.GMAIL_ACCOUNT,
  //       pass: process.env.GMAIL_PASS,
  //     },
  //   });

  //   const info = await transporter.sendMail({
  //     to: email,
  //     from: process.env.GMAIL_ACCOUNT,
  //     subject: "감자마켓 - 인증번호 발송",
  //     text: `감자마켓 - 인증번호: ${randNum}`,
  //   });
  // }

  res.status(200).json({ ok: true });
}

export default withSession(withHandler("POST", handler));
