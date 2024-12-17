import React from "react";
import Navbar from "../../../shared/Navbar";
import Footer from "../../../shared/Footer";

function Sedan() {
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen mt-5"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600268330186-76564be81357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h3 className="mb-5 text-3xl font-bold text-white">
              Sedan
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sedan;
