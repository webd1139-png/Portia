"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SKILLS } from "@/data";
import { Section, Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

const LEVEL_LABELS: Record<string, string> = {
  comfortable: "Comfortable Using",
  developing: "Currently Developing",
  exploring: "Exploring",
};

import { Code2, Layers, Laptop, Brain } from "lucide-react";

const LEVEL_COLORS: Record<string, string> = {
  comfortable: "bg-primary/10 text-primary border-primary/20 shadow-sm shadow-primary/10",
  developing: "bg-cyan/10 text-cyan border-cyan/20 shadow-sm shadow-cyan/10",
  exploring: "bg-surface/40 text-muted border-border shadow-sm shadow-black/20",
};

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  frontend: Laptop,
  backend: Layers,
  tools: Code2,
  ai: Brain,
};

export default function Skills() {
  const byCategory = SKILLS.reduce(
    (acc, skill) => {
      acc[skill.category].push(skill);
      return acc;
    },
    { frontend: [], backend: [], tools: [], ai: [] },
  );

  const CATEGORY_LABELS: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools",
    ai: "AI",
  };

  return (
    <Section id="expertise" padding="xl" className="bg-secondary">
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            Skills &amp; Tech Stack
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Technologies organized by proficiency level.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(byCategory).map(([category, skills]) => {
            const IconComponent = CATEGORY_ICONS[category];
            const comfortable = skills.filter((s) => s.level === "comfortable");
            const developing = skills.filter((s) => s.level === "developing");
            const exploring = skills.filter((s) => s.level === "exploring");

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{CATEGORY_LABELS[category]}</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { level: "comfortable", items: comfortable },
                    { level: "developing", items: developing },
                    { level: "exploring", items: exploring },
                  ].map((group) => (
                    <div
                      key={group.level}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                          {LEVEL_LABELS[group.level]}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {group.items.length}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <span
                            key={skill.name}
                            className={cn(
                              "px-3 py-1.5 rounded-full text-xs font-medium border transition-all hover:scale-105",
                              LEVEL_COLORS[group.level],
                            )}
                          >
                            {skill.name}
                          </span>
                        ))}
                        {group.items.length === 0 && (
                          <span className="px-3 py-1.5 rounded-full text-xs text-muted">
                            None listed
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 border-t border-border pt-12 text-center">
          <p className="text-muted max-w-2xl mx-auto">
            Proficiency is self-assessed and reflects practical project
            experience. I'm continuously expanding my technical capabilities.
          </p>
        </div>
      </Container>
    </Section>
  );
}
