import React from "react";

const SetupSection = () => {
  const setupSteps = [
    {
      id: 1,
      title: "Install MetaTrader 5",
      description: "Download and install the latest MT5 platform on your computer or VPS.",
      icon: "bi-download",
      color: "primary",
      time: "5 min",
      details: ["Download MT5", "Complete installation", "Platform setup"]
    },
    {
      id: 2,
      title: "Install Expert Advisor",
      description: "Add our MQL5 Expert Advisor to your MT5 platform for automated trading.",
      icon: "bi-code-slash",
      color: "success",
      time: "3 min",
      details: ["Copy EA files", "Install in Experts folder", "Refresh platform"]
    },
    {
      id: 3,
      title: "Configure Account",
      description: "Set up your MT5 trading account or connect existing broker account.",
      icon: "bi-person-circle",
      color: "warning",
      time: "10 min",
      details: ["Create account", "Connect broker", "Fund account"]
    },
    {
      id: 4,
      title: "EA Configuration",
      description: "Configure Expert Advisor settings, risk parameters, and trading pairs.",
      icon: "bi-gear",
      color: "danger",
      time: "8 min",
      details: ["Set risk levels", "Choose currency pairs", "Configure strategies"]
    },
    {
      id: 5,
      title: "Backtesting",
      description: "Test the Expert Advisor with historical data using MT5 Strategy Tester.",
      icon: "bi-speedometer2",
      color: "info",
      time: "15 min",
      details: ["Run backtest", "Optimize parameters", "Analyze results"]
    },
    {
      id: 6,
      title: "Start Live Trading",
      description: "Activate the Expert Advisor on your MT5 platform for live trading.",
      icon: "bi-play-circle",
      color: "purple",
      time: "1 min",
      details: ["Enable auto-trading", "Monitor performance", "Set up alerts"]
    }
  ];

  const quickStartTips = [
    "Run Strategy Tester before live trading",
    "Start with demo account first",
    "Use recommended risk settings initially",
    "Keep MT5 platform running 24/7"
  ];

  const systemRequirements = [
    { requirement: "MT5 Platform Version", value: "Build 1500+" },
    { requirement: "RAM", value: "4GB minimum" },
    { requirement: "Storage", value: "2GB free space" },
    { requirement: "Operating System", value: "Windows 8/10/11" },
    { requirement: "Internet Speed", value: "10 Mbps minimum" },
    { requirement: "VPS Recommended", value: "24/7 uptime" }
  ];

  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                <i className="bi bi-meta text-primary fs-3"></i>
              </div>
              <h2 className="display-5 fw-bold mb-0">MQL5 Expert Advisor Setup</h2>
            </div>
            <p className="lead text-white-50 mb-4">
              Get your MT5 trading bot running in under 45 minutes with our step-by-step guide
            </p>
          </div>
        </div>

        {/* Setup Progress */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="bg-gradient-primary border border-primary rounded-3 p-4">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h4 className="fw-bold mb-2">
                    <i className="bi bi-robot me-2"></i>
                    Complete Your MQL5 Setup
                  </h4>
                  <p className="text-white-50 mb-3">Follow these 6 steps to start automated trading on MT5</p>
                  
                  {/* Progress Bar */}
                  <div className="progress mb-3" style={{height: '10px'}}>
                    <div 
                      className="progress-bar bg-success" 
                      role="progressbar" 
                      style={{width: '16.6%'}}
                      aria-valuenow="16.6" 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    ></div>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <i className="bi bi-clock text-white-50 me-2"></i>
                    <small className="text-white-50">
                      Average setup time: 42 minutes • 
                      <span className="text-success ms-2">
                        <i className="bi bi-check-circle me-1"></i>
                        MT5 Platform Required
                      </span>
                    </small>
                  </div>
                </div>
                <div className="col-md-4 text-md-end">
                  <button className="btn btn-light btn-lg fw-bold">
                    <i className="bi bi-download me-2"></i>
                    Download EA Files
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Setup Steps - Fixed */}
<div className="row justify-content-center mb-5">
  <div className="col-lg-10">
    <div className="row g-4">
      {setupSteps.map((step, index) => (
        <div key={step.id} className="col-md-6 col-lg-4">
          <div className="border border-secondary rounded-3 h-100 d-flex flex-column p-4 bg-gradient-dark hover-lift">
            {/* Step Header */}
            <div className="d-flex align-items-start mb-3">
              <div className={`bg-${step.color} bg-opacity-10 p-3 rounded-circle me-3 flex-shrink-0`}>
                <i className={`bi ${step.icon} text-${step.color} fs-4`}></i>
              </div>
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-start mb-1">
                  <h5 className="fw-bold mb-0 text-white">{step.title}</h5>
                  <span className={`badge bg-${step.color} bg-opacity-25 text-${step.color} border border-${step.color} border-opacity-25`}>
                    Step {step.id}
                  </span>
                </div>
                
                {/* Fixed: White minutes with better styling */}
                <div className="d-flex align-items-center mt-2">
                  <div className="d-flex align-items-center bg-dark bg-opacity-50 px-2 py-1 rounded-md border border-secondary">
                    <i className="bi bi-clock text-white" style={{fontSize: '0.8rem'}}></i>
                    <small className="text-white fw-medium">{step.time}</small>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step Description */}
            <p className="text-white-50 mb-3 flex-grow-1">{step.description}</p>
            
            {/* Details */}
            <div className="mb-4">
              <small className="text-white-50 mb-2 d-block">Includes:</small>
              <div className="d-flex flex-wrap gap-2">
                {step.details.map((detail, idx) => (
                  <span key={idx} className="badge bg-dark border border-secondary text-white-50 small px-2 py-1">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Optional: Add completion status or progress indicator */}
            <div className="mt-auto pt-3 border-top border-secondary border-opacity-25">
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-white-50">Ready to begin</small>
                <div className="d-flex align-items-center">
                  <div className="progress flex-grow-1 me-2" style={{height: '4px', width: '60px'}}>
                    <div 
                      className="progress-bar bg-success" 
                      role="progressbar" 
                      style={{width: '0%'}}
                    ></div>
                  </div>
                  <small className="text-success fw-medium">0%</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        {/* System Requirements & Support */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="row g-4">
              {/* System Requirements */}
              <div className="col-md-6">
                <div className="border border-info rounded-3 h-100 d-flex flex-column p-4 bg-gradient-dark">
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-info bg-opacity-10 p-2 rounded-circle me-3">
                        <i className="bi bi-pc-display text-info fs-4"></i>
                      </div>
                      <h5 className="fw-bold mb-0">System Requirements</h5>
                    </div>
                    <p className="text-white-50 small mb-0">
                      Minimum specifications for optimal Expert Advisor performance
                    </p>
                  </div>
                  
                  {/* Requirements List */}
                  <div className="mb-4">
                    {systemRequirements.map((req, index) => (
                      <div key={index} className="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary">
                        <span className="text-white-50">{req.requirement}</span>
                        <span className="fw-bold text-white">{req.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <div className="alert alert-info bg-info bg-opacity-10 border-info border-opacity-25 mb-3">
                      <i className="bi bi-lightbulb me-2"></i>
                      <small>For 24/7 trading, we recommend using a Windows VPS</small>
                    </div>
                    <button className="btn btn-outline-info w-100">
                      <i className="bi bi-server me-2"></i>
                      Get Recommended VPS
                    </button>
                  </div>
                </div>
              </div>

              {/* Support Help */}
              <div className="col-md-6">
                <div className="border border-success rounded-3 h-100 d-flex flex-column p-4 bg-gradient-dark">
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                        <i className="bi bi-headset text-success fs-4"></i>
                      </div>
                      <h5 className="fw-bold mb-0">MQL5 Support</h5>
                    </div>
                    <p className="text-white-50 small mb-0">
                      Get help with MT5 platform and Expert Advisor setup
                    </p>
                  </div>
                  
                  {/* Support Options */}
                  <div className="mb-4 flex-grow-1">
                    <div className="row g-3">
                      <div className="col-6">
                        <div className="border border-success rounded-2 p-3 text-center h-100">
                          <i className="bi bi-chat-dots text-success fs-3 mb-2 d-block"></i>
                          <div className="fw-bold small mb-1">Live Chat</div>
                          <small className="text-white-50">MT5 Experts Online</small>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="border border-primary rounded-2 p-3 text-center h-100">
                          <i className="bi bi-file-earmark-text text-primary fs-3 mb-2 d-block"></i>
                          <div className="fw-bold small mb-1">MQL5 Docs</div>
                          <small className="text-white-50">Complete Guides</small>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="border border-warning rounded-2 p-3 text-center h-100">
                          <i className="bi bi-camera-video text-warning fs-3 mb-2 d-block"></i>
                          <div className="fw-bold small mb-1">Video Tutorials</div>
                          <small className="text-white-50">Step-by-Step</small>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="border border-info rounded-2 p-3 text-center h-100">
                          <i className="bi bi-people text-info fs-3 mb-2 d-block"></i>
                          <div className="fw-bold small mb-1">Community</div>
                          <small className="text-white-50">MQL5 Forum</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn btn-success w-100">
                    <i className="bi bi-question-circle me-2"></i>
                    Get MQL5 Setup Help
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start Tips */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="border border-warning rounded-3 p-4 bg-gradient-dark">
              <div className="row align-items-center mb-4">
                <div className="col-md-8">
                  <div className="d-flex align-items-center">
                    <div className="bg-warning bg-opacity-10 p-2 rounded-circle me-3">
                      <i className="bi bi-lightbulb text-warning fs-3"></i>
                    </div>
                    <div>
                      <h4 className="fw-bold mb-1">MQL5 Setup Tips</h4>
                      <p className="text-white-50 mb-0">Expert recommendations for smooth installation</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-md-end">
                  <button className="btn btn-outline-warning">
                    <i className="bi bi-download me-2"></i>
                    Download Checklist
                  </button>
                </div>
              </div>
              
              <div className="row g-3">
                {quickStartTips.map((tip, index) => (
                  <div key={index} className="col-md-6">
                    <div className="border border-warning border-opacity-25 rounded-2 p-3 bg-warning bg-opacity-5">
                      <div className="d-flex align-items-center">
                        <div className="bg-warning bg-opacity-10 p-1 rounded-circle me-3">
                          <i className="bi bi-check-circle text-warning"></i>
                        </div>
                        <span className="text-white">{tip}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* MT5 Platform Links */}
              <div className="mt-4 pt-3 border-top border-secondary">
                <div className="row g-3">
                  <div className="col-md-4">
                    <a href="#" className="btn btn-outline-primary w-100">
                      <i className="bi bi-meta me-2"></i>
                      Download MT5
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="#" className="btn btn-outline-success w-100">
                      <i className="bi bi-code-slash me-2"></i>
                      Get EA Files
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="#" className="btn btn-outline-info w-100">
                      <i className="bi bi-youtube me-2"></i>
                      Watch Setup Videos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .bg-gradient-dark {
          background: linear-gradient(180deg, #1a1a1a 0%, #000000 100%);
        }
        
        .bg-gradient-primary {
          background: linear-gradient(135deg, rgba(13, 110, 253, 0.1) 0%, rgba(13, 110, 253, 0.05) 100%);
          border: 1px solid rgba(13, 110, 253, 0.3) !important;
        }
        
        .bg-dark {
          background-color: #000000 !important;
        }
        
        .text-white-50 {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        
        .border-secondary {
          border-color: #2d3748 !important;
        }
        
        .bg-opacity-5 {
          background-color: rgba(255, 255, 255, 0.05) !important;
        }
        
        .bg-opacity-10 {
          background-color: rgba(13, 110, 253, 0.1) !important;
        }
        
        .bg-opacity-25 {
          background-color: rgba(13, 110, 253, 0.25) !important;
        }
        
        .border-opacity-25 {
          border-color: rgba(255, 255, 255, 0.25) !important;
        }
        
        /* Card hover effects */
        .bg-gradient-dark {
          transition: all 0.3s ease;
        }
        
        .bg-gradient-dark:hover {
          border-color: rgba(13, 110, 253, 0.5) !important;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .display-5 {
            font-size: 2rem !important;
          }
          
          .btn-lg {
            padding: 0.5rem 1rem !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SetupSection;