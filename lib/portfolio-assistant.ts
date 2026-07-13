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
      answer: `${portfolio.flagship.name} is Devesh’s flagship project. Its full path runs from Thymeleaf views through Spring Security, seven MVC controllers, domain services, JPA repositories, MySQL, role-specific recruiter and candidate workflows, local file handling, and an Ollama/Pinecone recommendation boundary. Docker Compose runs two Java 21 application containers behind NGINX, and the committed k6 artifact records 1,000 peak virtual users and 7,196 requests.`,
      mock: true,
      evidence: ["Current JobPortal controllers and services", "Entity and repository model", "Docker, NGINX, and k6 files"],
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
      answer: "His primary positioning is Java/Spring backend engineering with Python automation and applied AI integration. Strong supporting tools include MySQL, JPA/Hibernate, Docker Compose, NGINX, k6, Ollama, Pinecone, FastAPI, PyTorch, and Whisper.",
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
    answer: "I can answer questions about Devesh’s JobPortal architecture, backend and AI skills, Infosys experience, education, projects, or contact details. This assistant currently uses local structured portfolio data, not a live RAG model.",
    mock: true,
    evidence: ["Local structured portfolio dataset"],
  };
}
