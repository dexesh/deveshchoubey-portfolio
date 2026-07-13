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
      "Java and Python engineer working across enterprise validation, secure backend services, and practical AI retrieval workflows. My flagship work connects conventional Spring architecture with embeddings, vector search, and measured performance testing.",
    availability: "Open to backend, platform, and applied AI engineering roles",
  },
  about: [
    "My engineering path started with algorithms and core computer science, then moved into systems where correctness, integration, and operational behavior matter. At Infosys, I work on validation and integration workflows for enterprise applications—improving regression coverage, reducing escaped defects, and shortening test cycles.",
    "Outside work, I explore the boundary between dependable backend design and practical AI. The JobPortal project is the clearest example: a layered Spring application that processes resumes, produces embeddings locally through Ollama, stores vectors in Pinecone, and recommends jobs through semantic retrieval—while still addressing authentication, relational data, containerization, load balancing, and performance measurement.",
  ],
  consoleLines: [
    "$ profile.inspect --focus backend,ai",
    "runtime     Java 21 · Python",
    "services    Spring Boot · FastAPI",
    "retrieval   Ollama → Embeddings → Pinecone",
    "systems     MySQL · Docker · NGINX · k6",
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
      items: ["MySQL", "SQL", "Docker Compose", "NGINX", "Vector Databases", "JDBC"],
    },
    {
      group: "Interfaces & tools",
      note: "Supporting toolkit",
      items: ["Thymeleaf", "HTML / CSS", "Bootstrap", "Git", "Postman", "Maven", "k6"],
    },
  ],
  flagship: {
    name: "AI-Powered Job Portal with Semantic Search",
    repo: "https://github.com/dexesh/JobPortal",
    status: "Active portfolio project · no verified live deployment",
    positioning:
      "A full-stack hiring platform that joins conventional enterprise backend patterns with semantic job discovery. Recruiters manage roles and applicants; candidates build profiles, upload resumes, save and apply to jobs, and receive recommendations based on meaning rather than keyword overlap alone.",
    objective:
      "Reduce the friction between candidate profiles and job descriptions while preserving the fundamentals expected of a real backend system: access control, persistence, layered services, deployment topology, and observable performance.",
    implementation: [
      "Layered Spring architecture with controllers, focused service classes, JPA repositories, entities, configuration, and utilities.",
      "Role-aware Spring Security form authentication backed by a custom user-details service and BCrypt password hashing.",
      "Profile and resume upload flows backed by local file utilities, structured candidate skills, and downloadable recruiter-facing resumes.",
      "Local Ollama chat and embedding models integrated through Spring AI, with Pinecone indexing job-description vectors and returning job IDs for JPA hydration.",
      "Two Spring Boot application containers behind NGINX, orchestrated through Docker Compose.",
      "k6 artifacts for a 1,000-virtual-user run, used to surface authentication latency rather than hide it.",
    ],
    features: [
      "Recruiter and job-seeker roles",
      "Job creation and applicant review",
      "Search by title, location, job type, work mode, and posting date",
      "Saved jobs and application tracking",
      "Resume upload and profile management",
      "Semantic recommendation workflow",
    ],
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring AI",
      "Spring Security",
      "Spring Data JPA",
      "MySQL",
      "Ollama",
      "Pinecone",
      "PDFBox",
      "Docker Compose",
      "NGINX",
      "k6",
    ],
    metrics: [
      { value: "1,000", label: "peak virtual users", source: "repository artifact" },
      { value: "7,196", label: "requests recorded", source: "repository artifact" },
      { value: "0%", label: "request failure rate", source: "repository artifact" },
      { value: "85%", label: "relevance score", source: "resume-reported" },
    ],
    caveat:
      "The committed load test recorded approximately 10.68 s median and 16.84 s p95 request duration. The result is presented as engineering evidence and a discovered optimization target—not as a production-performance claim. The 85% relevance figure is resume-reported; its evaluation dataset is not public.",
    architecture: {
      requestPath: [
        { id: "01", title: "Browser UI", detail: "Server-rendered Thymeleaf views with Bootstrap, forms, filters, and a small fetch-based recommendation surface." },
        { id: "02", title: "NGINX edge", detail: "Port 80 reverse proxy distributes traffic across two Spring Boot containers." },
        { id: "03", title: "Security", detail: "Spring Security form login, custom user lookup, BCrypt hashing, and recruiter/job-seeker authorities." },
        { id: "04", title: "MVC controllers", detail: "Seven controllers handle identity, dashboards, jobs, profiles, applications, saves, and downloads." },
        { id: "05", title: "Domain services", detail: "Focused services coordinate current-user context, job search, profile persistence, applications, and AI retrieval." },
        { id: "06", title: "Repositories", detail: "Spring Data JPA repositories combine derived lookups with native search and recruiter aggregate queries." },
        { id: "07", title: "Data systems", detail: "MySQL stores hiring records; the filesystem stores uploads; Pinecone stores job vectors." },
      ],
      actorFlows: [
        {
          actor: "Job seeker journey",
          summary: "Discover, evaluate, save, apply, and maintain a skills-rich candidate profile.",
          steps: [
            "Register as Job Seeker and authenticate",
            "Search/filter the dashboard or public listings",
            "Open job details and inspect company/location data",
            "Save a job or submit an application with date and cover letter",
            "Update profile, skills, photo, and resume",
            "Request personalized recommendations from the dashboard",
          ],
        },
        {
          actor: "Recruiter journey",
          summary: "Publish roles, monitor candidate volume, and review applicant profiles.",
          steps: [
            "Register as Recruiter and complete company profile",
            "Create or edit a job with company and location entities",
            "Persist the role and trigger job-vector indexing",
            "View recruiter-owned roles with applicant counts",
            "Open a role to review its applicant list",
            "Inspect candidate profiles and download resumes",
          ],
        },
      ],
      domains: [
        {
          title: "Identity & access",
          code: "UsersController → UsersService → UsersRepository",
          detail: "Registration creates a Users row plus the matching recruiter or seeker profile. CustomUserDetails maps UsersType to a Spring Security authority; successful login routes both roles to the dashboard.",
        },
        {
          title: "Job discovery",
          code: "JobPostActivityController → Service → Repository",
          detail: "Dashboard and public search combine title, location, employment type, remote mode, and date filters. Native SQL joins job and location data; authenticated seekers are decorated with applied/saved state.",
        },
        {
          title: "Profiles & files",
          code: "Profile controllers → profile services → MySQL + photos/",
          detail: "Recruiter and candidate profiles share the user primary key. Candidate skills cascade through a one-to-many relation; photos and resumes are stored under role/user folders and exposed through MVC resource handling.",
        },
        {
          title: "Applications & saves",
          code: "Apply/Save controllers → services → join entities",
          detail: "JobSeekerApply and JobSeekerSave connect a candidate profile to a job. Repository lookups support both candidate-centric tracking and recruiter-centric applicant review, with unique candidate/job pairs.",
        },
        {
          title: "Recruiter operations",
          code: "Job service → recruiter aggregate query",
          detail: "Recruiter-owned jobs are projected into DTOs using a grouped native query that joins jobs, companies, locations, and application counts for the management dashboard.",
        },
        {
          title: "Recommendation boundary",
          code: "RecommendationService → Ollama / Pinecone → JPA",
          detail: "The async endpoint requests five vector matches from Pinecone, converts vector IDs to job IDs, hydrates authoritative job records from MySQL, and returns compact JSON to the dashboard.",
        },
      ],
      aiFlow: [
        { id: "A1", title: "Persist job", detail: "A recruiter submission is saved through JPA first, producing the job ID used across both data stores." },
        { id: "A2", title: "Chunk & embed", detail: "Title plus description is split into 512-character chunks and embedded locally through Spring AI's Ollama EmbeddingModel." },
        { id: "A3", title: "Index vectors", detail: "Each generated vector is upserted into the Pinecone embeddingindex under the relational job ID." },
        { id: "A4", title: "Prepare candidate", detail: "ResumeSummaryService uses a local Ollama chat model to retain skills, tools, roles, responsibilities, and experience signals." },
        { id: "A5", title: "Mean-pool", detail: "The candidate text is split into 1,000-character chunks; embeddings are averaged into one query vector." },
        { id: "A6", title: "Retrieve & hydrate", detail: "Pinecone returns the top five IDs; JobPostActivityRepository loads full job entities for the UI response." },
      ],
      deployment: [
        { title: "Traffic", detail: "NGINX listens on port 80 and round-robins requests to app1:8080 and app2:8080." },
        { title: "Runtime", detail: "Both application containers run the Java 21 JAR built from the Spring Boot project." },
        { title: "External dependencies", detail: "Compose points each instance to host-provided MySQL and Ollama services; Pinecone is reached through its Java client." },
        { title: "Observability & load", detail: "Actuator endpoints expose runtime health, while k6 exercises the login path through user lookup and BCrypt verification." },
      ],
      backlog: [
        "Activate PDF text extraction in the live recommendation path; the current controller passes a resume reference while the PDFBox extraction block is commented out.",
        "Re-enable CSRF protection and enforce role authorization at endpoint level in addition to role-aware views.",
        "Move uploaded files to shared object storage before relying on two stateless application instances in production.",
      ],
    },
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
