import React, { useState } from 'react';

const FaqSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const faqs = [
    {
      question: "How does the MQL5 Expert Advisor work with MetaTrader 5?",
      answer: "Our Expert Advisor is an MQL5 script that runs directly within the MetaTrader 5 platform. It connects to cryptocurrency exchanges via API and executes automated trades based on your configured strategies. The EA runs 24/7 on your MT5 platform, analyzing market data and executing trades automatically without manual intervention.",
      category: "mt5"
    },
    {
      question: "Which cryptocurrency exchanges can I connect to MT5?",
      answer: "Our MQL5 Expert Advisor supports all major exchanges including Binance, Bybit, OKX, KuCoin, Gate.io, and Bitfinex. We provide custom bridge connections that allow MT5 to trade cryptocurrencies directly. The platform supports spot, futures, and margin trading across multiple exchanges simultaneously.",
      category: "exchanges"
    },
    {
      question: "Do I need programming knowledge to use the Expert Advisor?",
      answer: "No programming knowledge is required! Our Expert Advisor comes with a user-friendly interface within MT5. You can configure all settings through intuitive input parameters. For advanced users, the MQL5 source code is available for custom modifications.",
      category: "setup"
    },
    {
      question: "How secure is the MT5 Expert Advisor setup?",
      answer: "Security is our top priority. The Expert Advisor runs locally on your computer/VPS and never stores your exchange API keys on external servers. We use read-only API keys by default and recommend enabling withdrawal restrictions. All communications are encrypted, and the EA only has permission to execute trades based on your predefined rules.",
      category: "security"
    },
    {
      question: "Can I run multiple Expert Advisors simultaneously?",
      answer: "Yes! MT5 allows running multiple Expert Advisors on different charts and currency pairs simultaneously. Each EA can have its own strategy, risk parameters, and trading pairs. Our EA supports multi-currency and multi-timeframe analysis for sophisticated trading setups.",
      category: "technical"
    },
    {
      question: "What are the system requirements for running the EA?",
      answer: "Minimum requirements: Windows 10/11, 4GB RAM, 2GB free disk space, and stable internet connection. For 24/7 trading, we recommend a Windows VPS with at least 2 CPU cores and 8GB RAM. The latest MT5 build (1500+) is required for optimal performance.",
      category: "technical"
    },
    {
      question: "How do I backtest my trading strategies?",
      answer: "Use MT5's built-in Strategy Tester to backtest the Expert Advisor with historical data. Our EA includes comprehensive backtesting capabilities with detailed reports including equity curves, profit factors, and maximum drawdown. We recommend testing strategies with at least 2 years of historical data before going live.",
      category: "backtesting"
    },
    {
      question: "What happens if my computer loses internet connection?",
      answer: "The Expert Advisor includes built-in reconnection logic and will automatically attempt to reconnect. However, for 24/7 reliability, we strongly recommend using a Windows VPS (Virtual Private Server) that guarantees 99.9% uptime. Many traders use affordable VPS services specifically designed for MT5 trading.",
      category: "reliability"
    },
    {
      question: "Can I modify the Expert Advisor's source code?",
      answer: "Yes! We provide the complete MQL5 source code (.mq5 file) with comprehensive documentation. Advanced users can modify the code to implement custom strategies, indicators, or risk management rules. Basic MQL5 knowledge is required for modifications.",
      category: "development"
    },
    {
      question: "What kind of support is available for MQL5 issues?",
      answer: "We provide comprehensive support including MQL5 programming assistance, MT5 platform troubleshooting, and trading strategy consultation. Our team includes experienced MQL5 developers who can help with custom modifications and optimization. We also have an active Telegram community for peer support.",
      category: "support"
    },
    {
      question: "How much does the Expert Advisor cost?",
      answer: "We offer flexible licensing options: Monthly subscription ($49/month), Annual license ($399/year), or Lifetime license ($999 one-time). All licenses include updates, support, and access to new features. A 7-day free trial is available to test all features before purchasing.",
      category: "pricing"
    },
    {
      question: "Do you offer VPS hosting for MT5?",
      answer: "Yes, we partner with reliable VPS providers that offer optimized Windows servers for MT5. These servers are specifically configured for low-latency trading with dedicated resources. We can help you set up and configure a VPS for 24/7 automated trading.",
      category: "setup"
    }
  ];

  const categories = [
    { id: "all", name: "All Questions", icon: "bi-grid", variant: "primary", count: faqs.length },
    { id: "mt5", name: "MT5 Platform", icon: "bi-meta", variant: "primary", count: faqs.filter(f => f.category === "mt5").length },
    { id: "technical", name: "Technical", icon: "bi-cpu", variant: "success", count: faqs.filter(f => f.category === "technical").length },
    { id: "setup", name: "Setup & Install", icon: "bi-download", variant: "warning", count: faqs.filter(f => f.category === "setup").length },
    { id: "backtesting", name: "Backtesting", icon: "bi-speedometer2", variant: "info", count: faqs.filter(f => f.category === "backtesting").length },
    { id: "security", name: "Security", icon: "bi-shield-check", variant: "danger", count: faqs.filter(f => f.category === "security").length },
    { id: "support", name: "Support", icon: "bi-headset", variant: "purple", count: faqs.filter(f => f.category === "support").length }
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFaqs = selectedCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const popularQuestions = [
    "How to install EA on MT5?",
    "Minimum VPS requirements?",
    "Backtesting guide",
    "Exchange API setup",
    "Risk management settings"
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                <i className="bi bi-question-circle text-primary fs-3"></i>
              </div>
              <h2 className="display-5 fw-bold mb-0 text-dark">MQL5 Expert Advisor FAQ</h2>
            </div>
            <p className="lead text-muted mb-4">
              Common questions about our MetaTrader 5 cryptocurrency trading bot
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
                  className={`btn ${selectedCategory === category.id ? `btn-${category.variant}` : `btn-outline-${category.variant}`} d-flex align-items-center`}
                >
                  <i className={`bi ${category.icon} me-2`}></i>
                  <span>{category.name}</span>
                  <span className={`badge ${selectedCategory === category.id ? 'bg-white text-dark' : 'bg-dark text-white'} ms-2`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Questions */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="border border-secondary rounded-3 p-4 bg-light">
              <h5 className="fw-bold text-dark mb-3">
                <i className="bi bi-fire text-warning me-2"></i>
                Popular Questions
              </h5>
              <div className="d-flex flex-wrap gap-2">
                {popularQuestions.map((question, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="badge bg-white border border-secondary text-dark text-decoration-none px-3 py-2 hover-lift"
                  >
                    {question}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="accordion" id="faqAccordion">
              {filteredFaqs.map((faq, index) => (
                <div className="accordion-item border mb-3 bg-white shadow-sm" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeAccordion === index ? '' : 'collapsed'} fw-bold py-4 text-dark`}
                      type="button"
                      onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                      style={{
                        backgroundColor: activeAccordion === index ? 'rgba(13, 110, 253, 0.05)' : 'white'
                      }}
                    >
                      <div className="d-flex align-items-center w-100">
                        <div className={`bg-${categories.find(c => c.id === faq.category)?.variant} bg-opacity-10 p-2 rounded-circle me-3 flex-shrink-0`}>
                          <i className={`bi ${categories.find(c => c.id === faq.category)?.icon} text-${categories.find(c => c.id === faq.category)?.variant}`}></i>
                        </div>
                        <span className="me-auto text-start">{faq.question}</span>
                      </div>
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                  >
                    <div className="accordion-body py-4">
                      <p className="text-muted">{faq.answer}</p>
                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <div className="d-flex gap-2">
                          <span className="badge bg-light border text-dark">#MQL5</span>
                          <span className="badge bg-light border text-dark">#MT5</span>
                          <span className="badge bg-light border text-dark">#Cryptocurrency</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <small className="text-muted me-3">
                            <i className="bi bi-clock me-1"></i>
                            Last updated: Dec 2023
                          </small>
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-bookmark me-1"></i>
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MQL5 Stats */}
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-lg-10">
            <div className="row g-4">
              <div className="col-md-4 text-center">
                <div className="border rounded-3 p-4 bg-white shadow-sm">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="bi bi-code-slash text-primary fs-4"></i>
                  </div>
                  <h3 className="fw-bold text-dark mb-2">MQL5 Experts</h3>
                  <p className="text-muted mb-0">Dedicated MQL5 developers on support team</p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="border rounded-3 p-4 bg-white shadow-sm">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="bi bi-robot text-success fs-4"></i>
                  </div>
                  <h3 className="fw-bold text-dark mb-2">24/7 Uptime</h3>
                  <p className="text-muted mb-0">VPS-recommended for continuous trading</p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="border rounded-3 p-4 bg-white shadow-sm">
                  <div className="bg-warning bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="bi bi-cpu text-warning fs-4"></i>
                  </div>
                  <h3 className="fw-bold text-dark mb-2">Low Latency</h3>
                  <p className="text-muted mb-0">Optimized for high-speed execution</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support CTA */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="border border-primary border-2 rounded-3 p-4 bg-white text-center shadow">
              <div className="mb-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                  <i className="bi bi-headset text-primary fs-3"></i>
                </div>
                <h4 className="fw-bold text-dark mb-2">MQL5 Technical Support</h4>
                <p className="text-muted mb-3">
                  Need help with MT5 installation, EA configuration, or trading setup?
                </p>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <div className="border rounded-2 p-3">
                    <i className="bi bi-chat-dots text-primary fs-4 d-block mb-2"></i>
                    <div className="fw-bold text-dark small">Live Chat</div>
                    <div className="text-muted small">MT5 Experts Online</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border rounded-2 p-3">
                    <i className="bi bi-envelope text-success fs-4 d-block mb-2"></i>
                    <div className="fw-bold text-dark small">Email Support</div>
                    <div className="text-muted small">24h Response Time</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border rounded-2 p-3">
                    <i className="bi bi-camera-video text-info fs-4 d-block mb-2"></i>
                    <div className="fw-bold text-dark small">Screen Share</div>
                    <div className="text-muted small">Remote Assistance</div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                <button className="btn btn-primary btn-lg px-4">
                  <i className="bi bi-chat-left-text me-2"></i>
                  Start Live Chat
                </button>
                <button className="btn btn-outline-dark btn-lg px-4">
                  <i className="bi bi-telephone me-2"></i>
                  Schedule Call
                </button>
              </div>

              <div className="mt-4 pt-3 border-top">
                <div className="row g-3">
                  <div className="col-md-6">
                    <small className="text-muted">
                      <i className="bi bi-clock me-1"></i>
                      Support Hours: 24/7
                    </small>
                  </div>
                  <div className="col-md-6">
                    <small className="text-muted">
                      <i className="bi bi-lightning me-1"></i>
                      Avg Response: 5 minutes
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <a href="#" className="text-decoration-none text-dark d-flex align-items-center hover-lift">
                <i className="bi bi-file-earmark-code text-primary me-2"></i>
                <span>MQL5 Documentation</span>
              </a>
              <a href="#" className="text-decoration-none text-dark d-flex align-items-center hover-lift">
                <i className="bi bi-youtube text-danger me-2"></i>
                <span>MT5 Setup Videos</span>
              </a>
              <a href="#" className="text-decoration-none text-dark d-flex align-items-center hover-lift">
                <i className="bi bi-people text-success me-2"></i>
                <span>Trader Community</span>
              </a>
              <a href="#" className="text-decoration-none text-dark d-flex align-items-center hover-lift">
                <i className="bi bi-github text-dark me-2"></i>
                <span>MQL5 Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .bg-white {
          background-color: #ffffff !important;
        }
        
        .hover-lift {
          transition: all 0.2s ease;
        }
        
        .hover-lift:hover {
          color: #0d6efd !important;
          transform: translateY(-2px);
        }
        
        .accordion-button:not(.collapsed) {
          background-color: rgba(13, 110, 253, 0.05) !important;
          color: #212529 !important;
        }
        
        .accordion-button:focus {
          box-shadow: none;
          border-color: #0d6efd;
        }
        
        .shadow-sm {
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
        }
        
        .shadow {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
        
        .border-secondary {
          border-color: #dee2e6 !important;
        }
        
        @media (max-width: 768px) {
          .btn {
            padding: 0.375rem 0.75rem !important;
            font-size: 0.875rem !important;
          }
          
          .display-5 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FaqSection;