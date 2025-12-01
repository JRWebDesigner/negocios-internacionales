"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, BookOpen } from "lucide-react"

interface Session {
  id: number
  title: string
  date: string
  topics: string[]
  description: string
  materials: { name: string; type: string }[]
}

const sessions: Session[] = [
  {
    id: 1,
    title: "Introducción a las Relaciones Internacionales",
    date: "2024-01-15",
    topics: ["Concepto de RI", "Actores internacionales", "Historia moderna"],
    description:
      "Sesión introductoria que cubre los fundamentos de las relaciones internacionales, los actores principales y el contexto histórico.",
    materials: [
      { name: "Presentación Sesión 1", type: "PDF" },
      { name: "Lectura Recomendada", type: "PDF" },
    ],
  },
  {
    id: 2,
    title: "Idealismo vs Realismo",
    date: "2024-01-22",
    topics: ["Teoría idealista", "Teoría realista", "Comparativa"],
    description: "Análisis comparativo entre el enfoque idealista y realista de las relaciones internacionales.",
    materials: [
      { name: "Diapositivas Sesión 2", type: "PDF" },
      { name: "Casos de Estudio", type: "DOCX" },
    ],
  },
  {
    id: 3,
    title: "Neorrealismo Estructural",
    date: "2024-01-29",
    topics: ["Waltz", "Estructura del sistema", "Poder relativo"],
    description:
      "Exploración de la teoría neorrealista de Kenneth Waltz y su impacto en las relaciones internacionales.",
    materials: [
      { name: "Teoría Neorrealista", type: "PDF" },
      { name: "Análisis de casos", type: "PDF" },
    ],
  },
  {
    id: 4,
    title: "Marxismo y Relaciones Internacionales",
    date: "2024-02-05",
    topics: ["Materialismo histórico", "Imperialismo", "Dependencia económica"],
    description: "Análisis del enfoque marxista en relaciones internacionales y su crítica al sistema capitalista.",
    materials: [
      { name: "Marxismo en RI", type: "PDF" },
      { name: "Teoría de la Dependencia", type: "PDF" },
    ],
  },
  {
    id: 5,
    title: "Orden Internacional Contemporáneo",
    date: "2024-02-12",
    topics: ["Post-Guerra Fría", "Multipolarismo", "Globalización"],
    description: "Examen del orden internacional actual, cambios geopolíticos y desafíos globales.",
    materials: [
      { name: "Orden Global Actual", type: "PDF" },
      { name: "Documentos de referencia", type: "PDF" },
    ],
  },
  {
    id: 6,
    title: "Instituciones Internacionales",
    date: "2024-02-19",
    topics: ["ONU", "Organismos regionales", "Gobernanza global"],
    description: "Análisis de las principales instituciones internacionales y su rol en el sistema global.",
    materials: [
      { name: "Instituciones Clave", type: "PDF" },
      { name: "Resoluciones de la ONU", type: "PDF" },
    ],
  },
  {
    id: 7,
    title: "Conflictos y Seguridad Internacional",
    date: "2024-02-26",
    topics: ["Seguridad nacional", "Conflictos armados", "Diplomacia"],
    description: "Estudio de la seguridad internacional, conflictos contemporáneos y mecanismos de resolución.",
    materials: [
      { name: "Seguridad Internacional", type: "PDF" },
      { name: "Casos de conflictos", type: "PDF" },
    ],
  },
]

export default function SessionsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2">Sesiones de Clase</h2>
        <p className="text-muted-foreground">Accede a todas las 7 sesiones con materiales y recursos descargables</p>
      </div>

      <div className="grid gap-4">
        {sessions.map((session) => (
          <Card
            key={session.id}
            className="bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors"
          >
            <div className="p-6">
              <div
                className="flex justify-between items-start gap-4 cursor-pointer"
                onClick={() => setExpandedId(expandedId === session.id ? null : session.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold">
                      Sesión {session.id}: {session.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{session.date}</p>
                  <div className="flex flex-wrap gap-2">
                    {session.topics.map((topic, idx) => (
                      <span key={idx} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {expandedId === session.id && (
                <div className="mt-6 pt-6 border-t border-border space-y-4">
                  <p className="text-foreground">{session.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Materiales Disponibles</h4>
                    <div className="space-y-2">
                      {session.materials.map((material, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                          <span className="text-foreground">{material.name}</span>
                          <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                            <Download className="w-4 h-4" />
                            Descargar
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
