import React from 'react';

const LatestSection = () => {
  const updates = [
    {
      id: 1,
      title: "Version 3.0 Launched",
      description: "Major platform upgrade with AI-powered trading signals, enhanced backtesting, and multi-exchange arbitrage capabilities.",
      category: "Platform Update",
      date: "June 2025",
      icon: "bi-rocket-takeoff-fill",
      color: "primary",
      badge: "New",
      tags: ["AI", "Performance", "Multi-Exchange"]
    },
    {
      id: 2,
      title: "Enhanced Security Framework",
      description: "Implemented advanced API key encryption, multi-factor authentication, and real-time threat detection systems.",
      category: "Security",
      date: "May 2025",
      icon: "bi-shield-check",
      color: "success",
      badge: "Enhanced",
      tags: ["Security", "Encryption", "2FA"]
    },
    {
      id: 3,
      title: "Mobile App 2.0 Released",
      description: "Redesigned mobile application with real-time notifications, advanced charting, and one-click trade execution.",
      category: "Mobile",
      date: "April 2025",
      icon: "bi-phone-fill",
      color: "info",
      badge: "Update",
      tags: ["Mobile", "iOS", "Android"]
    },
    {
      id: 4,
      title: "Added 5 New Exchanges",
      description: "Extended platform support to include KuCoin, Bybit, Bitfinex, OKX, and Gate.io for broader market access.",
      category: "Integration",
      date: "March 2025",
      icon: "bi-arrow-left-right",
      color: "warning",
      badge: "Expanded",
      tags: ["Exchanges", "Integration", "Markets"]
    },
    {
      id: 5,
      title: "Advanced Analytics Dashboard",
      description: "Introducing comprehensive performance metrics, profit/loss tracking, and customizable reporting tools.",
      category: "Features",
      date: "February 2025",
      icon: "bi-graph-up",
      color: "purple",
      badge: "Feature",
      tags: ["Analytics", "Reports", "Metrics"]
    },
    {
      id: 6,
      title: "Community Integration",
      description: "Launched user community forum and strategy marketplace for sharing and discovering profitable trading strategies.",
      category: "Community",
      date: "January 2025",
      icon: "bi-people-fill",
      color: "danger",
      badge: "Community",
      tags: ["Forum", "Strategies", "Social"]
    }
  ];

  const categories = [
    { id: "all", name: "All Updates", icon: "bi-grid", count: updates.length },
    { id: "platform", name: "Platform", icon: "bi-rocket", count: 1 },
    { id: "security", name: "Security", icon: "bi-shield", count: 1 },
    { id: "mobile", name: "Mobile", icon: "bi-phone", count: 1 },
    { id: "integration", name: "Integration", icon: "bi-arrow-left-right", count: 1 },
    { id: "features", name: "Features", icon: "bi-stars", count: 1 },
    { id: "community", name: "Community", icon: "bi-people", count: 1 }
  ];

  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                <i className="bi bi-megaphone-fill text-primary fs-3"></i>
              </div>
              <h2 className="display-5 fw-bold mb-0 text-white">Latest Updates & News</h2>
            </div>
            <p className="lead text-white-50 mb-4">
              Stay updated with the latest features, improvements, and announcements from our trading platform
            </p>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="row g-3">
              <div className="col-md-3 col-6">
                <div className="text-center p-3 bg-dark bg-opacity-50 border border-secondary rounded-3">
                  <div className="display-6 fw-bold text-primary mb-1">{updates.length}</div>
                  <div className="text-white-50 small">Total Updates</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center p-3 bg-dark bg-opacity-50 border border-secondary rounded-3">
                  <div className="display-6 fw-bold text-success mb-1">5</div>
                  <div className="text-white-50 small">New Exchanges</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center p-3 bg-dark bg-opacity-50 border border-secondary rounded-3">
                  <div className="display-6 fw-bold text-warning mb-1">3.0</div>
                  <div className="text-white-50 small">Current Version</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center p-3 bg-dark bg-opacity-50 border border-secondary rounded-3">
                  <div className="display-6 fw-bold text-info mb-1">98%</div>
                  <div className="text-white-50 small">Uptime Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="btn btn-outline-primary btn-sm px-3 py-2"
                >
                  <i className={`bi ${category.icon} me-2`}></i>
                  {category.name}
                  <span className="badge bg-primary ms-2">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

       {/* Updates Grid */}
<div className="row justify-content-center">
  <div className="col-lg-10">
    <div className="row g-4">
      {updates.map((update) => (
        <div key={update.id} className="col-md-6 col-lg-4">
          <div className="card h-100 border-secondary bg-white hover-lift transition-all">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex align-items-center">
                  <div className={`bg-${update.color} bg-opacity-10 p-2 rounded-circle me-3`}>
                    <i className={`bi ${update.icon} text-${update.color} fs-5`}></i>
                  </div>
                  <span className={`badge bg-${update.color} bg-opacity-10 text-${update.color}`}>
                    {update.category}
                  </span>
                </div>
                <span className="badge bg-primary bg-opacity-10 text-primary">
                  {update.badge}
                </span>
              </div>
              
              <h4 className="fw-bold mb-3 text-black">{update.title}</h4>
              <p className="text-black mb-4">{update.description}</p>
              
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <div className="d-flex flex-wrap gap-2"> {/* REMOVED: pb-5 class */}
                  {update.tags.map((tag, index) => (
                    <span key={index} className="badge bg-dark border border-secondary text-white-50 small pb-1.5">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="text-end">
                  <div className="text-white-50 small">{update.date}</div>
                </div>
              </div>
            </div>
            
            {/* Card Footer */}
            <div className="card-footer bg-white border-top border-secondary pt-0">
              <button className="btn btn-link text-decoration-none p-0 text-primary">
                <i className="bi bi-arrow-right-circle me-1"></i>
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Two Boxes at Bottom - ENLARGED */}
<div style={{
  width: '100%',
  padding: '0px',
  marginTop: '3rem',
  marginBottom: '2rem'
}}>
  <div style={{
    display: 'flex',
    gap: '30px',
    justifyContent: 'center'
  }}>
    
    {/* Left Box: Newsletter - BIGGER */}
    <div style={{
      flex: '1.5', // Increased from 1 to take more space
      minWidth: '750px', // Increased from 650px
      maxWidth: '850px'  // Increased from 700px
    }}>
      <div className="card border-primary bg-white" style={{
        minHeight: '420px', // Increased from 380px
        borderRadius: '10px',
        padding: '20px' // Added padding to card
      }}>
        <div className="card-body p-5 d-flex flex-column"> {/* Increased padding from p-4 to p-5 */}

          <div className="d-flex align-items-center mb-4"> {/* Increased margin-bottom */}
            <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-4"> {/* Increased padding */}
              <i className="bi bi-bell-fill text-black fs-3"></i> {/* Increased from fs-4 to fs-3 */}
            </div>
            <div>
              <h3 className="fw-bold mb-2 text-black">Stay Updated</h3> {/* Changed from h4 to h3 */}
              <p className="text-black fs-5 mb-0">Get the latest news in your inbox</p> {/* Increased text size */}
            </div>
          </div>

          <p className="text-black mb-5 fs-5"> {/* Increased margin and font size */}
            Subscribe to our newsletter and be the first to know about new features, updates, and trading insights.
          </p>

          <div className="mt-auto">
            <div className="input-group mb-4" style={{ height: '60px' }}> {/* Increased height */}
              <input
                type="email"
                className="form-control border-secondary fs-5" {/* Added fs-5 for larger text */}
                placeholder="Your email address"
                style={{
                  height: '100%',
                  fontSize: '1.25rem', /* Additional size guarantee */
                  padding: '0.75rem 1rem' /* Larger padding */
                }}
              />
              <button 
                className="btn btn-primary fs-5 px-4" // Larger text and padding
                style={{ height: '100%' }}
              >
                Subscribe
              </button>
            </div>
            <small className="text-black fs-6"> {/* Increased from default to fs-6 */}
              <i className="bi bi-shield-check me-2 fs-5"></i> {/* Larger icon */}
              We respect your privacy. Unsubscribe anytime.
            </small>
          </div>
        </div>
      </div>
    </div>

    {/* Right Box: Roadmap */}
    <div style={{
      flex: '1',
      minWidth: '500px',
      maxWidth: '700px'
    }}>
      <div className="card border-warning bg-white" style={{
        minHeight: '420px', // Matched left card height
        borderRadius: '10px'
      }}>
        <div className="card-body p-4 d-flex flex-column">

          <div className="d-flex align-items-center mb-3">
            <div className="bg-warning bg-opacity-10 p-2 rounded-circle me-3">
              <i className="bi bi-map text-warning fs-4"></i>
            </div>
            <div>
              <h4 className="fw-bold mb-1 text-black">What's Coming Next</h4>
              <p className="text-black small mb-0">Upcoming features roadmap</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="d-flex align-items-start mb-3">
              <div className="text-warning me-3 mt-1"><i className="bi bi-circle-fill"></i></div>
              <div>
                <h6 className="fw-bold mb-1 text-black">AI Strategy Builder</h6>
                <p className="text-black small mb-0">Create custom trading strategies with AI assistance</p>
                <small className="text-warning"><i className="bi bi-calendar me-1"></i> Q3 2025</small>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <div className="text-info me-3 mt-1"><i className="bi bi-circle-fill"></i></div>
              <div>
                <h6 className="fw-bold mb-1 text-black">Social Trading</h6>
                <p className="text-black small mb-0">Follow top traders and copy their strategies</p>
                <small className="text-info"><i className="bi bi-calendar me-1"></i> Q4 2025</small>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div className="text-success me-3 mt-1"><i className="bi bi-circle-fill"></i></div>
              <div>
                <h6 className="fw-bold mb-1 text-black">DeFi Integration</h6>
                <p className="text-black small mb-0">Connect with decentralized finance protocols</p>
                <small className="text-success"><i className="bi bi-calendar me-1"></i> Q1 2026</small>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <button className="btn btn-outline-warning w-100">
              <i className="bi bi-clock-history me-2"></i>
              View Full Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>


          <div className="mt-auto">
            <button className="btn btn-outline-warning w-100">
              <i className="bi bi-clock-history me-2"></i>
              View Full Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

        {/* View All Button - Adjusted for bottom position */}
        <div className="row justify-content-center mt-5 py-5"> {/* CHANGED: Increased top margin to mt-5 and added vertical padding with py-5 */}
          <div className="col-lg-10 text-center">
            <button className="btn btn-outline-primary px-4 py-3">
              <i className="bi bi-clock-history me-2"></i>
              View Complete Update History
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .bg-dark {
          background-color: #000000 !important;
        }
          .bg-white {
          background-color: #ffffffff !important;
        }
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3) !important;
          border-color: #495057 !important;
        }
        
        .transition-all {
          transition: all 0.3s ease;
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
        
        .bg-danger.bg-opacity-10 {
          background-color: rgba(220, 53, 69, 0.1) !important;
        }
        
        .text-white-50 {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        
        .border-secondary {
          border-color: #495057 !important;
        }
        
        .btn-outline-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.2);
        }
        
        .btn-outline-warning:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 193, 7, 0.2);
        }
        
        .form-control:focus {
          background-color: #ffffffff !important;
          border-color: #86b7fe !important;
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25) !important;
          color: white !important;
        }
        
     
      `}</style>
    </section>
  );
};

export default LatestSection;