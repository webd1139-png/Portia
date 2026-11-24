"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/data";
import { Section, Container } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  "website-development": () => null,
  "ai-solutions": () => null,
  "seo-digital-visibility": () => null,
  "digital-design": () => null,
  "custom-software": () => null,
};

export default function Services() {
  return (
    <Section id="services" padding="xl" className="bg-secondary">
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            What I Build
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Sophisticated digital solutions for businesses ready to move
            forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * SERVICES.indexOf(service) }}
              className="group"
            >
              <Card padded hoverable className="h-full">
                <CardContent className="pt-0 pb-8">
                  <div className="w-12 h-12 rounded-xl bg-surface p-3 mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="text-primary group-hover:text-white">
                      {service.color === "text-primary" ? "💻" : service.color === "text-cyan" ? "🤖" : "🎨"}
                    </span>
                  </div>
                  <CardTitle className="mb-3">{service.title}</CardTitle>
                  <CardDescription>
                    {service.shortDescription}
                  </CardDescription>
                </CardContent>
                <div className="space-y-3 pt-6">
                  {service.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0 mt-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={service.ctaHref}
                  className="mt-8 flex items-center gap-2 text-sm font-medium text-primary hover:text-cyan transition-colors"
                >
                  {service.ctaLabel} <span className="h-3 w-3 rotate-45 group-hover:translate-x-1 transition-transform border-b border-primary pb-0.5" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
