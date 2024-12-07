import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import CryptoTicker from "../components/CryptoTicker/CryptoTicker";

const Faqpage = () => {
  return (
    <>
      <Header />
      <Hero />
      <CryptoTicker />
      <FAQAccordion />
      <Footer />
    </>
  );
};

export default Faqpage;
