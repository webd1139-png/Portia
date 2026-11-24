import { PROJECTS } from "@/data";
import { Section, Container } from "@/components/ui/section";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata = {
  title: "Projects",
  description: "Project showcase by Borngreat Opoku - featured work in website development, AI solutions, and custom software.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <Section id="projects" padding="xl">
        <Container maxWidth="7xl">
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
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * PROJECTS.indexOf(project) }}
                whileHover={{ y: -8 }}
              >
                <div className="group">
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6 border border-border">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      width={800}
                      height={600}
                    />
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
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
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-6 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-surface/50 border border-border text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href={project.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-cyan transition-colors"
                    >
                      View Live Project
                      <span className="h-3 w-3 rotate-45 border-b border-primary pb-0.5" />
                    </Link>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted hover:text-white transition-colors"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.602-3.37-1.343-3.37-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.651 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85 0 1.703.112 2.535.334 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.418-.012 2.747 0 .268.178.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted">
              Projects marked as <span className="text-primary">Concept</span>
              or <span className="text-primary">Prototype</span> are design
              explorations and not live products.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
