export const portfolio = {
  identity: {
    name: "Devesh Kumar Choubey",
    role: "Software Engineer — Backend Systems & Practical AI",
    employerTitle: "System Engineer at Infosys",
    location: "Bengaluru, India",
    email: "deveshchoubey4086@gmail.com",
    github: "https://github.com/dexesh",
    linkedin: "https://www.linkedin.com/in/devesh-choubey-063022220/",
    leetcode: "https://leetcode.com/u/devaop/",
  },
  hero: {
    eyebrow: "BACKEND ENGINEERING / APPLIED AI",
    headline: "I build dependable systems that turn complex workflows into useful software.",
    intro:
      "Java and Python engineer working across enterprise validation, secure backend services, and practical AI retrieval workflows. My flagship work combines Spring Boot, Redis coordination, local AI inference, and semantic vector search.",
    availability: "Open to backend, platform, and applied AI engineering roles",
  },
  about: [
    "My engineering path started with algorithms and core computer science, then moved into systems where correctness, integration, and operational behavior matter. At Infosys, I work on validation and integration workflows for enterprise applications—improving regression coverage, reducing escaped defects, and shortening test cycles.",
    "Outside work, I explore the boundary between dependable backend design and practical AI. JobPortal is the clearest example: a Spring Boot modular monolith that securely connects recruiters and candidates, processes resumes through Ollama, searches Pinecone job vectors, and uses Redis to cache AI results and coordinate multiple application instances.",
  ],
  consoleLines: [
    "$ profile.inspect --focus backend,ai",
    "runtime     Java 21 · Python",
    "services    Spring Boot · FastAPI",
    "retrieval   Ollama → Embeddings → Pinecone",
    "systems     MySQL · Redis · Docker · NGINX",
    "status      building practical, measurable systems",
  ],
  skills: [
    {
      group: "Primary backend",
      note: "Demonstrated in work or public source",
      items: ["Java", "Spring Boot", "Spring Security", "REST APIs", "JPA / Hibernate", "Python"],
    },
    {
      group: "AI & retrieval",
      note: "Applied and working knowledge",
      items: ["Spring AI", "Ollama", "Embeddings", "Pinecone", "RAG", "Prompt Engineering", "PyTorch", "Whisper"],
    },
    {
      group: "Data & infrastructure",
      note: "Project implementation",
      items: ["MySQL", "Redis", "SQL", "Docker Compose", "NGINX", "Vector Databases", "JDBC"],
    },
    {
      group: "Interfaces & tools",
      note: "Supporting toolkit",
      items: ["Thymeleaf", "HTML / CSS", "Bootstrap", "Git", "Postman", "Maven", "k6"],
    },
  ],
  flagship: {
    name: "AI-Powered Job Portal with Redis-Cached Semantic Search",
    repo: "https://github.com/dexesh/JobPortal",
    status: "Active portfolio project · no verified live deployment",
    positioning:
      "A Spring Boot 4 full-stack hiring platform where recruiters manage roles and applicants while job seekers search, save, apply, maintain profiles, upload PDF resumes, and receive asynchronous semantic recommendations.",
    objective:
      "Deliver a secure end-to-end hiring workflow and make repeat AI recommendations faster and reusable across multiple application instances without weakening relational consistency or access control.",
    implementation: [
      "Spring Boot 4 modular monolith with Spring MVC, Thymeleaf, focused services, Spring Data JPA, Hibernate, and MySQL as the source of truth.",
      "Spring Security enforces recruiter and job-seeker authorization, ownership checks, CSRF-protected form actions, session management, and BCrypt password hashing.",
      "The dashboard loads recommendations asynchronously after validating the candidate profile and fingerprinting the uploaded PDF resume with SHA-256.",
      "PDFBox extracts resume text; Ollama llama3.2 produces a technical summary; mxbai-embed-large generates the candidate vector used for Pinecone top-five search.",
      "Redis caches candidate embeddings for 30 days and ordered recommendation IDs for 10 minutes, with job-index versioning and compute-without-cache fallback.",
      "Docker Compose runs two Spring Boot instances, Redis 7, and NGINX with sticky routing; a Redis lock prevents concurrent Pinecone startup backfills.",
    ],
    features: [
      "Recruiter and job-seeker roles",
      "Job creation and applicant review",
      "Search by title, location, job type, work mode, and posting date",
      "Saved jobs and application tracking",
      "Resume upload and profile management",
      "Asynchronous semantic recommendations",
      "Automatic Pinecone indexing for recruiter jobs",
    ],
    stack: [
      "Java 21",
      "Spring Boot 4",
      "Spring MVC / Thymeleaf",
      "Spring AI",
      "Spring Security",
      "Spring Data JPA",
      "Spring Data Redis",
      "MySQL",
      "Redis 7",
      "Ollama",
      "Pinecone",
      "PDFBox",
      "Docker Compose",
      "NGINX",
      "Bootstrap / JavaScript",
      "Maven",
    ],
    metrics: [
      { value: "2", label: "application instances", source: "repository README" },
      { value: "30d", label: "embedding cache TTL", source: "repository README" },
      { value: "10m", label: "recommendation cache TTL", source: "repository README" },
      { value: "Top 5", label: "semantic job matches", source: "repository README" },
    ],
    caveat:
      "For an unchanged resume and job index, Redis cache hits avoid repeated PDF parsing, Ollama inference, and Pinecone search. The application still validates the resume and loads current job records from MySQL before returning ranked recommendation cards.",
  },
  supportingProjects: [
    {
      name: "Self-Evolving AI Resume Tailoring Agent",
      source: "Resume-sourced project",
      summary:
        "An agentic workflow that analyzes job descriptions, reasons over role requirements, and generates tailored resume output through multi-step prompts and iterative self-evaluation.",
      results: ["90% less manual effort (resume-reported)", "45% improvement in ATS keyword alignment (resume-reported)", "Dynamic LaTeX output"],
      stack: ["Python", "LLMs", "Prompt Engineering", "Gumloop", "Agentic Workflows"],
      status: "Source repository not publicly available",
    },
    {
      name: "Speech-to-Text Multimodal Transcription System",
      source: "Resume-sourced project",
      summary:
        "A FastAPI-backed transcription workflow for audio uploads, Whisper inference, transcript generation, and preprocessing through noise reduction and audio segmentation.",
      results: ["Audio upload API", "Transcript generation workflow", "Noise reduction and segmentation"],
      stack: ["Python", "PyTorch", "OpenAI Whisper", "FastAPI"],
      status: "Source repository not publicly available",
    },
  ],
  experience: [
    {
      period: "Sep 2025 — Present",
      role: "System Engineer",
      company: "Infosys",
      location: "Bengaluru, India",
      points: [
        "Designed automated validation pipelines using Python and API frameworks, increasing regression coverage by 40% across critical workflows.",
        "Worked across teams to debug, profile, and optimize integration workflows, reducing defect leakage by 25%.",
        "Applied scripting and data-driven analysis within ML and automation initiatives, accelerating test-cycle execution by 30%.",
      ],
    },
  ],
  education: {
    period: "Dec 2021 — Jul 2025",
    institution: "Nitte Meenakshi Institute of Technology",
    degree: "Bachelor of Engineering in Electronics and Communication Engineering",
    location: "Bengaluru, India",
    result: "7.65 CGPA",
  },
  achievements: [
    { value: "400+", label: "algorithmic challenges completed on LeetCode" },
    { value: "40%", label: "increase in regression coverage at Infosys" },
    { value: "25%", label: "reduction in defect leakage" },
    { value: "30%", label: "faster test-cycle execution" },
  ],
} as const;

export type Portfolio = typeof portfolio;
