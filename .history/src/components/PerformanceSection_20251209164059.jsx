import React from "react";

const PerformanceSection = () => {
  const metrics = [
    { 
      title: "Daily ROI", 
      value: "+2.4%", 
      change: "+0.3%", 
      icon: "bi-graph-up-arrow",
      color: "success",
      trend: "up",
      description: "Average daily return on investment"
    },
    { 
      title: "Win Rate", 
      value: "68%", 
      change: "+2.1%", 
      icon: "bi-trophy",
      color: "primary",
      trend: "up",
      description: "Percentage of profitable trades"
    },
    { 
      title: "Max Drawdown", 
      value: "-5.1%", 
      change: "-0.8%", 
      icon: "bi-arrow-down-right",
      color: "danger",
      trend: "down",
      description: "Maximum peak-to-trough decline"
    },
    { 
      title: "Sharpe Ratio", 
      value: "1.42", 
      change: "+0.12", 
      icon: "bi-speedometer2",
      color: "warning",
      trend: "up",
      description: "Risk-adjusted return metric"
    },
    { 
      title: "Trades/Day", 
      value: "14", 
      change: "+3", 
      icon: "bi-arrow-repeat",
      color: "info",
      trend: "up",
      description: "Average daily trade volume"
    },
    { 
      title: "Profit Factor", 
      value: "1.78", 
      change: "+0.15", 
      icon: "bi-cash-coin",
      color: "success",
      trend: "up",
      description: "Gross profit vs gross loss ratio"
    },
    { 
      title: "Volatility", 
      value: "12.3%", 
      change: "-1.2%", 
      icon: "bi-lightning",
      color: "warning",
      trend: "down",
      description: "Price fluctuation measure"
    },
    { 
      title: "Sortino Ratio", 
      value: "1.92", 
      change: "+0.18", 
      icon: "bi-bar-chart",
      color: "success",
      trend: "up",
      description: "Downside risk-adjusted return"
    },
    { 
      title: "Calmar Ratio", 
      value: "2.14", 
      change: "+0.22", 
      icon: "bi-shield-check",
      color: "primary",
      trend: "up",
      description: "Return vs max drawdown"
    },
    { 
      title: "Alpha", 
      value: "+4.2%", 
      change: "+0.8%", 
      icon: "bi-star",
      color: "success",
      trend: "up",
      description: "Excess return over benchmark"
    },
    { 
      title: "Beta", 
      value: "0.82", 
      change: "-0.05", 
      icon: "bi-activity",
      color: "info",
      trend: "down",
      description: "Market correlation coefficient"
    },
    { 
      title: "Win/Loss Ratio", 
      value: "1.45", 
      change: "+0.12", 
      icon: "bi-scale",
      color: "primary",
      trend: "up",
      description: "Average win vs average loss"
    }
  ];

  const timePeriods = [
    { id: "1d", label: "24H" },
    { id: "7d", label: "7D" },
    { id: "30d", label: "30D" },
    { id: "90d", label: "90D" },
    { id: "1y", label: "1Y" }
  ];

  const performanceTrends = [
    { period: "Last 24h", change: "+1.8%", color: "success" },
    { period: "Last 7 days", change: "+9.2%", color: "success" },
    { period: "Last 30 days", change: "+24.6%", color: "success" },
    { period: "All time", change: "+312.4%", color: "success" }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                <i className="bi bi-speedometer2 text-primary fs-3"></i>
              </div>
              <h2 className="display-5 fw-bold mb-0">Performance Metrics</h2>
            </div>
            <p className="lead text-muted mb-4">
              Real-time trading performance analytics and risk metrics
            </p>
          </div>
        </div>

        {/* Time Period Filter */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
              {timePeriods.map((period) => (
                <button
                  key={period.id}
                  className="btn btn-outline-primary btn-sm px-3 py-2"
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Key Performance Summary */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="card border-primary bg-primary bg-opacity-5">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h4 className="fw-bold mb-2">Overall Performance</h4>
                    <div className="d-flex align-items-center">
                      <div className="display-4 fw-bold text-success me-3">+312.4%</div>
                      <div>
                        <div className="text-success fw-bold">
                          <i className="bi bi-arrow-up-right me-1"></i>
                          All-time return
                        </div>
                        <small className="text-muted">Since account creation</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-md-end mt-3 mt-md-0">
                    <button className="btn btn-primary">
                      <i className="bi bi-download me-2"></i>
                      Export Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="row g-4">
              {metrics.map((metric, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-3">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-3">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div className={`bg-${metric.color} bg-opacity-10 p-2 rounded-circle`}>
                          <i className={`bi ${metric.icon} text-${metric.color}`}></i>
                        </div>
                        <span className={`badge bg-${metric.trend === 'up' ? 'success' : 'danger'} bg-opacity-10 text-${metric.trend === 'up' ? 'success' : 'danger'} small`}>
                          {metric.trend === 'up' ? '↗' : '↘'} {metric.change}
                        </span>
                      </div>
                      
                      <h3 className="fw-bold mb-1">{metric.value}</h3>
                      <div className="text-muted small mb-2">{metric.title}</div>
                      <div className="text-muted small">{metric.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Trends */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="card border-0 bg-white shadow-sm">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Performance Trends</h4>
                <div className="row g-3">
                  {performanceTrends.map((trend, index) => (
                    <div key={index} className="col-6 col-md-3">
                      <div className="border rounded-3 p-3 text-center">
                        <div className="text-muted small mb-1">{trend.period}</div>
                        <div className={`fs-4 fw-bold text-${trend.color}`}>
                          {trend.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk vs Return */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-success bg-success bg-opacity-5">
              <div className="card-body p-4 p-md-5">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h4 className="fw-bold mb-3">Risk vs Return Analysis</h4>
                    <div className="row">
                      <div className="col-6 mb-3">
                        <div className="text-success fw-bold fs-3">+2.4%</div>
                        <div className="text-muted small">Daily Return</div>
                      </div>
                      <div className="col-6 mb-3">
                        <div className="text-danger fw-bold fs-3">-5.1%</div>
                        <div className="text-muted small">Max Drawdown</div>
                      </div>
                      <div className="col-6">
                        <div className="text-warning fw-bold fs-3">1.42</div>
                        <div className="text-muted small">Sharpe Ratio</div>
                      </div>
                      <div className="col-6">
                        <div className="text-info fw-bold fs-3">12.3%</div>
                        <div className="text-muted small">Volatility</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center mt-4 mt-md-0">
                    <div className="position-relative d-inline-block">
                      <div className="bg-success bg-opacity-10 p-4 rounded-circle">
                        <i className="bi bi-shield-check text-success fs-1"></i>
                      </div>
                      <div className="position-absolute top-0 start-100 translate-middle">
                        <span className="badge bg-success">Optimal</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <small className="text-muted">Risk-adjusted performance</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <button className="btn btn-primary btn-lg px-4">
                <i className="bi bi-graph-up-arrow me-2"></i>
                View Detailed Analytics
              </button>
              <button className="btn btn-outline-primary btn-lg px-4">
                <i className="bi bi-download me-2"></i>
                Download Full Report
              </button>
            </div>
            <p className="text-muted small mt-3">
              <i className="bi bi-info-circle me-1"></i>
              Metrics updated in real-time • Data refresh: 5 seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;