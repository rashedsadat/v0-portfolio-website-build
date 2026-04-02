"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Folder } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Real Estate Investment Platform",
    description: "A comprehensive real estate investment platform allowing users to invest in properties. Developed backend, frontend manipulation, and deployment for seamless user experience.",
    technologies: ["Laravel", "JavaScript", "jQuery", "Ajax", "Bootstrap"],
    liveUrl: "https://script.viserlab.com/realvest/",
    githubUrl: null,
    role: "Full-Stack Development & Deployment"
  },
  {
    title: "Digital Marketing Tracking (Digitstem)",
    description: "A multi-vendor tracking platform with multiple panels for digital marketing campaign management and analytics tracking.",
    technologies: ["Laravel", "JavaScript", "jQuery", "Ajax"],
    liveUrl: "https://digitstem.com/",
    githubUrl: null,
    role: "Backend & Multi-Panel Development"
  },
  {
    title: "Quiz Game (QuizLab)",
    description: "A quiz-based mobile learning application with backend APIs for managing questions, categories, and user progress tracking.",
    technologies: ["Laravel", "JavaScript", "jQuery", "Ajax", "REST API"],
    liveUrl: "https://script.viserlab.com/quizlab/",
    githubUrl: null,
    role: "Backend API Development"
  },
  {
    title: "Gio Money",
    description: "A banking application with integrated multi-currency module for handling various currency transactions and conversions.",
    technologies: ["Laravel", "JavaScript", "jQuery", "Ajax"],
    liveUrl: "https://www.gio.money/",
    githubUrl: null,
    role: "Multi-Currency Module Integration"
  },
  {
    title: "XAXINO",
    description: "An online casino gaming platform with multiple integrated casino games. Refactored existing codebase for better performance and maintainability.",
    technologies: ["Laravel", "JavaScript", "jQuery", "Ajax"],
    liveUrl: "https://script.viserlab.com/xaxino/",
    githubUrl: null,
    role: "Code Refactoring & Game Integration"
  },
  {
    title: "JobLab",
    description: "A comprehensive job search platform with separate applicant and employer panels for job posting, applications, and recruitment management.",
    technologies: ["Laravel", "JavaScript", "jQuery", "Ajax", "Bootstrap"],
    liveUrl: "https://script.viserlab.com/joblab/",
    githubUrl: null,
    role: "Applicant & Employer Panel Development"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-5" style={{ fontFamily: 'var(--font-display)' }}>Projects</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A selection of projects I&apos;ve worked on, showcasing my expertise in Laravel and full-stack development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 md:p-7 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Folder className="size-7 text-primary" />
                    </div>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors p-2"
                          aria-label={`View ${project.title} source code`}
                        >
                          <Github className="size-6" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors p-2"
                          aria-label={`View ${project.title} live`}
                        >
                          <ExternalLink className="size-6" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className="text-base text-muted-foreground mb-3">
                      <span className="font-semibold text-foreground">Role:</span> {project.role}
                    </p>
                    <p className="text-muted-foreground text-base leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-sm px-2.5 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
