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
    title: "Alto el fuego en Gaza y plan de paz de Trump entra en vigencia",
    category: "Geopolítica",
    date: "2025-11-15",
    description:
      "Europa lidera la reconstrucción de Gaza tras el alto el fuego del 10 de octubre, permitiendo el retorno de miles de palestinos y estableciendo un fondo de 20.000 millones de dólares.",
    source: "DW, BBC, ONU",
    link: "#",
  },
  {
    id: 2,
    title: "Trump impone aranceles del 130% a China por 'hostilidad comercial'",
    category: "Economía",
    date: "2025-11-12",
    description:
      "Estados Unidos anuncia aranceles adicionales del 100% a importaciones chinas respondiendo a controles sobre tierras raras. China acusa 'doble moral' y advierte represalias.",
    source: "NYT, Reuters, DW",
    link: "#",
  },
  {
    id: 3,
    title: "EE.UU. sanciona a petroleras rusas y congela diálogo con Putin",
    category: "Geopolítica",
    date: "2025-10-24",
    description:
      "Washington sanciona a Rosneft y Lukoil, elevando el precio del petróleo mientras Rusia amenaza represalias. La UE libera activos rusos por 140.000 millones de euros para Ucrania.",
    source: "BBC, CNN, El País",
    link: "#",
  },
  {
    id: 4,
    title: "Israel avanza en votación preliminar para anexar Cisjordania",
    category: "Conflicto",
    date: "2025-10-23",
    description:
      "La Knéset aprueba preliminarmente un proyecto para anexar Cisjordania. Trump amenaza con cortar apoyo militar si Israel continúa con el plan.",
    source: "DW, Al Jazeera, NYT",
    link: "#",
  },
  {
    id: 5,
    title: "Putin anuncia prueba exitosa del misil nuclear Burevestnik",
    category: "Seguridad",
    date: "2025-10-29",
    description:
      "Rusia prueba el misil Burevestnik con propulsión nuclear y autonomía ‘ilimitada’, reavivando temores de carrera armamentística entre potencias.",
    source: "BBC, CNN, The Guardian",
    link: "#",
  },
  {
    id: 6,
    title: "RSF captura El Fasher: masacres dejan miles de muertos en Sudán",
    category: "Humanitario",
    date: "2025-10-30",
    description:
      "Las RSF toman El Fasher tras 18 meses de asedio. ONGs reportan más de 2.000 civiles asesinados y la ONU alerta riesgo de genocidio en Darfur.",
    source: "ONU, MSF, The Guardian",
    link: "#",
  },
  {
    id: 7,
    title: "Corea del Norte envía 5.000 soldados a Rusia para apoyo en Ucrania",
    category: "Geopolítica",
    date: "2025-11-08",
    description:
      "Se confirma que Corea del Norte despliega tropas a Rusia en plena ofensiva en Pokrovsk, mientras Moscú lanza ataques masivos con drones en Ucrania.",
    source: "Reuters, BBC, CNN",
    link: "#",
  },
  {
    id: 8,
    title: "COP30 inicia con advertencia de la ONU sobre fracaso climático",
    category: "Clima",
    date: "2025-11-06",
    description:
      "Guterres denuncia 'fracaso moral' al no contener el calentamiento. Brasil impulsa un fondo de 125.000 millones para bosques tropicales.",
    source: "ONU, The Guardian, Reuters",
    link: "#",
  },
  {
    id: 9,
    title: "China, Japón y Taiwán elevan tensiones con ejercicios y alertas",
    category: "Geopolítica",
    date: "2025-10-15",
    description:
      "China realiza maniobras cerca de Japón tras declaraciones sobre Taiwán; EE.UU. aprueba venta de armas por 2.000 millones a la isla.",
    source: "BBC, WSJ, Global Times",
    link: "#",
  },
  {
    id: 10,
    title: "Gran despliegue naval de EE.UU. en el Caribe en tensión con Venezuela",
    category: "Latinoamérica",
    date: "2025-11-15",
    description:
      "EE.UU. moviliza el mayor despliegue naval en el Caribe desde 1962. Maduro denuncia 'guerra fabricada' y CELAC exige desescalada.",
    source: "CNN, BBC, DW",
    link: "#",
  },
  {
    id: 11,
    title: "Plan de paz de Trump para Ucrania recibe rechazo europeo",
    category: "Geopolítica",
    date: "2025-10-22",
    description:
      "Trump exige a Ucrania ceder Crimea y parte del Donbás a cambio de alto el fuego. La UE lo califica de 'imposición unilateral'.",
    source: "NYT, Reuters, BBC",
    link: "#",
  },
  {
    id: 12,
    title: "China suspende importaciones de Japón tras nuevas ventas de armas a Taiwán",
    category: "Economía",
    date: "2025-11-19",
    description:
      "China congela la compra de mariscos japoneses tras ventas militares estadounidenses a Taiwán, golpeando comercio y turismo.",
    source: "DW, Reuters, Al Jazeera",
    link: "#",
  },
  {
    id: 13,
    title: "Trump anuncia operaciones terrestres contra Venezuela",
    category: "Latinoamérica",
    date: "2025-11-29",
    description:
      "EE.UU. declara el espacio aéreo venezolano como 'cerrado' y anuncia inminentes incursiones terrestres; Maduro moviliza tropas.",
    source: "NYT, BBC, Telesur",
    link: "#",
  },
  {
    id: 14,
    title: "COP30 termina sin acuerdo histórico y sin eliminación de fósiles",
    category: "Clima",
    date: "2025-11-22",
    description:
      "La COP30 cierra sin compromisos sobre combustibles fósiles, aunque se triplica la financiación para adaptación a 120.000 millones.",
    source: "ONU, The Guardian, Reuters",
    link: "#",
  },
]


const categories = ["Todos"]

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
