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
       
                {/* Trading View Example */}
                <div className="mt-5 pt-4 border-top border-white border-opacity-10">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                      <i className="fas fa-chart-bar text-success fs-4"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold text-white mb-1">Live Market Integration</h6>
                      <p className="text-white-50 small mb-0">Real-time data from 50+ exchanges</p>
                    </div>
                  </div>
                  
                  {/* Simulated Trading Chart */}
                  <div className="bg-black bg-opacity-50 p-3 rounded mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-white small">BTC/USD</span>
                      <span className="text-success small">+2.4% today</span>
                    </div>
                    <div className="position-relative" style={{ height: '100px', background: 'linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 100%)' }}>
                      {/* Simulated chart line */}
                      <div className="position-absolute top-0 start-0 end-0 bottom-0">
                        <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
                          <path 
                            d="M0,70 Q50,50 100,60 Q150,40 200,30 Q250,20 300,40" 
                            stroke="#198754" 
                            strokeWidth="2" 
                            fill="none"
                          />
                          <path 
                            d="M0,70 Q50,50 100,60 Q150,40 200,30 Q250,20 300,40 L300,100 L0,100 Z" 
                            fill="rgba(25, 135, 84, 0.1)" 
                          />
                        </svg>
                      </div>
                      <div className="position-absolute bottom-0 start-0 end-0 text-center">
                        <span className="text-white-50 small">Live price simulation</span>
                      </div>
                    </div>
                  </div>
                </div>
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