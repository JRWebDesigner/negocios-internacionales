"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Trash2, Eye } from "lucide-react"

interface Work {
  id: string
  title: string
  topic: string
  dueDate: string
  status: "pending" | "submitted" | "graded"
  grade?: string
  file?: string
}

const works: Work[] = [
  {
    id: "1",
    title: "Ensayo: Crítica al Realismo",
    topic: "Idealismo vs Realismo",
    dueDate: "2024-02-15",
    status: "submitted",
    file: "Ensayo_Realismo.docx",
  },
  {
    id: "2",
    title: "Análisis Comparativo de Teorías",
    topic: "Neorrealismo",
    dueDate: "2024-02-20",
    status: "graded",
    grade: "95",
    file: "Analisis_Teorias.pdf",
  },
  {
    id: "3",
    title: "Investigación: Imperialismo Marxista",
    topic: "Ideología de Marx",
    dueDate: "2024-02-28",
    status: "pending",
  },
  {
    id: "4",
    title: "Presentación: Orden Internacional",
    topic: "Instituciones Internacionales",
    dueDate: "2024-03-10",
    status: "pending",
  },
]

const statusColors = {
  pending: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400",
  submitted: "bg-blue-500/20 text-blue-700 dark:text-blue-400",
  graded: "bg-green-500/20 text-green-700 dark:text-green-400",
}

const statusLabels = {
  pending: "Pendiente",
  submitted: "Entregado",
  graded: "Calificado",
}

export default function WorksSection() {
  const [works_list, setWorks] = useState<Work[]>(works)

  const deleteWork = (id: string) => {
    setWorks(works_list.filter((w) => w.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2">Trabajos Académicos</h2>
        <p className="text-muted-foreground">Gestiona y descarga tus trabajos de clase</p>
      </div>

      <div className="grid gap-4">
        {works_list.map((work) => (
          <Card key={work.id} className="bg-card border border-border p-6 hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">Tema: {work.topic}</p>
                <div className="flex flex-wrap gap-3 items-center">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColors[work.status]}`}>
                    {statusLabels[work.status]}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Fecha: {new Date(work.dueDate).toLocaleDateString("es-ES")}
                  </span>
                  {work.grade && (
                    <span className="text-sm font-semibold text-primary">Calificación: {work.grade}/100</span>
                  )}
                </div>
              </div>

              <div className="flex gap-2 flex-shrink-0">
                {work.file && (
                  <>
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                      <Eye className="w-4 h-4" />
                      Ver
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                      <Download className="w-4 h-4" />
                      Descargar
                    </Button>
                  </>
                )}
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2 text-destructive hover:text-destructive bg-transparent"
                  onClick={() => deleteWork(work.id)}
                >
                  <Trash2 className="w-4 h-4" />
                  Eliminar
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
