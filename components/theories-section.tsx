"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Theory {
  id: string
  name: string
  description: string
  content: string
  founder: string
  keyPrinciples: string[]
  examples: string[]
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
  },
]

export default function TheoriesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

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
                          src="https://drive.google.com/file/d/1c2WIR-emJCy9nFm_fxe7CsNTzs_lt7a_/preview"
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
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          Video próximamente disponible
                        </div>
                      )}
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
    </div>
  )
}
