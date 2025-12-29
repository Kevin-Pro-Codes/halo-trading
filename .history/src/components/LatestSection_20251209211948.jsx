{/* Two Boxes at Bottom - ALIGNED SIDE BY SIDE */}
<div className="row justify-content-center mt-4 mt-lg-5">
  <div className="col-12 col-lg-10">
    <div className="d-flex flex-column flex-lg-row justify-content-center align-items-stretch gap-3 gap-lg-4">
      
      {/* Left Box: Newsletter - Custom width */}
      <div style={{
        flex: '1 1 auto',
        minWidth: '400px',
        maxWidth: '700px'
      }}>
        <div className="card border-warning bg-white h-100" style={{
          minHeight: '380px',
          borderRadius: '10px'
        }}>
          <div className="card-body p-3 p-lg-4 d-flex flex-column">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                <i className="bi bi-bell-fill text-black fs-4"></i>
              </div>
              <div>
                <h4 className="fw-bold mb-1 text-black fs-5 fs-lg-4">Stay Updated</h4>
                <p className="text-black small mb-0">Get the latest news in your inbox</p>
              </div>
            </div>

            <p className="text-black mb-3 mb-lg-4 flex-grow-1">
              Subscribe to our newsletter and be the first to know about new features, updates, and trading insights.
            </p>

            <div className="mt-auto">
              <div className="input-group mb-2 mb-lg-3">
                <input
                  type="email"
                  className="form-control border-secondary"
                  placeholder="Your email address"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
              <small className="text-black">
                <i className="bi bi-shield-check me-1"></i>
                We respect your privacy. Unsubscribe anytime.
              </small>
              
              {/* View Complete Update History Button - RESPONSIVE */}
              <div className="mt-3 mt-lg-4 pt-3 border-top border-secondary">
                <button className="btn btn-outline-primary w-100 px-3 px-lg-4 py-2">
                  <i className="bi bi-clock-history me-2"></i>
                  <span className="d-none d-md-inline">View Complete Update History</span>
                  <span className="d-md-none">All Updates</span>
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Box: Roadmap - Custom width */}
      <div style={{
        flex: '1 1 auto',
        minWidth: '400px',
        maxWidth: '500px'
      }}>
        <div className="card border-warning bg-white h-100" style={{
          minHeight: '380px',
          borderRadius: '10px'
        }}>
          <div className="card-body p-3 p-lg-4 d-flex flex-column">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-warning bg-opacity-10 p-2 rounded-circle me-3">
                <i className="bi bi-map text-warning fs-4"></i>
              </div>
              <div>
                <h4 className="fw-bold mb-1 text-black fs-5 fs-lg-4">What's Coming Next</h4>
                <p className="text-black small mb-0">Upcoming features roadmap</p>
              </div>
            </div>

            <div className="mb-3 mb-lg-4 flex-grow-1">
              <div className="d-flex align-items-start mb-2 mb-lg-3">
                <div className="text-warning me-2 me-lg-3 mt-1"><i className="bi bi-circle-fill small"></i></div>
                <div>
                  <h6 className="fw-bold mb-1 text-black">AI Strategy Builder</h6>
                  <p className="text-black small mb-0">Create custom trading strategies with AI assistance</p>
                  <small className="text-warning"><i className="bi bi-calendar me-1"></i> Q3 2025</small>
                </div>
              </div>

              <div className="d-flex align-items-start mb-2 mb-lg-3">
                <div className="text-info me-2 me-lg-3 mt-1"><i className="bi bi-circle-fill small"></i></div>
                <div>
                  <h6 className="fw-bold mb-1 text-black">Social Trading</h6>
                  <p className="text-black small mb-0">Follow top traders and copy their strategies</p>
                  <small className="text-info"><i className="bi bi-calendar me-1"></i> Q4 2025</small>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="text-success me-2 me-lg-3 mt-1"><i className="bi bi-circle-fill small"></i></div>
                <div>
                  <h6 className="fw-bold mb-1 text-black">DeFi Integration</h6>
                  <p className="text-black small mb-0">Connect with decentralized finance protocols</p>
                  <small className="text-success"><i className="bi bi-calendar me-1"></i> Q1 2026</small>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-2 border-top border-secondary">
              <button className="btn btn-outline-warning w-100">
                <i className="bi bi-clock-history me-2"></i>
                <span className="d-none d-sm-inline">View Full Roadmap</span>
                <span className="d-sm-none">Roadmap</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>