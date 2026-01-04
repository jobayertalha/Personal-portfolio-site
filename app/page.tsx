"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Phone,
  Briefcase,
  ChevronDown,
  Download,
  FileText,
  Send,
  MessageCircle,
  Heart,
  Code,
  Rocket,
  Star,
  Target,
  Award,
  Palette,
  Database,
  Smartphone,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  Layers,
  User,
  Facebook,
  BarChart3,
  Moon,
  Sun,
  Brain,
} from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setIsVisible(true)
  }, [])

  const techStack = [
    { name: "React", icon: Code, color: "text-blue-500" },
    { name: "Python", icon: Database, color: "text-yellow-500" },
    { name: "TensorFlow", icon: Layers, color: "text-orange-500" },
    { name: "Tailwind CSS", icon: Palette, color: "text-cyan-500" },
    { name: "PyTorch", icon: Rocket, color: "text-red-500" },
    { name: "Scikit-learn", icon: TrendingUp, color: "text-green-500" },
  ]

  const projects = [
    {
      title: "Bangla Sarcasm Detection",
      description:
        "A transformer-based NLP project for detecting sarcasm in Bangla text using BanglaBERT with advanced regularization.",
      tags: ["NLP", "Transformers", "BanglaBERT", "PyTorch", "Kaggle"],
      icon: Brain,
      features: [
        "Built using BanglaBERT (csebuetnlp/banglabert)",
        "Handled class imbalance using upsampling",
        "Applied Mixup, FGM, and R-Drop",
        "Reduced overfitting with layer freezing",
      ],
      githubLink: "https://www.kaggle.com/code/talhajobayer/benagali-sarcasm-detection",
      image: "/placeholder.svg",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern portfolio built with Next.js and Tailwind CSS featuring animations and dark mode.",
      tags: ["Next.js", "React", "Tailwind CSS"],
      icon: Rocket,
      features: [
        "Responsive modern UI",
        "Dark mode with persistence",
        "Glassmorphism effects",
        "Deployed on Vercel",
      ],
      githubLink: "https://github.com/jobayertalha/Personal-portfolio-site",
      image: "/placeholder.svg",
    },
    {
      title: "Cross-Platform GUI Generator",
      description:
        "C++ project using Abstract Factory Pattern with GoogleTest coverage.",
      tags: ["C++", "OOP", "Design Patterns"],
      icon: Code,
      features: [
        "Abstract Factory Pattern",
        "Cross-platform GUI support",
        "Unit tested with GTest",
      ],
      githubLink: "https://github.com/jobayertalha/FinalTest",
      image: "/placeholder.svg",
    },
    {
      title: "Car Rental System",
      description:
        "A full-featured car rental web application using PHP and MySQL.",
      tags: ["PHP", "MySQL", "CRUD"],
      icon: Smartphone,
      features: [
        "User & admin dashboards",
        "Booking validation",
        "Secure authentication",
      ],
      githubLink: "https://github.com/jobayertalha/Car-Rental-System",
      image: "/placeholder.svg",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-lg">Talha Jobayer</Link>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="dark:hidden" />
              <Moon className="hidden dark:block" />
            </Button>
          )}
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center">
        <div className={`text-center transition ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-5xl font-bold mb-4">Talha Jobayer Zihan</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Undergraduate CSE student passionate about ML, AI, and software engineering.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex items-center gap-2 px-4 py-2 border rounded-lg">
                <tech.icon className={`h-4 w-4 ${tech.color}`} />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20">
        <div className="container grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title}>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-4 space-y-1">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full">
                  <Link href={project.githubLink} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 border-t text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Talha Jobayer Zihan
      </footer>
    </div>
  )
}

