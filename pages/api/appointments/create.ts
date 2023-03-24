import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const data = await prisma.appointment.create({
        data: {
          date: req.body.date,
          timeSlotId: Number(req.body.timeSlotId),
          serviceId: Number(req.body.serviceId),
          userId: req.body.userId,
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
