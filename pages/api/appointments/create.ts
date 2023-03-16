import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // const prismaUser = await prisma.user.findUnique({
      //   where: { email: req.body.user },
      // });
      // if (!prismaUser) {
      //   res.status(401).json({ error: "Unauthorized" });
      // }

      // console.log(prismaUser);
      const data = await prisma.appointment.create({
        data: {
          date: req.body.date,
          timeSlotId: Number(req.body.timeSlotId),
          serviceId: Number(req.body.serviceId),
          // userId: "clevwe10l00006stz71h1ss8u",
        },
      });
      res.status(200).json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error creating a new appointment" });
    }
  }
}
