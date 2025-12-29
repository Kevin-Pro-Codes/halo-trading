import React from 'react';

const DocSection = () => {
  const featuredGuides = [
    {
      title: "Complete Trading Bot Setup",
      description: "Step-by-step guide to configure your first trading bot",
      difficulty: "Beginner",
      time: "25 minutes",
      updated: "2 days ago",
      views: "1.2k"
    },
    {
      title: "Advanced AI Strategy Configuration",
      description: "Learn to optimize AI parameters for maximum profit",
      difficulty: "Advanced",
      time: "45 minutes",
      updated: "1 week ago",
      views: "845"
    },
    {
      title: "Multi-Exchange Arbitrage Setup",
      description: "Configure automated arbitrage across multiple exchanges",
      difficulty: "Intermediate",
      time: "35 minutes",
      updated: "3 days ago",
      views: "2.1k"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Featured Guides - IMPROVED responsive layout */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="card border-primary bg-primary bg-opacity-5">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-star-fill text-primary fs-4"></i>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-1">Featured Guides</h4>
                    <p className="text-muted mb-0">Most popular and highly recommended tutorials</p>
                  </div>
                </div>
                
                {/* Responsive grid: 1 on small, 2 on md, 3 on lg+ */}
                <div className="row g-4">
                  {featuredGuides.map((guide, index) => (
                    <div 
                      key={index} 
                      className="col-12 col-md-6 col-lg-4"  // This is the key fix!
                    >
                      <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4 d-flex flex-column">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <span className={`badge ${
                              guide.difficulty === 'Beginner' ? 'bg-success' :
                              guide.difficulty === 'Intermediate' ? 'bg-warning' : 'bg-danger'
                            } bg-opacity-10 text-${
                              guide.difficulty === 'Beginner' ? 'success' :
                              guide.difficulty === 'Intermediate' ? 'warning' : 'danger'
                            }`}>
                              {guide.difficulty}
                            </span>
                            <small className="text-muted">
                              <i className="bi bi-eye me-1"></i>
                              {guide.views}
                            </small>
                          </div>
                          
                          <h5 className="fw-bold mb-3">{guide.title}</h5>
                          <p className="text-muted small mb-4 flex-grow-1">{guide.description}</p>
                          
                          <div className="mt-auto">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <div>
                                <small className="text-muted">
                                  <i className="bi bi-clock me-1"></i>
                                  {guide.time}
                                </small>
                              </div>
                              <small className="text-muted">
                                Updated: {guide.updated}
                              </small>
                            </div>
                            <button className="btn btn-outline-primary w-100">
                              Start Reading
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocSection;