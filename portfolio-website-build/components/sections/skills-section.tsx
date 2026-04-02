"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Code2, 
  Layers, 
  Database, 
  Cloud,
  Server,
  GitBranch,
  Lock,
  Zap,
  Globe,
  Cpu
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
    skills: [
      { name: "PHP", icon: "🐘" },
      { name: "JavaScript", icon: "🟨" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" }
    ]
  },
  {
    id: "frameworks",
    label: "Frameworks",
    icon: Layers,
    skills: [
      { name: "Laravel", icon: "🔴" },
      { name: "React", icon: "⚛️" },
      { name: "Bootstrap", icon: "🅱️" },
      { name: "jQuery", icon: "📦" }
    ]
  },
  {
    id: "databases",
    label: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", icon: "🐬" },
      { name: "Redis", icon: "🔴" }
    ]
  },
  {
    id: "tools",
    label: "Tools",
    icon: Cloud,
    skills: [
      { name: "GitHub", icon: "🐙" },
      { name: "Slack", icon: "💬" },
      { name: "VS Code", icon: "💻" },
      { name: "AI Tools", icon: "🤖" }
    ]
  }
]

const specializations = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Building robust, scalable server-side applications and APIs",
    tags: ["RESTful APIs", "MVC Architecture", "Authentication", "Authorization"]
  },
  {
    icon: Database,
    title: "Database Engineering",
    description: "Designing and optimizing database systems for performance",
    tags: ["Schema Design", "Query Optimization", "Data Modeling", "Migrations"]
  },
  {
    icon: Cpu,
    title: "System Architecture",
    description: "Designing scalable and maintainable software architectures",
    tags: ["Clean Code", "SOLID Principles", "Design Patterns", "Code Review"]
  },
  {
    icon: GitBranch,
    title: "Version Control & CI",
    description: "Managing code versions and deployment pipelines",
    tags: ["Git", "GitHub", "Branch Strategy", "Code Review"]
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "Creating responsive and interactive web interfaces",
    tags: ["Ajax", "DOM Manipulation", "Responsive Design", "Cross-Browser"]
  },
  {
    icon: Lock,
    title: "Security",
    description: "Implementing robust security measures and best practices",
    tags: ["Authentication", "Authorization", "Data Protection", "XSS Prevention"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Tuning applications for maximum efficiency and speed",
    tags: ["Caching", "Query Optimization", "Code Profiling", "Load Testing"]
  },
  {
    icon: Layers,
    title: "API Design",
    description: "Creating intuitive, efficient, and secure APIs",
    tags: ["REST", "JSON", "API Documentation", "Versioning"]
  }
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("languages")

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-5 text-base px-4 py-1.5">EXPERTISE</Badge>
          <h2 className="mb-5" style={{ fontFamily: 'var(--font-display)' }}>Technical Skills</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            My expertise in modern development technologies and methodologies
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all text-base font-medium ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                <category.icon className="size-5" />
                {category.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {skillCategories
                .find((c) => c.id === activeCategory)
                ?.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="hover:shadow-md transition-shadow cursor-default">
                      <CardContent className="p-6 md:p-8 text-center">
                        <span className="text-4xl mb-3 block">{skill.icon}</span>
                        <h4 className="font-semibold text-lg">{skill.name}</h4>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Specialized Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: 'var(--font-display)' }}>Specialized Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <spec.icon className="size-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-3">{spec.title}</h4>
                    <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                      {spec.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {spec.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
