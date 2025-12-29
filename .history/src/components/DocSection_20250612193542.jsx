
import React from 'react';
// import './LatestUpdates.css'; // Optional: import your styles

const DocSection = () => {
  return (
      <section className="section-white">
          <div className="section-content">
            <h2>Kdroid Documentation</h2>
            <div className="doc-grid">
              <div className="doc-card">
                <h3>API Integration</h3>
                <p>Guide to connecting with exchanges</p>
                <button className="doc-btn">View Docs</button>
              </div>
              <div className="doc-card">
                <h3>Strategy Builder</h3>
                <p>Create custom trading strategies</p>
                <button className="doc-btn">Download</button>
              </div>
            </div>
          </div>
        </section>

  );
};

export default DocSection;
