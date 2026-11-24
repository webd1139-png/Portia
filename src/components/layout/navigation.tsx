"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/data";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300">
                <span className="text-xs font-bold text-white tracking-tighter">BO</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                BORNGREAT.
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-all duration-300",
                      isActive
                        ? "text-primary"
                        : "text-muted hover:text-white",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="/contact"
                className="px-6 py-2.5 rounded-full border border-gold bg-gradient-to-r from-primary to-cyan text-xs font-bold text-white hover:shadow-lg hover:shadow-gold/40 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Start a Project
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="md:hidden p-2.5 text-muted hover:text-white rounded-lg hover:bg-surface/50 transition-colors"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-b border-border bg-background/90 backdrop-blur-md px-4 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-lg font-medium text-muted hover:text-white transition-colors px-4 py-3 rounded-xl hover:bg-surface/30"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/contact"
              className="block w-full text-center px-5 py-3 rounded-full border border-gold bg-gradient-to-r from-primary to-cyan text-xs font-bold text-white hover:shadow-lg hover:shadow-gold/40 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Start a Project
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
