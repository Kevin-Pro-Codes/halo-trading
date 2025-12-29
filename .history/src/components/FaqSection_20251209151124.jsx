import React, { useState } from 'react';

const FaqSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const faqs = [
    {
      question: "How does the AI trading bot work?",
      answer: "Our bot uses machine learning algorithms to analyze market data in real-time. It connects to your exchange accounts via secure API keys and executes trades based on your configured strategies. The AI continuously learns from market patterns and adapts to changing conditions for optimal performance.",
      category: "general"
    },
    {
      question: "Which cryptocurrency exchanges are supported?",
      answer: "We support all major exchanges including Binance, Coinbase Pro, Kraken, KuCoin, FTX, Bybit, and Bitfinex. Our platform is compatible with any exchange that provides REST API access. We're constantly adding new exchange integrations based on user demand.",
      category: "technical"
    },
    {
      question: "Is there a free trial or demo version available?",
      answer: "Yes! We offer a 14-day free trial with full access to all features including paper trading (simulated trading with virtual funds). No credit card required to start. After the trial, you can choose from our flexible subscription plans starting at $29/month.",
      category: "pricing"
    },
    {
      question: "How secure is my exchange API access?",
      answer: "We implement bank-level security measures including end-to-end encryption, read-only API key permissions by default, and never store your API secrets on our servers. All keys are encrypted at rest and in transit. We recommend using API keys with withdrawal disabled for maximum security.",
      category: "security"
    },
    {
      question: "Can I run multiple trading strategies simultaneously?",
      answer: "Absolutely! You can run up to 20 different strategies concurrently on a single account. Each strategy can have its own configuration, risk parameters, and asset allocation. Our platform includes strategy backtesting and performance analytics to help you optimize your approach.",
      category: "technical"
    },
    {
      question: "What is the minimum capital required to start?",
      answer: "There's no minimum requirement to use our platform. You can start trading with any amount. However, we recommend starting with at least $100 to account for exchange fees and market fluctuations. Remember: never trade more than you can afford to lose.",
      category: "pricing"
    },
    {
      question: "Do you offer mobile app access?",
      answer: "Yes! We have native iOS and Android apps that provide full functionality including real-time monitoring, strategy adjustments, and performance analytics. You can also access our platform via any modern web browser on desktop or mobile.",
      category: "general"
    },
    {
      question: "How do you handle market volatility and flash crashes?",
      answer: "Our platform includes multiple safety features: stop-loss orders, trailing stops, take-profit targets, and circuit breakers. The AI is trained to recognize abnormal market conditions and can temporarily pause trading during extreme volatility to protect your capital.",
      category: "technical"
    }
  ];

  const categories = [
    { id: "all", name: "All Questions", icon: "bi-grid", variant: "primary" },
    { id: "general", name: "General", icon: "bi-question-circle", variant: "primary" },
    { id: "technical", name: "Technical", icon: "bi-gear", variant: "success" },
    { id: "pricing", name: "Pricing", icon: "bi-currency-dollar", variant: "warning" },
    { id: "security", name: "Security", icon: "bi-shield-check", variant: "info" }
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFaqs = selectedCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="lead text-muted mb-4">
              Get answers to common questions about our trading platform
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`btn btn-sm px-3 py-2 fw-bold ${selectedCategory === category.id ? `btn-${category.variant}` : `btn-outline-${category.variant}`}`}
                >
                  <i className={`bi ${category.icon} me-2`}></i>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 col-lg-6">
            <div className="input-group shadow-sm">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search questions..."
              />
              <button className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion" id="faqAccordion">
              {filteredFaqs.map((faq, index) => (
                <div className="accordion-item border-0 shadow-sm mb-3" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeAccordion === index ? '' : 'collapsed'} fw-bold py-4`}
                      type="button"
                      onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                      style={{
                        backgroundColor: activeAccordion === index ? 'rgba(13, 110, 253, 0.05)' : 'white'
                      }}
                    >
                      <div className="d-flex align-items-center w-100">
                        <i className="bi bi-question-circle-fill text-primary me-3"></i>
                        <span className="me-auto">{faq.question}</span>
                        <span className={`badge bg-${categories.find(c => c.id === faq.category)?.variant} bg-opacity-10 text-${categories.find(c => c.id === faq.category)?.variant} me-3`}>
                          {categories.find(c => c.id === faq.category)?.name}
                        </span>
                      </div>
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                  >
                    <div className="accordion-body py-4">
                      <p className="text-muted mb-4">{faq.answer}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-2">
                          <span className="badge bg-light text-dark border">#AI</span>
                          <span className="badge bg-light text-dark border">#Trading</span>
                          <span className="badge bg-light text-dark border">#Platform</span>
                        </div>
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-hand-thumbs-up me-1"></i>
                          Helpful
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-lg-10">
            <div className="row g-4">
              <div className="col-md-4 text-center">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                      <i className="bi bi-headset text-primary fs-4"></i>
                    </div>
                    <h3 className="fw-bold mb-2">24/7 Support</h3>
                    <p className="text-muted mb-0">Round-the-clock assistance for all users</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                      <i className="bi bi-check-circle text-success fs-4"></i>
                    </div>
                    <h3 className="fw-bold mb-2">98% Satisfaction</h3>
                    <p className="text-muted mb-0">Based on user feedback and reviews</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="bg-warning bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                      <i className="bi bi-lightning text-warning fs-4"></i>
                    </div>
                    <h3 className="fw-bold mb-2">2 Min Response</h3>
                    <p className="text-muted mb-0">Average live chat response time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* CTA Section - Smaller Buttons with Side Space */}
<div className="row justify-content-center mt-5">
  <div className="col-lg-10 col-xl-8">
    <div className="card border-primary bg-primary bg-opacity-5">
      <div className="card-body p-4 p-md-5 px-md-4 px-lg-5">
        <div className="text-center mb-4">
          <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
            <i className="bi bi-question-circle-fill text-primary fs-3"></i>
          </div>
          <h3 className="fw-bold mb-3">Still Need Help?</h3>
          <p className="text-muted mb-4">
            Can't find the answer? Our support team is here to help.
          </p>
        </div>
        
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 mb-4 px-2 px-md-0">
          <button className="btn btn-outline-secondary btn-lg px-3 px-md-4 py-2 py-md-3">
            <i className="bi bi-chat-dots me-2"></i>
            <span className="d-none d-md-inline">Chat</span>
            <span className="d-inline d-md-none">Chat</span>
          </button>
          <button className="btn btn-outline-secondary btn-lg px-3 px-md-4 py-2 py-md-3">
            <i className="bi bi-envelope me-2"></i>
            <span className="d-none d-md-inline">Email</span>
            <span className="d-inline d-md-none">Email</span>
          </button>
          <button className="btn btn-outline-secondary btn-lg px-3 px-md-4 py-2 py-md-3">
            <i className="bi bi-book me-2"></i>
            <span className="d-none d-md-inline">Docs</span>
            <span className="d-inline d-md-none">Docs</span>
          </button>
        </div>
        
        <div className="text-center mt-4 px-2 px-md-0">
          <small className="text-muted">
            <i className="bi bi-telephone me-1"></i>
            1-800-TRADE-BOT • 24/7
          </small>
        </div>
      </div>
    </div>
  </div>
</div>
        {/* Quick Links */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4">
              <a href="#" className="text-decoration-none text-muted d-flex align-items-center">
                <i className="bi bi-file-text me-2"></i>
                <span>Documentation</span>
              </a>
              <a href="#" className="text-decoration-none text-muted d-flex align-items-center">
                <i className="bi bi-youtube me-2"></i>
                <span>Video Tutorials</span>
              </a>
              <a href="#" className="text-decoration-none text-muted d-flex align-items-center">
                <i className="bi bi-people me-2"></i>
                <span>Community Forum</span>
              </a>
              <a href="#" className="text-decoration-none text-muted d-flex align-items-center">
                <i className="bi bi-github me-2"></i>
                <span>API Reference</span>
              </a>
              <a href="#" className="text-decoration-none text-muted d-flex align-items-center">
                <i className="bi bi-file-earmark-text me-2"></i>
                <span>Blog & Updates</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;