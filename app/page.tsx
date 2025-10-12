"use client"

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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 transition-colors duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 dark:from-teal-500/10 dark:to-emerald-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                TJ
              </div>
            </div>
            <span className="font-bold text-slate-900 dark:text-white text-lg hidden sm:inline-block">
              Talha Jobayer
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: "About", icon: User },
              { name: "Projects", icon: Code },
              { name: "Experience", icon: Briefcase },
              { name: "Certifications", icon: Award },
              { name: "Contact", icon: MessageCircle },
            ].map((item) => (
              <Link
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex items-center space-x-2">
              <Link
                href="https://github.com/jobayertalha"
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/talha-jobayer-696a74237/"
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.kaggle.com/talhajobayer"
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
              >
                <BarChart3 className="h-5 w-5" />
              </Link>
            </div>
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-lg"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
          <div className="container px-4 md:px-6">
            <div
              className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-4">
                <div className="inline-block">
                  <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0 px-4 py-2 text-sm font-medium">
                    <Star className="h-4 w-4 mr-1 inline" />
                    Available for opportunities
                  </Badge>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                     This is 
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Talha Jobayer Zihan
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                  Undergraduate CSE student passionate about building{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">innovative</span> and{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">impactful</span> solutions through
                  ML/AI and software engineering
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  asChild
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Get In Touch
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 font-medium px-8 py-6 rounded-xl transition-all duration-300 group bg-transparent"
                  asChild
                >
                  <Link
                    href="https://drive.google.com/file/d/12oqKip_9zEhFOyzLyGoEC9DuQYxd9725/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-5 w-5" />
                    View Resume
                    <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              <div className="pt-8">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">Tech Stack</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {techStack.map((tech, index) => (
                    <div key={tech.name} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                      <div className="relative flex items-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 animate-float">
                        <tech.icon className={`h-5 w-5 ${tech.color}`} />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{tech.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-slate-400" />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-white/50 dark:bg-slate-900/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0 mb-4">
                <Code className="h-3 w-3 mr-1" />
                Portfolio
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Here are some of my recent projects that showcase my skills and creativity
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
              {[
                {
                  title: "Personal Portfolio Website",
                  description:
                    "A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features elegant animations, glassmorphism effects, and a comprehensive showcase of projects, experience, and certifications.",
                  tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
                  icon: Rocket,
                  features: [
                    "Modern UI with elegant design system",
                    "Fully responsive across all devices",
                    "Built with Next.js 15 and React 19",
                    "Dark mode support with theme persistence",
                  ],
                  githubLink: "https://github.com/jobayertalha/Personal-portfolio-site",
                  image: "/colorful-gradient-portfolio.png",
                },
                {
                  title: "Cross-Platform GUI Component Generator",
                  description:
                    "A C++ project demonstrating Abstract Factory Design Pattern to create cross-platform GUI components with comprehensive GTest coverage",
                  tags: ["C++17", "GoogleTest", "Design Patterns", "OOP"],
                  icon: Code,
                  features: [
                    "Abstract Factory Pattern Implementation",
                    "Cross-Platform GUI Components",
                    "Comprehensive Unit Testing with GTest",
                    "Clean Architecture & Interface Segregation",
                  ],
                  githubLink: "https://github.com/jobayertalha/FinalTest",
                  image: "/images/cpp-project-output.png",
                },
                {
                  title: "Car Rental System Web App",
                  description:
                    "A full-featured Car Rental Management System built with PHP and MySQL, designed to streamline car bookings, manage fleet inventory, and handle customer records efficiently.",
                  tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "CRUD"],
                  icon: Smartphone,
                  features: [
                    "User Dashboard with car browsing & booking history",
                    "Admin Panel for fleet & booking management",
                    "Real-time booking with date validation",
                    "Secure authentication for admin & customers",
                  ],
                  githubLink: "https://github.com/jobayertalha/Car-Rental-System",
                  image: "/images/car-rental-homepage.png",
                },
              ].map((project, index) => (
                <Card
                  key={project.title}
                  className="group bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      width={600}
                      height={400}
                      alt={project.title}
                      className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg">
                      <project.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-slate-900 dark:text-white text-xl flex items-center gap-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                      asChild
                    >
                      <Link href={project.githubLink} target="_blank" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        View on GitHub
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0 mb-4">
                <Briefcase className="h-3 w-3 mr-1" />
                Career
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Work Experience</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                My professional journey and amazing companies I've worked with
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: "Industrial Attachment",
                  company: "Frontier Semiconductor BD Ltd",
                  period: "Industrial Attachment Program",
                  location: "ECB Chottor, Dhaka",
                  achievements: [
                    "Completed comprehensive industrial attachment program in semiconductor manufacturing",
                    "Gained hands-on experience with advanced semiconductor fabrication processes",
                    "Observed real-world application of theoretical knowledge in industrial settings",
                    "Learned about quality control procedures and industry-standard protocols",
                  ],
                  tags: ["Semiconductor", "Industrial Attachment", "Manufacturing"],
                  icon: Layers,
                  status: "Completed",
                },
                {
                  title: "Officer - Marketing",
                  company: "TEDxRUET",
                  period: "July 2024 - March 2025",
                  location: "Rajshahi, Bangladesh",
                  achievements: [
                    "Spearheaded content creation and storytelling to drive audience engagement",
                    "Developed and executed marketing strategies to enhance TEDxRUET's visibility",
                    "Adapted quickly to dynamic environments, ensuring efficient teamwork and execution",
                  ],
                  tags: ["Marketing", "Content Creation", "Strategy"],
                  icon: Target,
                  status: "Completed",
                },
                {
                  title: "Industrial Training",
                  company: "Netro Systems",
                  period: "15 days+ Training",
                  location: "Hi-Tech Park, Rajshahi",
                  achievements: [
                    "Gained hands-on experience in software development practices",
                    "Learned industry-standard tools and technologies",
                    "Collaborated with experienced developers on real projects",
                  ],
                  tags: ["Software Development", "Training"],
                  icon: Code,
                  status: "Completed",
                },
              ].map((job, index) => (
                <Card
                  key={job.title}
                  className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <job.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <CardTitle className="text-slate-900 dark:text-white">{job.title}</CardTitle>
                            <CardDescription className="text-slate-600 dark:text-slate-400 font-medium">
                              {job.company}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant="secondary"
                          className="mb-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                        >
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {job.status}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <Clock className="h-4 w-4" />
                          {job.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mt-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {job.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm"
                        >
                          <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-24 bg-white/50 dark:bg-slate-900/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0 mb-4">
                <Award className="h-3 w-3 mr-1" />
                Achievements
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Certifications</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Professional certifications and continuous learning achievements
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 max-w-6xl mx-auto">
              {[
                {
                  title: "PHP (Laravel) Training Certification",
                  issuer: "RUET - CSE Department",
                  date: "May 2024 - Feb 2025",
                  duration: "80 hours",
                  description:
                    "Under: Enhancing Digital Government and Economy (EDGE) Project, Bangladesh Computer Council, ICT Division",
                  serialNo: "EDGE-DSTS-116-6641-00016",
                  icon: Code,
                  tags: ["PHP", "Laravel", "Web Development"],
                  type: "Training",
                },
                {
                  title: "Machine Learning in Production",
                  issuer: "Coursera (DeepLearning.AI)",
                  date: "April 2025",
                  description: "Advanced course covering MLOps, model deployment, and production ML systems",
                  verificationLink: "https://www.coursera.org/account/accomplishments/verify/ND0HHROLRSGV",
                  icon: Database,
                  tags: ["MLOps", "Production ML", "DeepLearning.AI"],
                  type: "Certification",
                },
                {
                  title: "Natural Language Processing in TensorFlow",
                  issuer: "Coursera (DeepLearning.AI)",
                  date: "March 2025",
                  description: "Comprehensive NLP course using TensorFlow for text processing and language models",
                  verificationLink: "https://www.coursera.org/account/accomplishments/verify/JH2VY16BAY43",
                  icon: Layers,
                  tags: ["NLP", "TensorFlow", "Deep Learning"],
                  type: "Certification",
                },
                {
                  title: "Deep Learning and Reinforcement Learning",
                  issuer: "Coursera (IBM)",
                  date: "March 2025",
                  description: "Advanced deep learning concepts and reinforcement learning algorithms",
                  verificationLink: "https://www.coursera.org/account/accomplishments/verify/XUYUUSY3XIZH",
                  icon: Rocket,
                  tags: ["Deep Learning", "Reinforcement Learning", "IBM"],
                  type: "Certification",
                },
                {
                  title: "Introduction to Neural Networks and PyTorch",
                  issuer: "Coursera (IBM)",
                  date: "March 2025",
                  description: "Fundamentals of neural networks and hands-on PyTorch implementation",
                  verificationLink: "https://www.coursera.org/account/accomplishments/verify/FP8CNVG4SYW1",
                  icon: Layers,
                  tags: ["Neural Networks", "PyTorch", "IBM"],
                  type: "Certification",
                },
                {
                  title: "Machine Learning with Python",
                  issuer: "Coursera (IBM)",
                  date: "March 2025",
                  description: "Comprehensive machine learning course using Python and scikit-learn",
                  verificationLink: "https://www.coursera.org/account/accomplishments/verify/YFVHX96TAIBY",
                  icon: TrendingUp,
                  tags: ["Machine Learning", "Python", "Scikit-learn"],
                  type: "Certification",
                },
              ].map((cert, index) => (
                <Card
                  key={cert.title}
                  className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <cert.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <Badge
                            variant="secondary"
                            className={
                              cert.type === "Training"
                                ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                                : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                            }
                          >
                            {cert.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-slate-900 dark:text-white text-lg">{cert.title}</CardTitle>
                        <CardDescription className="text-slate-600 dark:text-slate-400 font-medium mt-1">
                          {cert.issuer}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <Clock className="h-4 w-4" />
                          {cert.date}
                        </div>
                        {cert.duration && (
                          <div className="text-sm text-slate-500 dark:text-slate-500 mt-1">{cert.duration}</div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{cert.description}</p>

                    {cert.serialNo && (
                      <p className="text-slate-500 dark:text-slate-500 text-xs mb-3 font-mono">
                        Serial No.: {cert.serialNo}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {cert.verificationLink && (
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <Link
                          href={cert.verificationLink}
                          target="_blank"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Verify Certificate
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0 mb-4">
                <MessageCircle className="h-3 w-3 mr-1" />
                Connect
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Ready to create something amazing together? Let's connect!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                <Card className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        icon: Mail,
                        text: "jobayertalha2020@gmail.com",
                        href: "mailto:jobayertalha2020@gmail.com",
                      },
                      { icon: Phone, text: "01721577792", href: "tel:01721577792" },
                      { icon: MapPin, text: "Rajshahi, Bangladesh", href: "#" },
                    ].map((contact, index) => (
                      <div
                        key={contact.text}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300"
                      >
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <contact.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{contact.text}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                      <Star className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Follow Me
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-3">
                    {[
                      { href: "https://github.com/jobayertalha", icon: Github, label: "GitHub" },
                      {
                        href: "https://www.linkedin.com/in/talha-jobayer-696a74237/",
                        icon: Linkedin,
                        label: "LinkedIn",
                      },
                      { href: "https://www.facebook.com/talha.jobayer.39/", icon: Facebook, label: "Facebook" },
                      { href: "https://www.kaggle.com/talhajobayer", icon: BarChart3, label: "Kaggle" },
                    ].map((social) => (
                      <Button
                        key={social.href}
                        variant="outline"
                        asChild
                        className="flex-1 min-w-[140px] bg-transparent"
                      >
                        <Link href={social.href} target="_blank" className="flex items-center gap-2">
                          <social.icon className="h-4 w-4" />
                          {social.label}
                        </Link>
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Send me a message</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Fill out the form below and I'll get back to you ASAP!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-slate-700 dark:text-slate-300">
                          First name
                        </Label>
                        <Input
                          id="first-name"
                          placeholder="Enter your first name"
                          className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-slate-700 dark:text-slate-300">
                          Last name
                        </Label>
                        <Input
                          id="last-name"
                          placeholder="Enter your last name"
                          className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                        className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-700 dark:text-slate-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Enter the subject"
                        className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        className="min-h-[120px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 bg-white/50 dark:bg-slate-900/50">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
            © {new Date().getFullYear()} Talha Jobayer Zihan. Made with
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
          </p>
          <div className="flex items-center space-x-4">
            {[
              { href: "https://github.com/jobayertalha", icon: Github },
              { href: "https://www.linkedin.com/in/talha-jobayer-696a74237/", icon: Linkedin },
              { href: "https://www.facebook.com/talha.jobayer.39/", icon: Facebook },
              { href: "https://www.kaggle.com/talhajobayer", icon: BarChart3 },
              { href: "mailto:jobayertalha2020@gmail.com", icon: Mail },
            ].map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
