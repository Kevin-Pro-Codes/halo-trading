import React from 'react';

const DocSection = () => {
  const documentationCategories = [
    {
      id: 1,
      title: "Getting Started",
      icon: "bi-rocket-takeoff",
      color: "primary",
      items: [
        { title: "Quick Start Guide", description: "5-minute setup tutorial", time: "10 min read", format: "Guide" },
        { title: "Platform Overview", description: "Complete tour of features", time: "15 min read", format: "Tutorial" },
        { title: "Account Setup", description: "Create and verify your account", time: "8 min read", format: "Setup" }
      ]
    },
    {
      id: 2,
      title: "API Integration",
      icon: "bi-plug",
      color: "success",
      items: [
        { title: "Exchange API Setup", description: "Connect to 50+ exchanges", time: "20 min read", format: "API" },
        { title: "Webhooks Guide", description: "Real-time event handling", time: "15 min read", format: "Webhooks" },
        { title: "REST API Reference", description: "Complete API documentation", time: "30 min read", format: "Reference" }
      ]
    },
    {
      id: 3,
      title: "Trading Strategies",
      icon: "bi-lightning-charge",
      color: "warning",
      items: [
        { title: "Strategy Builder", description: "Create custom strategies", time: "25 min read", format: "Builder" },
        { title: "Backtesting Guide", description: "Test strategies historically", time: "18 min read", format: "Testing" },
        { title: "Strategy Marketplace", description: "Explore community strategies", time: "12 min read", format: "Marketplace" }
      ]
    },
    {
      id: 4,
      title: "Security & Safety",
      icon: "bi-shield-check",
      color: "info",
      items: [
        { title: "Security Best Practices", description: "Keep your funds safe", time: "15 min read", format: "Security" },
        { title: "API Key Management", description: "Secure API configuration", time: "10 min read", format: "Setup" },
        { title: "2FA Setup Guide", description: "Enable two-factor auth", time: "8 min read", format: "Security" }
      ]
    }
  ];

  const quickLinks = [
    { title: "API Reference", icon: "bi-code-slash", link: "#", popular: true },
    { title: "Video Tutorials", icon: "bi-play-circle", link: "#", popular: true },
    { title: "FAQ", icon: "bi-question-circle", link: "#" },
    { title: "Release Notes", icon: "bi-journal-text", link: "#" },
    { title: "Community Forum", icon: "bi-people", link: "#" },
    { title: "Support Center", icon: "bi-headset", link: "#" }
  ];

  const featuredGuides = [
    {
      title: "Complete Trading Bot Setup",
      description: "Step-by-step guide to configure your first trading bot",
      difficulty: "Beginner",
      time: "25 minutes",
      updated: "2 days ago",
      views: "1.2k"
    },
    {
      title: "Advanced AI Strategy Configuration",
      description: "Learn to optimize AI parameters for maximum profit",
      difficulty: "Advanced",
      time: "45 minutes",
      updated: "1 week ago",
      views: "845"
    },
    {
      title: "Multi-Exchange Arbitrage Setup",
      description: "Configure automated arbitrage across multiple exchanges",
      difficulty: "Intermediate",
      time: "35 minutes",
      updated: "3 days ago",
      views: "2.1k"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                <i className="bi bi-journal-text text-primary fs-3"></i>
              </div>
              <h2 className="display-5 fw-bold mb-0">Kdroid Documentation</h2>
            </div>
            <p className="lead text-muted mb-4">
              Comprehensive guides, tutorials, and API references to help you master our trading platform
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="row g-3">
              <div className="col-md-3 col-6">
                <div className="text-center p-3 bg-white rounded-3 shadow-sm">
                  <div className="display-6 fw-bold text-primary mb-1">50+</div>
                  <div className="text-muted small">Guides & Tutorials</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center p-3 bg-white rounded-3 shadow-sm">
                  <div className="display-6 fw-bold text-success mb-1">24/7</div>
                  <div className="text-muted small">Support Available</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center p-3 bg-white rounded-3 shadow-sm">
                  <div className="display-6 fw-bold text-warning mb-1">98%</div>
                  <div className="text-muted small">Success Rate</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center p-3 bg-white rounded-3 shadow-sm">
                  <div className="display-6 fw-bold text-info mb-1">10k+</div>
                  <div className="text-muted small">Developers Using</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="input-group input-group-lg shadow-sm">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search documentation (e.g., 'API setup', 'trading strategies', 'troubleshooting')"
              />
              <button className="btn btn-primary">
                Search
              </button>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <small className="text-muted">
                <i className="bi bi-lightbulb me-1"></i>
                Try: "exchange integration" | "strategy backtesting" | "security setup"
              </small>
            </div>
          </div>
        </div>


        {/* Documentation Categories - FIXED to show 4 categories properly */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <h4 className="fw-bold mb-4 text-center">Browse Documentation</h4>
            <div className="row g-4">
              {documentationCategories.map((category) => (
                <div key={category.id} className="col-md-6 col-lg-3">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4 d-flex flex-column">
                      <div className="mb-4">
                        <div className={`bg-${category.color} bg-opacity-10 p-3 rounded-circle d-inline-block mb-3`}>
                          <i className={`bi ${category.icon} text-${category.color} fs-4`}></i>
                        </div>
                        <h5 className="fw-bold mb-2">{category.title}</h5>
                        <p className="text-muted small mb-0">{category.items.length} guides available</p>
                      </div>
                      
                      <div className="mb-4 flex-grow-1">
                        {category.items.map((item, index) => (
                          <div key={index} className="mb-3">
                            <div className="fw-bold small mb-1">{item.title}</div>
                            <div className="text-muted small mb-2">{item.description}</div>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="badge bg-light text-dark small">{item.format}</span>
                              <small className="text-muted">{item.time}</small>
                            </div>
                            {index < category.items.length - 1 && <hr className="my-3" />}
                          </div>
                        ))}
                      </div>
                      
                      <button className="btn btn-outline-primary w-100 mt-auto">
                        <i className="bi bi-arrow-right me-2"></i>
                        View All
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

{/* Featured Guides - Compact without cards */}
<div className="mb-4">
  <div className="text-center mb-3">
    <h3 className="fw-bold h4 mb-1">Featured Guides</h3> {/* Smaller heading */}
    <p className="text-muted small">Most popular tutorials</p> {/* Smaller text */}
  </div>
  
  <div className="row g-2"> {/* Reduced gap */}
    {featuredGuides.map((guide, index) => (
      <div key={index} className="col-md-4">
        <div className="border rounded-2 p-2 bg-white h-100"> {/* No card, just border with p-2 */}
          <div className="d-flex justify-content-between mb-1"> {/* Reduced margin */}
            <span className={`badge ${
              guide.difficulty === 'Beginner' ? 'bg-success' :
              guide.difficulty === 'Intermediate' ? 'bg-warning' : 'bg-danger'
            } badge-sm`}> {/* Added badge-sm if available, or use small class */}
              {guide.difficulty}
            </span>
            <small className="text-muted">
              <i className="bi bi-eye me-1"></i>
              {guide.views}
            </small>
          </div>
          
          <h6 className="fw-bold mb-1">{guide.title}</h6> {/* h6 instead of h5 */}
          <p className="text-muted small mb-2">{guide.description}</p> {/* small class, reduced margin */}
          
          {/* Compact time and button */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-clock text-muted me-1" style={{fontSize: '0.8rem'}}></i> {/* Smaller icon */}
              <small className="text-muted">{guide.time}</small>
            </div>
            <button className="btn btn-primary btn-sm px-2 py-1"> {/* Smaller button */}
              Read
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Developer Resources - Outlined without cards */}
<div className="row justify-content-center mb-4">
  <div className="col-lg-10">
    <h4 className="fw-bold mb-3 text-center h5">Developer Resources</h4> {/* Smaller heading */}
    <div className="row g-3"> {/* Reduced gap */}
      {/* REST API */}
      <div className="col-md-4">
        <div className="border rounded-2 p-3 text-center h-100"> {/* border instead of card */}
          {/* Circle */}
          <div className="border border-info border-2 rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center" 
               style={{width: '70px', height: '70px'}}> {/* Smaller circle, border-2 */}
            <i className="bi bi-code-slash text-info fs-3"></i> {/* Smaller icon */}
          </div>
          
          <h5 className="fw-bold mb-1 h6">REST API</h5> {/* h6 */}
          <p className="text-muted small mb-2"> {/* Reduced margin */}
            Complete REST API reference with examples
          </p>
          
          <button className="btn btn-outline-info btn-sm w-100"> {/* btn-sm */}
            <i className="bi bi-github me-1"></i>
            View API Docs
          </button>
        </div>
      </div>

      {/* SDK Library */}
      <div className="col-md-4">
        <div className="border rounded-2 p-3 text-center h-100">
          <div className="border border-success border-2 rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center"
               style={{width: '70px', height: '70px'}}>
            <i className="bi bi-gear text-success fs-3"></i>
          </div>
          
          <h5 className="fw-bold mb-1 h6">SDK Library</h5>
          <p className="text-muted small mb-2">
            Official SDKs for Python, JavaScript, and more
          </p>
          
          <button className="btn btn-outline-success btn-sm w-100">
            <i className="bi bi-download me-1"></i>
            Download SDK
          </button>
        </div>
      </div>

      {/* CLI Tools */}
      <div className="col-md-4">
        <div className="border rounded-2 p-3 text-center h-100">
          <div className="border border-warning border-2 rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center"
               style={{width: '70px', height: '70px'}}>
            <i className="bi bi-terminal text-warning fs-3"></i>
          </div>
          
          <h5 className="fw-bold mb-1 h6">CLI Tools</h5>
          <p className="text-muted small mb-2">
            Command-line interface for automation
          </p>
          
          <button className="btn btn-outline-warning btn-sm w-100">
            <i className="bi bi-terminal me-1"></i>
            Get CLI Tools
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Support CTA - Outlined without card */}
<div className="row justify-content-center mt-4">
  <div className="col-lg-3">
    <div className="border border-primary border-2 rounded-3 p-3 p-md-4 text-center"> {/* border-2 for thicker outline */}
      <h3 className="fw-bold mb-2 h4">Need Help?</h3> {/* h4 */}
      <p className="text-muted mb-3">
        Can't find what you're looking for? Our support team is ready to help.
      </p>
      <div className="d-flex flex-column flex-md-row justify-content-center gap-2 mb-3"> {/* gap-2, mb-3 */}
        <button className="btn btn-primary px-3 py-2"> {/* Reduced padding */}
          <i className="bi bi-chat-dots me-1"></i>
          Contact Support
        </button>
        <button className="btn btn-outline-primary px-3 py-2">
          <i className="bi bi-people me-1"></i>
          Join Community
        </button>
      </div>
      <div className="mt-3"> {/* Reduced margin */}
        <small className="text-muted">
          <i className="bi bi-clock me-1"></i>
          Average response time: 15 minutes
        </small>
      </div>
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default DocSection;