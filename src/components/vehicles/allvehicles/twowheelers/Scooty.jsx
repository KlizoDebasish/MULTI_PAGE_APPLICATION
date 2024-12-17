import React from "react";
import Navbar from "../../../shared/Navbar";
import Footer from "../../../shared/Footer";

function Scooty() {
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen mt-5"
        style={{
          backgroundImage:
            "url(https://imgd.aeplcdn.com/1280x720/n/cw/ec/44686/activa-6g-left-front-three-quarter.jpeg?q=100)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h3 className="mb-5 text-3xl font-bold text-white">Scooty</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Scooty;
