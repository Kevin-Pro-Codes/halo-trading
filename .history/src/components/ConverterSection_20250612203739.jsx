import React, { useState, useEffect } from "react";

const ConverterSection = () => {
  const [btcAmount, setBtcAmount] = useState(1);
  const [usdAmount, setUsdAmount] = useState(0);
  const [btcPrice, setBtcPrice] = useState(106047); // Default/fallback BTC price

useEffect(() => {
  fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
    .then((res) => res.json())
    .then((data) => {
      const price = data?.bitcoin?.usd;
      if (price) {
        setBtcPrice(price);
        setUsdAmount((btcAmount * price).toFixed(2));
      }
    })
    .catch((err) => {
      console.error("Failed to fetch BTC price:", err);
    });
}, []);


  useEffect(() => {
    setUsdAmount((btcAmount * btcPrice).toFixed(2));
  }, [btcAmount, btcPrice]);

  const handleUsdChange = (value) => {
    setUsdAmount(value);
    setBtcAmount((value / btcPrice).toFixed(8));
  };

  return (
    <section className="section-black">
      <div className="section-content">
        <h2>BTC/USD Converter</h2>
        <div className="converter-container">
          <div className="converter-card">
            <div className="converter-row">
              <label>BTC</label>
              <input
                type="number"
                value={btcAmount}
                onChange={(e) => setBtcAmount(e.target.value)}
                min="0"
                step="0.00000001"
              />
            </div>
            <div className="converter-row">
              <label>USD</label>
              <input
                type="number"
                value={usdAmount}
                onChange={(e) => handleUsdChange(e.target.value)}
                min="0"
                step="0.01"
              />
            </div>
            <div className="rate-display">
              Current Rate: 1 BTC = $
              {btcPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConverterSection;
