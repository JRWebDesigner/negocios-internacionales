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
  enlace: string
  description: string
  materials: { name: string; type: string }[]
}

const sessions: Session[] = [
  {
    id: 1,
    title: "Antonio Gramsci: Conceptos clave y su relevancia en Relaciones Internacionales",
    date: "",
    topics: [""],
    enlace: "/ses1.pdf",
    description:
      "Introducción a Antonio Gramsci, su teoría de la hegemonía cultural y su impacto en el análisis de las relaciones internacionales.",
    materials: [
      { name: "Lectura Recomendada", type: "PDF" },
    ],
  },
  {
    //Teoría Marxista en Relaciones Internacionales e Historia
    id: 2,
    title: "Teoría Marxista en Relaciones Internacionales e Historia",
    date: "",
    topics: [""],
    enlace: "/ses2.pdf",
    description:
      "Exploración de los fundamentos del marxismo, su enfoque en la economía política y su aplicación al estudio de las relaciones internacionales.",
    materials: [
      { name: "Fundamentos del Marxismo", type: "PDF" },
    ],
  },
  {
    id: 3,
    title: "Libro de apuntes",
    date: "",
    topics: [""],
    enlace: "/ses3.pdf",
    description:
      "",
    materials: [
      { name: "Libro de apuntes", type: "PDF" },
    ],
  },
  {
    //Teoría del Idealismo (Liberalismo) en Relaciones Internacionales
    id: 4,
    title: "Teoría del Idealismo (Liberalismo) en Relaciones Internacionales",
    date: "",
    topics: [""],
    enlace: "/ses4.pdf",
    description: "Análisis del idealismo en las relaciones internacionales, destacando la cooperación internacional, las instituciones globales y la promoción de la paz.",
    materials: [
      { name: "Archivo pdf", type: "PDF" },
    ],
  },
]

export default function SessionsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2">Sesiones</h2>
        <p className="text-muted-foreground">Accede a todas las 4 sesiones con materiales y recursos descargables</p>
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
                            <a href={session.enlace} target="_blank" rel="noopener noreferrer">
                              <Download className="w-4 h-4" />
                              Descargar
                            </a>
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
