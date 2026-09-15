import { useState } from 'react'
import { motion } from 'motion/react'

const techSkills = [
  ['Python', 'python'],
  ['SQL', 'mysql'],
  ['JavaScript', 'javascript'],
  ['Java', 'openjdk'],
  ['Dart', 'dart'],
  ['R', 'r'],
  ['Flutter', 'flutter'],
  ['Node.js', 'nodedotjs'],
  ['Express.js', 'express'],
  ['Firebase', 'firebase'],
  ['Shopify', 'shopify'],
  ['React', 'react'],
  ['MySQL', 'mysql'],
  ['MongoDB', 'mongodb'],
  ['SQLite', 'sqlite'],
  ['REST APIs', 'postman'],
  ['DSA', 'leetcode'],
]

const devTools = [
  ['Git', 'git'],
  ['GitHub', 'github'],
  ['VS Code', 'visualstudiocode'],
  ['Android Studio', 'androidstudio'],
  ['Render', 'render'],
  ['MongoDB Atlas', 'mongodb'],
]

const projects = [
  {
    number: '01',
    title: 'BreakBite',
    subtitle: 'Full-stack canteen ordering application',
    description:
      'A digital ordering platform designed to reduce queues with real-time order tracking, administration tools, analytics, and a personalized user experience.',
    stack: [['Flutter', 'flutter'], ['Node.js', 'nodedotjs'], ['Express', 'express'], ['MongoDB', 'mongodb'], ['Firebase', 'firebase']],
    accent: 'violet',
    status: 'Completed',
  },
  {
    number: '02',
    title: 'College Curriculum Feedback System',
    subtitle: 'Academic feedback platform',
    description:
      'A system currently being developed to collect, organize, and analyze student feedback on college curriculum and academic subjects.',
    stack: [['JavaScript', 'javascript'], ['Database Systems', 'mysql'], ['Web Development', 'html5']],
    accent: 'blue',
    status: 'In development',
  },
]

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>
}

function SocialIcon({ type }) {
  if (type === 'github') return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.28c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" /></svg>
  if (type === 'linkedin') return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.04 3.5a2.5 2.5 0 1 1 0 5.01 2.5 2.5 0 0 1 0-5.01ZM2.8 9.8h4.47V21H2.8V9.8Zm7.27 0h4.29v1.53h.06c.6-1.14 2.06-2.35 4.24-2.35 4.53 0 5.37 2.98 5.37 6.86V21h-4.47v-4.57c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.19-1.75 2.41V21h-4.47V9.8Z" /></svg>
  if (type === 'instagram') return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>
  if (type === 'mail') return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l9 5.63 9-5.63V7H3Zm18 10V9.56l-8.47 5.3a1 1 0 0 1-1.06 0L3 9.56V17h18Z" /></svg>
  return null
}

