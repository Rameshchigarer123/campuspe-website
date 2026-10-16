
import "./maching.css";
const steps = [
  {
    num: "01",
    title: "Set your preferences",
    text: "Tell us what you're looking for, from colleges and courses to jobs, internships and programs.",
    tag: "Smart Match",
  },
  {
    num: "02",
    title: "Discover relevant opportunities",
    text: "Explore colleges and career opportunities matched to your profile, interests and goals.",
    tag: "AI Ranked",
  },
  {
    num: "03",
    title: "Get notified when something fits",
    text: "Get notified when a relevant college or new opportunity appears.",
    tag: "Instant Alerts",
  },
];

const filters = [
  "All",
  "Colleges",
  "Jobs",
  "Internships",
  "Freelance",
  "Part-time",
];

const listings = [
  {
    name: "IIM Bangalore",
    tag: "Top College",
    meta: "MBA · Bengaluru · ₹31L+",
    btn: "View Details",
    logo: "🏛️",
    desc: "India's premier management institute with global exposure...",
  },
  {
    name: "Product Intern",
    tag: "Internship",
    meta: "Bengaluru · Hybrid · ₹35K/mo",
    btn: "Apply Now",
    logo: "G",
    desc: "Work on real products, learn from top engineers and build...",
  },
  {
    name: "Marketing Gig",
    tag: "Freelance",
    meta: "Remote · Freelance · ₹10K - ₹25K",
    btn: "View Details",
    logo: "▧",
    desc: "Create content and help with social media campaigns...",
  },
];
export default function Matching() {
  return (
    <section className="matching">
      <div className="matching-layout">
        <div className="matching-left">
          <span className="matching-badge">
            <span>●</span> 01 · OPPORTUNITY DISCOVERY
          </span>
          <h2>
            Stop searching.
            <br />
            <span>Start getting matched.</span>
          </h2>
          <p className="matching-description">
            Tell CampusPe your skills, preferences and goals.
            We continuously monitor company career pages and job
            sources, find opportunities that match you, and notify
            you when they appear.
          </p>
          <div className="matching-steps">
            {steps.map((step) => (
              <article className="matching-step" key={step.num}>
                <span className="matching-number">{step.num}</span>
                <div className="matching-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

                <span className="matching-tag">{step.tag}</span>
              </article>
            ))}
          </div>
          <button className="matching-cta">
            Explore opportunities →
          </button>
        </div>
        <div className="matching-dashboard">
          <div className="matching-dashboard-header">
            <div className="matching-dashboard-icon">↗</div>
            <div>
              <h3>CampusPe Opportunity Feed</h3>
              <p>Colleges & opportunities matched to you</p>
            </div>
            <span className="matching-new">
              12 new matches today
            </span>
          </div>
          <div className="matching-filters">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={index === 0 ? "matching-filter active" : "matching-filter"}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="matching-listings">
            {listings.map((item) => (
              <article className="matching-listing" key={item.name}>
                <div className="matching-logo">{item.logo}</div>
                <div className="matching-listing-info">
                  <div className="matching-listing-title">
                    <h4>{item.name}</h4>
                    <span>{item.tag}</span>
                  </div>
                  <p className="matching-meta">{item.meta}</p>
                  <p className="matching-listing-desc">{item.desc}</p>
                </div>
                <button className="matching-view">
                  {item.btn}
                </button>
              </article>
            ))}
          </div>

          <div className="matching-dashboard-footer">
            <a href="#jobs">View all matched opportunities →</a>
            <span>Curated for you · Updated daily</span>
          </div>
        </div>
      </div>

      <p className="matching-note">
        ↖ A mix of colleges, jobs,
        <br />
        internships and gigs — all in one place.
      </p>
    </section>
  );
}
