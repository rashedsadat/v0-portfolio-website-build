"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail,
  Code2,
  Sparkles
} from "lucide-react"
import { motion } from "framer-motion"

const techBadges = ["PHP", "Laravel", "JavaScript", "React", "MySQL", "jQuery"]

const codeSnippets = {
  laravel: [
    { line: "<?php", type: "keyword" },
    { line: "", type: "normal" },
    { line: "namespace App\\Http\\Controllers;", type: "normal" },
    { line: "", type: "normal" },
    { line: "use App\\Models\\User;", type: "normal" },
    { line: "use Illuminate\\Http\\Request;", type: "normal" },
    { line: "", type: "normal" },
    { line: "class UserController extends Controller", type: "normal" },
    { line: "{", type: "normal" },
    { line: "    public function index()", type: "normal" },
    { line: "    {", type: "normal" },
    { line: "        return User::paginate(15);", type: "normal" },
    { line: "    }", type: "normal" },
    { line: "", type: "normal" },
    { line: "    public function store(Request $request)", type: "normal" },
    { line: "    {", type: "normal" },
    { line: "        $validated = $request->validate([", type: "normal" },
    { line: "            'name' => 'required|string|max:255',", type: "string" },
    { line: "            'email' => 'required|email|unique:users',", type: "string" },
    { line: "        ]);", type: "normal" },
    { line: "", type: "normal" },
    { line: "        return User::create($validated);", type: "normal" },
    { line: "    }", type: "normal" },
    { line: "}", type: "normal" },
  ],
  javascript: [
    { line: "// Modern JavaScript ES6+", type: "comment" },
    { line: "class ApiService {", type: "normal" },
    { line: "  constructor(baseUrl) {", type: "normal" },
    { line: "    this.baseUrl = baseUrl;", type: "normal" },
    { line: "  }", type: "normal" },
    { line: "", type: "normal" },
    { line: "  async fetchData(endpoint) {", type: "normal" },
    { line: "    const response = await fetch(", type: "normal" },
    { line: "      `${this.baseUrl}/${endpoint}`", type: "string" },
    { line: "    );", type: "normal" },
    { line: "    return response.json();", type: "normal" },
    { line: "  }", type: "normal" },
    { line: "", type: "normal" },
    { line: "  async postData(endpoint, data) {", type: "normal" },
    { line: "    const response = await fetch(", type: "normal" },
    { line: "      `${this.baseUrl}/${endpoint}`, {", type: "string" },
    { line: "        method: 'POST',", type: "string" },
    { line: "        body: JSON.stringify(data),", type: "normal" },
    { line: "      }", type: "normal" },
    { line: "    );", type: "normal" },
    { line: "    return response.json();", type: "normal" },
    { line: "  }", type: "normal" },
    { line: "}", type: "normal" },
  ],
  react: [
    { line: "import { useState, useEffect } from 'react';", type: "normal" },
    { line: "", type: "normal" },
    { line: "export function useApi(endpoint) {", type: "normal" },
    { line: "  const [data, setData] = useState(null);", type: "normal" },
    { line: "  const [loading, setLoading] = useState(true);", type: "normal" },
    { line: "  const [error, setError] = useState(null);", type: "normal" },
    { line: "", type: "normal" },
    { line: "  useEffect(() => {", type: "normal" },
    { line: "    fetch(endpoint)", type: "normal" },
    { line: "      .then(res => res.json())", type: "normal" },
    { line: "      .then(data => {", type: "normal" },
    { line: "        setData(data);", type: "normal" },
    { line: "        setLoading(false);", type: "normal" },
    { line: "      })", type: "normal" },
    { line: "      .catch(err => {", type: "normal" },
    { line: "        setError(err);", type: "normal" },
    { line: "        setLoading(false);", type: "normal" },
    { line: "      });", type: "normal" },
    { line: "  }, [endpoint]);", type: "normal" },
    { line: "", type: "normal" },
    { line: "  return { data, loading, error };", type: "normal" },
    { line: "}", type: "normal" },
  ]
}

type SnippetKey = keyof typeof codeSnippets

