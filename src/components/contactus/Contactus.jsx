import React from "react";
import "./contactus.css";

const Contactus = () => {
  return (
    <>
      <div className="container">
        <div className="contactPage">
          <div className="contactFirst">
            <div className="contactHead">
              <h2>Contact Us</h2>
            </div>
            <p className="contactInfo">
              We are working hard to answer all your questions. <br />
              You can be sure that we return within 24 hours.
            </p>
            <p className="contactMail">
              Email:{" "}
              <a href="mailto:hello@cryptoinvestmentww.com">
                hello@cryptoinvestmentww.com
              </a>
            </p>
          </div>
          <div className="contactForm">
            <form
              method="post"
              action="https://register-demo.freecodecamp.org"
              className="formSettings"
            >
              <label for="first-name">
                Your Name:{" "}
                <input
                  className="contactStyle"
                  id="first-name"
                  name="first-name"
                  type="text"
                  required
                />
              </label>
              <label for="email">
                Your Email:{" "}
                <input
                  className="contactStyle"
                  id="email"
                  name="email"
                  type="email"
                  required
                />
              </label>
              <label for="bio">
                How can we help?
                <textarea
                  className="contactStyle"
                  id="bio"
                  name="bio"
                  rows="6"
                  cols="60"
                ></textarea>
              </label>
              <input className="contactStyle" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
