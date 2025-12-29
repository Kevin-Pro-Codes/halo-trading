{/* Two Boxes at Bottom - Alternative Layout */}
<div className="row justify-content-center mt-5">
  <div className="col-lg-10">
    <div className="row g-4">
      
      {/* Box 1: Newsletter */}
      <div className="col-12 col-lg-6">
        <div className="card border-primary h-100">
          <div className="card-body p-4">
            <div className="text-center mb-4">
              <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                <i className="bi bi-envelope-fill text-primary fs-3"></i>
              </div>
              <h4 className="fw-bold mb-2">Newsletter Signup</h4>
              <p className="text-muted mb-4">Never miss an update</p>
            </div>
            
            <div className="mb-3">
              <input
                type="email"
                className="form-control form-control-lg mb-3"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary btn-lg w-100">
                Subscribe Now
              </button>
            </div>
            
            <small className="text-muted">
              <i className="bi bi-info-circle me-1"></i>
              Weekly updates • No spam • Unsubscribe anytime
            </small>
          </div>
        </div>
      </div>

      {/* Box 2: Roadmap */}
      <div className="col-12 col-lg-6">
        <div className="card border-success h-100">
          <div className="card-body p-4">
            <div className="text-center mb-4">
              <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                <i className="bi bi-rocket-takeoff-fill text-success fs-3"></i>
              </div>
              <h4 className="fw-bold mb-2">Development Roadmap</h4>
              <p className="text-muted mb-4">See what we're building next</p>
            </div>
            
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-bold">AI Trading Assistant</span>
                <span className="badge bg-warning">Coming Soon</span>
              </div>
              <div className="progress mb-3" style={{height: '8px'}}>
                <div className="progress-bar bg-warning" style={{width: '75%'}}></div>
              </div>
              
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-bold">Mobile App 3.0</span>
                <span className="badge bg-info">In Progress</span>
              </div>
              <div className="progress mb-3" style={{height: '8px'}}>
                <div className="progress-bar bg-info" style={{width: '45%'}}></div>
              </div>
              
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-bold">DeFi Integration</span>
                <span className="badge bg-secondary">Planned</span>
              </div>
              <div className="progress" style={{height: '8px'}}>
                <div className="progress-bar bg-secondary" style={{width: '20%'}}></div>
              </div>
            </div>
            
            <button className="btn btn-outline-success w-100">
              View Detailed Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>