function TechIcon({ slug }) {
  return <img className="tech-icon" src={`https://cdn.simpleicons.org/${slug}/ffffff`} alt="" loading="lazy" />
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="navbar">
        <a href="#top" className="brand" onClick={closeMenu}>Dhruv Solanki<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation" aria-expanded={menuOpen}><span /><span /></button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Let's talk <ArrowUpRight /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>COMPUTER SCIENCE · DEVELOPMENT · PROBLEM SOLVING</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }}>Building <em>practical</em><br />things with code.</motion.h1>
            <motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .18 }}>I'm Dhruv Solanki, a computer science developer focused on full-stack applications, databases, and thoughtful digital experiences.</motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .28 }}>
              <a className="button primary" href="#projects">View my work <ArrowUpRight /></a>
              <a className="button secondary" href="#contact">Get in touch</a>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="hero-card">
              <div className="hero-card-top"><span>AVAILABLE FOR OPPORTUNITIES</span><span className="status-dot" /></div>
              <div className="monogram"><span>Dhruv</span><span>Solanki</span></div>
              <div className="hero-card-bottom"><span>Mumbai, India</span><span>01 / 01</span></div>
            </div>
            <div className="floating-note note-one">Always learning.</div><div className="floating-note note-two">Always building.</div>
          </motion.div>
        </section>

        <section className="metrics container">
          <div><strong>02</strong><span>Selected projects</span></div><div><strong>01</strong><span>Industry internship</span></div><div><strong>7.55</strong><span>Current CGPA / 10</span></div><div><strong>∞</strong><span>Curiosity</span></div>
        </section>

        <section id="about" className="section container about-section">
          <SectionLabel number="01">About me</SectionLabel>
          <div className="about-grid"><h2>Curious mind.<br /><span>Practical builder.</span></h2><div><p>I'm a B.Sc. Computer Science student at Mithibai College with hands-on experience across web development, mobile applications, databases, and e-commerce development.</p><p>I enjoy turning ideas into working products, learning technologies by building with them, and solving problems that have a real-world purpose.</p><a className="text-link" href="https://github.com/dhruvsolankiextendstyler" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight /></a></div></div>
        </section>

        <section id="projects" className="section container projects-section">
          <div className="section-heading-row"><SectionLabel number="02">Selected projects</SectionLabel><span className="muted">Things I've built</span></div>
          <div className="project-list">{projects.map((project, index) => <motion.article className={`project-card ${project.accent}`} key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .6, delay: index * .08 }} whileHover={{ y: -5 }}><div className="project-number">{project.number}</div><div className="project-content"><div className="project-meta"><span>{project.status}</span><span>↗</span></div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><div className="tags">{project.stack.map(([item, slug]) => <span key={item}><TechIcon slug={slug} />{item}</span>)}</div></div><div className="project-shape" aria-hidden="true"><span>{project.number}</span></div></motion.article>)}</div>
        </section>

        <section id="experience" className="section container experience-section">
          <SectionLabel number="03">Experience</SectionLabel>
          <div className="experience-card"><div className="experience-date">MAY 2026 — JUN 2026</div><div><p className="experience-company">Scentivia Perfumes LLP · Mumbai</p><h3>Shopify Developer Intern</h3><p>Worked on development, customization, and maintenance of the company's Shopify e-commerce website. Customized themes and storefront functionality using Liquid, HTML, CSS, and JavaScript, and contributed to cart functionality, product metafields, promotional offers, collection pages, UI/UX, applications, and automated workflows.</p></div><div className="experience-arrow"><ArrowUpRight /></div></div>
        </section>

        <section id="skills" className="section container skills-section">
          <div className="section-heading-row"><SectionLabel number="04">Technical skills</SectionLabel><span className="muted">Technologies I work with</span></div>
          <div className="skills-grid">{techSkills.map(([skill, slug], index) => <motion.div className="skill-card" key={skill} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .3, delay: Math.min(index * .025, .35) }} whileHover={{ y: -4 }}><div className="icon-wrap"><TechIcon slug={slug} /></div><span>{skill}</span></motion.div>)}</div>
          <div className="tools-heading"><SectionLabel number="05">Dev tools</SectionLabel><span className="muted">The tools behind the work</span></div>
          <div className="skills-grid tools-grid">{devTools.map(([tool, slug], index) => <motion.div className="skill-card tool-card" key={tool} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .3, delay: Math.min(index * .04, .25) }} whileHover={{ y: -4 }}><div className="icon-wrap"><TechIcon slug={slug} /></div><span>{tool}</span></motion.div>)}</div>
        </section>

        <section id="contact" className="contact-section"><div className="container contact-inner"><SectionLabel number="06">Let's connect</SectionLabel><h2>Have an idea?<br /><em>Let's build it.</em></h2><p>Open to conversations about development, collaboration, and interesting problems.</p><a className="contact-email" href="mailto:dhruvds1971@gmail.com">dhruvds1971@gmail.com <ArrowUpRight /></a><div className="socials"><a href="https://github.com/dhruvsolankiextendstyler" target="_blank" rel="noreferrer"><SocialIcon type="github" /><span>GitHub</span></a><a href="https://www.linkedin.com/in/dhruv-solanki-ds1971/" target="_blank" rel="noreferrer"><SocialIcon type="linkedin" /><span>LinkedIn</span></a><a href="https://www.instagram.com/heady.dhruv/" target="_blank" rel="noreferrer"><SocialIcon type="instagram" /><span>Instagram</span></a><a href="mailto:dhruvds1971@gmail.com"><SocialIcon type="mail" /><span>Email</span></a></div></div></section>
      </main>
      <footer className="footer container"><span>Dhruv Solanki</span><span>Designed & built with code.</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}

export default App
