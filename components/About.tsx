import React from "react";

export default function About() {
  return (
    <div className="bg-green-300 py-16">
      <div className="container">
        <div className="sm:text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            About Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            At [Shop Name], we are committed to providing the highest quality
            auto services in the [City/State] area. Our experienced mechanics
            use the latest diagnostic equipment and tools to get your vehicle
            back on the road quickly and safely.
          </p>
          <p className="mt-4 text-xl text-gray-600">
            We offer a wide range of services, including routine maintenance,
            brake repair, engine diagnostics, and more. Our team is dedicated to
            making sure your vehicle is running smoothly and efficiently, and we
            pride ourselves on our excellent customer service.
          </p>
          <p className="mt-4 text-xl text-gray-600">
            If you`&apos;`re looking for a reliable and trustworthy mechanic
            shop, look no further than [Shop Name]. We`&apos;`re here to help
            with all your auto repair needs.
          </p>
        </div>
      </div>
    </div>
  );
}
