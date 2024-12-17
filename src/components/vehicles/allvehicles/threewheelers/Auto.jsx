import React from "react";
import Navbar from "../../../shared/Navbar";
import Footer from "../../../shared/Footer";

function Auto() {
  return (
    <>
     <Navbar />
      <div
        className="hero min-h-screen mt-5"
        style={{
          backgroundImage:
            "url(https://truckcdn.cardekho.com/in/mahindra/treo/mahindra-treo-67242.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h3 className="mb-5 text-3xl font-bold text-white">
              Auto
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Auto;
