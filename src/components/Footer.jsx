export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell page-width">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-lockup" aria-label="Sailendra Das Tharu home">
              <span className="brand-mark">S</span>
              <span>Sailendra</span>
            </div>
            <p>
              Building thoughtful digital products with a focus on design clarity,
              performance, and reliable user experiences.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span className="footer-label">Navigate</span>
              <div className="footer-link-list">
                <a href="/">Home</a>
                <a href="/skills">Skills</a>
                <a href="/experience">Experience</a>
                <a href="/projects">Projects</a>
              </div>
            </div>

            <div>
              <span className="footer-label">Connect</span>
              <div className="footer-meta-list">
                <a href="mailto:sailendradastharu2000@gmail.com">sailendradastharu2000@gmail.com</a>
                <a href="https://www.linkedin.com/in/sailendra-das-tharu" target="_blank" rel="noreferrer">LinkedIn</a>
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sailendra Das Tharu</span>
          <span>Available for product engineering and thoughtful collaborations</span>
        </div>
      </div>
    </footer>
  )
}
