import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Aboutus from "../components/about/Aboutus";
import Footer from "../components/footer/Footer";
import Office from "../components/ouroffice/Office";
import CryptoTicker from "../components/CryptoTicker/CryptoTicker";

const About = () => {
  return (
    <>
      <Header />
      <Hero />
      <CryptoTicker />
      <Aboutus />
      <Office />
      <Footer />
    </>
  );
};

export default About;
