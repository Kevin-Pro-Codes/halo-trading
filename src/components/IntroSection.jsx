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
    <section className="bg-black text-white overflow-hidden">
      <div className="container py-5">
        {/* Centered Header */}
        <div className="row justify-content-center text-center mb-5">
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
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-10">
            <div className="row g-4 justify-content-center">
              {stats.map((stat, index) => (
                <div key={index} className="col-6 col-md-3">
                  <div className="p-3">
                    <div className={`display-6 fw-bold text-${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-white-50 small">
                      <i className={`${stat.icon} me-2`}></i>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Features */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-10">
            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-md-6">
                  <div className="d-flex align-items-start p-3 h-100">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3 flex-shrink-0">
                      <i className={`${feature.icon} text-primary fs-5`}></i>
                    </div>
                    <div className="text-start">
                      <h5 className="fw-bold text-white mb-2">{feature.title}</h5>
                      <p className="text-white-50 small mb-0">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centered CTA Buttons */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
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
        </div>

      
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .bg-black {
          background-color: #000000 !important;
        }
        
        .bg-dark {
          background-color: #111111 !important;
        }
        
        .border-primary {
          border-color: #0d6efd !important;
        }
        
        .bg-opacity-10 {
          background-color: rgba(13, 110, 253, 0.1) !important;
        }
        
        .border-opacity-10 {
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
        
        /* Interactive card styling */
        .position-relative .badge {
          position: relative;
          top: -1px;
        }
        
        /* Animation for button click */
        @keyframes gentlePulse {
          0% { transform: scale(1); }
          50% { transform: scale(0.98); }
          100% { transform: scale(1); }
        }
        
        .btn-primary:active {
          animation: gentlePulse 0.2s ease;
        }
        
        /* Hover effects */
        .btn-primary {
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.4);
        }
        
        .btn-outline-light:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.15);
        }
        
        /* Feature items hover */
        .d-flex.align-items-start:hover .bg-primary.bg-opacity-10 {
          background-color: rgba(13, 110, 253, 0.2) !important;
          transform: rotate(5deg);
          transition: all 0.3s ease;
        }
        
        /* Interactive card hover */
        .bg-dark {
          transition: all 0.3s ease;
        }
        
        .bg-dark:hover {
          box-shadow: 0 10px 30px rgba(13, 110, 253, 0.15);
        }
        
        /* Remove any extra spacing */
        section {
          padding-bottom: 1rem !important;
        }
        
        .rounded-3 {
          border-radius: 0.75rem !important;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          .btn-lg {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default IntroSection;