import { ArrowUpRight, ArrowDown } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const github = portfolio.identity.github;
const projects = [
  { number: "02", name: "Commerce, from the core.", title: "EcommerceApplication", type: "IN DEVELOPMENT · 2026", description: "An ecommerce backend starting with a dedicated authentication service. I’m building the account domain, registration flow, and persistence layer with a ports-and-adapters architecture.", tags: ["Java", "Spring Boot", "PostgreSQL"], url: `${github}/EcommerceApplication` },
  { number: "03", name: "Write. Publish. Summarize.", title: "BlogApp", type: "BACKEND & AI · 2025", description: "A REST API for managing users and blog posts, with paginated search by title or author and Gemini-generated article summaries.", tags: ["Java", "Spring Boot", "Gemini"], url: `${github}/BlogApp` },
];

function External({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}

export function PortfolioShell() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header" id="top">
      <a className="wordmark" href="#top" aria-label="Devesh Choubey home">dc<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#projects">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a className="resume-link" href="/Devesh_Choubey_Public_Resume.pdf" target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={16} aria-hidden="true" /></a>
    </header>
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-top"><span className="eyebrow">SOFTWARE ENGINEER</span><span className="eyebrow location">BENGALURU, INDIA</span></div>
        <h1 id="hero-title">Devesh<span className="surname">Choubey<span className="period">.</span></span></h1>
        <div className="hero-bottom"><a className="work-link" href="#projects"><span className="circle"><ArrowDown size={23} aria-hidden="true" /></span>Explore my work</a><div className="hero-intro"><p>I build backends.<br /><span>And explore what AI can do with them.</span></p><div className="hero-meta">System Engineer at Infosys <span>/</span> Java & Python</div></div></div>
      </section>
      <section className="work section" id="projects" aria-labelledby="work-title">
        <div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2 id="work-title">Built with intent.</h2></div><External href={github} className="text-link">All repositories</External></div>
        <article className="featured-project">
          <div className="feature-copy"><span className="eyebrow">JOBPORTAL / FULL-STACK & AI</span><h3>A better match.<br />Beyond keywords.</h3><p>A hiring platform that connects resumes to relevant jobs through semantic search. Recruiters manage listings and applicants; candidates search, save, and apply.</p><div className="tags"><span>Spring Boot</span><span>Redis</span><span>Ollama</span><span>Pinecone</span></div><External href={`${github}/JobPortal`} className="feature-link">Explore JobPortal</External></div>
          <div className="architecture" role="img" aria-label="Recommendation flow: a PDF resume is processed by Ollama into an embedding, searched in Pinecone, and returns five job matches. Redis caches embeddings and recommendations."><div className="diagram-heading"><span>THE RECOMMENDATION FLOW</span><span>01</span></div><div className="flow-node"><span className="node-index">INPUT</span><strong>Your resume<span>PDF</span></strong></div><div className="flow-connector" aria-hidden="true">↓</div><div className="flow-node"><span className="node-index">OLLAMA</span><strong>Understand & embed</strong></div><div className="flow-connector" aria-hidden="true">↓</div><div className="flow-node result"><span className="node-index">PINECONE</span><strong>5 relevant matches<span>↗</span></strong></div><div className="cache-note"><span className="cache-mark" aria-hidden="true">↳</span> Redis caches embeddings & recommendations</div></div>
          <details className="project-details"><summary>Engineering details <span aria-hidden="true">+</span></summary><div className="detail-grid"><div><h4>Access & ownership</h4><p>Spring Security separates recruiter and candidate workflows, with ownership checks and CSRF-protected forms.</p></div><div><h4>Reuse expensive work</h4><p>Redis caches embeddings for 30 days and recommendations for 10 minutes. Resume fingerprints and job-index versions keep cache keys tied to the input.</p></div><div><h4>Multiple instances</h4><p>Docker Compose runs two application instances behind NGINX. A shared Redis lock coordinates startup indexing.</p></div></div></details>
        </article>
        <div className="project-grid">{projects.map(project => <article className="project" key={project.number}><div className="project-top"><span className="eyebrow">{project.type}</span><span className="project-number">{project.number}</span></div><div><span className="project-repo">{project.title}</span><h3>{project.name}</h3><p>{project.description}</p></div><div className="project-bottom"><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><External href={project.url} className="repository-link"><span className="sr-only">View {project.title} on GitHub</span></External></div></article>)}</div>
      </section>
      <section className="about section" id="about" aria-labelledby="about-title"><div className="about-intro"><span className="eyebrow">02 / A LITTLE ABOUT ME</span><h2 id="about-title">Curious by nature.<br /><em>Engineer by practice.</em></h2><p>I’m Devesh Kumar Choubey, a software engineer in Bengaluru. At Infosys, I work on automated validation and integration workflows. Outside work, I build Java backends and experiment with AI-powered applications.</p><p>I’m interested in the details behind a working product: how data moves, where access is checked, and what happens when a dependency fails.</p><External href={portfolio.identity.leetcode} className="text-link">400+ problems on LeetCode</External></div><div className="background"><div className="background-item"><span className="eyebrow">EXPERIENCE / SEP 2025 — PRESENT</span><h3>Infosys</h3><p className="position">System Engineer</p><p>Python automation, API validation, and integration testing across enterprise applications.</p></div><div className="background-item"><span className="eyebrow">EDUCATION / 2021 — 2025</span><h3>Nitte Meenakshi Institute<br />of Technology</h3><p>B.E. in Electronics & Communication<br />Bengaluru · 7.65 CGPA</p></div></div></section>
      <section className="toolkit section" aria-labelledby="toolkit-title"><h2 id="toolkit-title" className="eyebrow">MY TOOLKIT</h2><div><p><strong>Backend</strong><span>Java / Spring Boot / Spring Security / Python</span></p><p><strong>Data & infrastructure</strong><span>MySQL / PostgreSQL / Redis / Docker / NGINX</span></p><p><strong>AI & retrieval</strong><span>Spring AI / Ollama / Pinecone / Gemini</span></p></div></section>
      <section className="contact section" id="contact" aria-labelledby="contact-title"><span className="eyebrow">03 / GET IN TOUCH</span><div className="contact-main"><h2 id="contact-title">Let’s build<br /><em>something useful.</em></h2><a className="contact-arrow" href={`mailto:${portfolio.identity.email}`} aria-label="Email Devesh"><ArrowUpRight aria-hidden="true" /></a></div><div className="contact-bottom"><a className="email" href={`mailto:${portfolio.identity.email}`}>{portfolio.identity.email}</a><p>Open to backend & applied AI opportunities.</p></div></section>
    </main>
    <footer><a className="wordmark" href="#top" aria-label="Back to top">dc<span>.</span></a><span>© {new Date().getFullYear()} Devesh Choubey</span><div><External href={github}>GitHub</External><External href={portfolio.identity.linkedin}>LinkedIn</External></div></footer>
  </>;
}
