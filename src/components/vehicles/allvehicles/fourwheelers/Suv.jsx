import React from "react";
import Navbar from "../../../shared/Navbar";
import Footer from "../../../shared/Footer";

function Suv() {
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen mt-5"
        style={{
          backgroundImage:
            "url(https://media.drive.com.au/obj/tx_q:70,rs:auto:1920:1080:1/driveau/upload/cms/uploads/ierhdk8yd6mybbhblkqe)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h3 className="mb-5 text-3xl font-bold text-white">
              SUV
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Suv;
