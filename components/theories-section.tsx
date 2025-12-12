"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Download, X, ExternalLink, FileText } from "lucide-react"

interface Theory {
  id: string
  name: string
  description: string
  content: string
  founder: string
  keyPrinciples: string[]
  examples: string[]
  pdfs: Array<{
    id: string
    name: string
    url: string
  }>
}

const theories: Theory[] = [
  {
    id: "idealismo",
    name: "Idealismo",
    description: "Enfoque basado en valores y principios morales universales",
    founder: "Immanuel Kant",
    keyPrinciples: [
      "Primacía de los principios morales en las relaciones internacionales",
      "Cooperación internacional para el bien común",
      "Resolución pacífica de conflictos",
      "Derecho internacional como base de relaciones justas",
    ],
    content: `El Idealismo en relaciones internacionales sostiene que los estados deben actuar según principios morales y éticos universales. Esta perspectiva enfatiza la importancia de instituciones internacionales, tratados y la ley internacional para promover la paz y la cooperación.

Los idealistas creen que los conflictos pueden resolverse a través del diálogo, la diplomacia y el establecimiento de normas internacionales compartidas. Proponen que un mundo gobernado por la razón y los principios morales es posible y deseable.

Históricamente, el Idealismo ganó prominencia después de la Primera Guerra Mundial, con pensadores como Woodrow Wilson quien promovió la creación de la Liga de Naciones.`,
    examples: [
      "La Sociedad de Naciones y la ONU como expresiones del idealismo",
      "Tratados internacionales sobre derechos humanos",
      "Movimientos por la paz mundial y el desarme",
    ],
    pdfs: [
      { id: "1", name: "Material de apoyo 1", url: "/id1.pdf" },
      { id: "2", name: "Material de apoyo 2", url: "/id2.pdf" },
      { id: "3", name: "Material de apoyo 3", url: "/id3.docx" }
    ]
  },
  {
    id: "realismo",
    name: "Realismo",
    description: "Perspectiva centrada en el poder, los intereses nacionales y la anarquía internacional",
    founder: "Hans J. Morgenthau",
    keyPrinciples: [
      "El poder político es un medio para obtener fines políticos",
      "Los estados actúan por interés nacional, no por moralidad",
      "La anarquía internacional es la característica fundamental",
      "La seguridad y la supervivencia son objetivos primarios",
    ],
    content: `El Realismo político argumenta que las relaciones internacionales se rigen por el poder, no por principios morales. En un sistema internacional anárquico donde no existe autoridad central, los estados actúan principalmente para promover su interés nacional y asegurar su supervivencia.

El Realismo clásico, desarrollado por Hans J. Morgenthau, sostiene que la política internacional es una lucha por el poder en la que los estados buscan maximizar su posición relativa. La moralidad tiene un papel limitado en las decisiones de política exterior.

Este enfoque proporciona una explicación realista de las guerras, competencias de poder y conflictos internacionales observados en la historia.`,
    examples: [
      "La Guerra Fría como manifestación de realismo político",
      "Política de equilibrio de poder en Europa",
      "Disuasión nuclear como estrategia de seguridad",
    ],
    pdfs: [
      { id: "1", name: "Material de apoyo 1", url: "/real1.pdf" },
      { id: "2", name: "Material de apoyo 2", url: "/real2.pdf" },
      { id: "3", name: "Material de apoyo 3", url: "/real3.pdf" }
    ]
  },
  {
    id: "marxismo",
    name: "Marxismo",
    description: "Análisis basado en el materialismo histórico y conflicto de clases",
    founder: "Karl Marx y Friedrich Engels",
    keyPrinciples: [
      "Las relaciones internacionales reflejan conflictos de clase",
      "El capitalismo es un sistema explotador a nivel global",
      "El imperialismo es consecuencia del capitalismo",
      "La revolución proletaria es el camino hacia la paz internacional",
    ],
    content: `El enfoque marxista en relaciones internacionales analiza cómo el capitalismo y la búsqueda de ganancias impulsan el comportamiento estatal. Marx y sus seguidores argumentan que los conflictos internacionales no son el resultado de la "naturaleza humana" sino de estructuras económicas y de clases.

El imperialismo, según esta perspectiva, es una consecuencia inevitable del capitalismo, donde las potencias capitalistas buscan expandir sus mercados y explotar los recursos de otras naciones. La teoría también sostiene que la verdadera paz internacional solo puede lograrse con la abolición del capitalismo.

Los marxistas han contribuido significativamente al análisis de la pobreza global, la dependencia económica y la explotación entre naciones desarrolladas y en desarrollo.`,
    examples: [
      "Análisis marxista del colonialismo e imperialismo",
      "Teoría de la dependencia en América Latina",
      "Crítica marxista del sistema capitalista global",
    ],
    pdfs: [
      { id: "1", name: "Material de apoyo 1", url: "/mar1.pptx" },
      { id: "2", name: "Material de apoyo 2", url: "/mar2.pdf" },
      { id: "3", name: "Material de apoyo 3", url: "/mar3.pdf" },
      { id: "4", name: "Material de apoyo 4", url: "/mar4.docx" }
    ]
  },
]

