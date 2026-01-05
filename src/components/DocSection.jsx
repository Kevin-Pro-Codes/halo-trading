import React from 'react';

const DocSection = () => {
  const botFeatures = [
    {
      id: 1,
      title: "Trading Strategies",
      icon: "bi-lightning-charge",
      color: "primary",
      items: [
        { title: "Grid Trading Bot", description: "Automated grid/martingale strategies", difficulty: "Easy", profit: "Medium Risk" },
        { title: "Arbitrage Bot", description: "Multi-exchange price difference capture", difficulty: "Advanced", profit: "Low Risk" },
        { title: "Trend Following EA", description: "Follow market trends with indicators", difficulty: "Medium", profit: "High Risk" },
        { title: "Scalping Bot", description: "High-frequency small profit trades", difficulty: "Hard", profit: "Very High Risk" }
      ]
    },
    {
      id: 2,
      title: "Risk Management",
      icon: "bi-shield-check",
      color: "success",
      items: [
        { title: "Auto Stop-Loss", description: "Dynamic stop-loss calculation", level: "Essential", protection: "High" },
        { title: "Take Profit Systems", description: "Multiple take profit targets", level: "Advanced", protection: "Medium" },
        { title: "Position Sizing", description: "Auto-calculate optimal position size", level: "Essential", protection: "High" },
        { title: "Drawdown Control", description: "Maximum drawdown limits", level: "Pro", protection: "Very High" }
      ]
    },
    {
      id: 3,
      title: "Market Analysis",
      icon: "bi-graph-up",
      color: "warning",
      items: [
        { title: "Technical Indicators", description: "50+ built-in indicators", signals: "All Timeframes", accuracy: "95%" },
        { title: "Market Sentiment", description: "Real-time sentiment analysis", signals: "Hourly", accuracy: "85%" },
        { title: "Volume Analysis", description: "Volume profile and analysis", signals: "All Markets", accuracy: "90%" },
        { title: "Pattern Recognition", description: "Auto-detect chart patterns", signals: "Daily/4H", accuracy: "88%" }
      ]
    },
    {
      id: 4,
      title: "Automation Features",
      icon: "bi-robot",
      color: "info",
      items: [
        { title: "24/7 Trading", description: "Non-stop automated trading", availability: "Always On", reliability: "99.9%" },
        { title: "Multi-Pair Trading", description: "Trade multiple pairs simultaneously", pairs: "Unlimited", speed: "0.2s" },
        { title: "Auto-Rebalancing", description: "Auto rebalance portfolio", frequency: "Daily", optimization: "Auto" },
        { title: "News Filter", description: "Avoid trading during high impact news", filter: "Economic Calendar", protection: "High" }
      ]
    }
  ];

  const performanceStats = [
    { metric: "Win Rate", value: "72%", change: "+2.5%", color: "success" },
    { metric: "Avg Monthly Return", value: "8.5%", change: "+1.2%", color: "primary" },
    { metric: "Max Drawdown", value: "15%", change: "-3%", color: "warning" },
    { metric: "Sharpe Ratio", value: "1.8", change: "+0.3", color: "info" },
    { metric: "Trades/Month", value: "240", change: "+45", color: "success" },
    { metric: "Success Rate", value: "95%", change: "+2%", color: "primary" }
  ];

  const botConfigurations = [
    {
      name: "Conservative Bot",
      risk: "Low",
      return: "5-8% monthly",
      trades: "15-20/month",
      style: "Swing Trading",
      recommended: "Beginners",
      color: "success"
    },
    {
      name: "Balanced Bot",
      risk: "Medium",
      return: "10-15% monthly",
      trades: "40-60/month",
      style: "Day Trading",
      recommended: "Intermediate",
      color: "primary"
    },
    {
      name: "Aggressive Bot",
      risk: "High",
      return: "20-30% monthly",
      trades: "100-150/month",
      style: "Scalping",
      recommended: "Experts",
      color: "danger"
    }
  ];

  const quickActions = [
    { title: "Launch New Bot", icon: "bi-play-circle", color: "success", action: "Start Trading" },
    { title: "Backtest Strategy", icon: "bi-speedometer2", color: "primary", action: "Test Performance" },
    { title: "Monitor Portfolio", icon: "bi-eye", color: "info", action: "View Dashboard" },
    { title: "Risk Settings", icon: "bi-sliders", color: "warning", action: "Adjust Risk" }
  ];

  const exchangeConnections = [
    { name: "Binance", status: "Connected", latency: "0.1s", color: "success" },
    { name: "Bybit", status: "Connected", latency: "0.2s", color: "success" },
    { name: "OKX", status: "Connected", latency: "0.15s", color: "success" },
    { name: "KuCoin", status: "Connected", latency: "0.18s", color: "success" },
    { name: "Gate.io", status: "Connected", latency: "0.25s", color: "success" },
    { name: "Bitfinex", status: "Connected", latency: "0.22s", color: "success" }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                <i className="bi bi-robot text-primary fs-3"></i>
              </div>
              <h2 className="display-5 fw-bold mb-0">Trading Bot Features</h2>
            </div>
            <p className="lead text-muted mb-4">
              Explore the powerful capabilities of our automated trading system. Configure, optimize, and deploy profitable strategies.
            </p>
          </div>
        </div>

        {/* Performance Dashboard */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="bg-white rounded-3 shadow-sm p-4">
              <h4 className="fw-bold mb-3 text-center">
                <i className="bi bi-speedometer2 text-primary me-2"></i>
                Live Performance Dashboard
              </h4>
              <div className="row g-3">
                {performanceStats.map((stat, index) => (
                  <div key={index} className="col-6 col-md-4 col-lg-2">
                    <div className="text-center p-3 border rounded-3">
                      <div className="small text-muted mb-1">{stat.metric}</div>
                      <div className={`display-6 fw-bold text-${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className={`small ${stat.change.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                        <i className={`bi ${stat.change.startsWith('+') ? 'bi-arrow-up' : 'bi-arrow-down'} me-1`}></i>
                        {stat.change} this month
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bot Features Categories */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <h4 className="fw-bold mb-4 text-center">Bot Capabilities</h4>
            <div className="row g-4">
              {botFeatures.map((category) => (
                <div key={category.id} className="col-md-6 col-lg-3">
                  <div className="border border-dark rounded-3 h-100 p-4 d-flex flex-column bg-white shadow-sm">
                    <div className="mb-3">
                      <div className={`bg-${category.color} bg-opacity-10 p-3 rounded-circle d-inline-block mb-3`}>
                        <i className={`bi ${category.icon} text-${category.color} fs-4`}></i>
                      </div>
                      <h5 className="fw-bold mb-2">{category.title}</h5>
                    </div>
                    
                    <div className="mb-3 flex-grow-1">
                      {category.items.map((item, index) => (
                        <div key={index} className="mb-3">
                          <div className="fw-bold small mb-1 d-flex justify-content-between">
                            <span>{item.title}</span>
                            {item.difficulty && (
                              <span className={`badge ${
                                item.difficulty === 'Easy' ? 'bg-success' :
                                item.difficulty === 'Medium' ? 'bg-warning' :
                                item.difficulty === 'Hard' ? 'bg-danger' : 'bg-info'
                              }`}>
                                {item.difficulty}
                              </span>
                            )}
                          </div>
                          <div className="text-muted small mb-2">{item.description}</div>
                          {item.profit && (
                            <div className="d-flex justify-content-between align-items-center">
                              <small className="text-muted">Risk Level:</small>
                              <small className="fw-bold">{item.profit}</small>
                            </div>
                          )}
                          {index < category.items.length - 1 && <hr className="my-3" />}
                        </div>
                      ))}
                    </div>
                    
                    <button className="btn btn-outline-primary w-100 mt-auto">
                      <i className="bi bi-gear me-2"></i>
                      Configure Settings
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Bot Configurations */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <h4 className="fw-bold mb-3 text-center">Recommended Bot Configurations</h4>
            <div className="row g-4">
              {botConfigurations.map((config, index) => (
                <div key={index} className="col-md-4">
                  <div className={`border border-${config.color} rounded-3 p-4 h-100 bg-white`}>
                    <div className="text-center mb-3">
                      <h5 className="fw-bold mb-1">{config.name}</h5>
                      <span className={`badge bg-${config.color}`}>
                        {config.risk} Risk
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <small className="text-muted">Monthly Return:</small>
                        <small className="fw-bold text-success">{config.return}</small>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <small className="text-muted">Trades/Month:</small>
                        <small className="fw-bold">{config.trades}</small>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <small className="text-muted">Trading Style:</small>
                        <small className="fw-bold">{config.style}</small>
                      </div>
                      <div className="d-flex justify-content-between">
                        <small className="text-muted">Recommended For:</small>
                        <small className="fw-bold">{config.recommended}</small>
                      </div>
                    </div>
                    
                    <button className={`btn btn-${config.color} w-100`}>
                      <i className="bi bi-play-circle me-2"></i>
                      Deploy This Bot
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exchange Connections */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="bg-white rounded-3 shadow-sm p-4">
              <h4 className="fw-bold mb-3 text-center">
                <i className="bi bi-arrow-left-right text-primary me-2"></i>
                Exchange Connections
              </h4>
              <div className="row g-2">
                {exchangeConnections.map((exchange, index) => (
                  <div key={index} className="col-6 col-md-4 col-lg-2">
                    <div className="border rounded-2 p-3 text-center">
                      <div className="fw-bold mb-1">{exchange.name}</div>
                      <div className={`badge bg-${exchange.color} mb-2`}>
                        {exchange.status}
                      </div>
                      <div className="small text-muted">
                        Latency: {exchange.latency}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

    {/* Quick Actions - Fixed */}
<div className="row justify-content-center mb-4">
  <div className="col-lg-8">
    <h4 className="fw-bold mb-4 text-center">Quick Actions</h4>
    <div className="row g-4">
      {quickActions.map((action, index) => (
        <div key={index} className="col-6 col-md-3">
          <div className="border rounded-3 p-4 text-center h-100 bg-white shadow-sm">
            {/* Fixed circle - properly sized and centered */}
            <div 
              className={`bg-${action.color} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
              style={{
                width: '80px',
                height: '80px'
              }}
            >
              <i className={`bi ${action.icon} text-${action.color} fs-4`}></i>
            </div>
            
            <h6 className="fw-bold mb-2">{action.title}</h6>
            
            <button className={`btn btn-${action.color} btn-sm w-100 mt-3 px-3 py-2`}>
              <i className={`bi ${action.icon} me-2`}></i>
              {action.action}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        {/* Trading Schedule Info */}
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="bg-white rounded-3 shadow-sm p-4 text-center">
              <h5 className="fw-bold mb-3">
                <i className="bi bi-clock-history text-primary me-2"></i>
                Trading Schedule
              </h5>
              <div className="row g-3 mb-3">
                <div className="col-6">
                  <div className="p-3 border rounded-3">
                    <div className="fw-bold text-success">Active Hours</div>
                    <div className="display-6 fw-bold">24/7</div>
                    <small className="text-muted">Non-stop trading</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 border rounded-3">
                    <div className="fw-bold text-primary">Market Coverage</div>
                    <div className="display-6 fw-bold">50+</div>
                    <small className="text-muted">Exchanges</small>
                  </div>
                </div>
              </div>
              <div className="alert alert-info mb-0">
                <i className="bi bi-info-circle me-2"></i>
                Bots automatically adjust for market holidays and low-liquidity periods
              </div>
            </div>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <div className="alert alert-warning text-center small">
              <i className="bi bi-exclamation-triangle me-2"></i>
              <strong>Risk Warning:</strong> Trading cryptocurrencies involves substantial risk of loss. 
              Past performance does not guarantee future results. Only trade with money you can afford to lose.
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .display-6 {
          font-size: 2rem;
        }
        
        @media (max-width: 768px) {
          .display-6 {
            font-size: 1.5rem;
          }
        }
        
        .border-dark {
          border-color: #dee2e6 !important;
        }
        
        .bg-opacity-10 {
          background-color: rgba(13, 110, 253, 0.1) !important;
        }
        
        .shadow-sm {
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
        }
      `}</style>
    </section>
  );
};

export default DocSection;