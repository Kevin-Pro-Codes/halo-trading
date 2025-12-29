import React from 'react';

const IntroSection = ({ count, setCount }) => {
  const stats = [
    { value: "99.9%", label: "Uptime", icon: "fas fa-server", color: "primary" },
    { value: "50+", label: "Exchanges", icon: "fas fa-exchange-alt", color: "success" },
    { value: "0.2s", label: "Latency", icon: "fas fa-bolt", color: "warning" },
    { value: "10k+", label: "Active Users", icon: "fas fa-users", color: "info" }
  ];

  const features = [
    { icon: "fas fa-brain", title: "AI-Powered", description: "Machine learning algorithms adapt to market conditions" },
    { icon: "fas fa-shield-alt", title: "Secure", description: "Bank-level encryption and multi-factor authentication" },
    { icon: "fas fa-chart-line", title: "Multi-Strategy", description: "Run multiple trading strategies simultaneously" },
    { icon: "fas fa-mobile-alt", title: "Mobile Ready", description: "Monitor and control from anywhere via mobile app" }
  ];

  return (
    <section className="py-5 bg-black text-white">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Column - Main Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4 text-white">
              Advanced Trading Bot
              <span className="text-primary"> Platform</span>
            </h1>
            
            <p className="lead text-white-50 mb-4">
              Automate your trading strategies with our high-performance bot that executes trades 24/7 
              across multiple exchanges. Experience institutional-grade technology made accessible for 
              every trader.
            </p>

            {/* Stats */}
            <div className="row g-4 mb-5">
              {stats.map((stat, index) => (
                <div key={index} className="col-6 col-md-3">
                  <div className="text-center">
                    <div className={`fs-3 fw-bold text-${stat.color} mb-2`}>
                      <i className={`${stat.icon} me-2`}></i>
                      {stat.value}
                    </div>
                    <div className="text-white small">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-column flex-md-row gap-3 mb-5">
              <button className="btn btn-primary btn-lg px-5 py-3 fw-bold">
                <i className="fas fa-rocket me-2"></i>
                Start Free Trial
              </button>
              <button className="btn btn-outline-light btn-lg px-5 py-3 fw-bold">
                <i className="fas fa-play-circle me-2"></i>
                Watch Demo
              </button>
            </div>

          </div>

          {/* Right Column - Features */}
          <div className="col-lg-6">
            <div className="card bg-dark border-0 shadow-lg">
              <div className="card-body p-4">
       
              
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .card {
          border-radius: 0.5rem;
          transition: transform 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-5px);
        }
        
        .btn-lg {
          border-radius: 0.375rem;
        }
        
        .bg-black {
          background-color: #000000 !important;
        }
        
        .border-primary {
          border-color: #0d6efd !important;
        }
        
        .text-primary {
          color: #0d6efd !important;
        }
        
        .text-white-50 {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        
        .border-opacity-10 {
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
        
        .bg-opacity-10 {
          background-color: rgba(13, 110, 253, 0.1) !important;
        }
        
        /* Animation for the count button */
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .btn-primary:active {
          animation: pulse 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default IntroSection;