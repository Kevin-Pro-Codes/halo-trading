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

        {/* Quick Links */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <h4 className="fw-bold mb-4 text-center">Quick Access</h4>
            <div className="row g-3">
              {quickLinks.map((link, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-2">
                  <a href={link.link} className="text-decoration-none">
                    <div className={`card border-0 shadow-sm h-100 transition ${link.popular ? 'border-primary border-2' : ''}`}>
                      <div className="card-body p-3 text-center">
                        <div className={`bg-${link.popular ? 'primary' : 'light'} bg-opacity-10 p-2 rounded-circle d-inline-block mb-2`}>
                          <i className={`bi ${link.icon} text-${link.popular ? 'primary' : 'dark'} fs-5`}></i>
                        </div>
                        <div className="fw-bold small">{link.title}</div>
                        {link.popular && (
                          <span className="badge bg-primary bg-opacity-10 text-primary small mt-1">Popular</span>
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
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

       {/* Featured Guides - IMPROVED responsive layout */}
<div className="row justify-content-center mb-5">
  <div className="col-lg-10">
    <div className="card border-primary bg-primary bg-opacity-5">
      <div className="card-body p-4 p-md-5">
        <div className="d-flex align-items-center mb-4">
          <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
            <i className="bi bi-star-fill text-primary fs-4"></i>
          </div>
          <div>
            <h4 className="fw-bold mb-1">Featured Guides</h4>
            <p className="text-muted mb-0">Most popular and highly recommended tutorials</p>
          </div>
        </div>
        
        {/* Responsive grid: 1 on small, 2 on md, 3 on lg+ */}
        <div className="row g-4">
          {featuredGuides.map((guide, index) => (
            <div 
              key={index} 
              className="col-12 col-md-6 col-lg-4"  // This is the key fix!
            >
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <span className={`badge ${
                      guide.difficulty === 'Beginner' ? 'bg-success' :
                      guide.difficulty === 'Intermediate' ? 'bg-warning' : 'bg-danger'
                    } bg-opacity-10 text-${
                      guide.difficulty === 'Beginner' ? 'success' :
                      guide.difficulty === 'Intermediate' ? 'warning' : 'danger'
                    }`}>
                      {guide.difficulty}
                    </span>
                    <small className="text-muted">
                      <i className="bi bi-eye me-1"></i>
                      {guide.views}
                    </small>
                  </div>
                  
                  <h5 className="fw-bold mb-3">{guide.title}</h5>
                  <p className="text-muted small mb-4 flex-grow-1">{guide.description}</p>
                  
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <small className="text-muted">
                          <i className="bi bi-clock me-1"></i>
                          {guide.time}
                        </small>
                      </div>
                      <small className="text-muted">
                        Updated: {guide.updated}
                      </small>
                    </div>
                    <button className="btn btn-outline-primary w-100">
                      Start Reading
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

        {/* API Reference & SDKs */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <h4 className="fw-bold mb-4 text-center">Developer Resources</h4>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 text-center d-flex flex-column">
                    <div className="bg-info bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                      <i className="bi bi-code-slash text-info fs-3"></i>
                    </div>
                    <h5 className="fw-bold mb-2">REST API</h5>
                    <p className="text-muted small mb-4 flex-grow-1">Complete REST API reference with examples</p>
                    <button className="btn btn-outline-info w-100">
                      <i className="bi bi-github me-2"></i>
                      View API Docs
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 text-center d-flex flex-column">
                    <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                      <i className="bi bi-gear text-success fs-3"></i>
                    </div>
                    <h5 className="fw-bold mb-2">SDK Library</h5>
                    <p className="text-muted small mb-4 flex-grow-1">Official SDKs for Python, JavaScript, and more</p>
                    <button className="btn btn-outline-success w-100">
                      <i className="bi bi-download me-2"></i>
                      Download SDK
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 text-center d-flex flex-column">
                    <div className="bg-warning bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                      <i className="bi bi-terminal text-warning fs-3"></i>
                    </div>
                    <h5 className="fw-bold mb-2">CLI Tools</h5>
                    <p className="text-muted small mb-4 flex-grow-1">Command-line interface for advanced users</p>
                    <button className="btn btn-outline-warning w-100">
                      <i className="bi bi-terminal me-2"></i>
                      Get CLI Tools
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support CTA */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-primary">
              <div className="card-body p-4 p-md-5 text-center">
                <h3 className="fw-bold mb-3">Need Help?</h3>
                <p className="text-muted mb-4">
                  Can't find what you're looking for? Our support team is ready to help.
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                  <button className="btn btn-primary btn-lg px-4">
                    <i className="bi bi-chat-dots me-2"></i>
                    Contact Support
                  </button>
                  <button className="btn btn-outline-primary btn-lg px-4">
                    <i className="bi bi-people me-2"></i>
                    Join Community
                  </button>
                </div>
                <div className="mt-4">
                  <small className="text-muted">
                    <i className="bi bi-clock me-1"></i>
                    Average response time: 15 minutes
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocSection;