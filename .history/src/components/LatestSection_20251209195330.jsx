{/* Close Bootstrap container to break out */}
</div> {/* Close container-fluid */}
</section> {/* Close section */}

{/* Two Boxes - OUTSIDE BOOTSTRAP CONSTRAINTS */}
<div style={{
  width: '100vw',
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
  background: '#000',
  padding: '3rem 0'
}}>
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    padding: '0 60px',
    maxWidth: '1400px',
    margin: '0 auto'
  }}>
    
    {/* Left Box: Newsletter */}
    <div style={{
      flex: '0 0 45%',
      minWidth: '550px',
      maxWidth: '650px'
    }}>
      <div className="card border-primary bg-white" style={{
        minHeight: '400px',
        borderRadius: '10px',
        width: '100%'
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

    {/* Right Box: Roadmap */}
    <div style={{
      flex: '0 0 45%',
      minWidth: '550px',
      maxWidth: '650px'
    }}>
      <div className="card border-warning bg-white" style={{
        minHeight: '400px',
        borderRadius: '10px',
        width: '100%'
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

{/* Reopen Bootstrap container if you have more content */}
<section className="py-5 bg-dark text-white">
<div className="container-fluid px-20">