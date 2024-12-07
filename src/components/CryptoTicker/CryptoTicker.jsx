import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CryptoTicker.css"; // Import custom styles for scrolling

const CryptoTicker = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: "bitcoin,ethereum,binancecoin,cardano,ripple,dogecoin,solana,polkadot,avalanche,matic-network",
            },
          }
        );
        setCryptoData(response.data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000); // Update every minute
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="crypto-ticker">
      <div className="ticker-wrapper">
        {cryptoData.map((crypto) => (
          <div className="ticker-item" key={crypto.id}>
            <img src={crypto.image} alt={crypto.name} className="crypto-icon" />
            <span className="crypto-name">{crypto.name}</span>
            <span className="crypto-price">
              ${crypto.current_price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;
