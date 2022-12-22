import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { email, phone1, phone2, phone3 },
  } = req;

  console.log(email, phone1, phone2, phone3);

  if (phone1.length > 0 && phone2.length > 0 && phone3.length > 0) {
    await client.hobbyEmail.create({
      data: {
        email: email,
        phone: [phone1, phone2, phone3].join(""),
      },
    });
  } else {
    await client.hobbyEmail.create({
      data: {
        email: email.toString(),
        phone: "",
      },
    });
  }
  return res.status(200).json({
    ok: true,
  });
}

export default withHandler({
  methods: ["POST"],
  handler,
});
