
import "./AppInterface.css";

function AppInterface() {
  return (
    <section className="app-interface-section">
      <div className="app-interface-canvas">
        <h2 className="app-interface-heading">
          Checkout Our App Interface Look
        </h2>

        <p className="app-interface-description">
          Experience the power of a unified campus ecosystem right in your
          pocket. <strong>CampusPe</strong> offers a tailored interface for
          every user: students can explore trending courses, colleges can
          showcase their campus life, and companies can post job vacancies
          directly to a pool of qualified candidates.
        </p>

        {/* App screens */}
        <div className="app-carousel-stage">
          <div
            className="app-side-panel app-side-panel-left"
            aria-hidden="true"
          />

          <img
            className="app-side-image app-side-image-left"
            src="/left.png"
            alt="CampusPe app screens on the left"
          />

          <img
            className="app-center-image"
            src="/app-interface.png"
            alt="CampusPe main mobile app screen"
          />

          <div
            className="app-side-panel app-side-panel-right"
            aria-hidden="true"
          />

          <img
            className="app-side-image app-side-image-right"
            src="/right.png"
            alt="CampusPe app screens on the right"
          />
        </div>

        {/* Carousel indicators */}
        <div
          className="app-screen-dots"
          aria-label="App screen indicators"
        >
          <span className="app-dot app-dot-1" />
          <span className="app-dot app-dot-2" />
          <span className="app-dot app-dot-3 active" />
          <span className="app-dot app-dot-4" />
          <span className="app-dot app-dot-5" />
        </div>

        {/* Download section */}
        <div className="app-download-text">
          <h2 className="app-download-heading">
            Download App Now
          </h2>

          <p className="app-download-description">
            Elevate your academic journey with Campuspe, the all-in-one
            digital ecosystem designed to bridge the gap between education
            and industry. Whether you're a student seeking your next big
            internship, a college looking to empower your cohort, or a
            company scouting for top-tier talent, Campuspe streamlines the
            connection. Your career doesn't start at graduation—it starts
            here.
          </p>

          <div className="app-download-buttons">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              aria-label="Get it on Google Play"
            >
              <img
                src="/getplaystore.png"
                alt="Get it on Google Play"
              />
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              aria-label="Available on the App Store"
            >
              <img
                src="/available.png"
                alt="Available on the App Store"
              />
            </a>
          </div>
        </div>

        {/* Bottom showcase image */}
        <img
          className="app-interface-bottom-image"
          src="/app-interface-bottom.png"
          alt="CampusPe mobile app showcase"
        />
      </div>
    </section>
  );
}

export default AppInterface;