export default function TheoriesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [viewerOpen, setViewerOpen] = useState<boolean>(false)
  const [currentFile, setCurrentFile] = useState<{url: string, name: string, type: string} | null>(null)

  const openViewer = (url: string, name: string) => {
    // Determinar el tipo de archivo por extensión
    const extension = url.split('.').pop()?.toLowerCase()
    const isPdf = extension === 'pdf'
    
    setCurrentFile({
      url,
      name,
      type: isPdf ? 'pdf' : extension || 'file'
    })
    setViewerOpen(true)
  }

  const closeViewer = () => {
    setViewerOpen(false)
    setCurrentFile(null)
  }

  const handleDownload = (url: string, fileName: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getFileIcon = (url: string) => {
    const extension = url.split('.').pop()?.toLowerCase()
    switch(extension) {
      case 'pdf':
        return <FileText className="w-4 h-4 text-red-500" />
      case 'docx':
      case 'doc':
        return <FileText className="w-4 h-4 text-blue-500" />
      case 'pptx':
      case 'ppt':
        return <FileText className="w-4 h-4 text-orange-500" />
      default:
        return <FileText className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2">Teorías de Relaciones Internacionales</h2>
        <p className="text-muted-foreground">
          Explora los principales enfoques teóricos: Idealismo, Realismo y Marxismo
        </p>
      </div>

      <div className="grid gap-4">
        {theories.map((theory) => (
          <Card
            key={theory.id}
            className="bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
            onClick={() => setExpandedId(expandedId === theory.id ? null : theory.id)}
          >
            <div className="p-6">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{theory.name}</h3>
                  <p className="text-muted-foreground mb-2">{theory.description}</p>
                  <p className="text-sm text-primary">Fundador: {theory.founder}</p>
                </div>
                <button className="flex-shrink-0">
                  {expandedId === theory.id ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                  )}
                </button>
              </div>

              {expandedId === theory.id && (
                <div className="mt-6 pt-6 border-t border-border space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Video Educativo</h4>
                    <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
                      {theory.id === "idealismo" && (
                        <iframe
                          src="https://drive.google.com/file/d/1ZsFskweDi2CAd3uknjekynT4dGo3CO5Z/preview"
                          width="100%"
                          height="100%"
                          allow="autoplay"
                          title="Video de Idealismo"
                        ></iframe>
                      )}
                      {theory.id === "marxismo" && (
                        <iframe
                          src="https://drive.google.com/file/d/1w9fJHpF0It4_pmCQwFhw7L_UX9ptT1KB/preview"
                          width="100%"
                          height="100%"
                          allow="autoplay"
                          title="Video de Marxismo"
                        ></iframe>
                      )}
                      {theory.id === "realismo" && (
                        <iframe
                          src="https://drive.google.com/file/d/1uIsGisGB0Z4Wut62qvVLeEuY6Iq31wvn/preview"
                          width="100%"
                          height="100%"
                          allow="autoplay"
                          title="Video de Realismo"
                        ></iframe>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-primary">Material de Estudio</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {theory.pdfs.map((pdf) => {
                        const fileExtension = pdf.url.split('.').pop()?.toLowerCase()
                        const isPdf = fileExtension === 'pdf'
                        
                        return (
                          <div
                            key={pdf.id}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
                          >
                            <div className="flex items-center gap-2">
                              {getFileIcon(pdf.url)}
                              <span className="text-sm font-medium truncate">{pdf.name}</span>
                              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                                .{fileExtension}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => openViewer(pdf.url, `${theory.name} - ${pdf.name}`)}
                                className="p-1 hover:bg-primary/10 rounded transition-colors"
                                title={isPdf ? "Ver en visor" : "Vista previa"}
                              >
                                <FileText className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDownload(pdf.url, `${theory.name} - ${pdf.name}.${fileExtension}`)}
                                className="p-1 hover:bg-primary/10 rounded transition-colors"
                                title="Descargar"
                              >
                                <Download className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Contenido Detallado</h4>
                    <p className="text-foreground leading-relaxed whitespace-pre-wrap">{theory.content}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Principios Clave</h4>
                    <ul className="space-y-2">
                      {theory.keyPrinciples.map((principle, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground">
                          <span className="text-primary font-bold">•</span>
                          {principle}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Ejemplos Aplicados</h4>
                    <ul className="space-y-2">
                      {theory.examples.map((example, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground">
                          <span className="text-accent font-bold">→</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Visor de archivos modal */}
      {viewerOpen && currentFile && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                {getFileIcon(currentFile.url)}
                <h3 className="text-lg font-semibold truncate max-w-md">
                  {currentFile.name}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {currentFile.type === 'pdf' && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2"
                    asChild
                  >
                    <a 
                      href={currentFile.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Abrir en nueva pestaña
                    </a>
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDownload(currentFile.url, currentFile.name)}
                  className="gap-2"
                >
                  <Download className="w-4 h-4" />
                  Descargar
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={closeViewer}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 p-4">
              {currentFile.type === 'pdf' ? (
                <iframe
                  src={`${currentFile.url}#view=FitH`}
                  className="w-full h-full rounded-lg border"
                  title={`PDF Viewer - ${currentFile.name}`}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                  <FileText className="w-24 h-24 text-muted-foreground mb-4" />
                  <h4 className="text-xl font-semibold mb-2">
                    Vista previa no disponible
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Los archivos .{currentFile.type} no pueden mostrarse en el visor.<br />
                    Por favor, descarga el archivo para ver su contenido.
                  </p>
                  <div className="flex gap-4">
                    <Button
                      variant="default"
                      onClick={() => handleDownload(currentFile.url, currentFile.name)}
                      className="gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Descargar archivo
                    </Button>
                    <Button
                      variant="outline"
                      onClick={closeViewer}
                    >
                      Cerrar
                    </Button>
                  </div>
                </div>
              )}
              {currentFile.type === 'pdf' && (
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Si el PDF no se carga correctamente, haz clic en "Abrir en nueva pestaña"
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Componente Button auxiliar si no lo tienes importado
function Button({ 
  children, 
  onClick, 
  variant = "default", 
  size = "default",
  className = "",
  asChild = false,
  ...props 
}: any) {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  }
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  if (asChild && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
