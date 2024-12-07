import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import Plan from "../components/Plan/Plan";
import Calculator from "../components/calculator/Calculator";
import Sogreat from "../components/sogreat/Sogreat";
import Feature from "../components/feature/Feature";
import Affiliate from "../components/affiliate/Affiliate";
import CryptoTicker from "../components/CryptoTicker/CryptoTicker";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <CryptoTicker />
      <Plan />
      <Calculator />
      <Sogreat />
      <Feature />
      <Affiliate />
      <Footer />
    </>
  );
};

export default Home;
