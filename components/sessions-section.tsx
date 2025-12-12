"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, BookOpen, X, ExternalLink, Video } from "lucide-react"

interface Session {
  id: number
  title: string
  date: string
  topics: string[]
  enlace: string
  description: string
  materials: { name: string; type: string }[]
}

// Datos de las sesiones (sin cambios)
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
    title: "Competencia estratégica entre Estados Unidos, China y Rusia",
    date: "",
    topics: [""],
    enlace: "/ses2.pdf",
    description: "",
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
    title: "Karl Marxs-Vladimir Lenin",
    date: "",
    topics: [""],
    enlace: "/ses4.pdf",
    description: "",
    materials: [
      { name: "Archivo pdf", type: "PDF" },
    ],
  },
  {
    id: 5,
    title: "libro de apuntes 2",
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
    title: "Teoría del Liberalismo e Idealismo",
    date: "",
    topics: [""],
    enlace: "/ses6.pdf",
    description: "",
    materials: [
      { name: "Archivo pdf", type: "PDF" },
    ],
  },
  {
    id: 7,
    title: "Visiones del Mundo de las Relaciones Internacionales",
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
    title: "Apuntes 2 (2)",
    date: "",
    topics: [""],
    enlace: "/ses8.pdf",
    description: "",
    materials: [
      { name: "Archivo pdf", type: "PDF" },
    ],
  },
  {
    id: 9,
    title: "Libro-de-Apuntes",
    date: "",
    topics: [""],
    enlace: "/ses9.pdf",
    description: "",
    materials: [
      { name: "Archivo pdf", type: "PDF" },
    ],
  },
  {
    id: 10,
    title: "Negocios-Internacionales-Un-Mundo-Interconectado",
    date: "",
    topics: [""],
    enlace: "/ses10.pdf",
    description: "",
    materials: [
      { name: "Archivo pdf", type: "PDF" },
    ],
  },
  {
    id: 11,
    title: "UNIVERSIDAD-CATOLICA-BOLIVIANA-SAN-PABLO (1)",
    date: "",
    topics: [""],
    enlace: "/ses11.pdf",
    description: "",
    materials: [
      { name: "Archivo pdf", type: "PDF" },
    ],
  },
]

// Datos de los videos - Convertidos para incrustación
const videos = [
  {
    id: 1,
    title: "Sesión 6 - Teoría del Liberalismo e Idealismo",
    // URL convertida para incrustar en iframe
    embedUrl: "https://drive.google.com/file/d/1mrvJDtZN44CCXnv8puvkswfKk6unoB9e/preview",
    originalUrl: "https://drive.google.com/file/d/1mrvJDtZN44CCXnv8puvkswfKk6unoB9e/view?usp=drive_link",
    duration: "4:31"
  },
  {
    id: 2,
    title: "Sesión 7 - Visiones del Mundo de las Relaciones Internacionales",
    // URL convertida para incrustar en iframe
    embedUrl: "https://drive.google.com/file/d/1cRHo-S4WxeXTbc5UO57250b2RHJ_tSyq/preview",
    originalUrl: "https://drive.google.com/file/d/1cRHo-S4WxeXTbc5UO57250b2RHJ_tSyq/view?usp=drive_link",
    duration: "4:15"
  },
  {
    id: 3,
    title: "Sesión 8 - Complemento de estudio",
    // URL convertida para incrustar en iframe
    embedUrl: "https://drive.google.com/file/d/1ZFfkspC9OcvqjhRpEQbpVEvsNRGXHWL1/preview",
    originalUrl: "https://drive.google.com/file/d/1ZFfkspC9OcvqjhRpEQbpVEvsNRGXHWL1/view?usp=drive_link",
    duration: "5:43"
  }
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
    <div className="space-y-10">
      {/* Sección de Sesiones (sin cambios) */}
      <div>
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
      </div>

      {/* Nueva Sección de Videos */}
      <div className="pt-8 border-t border-border">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Video className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Videos Educativos</h2>
          </div>
          <p className="text-muted-foreground">
            Visualiza las grabaciones de las sesiones para complementar tu aprendizaje
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden border border-border hover:border-primary/30 transition-colors">
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-3 line-clamp-2">{video.title}</h3>
                
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted mb-3">
                  <iframe
                    src={video.embedUrl}
                    width="100%"
                    height="100%"
                    allow="autoplay; fullscreen"
                    title={`Video de ${video.title}`}
                    className="border-0"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                  <span>Duración: {video.duration}</span>
                  <span>Sesión {video.id === 1 ? 6 : video.id === 2 ? 7 : 8}</span>
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a 
                      href={video.originalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Abrir en Drive
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a 
                      href={`${video.originalUrl.replace('/view?', '/preview?')}&download=1`}
                      className="flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Descargar
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-primary font-bold">ℹ️</span>
            <span>
              Los videos están alojados en Google Drive. Si tienes problemas para visualizarlos, 
              asegúrate de estar logrado en tu cuenta de Google o haz clic en "Abrir en Drive".
            </span>
          </p>
        </div>
      </div>

      {/* Modal/Overlay para visualizar PDF (sin cambios) */}
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
