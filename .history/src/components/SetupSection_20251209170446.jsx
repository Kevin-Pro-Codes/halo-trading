import React from "react";

const SetupSection = () => {
  const setupSteps = [
    {
      id: 1,
      title: "Create Your Account",
      description: "Sign up for a free account in under 2 minutes. No credit card required to start.",
      icon: "bi-person-plus",
      color: "primary",
      time: "2 min",
      details: ["Email verification", "Profile setup", "Two-factor authentication"]
    },
    {
      id: 2,
      title: "Connect Exchange API",
      description: "Securely connect your exchange accounts with read-only API keys for safety.",
      icon: "bi-plug",
      color: "success",
      time: "5 min",
      details: ["Generate API keys", "Set permissions", "Test connection"]
    },
    {
      id: 3,
      title: "Configure Strategy",
      description: "Choose from pre-built strategies or create custom trading algorithms.",
      icon: "bi-gear",
      color: "warning",
      time: "10 min",
      details: ["Select strategy type", "Set parameters", "Backtest performance"]
    },
    {
      id: 4,
      title: "Risk Management",
      description: "Set stop-loss, take-profit, and position sizing to protect your capital.",
      icon: "bi-shield-check",
      color: "danger",
      time: "8 min",
      details: ["Stop-loss levels", "Position sizing", "Daily limits"]
    },
    {
      id: 5,
      title: "Activate & Monitor",
      description: "Launch your bot and monitor performance with real-time analytics.",
      icon: "bi-rocket-takeoff",
      color: "info",
      time: "1 min",
      details: ["Live trading", "Performance dashboards", "Real-time alerts"]
    }
  ];

  const quickStartTips = [
    "Start with paper trading to test strategies",
    "Use conservative risk parameters initially",
    "Monitor performance for first 24 hours",
    "Join our community for strategy tips"
  ];

  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                <i className="bi bi-rocket-takeoff-fill text-primary fs-3"></i>
              </div>
              <h2 className="display-5 fw-bold mb-0">Quick Setup Guide</h2>
            </div>
            <p className="lead text-white-50 mb-4">
              Get your trading bot up and running in under 30 minutes with our step-by-step guide
            </p>
          </div>
        </div>

        {/* Setup Progress */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="bg-dark bg-opacity-50 border border-secondary rounded-3 p-4">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h4 className="fw-bold mb-2">Complete Your Setup</h4>
                  <p className="text-white-50 mb-3">Follow these 5 simple steps to start automated trading</p>
                  
                  {/* Progress Bar */}
                  <div className="progress mb-3" style={{height: '10px'}}>
                    <div 
                      className="progress-bar bg-success" 
                      role="progressbar" 
                      style={{width: '20%'}}
                      aria-valuenow="20" 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    >
                    </div>
                  </div>
                  
                  <small className="text-white-50">
                    <i className="bi bi-clock me-1"></i>
                    Average setup time: 26 minutes
                  </small>
                </div>
                <div className="col-md-4 text-md-end">
                  <button className="btn btn-primary btn-lg">
                    <i className="bi bi-play-circle me-2"></i>
                    Start Setup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Setup Steps - ALIGNED GRID */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="row g-4">
              {setupSteps.map((step, index) => (
                <div key={step.id} className="col-md-4">
                  <div className="card border-secondary bg-dark h-100 d-flex flex-column">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start mb-3">
                        {/* Step Number */}
                        <div className="position-relative me-4">
                          <div className={`bg-${step.color} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center`}
                               style={{width: '60px', height: '60px'}}>
                            <span className="fw-bold fs-4">{step.id}</span>
                          </div>
                          {index < setupSteps.length - 1 && (
                            <div className="position-absolute top-100 start-50 translate-middle-x mt-3">
                              <i className="bi bi-arrow-down text-secondary fs-4"></i>
                            </div>
                          )}
                        </div>
                        
                        {/* Step Content */}
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h5 className="fw-bold mb-0">{step.title}</h5>
                            <span className={`badge bg-${step.color} bg-opacity-10 text-${step.color}`}>
                              <i className="bi bi-clock me-1"></i>
                              {step.time}
                            </span>
                          </div>
                          
                          <p className="text-white-50 mb-3">{step.description}</p>
                          
                          {/* Details */}
                          <div className="d-flex flex-wrap gap-2 mb-3">
                            {step.details.map((detail, idx) => (
                              <span key={idx} className="badge bg-dark border border-secondary small">
                                {detail}
                              </span>
                            ))}
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-outline-primary">
                              <i className={`bi ${step.icon} me-1`}></i>
                              Get Started
                            </button>
                            <button className="btn btn-sm btn-outline-secondary">
                              <i className="bi bi-play-circle me-1"></i>
                              Watch Tutorial
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       {/* Setup Help & Support - HORIZONTALLY FITTED */}
<div className="row justify-content-center mb-5">
  <div className="col-lg-10">
    <div className="row g-4">
      
      {/* Video Tutorial - Fitted horizontally */}
      <div className="col-md-6">
        <div className="card border-primary bg-dark h-100 d-flex flex-column">
          <div className="card-body p-4">
            {/* Compact header */}
            <div className="text-center mb-4">
              <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                <i className="bi bi-play-btn text-primary fs-3"></i>
              </div>
              <h5 className="fw-bold mb-2">Video Tutorial</h5>
              <p className="text-white-50 small mb-0">Watch step-by-step setup</p>
            </div>
            
            {/* Video placeholder - more compact */}
            <div className="bg-dark border border-secondary rounded-2 p-3 mb-3 text-center">
              <i className="bi bi-play-circle text-white-50 fs-2"></i>
              <p className="text-white-50 small mt-2 mb-0">Click to play tutorial</p>
            </div>
            
            <button className="btn btn-outline-primary w-100">
              <i className="bi bi-youtube me-2"></i>
              Watch Full Tutorial
            </button>
          </div>
        </div>
      </div>

      {/* Support Help - Fitted horizontally */}
      <div className="col-md-6">
        <div className="card border-success bg-dark h-100 d-flex flex-column">
          <div className="card-body p-4">
            {/* Compact header */}
            <div className="text-center mb-4">
              <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                <i className="bi bi-headset text-success fs-3"></i>
              </div>
              <h5 className="fw-bold mb-2">Need Help?</h5>
              <p className="text-white-50 small mb-0">Our team is here to assist</p>
            </div>
            
            {/* Support options - more compact */}
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3 p-2 bg-dark bg-opacity-25 rounded">
                <i className="bi bi-chat-dots text-primary me-3 fs-5"></i>
                <div>
                  <div className="fw-bold small">Live Chat</div>
                  <div className="text-white-50 small">Instant assistance</div>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-3 p-2 bg-dark bg-opacity-25 rounded">
                <i className="bi bi-envelope text-success me-3 fs-5"></i>
                <div>
                  <div className="fw-bold small">Email Support</div>
                  <div className="text-white-50 small">24-hour response</div>
                </div>
              </div>
              
              <div className="d-flex align-items-center p-2 bg-dark bg-opacity-25 rounded">
                <i className="bi bi-people text-warning me-3 fs-5"></i>
                <div>
                  <div className="fw-bold small">Community</div>
                  <div className="text-white-50 small">Expert advice</div>
                </div>
              </div>
            </div>
            
            <button className="btn btn-outline-success w-100">
              <i className="bi bi-question-circle me-2"></i>
              Get Setup Help
            </button>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>

              {/* Support Help */}
              <div className="col-md-6">
                <div className="card border-success bg-dark h-100 d-flex flex-column">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                        <i className="bi bi-headset text-success fs-4"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-0">Need Help?</h5>
                        <p className="text-white-50 small mb-0">Our team is here to assist</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-chat-dots text-primary me-3 fs-5"></i>
                        <div>
                          <div className="fw-bold">Live Chat</div>
                          <div className="text-white-50 small">Instant assistance</div>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-envelope text-success me-3 fs-5"></i>
                        <div>
                          <div className="fw-bold">Email Support</div>
                          <div className="text-white-50 small">24-hour response</div>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <i className="bi bi-people text-warning me-3 fs-5"></i>
                        <div>
                          <div className="fw-bold">Community</div>
                          <div className="text-white-50 small">Expert advice</div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="btn btn-outline-success w-100 mt-auto">
                      <i className="bi bi-question-circle me-2"></i>
                      Get Setup Help
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start Tips - MOVED TO BOTTOM & FITTED PROPERLY */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-warning bg-opacity-10 border border-warning rounded-3 p-4">
              <div className="text-center mb-4">
                <div className="bg-warning bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                  <i className="bi bi-lightbulb text-warning fs-3"></i>
                </div>
                <h4 className="fw-bold mb-2">Quick Start Tips</h4>
                <p className="text-white-50 mb-0">Helpful recommendations for getting started</p>
              </div>
              
              <div className="row g-3">
                {quickStartTips.map((tip, index) => (
                  <div key={index} className="col-md-6">
                    <div className="bg-dark bg-opacity-50 p-3 rounded h-100">
                      <div className="d-flex align-items-center h-100">
                        <i className="bi bi-check-circle-fill text-success me-3 fs-5 flex-shrink-0"></i>
                        <span className="text-white-50">{tip}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-4">
                <button className="btn btn-outline-warning">
                  <i className="bi bi-book me-2"></i>
                  View More Tips
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupSection;