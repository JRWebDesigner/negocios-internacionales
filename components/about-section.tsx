"use client"

import { Card } from "@/components/ui/card"
import { Target, Lightbulb, Globe, Mail, Phone } from "lucide-react"

export default function AboutSection() {
  return (
    <div className="space-y-12">
      {/* About Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Nosotros</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Plataforma educativa dedicada a fortalecer tu conocimiento en Negocios Internacionales
        </p>
      </div>

      {/* Team Description */}
      <div className="relative rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url(/placeholder.svg?height=400&width=1200&query=global business network connections)",
          }}
        />
        <Card className="bg-card border border-border p-8 space-y-4 relative z-10">
          <h3 className="text-2xl font-bold">Nuestra Historia</h3>
          <p className="text-lg text-foreground leading-relaxed">
            Somos estudiantes de la Escuela de la Producción y la Competitividad, comprometidos con expandir nuestros
            conocimientos y aportar al desarrollo de soluciones innovadoras. A través de este espacio, buscamos
            compartir nuestras experiencias y reflexiones, promoviendo un aprendizaje constante que nos permita crecer
            como profesionales y personas. Estamos convencidos de que el conocimiento compartido es clave para el
            progreso y la transformación.
          </p>
        </Card>
      </div>

      {/* Team Members */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">Nuestro Equipo</h3>
          <p className="text-muted-foreground">Conoce a los integrantes del grupo de Negocios Internacionales</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <Card className="bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <img src="/int1.jpeg" alt="Integrante 1" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-3">
              <h4 className="text-xl font-semibold">Bruno Gumiel</h4>
            </div>
          </Card>

          {/* Team Member 2 */}
          <Card className="bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <img src="/int2.jpg" alt="Integrante 2" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-3">
              <h4 className="text-xl font-semibold">Nicolas Garcia</h4>
            </div>
          </Card>

          {/* Team Member 3 */}
          <Card className="bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <img src="/int3.jpg" alt="Integrante 3" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-3">
              <h4 className="text-xl font-semibold">Rous Quenallata</h4>
            </div>
          </Card>

          
          <Card className="bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <img src="/int4.jpg" alt="Integrante 3" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-3">
              <h4 className="text-xl font-semibold">Nick Ticona Condori</h4>
            </div>
          </Card>

          <Card className="bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <img src="/int5.jpg" alt="Integrante 3" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-3">
              <h4 className="text-xl font-semibold">Pamela Quispe Clemente </h4>
            </div>
          </Card>
        </div>
      </div>

    </div>
  )
}
