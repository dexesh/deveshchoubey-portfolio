import { portfolio } from "@/data/portfolio";

export type AssistantResponse = {
  answer: string;
  mock: true;
  evidence: string[];
};

// MOCK ASSISTANT: deterministic keyword routing over local portfolio data.
// Replace this function (or its API route) with a real retrieval service later.
export function answerPortfolioQuestion(question: string): AssistantResponse {
  const value = question.toLowerCase();

  if (/job|portal|architecture|pinecone|ollama|semantic/.test(value)) {
    return {
      answer: `${portfolio.flagship.name} is Devesh’s flagship project. It is a Spring Boot 4 modular monolith for recruiters and job seekers, secured with role and ownership authorization, CSRF protection, sessions, and BCrypt. MySQL stores business data, Redis caches candidate embeddings and recommendation IDs while coordinating startup backfill, and Ollama plus Pinecone power asynchronous top-five semantic recommendations. Docker Compose runs two Java 21 application instances behind NGINX.`,
      mock: true,
      evidence: ["Current JobPortal README", "Redis cache and coordination behavior", "Docker Compose deployment setup"],
    };
  }

  if (/experience|infosys|work|impact|metric/.test(value)) {
    return {
      answer: "At Infosys, Devesh reports increasing regression coverage by 40%, reducing defect leakage by 25%, and accelerating test-cycle execution by 30% through automated validation, integration debugging, and data-driven automation.",
      mock: true,
      evidence: ["Resume-reported professional experience"],
    };
  }

  if (/skill|stack|technology|java|python/.test(value)) {
    return {
      answer: "His primary positioning is Java/Spring backend engineering with Python automation and applied AI integration. Strong supporting tools include MySQL, Redis, JPA/Hibernate, Docker Compose, NGINX, Ollama, Pinecone, FastAPI, PyTorch, and Whisper.",
      mock: true,
      evidence: ["Resume skills", "Public JobPortal source", "Public dependency files"],
    };
  }

  if (/education|college|degree|cgpa/.test(value)) {
    return {
      answer: `${portfolio.education.degree}, completed at ${portfolio.education.institution} in July 2025 with ${portfolio.education.result}.`,
      mock: true,
      evidence: ["Resume education section"],
    };
  }

  if (/contact|email|hire|reach/.test(value)) {
    return {
      answer: `The verified public contact channel is ${portfolio.identity.email}. GitHub and LinkedIn are also linked in the contact section.`,
      mock: true,
      evidence: ["Resume contact information"],
    };
  }

  return {
    answer: "I can answer questions about Devesh’s JobPortal, backend and AI skills, Infosys experience, education, projects, or contact details. This assistant currently uses local structured portfolio data, not a live RAG model.",
    mock: true,
    evidence: ["Local structured portfolio dataset"],
  };
}
