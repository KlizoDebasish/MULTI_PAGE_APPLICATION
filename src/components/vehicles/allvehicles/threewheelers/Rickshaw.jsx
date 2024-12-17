import React from "react";
import Navbar from "../../../shared/Navbar";
import Footer from "../../../shared/Footer";

function Rickshaw() {
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen mt-5"
        style={{
          backgroundImage:
            "url(https://c0.wallpaperflare.com/preview/211/196/973/two-assorted-color-auto-rickshaws-parked-on-sidewalk.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h3 className="mb-5 text-3xl font-bold text-white">
              Rickshaw
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Rickshaw;
