import React from "react";

const PricingSection = () => {
  const plans = [
    {
      title: "Starter",
      subtitle: "For individual traders",
      price: "$97",
      period: "/month",
      popular: false,
      color: "primary",
      features: [
        { text: "3 Exchange Connections", available: true },
        { text: "5 Active Trading Strategies", available: true },
        { text: "Basic Market Scanner", available: true },
        { text: "24-hour Data Retention", available: true },
        { text: "Email Support", available: true },
        { text: "Mobile App Access", available: false },
        { text: "Advanced Analytics", available: false },
        { text: "API Access", available: false },
        { text: "Custom Indicators", available: false },
        { text: "White-label Solution", available: false },
      ],
      button: "Start Free Trial",
      trialDays: "7-day free trial",
    },
    {
      title: "Professional",
      subtitle: "For serious traders",
      price: "$247",
      period: "/month",
      popular: true,
      color: "success",
      savings: "Save 15% annually",
      features: [
        { text: "10 Exchange Connections", available: true },
        { text: "Unlimited Trading Strategies", available: true },
        { text: "Advanced Market Scanner", available: true },
        { text: "7-day Data Retention", available: true },
        { text: "Priority Email & Chat Support", available: true },
        { text: "Mobile App Access", available: true },
        { text: "Advanced Analytics Dashboard", available: true },
        { text: "Basic API Access", available: true },
        { text: "Custom Indicators (5)", available: true },
        { text: "White-label Solution", available: false },
      ],
      button: "Get Started",
      trialDays: "14-day money-back guarantee",
    },
    {
      title: "Enterprise",
      subtitle: "For institutions & teams",
      price: "$497",
      period: "/month",
      popular: false,
      color: "warning",
      features: [
        { text: "Unlimited Exchange Connections", available: true },
        { text: "Unlimited Trading Strategies", available: true },
        { text: "Premium Market Scanner with AI", available: true },
        { text: "30-day Data Retention", available: true },
        { text: "24/7 Phone & Priority Support", available: true },
        { text: "Mobile & Desktop App", available: true },
        { text: "Enterprise Analytics Suite", available: true },
        { text: "Full API Access", available: true },
        { text: "Unlimited Custom Indicators", available: true },
        { text: "White-label Solution", available: true },
      ],
      button: "Contact Sales",
      custom: true,
    },
    {
      title: "Custom",
      subtitle: "Fully tailored solution",
      price: "Custom",
      period: "",
      popular: false,
      color: "info",
      features: [
        { text: "Dedicated Infrastructure", available: true },
        { text: "Custom Strategy Development", available: true },
        { text: "On-premise Deployment", available: true },
        { text: "Unlimited Data Retention", available: true },
        { text: "Dedicated Account Manager", available: true },
        { text: "Custom Integration Support", available: true },
        { text: "SLA: 99.9% Uptime", available: true },
        { text: "Training & Onboarding", available: true },
        { text: "Compliance & Reporting", available: true },
        { text: "Custom Contracts", available: true },
      ],
      button: "Schedule Demo",
      enterprise: true,
    },
  ];

  const yearlyDiscount = 20; // 20% discount for annual billing
  const comparisonFeatures = [
    { name: "Exchange Connections", key: 0 },
    { name: "Trading Strategies", key: 1 },
    { name: "Market Scanner", key: 2 },
    { name: "Data Retention", key: 3 },
    { name: "Support Level", key: 4 },
    { name: "Mobile App", key: 5 },
    { name: "Analytics", key: 6 },
    { name: "API Access", key: 7 },
    { name: "Custom Indicators", key: 8 },
    { name: "White-label", key: 9 },
  ];

  return (
    <section className="py-5 bg-white text-dark">
      <div className="container py-5">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3 text-dark">Simple, Transparent Pricing</h2>
            <p className="lead text-dark mb-4">
              Choose the perfect plan for your trading needs. All plans include our core features
            </p>
            
            {/* Billing Toggle */}
            <div className="d-flex justify-content-center align-items-center mb-5">
              <span className="me-3 text-dark">Monthly</span>
              <div className="form-check form-switch">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  role="switch" 
                  id="billingSwitch" 
                  style={{ width: '3rem', height: '1.5rem' }}
                />
                <label className="form-check-label ms-3 text-dark" htmlFor="billingSwitch">
                  Annual <span className="badge bg-success ms-2">Save {yearlyDiscount}%</span>
                </label>
              </div>
            </div>
            
            {/* Stats */}
            <div className="row g-4 mb-4">
              <div className="col-md-3 col-6">
                <div className="text-center">
                  <div className="fs-3 fw-bold text-primary">50+</div>
                  <div className="text-dark small">Exchanges</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center">
                  <div className="fs-3 fw-bold text-success">99.9%</div>
                  <div className="text-dark small">Uptime</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center">
                  <div className="fs-3 fw-bold text-warning">24/7</div>
                  <div className="text-dark small">Support</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center">
                  <div className="fs-3 fw-bold text-info">10k+</div>
                  <div className="text-dark small">Active Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 mb-5">
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-3 col-md-6 d-flex">
              <div className={`card border shadow-lg w-100 bg-white text-dark h-100 ${plan.popular ? 'border-success border-3' : 'border-light'}`}>
                {plan.popular && (
                  <div className="position-absolute top-0 start-50 translate-middle mt-3">
                    <span className="badge bg-success rounded-pill px-3 py-2 shadow-sm">
                      <i className="fas fa-crown me-2"></i>Most Popular
                    </span>
                  </div>
                )}
                
                <div className="card-body p-4 d-flex flex-column">
                  {/* Plan Header */}
                  <div className="text-center mb-4">
                    <h5 className="fw-bold mb-2 text-dark">{plan.title}</h5>
                    <p className="text-dark small mb-3">{plan.subtitle}</p>
                    
                    {/* Price */}
                    <div className="mb-3">
                      {plan.custom ? (
                        <div className="fs-1 fw-bold text-dark">Custom</div>
                      ) : (
                        <>
                          <span className="fs-1 fw-bold text-dark">{plan.price}</span>
                          <span className="text-dark">{plan.period}</span>
                        </>
                      )}
                    </div>
                    
                    {plan.savings && (
                      <div className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-1 mb-3">
                        {plan.savings}
                      </div>
                    )}
                    
                    {plan.trialDays && (
                      <div className="text-dark small">{plan.trialDays}</div>
                    )}
                  </div>
                  
                  {/* Features List */}
                  <div className="mb-4 flex-grow-1">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="d-flex align-items-center mb-3">
                        {feature.available ? (
                          <i className="fas fa-check-circle text-success me-3 fs-5"></i>
                        ) : (
                          <i className="fas fa-times-circle text-secondary me-3 fs-5"></i>
                        )}
                        <span className={feature.available ? "text-dark" : "text-dark-50"}>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-auto">
                    <button 
                      className={`btn btn-lg w-100 ${plan.custom || plan.enterprise ? 'btn-outline-dark' : `btn-${plan.color}`} fw-bold py-3`}
                    >
                      {plan.button}
                      {plan.custom && <i className="fas fa-arrow-right ms-2"></i>}
                    </button>
                    
                    {!plan.custom && !plan.enterprise && (
                      <div className="text-center mt-3">
                        <a href="#!" className="text-dark small text-decoration-none">
                          <i className="fas fa-info-circle me-1"></i> View detailed comparison
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
            
     
   

  
      </div>
      
      {/* Add CSS for custom styling */}
      <style jsx>{`
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 0.5rem;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
        }
        
        .form-check-input:checked {
          background-color: #198754;
          border-color: #198754;
        }
        
        .form-check-input {
          background-color: #dee2e6;
          border-color: #adb5bd;
        }
        
        .table-hover tbody tr:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        .btn {
          border-radius: 0.375rem;
        }
        
        .btn-lg {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        
        .text-dark-50 {
          color: rgba(0, 0, 0, 0.5) !important;
        }
        
        /* Make table cells more spacious */
        .table td, .table th {
          padding: 1rem 0.75rem;
        }
        
        /* Improve table readability */
        .table-hover tbody tr {
          border-bottom: 1px solid #dee2e6;
        }
        
        /* Better spacing for comparison table */
        .table-responsive {
          border-radius: 0.5rem;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default PricingSection;