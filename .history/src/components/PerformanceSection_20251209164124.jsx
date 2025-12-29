import React from "react";

const PerformanceSection = () => {
  const metrics = [
    { title: "Daily ROI", value: "+2.4%" },
    { title: "Win Rate", value: "68%" },
    { title: "Max Drawdown", value: "-5.1%" },
    { title: "Sharpe Ratio", value: "1.42" },
    { title: "Trades/Day", value: "14" },
    { title: "Profit Factor", value: "1.78" },
  ];

  return (
    <section className="section-white py-5">
      <div className="section-content text-center">
        <h2 className="mb-4">Performance Metrics</h2>

        {/* Center all boxes */}
        <div className="d-flex justify-content-center flex-wrap gap-4">
          {metrics.map((m) => (
            <div
              key={m.title}
              className="gallery-item d-flex flex-column justify-content-center"
              style={{
                width: "160px",
                height: "110px",
                background: "#f8f9fa",
                borderRadius: "12px",
                padding: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <div className="fw-bold mb-1" style={{ fontSize: "15px" }}>
                {m.title}
              </div>
              <div className="text-primary" style={{ fontSize: "22px", fontWeight: 600 }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
