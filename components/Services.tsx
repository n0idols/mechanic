"use client";

import useServices from "@/hooks/useServices";
import React from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  title: string;
  desc: string;
}

export default function Services() {
  const servicesQuery = useServices();

  return (
    <div className="bg-white py-16">
      <div className="container">
        <div className="sm:text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            At [Shop Name], we offer a wide range of auto repair and maintenance
            services to keep your vehicle running smoothly and safely. Our
            experienced mechanics use state-of-the-art diagnostic equipment and
            tools to accurately diagnose and fix any issues with your vehicle.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesQuery.isLoading ? (
              <>Loading...</>
            ) : (
              <>
                {servicesQuery.data?.data?.map((service: Service) => (
                  <>
                    <ServiceCard service={service} />
                  </>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
