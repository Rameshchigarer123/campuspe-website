import "./resumeupload.css";

function ResumeUpload() {
  return (
    <section className="resume-section">
      <div className="resume-container">

        <div className="resume-badge">
          <span>●</span>
          <span>TRY IT LIVE</span>
          <span className="resume-version">v2.4 AI Engine</span>
        </div>
        <h2 className="resume-heading">
          Upload your resume.
          <span>Find jobs that fit.</span>
        </h2>
        <p className="resume-description">
          Upload once. CampusPe reads your skills, experience, and preferences —
          then finds relevant jobs across 1,000+ sources.
        </p>
        <div className="resume-upload-card">
          <div className="resume-match-badge">
            <span>ϟ</span>
            <div>
              <strong>98% Match Rate</strong>
              <small>AI semantic rank</small>
            </div>
          </div>
          <div className="resume-dropzone">
            <h3>Upload your resume</h3>
            <p>
              PDF, DOC, or DOCX · Up to 10MB · We'll use it to understand
              your skills and experience.
            </p>
            <label className="resume-upload-button">
              Upload resume <span>↑</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                hidden
              />
            </label>
            <span className="resume-drag-text">
              or drag and drop your file here
            </span>

            <div className="resume-file-types">
              <span>PDF</span>
              <span>DOC</span>
              <span>DOCX</span>
            </div>
          </div>
          <div className="resume-ats-badge">
            <span>♙</span>
            <div>
              <strong>ATS Compliant</strong>
              <small>Standardized parser</small>
            </div>
          </div>
        </div>
        <div className="resume-features">
          <div className="resume-feature">
            <span className="feature-icon green">✓</span>
            <div>
              <strong>Resume analyzed</strong>
              <small>Ready in 4s</small>
            </div>
          </div>
          <div className="resume-feature">
            <span className="feature-icon blue">✓</span>
            <div>
              <strong>Skills matched</strong>
              <small>Deep taxonomy</small>
            </div>
          </div>
          <div className="resume-feature">
            <span className="feature-icon purple">✓</span>
            <div>
              <strong>Experience matched</strong>
              <small>Contextual seniority</small>
            </div>
          </div>
          <div className="resume-feature">
            <span className="feature-icon blue">✓</span>
            <div>
              <strong>1,000+ sources searched</strong>
              <small>Real-time aggregators</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ResumeUpload;