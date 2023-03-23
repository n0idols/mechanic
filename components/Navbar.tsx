"use client";
import { useState } from "react";

export default function Navbar() {
  const [isMob, setMob] = useState(false);

  return (
    <nav className="bg-gray-700 text-white tracking-wider">
      <div className="container py-4">
        <div className="flex justify-between">
          {/* LOGO */}
          <div>
            <a
              href="/"
              className="text-white font-bold text-3xl bg-gradient-to-r from-purple-500 to-pink-500 inline-block px-4 py-2 italic rounded-xl"
            >
              Autofy
            </a>
          </div>
          {/* Primary Nav */}
          <div className=" hidden items-center justify-center space-x-6 font-light md:flex">
            <a href="/services">Services</a>
            <a href="/appointments">Appointments</a>
            <a href="/about">How it Works</a>
          </div>

          {/* secondary nav */}
          <div className=" hidden items-center space-x-4  font-light md:flex">
            <a href="/account">Account</a>
          </div>

          {/* mob button */}
          <button
            onClick={() => setMob(!isMob)}
            className="flex items-center md:hidden"
          >
            menu
          </button>
        </div>
      </div>
      {/* mob nav */}
      {isMob ? (
        <div className="absolute flex h-1/2 w-full flex-col justify-center space-y-4 bg-green-200 px-8 text-6xl  md:hidden">
          <a className="mob" href="/services">
            Services
          </a>
          <a className="mob" href="/appointments">
            Appointments
          </a>
          <a className="mob" href="/about">
            How it Works
          </a>
          <a className="mob" href="/account">
            Account
          </a>
        </div>
      ) : (
        <></>
      )}
    </nav>
    // <nav className="navbar">
    //   <a href="/">
    //     <h1 className="text-6xl font-bold">Autofy</h1>
    //   </a>
    //   <div className="flex w-1/2 items-center justify-end space-x-8 bg-slate-200">

    //   </div>
    // </nav>
  );
}
