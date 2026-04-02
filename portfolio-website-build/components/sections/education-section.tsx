"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Trophy, Award } from "lucide-react"
import { motion } from "framer-motion"

const education = {
  degree: "B.Sc. in Computer Science and Engineering",
  university: "United International University",
  period: "2017 - 2021",
  gpa: "3.58 / 4.00"
}

const awards = [
  {
    title: "Project Showcase — 1st Place",
    event: "United International University",
    year: "2018",
    icon: Trophy
  },
  {
    title: "Inter-University DUET Techfest — 2nd Place",
    event: "Dhaka University of Engineering and Technology",
    year: "",
    icon: Award
  },
  {
    title: "DUITS Robi National Campus IT Fest",
    event: "Dhaka University — Participant",
    year: "",
    icon: Award
  }
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Education & Awards</h2>
            <p className="text-muted-foreground text-lg">
              My academic background and achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="size-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Education</h3>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">{education.degree}</h4>
                    <p className="text-muted-foreground">{education.university}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary">{education.period}</Badge>
                      <Badge variant="outline" className="border-emerald-500/50 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">
                        GPA: {education.gpa}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Awards Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <Trophy className="size-6 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold">Competitions & Awards</h3>
                  </div>
                  <div className="space-y-4">
                    {awards.map((award, index) => (
                      <motion.div
                        key={award.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className={`size-8 rounded flex items-center justify-center flex-shrink-0 ${index === 0 ? 'bg-amber-500/10' : 'bg-muted'}`}>
                          <award.icon className={`size-4 ${index === 0 ? 'text-amber-500' : 'text-muted-foreground'}`} />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{award.title}</p>
                          <p className="text-xs text-muted-foreground">{award.event}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
