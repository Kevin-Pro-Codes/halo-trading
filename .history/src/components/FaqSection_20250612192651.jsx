import React from 'react';
//import './Faq.css'; // Optional, if you want to include styles

const FaqSection = () => {
  return (
    <section className="section-white">
      <div className="section-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How does the bot work?</h3>
            <p>Our trading bot connects to exchanges via API and executes trades based on your predefined strategies.</p>
          </div>
          <div className="faq-item">
            <h3>Which exchanges are supported?</h3>
            <p>We support Binance, Coinbase, Kraken, and other major exchanges with API access.</p>
          </div>
          <div className="faq-item">
            <h3>Is there a demo version?</h3>
            <p>Yes, we offer a 7-day free trial with paper trading functionality.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
