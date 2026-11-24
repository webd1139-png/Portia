"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Laptop, Code2, Zap, Target } from "lucide-react";
import { BIO } from "@/data";
import { Section, Container } from "@/components/ui/section";

const INTEREST_ICONS: Record<string, React.ElementType> = {
  "Web Development": Laptop,
  "Artificial Intelligence": Code2,
  Automation: Zap,
  "Digital Entrepreneurship": Target,
};

export default function About() {
  const portraitUrl = "/portrait.jpg";

  return (
    <Section id="about" padding="xl">
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            Technology Is My Medium. Innovation Is My Direction.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            {BIO.biography.split("\n\n")[0]}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan rounded-2xl blur opacity-30" />
              <div className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur p-1">
                <Image
                  src={portraitUrl}
                  alt="Borngreat Opoku - Professional portrait"
                  className="rounded-xl w-full h-auto object-cover"
                  width={600}
                  height={600}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBoRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAEAAIdpAAQAAAABAAAAWgAAAAAAAACQAAAAAQAAAJAAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAABugAwAEAAAAAQAAABwAAAAAgADEAAAAAQAAAB4AAAAAgADEAAAAAQAAAB4AAAAA/"
                />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-white leading-relaxed">
                {BIO.biography.split("\n\n")[1]}
              </p>
              <p className="text-lg text-white leading-relaxed">
                {BIO.biography.split("\n\n")[2]}
              </p>
              <p className="text-lg text-white leading-relaxed">
                {BIO.biography.split("\n\n")[3]}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {BIO.interests.map((interest) => {
                const Icon = INTEREST_ICONS[interest];
                return (
                  <div
                    key={interest}
                    className="p-6 rounded-xl border border-border bg-surface/50 backdrop-blur-sm hover-lift group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{interest}</h3>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Working Philosophy
            </h3>
            <p className="text-muted max-w-2xl mx-auto">
              Great technology should not only look impressive but solve real
              problems. Every line of code, every design decision, every
              interaction is made with intention.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BIO.values.map((value) => (
              <div
                key={value}
                className="p-6 rounded-xl border border-border bg-surface/50 backdrop-blur-sm text-center"
              >
                <span className="text-cyan font-semibold text-sm uppercase tracking-wider">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
