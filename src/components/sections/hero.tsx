"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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
          <motion.div
            className="lg:col-span-7 space-y-8"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-8xl font-bold leading-tight text-white tracking-tighter">
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
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link href="/projects">
                    <Sparkles className="ml-2 h-4 w-4" />
                    Explore My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="goldOutline" size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/contact">Let's Collaborate</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-6 flex items-center justify-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1, transition: { duration: 0.8 } } }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-cyan/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative z-10 portrait-frame">
                <div className="portrait-frame-inner">
                  <div className="portrait-glow" />
                  <Image
                    src="/portrait.jpg"
                    alt="Borngreat Opoku"
                    className="w-full h-auto block"
                    width={600}
                    height={600}
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 glass-panel-luxury px-6 py-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">BORNGREAT OPOKU</h3>
                    <p className="text-xs text-muted">BorgTech Founder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 text-muted" />
      </div>
    </section>
  );
}
