import React from "react";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <>
      <div className="aboutPage">
        <div className="aboutHead">
          About <span>Company</span>
        </div>
        <br />
        <br />
        <div className="aboutContent">
          Crypto Investment Worldwide is a subsidiary of Real Crypto and Forex
          Limited with a Registration No. 15196357 in the United Kingdom ({" "}
          <a
            href="https://find-and-update.company-information.service.gov.uk/company/15196357"
            className="link"
          >
            CHECK REGISTRATION NUMBER
          </a>{" "}
          ). Crypto Investment Worldwide is an international financial
          organization that has been working since October 2018. As the Crypto
          Investment Worldwide team, we decided to receive investments in order
          to grow and sharing our profits with our investors. <br />
          <br />
          Crypto Investment Worldwide works with a team of experts in
          cryptocurrency trading, arbitrage and trade in the crypto market. We
          guaratee stable profits to our investors. <br />
          The company has strong capital and the capital owned by our company is
          guaranteed for investors. <br />
          <br />
          You are able to earn money without making any risky decision. We have
          developed a system that guarantees constant passive income in 4
          investment plans. After you make a deposit, you will be able to earn
          up to 50% passive income per day till end of the term of your
          contracts.
        </div>
      </div>
    </>
  );
};

export default Aboutus;
