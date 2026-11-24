"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight, Sparkles } from "lucide-react";
import { BIO } from "@/data";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICES_OPTIONS = [
  "Website Development",
  "AI Solutions",
  "SEO & Digital Visibility",
  "Digital Design",
  "Custom Software",
];

const BUDGET_OPTIONS = [
  "Under $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus("success");
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" padding="xl" className="bg-secondary">
      <Container maxWidth="7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                  {BIO.contactHeading}
                </h2>
              </div>
              <p className="text-lg text-muted leading-relaxed max-w-xl">
                {BIO.contactSubheading}
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "hello@borgtech.dev",
                  href: "mailto:hello@borgtech.dev",
                },
                {
                  icon: Phone,
                  title: "WhatsApp",
                  value: "WhatsApp",
                  href: "https://wa.me/",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Available for remote collaboration worldwide",
                },
              ].map((contact) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start gap-4 p-6 rounded-xl border border-border bg-surface/50 backdrop-blur-sm hover-lift-luxury"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/25">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {contact.title}
                      </h3>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-muted hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-muted">{contact.value}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="border-gold rounded-2xl border border-border p-8 lg:p-12 hover-lift-luxury">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {submitStatus === "success" ? (
                <div className="text-center py-10">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4 text-green-400">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent
                  </h3>
                  <p className="text-muted">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-white"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background/10 text-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background/10 text-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-white">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background/10 text-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-white">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background/10 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    >
                      <option value="">Select a service</option>
                      {SERVICES_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-white">
                      Estimated Budget (optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background/10 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    >
                      <option value="">Not specified</option>
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium text-white">
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background/10 text-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    variant="gold"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  {submitStatus === "error" && (
                    <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
                      Failed to send message. Please try again.
                    </div>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
