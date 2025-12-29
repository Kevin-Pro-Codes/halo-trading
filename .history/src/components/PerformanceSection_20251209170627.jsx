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
      description: "Average daily return"
    },
    { 
      title: "Win Rate", 
      value: "68%", 
      change: "+2.1%", 
      icon: "bi-trophy",
      color: "primary",
      trend: "up",
      description: "Profitable trades"
    },
    { 
      title: "Max Drawdown", 
      value: "-5.1%", 
      change: "-0.8%", 
      icon: "bi-arrow-down-right",
      color: "danger",
      trend: "down",
      description: "Maximum decline"
    },
    { 
      title: "Sharpe Ratio", 
      value: "1.42", 
      change: "+0.12", 
      icon: "bi-speedometer2",
      color: "warning",
      trend: "up",
      description: "Risk-adjusted return"
    },
    { 
      title: "Trades/Day", 
      value: "14", 
      change: "+3", 
      icon: "bi-arrow-repeat",
      color: "info",
      trend: "up",
      description: "Daily volume"
    },
    { 
      title: "Profit Factor", 
      value: "1.78", 
      change: "+0.15", 
      icon: "bi-cash-coin",
      color: "success",
      trend: "up",
      description: "Profit vs loss"
    }
  ];

  const performanceTrends = [
    { period: "Last 24h", value: "+1.8%", color: "success" },
    { period: "Last 7 days", value: "+9.2%", color: "success" },
    { period: "Last 30 days", value: "+24.6%", color: "success" },
    { period: "All time", value: "+312.4%", color: "success" }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Performance Metrics</h2>
          <p className="text-muted">Real-time trading performance analytics</p>
        </div>

        {/* Performance Summary */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="bg-white border rounded-3 p-4 shadow-sm">
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
                <div className="col-md-4 text-md-end">
                  <button className="btn btn-primary">
                    <i className="bi bi-download me-2"></i>
                    Export Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="d-flex flex-wrap justify-content-center gap-4">
              {metrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-3 shadow-sm p-4"
                  style={{width: '200px'}}
                >
                  <div className="text-center">
                    <div className={`bg-${metric.color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                         style={{width: '50px', height: '50px'}}>
                      <i className={`bi ${metric.icon} text-${metric.color}`}></i>
                    </div>
                    
                    <div className="fw-bold mb-1">{metric.title}</div>
                    <div className={`fs-3 fw-bold text-${metric.color} mb-2`}>
                      {metric.value}
                    </div>
                    
                    <div className={`badge bg-${metric.trend === 'up' ? 'success' : 'danger'} bg-opacity-10 text-${metric.trend === 'up' ? 'success' : 'danger'}`}>
                      {metric.trend === 'up' ? '↗' : '↘'} {metric.change}
                    </div>
                    
                    <div className="text-muted small mt-2">
                      {metric.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Trends */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="bg-white border rounded-3 p-4 shadow-sm">
              <h4 className="fw-bold mb-4 text-center">Performance Trends</h4>
              <div className="row">
                {performanceTrends.map((trend, index) => (
                  <div key={index} className="col-6 col-md-3 mb-3">
                    <div className="text-center p-3">
                      <div className="text-muted small mb-1">{trend.period}</div>
                      <div className={`fs-4 fw-bold text-${trend.color}`}>
                        {trend.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <button className="btn btn-primary btn-lg">
              <i className="bi bi-graph-up-arrow me-2"></i>
              View Detailed Analytics
            </button>
            <button className="btn btn-outline-primary btn-lg">
              <i className="bi bi-download me-2"></i>
              Download Report
            </button>
          </div>
          <p className="text-muted small mt-3">
            <i className="bi bi-info-circle me-1"></i>
            Metrics updated in real-time
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;