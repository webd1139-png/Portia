"use client";

import { motion } from "framer-motion";
import { BIO } from "@/data";
import { Section, Container } from "@/components/ui/section";

export default function Testimonials() {
  return (
    <Section id="testimonials" padding="xl" className="bg-secondary">
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-20"
        >
          <div className="w-16 h-16 rounded-full border-2 border-primary/50 flex items-center justify-center mx-auto mb-8 text-primary">
            <span className="text-2xl">"</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight text-white mb-6">
            {BIO.fallbackMessage}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Real project evidence speaks louder than fabricated testimonials.
            Explore the project showcase to see actual work.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
