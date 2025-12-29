{/* Two Boxes at Bottom - FULL CONTROL */}
<div style={{
  width: '100%',
  padding: '0 40px',
  marginTop: '3rem',
  marginBottom: '2rem'
}}>
  <div style={{
    display: 'flex',
    gap: '30px',
    justifyContent: 'center'
  }}>
    
    {/* Left Box: Newsletter - ENLARGED */}
    <div style={{
      flex: '1',
      minWidth: '600px',  // Increased from 500px
      maxWidth: '800px'   // Increased from 700px
    }}>
      <div className="card border-primary bg-white" style={{
        minHeight: '380px',
        borderRadius: '10px'
      }}>
        <div className="card-body p-4 d-flex flex-column">

          <div className="d-flex align-items-center mb-3">
            <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
              <i className="bi bi-bell-fill text-black fs-4"></i>
            </div>
            <div>
              <h4 className="fw-bold mb-1 text-black">Stay Updated</h4>
              <p className="text-black small mb-0">Get the latest news in your inbox</p>
            </div>
          </div>

          <p className="text-black mb-4">
            Subscribe to our newsletter and be the first to know about new features, updates, and trading insights.
          </p>

          <div className="mt-auto">
            <div className="input-group mb-3">
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
          </div>
        </div>
      </div>
    </div>

    {/* Right Box: Roadmap - Slightly Reduced */}
    <div style={{
      flex: '1',
      minWidth: '450px',  // Reduced from 500px
      maxWidth: '700px'
    }}>
      <div className="card border-warning bg-white" style={{
        minHeight: '380px',
        borderRadius: '10px'
      }}>
        <div className="card-body p-4 d-flex flex-column">

          <div className="d-flex align-items-center mb-3">
            <div className="bg-warning bg-opacity-10 p-2 rounded-circle me-3">
              <i className="bi bi-map text-warning fs-4"></i>
            </div>
            <div>
              <h4 className="fw-bold mb-1 text-black">What's Coming Next</h4>
              <p className="text-black small mb-0">Upcoming features roadmap</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="d-flex align-items-start mb-3">
              <div className="text-warning me-3 mt-1"><i className="bi bi-circle-fill"></i></div>
              <div>
                <h6 className="fw-bold mb-1 text-black">AI Strategy Builder</h6>
                <p className="text-black small mb-0">Create custom trading strategies with AI assistance</p>
                <small className="text-warning"><i className="bi bi-calendar me-1"></i> Q3 2025</small>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <div className="text-info me-3 mt-1"><i className="bi bi-circle-fill"></i></div>
              <div>
                <h6 className="fw-bold mb-1 text-black">Social Trading</h6>
                <p className="text-black small mb-0">Follow top traders and copy their strategies</p>
                <small className="text-info"><i className="bi bi-calendar me-1"></i> Q4 2025</small>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div className="text-success me-3 mt-1"><i className="bi bi-circle-fill"></i></div>
              <div>
                <h6 className="fw-bold mb-1 text-black">DeFi Integration</h6>
                <p className="text-black small mb-0">Connect with decentralized finance protocols</p>
                <small className="text-success"><i className="bi bi-calendar me-1"></i> Q1 2026</small>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <button className="btn btn-outline-warning w-100">
              <i className="bi bi-clock-history me-2"></i>
              View Full Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>