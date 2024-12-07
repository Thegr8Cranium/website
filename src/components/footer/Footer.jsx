import React from "react";
import "./footer.css";
import pm from "../../asset/pm.svg";
import bnb from "../../asset/bnb.png";
import btc from "../../asset/btc.svg";
import dash from "../../asset/dash.svg";
import doge from "../../asset/doge.png";
import epay from "../../asset/epay.png";
import eth from "../../asset/eth.svg";
import ltc from "../../asset/ltc.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerImages">
          <img src={pm} alt="pm-logo" />
          <img src={bnb} alt="bnb-logo" />
          <img src={btc} alt="btc-logo" />
          <img src={dash} alt="dash-logo" />
          <img src={doge} alt="doge-logo" />
          <img src={epay} alt="epay-logo" />
          <img src={eth} alt="eth-logo" />
          <img src={ltc} alt="ltc-logo" />
        </div>
        <div className="footerSection">
          <div className="footerSectionOne">
            <h2>Get in Touch</h2>
            <a href="/">Telegram Channel</a>
            <a href="mailto:hello@cryptoinvestmentww.com">
              hello@cryptoinvestmentww.com
            </a>
            <a href="/"> 195 Freeman Street, Grimsby, England, DN32 7AS</a>
          </div>
          <div className="footerSectionTwo">
            <h2>Quick Links</h2>
            <a href="/">Home</a>
            <a href="/About">About Us</a>
            <a href="/Faqpage">FAQ</a>
          </div>
          <div className="footerSectionThree">
            <h2>Help Desk</h2>
            <a href="/Contact">Contact Us</a>
            <a href="/Login">Login</a>
            <a href="/Signup">Sign Up</a>
          </div>
        </div>
        <div className="termsAndReserved">
          <a href="/Terms" className="terms">
            Terms & Conditions
          </a>
          <div className="footerReserve">
            <div className="arr">© 2024 All Right Reserved,</div>{" "}
            <div className="footerName">CryptoInvestmentWorldwide</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
