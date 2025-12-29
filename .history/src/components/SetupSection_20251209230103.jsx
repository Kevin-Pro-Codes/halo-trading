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
    },
    // ADDED 6TH CARD
    {
      id: 6,
      title: "Optimize & Scale",
      description: "Fine-tune strategies and scale operations based on performance data.",
      icon: "bi-graph-up-arrow",
      color: "purple",
      time: "15 min",
      details: ["Performance analysis", "Strategy optimization", "Portfolio scaling"]
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
                  <p className="text-white-50 mb-3">Follow these 6 simple steps to start automated trading</p> {/* Updated text */}
                  
                  {/* Progress Bar */}
                  <div className="progress mb-3" style={{height: '10px'}}>
                    <div 
                      className="progress-bar bg-success" 
                      role="progressbar" 
                      style={{width: '16.6%'}} {/* Updated for 6 steps */}
                      aria-valuenow="16.6" 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    >
                    </div>
                  </div>
                  
                  <small className="text-white-50">
                    <i className="bi bi-clock me-1"></i>
                    Average setup time: 41 minutes {/* Updated time estimate */}
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

        {/* Setup Steps - ALIGNED GRID - Updated for 6 cards */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="row g-4">
              {setupSteps.map((step, index) => (
                <div key={step.id} className="col-md-6 col-lg-4"> {/* 3 cards per row on large screens */}
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

        {/* ... rest of the code remains the same ... */}
      </div>
    </section>
  );
};

export default SetupSection;