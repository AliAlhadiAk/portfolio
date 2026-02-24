"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

const projects = [
    {
        id: 0,
        title: "Prometheus Monitoring System",
        description: "Full monitoring system using Prometheus for real-time tracking of microservices metrics, visual analytics, and automated alerting. This project ensures high availability and performance by monitoring infrastructure health and application performance indicators.",
        link: "#",
        technologies: ["Prometheus", "Grafana", "Blackbox Exporter", "Alertmanager", "Microservices"],
        images: ["/projects/prometheus_dashboard.png", "/projects/prometheus_alerts.png"]
    },
    {
        id: 1,
        title: "Zip Pay",
        description: "High-performance mobile app for ride booking, real-time tracking, and secure payments with Stripe. Built with React Native for iOS and Android, using AWS Secrets Manager for secure data and NeonDB (PostgreSQL) for database management. Fully tested with Jest and Detox for seamless user experience.",
        link: "https://github.com/AliAlhadiAk/ZipPay",
        technologies: ["React Native", "Stripe", "AWS Secrets Manager", "NeonDB", "PostgreSQL", "Jest", "Detox"],
    },
    {
        id: 2,
        title: "Microservices App",
        description: "A microservices-based e-commerce platform utilizing Docker Compose for container orchestration. This app integrates SQL and NoSQL databases, Redis for caching, and employs CQRS with MediatR for efficient data handling. Key features include scalable architecture, robust data management, and optimized performance.",
        link: "https://github.com/AliAlhadiAk/MicroServicesEshopping",
        technologies: ["ASP.NET Core", "Docker Compose", "Redis", "CQRS", "MediatR", "SQL/NoSQL"],
    },
    {
        id: 3,
        title: "Webhook System",
        description: "A high-performance, scalable, and reliable solution that handles the challenges of delivering webhooks in a distributed system. By combining ASP.NET Core, PostgreSQL, and RabbitMQ, this system is capable of handling high loads and ensuring that webhooks are processed reliably, even under heavy traffic.",
        link: "https://github.com/AliAlhadiAk/WebHookSystem",
        technologies: ["ASP.NET Core", "PostgreSQL", "RabbitMQ", "Distributed Systems"],
    },
    {
        id: 4,
        title: "GitHub Action Runner",
        description: "Custom Dockerized self-hosted GitHub Actions runner with Docker CLI, built on Debian slim. Enables flexible, secure CI/CD workflows with container support and automation.",
        link: "https://github.com/AliAlhadiAk/GitHub_Action_Runner",
        technologies: ["Docker", "GitHub Actions", "Debian", "CI/CD"],
    },
    {
        id: 5,
        title: "E-commerce Platform",
        description: "Developed a comprehensive e-commerce platform as a freelancer, focusing on scalability, secure payment integration, and a streamlined user experience from product discovery to checkout.",
        link: "#",
        technologies: ["Next.js", "React", "Node.js", "Stripe", "PostgreSQL"],
    },
    {
        id: 6,
        title: "Task Management System",
        description: "Developed as a freelancer, this comprehensive platform allows teams to manage tasks, track progress, and collaborate in real-time. Features include nested task structures, priority levels, and team performance analytics.",
        link: "#",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Postgres", "Socket.io"],
    }
]

export function WorkSection() {
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1.0] as const,
            },
        },
    }

    return (
        <section className="py-8 md:py-12 relative">
            <div className="px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-6 md:mb-10"
                >
                    <div className="h-px bg-line mb-4 md:mb-6" />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-4 md:w-6 h-px bg-line-accent" />
                            <span className="text-mono text-foreground-subtle">projects</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-line-accent rounded-full" />
                            <div className="w-6 md:w-8 h-px bg-line" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative"
                >
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-line-accent via-line to-transparent hidden md:block" />

                    <div className="md:pl-6">
                        {projects.map((project, index) => (
                            <motion.div key={project.id} variants={itemVariants}>
                                <div
                                    className={`group relative py-3 md:py-4 transition-all duration-300 ${index !== projects.length - 1 ? 'border-b border-line hover:border-line-hover' : ''}`}
                                    onMouseEnter={() => setHoveredId(project.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    {/* Hover indicator line */}
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-3 h-px bg-line-accent transition-all duration-300 hidden md:block" />

                                    <div className="block md:pl-4 cursor-pointer">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 md:gap-4">
                                                <span className="text-large font-normal text-foreground group-hover:text-foreground transition-colors duration-300">
                                                    {project.title}
                                                </span>
                                                {project.link !== "#" && (
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                        <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-foreground-subtle group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Hover details box */}
                                        <AnimatePresence>
                                            {hoveredId === project.id && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                                                    className="overflow-hidden mt-3"
                                                >
                                                    <div className="p-3 md:p-4 bg-secondary/30 border border-line rounded-lg">
                                                        <p className="text-sm text-foreground-muted mb-4">
                                                            {project.description}
                                                        </p>

                                                        {project.images && (
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                                {project.images.map((img, i) => (
                                                                    <div key={i} className="relative aspect-video rounded-md overflow-hidden border border-line">
                                                                        <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="object-cover w-full h-full" />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}

                                                        <div className="flex flex-wrap gap-2">
                                                            {project.technologies.map((tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className="text-mono text-xs text-foreground-subtle px-2 py-1 border border-line rounded bg-secondary/50"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
