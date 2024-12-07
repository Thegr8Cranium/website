import React from "react";
import "./affiliate.css";
import person from "../../asset/person.svg";
import dollarbasic from "../../asset/dollarbasic.svg";

const Affiliate = () => {
  return (
    <>
      <div className="affiliatePage">
        <div className="affiliateHead">
          <h2>Affiliate Program</h2>
          <h3>Increase your profit</h3>
          <h6>
            Invite your friends to our project and earn extra money by
            advertising. We offer referral program with 10% commission.
          </h6>
        </div>
        <div className="affiliateBox">
          <div className="affiliateOne">
            <img src={person} alt="" />
            <h5>Enjoy unlimited</h5> <h3>Commissions</h3>{" "}
            <h6>
              The more User you refer, the more commissions we'll pay you. Plain
              and simple.
            </h6>
          </div>
          <div className="affiliateTwo">
            <img src={dollarbasic} alt="" />
            <h5>Extra Bonus and</h5> <h3>Promotions</h3>{" "}
            <h6>
              Boost your monthly earnings with additional promotional
              opportunities.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Affiliate;
