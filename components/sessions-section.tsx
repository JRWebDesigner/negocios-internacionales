"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, BookOpen, X, ExternalLink } from "lucide-react"

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
    description: "",
    materials: [
      { name: "Libro de apuntes", type: "PDF" },
    ],
  },
  {
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
  {
    id: 5,
    title: "Competencia estratégica entre Estados Unidos, China y Rusia — y el rol de la Unión Europea",
    date: "",
    topics: [""],
    enlace: "/ses5.pdf",
    description: "",
    materials: [
      { name: "Libro de apuntes", type: "PDF" },
    ],
  },
  {
    id: 6,
    title: "Visiones del Mundo de las Relaciones Internacionales",
    date: "",
    topics: [""],
    enlace: "/ses6.pdf",
    description: "Visiones del Mundo de las Relaciones Internacionales",
    materials: [
      { name: "Archivo pdf", type: "PDF" },
    ],
  },
  {
    id: 7,
    title: "NEGOCIOS INTERNACIONALES",
    date: "",
    topics: [""],
    enlace: "/ses7.pdf",
    description: "",
    materials: [
      { name: "Archivo pdf", type: "PDF" },
    ],
  },
  {
    id: 8,
    title: "La Transformación Digital y sus Efectos sobre las Relaciones Internacionales",
    date: "",
    topics: [""],
    enlace: "/ses8.pdf",
    description: "",
    materials: [
      { name: "Archivo pdf", type: "PDF" },
    ],
  },
]

export default function SessionsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [pdfViewerOpen, setPdfViewerOpen] = useState<boolean>(false)
  const [currentPdf, setCurrentPdf] = useState<string>("")

  const openPdfViewer = (pdfUrl: string) => {
    setCurrentPdf(pdfUrl)
    setPdfViewerOpen(true)
  }

  const closePdfViewer = () => {
    setPdfViewerOpen(false)
    setCurrentPdf("")
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2">Sesiones</h2>
        <p className="text-muted-foreground">Accede a todas las sesiones con materiales y recursos visualizables</p>
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
                    <div className="space-y-3">
                      {session.materials.map((material, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row md:justify-between md:items-center p-3 bg-muted/30 rounded-lg gap-3">
                          <div>
                            <span className="text-foreground font-medium">{material.name}</span>
                            <span className="text-sm text-muted-foreground ml-2">({material.type})</span>
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="gap-2"
                              onClick={() => openPdfViewer(session.enlace)}
                            >
                              <BookOpen className="w-4 h-4" />
                              Ver PDF
                            </Button>
                            <Button size="sm" variant="outline" className="gap-2">
                              <a 
                                href={session.enlace} 
                                download 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Download className="w-4 h-4" />
                                Descargar
                              </a>
                            </Button>
                          </div>
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

      {/* Modal/Overlay para visualizar PDF */}
      {pdfViewerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Vista previa del PDF</h3>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2"
                  asChild
                >
                  <a 
                    href={currentPdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Abrir en nueva pestaña
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={closePdfViewer}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 p-4">
              <iframe
                src={`${currentPdf}#view=FitH`}
                className="w-full h-full rounded-lg border"
                title="PDF Viewer"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Si el PDF no se carga correctamente, haz clic en "Abrir en nueva pestaña"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
