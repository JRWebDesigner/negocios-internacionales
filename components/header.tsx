"use client"

import { BookOpen, Lightbulb, Zap, Newspaper, Users2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onNavigate: (section: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-balance">
          Negocios <span className="text-primary">Internacionales</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Plataforma educativa integrada para aprender teorías de relaciones internacionales, gestionar trabajos
          académicos y resolver dudas con IA.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={() => onNavigate("theories")} className="bg-primary hover:bg-primary/90">
            Explorar Teorías
          </Button>
          <Button onClick={() => onNavigate("chat")} variant="outline">
            Chatbot IA
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-xl p-8 space-y-4">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Teorías Fundamentales</h3>
          <p className="text-muted-foreground">Aprende sobre Idealismo, Realismo y Marxismo en profundidad.</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 space-y-4">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <Newspaper className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Noticias</h3>
          <p className="text-muted-foreground">
            Mantente actualizado con noticias relevantes sobre negocios internacionales.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 space-y-4">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Sesiones de Clase</h3>
          <p className="text-muted-foreground">
            Accede a 7 sesiones completas con contenido estructurado y materiales de referencia.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 space-y-4">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Chatbot IA</h3>
          <p className="text-muted-foreground">
            Haz preguntas sobre negocios internacionales y recibe respuestas instantáneas.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 space-y-4">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <Users2 className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Nosotros</h3>
          <p className="text-muted-foreground">Conoce más sobre nuestra plataforma educativa y nuestro equipo.</p>
        </div>
      </div>
    </div>
  )
}
