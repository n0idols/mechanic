import React from "react";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className="hero-image">
          {/* <img src="/hero.jpg" alt="Mechanic working on a car" /> */}
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Book Your Next Auto Service Online</h1>
          <p className="hero-text">
            Get your car back on the road with our trusted mechanics. Book an
            appointment today and enjoy fast, reliable service.
          </p>
          <div>
            <a href="#book-appointment" className="btn btn-primary">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
