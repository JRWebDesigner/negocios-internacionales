"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

interface NewsArticle {
  id: number
  title: string
  category: string
  date: string
  resumenObjetivo: string
  contextoImportancia: string
  posicionesActores: string
  analisisCritico: string
  conclusion: string
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "El alto el fuego en Gaza y el plan de paz de Trump",
    category: "Geopolítica",
    date: "2025-11-15",
    resumenObjetivo:
      "El 10 de noviembre de 2025, Europa anunció su rol clave en la reconstrucción de Gaza como parte del plan de paz de 20 puntos propuesto por el presidente de EE.UU., Donald Trump, que entró en vigor el 10 de octubre y ha permitido el retorno de miles de palestinos a la Ciudad de Gaza entre el 11 y 12 de noviembre, con al menos 50.000 desplazados regresando al norte. El 12 de noviembre, Israel confirmó que la liberación de rehenes retenidos por Hamás comenzaría el lunes 17, con 48 liberados en la primera fase. La tregua, mediada por EE.UU., Egipto y Qatar, abre un paso a una paz incierta según reportes del 15 de noviembre, pese a violaciones reportadas por la ONU de ambos lados. Alemania se posicionó el 16 de noviembre como actor central en Oriente Medio para la posguerra, mientras potencias árabes como Arabia Saudita y Emiratos Árabes Unidos detallaron su rol en la Gaza reconstruida el 17-18 de noviembre.",
    contextoImportancia:
      "Esta noticia es una de las más relevantes de 2025 porque consolida el alto el fuego como hito diplomático post-Trump, permitiendo la reconstrucción de Gaza con un fondo inicial de 20.000 millones de dólares liderado por Europa y árabes, en un año de crisis humanitarias globales que incluyen hambruna en Sudán y desplazamientos en Ucrania. Humanitariamente, el retorno de 50.000 palestinos ha reducido la densidad en refugios sureños en un 30%, con UNICEF reportando 200.000 niños vacunados en las primeras dos semanas. Económicamente, ha atraído compromisos de 10.000 millones de Arabia Saudita para infraestructura, estabilizando el petróleo Brent con una caída del 4% en 72 horas al mitigar temores regionales.",
    posicionesActores:
      "Israel → Apoya la liberación de rehenes como 'cumplimiento inicial' del plan de Trump y ve la reconstrucción europea como garantía de seguridad, pero advierte contra violaciones de Hamás y exige control sobre fronteras norteñas. Hamás → Celebra el retorno de palestinos como 'victoria popular' pero acusa a Israel de 100 violaciones en el norte, rechazando desarme total hasta la fase final de soberanía palestina. EE.UU. (Trump) → Califica la tregua como 'éxito de mi diplomacia' y urge a Europa y árabes a invertir 'sin demoras'. China/Rusia → Rusia critica el plan como 'imposición estadounidense' pero propone mediación conjunta en la ONU; China apoya el rol árabe y dona 500 millones para reconstrucción.",
    analisisCritico:
      "Creo que esto no escalará a guerra regional si la liberación de rehenes avanza sin incidentes, pero su fragilidad por violaciones ONU podría reavivar hostilidades si árabes retiran fondos por asentamientos israelíes. Beneficiados salen Trump (refuerza legado con 'paz en Gaza') y potencias árabes, mientras perjudicados son palestinos con solo 50% de Gaza accesible. Hay sesgo evidente: medios occidentales enfatizan el 'rol clave de Europa' minimizando violaciones israelíes, versus Al Jazeera que destaca 'paz incierta' por abusos.",
    conclusion:
      "Este alto el fuego podría transformar Gaza en un modelo de paz compartida o desvanecerse como otro espejismo en el desierto de Oriente Medio.",
  },
  {
    id: 2,
    title: "La escalada de aranceles de Trump a China por 'hostilidad'",
    category: "Economía",
    date: "2025-11-12",
    resumenObjetivo:
      "El 10 de noviembre de 2025, el presidente de EE.UU., Donald Trump, anunció en Truth Social un arancel adicional del 100% sobre todas las importaciones chinas a partir del 1 de diciembre, sumado al 30% existente, elevándolos al 130%, en respuesta a la 'hostilidad comercial' de China por imponer controles estrictos a exportaciones de tierras raras desde el 1 de noviembre. El 11-12 de noviembre, China acusó a EE.UU. de 'doble moral' vía su Ministerio de Comercio, argumentando que las medidas estadounidenses socavan el diálogo bilateral. El 12 de noviembre, Trump matizó que 'EE.UU. quiere ayudar a China, no perjudicarla', confirmando una posible reunión con Xi Jinping en la APEC.",
    contextoImportancia:
      "Esta noticia es una de las más relevantes de 2025 porque revive la guerra comercial EE.UU.-China, amenazando cadenas de suministro globales en electrónicos, autos y minerales raros, donde China controla el 90% de la refinación de tierras raras esenciales para baterías y chips. Económicamente, ha causado caídas del 3% en el Dow Jones y Nasdaq en 48 horas tras el anuncio, con proyecciones de un aumento de 1.200 dólares por hogar estadounidense en costos de bienes y un recorte del PIB chino al 4,4% anual según el FMI.",
    posicionesActores:
      "EE.UU. (Trump) → Acusa a China de 'hostilidad siniestra' por controles a tierras raras que 'toman al mundo cautivo', imponiendo aranceles del 100% adicionales, pero matiza que busca 'ayudar a China'. China (Xi) → Denuncia 'doble moral' estadounidense por presionar con aranceles mientras ignora sus propias restricciones a chips, jurando 'luchar hasta el final'. Rusia → Apoya a China en BRICS como 'respuesta soberana' a 'imperialismo económico' de EE.UU., proponiendo alianzas alternativas para minerales.",
    analisisCritico:
      "Creo que esto no escalará a una guerra regional o mundial militar, pero profundizará una 'guerra fría comercial' fragmentando el comercio global, similar a 2018 pero amplificada por la dependencia de tierras raras. Beneficiados salen sectores manufactureros estadounidenses y Trump, mientras perjudicados son consumidores globales con alzas del 10-15% en electrónicos y autos, y economías emergentes como las de Asia con pérdidas de 200.000 millones en cadenas de suministro.",
    conclusion:
      "Esta escalada podría reconfigurar el tablero comercial global como un duelo de titanes o como un laberinto de represalias que asfixie la innovación mundial.",
  },
  {
    id: 3,
    title: "Las sanciones de EE.UU. a las petroleras rusas y congelamiento del diálogo Trump-Putin",
    category: "Geopolítica",
    date: "2025-10-24",
    resumenObjetivo:
      "El 22 de octubre de 2025, EE.UU. impuso sanciones al Departamento del Tesoro contra las dos mayores petroleras rusas, Rosneft y Lukoil, bloqueando transacciones y exigiendo la venta de activos internacionales para presionar a Moscú por un alto el fuego en Ucrania. Esto elevó los precios del petróleo Brent un 5,7% a 66,13 dólares el barril en 24 horas. El presidente Trump aplazó una cumbre planeada con Putin, declarando 'no quiero perder el tiempo', mientras Rusia respondía con amenazas de represalias si se suministran misiles Tomahawk a Kiev. La UE adoptó su 19º paquete de sanciones el 24 de octubre, congelando activos rusos valorados en 140.000 millones de euros para financiar a Ucrania.",
    contextoImportancia:
      "Esta noticia es una de las más relevantes de 2025 porque marca el primer giro duro de Trump contra Rusia en su segundo mandato, intensificando la guerra económica en un año de volatilidad energética post-crisis climática, donde el petróleo financia el 40% del presupuesto ruso para Ucrania. Económicamente, las sanciones han reducido las exportaciones rusas en un 15% inicial, con India y China recortando compras, y el Brent subiendo un 9% en la semana posterior, agregando 1.200 dólares anuales en costos para hogares globales.",
    posicionesActores:
      "EE.UU. (Trump) → Ve las sanciones como 'presión esencial' para un cese al fuego en líneas actuales, cancelando la cumbre con Putin por 'falta de seriedad'. Rusia (Putin) → Declara 'nunca me inclinaré' ante sanciones, amenazando 'escalada a nuevo nivel' si se envían Tomahawks a Ucrania. China/Rusia → China reduce importaciones rusas en un 10% para evitar sanciones secundarias, mientras Rusia busca alianzas BRICS para contrarrestar.",
    analisisCritico:
      "Creo que esto podría escalar a un conflicto regional si Trump aprueba los Tomahawks, pero las sanciones económicas probablemente fuerzen a Putin a negociar un cese temporal en meses, dada la caída del 15% en ingresos petroleros rusos. Beneficiados salen Ucrania con 140.000 millones de euros extra, mientras perjudicados son Rusia con pérdidas de 50.000 millones anuales en exportaciones y consumidores globales por alzas energéticas.",
    conclusion:
      "Estas sanciones podrían romper el ciclo de impunidad rusa o encender una mecha que queme los puentes de la diplomacia global para siempre.",
  },
  {
    id: 4,
    title: "El voto preliminar en la Knéset para anexar Cisjordania",
    category: "Conflicto",
    date: "2025-10-23",
    resumenObjetivo:
      "El 22 de octubre de 2025, la Knéset (Parlamento israelí) aprobó en una votación preliminar, con 25 votos a favor y 24 en contra, un proyecto de ley para anexar Cisjordania ocupada, impulsado por legisladores de extrema derecha pese a la aparente oposición del primer ministro Benjamin Netanyahu. Esta medida busca aplicar 'soberanía israelí' sobre los territorios, incluyendo asentamientos. Al día siguiente, el 23 de octubre, el vicepresidente de EE.UU., JD Vance, declaró que 'Israel no anexionará Cisjordania', mientras el presidente Donald Trump reforzó esto afirmando que Israel 'perdería todo el apoyo de EE.UU.' si procede.",
    contextoImportancia:
      "Esta noticia es una de las más relevantes de 2025 porque socava el frágil alto el fuego en Gaza del 10 de octubre, impulsado por Trump, en un año de inestabilidad regional post-conflicto, donde la anexión podría desatar protestas masivas y boicots árabes. Políticamente, ha generado condenas de más de 18 países árabes y la Liga Árabe, con una resolución de emergencia en la ONU el 24 de octubre respaldada por 120 naciones. Humanitariamente, amenaza a 3 millones de palestinos en Cisjordania con desplazamientos forzados.",
    posicionesActores:
      "Israel → Los promotores del proyecto lo ven como 'derecho histórico', aunque Netanyahu lo ha calificado de 'prematuro'. EE.UU. → Trump amenaza explícitamente con cortar 'todo el apoyo' si se anexa, mientras Vance lo tacha de 'muy estúpido'. Rusia → Condena la votación como 'provocación unilateral' en el Consejo de Seguridad de la ONU. Europa → La UE rechaza la anexión como 'ilegal bajo derecho internacional' y amenaza con boicot a productos de asentamientos.",
    analisisCritico:
      "Creo que esto no escalará a una guerra regional inmediata, dada la presión estadounidense y la debilidad de la coalición de Netanyahu, pero podría fragmentar el plan de paz de Trump si la Knéset avanza a la segunda lectura. Beneficiados podrían ser extremistas israelíes con narrativa de nacionalismo, mientras perjudicados son palestinos con riesgo de 500.000 desplazados en asentamientos expandidos.",
    conclusion:
      "La anexión podría convertirse en el punto de quiebre final de cualquier solución palestina de dos estados o en un ultimátum que fracture las alianzas occidentales.",
  },
  {
    id: 5,
    title: "Putin anuncia prueba exitosa del misil nuclear Burevestnik",
    category: "Seguridad",
    date: "2025-10-29",
    resumenObjetivo:
      "Rusia prueba el misil Burevestnik con propulsión nuclear y autonomía 'ilimitada', reavivando temores de carrera armamentística entre potencias. Esta prueba marca un hito en la escalada tecnológica de Moscú con armas de propulsión nuclear que pueden mantenerse en el aire indefinidamente, complicando los cálculos de defensa estratégica de Occidente.",
    contextoImportancia:
      "Esta noticia es crítica para la seguridad global porque introduce una nueva dimensión a la carrera armamentística, donde Rusia demuestra capacidades de armas nucleares prácticamente invulnerables a sistemas de defensa convencionales. Esto eleva las tensiones durante negociaciones de cese al fuego y afecta tratados de control de armas nuclear como START.",
    posicionesActores:
      "Rusia → Putin presenta la prueba como 'respuesta defensiva' a expansión NATO y amenazas estadounidenses. EE.UU. → Condenó la prueba y advirtió sobre violaciones a tratados internacionales. OTAN → Expresó preocupación sobre escalada de capacidades nucleares rusas.",
    analisisCritico:
      "Esta prueba representa una escalada significativa en la capacidad destructiva de Rusia, complicando los esfuerzos de diplomacia y aumentando el riesgo de conflictos regionales no controlados.",
    conclusion:
      "El Burevestnik marca un nuevo capítulo de incertidumbre nuclear en el siglo XXI, donde la disuasión mutua podría convertirse en un juego de ruleta rusa.",
  },
  {
    id: 6,
    title: "RSF captura El Fasher: masacres dejan miles de muertos en Sudán",
    category: "Humanitario",
    date: "2025-10-30",
    resumenObjetivo:
      "Las RSF toman El Fasher tras 18 meses de asedio. ONGs reportan más de 2.000 civiles asesinados y la ONU alerta riesgo de genocidio en Darfur. Esta captura intensifica la crisis humanitaria en Sudán con desplazamientos masivos y colapso de servicios básicos.",
    contextoImportancia:
      "La caída de El Fasher es significativa porque representa un punto de no retorno en la guerra civil sudanesa, consolidando el control de las RSF sobre Darfur y creando condiciones para potencial genocidio. Millones de civiles están bajo amenaza y el acceso humanitario se ve cada vez más restringido.",
    posicionesActores:
      "ONU → Alerta sobre riesgo de genocidio y llama a intervención internacional. MSF y ONGs → Documentan masacres y presionan para acceso humanitario. Comunidad internacional → Divide entre presión sobre ambas partes del conflicto.",
    analisisCritico:
      "La situación en Sudán continúa deteriorándose con cada avance militar, sugiriendo que sin intervención significativa, la catástrofe humanitaria se profundizará.",
    conclusion:
      "El Fasher se ha convertido en un símbolo de la inacción global ante tragedias humanitarias de escala genocida.",
  },
  {
    id: 7,
    title: "Corea del Norte envía 5.000 soldados a Rusia para apoyo en Ucrania",
    category: "Geopolítica",
    date: "2025-11-08",
    resumenObjetivo:
      "Se confirma que Corea del Norte despliega tropas a Rusia en plena ofensiva en Pokrovsk, mientras Moscú lanza ataques masivos con drones en Ucrania. Este despliegue marca una nueva internacionalización del conflicto con actores de Asia Pacífico participando directamente.",
    contextoImportancia:
      "El envío de tropas norcoreanas es significativo porque expande la coalición de Rusia más allá de Europa y demuestra el alcance global del conflicto. Esto también sugiere dificultades de Rusia para mantener efectivos en Ucrania.",
    posicionesActores:
      "Rusia → Aprecia el apoyo militar de Corea del Norte. Occidente → Condena la participación norcoreana como escalada del conflicto. Ucrania → Prepara defensas contra esta nueva amenaza.",
    analisisCritico:
      "La participación norcoreana sugiere que Rusia enfrenta limitaciones demográficas y de armamento, recurriendo a aliados lejanos.",
    conclusion:
      "El combate de soldados norcoreanos en Ucrania marca la convergencia de conflictos regionales en una arena de confrontación global.",
  },
  {
    id: 8,
    title: "COP30 inicia con advertencia de la ONU sobre fracaso climático",
    category: "Clima",
    date: "2025-11-06",
    resumenObjetivo:
      "Guterres denuncia 'fracaso moral' al no contener el calentamiento. Brasil impulsa un fondo de 125.000 millones para bosques tropicales. La cumbre se abre con llamados urgentes a acción sobre crisis climática global.",
    contextoImportancia:
      "COP30 representa una oportunidad crítica para reconfigurar la respuesta global al cambio climático, pero comienza con diagnósticos sombríos sobre el fracaso de compromisos previos.",
    posicionesActores:
      "ONU → Exige acción inmediata y transformativa. Brasil → Propone fondos significativos para conservación amazónica. Países en desarrollo → Presionan por financiamiento climático justo.",
    analisisCritico:
      "Las advertencias de inicio de COP30 sugieren una desconexión entre urgencia retorica y capacidad política de implementación.",
    conclusion: "COP30 podría ser la última oportunidad antes de puntos de no retorno climático irreversibles.",
  },
  {
    id: 9,
    title: "China, Japón y Taiwán elevan tensiones con ejercicios y alertas",
    category: "Geopolítica",
    date: "2025-10-15",
    resumenObjetivo:
      "China realiza maniobras cerca de Japón tras declaraciones sobre Taiwán; EE.UU. aprueba venta de armas por 2.000 millones a la isla. Este ciclo de maniobras y respuestas militares eleva tensiones en el Estrecho de Taiwán.",
    contextoImportancia:
      "La dinámica militar en el Estrecho de Taiwán es crítica porque cualquier miscalculación podría desatar conflicto entre potencias nucleares.",
    posicionesActores:
      "China → Realiza ejercicios como demostración de poder. EE.UU. → Mantiene compromiso con defensa de Taiwán. Japón → Preocupado por seguridad regional.",
    analisisCritico:
      "El equilibrio militar en el Estrecho se erosiona a favor de China, aumentando presión sobre Taiwán y sus aliados.",
    conclusion: "El Estrecho de Taiwán se ha convertido en el punto más volátil de la geopolítica del siglo XXI.",
  },
  {
    id: 10,
    title: "Gran despliegue naval de EE.UU. en el Caribe en tensión con Venezuela",
    category: "Latinoamérica",
    date: "2025-11-15",
    resumenObjetivo:
      "EE.UU. moviliza el mayor despliegue naval en el Caribe desde 1962. Maduro denuncia 'guerra fabricada' y CELAC exige desescalada. Este despliegue militar representa una demostración de fuerza sin precedentes en la región.",
    contextoImportancia:
      "El despliegue naval es significativo porque recuerda la Crisis de los Misiles, sugiriendo una confrontación estratégica en el hemisferio occidental.",
    posicionesActores:
      "EE.UU. → Justifica despliegue como protección de seguridad hemisférica. Venezuela → Interpreta como amenaza a su soberanía. CELAC → Llama a diálogo y desescalada.",
    analisisCritico:
      "El despliegue militar corre el riesgo de escalada si ambas partes no mantienen comunicación clara.",
    conclusion: "El Caribe, una región de comercio vital, se ha convertido en arena de confrontación geopolítica.",
  },
  {
    id: 11,
    title: "Plan de paz de Trump para Ucrania recibe rechazo europeo",
    category: "Geopolítica",
    date: "2025-10-22",
    resumenObjetivo:
      "Trump exige a Ucrania ceder Crimea y parte del Donbás a cambio de alto el fuego. La UE lo califica de 'imposición unilateral'. Este plan genera divisiones en Occidente sobre los términos aceptables para paz en Ucrania.",
    contextoImportancia:
      "El plan de paz propuesto genera fricción transatlántica fundamental sobre cómo resolver el conflicto ucraniano.",
    posicionesActores:
      "Trump → Presiona por solución rápida con concesiones territoriales. UE → Defiende soberanía plena de Ucrania. Ucrania → Rechaza cesión permanente de territorios.",
    analisisCritico:
      "Las diferencias sobre términos de paz reflejan divisiones más profundas sobre arquitectura de seguridad europea.",
    conclusion: "El debate sobre paz en Ucrania es en realidad debate sobre orden europeo para próximas décadas.",
  },
  {
    id: 12,
    title: "China suspende importaciones de Japón tras nuevas ventas de armas a Taiwán",
    category: "Economía",
    date: "2025-11-19",
    resumenObjetivo:
      "China congela la compra de mariscos japoneses tras ventas militares estadounidenses a Taiwán, golpeando comercio y turismo. Esta represalia comercial es respuesta a apoyo estadounidense a Taiwán.",
    contextoImportancia:
      "Las restricciones comerciales chinas muestran cómo conflictos geopolíticos se transladan a represalias económicas con víctimas civiles.",
    posicionesActores:
      "China → Usa represalias comerciales como presión política. Japón → Afectado por pérdida de mercado crucial. EE.UU. → Continúa con ventas de armas a Taiwán.",
    analisisCritico: "El uso de represalias comerciales por razones políticas fragmenta interdependencias económicas.",
    conclusion: "La economía global se politiza cada vez más, creando inestabilidad más allá de mercados.",
  },
  {
    id: 13,
    title: "Trump anuncia operaciones terrestres contra Venezuela",
    category: "Latinoamérica",
    date: "2025-11-29",
    resumenObjetivo:
      "EE.UU. declara el espacio aéreo venezolano como 'cerrado' y anuncia inminentes incursiones terrestres; Maduro moviliza tropas. Esta escalada representa amenaza de intervención militar directa en Venezuela.",
    contextoImportancia:
      "El anuncio de operaciones terrestres marca escalada sin precedentes en confrontación EE.UU.-Venezuela en años recientes.",
    posicionesActores:
      "EE.UU. → Justifica intervención por crisis humanitaria y democracia. Venezuela → Prepara defensa militar. Región → Expresó alarma por intervención.",
    analisisCritico: "La posibilidad de intervención militar refleja frustración con impasse político prolongado.",
    conclusion: "Venezuela se ha convertido en campo de batalla ideológico para poder hemisférico.",
  },
  {
    id: 14,
    title: "COP30 termina sin acuerdo histórico y sin eliminación de fósiles",
    category: "Clima",
    date: "2025-11-22",
    resumenObjetivo:
      "La COP30 cierra sin compromisos sobre combustibles fósiles, aunque se triplica la financiación para adaptación a 120.000 millones. La cumbre termina con avances parciales pero fracaso en reclamos transformativos.",
    contextoImportancia:
      "El fracaso de COP30 en eliminar fósiles representa continuidad de patrones de negociación climática ineficaz.",
    posicionesActores:
      "ONG climáticas → Denuncian falta de ambición. Países productores de petróleo → Resisten eliminación de fósiles. Países vulnerables → Presionan por financiamiento.",
    analisisCritico:
      "Los fracasos reiterados de cumbres climáticas sugieren que cambio transformativo ocurrirá fuera de marcos negociadores.",
    conclusion: "COP30 probablemente sea recordada como punto donde diplomacia climática exhaustó su utilidad.",
  },
]

export default function NewsSection(){
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-balance">Noticias de Negocios Internacionales</h1>
        <p className="text-muted-foreground text-lg">
          Mantente informado sobre los últimos eventos y tendencias globales. Haz click en cada noticia para ver el
          contenido completo.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-3">
        {newsArticles.map((article) => (
          <AccordionItem
            key={article.id}
            value={`article-${article.id}`}
            className="border border-border rounded-lg px-6 py-2 hover:border-primary/50 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-start justify-between gap-4 w-full text-left">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-balance">{article.title}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <Badge variant="secondary" className="w-fit">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="space-y-6 pt-4 pb-4">
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Resumen Objetivo:</h4>
                  <p>{article.resumenObjetivo}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contexto e Importancia Mundial:</h4>
                  <p>{article.contextoImportancia}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Posiciones de Actores Principales:</h4>
                  <p>{article.posicionesActores}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Análisis Crítico:</h4>
                  <p>{article.analisisCritico}</p>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <h4 className="font-semibold text-foreground mb-2">Conclusión:</h4>
                  <p className="italic">{article.conclusion}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
