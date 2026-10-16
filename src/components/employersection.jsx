import "./employersection.css";

function EmployersSection() {
  const features = [
    {
      number: "01",
      title: "Post a role in minutes",
      description:
        "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.",
      badges: ["5 Min Deployment", "500+ Campus Network"],
      color: "green",
    },
    {
      number: "02",
      title: "Receive a matched shortlist",
      description:
        "Get candidates matched to your role by skills, experience, location and hiring requirements.",
      badges: ["Zero CV Clutter", "Tier-1 Tier-3 Parity"],
      color: "purple",
    },
    {
      number: "03",
      title: "Connect with candidates directly",
      description:
        "Message, schedule interviews, and move candidates through your pipeline — all in one place.",
      badges: ["In-App Scheduling", "1-Click Video/Chat"],
      color: "blue",
    },
    {
      number: "04",
      title: "Reduce your time-to-hire",
      description:
        "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.",
      badges: ["<2 DAYS", "57% Faster Hiring"],
      color: "green",
    },
  ];

  return (
    <section className="employers-section">
      <div className="employers-container">
        <div className="employers-left">
          <span className="employers-label">
            <span className="employers-label-dot">●</span>
            03 · FOR EMPLOYERS
          </span>

          <h2>
            Stop running
            <br />
            campus drives.
            <br />
            <span>Start hiring the right</span>
            <br />
            <span>people.</span>
          </h2>

          <p className="employers-description">
            Post a role in minutes and reach relevant candidates without the
            time, travel and coordination of traditional hiring. CampusPe
            helps you discover, match and connect with talent from colleges
            and beyond.
          </p>

          <button className="employers-button">
            Post a Job <span>→</span>
          </button>
        </div>

        <div className="employers-cards">
          {features.map((feature) => (
            <article className="employer-card" key={feature.number}>
              <div className="employer-card-number">
                {feature.number}
              </div>

              <div className="employer-card-main">
                <div className="employer-card-title-row">
                  <h3>{feature.title}</h3>
                  <span className="employer-setup-tag">
                    INSTANT SETUP
                  </span>
                </div>

                <p>{feature.description}</p>
              </div>

              <div className="employer-card-badges">
                {feature.badges.map((badge, index) => (
                  <span
                    className={`employer-badge ${feature.color} ${
                      index === 1 ? "secondary" : ""
                    } ${
                      feature.number === "04" && index === 0
                        ? "highlight"
                        : ""
                    }`}
                    key={badge}
                  >
                    {feature.number === "01" && index === 0 && (
                      <span className="badge-symbol">ϟ</span>
                    )}
                    {badge}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EmployersSection;