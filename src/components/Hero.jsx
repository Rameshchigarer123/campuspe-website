import "./Hero.css";

const lineProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

const StudentsIcon = () => (
  <svg {...lineProps}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CollegesIcon = () => (
  <svg {...lineProps}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
);

const JobsIcon = () => (
  <svg {...lineProps}>
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect x="2" y="6" width="20" height="14" rx="2" />
  </svg>
);

const TrustedIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <clipPath id="hero-shield-left">
        <rect x="0" y="0" width="12" height="24" />
      </clipPath>
    </defs>
    <path
      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      fill="#f97316"
    />
    <path
      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      fill="#fdba74"
      clipPath="url(#hero-shield-left)"
    />
  </svg>
);

const cards = [
  {
    title: "College",
    badge: "Coming Soon",
    cta: "Join Waitlist",
    desc: "Explore colleges, courses, fees, placements & more",
    points: [
      "Search by course, location, fees",
      "Connect directly with colleges",
      "Improve student placements",
    ],
  },
  {
    title: "I'm Looking for a Job",
    badge: "Available Now",
    cta: "Explore Jobs →",
    desc: "Upload your resume. We'll find jobs that fit you.",
    points: [
      "Jobs from 1000+ sources",
      "AI powered matching",
      "WhatsApp & email alerts",
    ],
  },
  {
    title: "I'm Hiring",
    badge: "Coming Soon",
    cta: "Join Waitlist",
    desc: "Connect with colleges and find candidates, from students to graduates.",
    points: [
      "Connect directly with colleges",
      "Find the right candidates",
      "Simplify your hiring",
    ],
  },
];

const stats = [
  {
    value: "800+",
    label: "Students",
    tone: "purple",
    Icon: StudentsIcon,
  },
  {
    value: "130+",
    label: "Colleges",
    tone: "blue",
    Icon: CollegesIcon,
  },
  {
    value: "100+",
    label: "Jobs & internships",
    tone: "green",
    Icon: JobsIcon,
  },
  {
    value: "100%",
    label: "Safe & Trusted",
    tone: "orange",
    Icon: TrustedIcon,
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <span className="pill">AI-Powered Campus Assistant</span>

      <h1>
        Connect <span className="accent">10X Faster.</span>
      </h1>

      <p className="sub">
        One platform connecting students, colleges & employers, faster.
      </p>

      <h3 className="ask">What are you looking for?</h3>

      <div className="cards">
        {cards.map((c) => (
          <div className="card" key={c.title}>
            <span className="badge">{c.badge}</span>
            <h4>{c.title}</h4>
            <p className="desc">{c.desc}</p>
            <ul>
              {c.points.map((p) => (
                <li key={p}>✓ {p}</li>
              ))}
            </ul>
            <button className="btn-full">{c.cta}</button>
          </div>
        ))}
      </div>

      <div className="hero-stats">
        {stats.map(({ value, label, tone, Icon }) => (
          <div className="hero-stat" key={label}>
            <span className={`hero-stat-icon hero-stat-${tone}`}>
              <Icon />
            </span>
            <div className="hero-stat-text">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}