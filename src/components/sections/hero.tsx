"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Terminal, ArrowRight } from "lucide-react";
import { BIO } from "@/data";
import { Button } from "@/components/ui/button";

const variants = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="ambient-light">
        <div className="ambient-blob ambient-blob-1" />
        <div className="ambient-blob ambient-blob-2" />
        <div className="ambient-blob ambient-blob-3" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-secondary z-0" />

      <div className="relative z-10 w-full px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div
            className="lg:col-span-7 space-y-8"
            motion="div"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={variants.container}
          >
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-12 bg-primary" />
              <span className="text-xs font-medium tracking-widest text-cyan uppercase">
                INDEPENDENT DEVELOPER &amp; TECHNOLOGY BUILDER
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white tracking-tight">
                Turning Ideas Into{" "}
                <br />
                <span className="text-gradient">Exceptional Digital Experiences.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg lg:text-xl text-muted leading-relaxed max-w-xl">
                {BIO.subheadline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link href="/projects">
                    Explore My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/contact">Let's Collaborate</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <div
            className="lg:col-span-5 flex items-center justify-center"
            motion="div"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1, transition: { duration: 0.8 } } }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
              <div className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur-md p-1">
                <div className="rounded-xl border border-border bg-secondary p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="h-10 w-10 rounded-full border-2 border-background bg-surface"
                          />
                        ))}
                      </div>
                      <div className="ml-3 text-sm font-medium text-white">
                        Code Explorer
                      </div>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="h-3 w-3/4 bg-surface/50 rounded" />
                        <div className="h-3 w-1/2 bg-surface/50 rounded" />
                        <div className="h-3 w-3/4 bg-surface/50 rounded" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-surface/50 rounded" />
                        <div className="h-3 w-2/3 bg-surface/50 rounded" />
                        <div className="h-3 w-full bg-surface/50 rounded" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-2/3 bg-surface/50 rounded" />
                        <div className="h-3 w-full bg-surface/50 rounded" />
                        <div className="h-3 w-1/2 bg-surface/50 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 text-muted" />
      </div>
    </section>
  );
}
