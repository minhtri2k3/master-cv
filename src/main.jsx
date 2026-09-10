import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const snapshot = [
  { label: 'University', value: 'International University — VNU-HCM', note: 'Information Technology · Computer Network' },
  { label: 'Graduation', value: 'November 2026', note: 'Bachelor degree · Intake target 2027' },
  { label: '4-year GPA', value: '2.78 / 4.00', note: '69.3 / 100 · Official cumulative' },
  { label: 'Recent 2-year GPA', value: '≈ 3.20 / 4.00', note: '≈77.31 / 100 · 67 credits · reference weighted average' },
  { label: 'IELTS', value: '6.5 profile', note: 'L 7.5 · R 6.5 · W 6.5 · S 6.0' },
  { label: 'Primary', value: 'AI · Computer Science', note: 'Also exploring Software Engineering & Cybersecurity' },
];

const strengths = [
  ['Production ownership', 'Worked beyond ticket-level implementation: feature delivery, release cycles, maintenance, and technical decisions.'],
  ['Mobile + AI breadth', 'Commercial Flutter/mobile experience combined with backend, LLM, Agentic RAG, retrieval, and deployment work.'],
  ['International teamwork', 'Worked with a Barcelona-based team and communicated directly with product, design, and senior stakeholders.'],
  ['Research with evidence', 'Bachelor thesis evaluated on production telemetry, with measurable cost, retrieval, and user-engagement results.'],
];

const experience = [
  ['Vincent Holding', 'Middle Mobile Developer', 'Jun 2026 — Present', 'Owns two commercial apps, release pipelines, performance work, and LLM-enabled mobile features.'],
  ['Carrots · Barcelona', 'Junior Mobile Developer · Product Owner', 'Sep 2025 — Jun 2026', 'Owned a live iOS/Android app with 2,000+ active users and improved image-heavy performance.'],
  ['Document Easy', 'Fresher Mobile Developer', 'Jul 2025 — Sep 2025', 'Maintained and enhanced a large-scale product serving 100,000+ users in Vietnam.'],
  ['SMARTOSC', 'Mobile Developer Intern', 'Apr 2025 — Jul 2025', 'Built a Flutter + Python + AI recommendation prototype and led the internship presentation team.'],
];

