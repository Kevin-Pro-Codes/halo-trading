import React from "react";

const SetupSection = () => {
  const setupSteps = [
    {
      id: 1,
      title: "Create Your Account",
      description: "Sign up for a free account in under 2 minutes.",
      icon: "bi-person-plus",
      color: "primary",
      time: "2 min",
      details: ["Email verification", "Profile setup", "2FA"]
    },
    {
      id: 2,
      title: "Connect Exchange API",
      description: "Securely connect your exchange accounts.",
      icon: "bi-plug",
      color: "success",
      time: "5 min",
      details: ["Generate API keys", "Set permissions", "Test"]
    },
    {
      id: 3,
      title: "Configure Strategy",
      description: "Choose from pre-built trading strategies.",
      icon: "bi-gear",
      color: "warning",
      time: "10 min",
      details: ["Select type", "Set parameters", "Backtest"]
    },
    {
      id: 4,
      title: "Risk Management",
      description: "Set stop-loss and position sizing.",
      icon: "bi-shield-check",
      color: "danger",
      time: "8 min",
      details: ["Stop-loss", "Position sizing", "Limits"]
    },
    {
      id: 5,
      title: "Activate & Monitor",
      description: "Launch and monitor performance.",
      icon: "bi-rocket-takeoff",
      color: "info",
      time: "1 min",
      details: ["Live trading", "Dashboards", "Alerts"]
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
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Quick Setup Guide</h2>
          <p className="text-white-50">Get started in under 30 minutes</p>
        </div>

        {/* Setup Progress */}
        <div className="mb-5">
          <div className="bg-dark bg-opacity-50 border border-secondary rounded-3 p-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="mb-3 mb-md-0">
                <h4 className="fw-bold mb-2">Complete Your Setup</h4>
                <div className="progress" style={{height: '8px', width: '200px'}}>
                  <div className="progress-bar bg-success" style={{width: '20%'}}></div>
                </div>
                <small className="text-white-50">Average time: 26 minutes</small>
              </div>
              <button className="btn btn-primary">
                <i className="bi bi-play-circle me-2"></i>
                Start Setup
              </button>
            </div>
          </div>
        </div>

        {/* Setup Steps - GRID LAYOUT */}
        <div className="mb-5">
          <h4 className="text-center mb-4">Setup Steps</h4>
          
          {/* Option 1: 2x2 Grid (4 items) */}
          <div className="row g-4 mb-4">
            {setupSteps.slice(0, 4).map((step) => (
              <div key={step.id} className="col-md-6">
                <div className="card border-secondary bg-dark h-100">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center mb-3">
                      <div className={`bg-${step.color} bg-opacity-10 p-2 rounded-circle me-3`}>
                        <i className={`bi ${step.icon} text-${step.color}`}></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-0">{step.title}</h5>
                        <small className="text-white-50">{step.time}</small>
                      </div>
                    </div>
                    <p className="text-white-50 small mb-3">{step.description}</p>
                    <div className="d-flex flex-wrap gap-1">
                      {step.details.map((detail, idx) => (
                        <span key={idx} className="badge bg-dark border border-secondary small">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Option 2: 3x3 Grid (show all 5 steps, last row has 2) */}
          <div className="row g-4">
            {setupSteps.map((step) => (
              <div key={step.id} className="col-md-4">
                <div className="card border-secondary bg-dark h-100">
                  <div className="card-body p-3 text-center">
                    <div className={`bg-${step.color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                         style={{width: '50px', height: '50px'}}>
                      <span className="fw-bold">{step.id}</span>
                    </div>
                    <h5 className="fw-bold mb-2">{step.title}</h5>
                    <p className="text-white-50 small mb-3">{step.description}</p>
                    <div className="text-muted small">
                      <i className="bi bi-clock me-1"></i>
                      {step.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start Tips - 2x2 Grid */}
        <div className="mb-5">
          <div className="card border-warning bg-warning bg-opacity-5">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4 text-center">Quick Start Tips</h4>
              <div className="row g-3">
                {quickStartTips.map((tip, index) => (
                  <div key={index} className="col-md-6">
                    <div className="bg-dark bg-opacity-25 p-3 rounded">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>{tip}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Setup Help - 4x4 Grid Example */}
        <div>
          <h4 className="text-center mb-4">Setup Resources</h4>
          <div className="row g-3">
            {/* 4 items in a row on desktop */}
            <div className="col-6 col-md-3">
              <div className="card border-primary bg-dark h-100">
                <div className="card-body p-3 text-center">
                  <i className="bi bi-play-btn text-primary fs-3 mb-2"></i>
                  <div className="fw-bold small">Video Guide</div>
                </div>
              </div>
            </div>
            
            <div className="col-6 col-md-3">
              <div className="card border-success bg-dark h-100">
                <div className="card-body p-3 text-center">
                  <i className="bi bi-file-text text-success fs-3 mb-2"></i>
                  <div className="fw-bold small">Documentation</div>
                </div>
              </div>
            </div>
            
            <div className="col-6 col-md-3">
              <div className="card border-warning bg-dark h-100">
                <div className="card-body p-3 text-center">
                  <i className="bi bi-headset text-warning fs-3 mb-2"></i>
                  <div className="fw-bold small">Live Support</div>
                </div>
              </div>
            </div>
            
            <div className="col-6 col-md-3">
              <div className="card border-info bg-dark h-100">
                <div className="card-body p-3 text-center">
                  <i className="bi bi-people text-info fs-3 mb-2"></i>
                  <div className="fw-bold small">Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupSection;