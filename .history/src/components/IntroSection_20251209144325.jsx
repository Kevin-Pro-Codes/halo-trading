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
    <section className="py-4 bg-black text-white">
      <div className="container py-4">
        {/* Centered Header */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold mb-3 text-white">
              Advanced Trading Bot
              <span className="text-primary"> Platform</span>
            </h1>
            
            <p className="lead text-white-50 mb-4">
              Automate your trading strategies with our high-performance bot that executes trades 24/7 
              across multiple exchanges. Experience institutional-grade technology made accessible for 
              every trader.
            </p>
          </div>
        </div>

        {/* Centered Stats */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <div className="row g-3 justify-content-center">
              {stats.map((stat, index) => (
                <div key={index} className="col-6 col-md-3">
                  <div className="text-center">
                    <div className={`fs-4 fw-bold text-${stat.color} mb-2`}>
                      <i className={`${stat.icon} me-2`}></i>
                      {stat.value}
                    </div>
                    <div className="text-white small">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Features */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <div className="row g-3 justify-content-center">
              {features.map((feature, index) => (
                <div key={index} className="col-md-6">
                  <div className="d-flex flex-column align-items-center text-center p-3">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
                      <i className={`${feature.icon} text-primary fs-4`}></i>
                    </div>
                    <h5 className="fw-bold text-white mb-2">{feature.title}</h5>
                    <p className="text-white-50 mb-0">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centered CTA Buttons */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <button className="btn btn-primary btn-lg px-4 py-3 fw-bold">
                <i className="fas fa-rocket me-2"></i>
                Start Free Trial
              </button>
              <button className="btn btn-outline-light btn-lg px-4 py-3 fw-bold">
                <i className="fas fa-play-circle me-2"></i>
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Centered Interactive Test */}
        <div className="row justify-content-center text-center">
          <div className="col-sm-5">
            <div className="card bg-dark border-primary border-2 mb-0">
              <div className="card-body p-0">
                <h6 className="fw-bold text-white mb-2">Quick Interaction Test</h6>
                <p className="text-white-50 small mb-3">Click the button to test interactive functionality</p>
                
                <button 
                  onClick={() => setCount(count + 1)}
                  className="btn btn-primary btn-lg px-4 py-3 fw-bold mb-3"
                >
                  <i className="fas fa-mouse-pointer me-2"></i>
                  Count: <span className="badge bg-white text-dark ms-2">{count}</span>
                </button>
                
                <div>
                  <p className="text-white-50 small mb-0">
                    <i className="fas fa-info-circle me-1"></i>
                    This demonstrates real-time state management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Centered Info - REMOVED to reduce space */}
        {/* <div className="row justify-content-center text-center mt-4">
          <div className="col-lg-8">
            <div className="border-top border-white border-opacity-10 pt-3">
              <p className="text-white-50 mb-0">
                <i className="fas fa-star text-warning me-1"></i>
                Trusted by professional traders worldwide • 30-day money-back guarantee • 24/7 customer support
              </p>
            </div>
          </div>
        </div> */}
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .card {
          border-radius: 0.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2) !important;
        }
        
        .btn-lg {
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.3);
        }
        
        .btn-outline-light:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
        }
        
        .bg-black {
          background-color: #000000 !important;
        }
        
        .bg-opacity-10 {
          background-color: rgba(13, 110, 253, 0.1) !important;
        }
        
        .border-opacity-10 {
          border-color: rgba(255, 255, 255, 0.1) !important;
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
        
        /* Feature card hover effect */
        .d-flex.flex-column.align-items-center:hover .bg-primary.bg-opacity-10 {
          background-color: rgba(13, 110, 253, 0.2) !important;
          transform: scale(1.1);
          transition: all 0.3s ease;
        }
        
        /* Smooth transitions */
        .bg-primary.bg-opacity-10,
        .btn,
        .card {
          transition: all 0.3s ease;
        }
        
        /* Remove extra bottom margin */
        .mb-0 {
          margin-bottom: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default IntroSection;