function CodeLine({ content, lineNumber }: { content: { line: string; type: string }; lineNumber: number }) {
  const getClass = (type: string) => {
    switch (type) {
      case "keyword": return "text-pink-400"
      case "string": return "text-emerald-400"
      case "comment": return "text-zinc-500"
      default: return "text-zinc-100"
    }
  }
  
  return (
    <div className="flex">
      <span className="text-zinc-500 w-8 flex-shrink-0 select-none text-right pr-4">{lineNumber}</span>
      <span className={`flex-1 ${getClass(content.type)}`}>{content.line || " "}</span>
    </div>
  )
}

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<SnippetKey>("laravel")
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="outline" className="px-4 py-2 text-sm font-mono gap-2 border-emerald-500/50 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">
                <Code2 className="size-4" />
                Available for hire
              </Badge>
            </motion.div>

            {/* Greeting */}
            <div className="space-y-3">
              <p className="text-muted-foreground font-mono text-xl">
                {">"} Hello, I&apos;m
              </p>
              <h1 className="text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                Md. Shahadat{" "}
                <span className="text-primary">Hossen</span>
              </h1>
            </div>

            {/* Title */}
            <div className="flex items-center gap-4 flex-wrap">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                Software Engineer
              </h2>
              <Badge className="bg-foreground text-background text-base px-4 py-1.5">
                PHP-Laravel
              </Badge>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              I build exceptional digital experiences for the web. Specializing in{" "}
              <span className="text-foreground font-semibold">PHP, Laravel</span> and modern backend technologies with{" "}
              <span className="text-foreground font-semibold">3 years</span> of experience.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-3">
              {techBadges.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono text-sm px-3 py-1.5">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#contact">
                  Get In Touch
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/rashedsadat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mdshahadathossen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-6" />
              </a>
              <a
                href="mailto:shahadathossen5019@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="size-6" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            {/* Floating decoration */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
            
            {/* Code Editor Card */}
            <div className="relative bg-card rounded-xl border shadow-2xl overflow-hidden">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/50">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="size-3 rounded-full bg-red-500" />
                    <div className="size-3 rounded-full bg-yellow-500" />
                    <div className="size-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground ml-2">
                    backend-service
                  </span>
                </div>
                <div className="flex bg-muted rounded-lg p-1">
                  <button 
                    onClick={() => setActiveTab("laravel")}
                    className={`text-xs px-3 py-1.5 rounded-md flex items-center gap-1 transition-colors ${activeTab === "laravel" ? "bg-background shadow-sm" : "hover:bg-background/50"}`}
                  >
                    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027c-.008.002-.016.008-.024.01a.348.348 0 0 1-.192 0c-.011-.002-.02-.008-.03-.012a.277.277 0 0 1-.06-.025L.533 18.755a.378.378 0 0 1-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 0 1 .023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034h.001L5.044.05a.375.375 0 0 1 .378 0L9.936 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 0 1 .024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 0 1 .38 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033a.3.3 0 0 1 .024.06c.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003-.002-.001c-.014-.01-.025-.021-.04-.031-.012-.012-.025-.02-.035-.03l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 0 1-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81 1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505 2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087l-1.58-.907v4.283l2.182 1.256 1.58.908zm-8.65 9.654 5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"/>
                    </svg>
                    Laravel
                  </button>
                  <button 
                    onClick={() => setActiveTab("javascript")}
                    className={`text-xs px-3 py-1.5 rounded-md flex items-center gap-1 transition-colors ${activeTab === "javascript" ? "bg-background shadow-sm" : "hover:bg-background/50"}`}
                  >
                    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179z"/>
                    </svg>
                    JS
                  </button>
                  <button 
                    onClick={() => setActiveTab("react")}
                    className={`text-xs px-3 py-1.5 rounded-md flex items-center gap-1 transition-colors ${activeTab === "react" ? "bg-background shadow-sm" : "hover:bg-background/50"}`}
                  >
                    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                    </svg>
                    React
                  </button>
                </div>
              </div>
              
              {/* Code Content */}
              <div className="relative">
                <pre className="p-4 text-sm font-mono overflow-x-auto bg-zinc-950 text-zinc-100 max-h-[400px] overflow-y-auto">
                  <code>
                    {codeSnippets[activeTab].map((content, i) => (
                      <CodeLine key={i} content={content} lineNumber={i + 1} />
                    ))}
                  </code>
                </pre>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-zinc-800/80 backdrop-blur rounded-full px-3 py-1.5">
                  <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-emerald-400">API Status: Online</span>
                </div>
              </div>

              {/* Bottom decorations */}
              <div className="px-4 py-3 border-t bg-muted/30 flex items-center gap-3">
                <Badge variant="outline" className="font-mono text-xs">
                  <Sparkles className="size-3 mr-1" />
                  @Controller
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">
                  class UserController {"{ ... }"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
