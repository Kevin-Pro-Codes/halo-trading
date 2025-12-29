import React from "react";

const BitcoinSVG = ({ size = 120 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{
      filter: "drop-shadow(0 0 15px rgba(247, 147, 26, 0.7))",
      animation: "pulse 3s ease-in-out infinite"
    }}
  >
    <circle cx="12" cy="12" r="12" fill="#F7931A"/>
    <path 
      d="M16.905 10.661c.225-1.507-.921-2.316-2.489-2.857l.509-2.038-1.24-.309-.496 1.986c-.326-.081-.661-.157-.996-.233l.5-2.002-1.24-.309-.509 2.037c-.27-.061-.535-.122-.792-.185l.001-.007-1.715-.428-.33 1.327s.921.211.902.224c.503.126.594.459.579.723L8.4 11.147c.035.008.079.021.127.04l-.129-.032-.801 3.213c-.06.15-.212.375-.555.289.012.017-.903-.225-.903-.225l-.617 1.407 1.618.403c.301.075.596.154.888.228l-.514 2.064 1.239.309.51-2.041c.34.092.67.177.992.257l-.508 2.035 1.24.309.514-2.058c2.133.404 3.736.241 4.411-1.691.547-1.572-.027-2.479-1.156-3.07.822-.19 1.441-.731 1.606-1.849zm-2.345 3.249c-.389 1.563-3.023.718-3.877.506l.692-2.774c.854.213 3.595.637 3.185 2.268zm.389-3.287c-.355 1.424-2.548.7-3.259.523l.627-2.515c.711.177 3.002.508 2.632 1.992z"
      fill="white"
    />
  </svg>
);

