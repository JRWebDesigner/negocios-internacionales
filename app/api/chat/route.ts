const MOCK_RESPONSES: { [key: string]: string } = {
  idealismo:
    "El Idealismo en las Relaciones Internacionales es una teoría que enfatiza los valores morales, la cooperación y la creencia en que los estados pueden trabajar juntos por el bien común. Los idealistas creen que la educación, la diplomacia y las instituciones internacionales pueden prevenir conflictos.",
  realismo:
    "El Realismo es una teoría que ve las Relaciones Internacionales como un sistema anárquico donde los estados actúan en su propio interés. Los realistas creen que el poder militar y económico son factores determinantes en la política internacional.",
  marxismo:
    "El Marxismo aplicado a los Negocios Internacionales analiza las relaciones de clase a nivel global. Sostiene que el capitalismo internacional crea desigualdades entre naciones desarrolladas y en desarrollo, y que el comercio global perpetúa la explotación.",
  "negocios internacionales":
    "Los Negocios Internacionales se refieren a todas las actividades comerciales que cruzan fronteras nacionales. Incluyen importación/exportación, inversión extranjera directa, y operaciones de empresas multinacionales.",
  comercio:
    "El comercio internacional involucra el intercambio de bienes y servicios entre países. Es fundamental para la economía global y está regulado por organizaciones como la OMC (Organización Mundial del Comercio).",
  geopolítica:
    "La Geopolítica estudia cómo la geografía influye en las relaciones de poder entre países. Factores como recursos naturales, ubicación estratégica y demografía juegan roles importantes en los conflictos internacionales.",
  default:
    "Es una pregunta interesante sobre Negocios Internacionales. Para una respuesta más específica, podrías reformular tu pregunta enfocándote en temas como Idealismo, Realismo, Marxismo, comercio internacional, o geopolítica.",
}

export async function POST(req: Request) {
  const { messages } = await req.json()

  try {
    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || ""

    let response = MOCK_RESPONSES.default

    for (const [key, value] of Object.entries(MOCK_RESPONSES)) {
      if (key !== "default" && lastMessage.includes(key)) {
        response = value
        break
      }
    }

    return Response.json({
      role: "assistant",
      content: response,
    })
  } catch (error) {
    console.error("[v0] Error:", error)
    return Response.json({ error: "Error processing request" }, { status: 500 })
  }
}
