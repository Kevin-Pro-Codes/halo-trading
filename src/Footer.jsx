import React from "react";

const Footer = () => {
  return (
    <footer className="section-black">
      <div className="section-content">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Contact</h3>
            <p>Email: support@halo.com</p>
            <p>Phone: +55 11 9987-6543</p>
            <p>Address: 456 Finance Street, Crypto City</p>
          </div>
          <div className="footer-col">
            <h3>Legal</h3>
            <p><a href="#">Risk Disclosure</a></p>
            <p><a href="#">Terms of Service</a></p>
            <p><a href="#">Privacy Policy</a></p>
          </div>
          <div className="footer-col">
            <h3>Support</h3>
            <p><a href="#">Help Center</a></p>
            <p><a href="#">API Documentation</a></p>
            <p><a href="#">Community Forum</a></p>
            <p className="mt-3"><a href="#">MetaTrader 5</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2025 Halo Algo Trading. All rights reserved. Disclaimer: Trading
            involves risk. Past performance is not indicative of future results.
          </p>
          <p className="disclaimer"></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
