"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/data";
import { Section, Container } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Sparkles } from "lucide-react";

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <Section id="projects" padding="xl">
      <Container maxWidth="full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            Project Showcase
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Selected work spanning website development, AI solutions, and
            custom software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * featured.indexOf(project) }}
              whileHover={{ y: -8 }}
            >
              <Card padded hoverable className="h-full hover-lift-luxury group relative overflow-hidden">
                <div className="relative h-64 rounded-xl overflow-hidden mb-6 border border-border bg-surface/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    width={800}
                    height={600}
                    priority={project === featured[0]}
                  />
                  <div className="absolute top-4 left-4 z-10 flex gap-3">
                    <Badge variant="secondary">{project.categoryLabel}</Badge>
                    <Badge
                      variant={
                        project.status === "completed"
                          ? "success"
                          : project.status === "prototype"
                          ? "outline"
                          : "default"
                      }
                    >
                      {project.statusLabel}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2 bg-background/90 backdrop-blur px-3 py-2 rounded-lg border border-border">
                      <Sparkles className="w-4 h-4 text-cyan" />
                      <span className="text-xs font-medium text-primary">{project.technologies.length} technologies</span>
                    </div>
                    <Link
                      href={project.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-8 text-sm text-muted">{project.shortDescription}</CardDescription>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-surface/40 border border-border text-xs font-medium text-muted transition-colors hover:bg-primary/20 hover:text-primary hover:border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <Link
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-cyan transition-colors"
                  >
                    View Live Project <span className="h-3 w-3 rotate-45 border-b border-primary pb-0.5" />
                  </Link>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 text-muted hover:text-cyan transition-colors rounded-lg hover:bg-surface/30"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C-4.422 18.07-3.633 17.7-3.633 17.7C-3.067 16.85-2.36 17.36-2.36 17.36C-1.584 17.78-1.09 18.12-1.09 18.12C-0.558 18.73 0.897 18.59 1.738 18.475C2.392 14.297 4.827 13.4 6.856 12.83C2.955 12.129 2.23 10.72 2.23 10.72C1.578 9.63 0.897 8.83 0.897 8.83C0.585 7.95 0.113 7.55 0.113 7.55c0-1.211.435-2.302 1.168-3.12C0.645 4.08 1.748 3.736 2.748 3.736c.954 0 1.826.393 2.5 1.011C3.692 4.52 3.99 5.69 3.99 5.69c-1.131.85-1.886 2.59-1.886 4.31 0 .298.026.584.095.835C3.2 9.41 4.77 10.76 6.54 10.76c.212 0 .422-.028.632-.076C5.69 11.34 6.2 12.34 6.2 12.34c-1.233.926-1.01 2.54 0 3.24 1.01.696 2.27 1.09 3.72 1.09 1.67 0 3.02-.814 3.72-1.09 1.01-.705 1.233-2.314 0-3.24 0 0-1.01-.27-3.32 1.35-1.08.39-2.29.59-3.49.59-1.2 0-2.41-.2-3.49-.59C2.31 13.43 1.3 13.16 1.3 13.16c0-.705.28-1.315.69-1.815 0 0 .6-.192 1.65.75.78.373 1.62.562 2.47.442.85-.12 1.69-.256 2.54-.45-.27-.76-.41-1.62-.41-1.62 0-.46.25-.895.68-1.135-1.37-.24-2.81-.47-4.27-.92C1.12 13.33 1.48 14.15 1.48 14.15c0 .38.22.69.61.81.75.23 1.55.35 2.38.35.83 0 1.63-.12 2.38-.35.39-.12.61-.43.61-.81 0-.71-.36-1.49-.36-1.49C7.1 9.63 7.93 10.49 7.93 10.49c-.42.73-.65 1.59-.65 2.38 0 .78.37 1.47.89 1.97 1.12.42 2.35.64 3.68.64 1.33 0 2.56-.22 3.71-.64.52-.5.89-1.19.89-1.97 0-.79-.23-1.65-.65-2.38s-.23-1.65-.65-2.38c.26-.23.51-.47.78-.72C11.26 2.75 11.63 2.5 12 2.5s.74.25 1.13.5c.27.25.52.49.78.72-.42.73-.65 1.59-.65 2.38 0 .79.23 1.65.65 2.38s.23 1.65.65 2.38c-.26-.23-.51-.47-.78-.72-1.31-.9-2.57-1.4-3.88-1.4-1.31 0-2.57.5-3.88 1.4-.27.25-.52.49-.78.72s-.39.47-.65.72c-.42.72-.65 1.58-.65 2.38 0 .38.22.69.61.81.75.23 1.55.35 2.38.35.83 0 1.63-.12 2.38-.35.39-.12.61-.43.61-.81 0-.71-.36-1.49-.36-1.49 0-.79.23-1.65.65-2.38s.23-1.65.65-2.38c-.26-.23-.51-.47-.78-.72-1.31-.9-2.57-1.4-3.88-1.4-1.31 0-2.57.5-3.88 1.4" />
                      </svg>
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
