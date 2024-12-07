import React from "react";
import "./sogreat.css";
import tttt from "../../asset/tttt.png";
import arrow from "../../asset/arrow.svg";

const Sogreat = () => {
  return (
    <>
      <div className="sogreatPage">
        <div className="sogreat">
          <h2>WHY IS IT SO GREAT?</h2>
          <p>
            The secret to our success comes from our expert teammates and our
            advancement in technology.
          </p>
        </div>
        <div className="reasons">
          <div className="reasonImg">
            <img src={tttt} alt="" />
          </div>
          <div className="reasonsText">
            <div className="reasonOne">
              <h3>
                {" "}
                <img src={arrow} alt="" /> TECHNOLOGY
              </h3>
              <p>
                Enjoy an impeccable investment experience thanks to the
                attractive interface and simple solutions used by Crypto
                Investment Worldwide for customer comfort and revenue protection
              </p>
            </div>
            <div className="reasonTwo">
              <h3>
                <img src={arrow} alt="" /> FINANCE
              </h3>
              <p>
                We administer the platform and manage investor assets at the
                same professional level as we develop algorithms and trade on
                cryptocurrency exchanges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sogreat;
