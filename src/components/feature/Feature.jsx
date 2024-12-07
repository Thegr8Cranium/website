import React from "react";
import "./feature.css";
import arrow2 from "../../asset/arrow2.svg";
import globe from "../../asset/globe.svg";
import clear from "../../asset/clear.svg";
import security from "../../asset/security.svg";

const Feature = () => {
  return (
    <>
      <div className="featurePage">
        <h2>FEATURE</h2>
        <div className="featureList">
          <div className="featureOne">
            {" "}
            <img src={globe} alt="" />
            <h4>Crypto Investment</h4>
            <p className="greyColor">
              We share with you all the income we earn by investing in crypto to
              grow.
            </p>
            <img src={arrow2} className="arrow2" alt="" />
          </div>
          <div className="featureTwo">
            <img src={clear} alt="" />
            <h4>Stock Market</h4>
            <p className="greyColor">
              Our professional team achieves success by being managed by
              experts.
            </p>
            <img src={arrow2} className="arrow2" alt="" />
          </div>
          <div className="featureThree">
            <img src={security} alt="" />
            <h4>Securities</h4>
            <p className="greyColor">
              Our prime brokerage group monitor portfolio, maintain liquidity,
              manage risk.
            </p>
            <img src={arrow2} className="arrow2" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
