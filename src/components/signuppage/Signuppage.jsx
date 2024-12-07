import React from "react";
import "./signuppage.css";

const Signuppage = () => {
  return (
    <>
      <div className="signUpPage">
        <h1>Crypto InvestMent Worldwide</h1>
        <p>Investment process starts here</p>
        <p>Just a few steps away</p>
        <form className="signUpForm" action="" method="post">
          <label htmlFor="fullName">Full Name</label>{" "}
          <input type="text" name="fullName" id="fullName" />
          <label htmlFor="userName">Username</label>{" "}
          <input type="text" name="userName" id="userName" />
          <label htmlFor="email">Email</label>{" "}
          <input type="email" name="email" id="email" />
          <label htmlFor="email">Retype Email</label>{" "}
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password</label>{" "}
          <input type="password" name="password" id="password" />
          <label htmlFor="password">Retype Password</label>{" "}
          <input type="password" name="password" id="password" />
          <label htmlFor="btcAddress">Bitcoin Address</label>{" "}
          <input
            type="address"
            name="btcAddress"
            id="btcAddress"
            placeholder="Bitcoin Address"
          />
          <label htmlFor="usdtAddress">USDT (TRC 20) Address</label>{" "}
          <input
            type="address"
            name="usdtAddress"
            id="usdtAddress"
            placeholder="USDT (TRC 20) Address"
          />
          <label htmlFor="accept">
            <input type="checkbox" name="accept" id="accept" />I agree to Terms
            and conditions
          </label>
          <button>Sign up</button>
          <p>
            Already have an account? <a href="/Login">Sign in instead</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signuppage;
