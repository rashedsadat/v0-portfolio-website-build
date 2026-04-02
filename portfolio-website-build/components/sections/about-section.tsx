"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Mail, 
  GraduationCap, 
  Briefcase,
  Download,
  User
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Sector #11, Uttara-1230, Dhaka, Bangladesh"
  },
  {
    icon: Mail,
    label: "Email",
    value: "shahadathossen5019@gmail.com"
  },
  {
    icon: GraduationCap,
    label: "Study",
    value: "United International University (B.Sc. in CSE)"
  },
  {
    icon: Briefcase,
    label: "Employment",
    value: "Available"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image and Experience Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-2xl transform rotate-3" />
              
              {/* Profile Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <User className="size-32 text-muted-foreground/30" />
                </div>
              </div>

              {/* Experience Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 z-20"
              >
                <div className="bg-card rounded-xl border shadow-lg p-4 flex items-center gap-3">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="size-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">3 Years</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <h2 style={{ fontFamily: 'var(--font-display)' }}>About Me</h2>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Hello! I&apos;m Shahadat, a passionate Software Engineer with a focus on creating efficient, 
                  scalable, and user-friendly web applications. My journey in tech began during my studies 
                  at United International University, and I&apos;ve been hooked on problem-solving and building 
                  things ever since.
                </p>
                <p>
                  I specialize in <span className="text-foreground font-semibold">PHP and Laravel</span> development, 
                  with deep interest in building robust digital solutions with user-friendly interfaces 
                  and scalable back-end systems. I&apos;m committed to coding standards, project consistency, 
                  and mentoring junior developers.
                </p>
              </div>
            </div>

            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg border p-5 space-y-2"
                >
                  <div className="flex items-center gap-2 text-foreground">
                    <item.icon className="size-5" />
                    <h3 className="font-semibold text-base">{item.label}</h3>
                  </div>
                  <p className="text-base text-muted-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Download Resume Button */}
            <Button size="lg" className="gap-2" asChild>
              <a href="/resume.pdf" download>
                <Download className="size-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
