import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

function NewVehicles() {
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen mt-5"
        style={{
          backgroundImage:
            "url(https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/topics/magazine-article-pool/2024/wallpaper/m-wallpaper/3-0-csl/bmw-3-0-csl-mi-02.jpg.asset.1669308608803.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h3 className="mb-5 text-3xl font-bold text-white">
              NEW Vehicles
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewVehicles;
