import { answerPortfolioQuestion } from "@/lib/portfolio-assistant";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { question?: unknown };
    if (typeof body.question !== "string" || body.question.trim().length < 2) {
      return Response.json({ error: "Ask a question with at least two characters." }, { status: 400 });
    }

    return Response.json(answerPortfolioQuestion(body.question.trim()));
  } catch {
    return Response.json({ error: "The mock assistant could not process that request." }, { status: 400 });
  }
}
