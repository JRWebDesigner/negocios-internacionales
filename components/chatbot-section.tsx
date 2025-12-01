"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Send, Loader2 } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.content }])
    } catch (error) {
      console.error("[v0] Chat error:", error)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error al procesar tu pregunta. Intenta de nuevo." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2">Chatbot IA</h2>
        <p className="text-muted-foreground">
          Haz preguntas sobre Negocios Internacionales y obtén respuestas instantáneas
        </p>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col h-[600px]">
        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold">Bienvenido al Chatbot</h3>
              <p className="text-muted-foreground max-w-sm">
                Haz preguntas sobre teorías de relaciones internacionales, casos de estudio o cualquier tema relacionado
                con Negocios Internacionales.
              </p>
            </div>
          ) : (
            <>
              {messages.map((message, idx) => (
                <div key={idx} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="bg-muted px-4 py-2 rounded-lg flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Escribiendo...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input Form */}
        <div className="border-t border-border p-4 bg-card">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Escribe tu pregunta..."
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-primary hover:bg-primary/90 gap-2"
            >
              <Send className="w-4 h-4" />
              Enviar
            </Button>
          </form>
        </div>
      </div>

      {/* Quick Questions */}
      <div>
        <h3 className="font-semibold mb-3">Preguntas Sugeridas</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "¿Cuál es la diferencia entre Realismo e Idealismo?",
            "¿Qué es el Neorrealismo de Kenneth Waltz?",
            "¿Cómo explica Marx el imperialismo?",
            "¿Cuál es el rol de las instituciones internacionales?",
          ].map((question, idx) => (
            <button
              key={idx}
              className="text-left p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-muted/50 transition-colors"
              onClick={() => {
                const input_element = document.querySelector('input[type="text"]') as HTMLInputElement
                if (input_element) {
                  input_element.value = question
                  input_element.focus()
                }
              }}
            >
              <p className="text-sm font-medium">{question}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
