"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { 
  Home, 
  User, 
  Briefcase, 
  FolderKanban, 
  Code2, 
  Mail,
  Sun,
  Moon,
  Github,
  Linkedin,
  FileText
} from "lucide-react"
import { motion } from "framer-motion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail }
]

const externalLinks = [
  { 
    label: "Resume", 
    icon: FileText, 
    href: "/resume.pdf",
    download: true
  },
  { 
    label: "GitHub", 
    icon: Github, 
    href: "https://github.com/rashedsadat"
  },
  { 
    label: "LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/mdshahadathossen"
  }
]

export function FloatingDock() {
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id)
      }))

      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const offsetTop = section.element.offsetTop
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    }
  }

  return (
    <TooltipProvider delayDuration={0}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="flex items-center gap-1 bg-background/80 backdrop-blur-lg border rounded-full px-2 py-2 shadow-lg">
          {/* Navigation Items */}
          {navItems.map((item) => (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative size-10 rounded-full flex items-center justify-center transition-colors ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={item.label}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <item.icon className="size-5 relative z-10" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs">
                {item.label}
              </TooltipContent>
            </Tooltip>
          ))}

          {/* Separator */}
          <div className="w-px h-6 bg-border mx-1" />

          {/* External Links */}
          {externalLinks.map((link) => (
            <Tooltip key={link.label}>
              <TooltipTrigger asChild>
                <a
                  href={link.href}
                  target={link.download ? undefined : "_blank"}
                  rel={link.download ? undefined : "noopener noreferrer"}
                  download={link.download}
                  className="size-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="size-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs">
                {link.label}
              </TooltipContent>
            </Tooltip>
          ))}

          {/* Separator */}
          <div className="w-px h-6 bg-border mx-1" />

          {/* Theme Toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="size-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {mounted && (
                  <>
                    {theme === "dark" ? (
                      <Sun className="size-5" />
                    ) : (
                      <Moon className="size-5" />
                    )}
                  </>
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" className="text-xs">
              Toggle theme
            </TooltipContent>
          </Tooltip>
        </div>
      </motion.div>
    </TooltipProvider>
  )
}
