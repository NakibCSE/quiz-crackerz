import React from "react";
import header from "../../../src/asset/header.png";
const Header = () => {
  return (
    <div
      className="hero header-container w-full"
      style={{
        backgroundImage: `url(${header})`,
        height: "60vh",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Start your journey with Code Khata</h1>
          <p className="mb-5">
            You Can test your mind from here !! So start Quickly
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
