import { useState, useEffect } from 'react'

// Structured skill categories for intentional organization
const skillGroups = [
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript', 'Java', 'Dart', 'SQL', 'R'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Flutter', 'Node.js', 'Express.js'],
  },
  {
    category: 'Databases & Cloud',
    items: ['MongoDB', 'MySQL', 'SQLite', 'Firebase', 'MongoDB Atlas'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Render', 'Shopify'],
  },
  {
    category: 'Core Competencies',
    items: ['REST APIs', 'Data Structures & Algorithms', 'Database Normalization', 'PWA Development'],
  },
]

const projects = [
  {
    number: '01',
    title: 'Shift',
    subtitle: 'Smart task prioritization Progressive Web App',
    description:
      'A focus and productivity companion designed to reduce decision paralysis. Shift asks users for their current energy and capacity, then surfaces the single task worth doing next. Includes mood-based filtering, streak tracking, and personal momentum analytics.',
    stack: ['React', 'Node.js', 'Express', 'REST APIs', 'Render', 'PWA'],
    status: 'Live on Vercel',
    isLive: true,
    link: 'https://shift-six-pi.vercel.app/',
    type: 'Featured Full-Stack Web Application',
    highlights: 'Mood-based check-in engine, streak analytics, responsive PWA architecture',
  },
  {
    number: '02',
    title: 'BreakBite',
    subtitle: 'Campus canteen mobile ordering platform',
    description:
      'A cross-platform mobile solution designed to eliminate queue congestion in college canteens. Supports real-time order tracking, live kitchen queue management, administrative inventory controls, and order status updates.',
    stack: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    status: 'Prototype Completed',
    isLive: false,
    type: 'Cross-Platform Mobile Application',
    highlights: 'Queue dispatch workflow, live order statuses, administrative dashboard',
  },
  {
    number: '03',
    title: 'College Curriculum Feedback System',
    subtitle: 'Academic feedback and course evaluation platform',
    description:
      'A structured database application developed to gather, organize, and evaluate student feedback on college coursework and academic curriculum modules. Focuses on data normalization, role-based access, and structured reports for academic reviews.',
    stack: ['JavaScript', 'MySQL', 'HTML5', 'Web Development'],
    status: 'Academic Project',
    isLive: false,
    type: 'Database-Driven Web Platform',
    highlights: 'Relational schema design, structured student evaluations, departmental reporting',
  },
]

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4.5 11.5L11.5 4.5M11.5 4.5H6M11.5 4.5V10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialIcon({ type }) {
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
        <path
          fill="currentColor"
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
        />
      </svg>
    )
  }
  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
        <path
          fill="currentColor"
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37h2.8Z"
        />
      </svg>
    )
  }
  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
        <path
          fill="currentColor"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"
        />
      </svg>
    )
  }
  if (type === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
        <path
          fill="currentColor"
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
        />
      </svg>
    )
  }
  return null
}

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [colophonOpen, setColophonOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('dhruvds1971@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  // Handle Escape key for colophon modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && colophonOpen) {
        setColophonOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [colophonOpen])

  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Primary Navigation */}
      <div className="navbar-wrapper">
        <header className="navbar container">
          <a href="#top" className="brand" onClick={closeMenu}>
            Dhruv Solanki<span className="brand-dot">.</span>
            <span className="brand-role">Mumbai</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main Navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>
              Contact <ArrowUpRight />
            </a>
          </nav>
        </header>
      </div>

      <main id="main-content">
        {/* Hero Section */}
        <section id="top" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-bullet" aria-hidden="true" />
              <span>Computer Science Undergraduate · Developer</span>
            </div>

            <h1>
              Building <em>reliable</em> software systems and web applications.
            </h1>

            <p className="hero-description">
              I am Dhruv Solanki, a final-year Computer Science student at Mithibai College, Mumbai.
              I build full-stack web platforms, mobile applications, and database systems with an
              emphasis on clear architecture and practical usability.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Explore Projects <ArrowUpRight />
              </a>
              <a className="btn btn-secondary" href="#contact">
                Get in Touch
              </a>
              <a
                className="btn btn-subtle"
                href="https://github.com/dhruvsolankiextendstyler"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile <ArrowUpRight />
              </a>
            </div>
          </div>

          {/* Authentic Profile Card */}
          <div className="hero-card">
            <div className="hero-card-header">
              <span className="status-badge">
                <span className="status-indicator" />
                Open for Opportunities
              </span>
              <span className="hero-location">Mumbai, India</span>
            </div>

            <div className="hero-card-profile">
              <div className="hero-card-name">Dhruv Solanki</div>
              <div className="hero-card-sub">
                B.Sc. Computer Science Candidate
                <br />
                Mithibai College of Arts, Chauhan Institute of Science
              </div>
            </div>

            <div className="hero-card-grid">
              <div className="hero-card-item">
                <span className="hero-card-label">Primary Stack</span>
                <span className="hero-card-val">React, Node, Flutter</span>
              </div>
              <div className="hero-card-item">
                <span className="hero-card-label">Databases</span>
                <span className="hero-card-val">MongoDB, MySQL</span>
              </div>
              <div className="hero-card-item">
                <span className="hero-card-label">Current CGPA</span>
                <span className="hero-card-val">7.55 / 10</span>
              </div>
              <div className="hero-card-item">
                <span className="hero-card-label">Graduation</span>
                <span className="hero-card-val">Class of 2026</span>
              </div>
            </div>

            <div className="hero-card-footer">
              <span>Direct Inquiries</span>
              <a className="hero-card-link" href="mailto:dhruvds1971@gmail.com">
                dhruvds1971@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* Highlights / Verified Metrics Strip */}
        <section className="metrics-strip" aria-label="Key Highlights">
          <div className="container metrics-grid">
            <div className="metric-item">
              <div className="metric-num">03</div>
              <div className="metric-label">Selected Projects</div>
              <div className="metric-desc">Web, mobile, and database solutions</div>
            </div>
            <div className="metric-item">
              <div className="metric-num">01</div>
              <div className="metric-label">Industry Internship</div>
              <div className="metric-desc">Shopify storefront development</div>
            </div>
            <div className="metric-item">
              <div className="metric-num">7.55</div>
              <div className="metric-label">Current CGPA / 10</div>
              <div className="metric-desc">B.Sc. CS at Mithibai College</div>
            </div>
            <div className="metric-item">
              <div className="metric-num">2026</div>
              <div className="metric-label">Undergraduate Completion</div>
              <div className="metric-desc">Seeking software engineering roles</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section container">
          <SectionLabel number="01">About Me</SectionLabel>
          <div className="about-grid">
            <h2>
              Focused on <em>solid engineering</em>, from relational schemas to user interfaces.
            </h2>
            <div className="about-content">
              <p>
                I am currently in my final year pursuing a Bachelor of Science in Computer Science
                at Mithibai College in Mumbai. My coursework and independent projects span web
                application development, cross-platform mobile apps, relational and document
                databases, and storefront engineering.
              </p>
              <p>
                Rather than treating software as isolated frontends, I enjoy understanding the complete
                workflow: structuring normalized database models, writing clean backend route
                handlers, integrating stateful clients, and resolving real operational bottlenecks.
              </p>
              <p>
                During my internship at Scentivia Perfumes LLP, I customized e-commerce themes,
                liquid logic, and merchant workflows, helping bridge business requirements with
                responsive, performant code.
              </p>
              <div className="about-links">
                <a
                  className="text-link"
                  href="https://github.com/dhruvsolankiextendstyler"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Repositories <ArrowUpRight />
                </a>
                <a
                  className="text-link"
                  href="https://www.linkedin.com/in/dhruv-solanki-ds1971/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section container">
          <div className="section-heading-row">
            <div>
              <SectionLabel number="02">Selected Projects</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 600 }}>
                Recent Work
              </h2>
            </div>
            <span className="section-subtitle">Web applications, mobile software, and systems</span>
          </div>

          <div className="projects-stack">
            {projects.map((project) => (
              <article
                className={`project-card ${project.isLive ? 'featured' : ''}`}
                key={project.title}
              >
                <div className="project-index">{project.number}</div>

                <div className="project-main">
                  <div className="project-header-top">
                    <span className={`project-status ${project.isLive ? 'live' : ''}`}>
                      {project.status}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      {project.type}
                    </span>
                  </div>

                  <h3>{project.title}</h3>
                  <div className="project-tagline">{project.subtitle}</div>
                  <p className="project-summary">{project.description}</p>

                  <div className="project-tech">
                    {project.stack.map((item) => (
                      <span className="tech-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-side">
                  <div className="project-details-block">
                    <span className="project-details-label">Key Highlight</span>
                    <span className="project-details-val">{project.highlights}</span>
                  </div>

                  <div className="project-actions">
                    {project.link ? (
                      <a
                        className="btn btn-primary"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} live deployment`}
                      >
                        Open Live Application <ArrowUpRight />
                      </a>
                    ) : (
                      <span
                        className="btn btn-subtle"
                        style={{ cursor: 'default', opacity: 0.85 }}
                      >
                        Code & Architecture
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="section container">
          <div className="section-heading-row">
            <div>
              <SectionLabel number="03">Work Experience</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 600 }}>
                Practical Industry Exposure
              </h2>
            </div>
            <span className="section-subtitle">Internship and applied development</span>
          </div>

          <div className="experience-list">
            <div className="experience-card">
              <div className="experience-meta">
                <span className="experience-period">MAY 2026 to JUN 2026</span>
                <span className="experience-location">Mumbai, Maharashtra</span>
                <span className="experience-badge">Internship</span>
              </div>

              <div className="experience-body">
                <span className="experience-org">Scentivia Perfumes LLP</span>
                <h3>Shopify Developer Intern</h3>
                <p className="experience-desc">
                  Contributed to the development, theme customization, and maintenance of the
                  company's production Shopify e-commerce platform. Worked directly with storefront
                  logic and theme templates using Shopify Liquid, HTML, CSS, and vanilla JavaScript.
                </p>
                <p className="experience-desc">
                  Key responsibilities included configuring dynamic product metafields, engineering
                  custom cart behaviors, implementing promotional collection layouts, streamlining
                  user flows, and configuring third-party app integrations for automated inventory
                  workflows.
                </p>
                <div className="experience-skills">
                  <span className="tag">Shopify Liquid</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">HTML & CSS</span>
                  <span className="tag">Storefront APIs</span>
                  <span className="tag">E-Commerce Workflows</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Structured Section */}
        <section id="skills" className="section container">
          <div className="section-heading-row">
            <div>
              <SectionLabel number="04">Technical Competencies</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 600 }}>
                Skills & Technologies
              </h2>
            </div>
            <span className="section-subtitle">Grouped by functional domain</span>
          </div>

          <div className="skills-domains">
            {skillGroups.map((group) => (
              <div className="domain-card" key={group.category}>
                <div className="domain-title">
                  <h3>{group.category}</h3>
                  <span className="domain-count">{group.items.length} items</span>
                </div>
                <div className="domain-items">
                  {group.items.map((skill) => (
                    <span className="skill-item" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container contact-card">
            <div className="contact-text">
              <SectionLabel number="05">Let's Connect</SectionLabel>
              <h2>
                Interested in working together or <em>discussing a project</em>?
              </h2>
              <p>
                I am actively seeking software engineering internships, graduate roles, and
                collaborative development projects. Feel free to send an email or connect through
                any of the profiles below.
              </p>
            </div>

            <div className="contact-actions">
              <div className="email-box">
                <span className="email-box-label">Primary Email</span>
                <span className="email-address">dhruvds1971@gmail.com</span>
              </div>

              <div className="email-button-row">
                <a className="btn btn-primary" href="mailto:dhruvds1971@gmail.com" style={{ flex: 1 }}>
                  Compose Email <ArrowUpRight />
                </a>
                <button
                  className="btn btn-secondary"
                  onClick={copyEmail}
                  type="button"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? 'Copied to Clipboard' : 'Copy Email'}
                </button>
              </div>

              <div className="social-links" aria-label="Social Profiles">
                <a
                  className="social-link"
                  href="https://github.com/dhruvsolankiextendstyler"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon type="github" />
                  <span>GitHub</span>
                </a>
                <a
                  className="social-link"
                  href="https://www.linkedin.com/in/dhruv-solanki-ds1971/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon type="linkedin" />
                  <span>LinkedIn</span>
                </a>
                <a
                  className="social-link"
                  href="https://www.instagram.com/heady.dhruv/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon type="instagram" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer container">
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-author">Dhruv Solanki</span>
            <span>B.Sc. Computer Science · Mithibai College, Mumbai</span>
          </div>

          <div className="footer-links">
            <button
              className="footer-link-btn"
              onClick={() => setColophonOpen(true)}
              type="button"
            >
              Privacy & Colophon
            </button>
            <a className="footer-link-btn" href="#top">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>

      {/* Privacy Notice & Colophon Modal */}
      {colophonOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setColophonOpen(false)}
          role="presentation"
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="colophon-title"
          >
            <div className="modal-header">
              <h3 id="colophon-title">Privacy Notice & Colophon</h3>
              <button
                className="modal-close"
                onClick={() => setColophonOpen(false)}
                aria-label="Close dialog"
                type="button"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <h4>Privacy Commitment</h4>
              <p>
                This website is a personal developer portfolio. It does not use tracking cookies,
                advertising beacons, analytics scripts, or behavioral tracking.
              </p>
              <ul>
                <li>
                  <strong>Data Collection:</strong> No personally identifiable information is
                  harvested or stored on any server through this site.
                </li>
                <li>
                  <strong>Communication:</strong> The contact buttons link to standard client-side
                  <code>mailto:</code> links. Any email sent is transmitted directly through your own
                  mail provider.
                </li>
                <li>
                  <strong>External Links:</strong> This site links to external platforms including
                  GitHub, LinkedIn, Instagram, and Vercel. Their respective privacy policies govern
                  interactions on those services.
                </li>
              </ul>

              <h4>Colophon & Typography</h4>
              <p>
                Designed with a focus on editorial clarity, high contrast, and tactile restraint.
              </p>
              <ul>
                <li>
                  <strong>Framework:</strong> Built with React 19 and Vite.
                </li>
                <li>
                  <strong>Styling:</strong> Tailwind CSS v4 and custom semantic design tokens.
                </li>
                <li>
                  <strong>Typefaces:</strong> Headings set in Newsreader (Production Type) and
                  body text set in Plus Jakarta Sans (Tokotype).
                </li>
                <li>
                  <strong>Accessibility:</strong> Adheres to WCAG AA contrast standards, supports
                  keyboard navigation, and respects <code>prefers-reduced-motion</code>.
                </li>
              </ul>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setColophonOpen(false)}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
