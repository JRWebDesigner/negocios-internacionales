"use client"

import { Card } from "@/components/ui/card"
import { Users, Target, Lightbulb, Globe } from "lucide-react"

export default function AboutSection() {
  return (
    <div className="space-y-12">
      {/* About Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Sobre NI Academy</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Plataforma educativa dedicada a fortalecer tu conocimiento en Negocios Internacionales
        </p>
      </div>

      {/* Mission, Vision, Values */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-card border border-border p-8 space-y-4 hover:border-primary/50 transition-colors">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Nuestra Misión</h3>
          <p className="text-muted-foreground">
            Proporcionar recursos educativos de calidad que permitan a estudiantes y profesionales entender las
            dinámicas complejas de los negocios internacionales y las relaciones globales.
          </p>
        </Card>

        <Card className="bg-card border border-border p-8 space-y-4 hover:border-primary/50 transition-colors">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <Globe className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Nuestra Visión</h3>
          <p className="text-muted-foreground">
            Ser la plataforma educativa referente en Latinoamérica para el aprendizaje integral de Negocios
            Internacionales con herramientas innovadoras y contenido relevante.
          </p>
        </Card>

        <Card className="bg-card border border-border p-8 space-y-4 hover:border-primary/50 transition-colors">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Nuestros Valores</h3>
          <p className="text-muted-foreground">
            Excelencia académica, innovación tecnológica, inclusión educativa y compromiso con el desarrollo de
            profesionales competitivos en el contexto global.
          </p>
        </Card>
      </div>

      {/* Team Section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">Nuestro Equipo</h3>
          <p className="text-muted-foreground">
            NI Academy está conformada por profesionales expertos en Relaciones Internacionales, Economía y Tecnología
            educativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card border border-border p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Equipo Académico</h4>
                <p className="text-sm text-muted-foreground">Docentes expertos en RI</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Profesionales con experiencia en educación superior y especialización en Relaciones Internacionales y
              Negocios Globales.
            </p>
          </Card>

          <Card className="bg-card border border-border p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Equipo de Desarrollo</h4>
                <p className="text-sm text-muted-foreground">Tecnólogos e innovadores</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Especialistas en educación digital que integran las mejores prácticas tecnológicas en la plataforma.
            </p>
          </Card>
        </div>
      </div>

      {/* Contact Section */}
      <Card className="bg-card border border-border p-8 space-y-4 text-center">
        <h3 className="text-2xl font-bold">Ponte en Contacto</h3>
        <p className="text-muted-foreground">
          ¿Preguntas o sugerencias? Nos encantaría escucharte y mejorar continuamente.
        </p>
        <div className="space-y-2">
          <p className="text-foreground">
            Email: <span className="text-primary font-medium">contacto@niacademy.com</span>
          </p>
          <p className="text-foreground">
            Teléfono: <span className="text-primary font-medium">+1 (555) 123-4567</span>
          </p>
        </div>
      </Card>
    </div>
  )
}
