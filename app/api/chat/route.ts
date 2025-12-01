import { generateText } from "ai"

const BUSINESS_CONTEXT = `You are an expert assistant in International Business and Relations. 
You have deep knowledge of:
- Idealism in international relations
- Realism in international relations
- Marxist ideology and its application to international relations
- International institutions and organizations
- Global economic systems
- Geopolitical conflicts and diplomacy

Respond in Spanish. Provide educational, accurate, and comprehensive answers to questions about international business and relations.
Focus on explaining complex concepts in an understandable way, using examples when relevant.`

export async function POST(req: Request) {
  const { messages } = await req.json()

  const userMessages = messages.map((m: any) => ({
    role: m.role,
    content: m.content,
  }))

  try {
    const { text } = await generateText({
      model: "openai/gpt-4-mini",
      system: BUSINESS_CONTEXT,
      messages: userMessages,
    })

    return Response.json({
      role: "assistant",
      content: text,
    })
  } catch (error) {
    console.error("Error:", error)
    return Response.json({ error: "Error processing request" }, { status: 500 })
  }
}
