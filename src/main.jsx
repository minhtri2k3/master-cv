import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const highlights = [
  ['University', 'International University — VNU-HCM'],
  ['Graduation', 'November 2026'],
  ['Cumulative GPA', '2.78 / 4.00'],
  ['Recent 2-year GPA', '≈ 3.20 / 4.00'],
  ['IELTS', 'L 7.5 · R 6.5 · W 6.5 · S 6.0'],
  ['Primary focus', 'AI · Computer Science · Security'],
];

const experience = [
  ['Vincent Holding', 'Middle Mobile Developer', 'Jun 2026 — Present', 'Owns two commercial applications, release pipelines, performance work, and LLM-enabled mobile features.'],
  ['Carrots · Barcelona', 'Junior Mobile Developer · Product Owner', 'Sep 2025 — Jun 2026', 'Owned a live iOS/Android application with 2,000+ active users and improved performance for image-heavy workflows.'],
  ['Document Easy', 'Fresher Mobile Developer', 'Jul 2025 — Sep 2025', 'Maintained and enhanced a production application serving more than 100,000 users in Vietnam.'],
  ['SMARTOSC', 'Mobile Developer Intern', 'Apr 2025 — Jul 2025', 'Built an end-to-end Flutter, Python, and AI recommendation prototype and coordinated the internship presentation team.'],
];

const strengths = [
  ['Production ownership', 'Feature delivery, release cycles, maintenance, performance optimization, and technical decision-making.'],
  ['Mobile and AI breadth', 'Commercial Flutter experience combined with backend development, LLM systems, Agentic RAG, retrieval, and deployment.'],
  ['International collaboration', 'Worked with a Barcelona-based team and communicated directly with product, design, and senior stakeholders.'],
  ['Research with measurable evidence', 'Bachelor thesis evaluated using production telemetry, cost metrics, engagement data, and user feedback.'],
];

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <>
    <header className="header">
      <div className="header-inner">
        <a className="name" href="#top">Nguyễn Quang Minh Trí</a>
        <nav>
          <a href="#profile">Profile</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#education">Education</a>
        </nav>
        <a className="contact" href="mailto:quangminhtri2003@gmail.com">Contact</a>
      </div>
    </header>

    <main id="top" className="page">
      <article className="blog">
        <section className="intro-block reveal" data-reveal>
          <p className="kicker">Master's Applicant · Intake 2027 · Vietnam</p>
          <h1>Software engineer with production experience and a growing research focus in AI.</h1>
          <p className="lead">I am <strong>Nguyễn Quang Minh Trí</strong>, an Information Technology student at International University — VNU-HCM, graduating in November 2026. My profile combines commercial mobile engineering, international product ownership, and an Agentic RAG bachelor thesis.</p>
          <div className="links">
            <a href="mailto:quangminhtri2003@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/quang-minh-tri-nguyen-a4a942275/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/minhtri2k3" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>

        <section id="profile" className="section reveal" data-reveal>
          <div className="section-label">Profile summary</div>
          <h2>At a glance</h2>
          <div className="facts">
            {highlights.map(([label, value]) => <div className="fact" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>)}
          </div>
          <p className="note"><strong>Recent academic trend:</strong> the most recent four semesters produce a credit-weighted reference average of approximately 3.20/4.00 across 67 credits, compared with the official cumulative GPA of 2.78/4.00.</p>
        </section>

        <section className="section reveal" data-reveal>
          <div className="section-label">Profile strengths</div>
          <h2>What defines my profile</h2>
          <div className="text-list">
            {strengths.map(([title, text]) => <div className="text-row" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>)}
          </div>
        </section>

        <section id="experience" className="section reveal" data-reveal>
          <div className="section-label">Professional experience</div>
          <h2>Four companies, with increasing technical ownership</h2>
          <p className="section-intro">My work history progressed from internship delivery to production ownership and middle-level mobile development.</p>
          <div className="experience-list">
            {experience.map(([company, role, period, text]) => <div className="experience-item" key={company}>
              <div className="experience-head">
                <div><span className="company">{company}</span><h3>{role}</h3></div>
                <span className="period">{period}</span>
              </div>
              <p>{text}</p>
            </div>)}
          </div>
        </section>

        <section id="research" className="section reveal" data-reveal>
          <div className="section-label">Bachelor thesis · 2026</div>
          <h2>Agentic RAG for dynamic product suggestion</h2>
          <p className="section-intro">Clothie is a production-oriented fashion recommendation system designed to resolve vague user intent while controlling retrieval quality, latency, and LLM cost.</p>

          <div className="metrics">
            <div><strong>5,096</strong><span>products</span></div>
            <div><strong>209</strong><span>evaluated turns</span></div>
            <div><strong>1–2</strong><span>LLM calls per turn</span></div>
            <div><strong>$0.000142</strong><span>average cost per turn</span></div>
          </div>

          <div className="research-copy">
            <p><strong>Architecture:</strong> single-LLM intent-first orchestration, six-slot extraction, clarification gating, multi-turn memory, and deterministic routing.</p>
            <p><strong>Retrieval:</strong> BM25, FashionSigLIP, Reciprocal Rank Fusion, RapidFuzz, BGE reranking, and Qdrant.</p>
            <p><strong>Stack:</strong> Python, FastAPI, PostgreSQL, Qdrant, Flutter, Docker, and Gemini 2.5 Flash.</p>
          </div>
          <a className="inline-link" href="https://github.com/minhtri2k3/llm-thesis" target="_blank" rel="noreferrer">View research repository</a>
        </section>

        <section id="education" className="section reveal" data-reveal>
          <div className="section-label">Education and direction</div>
          <h2>Academic background</h2>
          <div className="education-grid">
            <div>
              <h3>International University — VNU-HCM</h3>
              <p>Information Technology · Computer Network<br />2021–2026 · Graduation: November 2026</p>
            </div>
            <div>
              <h3>Academic indicators</h3>
              <p>Cumulative GPA: <strong>2.78/4.00</strong><br />Recent two-year reference GPA: <strong>≈3.20/4.00</strong><br />Final semester GPA: <strong>3.36/4.00</strong><br />Bachelor thesis: <strong>84/100</strong></p>
            </div>
            <div>
              <h3>English</h3>
              <p>IELTS<br />Listening 7.5 · Reading 6.5<br />Writing 6.5 · Speaking 6.0</p>
            </div>
            <div>
              <h3>Master's direction</h3>
              <p><strong>Primary:</strong> AI · Computer Science · Security<br /><strong>Additional:</strong> Software Engineering · Cybersecurity<br />Target intake: 2027</p>
            </div>
          </div>
        </section>

        <section className="closing reveal" data-reveal>
          <div className="section-label">Mentor context</div>
          <h2>What I am looking for</h2>
          <p>I am looking for guidance on programme fit, scholarship strategy, and how to position professional experience, recent academic improvement, and AI research effectively for postgraduate applications in 2027.</p>
        </section>
      </article>
    </main>

    <footer className="footer">
      <span>Nguyễn Quang Minh Trí</span>
      <span>Master Portfolio · 2027</span>
    </footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
