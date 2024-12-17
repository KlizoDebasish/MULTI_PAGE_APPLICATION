import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

function UpcomingVehicles() {
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen mt-5"
        style={{
          backgroundImage:
            "url(https://www.topgear.com/sites/default/files/cars-car/image/2020/07/dsc09285.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h3 className="mb-5 text-3xl font-bold text-white">
              Upcomming Vehicles
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UpcomingVehicles;
