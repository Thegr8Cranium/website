import React from "react";
import "./header.css";
import login from "../../asset/login.svg";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h3>CryptoInvestmentWorldwide</h3>
        </div>
        <div className="menu">
          <a href="/">Home</a>
          <a href="/About">About Us</a>
          <a href="/Contact">Contact Us</a>
          <a href="/Faq">FAQ</a>
          <a href="/Login">Login</a>
        </div>
        <div className="signup">
          <button>
            <a href="/Signup">
              <img src={login} alt="" /> Sign Up
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
