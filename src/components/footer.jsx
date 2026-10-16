import "./Footer.css";

const COLUMNS = [
  {
    title: "For Students",
    links: [
      {
        label: "Explore Colleges",
        href: "#",
      },
      {
        label: "Find Opportunities",
        href: "#",
      },
      {
        label: "Internships",
        href: "#",
      },
      {
        label: "Full-time Jobs",
        href: "#",
      },
      {
        label: "Part-time & Gig",
        href: "#",
      },
      {
        label: "Application Tracker",
        href: "#",
      },
    ],
  },
  {
    title: "For Colleges",
    links: [
      {
        label: "List Your College",
        href: "#",
      },
      {
        label: "Admissions",
        href: "#",
      },
      {
        label: "Fee Collection",
        href: "#",
      },
      {
        label: "Placements",
        href: "#",
      },
    ],
  },
  {
    title: "For Employers",
    links: [
      {
        label: "Post a Job",
        href: "#",
      },
      {
        label: "Find Talent",
        href: "#",
      },
      {
        label: "Campus Hiring",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About Us",
        href: "#",
      },
      {
        label: "Contact Us",
        href: "#",
      },
      {
        label: "Blogs",
        href: "#",
      },
      {
        label: "Careers",
        href: "#",
      },
    ],
  },
];

const LEGAL_LINKS = [
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Terms & Conditions",
    href: "#",
  },
  {
    label: "Refund & Cancellation Policy",
    href: "#",
  },
  {
    label: "Cookie Policy",
    href: "#",
  },
  {
    label: "Grievance Redressal",
    href: "#",
  },
  {
    label: "Job & Internship Disclaimer",
    href: "#",
  },
];

const CTA_BUTTONS = [
  {
    label: "Explore Colleges",
    href: "#",
    variant: "primary",
  },
  {
    label: "Find Opportunities",
    href: "#",
    variant: "primary",
  },
  {
    label: "List Your College",
    href: "#",
    variant: "ghost",
  },
  {
    label: "Post a Job",
    href: "#",
    variant: "ghost",
  },
];

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ArrowUpRight = () => (
  <svg {...svgProps} strokeWidth="2.4" aria-hidden="true">
    <path d="M7 17 17 7M8.5 7H17v8.5" />
  </svg>
);

const PhoneRing = () => (
  <svg {...svgProps} strokeWidth="2" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    <path d="M14.5 2.5a7 7 0 0 1 7 7M14.5 6a3.5 3.5 0 0 1 3.5 3.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg {...svgProps} strokeWidth="2" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

const MailIcon = () => (
  <svg {...svgProps} strokeWidth="2" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const LinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const Instagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const Twitter = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11.5" fill="currentColor" />
    <path
      transform="translate(4.6 5) scale(.62)"
      fill="#fff"
      d="M23.95 4.57a10 10 0 0 1-2.82.78 4.96 4.96 0 0 0 2.16-2.72c-.95.56-2 .96-3.13 1.18a4.92 4.92 0 0 0-8.38 4.48C7.69 8.1 4.07 6.13 1.64 3.16a4.82 4.82 0 0 0-.67 2.48c0 1.71.87 3.21 2.19 4.1a4.9 4.9 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.95 4.83 5 5 0 0 1-2.21.08 4.94 4.94 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54a13.99 13.99 0 0 0 7.56 2.21c9.05 0 14-7.5 14-13.98 0-.21 0-.42-.02-.63A9.94 9.94 0 0 0 24 4.59z"
    />
  </svg>
);

const Facebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.07C24 5.45 18.63.07 12 .07S0 5.45 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.39H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.95h-1.52c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.39C19.61 23.02 24 18.06 24 12.07z" />
  </svg>
);

const WhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.96L2 22l5.2-1.36A9.93 9.93 0 1 0 12.04 2zm5.8 14.06c-.24.68-1.42 1.3-1.95 1.34-.5.05-.97.24-3.27-.68-2.77-1.1-4.55-3.95-4.69-4.14-.14-.18-1.12-1.49-1.12-2.84s.7-2.01.96-2.28c.25-.28.54-.35.72-.35h.52c.17 0 .39-.03.6.46l.84 2.04c.07.17.11.36 0 .58l-.34.56-.5.53c-.15.15-.3.31-.13.6.18.3.78 1.28 1.67 2.07 1.14 1.02 2.1 1.33 2.4 1.48.3.14.47.12.65-.07l.9-1.06c.18-.25.36-.2.6-.12l1.96.93c.28.13.47.2.53.31.07.12.07.7-.18 1.4z" />
  </svg>
);

const YouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
  </svg>
);

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    Icon: LinkedIn,
  },
  {
    label: "Instagram",
    href: "#",
    Icon: Instagram,
  },
  {
    label: "Twitter",
    href: "#",
    Icon: Twitter,
  },
  {
    label: "Facebook",
    href: "#",
    Icon: Facebook,
  },
  {
    label: "WhatsApp",
    href: "#",
    Icon: WhatsApp,
  },
  {
    label: "YouTube",
    href: "#",
    Icon: YouTube,
  },
];

const Logo = () => (
  <a href="/" className="cp-logo" aria-label="CampusPe">
    <span className="cp-logo-word">
      <span className="cp-logo-u">
        C
        <svg
          className="cp-logo-cap"
          viewBox="0 0 40 26"
          fill="none"
          aria-hidden="true"
        >
          <path d="M20 2 2 9l18 7 18-7-18-7z" fill="#0b72f0" />
          <path
            d="M9 13v6c0 2 5 4.5 11 4.5s11-2.5 11-4.5v-6l-11 4.2L9 13z"
            fill="#2f9bff"
          />
          <path
            d="M36 10v9"
            stroke="#0b72f0"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      ampusPe
    </span>
    <span className="cp-logo-sub">
      Connecting Students, Institutions &amp; Employers
    </span>
  </a>
);

const Footer = () => {
  return (
    <div className="cp-root">
      <section className="cp-support">
        <div className="cp-container">
          <div className="cp-support-card">
            <h2>Still have questions?</h2>
            <p>Our support team is here to help you succeed. Get in touch anytime.</p>
            <div className="cp-btn-row">
              <a href="#contact" className="cp-pill cp-pill-solid">
                Contact Support
                <span className="cp-circle"><ArrowUpRight /></span>
              </a>
              <a href="#call" className="cp-pill cp-pill-outline">
                Schedule a Call
                <span className="cp-circle"><PhoneRing /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="cp-footer">
        <div className="cp-container">
          <section className="cp-cta">
            <div className="cp-cta-left">
              <h3>Ready for what’s next?</h3>
              <p>Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.</p>
            </div>
            <div className="cp-cta-actions">
              {CTA_BUTTONS.map((b) => (
                <a key={b.label} href={b.href} className={`cp-cta-btn ${b.variant}`}>
                  {b.label} <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </section>

          <div className="cp-grid">
            <div className="cp-brand">
              <Logo />
              <p className="cp-tagline">From choosing a college to finding your next opportunity.</p>
              <p className="cp-desc">CampusPe connects students, colleges and employers in one place.</p>
            </div>

            {COLUMNS.map((col) => (
              <nav className="cp-col" key={col.title} aria-label={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}><a href={l.href}>{l.label}</a></li>
                  ))}
                </ul>
              </nav>
            ))}

            <nav className="cp-col" aria-label="Legal and Policies">
              <h4>Legal &amp; Policies</h4>
              <ul>
                {LEGAL_LINKS.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
                <li><a href="#" className="cp-view-all">View all policies →</a></li>
              </ul>
              <p className="cp-note">
                Separate user, institution and employer terms can live inside the full Policies page.
              </p>
            </nav>
          </div>

          <div className="cp-contact" id="contact">
            <div className="cp-contact-items">
              <a className="cp-contact-item" href="mailto:contactus@campuspe.com">
                <span className="cp-chip"><MailIcon /></span>
                contactus@campuspe.com
              </a>
              <a className="cp-contact-item" href="tel:+916362606464">
                <span className="cp-chip"><PhoneIcon /></span>
                +91 6362606464
              </a>
            </div>
            <span className="cp-status">Students · Colleges · Employers</span>
          </div>

          <div className="cp-bottom">
            <div>
              2026 CampusPe Technologies Pvt. Ltd.{" "}
              <a href="#">Privacy</a> <a href="#">Terms</a> <a href="#">Grievance</a>
            </div>
            <div className="cp-socials">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={label}><Icon /></a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;