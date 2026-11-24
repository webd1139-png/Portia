"use client";

import Link from "next/link";
import { Mail, Github, Linkedin, X } from "lucide-react";
import { SOCIAL_LINKS } from "@/data";
import { cn } from "@/lib/utils";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  X,
  Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-primary/25">
              BO
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              BORNGREAT.
            </span>
          </div>
          <p className="text-sm text-muted">
            BorgTech &copy; {new Date().getFullYear()}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon] || Mail;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
