import "./CollegeSection.css";

function CollegeSection() {
  const features = [
    {
      number: "01",
      icon: "▧",
      label: "VERIFIED PROFILE",
      title: "Build your college profile",
      description:
        "Showcase your courses, campus, placements, and achievements in one structured profile that students and recruiters can discover.",
      badges: ["NAAC A+ Grade", "NIRF Rank"],
      color: "green",
    },
    {
      number: "02",
      icon: "◎",
      label: "DIRECT DISCOVERY",
      title: "Students discover and connect",
      description:
        "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admissions team.",
      badges: ["Direct Enquiries", "STUDENT CONNECT"],
      color: "blue",
    },
    {
      number: "03",
      icon: "♧",
      label: "CAMPUS RECRUITING",
      title: "Recruiters discover your College",
      description:
        "Companies hiring fresh talent can discover your college, explore your talent pool, and connect with your placement team.",
      badges: ["100+ Hiring Partners", "Connect Directly"],
      color: "purple",
    },
    {
      number: "04",
      icon: "▤",
      label: "LIVE PLACEMENTS",
      title: "Track placements in real time",
      description:
        "Track student interviews, offers, and placements from one centralized dashboard.",
      badges: ["LIVE PLACEMENTS", "Student-Interview-Offer"],
      color: "red",
    },
  ];

  return (
    <section className="college-section">
      <div className="college-container">
        <div className="college-left">
          <span className="college-label">02 · FOR COLLEGES</span>

          <h2>
            Get Discovered
            <br />
            by Students and
            <br />
            <span>Recruiters.</span>
          </h2>

          <p className="college-description">
            Put your college in front of students searching for the right
            course and recruiters looking for the right talent. CampusPe
            helps you build your presence, attract enquiries and connect
            with opportunities.
          </p>

          <button className="college-button">
            List Your College <span>→</span>
          </button>
        </div>

        <div className="college-cards">
          {features.map((feature) => (
            <div className="college-card" key={feature.number}>
              <div className="college-card-content">
                <div className="college-card-main">
                  <div className="college-card-label">
                    <span className="college-number">{feature.number}</span>
                    <span>{feature.label}</span>
                  </div>

                  <div className="college-card-heading">
                    <span className="college-card-icon">{feature.icon}</span>
                    <h3>{feature.title}</h3>
                  </div>

                  <p>{feature.description}</p>
                </div>

                <div className="college-card-badges">
                  {feature.badges.map((badge) => (
                    <span
                      className={`college-badge ${feature.color}`}
                      key={badge}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollegeSection;