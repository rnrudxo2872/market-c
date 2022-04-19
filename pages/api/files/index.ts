import withHandler from "@libs/server/withHandler";
import { withSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN } = process.env;

  const resCloudFlare = await (
    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
        },
      }
    )
  ).json();

  return res.status(200).json({
    uploadURL: resCloudFlare.result.uploadURL,
  });
}

export default withSession(withHandler({ fn: handler, method: ["GET"] }));
