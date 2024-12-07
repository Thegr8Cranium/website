import React from "react";
import "./plan.css";
import dollar from "../../asset/dollar.svg";
import dollarsilver from "../../asset/dollarsilver.svg";
import dollarbasic from "../../asset/dollarbasic.svg";
const Plan = () => {
  return (
    <>
      <div>
        <div className="planContainer">
          <div className="planHead">
            <div className="planHeadOne">
              <h2>Investment</h2>
              <span>PLANS</span>
            </div>
            <div className="planHeadTwo">
              <p>
                Forex Crypto Stock provides profitable cryptocurrency
                investment. Customers can choose different investment plans for
                rewarding asset management. Our customers can earn passive
                income without any trading knowledge.
              </p>
            </div>
          </div>
        </div>
        <div className="planList">
          <div className="planOne">
            <h3>
              Basic <img src={dollarbasic} alt="" />
            </h3>
            <p className="percent">10%</p>
            <p>Minimum - $100</p>
            <p>Maximum - $999</p>
            <p>Plan Duration: 24hours</p>
            <p>Capital Included</p>
            <button className="planButton" type="">
              INVEST NOW
            </button>
          </div>
          <div className="planTwo">
            <h3>
              Silver <img src={dollarsilver} alt="" />
            </h3>
            <p className="percent">15%</p>
            <p>Minimum - $1,000</p>
            <p>Maximum - $4,999</p>
            <p>Plan Duration: 48hours</p>
            <p>Capital Included</p>
            <button className="planButton" type="">
              INVEST NOW
            </button>
          </div>
          <div className="planThree">
            <h3>
              Gold <img src={dollar} alt="" />
            </h3>
            <p className="percent">20%</p>
            <p>Minimum - $5,000</p>
            <p>Maximum - $9,999</p>
            <p>Plan Duration: 3 days</p>
            <p>Capital Included</p>
            <button className="planButton" type="">
              INVEST NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
