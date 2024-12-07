import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="background heroSection">
        <h1>Professional</h1>
        <h2>Asset Management</h2>
        <p>
          Up to 10% daily earnings, Instant withdrawal. Payments are in your
          account regularly!
        </p>
        <a href="/Login">
          <button className="login">LOGIN</button>
        </a>
        <a href="/Signup">
          <button className="register">REGISTER</button>
        </a>
      </div>
    </>
  );
};

export default Hero;