const thesisStats = [
  ['5,096', 'products'],
  ['209', 'evaluated turns'],
  ['1–2', 'LLM calls / turn'],
  ['$0.000142', 'avg. cost / turn'],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <>
    <header className="site-header">
      <a className="identity" href="#top">
        <strong>Minh Tri Nguyen</strong>
        <span>Master Portfolio · 2027</span>
      </a>
      <nav>
        <a href="#overview">Overview</a>
        <a href="#experience">Experience</a>
        <a href="#research">Research</a>
        <a href="#education">Education</a>
      </nav>
      <a className="header-cta" href="mailto:quangminhtri2003@gmail.com">Contact <Arrow /></a>
    </header>

    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy reveal" data-reveal>
          <p className="meta-line">23 years old · Vietnam · Postgraduate applicant for 2027</p>
          <h1>Software engineer with production experience and a growing research focus in AI.</h1>
          <p className="intro">I am <b>Nguyễn Quang Minh Trí</b>, an Information Technology student at <b>International University — VNU-HCM</b>, graduating in <b>November 2026</b>. My profile combines commercial mobile engineering, international product ownership, and an Agentic RAG bachelor thesis.</p>
          <div className="hero-links">
            <a href="mailto:quangminhtri2003@gmail.com">Email <Arrow /></a>
            <a href="https://www.linkedin.com/in/quang-minh-tri-nguyen-a4a942275/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://github.com/minhtri2k3" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </div>

        <aside className="primary-card reveal" data-reveal>
          <span className="tiny-label">Primary direction</span>
          <strong>AI · Computer Science</strong>
          <p>Master’s intake 2027, with additional interest in Software Engineering and Cybersecurity.</p>
        </aside>
      </section>

      <section id="overview" className="overview wrap">
        <div className="section-title reveal" data-reveal>
          <span>01 · At a glance</span>
          <h2>The information a mentor should see first.</h2>
        </div>

        <div className="snapshot-grid">
          {snapshot.map((item) => <article className="snapshot-card reveal" data-reveal key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <p>{item.note}</p>
          </article>)}
        </div>

        <div className="quick-answer reveal" data-reveal>
          <span className="tiny-label">In one sentence</span>
          <p><b>Yes, I have professional experience:</b> four company environments across Vietnam and an international Barcelona-based team, with responsibilities ranging from internship delivery to product ownership and current middle-level mobile development.</p>
        </div>
      </section>

      <section className="story-section">
        <div className="wrap article-layout">
          <div className="section-title reveal" data-reveal>
            <span>02 · Why I stand out</span>
            <h2>Practical engineering first. Research depth next.</h2>
          </div>
          <div className="strength-list">
            {strengths.map(([title, text], index) => <article className="strength-row reveal" data-reveal key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section id="experience" className="wrap article-section">
        <div className="section-title reveal" data-reveal>
          <span>03 · Professional experience</span>
          <h2>Four companies. Increasing ownership.</h2>
          <p>My work history is best read as progression: from learning inside a delivery team to owning production outcomes.</p>
        </div>
        <div className="experience-list">
          {experience.map(([company, role, period, text]) => <article className="experience-row reveal" data-reveal key={company}>
            <div className="experience-time">{period}</div>
            <div>
              <p className="company-name">{company}</p>
              <h3>{role}</h3>
              <p>{text}</p>
            </div>
          </article>)}
        </div>
      </section>

      <section id="research" className="research-section">
        <div className="wrap article-layout">
          <div className="section-title light reveal" data-reveal>
            <span>04 · Bachelor thesis</span>
            <h2>Agentic RAG for dynamic product suggestion.</h2>
            <p>Clothie is a production-oriented fashion recommendation system designed to resolve vague user intent while controlling retrieval quality, latency, and LLM cost.</p>
          </div>

          <div className="thesis-stats reveal" data-reveal>
            {thesisStats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>

          <article className="research-summary reveal" data-reveal>
            <div>
              <span className="tiny-label">Core architecture</span>
              <h3>Single-LLM intent-first orchestration + Hybrid RAG</h3>
            </div>
            <p>Intent classification, six-slot extraction, clarification gating, multi-turn memory, BM25, FashionSigLIP, RRF, RapidFuzz, BGE reranking, Qdrant, PostgreSQL, FastAPI, Flutter, and Docker.</p>
          </article>

          <div className="research-links reveal" data-reveal>
            <a href="https://github.com/minhtri2k3/llm-thesis" target="_blank" rel="noreferrer">View research repository <Arrow /></a>
          </div>
        </div>
      </section>

      <section id="education" className="wrap article-section education-section">
        <div className="section-title reveal" data-reveal>
          <span>05 · Education & next step</span>
          <h2>Academic record with a clear upward trend.</h2>
        </div>
        <div className="education-copy reveal" data-reveal>
          <p><b>International University — Vietnam National University HCMC</b><br />Information Technology · Computer Network · 2021–2026</p>
          <p>The official cumulative GPA is <b>2.78/4.00 (69.3/100)</b>. Across the most recent four semesters, the credit-weighted reference average rises to <b>≈3.20/4.00 (≈77.31/100)</b>, with the latest semester at <b>3.36/4.00</b>.</p>
          <p>IELTS bands: <b>Listening 7.5 · Reading 6.5 · Writing 6.5 · Speaking 6.0</b>. Bachelor thesis grade: <b>84/100</b>.</p>
        </div>

        <div className="next-step reveal" data-reveal>
          <span className="tiny-label">What I want from a mentor</span>
          <p>Programme fit, scholarship strategy, and positioning for a 2027 Master’s application—especially where strong professional experience, recent academic improvement, and AI research can strengthen the overall profile.</p>
        </div>
      </section>
    </main>

    <footer className="wrap footer">
      <span>Nguyễn Quang Minh Trí</span>
      <span>Vietnam · Updated 2026</span>
    </footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
