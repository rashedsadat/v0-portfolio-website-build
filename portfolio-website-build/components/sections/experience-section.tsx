"use client"

import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Software Engineer",
    company: "THESOFTKING Limited",
    location: "Dhaka",
    period: "2023 - Present",
    isCurrent: true,
    achievements: [
      {
        title: "Core Product Development",
        description: "Contributed to core product development across multiple domains: financial, education, and web applications."
      },
      {
        title: "Code Quality",
        description: "Defined coding standards and ensured code quality across projects for consistency and maintainability."
      },
      {
        title: "Mentorship",
        description: "Mentored junior developers and promoted continuous learning within the team."
      },
      {
        title: "Technical Leadership",
        description: "Assisted team members in solving technical challenges and developing core systems."
      }
    ],
    technologies: ["Laravel", "PHP", "JavaScript", "jQuery", "MySQL", "Ajax", "Bootstrap"]
  },
  {
    title: "Laravel Developer",
    company: "ParallaxLogic Infotech",
    location: "Dhaka",
    period: "2022 - 2023",
    isCurrent: false,
    achievements: [
      {
        title: "Full-Stack Development",
        description: "Worked on backend and frontend development with Laravel, JavaScript, and jQuery."
      },
      {
        title: "Team Collaboration",
        description: "Collaborated with a cross-functional team on large-scale applications."
      }
    ],
    technologies: ["Laravel", "PHP", "JavaScript", "jQuery", "Ajax"]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="size-7 text-primary" />
              </div>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)' }}>Work Experience</h2>
              </div>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              My professional journey as a developer, showcasing my growth and expertise in various technologies.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 md:left-8 -translate-x-1/2 size-4 rounded-full border-4 border-background ${exp.isCurrent ? 'bg-emerald-500' : 'bg-muted-foreground'}`} />

                  {/* Content Card */}
                  <div className="bg-card rounded-xl border p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
                        <p className="text-muted-foreground text-lg">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-base text-muted-foreground">
                          <Calendar className="size-5" />
                          {exp.period}
                        </div>
                        {exp.isCurrent && (
                          <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 text-sm">
                            Current
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4 mb-5">
                      {exp.achievements.map((achievement) => (
                        <div key={achievement.title} className="flex gap-3 text-base">
                          <ChevronRight className="size-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <span className="font-semibold text-foreground">{achievement.title}:</span>{" "}
                            <span className="text-muted-foreground">{achievement.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-mono text-sm px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
