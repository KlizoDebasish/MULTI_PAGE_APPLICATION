import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Banner() {
  return (
    <>
      <div
        className="hero min-h-screen mt-5"
        style={{
          backgroundImage:
            "url(https://www.motortrend.com/uploads/2023/09/every-type-of-car-motortrend.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h3 className="mb-5 text-3xl font-bold text-white">
              Welcome To NVS
            </h3>
            <p className="mb-5">
              Where Your Next Ride Awaits! Our platform is crafted to provide an
              unmatched vehicle browsing experience, making it easy and
              enjoyable to find the perfect vehicle for your needs. Whether
              you're searching for the latest car models, powerful bikes, or
              eco-friendly options, NVS has it all. Explore our wide range of
              two-wheelers, three-wheelers, and four-wheelers, and discover a
              seamless way to get on the road with confidence.
            </p>
            <Link to="/upcoming-vehicles">
              <Button text="Upcoming Vehicles 🚗" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
