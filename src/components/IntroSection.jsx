import React from 'react';

const IntroSection = () => {
  const stats = [
    { 
      value: "100+", 
      label: "Expert Advisors", 
      icon: "fas fa-robot", 
      color: "primary",
      description: "Ready-to-use MQL5 trading bots"
    },
    { 
      value: "50+", 
      label: "Custom Indicators", 
      icon: "fas fa-chart-bar", 
      color: "success",
      description: "MQL5 technical indicators"
    },
    { 
      value: "0.2s", 
      label: "MT5 Execution", 
      icon: "fas fa-bolt", 
      color: "warning",
      description: "Average trade execution speed"
    },
    { 
      value: "10k+", 
      label: "MQL5 Developers", 
      icon: "fas fa-code", 
      color: "info",
      description: "Active platform users"
    }
  ];

  const features = [
    { 
      icon: "fas fa-code", 
      title: "MQL5 Framework", 
      description: "Comprehensive Expert Advisor development framework with full MQL5 API support"
    },
    { 
      icon: "fas fa-vial", 
      title: "Advanced Backtesting", 
      description: "MetaTrader 5 Strategy Tester integration with genetic optimization"
    },
    { 
      icon: "fas fa-sync-alt", 
      title: "Signal Copying", 
      description: "Copy trades from successful MQL5 strategies and signal providers"
    },
    { 
      icon: "fas fa-shield-alt", 
      title: "Risk Management", 
      description: "Built-in position sizing, stop-loss, and money management modules"
    }
  ];

  const mql5Highlights = [
    "✓ Full MQL5 API Support",
    "✓ MetaTrader 5 Integration",
    "✓ Strategy Tester Compatible",
    "✓ Real-time Market Data",
    "✓ Automated Order Execution",
    "✓ Custom Indicator Support"
  ];

  return (
    <section className="bg-black text-white overflow-hidden py-5">
      <div className="container py-0">
        {/* Header with MQL5 focus */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-10">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <i className="fas fa-meta text-primary fs-1 me-3"></i>
              <div>
                <h1 className="display-5 fw-bold mb-2 text-white">
                  MQL5 Trading Bot
                  <span className="text-primary"> Platform</span>
                </h1>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
                    <i className="fas fa-robot me-2"></i>
                    Expert Advisor Framework
                  </span>
                  <span className="badge bg-success bg-opacity-25 text-success px-3 py-2">
                    <i className="fas fa-chart-line me-2"></i>
                    MetaTrader 5 Integration
                  </span>
                  <span className="badge bg-warning bg-opacity-25 text-warning px-3 py-2">
                    <i className="fas fa-vial me-2"></i>
                    Advanced Backtesting
                  </span>
                </div>
              </div>
            </div>
            
            <p className="lead text-white-50 mb-4">
              Build, test, and deploy sophisticated trading bots using MQL5 with our comprehensive framework. 
              Create Expert Advisors that integrate seamlessly with MetaTrader 5 platform.
            </p>
          </div>
        </div>

        {/* MQL5 Stats with descriptions */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-12">
            <div className="row g-3 justify-content-center">
              {stats.map((stat, index) => (
                <div key={index} className="col-6 col-md-3">
                  <div className="p-3 border border-secondary rounded-3 bg-gradient-to-bottom"
                    style={{
                      background: 'linear-gradient(180deg, #1a1a1a 0%, #000 100%)'
                    }}>
                    <div className={`display-6 fw-bold text-${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-2">
                      <i className={`${stat.icon} text-${stat.color} me-2`}></i>
                      <div className="text-white fw-bold">{stat.label}</div>
                    </div>
                    <div className="text-white-50 small">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MQL5 Platform Features */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-10">
            <h3 className="fw-bold text-white mb-4">
              <i className="fas fa-cogs text-primary me-2"></i>
              MQL5 Platform Features
            </h3>
            <div className="row g-3">
              {features.map((feature, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="border border-secondary rounded-3 p-3 h-100 bg-gradient-to-bottom"
                    style={{
                      background: 'linear-gradient(180deg, #1a1a1a 0%, #000 100%)'
                    }}>
                    <div className="bg-primary bg-opacity-10 p-2 rounded-circle d-inline-flex mb-3">
                      <i className={`${feature.icon} text-primary fs-4`}></i>
                    </div>
                    <h5 className="fw-bold text-white mb-2">{feature.title}</h5>
                    <p className="text-white-50 small mb-0">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MQL5 Technical Highlights */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <div className="border border-secondary rounded-3 p-4 bg-gradient-to-bottom"
              style={{
                background: 'linear-gradient(180deg, #1a1a1a 0%, #000 100%)'
              }}>
              <h4 className="fw-bold text-white mb-3">
                <i className="fas fa-check-circle text-success me-2"></i>
                MQL5 Platform Capabilities
              </h4>
              <div className="row">
                {mql5Highlights.map((highlight, index) => (
                  <div key={index} className="col-md-6 mb-2">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-check text-success me-2"></i>
                      <span className="text-white-50">{highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons - MQL5 Focused */}
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <button className="btn btn-primary btn-lg px-4 py-3 fw-bold d-flex align-items-center justify-content-center">
                <i className="fas fa-download me-3"></i>
                <div className="text-start">
                  <div>Download MQL5 Documentation</div>
                  <small className="opacity-75">Start building Expert Advisors</small>
                </div>
              </button>
              <button className="btn btn-outline-light btn-lg px-4 py-3 fw-bold d-flex align-items-center justify-content-center">
                <i className="fas fa-play-circle me-3"></i>
                <div className="text-start">
                  <div>View MQL5 Tutorials</div>
                  <small className="opacity-75">Learn Expert Advisor development</small>
                </div>
              </button>
            </div>
            
            {/* Quick links */}
            <div className="mt-4 d-flex flex-wrap justify-content-center gap-2">
              <a href="#" className="text-white-50 small text-decoration-none me-3">
                <i className="fas fa-book me-1"></i>
                MQL5 Documentation
              </a>
              <a href="#" className="text-white-50 small text-decoration-none me-3">
                <i className="fas fa-code me-1"></i>
                API Reference
              </a>
              <a href="#" className="text-white-50 small text-decoration-none">
                <i className="fas fa-users me-1"></i>
                Developer Community
              </a>
            </div>
          </div>
        </div>

        {/* MetaTrader 5 Compatibility Badge */}
        <div className="row justify-content-center mt-4">
          <div className="col-lg-6 text-center">
            <div className="border border-primary border-opacity-25 rounded-3 p-3 d-inline-block">
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-meta text-primary fs-2 me-3"></i>
                <div>
                  <div className="text-white fw-bold">MetaTrader 5 Compatible</div>
                  <div className="text-white-50 small">Seamless integration with MT5 platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .bg-black {
          background-color: #000000 !important;
        }
        
        .bg-gradient-to-bottom {
          background: linear-gradient(180deg, #1a1a1a 0%, #000 100%);
        }
        
        .border-secondary {
          border-color: #2d3748 !important;
        }
        
        .border-primary {
          border-color: #0d6efd !important;
        }
        
        .bg-opacity-10 {
          background-color: rgba(13, 110, 253, 0.1) !important;
        }
        
        .border-opacity-25 {
          border-color: rgba(13, 110, 253, 0.25) !important;
        }
        
        /* Enhanced card hover effects */
        [class*="bg-gradient-to-bottom"] {
          transition: all 0.3s ease;
        }
        
        [class*="bg-gradient-to-bottom"]:hover {
          transform: translateY(-5px);
          border-color: #0d6efd !important;
          box-shadow: 0 10px 25px rgba(13, 110, 253, 0.15);
        }
        
        /* Button animations */
        .btn-primary {
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
          border: none;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(13, 110, 253, 0.3);
          background: linear-gradient(135deg, #0a58ca 0%, #084298 100%);
        }
        
        .btn-outline-light:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.1);
        }
        
        /* Feature icon animation */
        .bg-primary.bg-opacity-10 {
          transition: all 0.3s ease;
        }
        
        [class*="bg-gradient-to-bottom"]:hover .bg-primary.bg-opacity-10 {
          transform: rotate(10deg) scale(1.1);
          background-color: rgba(13, 110, 253, 0.2) !important;
        }
        
        /* Meta icon animation */
        .fa-meta {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .display-5 {
            font-size: 2rem !important;
          }
          
          .btn-lg {
            width: 100%;
            margin-bottom: 0.5rem;
          }
          
          .d-flex.flex-md-row {
            flex-direction: column !important;
          }
        }
        
        @media (max-width: 576px) {
          .display-5 {
            font-size: 1.75rem !important;
          }
          
          .lead {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default IntroSection;