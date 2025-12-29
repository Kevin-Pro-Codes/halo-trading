import React, { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    { 
      id: 'general', 
      name: 'General', 
      icon: 'fas fa-question-circle',
      color: 'primary'
    },
    { 
      id: 'technical', 
      name: 'Technical', 
      icon: 'fas fa-cogs',
      color: 'success'
    },
    { 
      id: 'pricing', 
      name: 'Pricing & Plans', 
      icon: 'fas fa-dollar-sign',
      color: 'warning'
    },
    { 
      id: 'security', 
      name: 'Security', 
      icon: 'fas fa-shield-alt',
      color: 'info'
    }
  ];

  const faqs = [
    {
      question: "How does the AI trading bot work?",
      answer: "Our bot uses machine learning algorithms to analyze market data in real-time. It connects to your exchange accounts via secure API keys and executes trades based on your configured strategies. The AI continuously learns from market patterns and adapts to changing conditions for optimal performance.",
      category: 'general',
      tags: ['Getting Started', 'AI']
    },
    {
      question: "Which cryptocurrency exchanges are supported?",
      answer: "We support all major exchanges including Binance, Coinbase Pro, Kraken, KuCoin, FTX, Bybit, and Bitfinex. Our platform is compatible with any exchange that provides REST API access. We're constantly adding new exchange integrations based on user demand.",
      category: 'technical',
      tags: ['Exchanges', 'Compatibility']
    },
    {
      question: "Is there a free trial or demo version available?",
      answer: "Yes! We offer a 14-day free trial with full access to all features including paper trading (simulated trading with virtual funds). No credit card required to start. After the trial, you can choose from our flexible subscription plans starting at $29/month.",
      category: 'pricing',
      tags: ['Trial', 'Pricing']
    },
    {
      question: "How secure is my exchange API access?",
      answer: "We implement bank-level security measures including end-to-end encryption, read-only API key permissions by default, and never store your API secrets on our servers. All keys are encrypted at rest and in transit. We recommend using API keys with withdrawal disabled for maximum security.",
      category: 'security',
      tags: ['Security', 'API']
    },
    {
      question: "Can I run multiple trading strategies simultaneously?",
      answer: "Absolutely! You can run up to 20 different strategies concurrently on a single account. Each strategy can have its own configuration, risk parameters, and asset allocation. Our platform includes strategy backtesting and performance analytics to help you optimize your approach.",
      category: 'technical',
      tags: ['Strategies', 'Multi-trading']
    },
    {
      question: "What is the minimum capital required to start?",
      answer: "There's no minimum requirement to use our platform. You can start trading with any amount. However, we recommend starting with at least $100 to account for exchange fees and market fluctuations. Remember: never trade more than you can afford to lose.",
      category: 'pricing',
      tags: ['Minimum', 'Capital']
    },
    {
      question: "Do you offer mobile app access?",
      answer: "Yes! We have native iOS and Android apps that provide full functionality including real-time monitoring, strategy adjustments, and performance analytics. You can also access our platform via any modern web browser on desktop or mobile.",
      category: 'general',
      tags: ['Mobile', 'Access']
    },
    {
      question: "How do you handle market volatility and flash crashes?",
      answer: "Our platform includes multiple safety features: stop-loss orders, trailing stops, take-profit targets, and circuit breakers. The AI is trained to recognize abnormal market conditions and can temporarily pause trading during extreme volatility to protect your capital.",
      category: 'technical',
      tags: ['Risk Management', 'Volatility']
    },
    {
      question: "What happens if the platform experiences downtime?",
      answer: "We maintain 99.9% uptime with redundant servers across multiple regions. In the rare event of downtime, our system will automatically pause trading and resume once connectivity is restored. You'll receive instant notifications via email and mobile app about any service interruptions.",
      category: 'general',
      tags: ['Uptime', 'Reliability']
    },
    {
      question: "Can I use custom indicators and trading scripts?",
      answer: "Yes! Advanced users can create custom indicators using our JavaScript/Python SDK. We also support integration with TradingView webhooks for custom alerts and strategies. Our community shares pre-built scripts in our marketplace.",
      category: 'technical',
      tags: ['Customization', 'Development']
    },
    {
      question: "What kind of customer support do you offer?",
      answer: "We provide 24/7 customer support via live chat, email, and scheduled video calls. All paid plans include priority support with guaranteed response times. We also offer extensive documentation, video tutorials, and weekly webinars for all users.",
      category: 'general',
      tags: ['Support', 'Help']
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees. You pay only the monthly subscription fee. Exchange trading fees still apply as per each exchange's fee schedule. We don't take any percentage of your profits. All pricing is transparent and clearly listed on our pricing page.",
      category: 'pricing',
      tags: ['Fees', 'Transparency']
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section className="py-6 bg-dark text-white">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center text-center mb-6">
          <div className="col-lg-8">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                <i className="fas fa-question-circle text-primary fs-3"></i>
              </div>
              <h2 className="display-5 fw-bold mb-0 text-white">Frequently Asked Questions</h2>
            </div>
            <p className="lead text-white-50 mb-4">
              Find answers to common questions about our trading platform, features, and services
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`btn btn-sm px-4 py-2 fw-bold ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-light'}`}
              >
                <i className="fas fa-layer-group me-2"></i>
                All Questions
              </button>
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`btn btn-sm px-4 py-2 fw-bold ${selectedCategory === cat.id ? `btn-${cat.color}` : `btn-outline-${cat.color}`}`}
                >
                  <i className={`${cat.icon} me-2`}></i>
                  {cat.name}
                </button>
              ))}
            </div>
            
            {/* Search Box */}
            <div className="row justify-content-center mb-4">
              <div className="col-md-8">
                <div className="input-group">
                  <span className="input-group-text bg-dark border-secondary">
                    <i className="fas fa-search text-white-50"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control bg-dark border-secondary text-white"
                    placeholder="Search for questions or topics..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion" id="faqAccordion">
              {filteredFaqs.map((faq, index) => {
                const categoryInfo = faqCategories.find(cat => cat.id === faq.category);
                return (
                  <div 
                    key={index} 
                    className="accordion-item border-0 mb-3 bg-dark"
                  >
                    <div className="accordion-header">
                      <button
                        className={`accordion-button collapsed fw-bold p-4 ${activeIndex === index ? 'active' : ''}`}
                        type="button"
                        onClick={() => toggleFaq(index)}
                        style={{
                          backgroundColor: activeIndex === index ? 'rgba(13, 110, 253, 0.1)' : 'transparent',
                          color: 'white',
                          borderRadius: '0.5rem',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <div className="d-flex align-items-center w-100">
                          <div className="flex-grow-1 text-start">
                            <span className="me-3">
                              <i className={`fas fa-question-circle me-2 text-${categoryInfo?.color || 'primary'}`}></i>
                              {faq.question}
                            </span>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="badge bg-opacity-10 me-3" style={{ 
                              backgroundColor: `var(--bs-${categoryInfo?.color || 'primary'})20`,
                              color: `var(--bs-${categoryInfo?.color || 'primary'})`
                            }}>
                              {categoryInfo?.name}
                            </div>
                            <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'} text-white-50`}></i>
                          </div>
                        </div>
                      </button>
                    </div>
                    
                    <div 
                      className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '0 0 0.5rem 0.5rem'
                      }}
                    >
                      <div className="accordion-body p-4">
                        <div className="row">
                          <div className="col-md-10">
                            <p className="text-white-50 mb-3">{faq.answer}</p>
                            <div className="d-flex flex-wrap gap-2 mb-3">
                              {faq.tags.map((tag, tagIndex) => (
                                <span 
                                  key={tagIndex} 
                                  className="badge bg-dark border border-secondary text-white-50"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="col-md-2 text-end">
                            <button className="btn btn-sm btn-outline-primary">
                              <i className="far fa-thumbs-up me-1"></i> Helpful
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Help */}
        <div className="row justify-content-center mt-6">
          <div className="col-lg-8">
            <div className="card bg-primary bg-opacity-10 border-primary border-2">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h4 className="text-white fw-bold mb-2">
                      <i className="fas fa-headset me-2"></i>
                      Still have questions?
                    </h4>
                    <p className="text-white-50 mb-0">
                      Our support team is available 24/7 to help you get started
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end mt-3 mt-md-0">
                    <div className="d-flex flex-column flex-md-row gap-2">
                      <button className="btn btn-primary fw-bold">
                        <i className="fas fa-comment-dots me-2"></i>
                        Live Chat
                      </button>
                      <button className="btn btn-outline-light fw-bold">
                        <i className="fas fa-envelope me-2"></i>
                        Email Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .py-6 {
          padding-top: 4rem !important;
          padding-bottom: 4rem !important;
        }
        
        .mb-6 {
          margin-bottom: 4rem !important;
        }
        
        .mt-6 {
          margin-top: 4rem !important;
        }
        
        .bg-dark {
          background-color: #0a0a0a !important;
        }
        
        .bg-opacity-10 {
          background-color: rgba(13, 110, 253, 0.1) !important;
        }
        
        .accordion-button {
          box-shadow: none !important;
          transition: all 0.3s ease;
        }
        
        .accordion-button:not(.collapsed) {
          box-shadow: 0 4px 15px rgba(13, 110, 253, 0.15) !important;
        }
        
        .accordion-button::after {
          background-image: none;
        }
        
        .badge {
          font-size: 0.75rem;
          padding: 0.35rem 0.75rem;
        }
        
        .input-group-text {
          border-right: 0;
        }
        
        .form-control {
          border-left: 0;
        }
        
        .form-control:focus {
          border-color: #495057;
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        }
        
        /* Smooth accordion animation */
        .accordion-collapse {
          transition: all 0.3s ease;
        }
        
        /* Tag hover effect */
        .badge:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
          cursor: default;
        }
        
        /* Button hover effects */
        .btn-primary {
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.3);
        }
        
        .btn-outline-light:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .py-6 {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }
          
          .display-5 {
            font-size: 2rem;
          }
          
          .accordion-button {
            padding: 1rem !important;
          }
          
          .btn {
            width: 100%;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FaqSection;