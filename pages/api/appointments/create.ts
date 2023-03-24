import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { NextResponse } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
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
