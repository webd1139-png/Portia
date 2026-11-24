"use client";

import { motion } from "framer-motion";
import { BIO } from "@/data";
import { Section, Container } from "@/components/ui/section";

export default function Process() {
  return (
    <Section id="process" padding="xl" className="bg-secondary">
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            {BIO.processHeading}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            A disciplined approach to building digital experiences.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent mx-auto" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {BIO.processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center gap-4 hover-lift-luxury"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-gold bg-gradient-to-br from-primary to-cyan flex items-center justify-center text-white text-xl font-mono font-bold shadow-lg shadow-gold/25 hover:shadow-gold/40 transition-all duration-500 group-hover:scale-110">
                    {step.step}
                  </div>
                  <div className="absolute inset-0 rounded-full border border-gold/30 blur-xl" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