const GallerySection = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60",
      title: "AI Trading Dashboard",
      description: "Real-time market analysis interface",
      category: "Interface",
      icon: "📊"
    },
    {
      title: "Bitcoin & Cryptocurrency Charts",
      description: "Live BTC/USD price action with Bitcoin visualization",
      category: "Crypto",
      icon: "₿"
    },
    {
      url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60",
      title: "Forex Trading Terminal",
      description: "Multi-currency pair monitoring",
      category: "Forex",
      icon: "💱"
    },
    {
      url: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&auto=format&fit=crop&q=60",
      title: "Stock Market Analytics",
      description: "Advanced stock screening tools",
      category: "Stocks",
      icon: "📉"
    },
    {
      url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60",
      title: "Algorithm Performance",
      description: "Backtesting results visualization",
      category: "Analytics",
      icon: "🤖"
    },
    {
      url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60",
      title: "Portfolio Management",
      description: "Asset allocation dashboard",
      category: "Portfolio",
      icon: "💰"
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      title: "Risk Management",
      description: "Stop-loss and position sizing tools",
      category: "Risk",
      icon: "🛡️"
    },
    {
      url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60",
      title: "Market Data Feed",
      description: "Real-time financial data streaming",
      category: "Data",
      icon: "⚡"
    }
  ];

  const tradingSystems = [
    {
      name: "Momentum Scanner",
      description: "Real-time trend detection across 50+ markets",
      icon: "fas fa-chart-line",
      color: "primary",
      features: ["95% accuracy", "24/7 scanning", "Multi-timeframe"]
    },
    {
      name: "Arbitrage Bot",
      description: "Cross-exchange profit capture system",
      icon: "fas fa-exchange-alt",
      color: "success",
      features: ["15+ exchanges", "Sub-second latency", "Auto-execution"]
    },
    {
      name: "Risk Manager",
      description: "Portfolio protection with automated controls",
      icon: "fas fa-shield-alt",
      color: "warning",
      features: ["Stop-loss automation", "Position sizing", "Drawdown limits"]
    }
  ];

  return (
    <section className="py-5 bg-black text-white">
      <div className="container py-5">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3 text-white">Our Trading Robots in Action</h2>
            <p className="lead text-white-50 mb-4">
              Explore screenshots of our algorithmic trading systems, live dashboards, and performance analytics
            </p>
            <div className="d-flex justify-content-center gap-4">
              <div className="text-center">
                <div className="fs-4 fw-bold text-primary">24/7</div>
                <div className="text-white">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="fs-4 fw-bold text-success">50+</div>
                <div className="text-white">Markets</div>
              </div>
              <div className="text-center">
                <div className="fs-4 fw-bold text-info">0.2s</div>
                <div className="text-white">Latency</div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid - Rounded corners on ALL sides */}
        <div className="row g-4 mb-5">
          {images.map((image, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 d-flex">
              <div className="card border-0 shadow-lg w-100 overflow-hidden bg-dark text-white d-flex flex-column rounded-md">
                {/* Card Image or Bitcoin Icon - Rounded on ALL sides */}
                <div 
                  className="position-relative overflow-hidden d-flex align-items-center justify-content-center rounded-md" 
                  style={{ 
                    height: "200px",
                    background: image.url ? `url(${image.url}) center/cover` : "#111"
                  }}
                >
                  {/* If it's the Bitcoin card (no URL), show the Bitcoin SVG with crypto header */}
                  {!image.url && (
                    <>
                      {/* Crypto Header Badge */}
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-info bg-opacity-75 text-white rounded-md px-3 py-2">
                          {image.icon} {image.category}
                        </span>
                      </div>
                      
                      <div className="text-center p-4">
                        <div className="mb-3 d-flex justify-content-center">
                          <BitcoinSVG size={80} />
                        </div>
                        <h6 className="fw-bold text-white mb-0">{image.title}</h6>
                      </div>
                    </>
                  )}
                  
                  {/* If it has a URL (regular image), show the image with badge */}
                  {image.url && (
                    <>
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className={`badge bg-${index % 2 === 0 ? 'primary' : 'info'} bg-opacity-75 text-white rounded-md px-3 py-2`}>
                          {image.icon} {image.category}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Card Body */}
                <div className="card-body text-center bg-dark p-3 flex-grow-0">
                  <h6 className="card-title fw-bold mb-1 text-white">{image.title}</h6>
                  <p className="card-text text-white-50 small mb-0">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Systems - Clean design without list dots */}
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto">
            <h3 className="text-center mb-4 fw-bold text-black">Featured Trading Systems</h3>
            <div className="row g-4">
              {tradingSystems.map((system, index) => (
                <div key={index} className="col-md-4">
                  <div className={`card border-${system.color} border-top-0 border-end-0 border-bottom-0 border-3 h-100 bg-dark text-white`}>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className={`bg-${system.color} bg-opacity-10 p-3 rounded-circle me-3`}>
                          <i className={`${system.icon} text-${system.color} fs-4`}></i>
                        </div>
                        <div>
                          <h5 className="card-title fw-bold mb-1 text-white">{system.name}</h5>
                          <p className="text-white-50 small mb-0">{system.description}</p>
                        </div>
                      </div>
                      
                      {/* Clean feature display without list dots */}
                      <div className="mt-4 pt-3 border-top border-white border-opacity-10">
                        <div className="row g-2">
                          {system.features.map((feature, fIndex) => (
                            <div key={fIndex} className="col-12">
                              <div className="d-flex align-items-center bg-dark bg-opacity-50 p-2 rounded">
                                <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                                <span className="text-white small">{feature}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action - Original styling */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="card bg-white border-primary">
              <div className="card-body text-center p-5">
                <h3 className="fw-bold mb-3 text-black">Ready to See Your Own Dashboard?</h3>
                
                <p className="lead text-black mb-4">
                  Get started with our algorithmic trading platform and access all these features
                </p>
                
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3 gap-md-4">
                  <button className="btn btn-sm btn-primary px-5">
                    <i className="fas fa-play-circle me-2"></i> Start Free Trial
                  </button>
                  
                  <button className="btn btn-sm btn-outline-dark px-5 text-black">
                    <i className="fas fa-desktop me-2"></i> Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Add CSS for pulse animation and hover effects */}
      <style jsx>{`
        @keyframes pulse {
          0% { 
            transform: scale(1); 
            opacity: 1;
          }
          50% { 
            transform: scale(1.05); 
            opacity: 0.9;
          }
          100% { 
            transform: scale(1); 
            opacity: 1;
          }
        }
        
        .card:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3) !important;
        }
        
        .card {
          min-height: 350px;
          transition: all 0.3s ease;
        }
        
        /* Rounded corners for ALL sides of gallery image containers */
        .rounded-md {
          border-radius: 0.375rem !important; /* 6px - slightly rounded */
        }
        
        /* Make the entire card rounded */
        .card.rounded-md {
          border-radius: 0.375rem !important;
          overflow: hidden;
        }
        
        /* Custom rounded-md class for badges */
        .badge.rounded-md {
          border-radius: 0.375rem !important;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;