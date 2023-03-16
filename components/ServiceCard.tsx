import { Service } from "@/prisma/types";
import React from "react";

export default function ServiceCard({ service }: Service) {
  return (
    <div className="bg-gray-100 border border-gray-200 p-6 rounded-lg">
      <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
      <p className="mt-4 text-base text-gray-600">{service.desc}</p>
    </div>
  );
}
