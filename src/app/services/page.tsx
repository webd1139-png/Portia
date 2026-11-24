import { SERVICES } from "@/data";
import { Section, Container } from "@/components/ui/section";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = {
  title: "Services",
  description: "Services offered by Borngreat Opoku - website development, AI solutions, SEO, digital design, and custom software.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
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
                <div className="p-8 rounded-xl border border-border bg-surface/50 backdrop-blur-sm hover-lift h-full">
                  <div className="w-12 h-12 rounded-xl bg-surface p-3 mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="text-primary group-hover:text-white">
                      {service.color === "text-primary" ? "💻" : service.color === "text-cyan" ? "🤖" : "🎨"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.ctaHref}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-cyan transition-colors"
                  >
                    {service.ctaLabel}
                    <span className="h-3 w-3 rotate-45 group-hover:translate-x-1 transition-transform border-b border-primary pb-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
