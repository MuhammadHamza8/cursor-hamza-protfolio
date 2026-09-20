import { useEffect, useState } from 'react'
import {
  profile,
  metrics,
  skills,
  tools,
  cases,
  experience,
  process,
  recruiterNotes,
  education,
  certifications,
  languages,
} from './data'

function Logo() {
  return (
    <a href="#top" className="brand">
      <span className="mark">MH</span>
      <span>
        Hamza
        <small>SQA Engineer</small>
      </span>
    </a>
  )
}

function Site() {
  return (
    <div className="app" id="top">
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="glow glow-c" />

      <header className="nav">
        <div className="wrap nav-inner">
          <Logo />
          <nav className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-end">
            <a className="nav-phone" href={profile.phoneHref}>
              {profile.phone}
            </a>
            <a className="nav-cta" href={profile.resumePdf} download>
              Download CV
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="wrap hero">
          <div>
            <p className="eyebrow">
              <span className="pulse" />
              {profile.availability}
            </p>
            <h1>
              Tests that <em>run in CI</em>,
              <br />
              not in a spreadsheet.
            </h1>
            <p className="lede">{profile.tagline}</p>
            <p className="identity">
              <strong>{profile.name}</strong>
              {profile.role}
              <span>{profile.location}</span>
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Email Hamza
              </a>
              <a className="btn btn-ghost" href="#work">
                View projects
              </a>
              <a className="btn btn-ghost" href="#resume">
                Recruiter one-pager
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <div className="hero-card-shine" />
            <div className="panel-head">
              <span>pipeline · ui + api</span>
              <span className="status">● READY</span>
            </div>
            <div className="stat-grid">
              {metrics.map((m) => (
                <div className="stat" key={m.label}>
                  <b>{m.value}</b>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
            <ul className="log">
              <li>Selenium · Cypress · Playwright</li>
              <li>Postman + Newman on CI/CD</li>
              <li>Web · Mobile · API · AI chatbot</li>
              <li>Digital Tolk · Cloud Mesh · QuellxCode</li>
            </ul>
          </aside>
        </section>

        <section className="wrap section" id="signals">
          <div className="section-head">
            <p className="kicker">At a glance</p>
            <h2>Built for recruiters who skim, and engineers who probe.</h2>
          </div>
          <div className="bento">
            {metrics.map((m) => (
              <article className="bento-item metric" key={m.label}>
                <strong>{m.value}</strong>
                <label>{m.label}</label>
                <small>{m.hint}</small>
              </article>
            ))}
            {recruiterNotes.map((n) => (
              <article className="bento-item note" key={n}>
                {n}
              </article>
            ))}
          </div>
        </section>

        <section className="wrap section" id="stack">
          <div className="section-head">
            <p className="kicker">Stack</p>
            <h2>What I actually use on the job</h2>
            <p className="sub">{profile.summary}</p>
          </div>
          <div className="skills">
            {skills.map((s) => (
              <article className="skill-card" key={s.title}>
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap section" id="work">
          <div className="section-head">
            <p className="kicker">Projects</p>
            <h2>Selected work from the résumé</h2>
          </div>
          <div className="cases">
            {cases.map((c) => (
              <article className="case" key={c.title}>
                <div className="case-top">
                  <span className="tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <div className="chips">
                    {c.stack.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pa">
                  <div>
                    <h4>Problem</h4>
                    <p>{c.problem}</p>
                  </div>
                  <div>
                    <h4>Action</h4>
                    <p>{c.action}</p>
                  </div>
                  <div>
                    <h4>Result</h4>
                    <p>{c.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap section" id="experience">
          <div className="section-head">
            <p className="kicker">Career</p>
            <h2>Experience</h2>
          </div>
          <div className="exp">
            {experience.map((job) => (
              <article className="exp-item" key={job.dates}>
                <div className="exp-meta">
                  <span className="dot" />
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                  <p className="meta">{job.place}</p>
                  <p className="meta">{job.dates}</p>
                </div>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap section" id="approach">
          <div className="section-head">
            <p className="kicker">Method</p>
            <h2>How a sprint looks with me on quality</h2>
          </div>
          <div className="process">
            {process.map((p) => (
              <article key={p.step}>
                <div className="step">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap section" id="edu">
          <div className="edu-grid">
            <article>
              <p className="kicker">Education</p>
              {education.map((e) => (
                <div className="edu-row" key={e.title}>
                  <strong>{e.title}</strong>
                  <span>{e.meta}</span>
                </div>
              ))}
            </article>
            <article>
              <p className="kicker">Certifications</p>
              <div className="chips">
                {certifications.map((c) => (
                  <span className="chip glow-chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
              <p className="kicker" style={{ marginTop: 22 }}>
                Languages
              </p>
              <p className="meta">{languages.join('  ·  ')}</p>
            </article>
          </div>
        </section>

        <section className="wrap section" id="contact">
          <div className="contact">
            <div>
              <p className="kicker">Let’ss talk</p>
              <h2>Hiring for automation-heavy QA?</h2>
              <p>
                Send the JD and stack. I can walk a Cypress/Playwright suite, a Postman collection, or how I gate a
                release — live.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <a className="btn btn-ghost" href={profile.phoneHref}>
                  {profile.phone}
                </a>
                <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
            <a className="cv-tile" href={profile.resumePdf} download>
              <span className="kicker">PDF</span>
              <strong>Download résumé</strong>
              <span>Same content as the one-pager, formatted for ATS.</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Islamabad · Automation. & Manual SQA</span>
      </footer>
    </div>
  )
}

function Resume() {
  return (
    <div className="resume-page">
      <div className="wrap">
        <div className="resume-bar">
          <a className="btn btn-ghost dark" href="#top">
            ← Portfolio
          </a>
          <div className="hero-actions">
            <a className="btn btn-ghost dark" href={profile.resumePdf} download>
              Download PDF
            </a>
            <button className="btn btn-primary" type="button" onClick={() => window.print()}>
              Print
            </button>
          </div>
        </div>
        <article className="resume-sheet">
          <h1>{profile.name}</h1>
          <p>
            {profile.role} · {profile.location}
            <br />
            {profile.email} · {profile.phone}
            <br />
            linkedin.com/in/MHamza-SQA · github.com/hamzaSqa847
          </p>
          <h2>Summary</h2>
          <p>{profile.summary}</p>
          <h2>Key achievements</h2>
          <ul>
            <li>Automated end-to-end regression with Selenium and Cypress — shorter manual cycles, faster releases.</li>
            <li>Integrated UI and API suites into CI/CD for more reliable deployments.</li>
            <li>Found and reported critical defects before production across web, mobile, and AI chatbot apps.</li>
          </ul>
          <h2>Experience</h2>
          {experience.map((job) => (
            <div key={job.dates} style={{ marginBottom: 16 }}>
              <strong>{job.role}</strong> — {job.company} ({job.dates})
              <div style={{ color: '#555', fontSize: '0.9rem' }}>{job.place}</div>
              <ul>
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
          <h2>Projects</h2>
          <ul>
            {cases.map((c) => (
              <li key={c.title}>
                <strong>{c.title}</strong> — {c.result}
              </li>
            ))}
          </ul>
          <h2>Tools</h2>
          <p>{tools.join(' · ')}</p>
          <h2>Education & certifications</h2>
          <ul>
            {education.map((e) => (
              <li key={e.title}>
                {e.title} — {e.meta}
              </li>
            ))}
            <li>Certifications: {certifications.join(' · ')}</li>
            <li>Languages: {languages.join(' · ')}</li>
          </ul>
        </article>
      </div>
    </div>
  )
}

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (hash === '#resume') {
    return <Resume />
  }

  return <Site />
}
