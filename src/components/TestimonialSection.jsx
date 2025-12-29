import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "This algorithmic trading system has completely transformed my approach to the markets. My portfolio is up 45% in just 3 months, and the risk management tools are exceptional.",
      name: "Sarah Johnson",
      role: "Crypto Trader",
      company: "Quantum Capital",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      stats: { profit: "+45%", timeframe: "3 months" }
    },
    {
      quote: "Finally a platform that delivers consistent results. The automation features saved me 20+ hours per week while increasing my win rate to 78%. The customer support is outstanding.",
      name: "Michael Chen",
      role: "Day Trader",
      company: "TradeFlow Pro",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      stats: { profit: "+32%", timeframe: "2 months" }
    },
    {
      quote: "As an institutional trader, I'm impressed by the professional-grade analytics. The backtesting accuracy and real-time execution speed are exactly what we needed for our hedge fund.",
      name: "Robert Williams",
      role: "Hedge Fund Manager",
      company: "Alpha Strategies Fund",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
      stats: { profit: "+28%", timeframe: "4 months" }
    },
    {
      quote: "The machine learning algorithms adapt perfectly to market conditions. My passive income from trading has doubled since implementing their strategies.",
      name: "Emma Rodriguez",
      role: "Quantitative Analyst",
      company: "FinTech Solutions",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4.5,
      stats: { profit: "+100%", timeframe: "6 months" }
    },
    {
      quote: "The perfect balance of automation and manual control. I can let the bot handle routine trades while I focus on strategic decisions. ROI exceeded all expectations.",
      name: "David Park",
      role: "Algorithmic Trader",
      company: "MarketEdge",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      stats: { profit: "+52%", timeframe: "5 months" }
    },
    {
      quote: "Coming from traditional finance, I was skeptical about automated trading. But the transparency, detailed reporting, and consistent performance have won me over completely.",
      name: "Jennifer Lee",
      role: "Investment Banker",
      company: "Goldman Sachs Alumni",
      image: "https://randomuser.me/api/portraits/women/26.jpg",
      rating: 4,
      stats: { profit: "+38%", timeframe: "3 months" }
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="d-flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`me-1 ${i < Math.floor(rating) ? 'text-warning' : 'text-secondary'}`}
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {i < rating ? (
              i < Math.floor(rating) ? (
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              ) : (
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half-star)" />
              )
            ) : (
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#e5e7eb" />
            )}
            {i < rating && i >= Math.floor(rating) && (
              <defs>
                <linearGradient id="half-star" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="50%" stopColor="#ffd700" />
                  <stop offset="50%" stopColor="#e5e7eb" />
                </linearGradient>
              </defs>
            )}
          </svg>
        ))}
        <span className="ms-2 text-muted">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        {/* Header */}
        <div className="row mb-5 text-center">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-5 fw-bold mb-3">Trader Testimonials</h2>
            <p className="lead text-muted mb-4">
              See what professional traders and institutions are saying about our algorithmic trading platform
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <div className="me-4">
                <h3 className="fw-bold text-primary">4.8/5</h3>
                <p className="text-muted small mb-0">Average Rating</p>
              </div>
              <div className="border-start ps-4">
                <h3 className="fw-bold text-success">250+</h3>
                <p className="text-muted small mb-0">Verified Traders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  {/* Rating */}
                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="mb-4">
                    <p className="fst-italic text-dark">"{testimonial.quote}"</p>
                  </blockquote>
                  
                  {/* Performance Stats */}
                  <div className="bg-primary bg-opacity-10 p-3 rounded mb-4">
                    <div className="d-flex justify-content-between">
                      <div>
                        <small className="text-muted d-block">Profit Increase</small>
                        <span className="fw-bold text-success">{testimonial.stats.profit}</span>
                      </div>
                      <div>
                        <small className="text-muted d-block">Timeframe</small>
                        <span className="fw-bold text-dark">{testimonial.stats.timeframe}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Author */}
                <div className="card-footer bg-transparent border-top-0 d-flex align-items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    width="56"
                    height="56"
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                    <p className="text-muted small mb-0">{testimonial.role}</p>
                    <p className="text-muted small mb-0">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Badge */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-white rounded-3 p-4 shadow-sm border">
              <div className="row align-items-center">
                <div className="col-md-3 text-center mb-3 mb-md-0">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-flex">
                    <svg className="text-success" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                    </svg>
                  </div>
                </div>
                <div className="col-md-9">
                  <h5 className="fw-bold mb-2">Verified & Audited Performance</h5>
                  <p className="text-muted mb-0">
                    All testimonials include verified trading results. Performance data is independently audited 
                    and includes complete trade history transparency. Traders shown have consented to share their 
                    verified results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <div className="text-center">
                <div className="fw-bold text-primary">98%</div>
                <div className="text-muted small">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="fw-bold text-success">$15M+</div>
                <div className="text-muted small">Total Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="fw-bold text-info">24/7</div>
                <div className="text-muted small">Support Available</div>
              </div>
              <div className="text-center">
                <div className="fw-bold text-warning">100%</div>
                <div className="text-muted small">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;