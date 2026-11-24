import { notFound } from 'next/navigation';
import { PROJECTS } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const dynamicParams = true;

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  const isConcept = project.status === 'concept';
  const isPrototype = project.status === 'prototype';

  return (
    <div className="flex flex-col">
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="ambient-light">
          <div className="ambient-blob ambient-blob-1" />
          <div className="ambient-blob ambient-blob-2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-12 flex flex-wrap gap-2">
            <Badge variant="secondary">{project.categoryLabel}</Badge>
            <Badge variant={isConcept ? "outline" : isPrototype ? "outline" : "success"}>
              {project.statusLabel}
            </Badge>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-border mb-8 shadow-2xl">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  width={1200}
                  height={800}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBoRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAEAAIdpAAQAAAABAAAAWgAAAAAAAACQAAAAAQAAAJAAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAABugAwAEAAAAAQAAABwAAAAAgADEAAAAAQAAAB4AAAAAgADEAAAAAQAAAB4AAAAA/"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent" />
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {project.galleryImages.map((img, idx) => (
                  <div key={idx} className="aspect-video rounded-xl overflow-hidden border border-border">
                    <Image
                      src={img}
                      alt={`${project.title} Gallery ${idx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      width={400}
                      height={300}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-lg text-muted leading-relaxed">{project.description}</p>

                <div className="border-t border-border pt-6">
                  <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full bg-surface border border-border text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
                  >
                    View Live Project <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 border border-border bg-surface text-white rounded-xl font-medium hover:bg-surface/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {project.challenge && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <div className="rounded-xl border border-border bg-surface/50 backdrop-blur p-8">
                <p className="text-lg text-muted leading-relaxed">{project.challenge}</p>
              </div>
            </div>
          )}

          {project.approach && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Development Approach</h2>
              <div className="rounded-xl border border-border bg-surface/50 backdrop-blur p-8">
                <p className="text-lg text-muted leading-relaxed">{project.approach}</p>
              </div>
            </div>
          )}

          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Implemented Functionality</h2>
            <ul className="space-y-4">
              {project.functionality.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-lg text-muted leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-xs font-bold">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Have a similar project?</h2>
          <p className="text-lg text-muted mb-8">Let's build something exceptional together.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors">
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}