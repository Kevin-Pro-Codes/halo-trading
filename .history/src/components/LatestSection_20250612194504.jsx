import React from 'react';
// import './LatestUpdates.css'; // Optional: import your styles

const LatestSection = () => {
  return (
    <section className="section-black">
      <div className="section-content">
        <h2>Latest Updates</h2>
        <div className="updates-grid">
          <div className="update-card">
            <h3>Version 3.0</h3>
            <p>Added support for 5 new exchanges</p>
            <small>June 2025</small>
          </div>
          <div className="update-card">
            <h3>Enhanced Security</h3>
            <p>Improved API key encryption</p>
            <small>May 2025</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestSection;
