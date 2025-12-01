"use client"

import { useState } from "react"
import { Menu, X, BookOpen, Briefcase, MessageSquare, FileText, Newspaper, Users } from "lucide-react"
import TheoriesSection from "@/components/theories-section"
import SessionsSection from "@/components/sessions-section"
import ChatbotSection from "@/components/chatbot-section"
import NewsSection from "@/components/news-section"
import AboutSection from "@/components/about-section"
import Header from "@/components/header"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sections = [
    { id: "home", label: "Inicio", icon: BookOpen },
    { id: "theories", label: "Teorías", icon: FileText },
    { id: "news", label: "Noticias", icon: Newspaper },
    { id: "sessions", label: "Sesiones", icon: Briefcase },
    { id: "about", label: "Nosotros", icon: Users },
    { id: "chat", label: "Chatbot", icon: MessageSquare },
  ]

  const renderSection = () => {
    switch (activeSection) {
      case "theories":
        return <TheoriesSection />
      case "news":
        return <NewsSection />
      case "sessions":
        return <SessionsSection />
      case "about":
        return <AboutSection />
      case "chat":
        return <ChatbotSection />
      default:
        return <Header onNavigate={setActiveSection} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-primary">Grupo 6</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-1">
              {sections.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeSection === id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {sections.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveSection(id)
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeSection === id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{renderSection()}</main>
    </div>
  )
}
