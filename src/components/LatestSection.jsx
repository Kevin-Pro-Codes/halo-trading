import React from 'react';

const LatestSection = () => {
  const updates = [
    {
      id: 1,
      title: "MQL5 EA Framework 3.0 Released",
      description: "Major update to our Expert Advisor framework with enhanced MQL5 API integration, improved backtesting accuracy, and support for custom indicators. Now includes advanced risk management modules.",
      category: "MQL5 Framework",
      date: "June 2025",
      icon: "bi-code-slash",
      color: "primary",
      badge: "New",
      tags: ["Expert Advisor", "MQL5 API", "Backtesting", "Risk Management"]
    },
    {
      id: 2,
      title: "MT5 Integration Enhanced",
      description: "Upgraded MetaTrader 5 connectivity with faster execution speeds, improved order management, and support for additional timeframe resolutions. Includes new MQL5 signal copying features.",
      category: "MetaTrader 5",
      date: "May 2025",
      icon: "bi-graph-up-arrow",
      color: "success",
      badge: "Enhanced",
      tags: ["MT5", "Order Execution", "Timeframes", "Signals"]
    },
    {
      id: 3,
      title: "Custom Indicators Library",
      description: "Added 50+ pre-built MQL5 custom indicators including advanced oscillator tools, volume profile analysis, and market structure detection algorithms ready for your EAs.",
      category: "Indicators",
      date: "April 2025",
      icon: "bi-bar-chart-line-fill",
      color: "info",
      badge: "Library",
      tags: ["Custom Indicators", "MQL5 Code", "Technical Analysis"]
    },
    {
      id: 4,
      title: "Strategy Tester Optimizations",
      description: "Enhanced MQL5 Strategy Tester integration with genetic optimization algorithms, Monte Carlo simulation support, and comprehensive equity curve analysis tools.",
      category: "Backtesting",
      date: "March 2025",
      icon: "bi-cpu-fill",
      color: "warning",
      badge: "Optimized",
      tags: ["Strategy Tester", "Genetic Optimization", "Monte Carlo"]
    },
    {
      id: 5,
      title: "Webhook & REST API for MQL5",
      description: "New webhook integration allowing MQL5 Expert Advisors to communicate with external services. Includes REST API endpoints for real-time strategy monitoring and control.",
      category: "API Integration",
      date: "February 2025",
      icon: "bi-plug-fill",
      color: "purple",
      badge: "Integration",
      tags: ["Webhooks", "REST API", "External Services", "Monitoring"]
    },
    {
      id: 6,
      title: "MQL5 Code Marketplace",
      description: "Launched marketplace for trading robots, indicators, and scripts. Developers can publish their MQL5 code and traders can download verified Expert Advisors.",
      category: "Marketplace",
      date: "January 2025",
      icon: "bi-cart-check-fill",
      color: "danger",
      badge: "Marketplace",
      tags: ["MQL5 Marketplace", "EA Store", "Verified Code"]
    }
  ];

  const categories = [
    { id: "all", name: "All Updates", icon: "bi-grid", count: updates.length },
    { id: "framework", name: "MQL5 Framework", icon: "bi-code-slash", count: 1 },
    { id: "mt5", name: "MetaTrader 5", icon: "bi-graph-up", count: 1 },
    { id: "indicators", name: "Indicators", icon: "bi-bar-chart-line", count: 1 },
    { id: "backtesting", name: "Backtesting", icon: "bi-cpu", count: 1 },
    { id: "api", name: "API Integration", icon: "bi-plug", count: 1 },
    { id: "marketplace", name: "Marketplace", icon: "bi-cart", count: 1 }
  ];

  return (
    <section className="py-5 bg-dark text-white overflow-hidden">
      <div className="container position-relative">
        {/* Header */}
        <div className="row justify-content-center text-center mb-4 mb-lg-5">
          <div className="col-12 col-lg-8">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                <i className="bi bi-code-square text-primary fs-3"></i>
              </div>
              <h1 className="display-5 fw-bold mb-2 text-white">Platform Updates</h1>
            </div>
            <p className="lead text-white-50 mb-0">
              Latest developments in our MQL5 trading bot platform: Expert Advisors, indicators, MetaTrader 5 integrations, and trading tools
            </p>
          </div>
        </div>

        {/* MQL5 Stats Summary */}
        <div className="row justify-content-center mb-4 mb-lg-5">
          <div className="col-12 col-lg-10">
            <div className="row g-2 g-lg-3">
              {[
                { value: "100+", label: "Expert Advisors", color: "primary", icon: "bi-robot" },
                { value: "50+", label: "Custom Indicators", color: "success", icon: "bi-bar-chart" },
                { value: "3.0", label: "EA Framework", color: "warning", icon: "bi-code-slash" },
                { value: "99.9%", label: "MT5 Uptime", color: "info", icon: "bi-server" }
              ].map((stat, index) => (
                <div key={index} className="col-6 col-md-3">
                  <div className="text-center p-3 bg-dark bg-opacity-50 border border-secondary rounded-3">
                    <div className="mb-2">
                      <i className={`bi ${stat.icon} fs-4 text-${stat.color}`}></i>
                    </div>
                    <div className={`display-6 fw-bold text-${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-white-50 small">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MQL5 Category Filter */}
        <div className="row justify-content-center mb-4 mb-lg-5">
          <div className="col-12 col-lg-10">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="btn btn-outline-light btn-sm d-flex align-items-center"
                  style={{ borderRadius: '50px' }}
                >
                  <i className={`bi ${category.icon} me-2`}></i>
                  {category.name}
                  <span className="badge bg-light text-dark ms-2">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Updates Grid */}
        <div className="row justify-content-center position-relative">
          <div className="col-12 col-lg-10">
            <div className="row g-3 g-lg-4 mb-0">
              {updates.map((update) => (
                <div key={update.id} className="col-12 col-md-6 col-lg-4">
                  <div className="h-100 border border-secondary bg-gradient-to-bottom hover-lift transition-all rounded-3"
                    style={{
                      background: 'linear-gradient(180deg, #1a1a1a 0%, #000 100%)',
                      borderColor: '#2d3748'
                    }}>
                    <div className="p-3 p-lg-4 d-flex flex-column h-100">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="d-flex align-items-center">
                          <div className={`bg-${update.color} bg-opacity-10 p-2 rounded-circle me-3`}>
                            <i className={`bi ${update.icon} text-${update.color} fs-4`}></i>
                          </div>
                          <div>
                            <span className={`badge bg-${update.color} bg-opacity-10 text-${update.color} rounded-pill`}>
                              {update.category}
                            </span>
                            <div className="text-white-50 small mt-1">{update.date}</div>
                          </div>
                        </div>
                        <span className="badge bg-primary bg-opacity-25 text-primary rounded-pill">
                          {update.badge}
                        </span>
                      </div>
                      
                      <h4 className="fw-bold mb-3 text-white fs-5">{update.title}</h4>
                      <p className="text-white-70 mb-4 flex-grow-1">{update.description}</p>
                      
                      <div className="mt-auto">
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {update.tags.map((tag, index) => (
                            <span key={index} className="badge bg-dark border border-secondary text-white-50 small rounded-pill">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-meta text-primary me-2"></i>
                            <span className="text-white-50 small">MQL5 Compatible</span>
                          </div>
                          <button className="btn btn-outline-primary btn-sm d-flex align-items-center">
                            <span className="me-2">View Details</span>
                            <i className="bi bi-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Extended background */}
          <div className="position-absolute start-0 end-0" style={{
            bottom: '-2rem',
            height: '4rem',
            zIndex: -1,
            overflow: 'hidden'
          }}>
            <div className="bg-dark w-100 h-100"></div>
          </div>
        </div>

{/* Trading Ready CTA - Fixed Text Colors */}
<div className="row justify-content-center mt-5">
  <div className="col-12 col-lg-10">
    <div className="border border-success border-2 rounded-3 p-4 p-lg-5 bg-success bg-opacity-5">
      <div className="row align-items-center">
        <div className="col-lg-8 mb-4 mb-lg-0">
          <div className="d-flex align-items-center mb-3">
            <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
              <i className="bi bi-rocket-takeoff text-success fs-2"></i>
            </div>
            <div>
              <h4 className="fw-bold mb-1">Start Trading in Minutes</h4>
              <p className="mb-0">No coding required • Pre-configured strategies • 24/7 automated trading</p>
            </div>
          </div>
          
          <div className="row g-3">
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <small>Quick Setup</small>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <small>Risk Management</small>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <small>Live Support</small>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <small>Mobile App</small>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="d-flex flex-column flex-lg-row gap-3 justify-content-lg-end">
            <button className="btn btn-success btn-lg fw-bold">
              <i className="bi bi-play-circle me-2"></i>
              Start Free Trial
            </button>
            <button className="btn btn-outline-success btn-lg">
              <i className="bi bi-play-btn me-2"></i>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .bg-dark {
          background-color: #0a0a0a !important;
        }
        
        .bg-gradient-to-bottom {
          background: linear-gradient(180deg, #1a1a1a 0%, #000 100%);
        }
        
        .bg-gradient-primary {
          background: linear-gradient(135deg, rgba(13, 110, 253, 0.1) 0%, rgba(13, 110, 253, 0.05) 100%);
          border: 1px solid rgba(13, 110, 253, 0.3) !important;
        }
        
        .text-white-70 {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        
        .text-white-50 {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.3) !important;
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
        
        .border-secondary {
          border-color: #2d3748 !important;
        }
        
        .border-primary {
          border-color: rgba(13, 110, 253, 0.3) !important;
        }
        
        .bg-purple {
          background-color: #6f42c1 !important;
        }
        
        .text-purple {
          color: #6f42c1 !important;
        }
        
        .bg-purple.bg-opacity-10 {
          background-color: rgba(111, 66, 193, 0.1) !important;
        }
        
        /* Mobile-specific adjustments */
        @media (max-width: 768px) {
          .display-6 {
            font-size: 2rem !important;
          }
          
          .btn {
            padding: 0.5rem 1rem !important;
          }
          
          .position-absolute[style*="bottom"] {
            bottom: -1.5rem !important;
            height: 3rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .display-6 {
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

export default LatestSection;