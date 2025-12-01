"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink } from "lucide-react"

interface NewsArticle {
  id: number
  title: string
  category: string
  date: string
  description: string
  source: string
  link: string
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Nuevos tratados comerciales impulsan la integración latinoamericana",
    category: "Comercio",
    date: "2024-11-28",
    description:
      "Los países latinoamericanos avanzan en negociaciones de nuevos tratados que buscan fortalecer la integración regional y aumentar la competitividad global.",
    source: "Noticias Internacionales",
    link: "#",
  },
  {
    id: 2,
    title: "La geopolítica del cambio climático en las relaciones internacionales",
    category: "Geopolítica",
    date: "2024-11-26",
    description:
      "Expertos analizan cómo el cambio climático se ha convertido en un factor determinante en las relaciones diplomáticas entre naciones.",
    source: "Análisis Global",
    link: "#",
  },
  {
    id: 3,
    title: "Organizaciones internacionales se reúnen para abordar crisis humanitaria",
    category: "Humanitario",
    date: "2024-11-24",
    description:
      "La ONU, OIM y otras organizaciones convocan a cumbre urgente para coordinar respuesta a crisis humanitaria global.",
    source: "Boletín de la ONU",
    link: "#",
  },
  {
    id: 4,
    title: "Tendencias en diplomacia digital: el futuro de las negociaciones internacionales",
    category: "Tecnología",
    date: "2024-11-22",
    description:
      "Se analizan las transformaciones en las relaciones diplomáticas con la incorporación de nuevas tecnologías y plataformas digitales.",
    source: "Revista de Relaciones Internacionales",
    link: "#",
  },
  {
    id: 5,
    title: "Bloques económicos refuerzan alianzas estratégicas",
    category: "Economía",
    date: "2024-11-20",
    description:
      "Análisis de cómo los principales bloques económicos mundiales redefinen sus estrategias de cooperación y competencia.",
    source: "Monitor Económico",
    link: "#",
  },
]

const categories = ["Todos", "Comercio", "Geopolítica", "Humanitario", "Tecnología", "Economía"]

export default function NewsSection() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2">Noticias de Negocios Internacionales</h2>
        <p className="text-muted-foreground">Mantente informado sobre los últimos eventos y tendencias globales</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              cat === "Todos" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid gap-6">
        {newsArticles.map((article) => (
          <Card
            key={article.id}
            className="bg-card border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer"
          >
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <Badge variant="secondary">{article.category}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-balance hover:text-primary transition-colors">
                {article.title}
              </h3>

              <p className="text-muted-foreground mb-4">{article.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Fuente: {article.source}</span>
                <a href={article.link} className="text-primary hover:text-primary/80 flex items-center gap-1">
                  Leer más
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
