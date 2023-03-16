import React from "react";

export default function Services() {
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
            <div className="bg-gray-100 border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">
                Routine Maintenance
              </h3>
              <p className="mt-4 text-base text-gray-600">
                We offer a full range of routine maintenance services, including
                oil changes, tire rotations, and brake inspections, to keep your
                vehicle running smoothly and efficiently.
              </p>
            </div>
            <div className="bg-gray-100 border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">
                Brake Repair
              </h3>
              <p className="mt-4 text-base text-gray-600">
                If you're experiencing issues with your brakes, our mechanics
                can diagnose and fix the problem quickly and efficiently. We
                offer brake pad replacement, rotor resurfacing, and other brake
                repair services.
              </p>
            </div>
            <div className="bg-gray-100 border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">
                Engine Diagnostics
              </h3>
              <p className="mt-4 text-base text-gray-600">
                If your check engine light is on or you're experiencing engine
                issues, our team can use advanced diagnostic equipment to
                pinpoint the problem and provide the necessary repairs.
              </p>
            </div>
            <div className="bg-gray-100 border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">
                Suspension & Steering
              </h3>
              <p className="mt-4 text-base text-gray-600">
                We offer a full range of suspension and steering services,
                including shock and strut replacement, wheel alignment, and
                power steering repair, to keep your vehicle driving smoothly and
                safely.
              </p>
            </div>
            <div className="bg-gray-100 border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">
                Air Conditioning
              </h3>
              <p className="mt-4 text-base text-gray-600">
                If your air conditioning isn't working properly, our mechanics
                can diagnose and repair the problem. We offer air conditioning
                recharge, compressor replacement, and other AC services.
              </p>
            </div>
            <div className="bg-gray-100 border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">
                Electrical Systems
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Our mechanics are experienced in diagnosing and repairing
                electrical system issues, including battery replacement, starter
                repair, and alternator replacement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
