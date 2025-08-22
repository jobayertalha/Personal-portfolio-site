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
  Sparkles,
  Download,
  FileText,
  Send,
  MessageCircle,
  Heart,
  Coffee,
  Code,
  Rocket,
  Star,
  Zap,
  Target,
  Award,
  Users,
  Palette,
  Database,
  Smartphone,
  Eye,
  ArrowRight,
  Play,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Shield,
  Clock,
  Layers,
  User,
  Facebook,
  BarChart3,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2 group">
              <div className="relative">
                <Sparkles className="h-6 w-6 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
              </div>
              <span className="font-bold text-white text-lg bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Talha Jobayer Zihan
              </span>
            </Link>
          </div>
          <nav className="flex items-center space-x-8 text-sm font-medium">
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
                className="text-white/80 hover:text-white transition-all duration-300 relative group flex items-center gap-2"
              >
                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Link
              href="https://github.com/jobayertalha"
              className="text-white/60 hover:text-pink-400 transition-all duration-300 hover:scale-110 relative group"
            >
              <Github className="h-5 w-5" />
              <div className="absolute -inset-2 bg-pink-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/talha-jobayer-696a74237/"
              className="text-white/60 hover:text-blue-400 transition-all duration-300 hover:scale-110 relative group"
            >
              <Linkedin className="h-5 w-5" />
              <div className="absolute -inset-2 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="https://www.kaggle.com/talhajobayer"
              className="text-white/60 hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group"
            >
              <BarChart3 className="h-5 w-5" />
              <div className="absolute -inset-2 bg-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="about" className="relative min-h-screen flex items-center justify-center">
          <div className="relative z-10 container px-4 md:px-6">
            <div
              className={`flex flex-col items-center justify-center text-center space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-6">
                <div className="relative">
                  <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/none">
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                      Hi, I'm Talha
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                      Jobayer Zihan
                    </span>
                  </h1>
                  <div className="absolute -top-4 -right-4 animate-bounce">
                    <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                  </div>
                </div>
                <p className="text-xl text-white/90 font-medium max-w-3xl mx-auto leading-relaxed">
                  <Rocket className="inline h-6 w-6 text-orange-400 mr-2" />
                  Undergraduate CSE student eager to build{" "}
                  <span className="text-yellow-400 font-bold">intelligent</span> and{" "}
                  <span className="text-pink-400 font-bold">impactful</span> solutions
                  <br />
                  <Lightbulb className="inline h-6 w-6 text-yellow-400 mr-2" />
                  Passionate ML/AI and software enthusiast
                </p>
              </div>

              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 group"
                  asChild
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <Sparkles className="h-4 w-4 group-hover:scale-125 transition-transform duration-300" />
                    Get In Touch
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group"
                  asChild
                >
                  <Link
                    href="https://drive.google.com/file/d/12oqKip_9zEhFOyzLyGoEC9DuQYxd9725/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                    View Resume
                    <Zap className="h-4 w-4 group-hover:scale-125 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-6">
                {[
                  { name: "React", color: "from-blue-400 to-cyan-400", icon: Code },
                  { name: "Python", color: "from-yellow-400 to-orange-400", icon: Database },
                  { name: "TensorFlow", color: "from-orange-400 to-red-400", icon: Layers },
                  { name: "Tailwind CSS", color: "from-teal-400 to-blue-400", icon: Palette },
                  { name: "PyTorch", color: "from-red-400 to-pink-400", icon: Zap },
                  { name: "Scikit-learn", color: "from-green-400 to-teal-400", icon: TrendingUp },
                ].map((tech, index) => (
                  <Badge
                    key={tech.name}
                    className={`bg-gradient-to-r ${tech.color} text-white font-semibold px-4 py-2 rounded-full transform hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-lg group flex items-center gap-2`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <tech.icon className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/70" />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="flex items-center gap-3">
                <Rocket className="h-8 w-8 text-orange-400" />
                <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
                <Code className="h-8 w-8 text-blue-400" />
              </div>
              <p className="max-w-[900px] text-white/80 text-lg flex items-center gap-2">
                <Eye className="h-5 w-5 text-purple-400" />
                Here are some of my recent projects that showcase my skills and creativity
                <Sparkles className="h-5 w-5 text-yellow-400" />
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
              {[
                {
                  title: "🌟 Personal Portfolio Website",
                  description:
                    "A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features vibrant animations, glassmorphism effects, and a comprehensive showcase of projects, experience, and certifications.",
                  tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
                  gradient: "from-pink-500 to-purple-500",
                  hoverGradient: "from-pink-600 to-purple-600",
                  icon: Rocket,
                  features: [
                    "🎨 Modern UI with vibrant gradients and animations",
                    "📱 Fully responsive design across all devices",
                    "⚡ Built with Next.js 15 and React 19",
                    "🎭 Interactive mouse follower and hover effects",
                  ],
                  githubLink: "https://github.com/jobayertalha/Personal-portfolio-site",
                  demoLink: null,
                  image: "/colorful-gradient-portfolio.png",
                },
                {
                  title: "Cross-Platform GUI Component Generator",
                  description:
                    "🧪 A C++ project demonstrating Abstract Factory Design Pattern to create cross-platform GUI components with comprehensive GTest coverage",
                  tags: ["C++17", "GoogleTest", "Design Patterns", "OOP"],
                  gradient: "from-purple-500 to-indigo-500",
                  hoverGradient: "from-purple-600 to-indigo-600",
                  icon: Code,
                  features: [
                    "🏭 Abstract Factory Pattern Implementation",
                    "🖼️ Cross-Platform GUI Components (Windows/Linux)",
                    "🧪 Comprehensive Unit Testing with GTest",
                    "💡 Clean Architecture & Interface Segregation",
                  ],
                  githubLink: "https://github.com/jobayertalha/FinalTest",
                  demoLink: null,
                  image: "/images/cpp-project-output.png",
                },
                {
                  title: "🚗 Car Rental System Web App",
                  description:
                    "A full-featured Car Rental Management System built with PHP and MySQL, designed to streamline car bookings, manage fleet inventory, and handle customer records efficiently.",
                  tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "CRUD"],
                  gradient: "from-green-500 to-teal-500",
                  hoverGradient: "from-green-600 to-teal-600",
                  icon: Smartphone,
                  features: [
                    "🚘 User Dashboard with car browsing & booking history",
                    "🔐 Admin Panel for fleet & booking management",
                    "📆 Real-time booking with date validation",
                    "🔒 Secure authentication for admin & customers",
                  ],
                  githubLink: "https://github.com/jobayertalha/Car-Rental-System",
                  demoLink: null,
                  image: "/images/car-rental-homepage.png",
                },
              ].map((project, index) => (
                <Card
                  key={project.title}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 rounded-2xl overflow-hidden"
                >
                  <CardHeader className="relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                    <div className="relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        width={400}
                        height={200}
                        alt={project.title}
                        className="aspect-video object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
                      />
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2">
                        <project.icon className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-white text-xl mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-white/80 mb-4 text-base">{project.description}</CardDescription>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Key Features:
                      </h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <ArrowRight className="h-3 w-3 text-blue-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center gap-1"
                        >
                          <Shield className="h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${project.gradient} hover:${project.hoverGradient} text-white font-semibold rounded-full group`}
                        asChild
                      >
                        <Link href={project.githubLink} target="_blank" className="flex items-center gap-2">
                          <Github className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                          Code
                          <Code className="h-3 w-3 group-hover:scale-125 transition-transform duration-300" />
                        </Link>
                      </Button>
                      {project.demoLink && (
                        <Button
                          size="sm"
                          className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full group"
                          asChild
                        >
                          <Link href={project.demoLink} target="_blank" className="flex items-center gap-2">
                            <Play className="h-4 w-4 group-hover:scale-125 transition-transform duration-300" />
                            Live Demo
                            <ExternalLink className="h-3 w-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 md:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-yellow-400" />
                <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                  Work Experience
                </h2>
                <Briefcase className="h-8 w-8 text-blue-400" />
              </div>
              <p className="max-w-[900px] text-white/80 text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                My professional journey and amazing companies I've worked with
                <Users className="h-5 w-5 text-purple-400" />
              </p>
            </div>

            <div className="mx-auto max-w-4xl space-y-8">
              {[
                {
                  title: "Industrial Attachment",
                  company: "Frontier Semiconductor BD Ltd",
                  period: "Industrial Attachment Program",
                  location: "ECB Chottor, Dhaka",
                  achievements: [
                    "🏭 Completed comprehensive industrial attachment program in semiconductor manufacturing",
                    "🔬 Gained hands-on experience with advanced semiconductor fabrication processes",
                    "⚡ Observed real-world application of theoretical knowledge in industrial settings",
                    "💡 Learned about quality control procedures and industry-standard protocols",
                    "🔧 Explored cutting-edge equipment and methodologies used in semiconductor production",
                  ],
                  tags: [
                    "Semiconductor",
                    "Industrial Attachment",
                    "Manufacturing",
                    "Industry Exposure",
                    "Quality Control",
                  ],
                  gradient: "from-cyan-400 to-blue-500",
                  icon: Layers,
                  status: "Completed",
                },
                {
                  title: "Officer - Marketing",
                  company: "TEDxRUET",
                  period: "July 2024 - March 2025",
                  location: "Rajshahi, Bangladesh",
                  achievements: [
                    "🎯 Spearheaded content creation and storytelling to drive audience engagement",
                    "📈 Developed and executed marketing strategies to enhance TEDxRUET's visibility",
                    "⚡ Adapted quickly to dynamic environments, ensuring efficient teamwork and execution",
                  ],
                  tags: ["Marketing", "Content Creation", "Strategy", "Storytelling"],
                  gradient: "from-red-400 to-orange-500",
                  icon: Target,
                  status: "Seasonal(Completed)",
                },
                {
                  title: "Industrial Training",
                  company: "Netro Systems",
                  period: "15days+ Training",
                  location: "Hi-Tech Park, Rajshahi",
                  achievements: [
                    "💻 Gained hands-on experience in software development practices",
                    "🔧 Learned industry-standard tools and technologies",
                    "👥 Collaborated with experienced developers on real projects",
                    "📚 Enhanced technical skills through practical implementation",
                  ],
                  tags: ["Software Development", "Training", "Hands-on Experience", "Industry Exposure"],
                  gradient: "from-blue-400 to-purple-500",
                  icon: Code,
                  status: "Completed",
                },
              ].map((job, index) => (
                <Card
                  key={job.title}
                  className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-xl rounded-2xl overflow-hidden group"
                >
                  <div className={`h-1 bg-gradient-to-r ${job.gradient}`}></div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-3 text-white text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                          <job.icon className="h-6 w-6 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
                          {job.title}
                          <Badge
                            className={`ml-2 ${job.status === "Current" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"} border-0`}
                          >
                            {job.status === "Current" ? (
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                {job.status}
                              </div>
                            ) : (
                              <div className="flex items-center gap-1">
                                <CheckCircle className="h-3 w-3" />
                                {job.status}
                              </div>
                            )}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-white/90 mt-1 flex items-center gap-2">
                          <Target className="h-4 w-4 text-purple-400" />
                          {job.company}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <Clock className="h-4 w-4 text-blue-400" />
                          {job.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/70 mt-1">
                          <MapPin className="h-4 w-4 text-red-400" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-white/80 mb-4">
                      {job.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="hover:text-white transition-colors duration-300 flex items-start gap-2"
                        >
                          <ArrowRight className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className={`bg-gradient-to-r ${job.gradient} text-white font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-1`}
                        >
                          <Zap className="h-3 w-3" />
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
        <section id="certifications" className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-yellow-400" />
                <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
                  Certifications
                </h2>
                <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="max-w-[900px] text-white/80 text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                Professional certifications and continuous learning achievements
                <Lightbulb className="h-5 w-5 text-yellow-400" />
              </p>
            </div>

            <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "PHP (Laravel) Training Certification",
                  issuer: "RUET - CSE Department",
                  date: "May 2024 - Feb 2025",
                  duration: "80 hours",
                  description:
                    "Under: Enhancing Digital Government and Economy (EDGE) Project, Bangladesh Computer Council, ICT Division",
                  serialNo: "EDGE-DSTS-116-6641-00016",
                  gradient: "from-purple-500 to-indigo-600",
                  icon: Code,
                  tags: ["PHP", "Laravel", "Web Development", "Government Project"],
                  type: "Training",
                },
                {
                  title: "Machine Learning in Production",
                  issuer: "Coursera (DeepLearning.AI)",
                  date: "April 2025",
                  description: "Advanced course covering MLOps, model deployment, and production ML systems",
                  verificationLink: "https://www.coursera.org/account/accomplishments/verify/ND0HHROLRSGV",
                  gradient: "from-blue-500 to-cyan-600",
                  icon: Database,
                  tags: ["MLOps", "Production ML", "DeepLearning.AI", "Advanced"],
                  type: "Certification",
                },
                {
                  title: "Natural Language Processing in TensorFlow",
                  issuer: "Coursera (DeepLearning.AI)",
                  date: "March 2025",
                  description: "Comprehensive NLP course using TensorFlow for text processing and language models",
                  verificationLink: "https://www.coursera.org/account/accomplishments/verify/JH2VY16BAY43",
                  gradient: "from-green-500 to-teal-600",
                  icon: Layers,
                  tags: ["NLP", "TensorFlow", "Deep Learning", "Text Processing"],
                  type: "Certification",
                },
                {
                  title: "Deep Learning and Reinforcement Learning",
                  issuer: "Coursera (IBM)",
                  date: "March 2025",
                  description: "Advanced deep learning concepts and reinforcement learning algorithms",
                  verificationLink: "https://www.coursera.org/account/accomplishments/verify/XUYUUSY3XIZH",
                  gradient: "from-red-500 to-pink-600",
                  icon: Zap,
                  tags: ["Deep Learning", "Reinforcement Learning", "IBM", "AI"],
                  type: "Certification",
                },
                {
                  title: "Introduction to Neural Networks and PyTorch",
                  issuer: "Coursera (IBM)",
                  date: "March 2025",
                  description: "Fundamentals of neural networks and hands-on PyTorch implementation",
                  verificationLink: "https://www.coursera.org/account/accomplishments/verify/FP8CNVG4SYW1",
                  gradient: "from-orange-500 to-red-600",
                  icon: Rocket,
                  tags: ["Neural Networks", "PyTorch", "Deep Learning", "IBM"],
                  type: "Certification",
                },
                {
                  title: "Deep Learning with Keras and Tensorflow",
                  issuer: "Coursera (IBM)",
                  date: "March 2025",
                  description: "Practical deep learning using Keras and TensorFlow frameworks",
                  verificationLink: "https://www.coursera.org/account/accomplishments/verify/R0611FSJDIUM",
                  gradient: "from-indigo-500 to-purple-600",
                  icon: Layers,
                  tags: ["Keras", "TensorFlow", "Deep Learning", "IBM"],
                  type: "Certification",
                },
                {
                  title: "Machine Learning with Python",
                  issuer: "Coursera (IBM)",
                  date: "March 2025",
                  description: "Comprehensive machine learning course using Python and scikit-learn",
                  verificationLink: "https://www.coursera.org/account/accomplishments/verify/YFVHX96TAIBY",
                  gradient: "from-yellow-500 to-orange-600",
                  icon: TrendingUp,
                  tags: ["Machine Learning", "Python", "Scikit-learn", "IBM"],
                  type: "Certification",
                },
              ].map((cert, index) => (
                <Card
                  key={cert.title}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 rounded-2xl overflow-hidden"
                >
                  <div className={`h-1 bg-gradient-to-r ${cert.gradient}`}></div>
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <cert.icon className="h-6 w-6 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
                          <Badge
                            className={`${cert.type === "Training" ? "bg-purple-500/20 text-purple-400" : "bg-blue-500/20 text-blue-400"} border-0`}
                          >
                            {cert.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-white text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                          {cert.title}
                        </CardTitle>
                        <CardDescription className="text-white/90 font-medium flex items-center gap-2 mt-1">
                          <Award className="h-4 w-4 text-green-400" />
                          {cert.issuer}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <Clock className="h-4 w-4 text-blue-400" />
                          {cert.date}
                        </div>
                        {cert.duration && <div className="text-sm text-white/60 mt-1">{cert.duration}</div>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 text-sm mb-3 leading-relaxed">{cert.description}</p>

                    {cert.serialNo && (
                      <p className="text-white/60 text-xs mb-3 font-mono">Serial No.: {cert.serialNo}</p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className={`bg-gradient-to-r ${cert.gradient} text-white font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-1 text-xs`}
                        >
                          <Shield className="h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {cert.verificationLink && (
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${cert.gradient} hover:opacity-90 text-white font-semibold rounded-full group w-full`}
                        asChild
                      >
                        <Link
                          href={cert.verificationLink}
                          target="_blank"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                          Verify Certificate
                          <CheckCircle className="h-3 w-3 group-hover:scale-125 transition-transform duration-300" />
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
        <section id="contact" className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-8 w-8 text-blue-400" />
                <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <Send className="h-8 w-8 text-green-400" />
              </div>
              <p className="max-w-[900px] text-white/80 text-lg flex items-center gap-2">
                <Rocket className="h-5 w-5 text-orange-400" />
                Ready to create something amazing together? Let's connect!
                <Sparkles className="h-5 w-5 text-yellow-400" />
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                    <Mail className="h-6 w-6 text-blue-400" />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Mail,
                        text: "jobayertalha2020@gmail.com",
                        href: "mailto:jobayertalha2020@gmail.com",
                        color: "text-red-400",
                        bgColor: "bg-red-400/10",
                      },
                      {
                        icon: Phone,
                        text: "01721577792",
                        href: "tel:01721577792",
                        color: "text-green-400",
                        bgColor: "bg-green-400/10",
                      },
                      {
                        icon: MapPin,
                        text: "Rajshahi, Bangladesh",
                        href: "#",
                        color: "text-blue-400",
                        bgColor: "bg-blue-400/10",
                      },
                    ].map((contact, index) => (
                      <div
                        key={contact.text}
                        className={`flex items-center gap-4 group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 ${contact.bgColor} hover:scale-105`}
                      >
                        <div className={`p-2 rounded-full ${contact.bgColor}`}>
                          <contact.icon
                            className={`h-6 w-6 ${contact.color} group-hover:scale-110 transition-transform duration-300`}
                          />
                        </div>
                        <span className="text-white group-hover:text-white/90 transition-colors duration-300 font-medium">
                          {contact.text}
                        </span>
                        <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                    <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                    Follow Me
                  </h3>
                  <div className="flex gap-4">
                    <Button
                      className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white rounded-full p-4 hover:scale-110 transition-all duration-300 group"
                      asChild
                    >
                      <Link href="https://github.com/jobayertalha" target="_blank" className="flex items-center gap-2">
                        <Github className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="hidden sm:inline">GitHub</span>
                      </Link>
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-full p-4 hover:scale-110 transition-all duration-300 group"
                      asChild
                    >
                      <Link
                        href="https://www.linkedin.com/in/talha-jobayer-696a74237/"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <Linkedin className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="hidden sm:inline">LinkedIn</span>
                      </Link>
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white rounded-full p-4 hover:scale-110 transition-all duration-300 group"
                      asChild
                    >
                      <Link
                        href="https://www.facebook.com/talha.jobayer.39/"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <Facebook className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="hidden sm:inline">Facebook</span>
                      </Link>
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white rounded-full p-4 hover:scale-110 transition-all duration-300 group"
                      asChild
                    >
                      <Link
                        href="https://www.kaggle.com/talhajobayer"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <BarChart3 className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="hidden sm:inline">Kaggle</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                  <CardTitle className="text-white text-2xl flex items-center gap-2">
                    <Send className="h-6 w-6 text-pink-400" />
                    Send me a message
                    <Sparkles className="h-5 w-5 text-yellow-400" />
                  </CardTitle>
                  <CardDescription className="text-white/80 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    Fill out the form below and I'll get back to you ASAP!
                    <Clock className="h-4 w-4 text-blue-400" />
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-white flex items-center gap-2">
                          <Users className="h-4 w-4 text-blue-400" />
                          First name
                        </Label>
                        <Input
                          id="first-name"
                          placeholder="Enter your first name"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-pink-400 focus:ring-pink-400 transition-all duration-300 focus:scale-105"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-white flex items-center gap-2">
                          <Users className="h-4 w-4 text-purple-400" />
                          Last name
                        </Label>
                        <Input
                          id="last-name"
                          placeholder="Enter your last name"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-pink-400 focus:ring-pink-400 transition-all duration-300 focus:scale-105"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white flex items-center gap-2">
                        <Mail className="h-4 w-4 text-red-400" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-pink-400 focus:ring-pink-400 transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white flex items-center gap-2">
                        <Target className="h-4 w-4 text-green-400" />
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Enter the subject"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-pink-400 focus:ring-pink-400 transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white flex items-center gap-2">
                        <MessageCircle className="h-4 w-4 text-blue-400" />
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-pink-400 focus:ring-pink-400 transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 group"
                    >
                      <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                      <Rocket className="h-4 w-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 bg-black/20 backdrop-blur-md">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-white/60 md:text-left flex items-center gap-2">
            © {new Date().getFullYear()} Talha Jobayer Zihan. Made with
            <Heart className="h-4 w-4 text-red-400 fill-red-400 animate-pulse" />
            and lots of
            <Coffee className="h-4 w-4 text-yellow-600" />
          </p>
          <div className="flex items-center space-x-4">
            {[
              {
                href: "https://github.com/jobayertalha",
                icon: Github,
                color: "hover:text-gray-400",
                bg: "hover:bg-gray-400/10",
              },
              {
                href: "https://www.linkedin.com/in/talha-jobayer-696a74237/",
                icon: Linkedin,
                color: "hover:text-blue-400",
                bg: "hover:bg-blue-400/10",
              },
              {
                href: "https://www.facebook.com/talha.jobayer.39/",
                icon: Facebook,
                color: "hover:text-blue-500",
                bg: "hover:bg-blue-500/10",
              },
              {
                href: "https://www.kaggle.com/talhajobayer",
                icon: BarChart3,
                color: "hover:text-cyan-400",
                bg: "hover:bg-cyan-400/10",
              },
              {
                href: "mailto:jobayertalha2020@gmail.com",
                icon: Mail,
                color: "hover:text-red-400",
                bg: "hover:bg-red-400/10",
              },
            ].map((social, index) => (
              <Link
                key={social.href}
                href={social.href}
                className={`text-white/60 ${social.color} ${social.bg} transition-all duration-300 hover:scale-110 p-2 rounded-full`}
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
