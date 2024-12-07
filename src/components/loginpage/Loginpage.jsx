import React from "react";
import "./loginpage.css";

const Loginpage = () => {
  return (
    <>
      <div className="loginPage">
        <h2>Crypto Investment Worldwide</h2>
        <p>Welcome to our Platform</p>
        <p>Please sign-in to your account and start the adventure</p>
        <form action="" method="post" className="loginForm">
          <label htmlFor="username">
            Username{" "}
            <input
              className="loginBox"
              type="text"
              name="username"
              id="username"
            />
          </label>{" "}
          <label htmlFor="password">Password</label>{" "}
          <input className="loginBox" type="password" name="" id="" />
          <label htmlFor="rememberMe">
            <input
              className="checkboxLogin"
              type="checkbox"
              name=""
              id="rememberMe"
            />
            Remember Me
          </label>
          <button>Login</button>
        </form>
        <div className="loginPageFoot">
          New to our platform? <a href="/Signup">create an account</a>{" "}
        </div>
      </div>
    </>
  );
};

export default Loginpage;
