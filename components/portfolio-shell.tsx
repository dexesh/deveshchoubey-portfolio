"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Command,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Layers3,
  LoaderCircle,
  Mail,
  Menu,
  Network,
  Search,
  Send,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Terminal,
  TestTube2,
  X,
  Zap,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";

const navigation = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["architecture", "Architecture"],
  ["experience", "Timeline"],
  ["assistant", "Assistant"],
  ["contact", "Contact"],
] as const;

type SectionId = (typeof navigation)[number][0];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{index}</span>{eyebrow}</div>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function Tag({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return <span className={cn("tag", muted && "tag-muted")}>{children}</span>;
}

function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  const actions = useMemo(
    () => [
      ...navigation.map(([id, label]) => ({ label: `Go to ${label}`, hint: `#${id}`, href: `#${id}`, external: false })),
      { label: "Open GitHub", hint: "dexesh", href: portfolio.identity.github, external: true },
      { label: "Open LinkedIn", hint: "Devesh Choubey", href: portfolio.identity.linkedin, external: true },
      { label: "Email Devesh", hint: portfolio.identity.email, href: `mailto:${portfolio.identity.email}`, external: false },
      { label: "Download public resume", hint: "PDF · privacy-safe", href: "/Devesh_Choubey_Public_Resume.pdf", external: false },
    ],
    [],
  );

  const filtered = actions.filter((action) => `${action.label} ${action.hint}`.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (open) {
      setQuery("");
      window.setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="command-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div
            className="command-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="command-search">
              <Search size={18} aria-hidden="true" />
              <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Navigate or open a profile…" aria-label="Search commands" />
              <kbd>ESC</kbd>
            </div>
            <div className="command-results">
              {filtered.length ? filtered.map((action) => (
                <a key={action.label} href={action.href} target={action.external ? "_blank" : undefined} rel={action.external ? "noreferrer" : undefined} onClick={onClose}>
                  <span>{action.label}<small>{action.hint}</small></span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )) : <p className="empty-result">No matching command.</p>}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function ArchitectureDiagram() {
  const pathIcons = [Terminal, Network, ShieldCheck, Boxes, Layers3, Database, ServerCog];

  return (
    <div className="full-architecture" aria-label="Complete JobPortal system architecture and workflows">
      <div className="architecture-group">
        <div className="architecture-group-head"><span>REQUEST PATH / 01</span><h3>One request across the complete application stack</h3></div>
        <div className="request-path">
          {portfolio.flagship.architecture.requestPath.map((node, index) => {
            const Icon = pathIcons[index];
            return (
              <div className="request-node-wrap" key={node.id}>
                <div className="request-node">
                  <div><span>{node.id}</span><Icon size={17} aria-hidden="true" /></div>
                  <h4>{node.title}</h4>
                  <p>{node.detail}</p>
                </div>
                {index < portfolio.flagship.architecture.requestPath.length - 1 ? <ArrowRight className="request-arrow" size={17} aria-hidden="true" /> : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="architecture-group">
        <div className="architecture-group-head"><span>PRODUCT FLOWS / 02</span><h3>Two roles, one connected hiring workflow</h3></div>
        <div className="actor-flow-grid">
          {portfolio.flagship.architecture.actorFlows.map((flow, flowIndex) => (
            <article className="actor-flow" key={flow.actor}>
              <div className="actor-flow-title"><div>{flowIndex === 0 ? <Search size={18} /> : <BriefcaseBusiness size={18} />}</div><span><strong>{flow.actor}</strong><small>{flow.summary}</small></span></div>
              <ol>{flow.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol>
            </article>
          ))}
        </div>
      </div>

      <div className="architecture-group">
        <div className="architecture-group-head"><span>DOMAIN MAP / 03</span><h3>Controllers, services, repositories, and persistence responsibilities</h3></div>
        <div className="domain-grid">
          {portfolio.flagship.architecture.domains.map((domain, index) => (
            <article className="domain-card" key={domain.title}>
              <div><span>D{index + 1}</span><CircleDot size={12} /></div>
              <h4>{domain.title}</h4>
              <code>{domain.code}</code>
              <p>{domain.detail}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="architecture-group ai-architecture">
        <div className="architecture-group-head"><span>AI RETRIEVAL / 04</span><h3>Job indexing and candidate-to-job recommendation</h3></div>
        <div className="ai-flow-grid">
          {portfolio.flagship.architecture.aiFlow.map((step, index) => (
            <div className="ai-flow-step" key={step.id}>
              <div><span>{step.id}</span>{index < portfolio.flagship.architecture.aiFlow.length - 1 ? <ArrowRight size={15} /> : <Check size={15} />}</div>
              <h4>{step.title}</h4>
              <p>{step.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="architecture-group">
        <div className="architecture-group-head"><span>RUNTIME TOPOLOGY / 05</span><h3>Deployment, dependencies, and operational feedback</h3></div>
        <div className="deployment-grid">
          {portfolio.flagship.architecture.deployment.map((item, index) => (
            <article key={item.title}><span>0{index + 1}</span><h4>{item.title}</h4><p>{item.detail}</p></article>
          ))}
        </div>
        <div className="topology-line" aria-label="Deployment topology">
          <span>Browser</span><ArrowRight size={15} /><span>NGINX :80</span><ArrowRight size={15} /><span>app1 :8080</span><span className="topology-or">OR</span><span>app2 :8080</span><ArrowRight size={15} /><span>MySQL · Ollama · Pinecone</span>
        </div>
      </div>

    </div>
  );
}

function PortfolioAssistant() {
  const presets = ["How does JobPortal work?", "What is Devesh’s strongest stack?", "What impact has he delivered?"];
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Ask about JobPortal architecture, engineering skills, work impact, or education.");
  const [evidence, setEvidence] = useState<string[]>(["Local structured portfolio dataset"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function ask(nextQuestion?: string) {
    const value = (nextQuestion ?? question).trim();
    if (value.length < 2) {
      setError("Enter a short question first.");
      return;
    }
    setLoading(true);
    setError("");
    setQuestion(value);
    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: value }),
      });
      const data = (await response.json()) as { answer?: string; evidence?: string[]; error?: string };
      if (!response.ok || !data.answer) throw new Error(data.error ?? "Assistant request failed.");
      setAnswer(data.answer);
      setEvidence(data.evidence ?? []);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "The assistant is unavailable.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="assistant-panel">
      <div className="assistant-head">
        <div className="assistant-avatar"><Bot size={21} aria-hidden="true" /></div>
        <div><strong>Portfolio Assistant</strong><span><CircleDot size={11} /> MOCK / LOCAL DATA</span></div>
      </div>
      <div className="assistant-answer" aria-live="polite">
        {loading ? <span className="thinking"><LoaderCircle className="spin" size={18} /> Inspecting structured evidence…</span> : <p>{answer}</p>}
        {!loading && evidence.length ? <div className="evidence-row">{evidence.map((item) => <span key={item}><Check size={11} />{item}</span>)}</div> : null}
      </div>
      <div className="assistant-presets">
        {presets.map((preset) => <button key={preset} type="button" onClick={() => void ask(preset)}>{preset}</button>)}
      </div>
      <form className="assistant-form" onSubmit={(event) => { event.preventDefault(); void ask(); }}>
        <label className="sr-only" htmlFor="assistant-question">Ask the portfolio assistant</label>
        <input id="assistant-question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask a recruiter-style question…" />
        <button type="submit" aria-label="Send question" disabled={loading}><Send size={17} /></button>
      </form>
      {error ? <p className="form-error" role="alert">{error}</p> : null}
      <p className="assistant-note">Mock behavior is isolated behind <code>/api/assistant</code>; replace that endpoint with a RAG service later.</p>
    </div>
  );
}

function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const note = String(form.get("message") ?? "").trim();
    if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || note.length < 20) {
      setState("error");
      setMessage("Add your name, a valid email, and a message of at least 20 characters.");
      return;
    }
    setState("loading");
    setMessage("Preparing a message in your email app…");
    window.setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${note}\n\nFrom: ${name} (${email})`);
      setState("success");
      setMessage("Your email draft is ready. Send it from your preferred email app.");
      window.location.href = `mailto:${portfolio.identity.email}?subject=${subject}&body=${body}`;
    }, 450);
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="field-pair">
        <label><span>Name</span><input name="name" autoComplete="name" placeholder="Your name" required minLength={2} /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label>
      </div>
      <label><span>Message</span><textarea name="message" rows={5} placeholder="Tell me about the role, team, or engineering problem…" required minLength={20} /></label>
      <div className="form-footer">
        <button className="button button-primary" type="submit" disabled={state === "loading"}>
          {state === "loading" ? <LoaderCircle className="spin" size={17} /> : <Send size={17} />}
          {state === "loading" ? "Preparing…" : "Start a conversation"}
        </button>
        {message ? <p className={cn("form-status", state === "error" && "is-error", state === "success" && "is-success")} role="status">{message}</p> : null}
      </div>
    </form>
  );
}

export function PortfolioShell() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = navigation.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id as SectionId);
      },
      { rootMargin: "-25% 0px -62%", threshold: [0.05, 0.25, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function openPalette(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen(true);
      }
    }
    document.addEventListener("keydown", openPalette);
    return () => document.removeEventListener("keydown", openPalette);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Devesh Choubey home"><span>DC</span><strong>DEVESH.C</strong></a>
        <nav className={cn("main-nav", mobileOpen && "is-open")} aria-label="Primary navigation">
          {navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)} className={activeSection === id ? "active" : ""}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="command-trigger" type="button" onClick={() => setPaletteOpen(true)} aria-label="Open command palette"><Command size={14} /><span>Quick jump</span><kbd>⌘K</kbd></button>
          <button className="mobile-trigger" type="button" onClick={() => setMobileOpen((value) => !value)} aria-expanded={mobileOpen} aria-label="Toggle navigation">{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="top">
          <div className="hero-grid">
            <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="eyebrow"><span className="status-dot" />{portfolio.hero.eyebrow}</div>
              <h1>{portfolio.hero.headline}</h1>
              <p className="hero-intro">{portfolio.hero.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View flagship project <ArrowRight size={17} /></a>
                <a className="button button-secondary" href="/Devesh_Choubey_Public_Resume.pdf" download>Resume <Download size={17} /></a>
                <a className="button button-quiet" href="#contact">Contact <Mail size={17} /></a>
              </div>
              <div className="hero-socials">
                <a href={portfolio.identity.github} target="_blank" rel="noreferrer"><Code2 size={17} />GitHub</a>
                <a href={portfolio.identity.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} />LinkedIn</a>
                <a href={`mailto:${portfolio.identity.email}`}><Mail size={17} />Email</a>
              </div>
              <div className="availability"><Zap size={15} /><span>{portfolio.hero.availability}</span></div>
            </motion.div>

            <motion.div className="console-card" initial={reduceMotion ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.12 }}>
              <div className="console-top"><div><i /><i /><i /></div><span>engineering_profile.sh</span><Terminal size={15} /></div>
              <div className="console-body">
                {portfolio.consoleLines.map((line, index) => <div key={line} className={index === 0 ? "console-command" : ""}><span>{String(index + 1).padStart(2, "0")}</span><code>{line}</code></div>)}
                <div className="console-cursor"><span>07</span><code>_<i /></code></div>
              </div>
              <div className="console-foot"><span><CircleDot size={12} /> SYSTEM ONLINE</span><span>BENGALURU · IST</span></div>
            </motion.div>
          </div>
          <a className="scroll-cue" href="#about"><span>Explore the system</span><ArrowDown size={17} /></a>
        </section>

        <section className="section-shell content-section" id="about">
          <Reveal><SectionHeading index="01" eyebrow="Profile" title="Backend foundations. AI where it earns its place." /></Reveal>
          <div className="about-grid">
            <Reveal className="about-copy"><p className="lead">{portfolio.about[0]}</p><p>{portfolio.about[1]}</p></Reveal>
            <Reveal className="identity-card" delay={0.08}>
              <div className="identity-monogram">DC</div>
              <div><span>Current role</span><strong>{portfolio.identity.employerTitle}</strong></div>
              <div><span>Location</span><strong>{portfolio.identity.location}</strong></div>
              <div><span>Positioning</span><strong>Backend · Systems · Applied AI</strong></div>
              <div className="identity-footer"><ShieldCheck size={16} />Verified details only. Sensitive contact data omitted.</div>
            </Reveal>
          </div>
        </section>

        <section className="section-shell content-section" id="skills">
          <Reveal><SectionHeading index="02" eyebrow="Capability map" title="A focused engineering stack—not a wall of logos." intro="Primary skills reflect professional use or public implementation. Supporting technologies are shown as working knowledge or project-specific tools." /></Reveal>
          <div className="skills-grid">
            {portfolio.skills.map((skill, index) => (
              <Reveal className="skill-card" key={skill.group} delay={index * 0.05}>
                <div className="skill-number">0{index + 1}</div>
                <div className="skill-heading"><h3>{skill.group}</h3><span>{skill.note}</span></div>
                <div className="tag-cloud">{skill.items.map((item) => <Tag key={item}>{item}</Tag>)}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-shell content-section" id="projects">
          <Reveal><SectionHeading index="03" eyebrow="Selected work" title="One flagship system, examined like an engineering case study." intro="JobPortal receives the detailed treatment because both the resume and public repository support it. Supporting projects remain concise and source-labeled." /></Reveal>

          <Reveal className="flagship-card">
            <div className="flagship-head">
              <div><span className="project-index">CASE STUDY / 01</span><h3>{portfolio.flagship.name}</h3><p>{portfolio.flagship.positioning}</p></div>
              <a href={portfolio.flagship.repo} target="_blank" rel="noreferrer" className="repo-link"><Code2 size={17} />View repository<ArrowUpRight size={16} /></a>
            </div>
            <div className="metric-grid">
              {portfolio.flagship.metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span><small>{metric.source}</small></div>)}
            </div>
            <div className="flagship-body">
              <div>
                <div className="case-block"><span className="case-label">OBJECTIVE</span><p>{portfolio.flagship.objective}</p></div>
                <div className="case-block"><span className="case-label">IMPLEMENTATION</span><ul className="check-list">{portfolio.flagship.implementation.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div>
              </div>
              <aside>
                <div className="case-block"><span className="case-label">PRODUCT SURFACE</span><ul className="compact-list">{portfolio.flagship.features.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className="case-block"><span className="case-label">VERIFIED STACK</span><div className="tag-cloud">{portfolio.flagship.stack.map((item) => <Tag key={item} muted>{item}</Tag>)}</div></div>
                <div className="project-status"><CircleDot size={13} /><span>{portfolio.flagship.status}</span></div>
              </aside>
            </div>
            <div className="evidence-callout"><TestTube2 size={19} /><div><strong>Evidence, not theatre</strong><p>{portfolio.flagship.caveat}</p></div></div>
          </Reveal>

          <div className="supporting-header"><h3>Additional projects</h3><span>Concise · resume-sourced</span></div>
          <div className="supporting-grid">
            {portfolio.supportingProjects.map((project, index) => (
              <Reveal className="supporting-card" key={project.name} delay={index * 0.06}>
                <div className="supporting-top"><span>0{index + 2}</span><Tag muted>{project.source}</Tag></div>
                <h4>{project.name}</h4><p>{project.summary}</p>
                <ul>{project.results.map((result) => <li key={result}><ChevronRight size={14} />{result}</li>)}</ul>
                <div className="tag-cloud">{project.stack.map((item) => <Tag key={item}>{item}</Tag>)}</div>
                <div className="supporting-status">{project.status}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-shell content-section" id="architecture">
          <Reveal><SectionHeading index="04" eyebrow="Architecture lab" title="The complete JobPortal—not only the AI feature." intro="A source-level map of the current controllers, services, repositories, entity relationships, role workflows, recommendation boundary, file handling, and two-instance deployment topology." /></Reveal>
          <Reveal className="architecture-panel">
            <div className="architecture-panel-head"><div><span>JOBPORTAL / SOURCE-LEVEL SYSTEM MAP</span><h3>Full hiring platform architecture</h3></div><div className="architecture-scope">7 controllers · 13 services · 7 repositories · 9 persisted entities</div></div>
            <ArchitectureDiagram />
          </Reveal>
        </section>

        <section className="section-shell content-section" id="experience">
          <Reveal><SectionHeading index="05" eyebrow="Trajectory" title="Experience and education." /></Reveal>
          <div className="timeline">
            {portfolio.experience.map((item) => (
              <Reveal className="timeline-item" key={item.company}>
                <div className="timeline-marker"><BriefcaseBusiness size={18} /></div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-content"><div><span>{item.company} · {item.location}</span><h3>{item.role}</h3></div><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
              </Reveal>
            ))}
            <Reveal className="timeline-item">
              <div className="timeline-marker"><GraduationCap size={18} /></div>
              <div className="timeline-period">{portfolio.education.period}</div>
              <div className="timeline-content"><div><span>{portfolio.education.institution} · {portfolio.education.location}</span><h3>{portfolio.education.degree}</h3></div><p className="education-result">{portfolio.education.result}</p></div>
            </Reveal>
          </div>
        </section>

        <section className="section-shell content-section" id="achievements">
          <Reveal><SectionHeading index="06" eyebrow="Measured outcomes" title="Selected engineering and problem-solving impact." /></Reveal>
          <div className="achievement-grid">{portfolio.achievements.map((item, index) => <Reveal className="achievement" key={item.label} delay={index * 0.04}><strong>{item.value}</strong><span>{item.label}</span></Reveal>)}</div>
        </section>

        <section className="section-shell content-section" id="assistant">
          <Reveal><SectionHeading index="07" eyebrow="Portfolio assistant" title="Query the evidence—not a generic chatbot." intro="This demo answers from a structured local dataset. Its interface and API boundary are ready for a future retrieval backend." /></Reveal>
          <Reveal><PortfolioAssistant /></Reveal>
        </section>

        <section className="section-shell content-section contact-section" id="contact">
          <Reveal>
            <div className="contact-grid">
              <div className="contact-copy">
                <div className="section-kicker"><span>08</span>Contact</div>
                <h2>Have a hard systems problem or a practical AI idea?</h2>
                <p>I’m interested in backend, platform, integration, and applied AI roles where reliability matters as much as the demo.</p>
                <div className="contact-links">
                  <a href={`mailto:${portfolio.identity.email}`}><Mail size={17} /><span>{portfolio.identity.email}</span><ArrowUpRight size={15} /></a>
                  <a href={portfolio.identity.github} target="_blank" rel="noreferrer"><Code2 size={17} /><span>github.com/dexesh</span><ArrowUpRight size={15} /></a>
                  <a href={portfolio.identity.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} /><span>LinkedIn profile</span><ArrowUpRight size={15} /></a>
                </div>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <div><span>DC / ENGINEERING CONTROL CENTER</span><p>Built around verified work, clear provenance, and practical engineering.</p></div>
        <div><a href="#top">Back to top <ArrowUpRight size={14} /></a><span>© {new Date().getFullYear()} {portfolio.identity.name}</span></div>
      </footer>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
