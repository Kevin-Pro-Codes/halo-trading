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
    <section className="py-5 bg-dark text-white overflow-hidden">
      <div className="container position-relative">
        {/* Header */}
        <div className="row justify-content-center text-center mb-4 mb-lg-5">
          <div className="col-12 col-lg-8">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                <i className="bi bi-megaphone-fill text-primary fs-3"></i>
              </div>
              <h2 className="display-6 display-lg-5 fw-bold mb-0 text-white">Latest Updates & News</h2>
            </div>
            <p className="lead text-white-50 mb-0">
              Stay updated with the latest features, improvements, and announcements from our trading platform
            </p>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="row justify-content-center mb-4 mb-lg-5">
          <div className="col-12 col-lg-10">
            <div className="row g-2 g-lg-3">
              {[
                { value: updates.length, label: "Total Updates", color: "primary" },
                { value: 5, label: "New Exchanges", color: "success" },
                { value: "3.0", label: "Current Version", color: "warning" },
                { value: "98%", label: "Uptime Rate", color: "info" }
              ].map((stat, index) => (
                <div key={index} className="col-6 col-md-3">
                  <div className="text-center p-2 p-lg-3 bg-dark bg-opacity-50 border border-secondary rounded-3">
                    <div className={`display-6 fw-bold text-${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-white-50 small">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
 

      {/* Updates Grid - RESPONSIVE */}
<div className="row justify-content-center position-relative">
  <div className="col-12 col-lg-10">
    <div className="row g-3 g-lg-4 mb-0">
      {updates.map((update) => (
        <div key={update.id} className="col-12 col-md-6 col-lg-4">
          {/* Added border and rounded classes here */}
          <div className="h-100 border border-secondary bg-white hover-lift transition-all rounded-3">
            <div className="p-3 p-lg-4 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start mb-2 mb-lg-3">
                <div className="d-flex align-items-center">
                  <div className={`bg-${update.color} bg-opacity-10 p-1 p-lg-2 rounded-circle me-2 me-lg-3`}>
                    <i className={`bi ${update.icon} text-${update.color} fs-5`}></i>
                  </div>
                  <span className={`badge bg-${update.color} bg-opacity-10 text-${update.color} rounded-pill`}>
                    {update.category}
                  </span>
                </div>
                <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill">
                  {update.badge}
                </span>
              </div>
              
              <h4 className="fw-bold mb-2 mb-lg-3 text-black fs-5 fs-lg-4">{update.title}</h4>
              <p className="text-black mb-3 mb-lg-4 flex-grow-1">{update.description}</p>
              
              <div className="mt-auto">
                <div className="d-flex flex-wrap gap-1 gap-lg-2 mb-2 mb-lg-3">
                  {update.tags.map((tag, index) => (
                    <span key={index} className="badge bg-dark border border-secondary text-white-50 small rounded-pill">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="d-flex justify-content-between align-items-center pt-2 border-top border-secondary">
                  <div className="text-black small">{update.date}</div>
                  <button className="btn btn-link text-decoration-none p-0 text-primary">
                    <i className="bi bi-arrow-right-circle me-1"></i>
                    <span className="d-none d-sm-inline">Learn More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  {/* Extended black background container - FIXED POSITIONING */}
  <div className="position-absolute start-0 end-0" style={{
    bottom: '-2rem',
    height: '4rem',
    zIndex: -1,
    overflow: 'hidden'
  }}>
    <div className="bg-dark w-100 h-100"></div>
  </div>
</div>

        {/* Additional spacing below (optional) */}
        <div className="bg-dark" style={{ height: '2rem' }}></div>

      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .bg-dark {
          background-color: #000000 !important;
        }
        .bg-white {
          background-color: #ffffff !important;
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
        
        /* Ensure the extended background flows seamlessly */
        section {
          position: relative;
        }
        
        .container.position-relative {
          z-index: 1;
        }
        
        /* Mobile-specific adjustments */
        @media (max-width: 768px) {
          .display-6 {
            font-size: 2rem !important;
          }
          
          .card {
            margin-bottom: 1rem;
          }
          
          .btn-sm {
            padding: 0.25rem 0.5rem !important;
            font-size: 0.875rem !important;
          }
          
          /* Adjust extended background for mobile */
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
          
          .card-body {
            padding: 1rem !important;
          }
        }
        
        /* Fix for the extended background to work properly */
        .row.position-relative {
          padding-bottom: 2rem;
        }
      `}</style>
    </section>
  );
};

export default LatestSection;