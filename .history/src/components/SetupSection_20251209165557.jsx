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

        {/* Setup Steps - ALL CARDS SAME HEIGHT & ALIGNMENT */}
        <div className="mb-5">
          <h4 className="text-center mb-4">Setup Steps</h4>
          
          {/* 3x3 Grid - All cards equal height */}
          <div className="row g-4">
            {setupSteps.map((step) => (
              <div key={step.id} className="col-md-4">
                <div className="card border-secondary bg-dark h-100 d-flex flex-column">
                  <div className="card-body p-4 d-flex flex-column">
                    {/* Top section - Icon and title */}
                    <div className="d-flex align-items-center mb-3">
                      <div className={`bg-${step.color} bg-opacity-10 p-3 rounded-circle me-3 flex-shrink-0`}>
                        <i className={`bi ${step.icon} text-${step.color} fs-4`}></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-1">{step.title}</h5>
                        <div className="text-white-50 small">
                          <i className="bi bi-clock me-1"></i>
                          {step.time}
                        </div>
                      </div>
                    </div>
                    
                    {/* Middle section - Description */}
                    <p className="text-white-50 mb-4 flex-grow-1">{step.description}</p>
                    
                    {/* Bottom section - Details */}
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap gap-2">
                        {step.details.map((detail, idx) => (
                          <span key={idx} className="badge bg-dark border border-secondary small">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start Tips - Perfectly aligned 2x2 Grid */}
        <div className="mb-5">
          <div className="card border-warning bg-warning bg-opacity-5">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4 text-center">Quick Start Tips</h4>
              <div className="row g-3">
                {quickStartTips.map((tip, index) => (
                  <div key={index} className="col-md-6">
                    <div className="bg-dark bg-opacity-25 p-3 rounded h-100">
                      <div className="d-flex align-items-center h-100">
                        <i className="bi bi-check-circle-fill text-success me-2 fs-5 flex-shrink-0"></i>
                        <span className="flex-grow-1">{tip}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Setup Help - Perfect 4x4 Grid */}
        <div>
          <h4 className="text-center mb-4">Setup Resources</h4>
          <div className="row g-4">
            {[
              {icon: "bi-play-btn", color: "primary", label: "Video Guide"},
              {icon: "bi-file-text", color: "success", label: "Documentation"},
              {icon: "bi-headset", color: "warning", label: "Live Support"},
              {icon: "bi-people", color: "info", label: "Community"}
            ].map((item, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="card border-dark bg-dark h-100">
                  <div className="card-body p-4 text-center d-flex flex-column align-items-center justify-content-center">
                    <div className={`bg-${item.color} bg-opacity-10 p-3 rounded-circle mb-3`}>
                      <i className={`bi ${item.icon} text-${item.color} fs-3`}></i>
                    </div>
                    <div className="fw-bold">{item.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupSection;