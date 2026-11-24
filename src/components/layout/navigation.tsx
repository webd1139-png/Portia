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
      <div className="border-y border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-primary/25">
                BO
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                BORNGREAT.
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isActive ? "text-cyan" : "text-muted hover:text-white",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="/contact"
                className="px-5 py-2 rounded-full border border-border text-sm font-medium text-white hover:bg-surface transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Start a Project
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="md:hidden p-2 text-muted hover:text-white"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-y border-border bg-background/90 backdrop-blur-md px-4 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-lg font-medium text-muted hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/contact"
              className="block px-5 py-3 rounded-full border border-border text-lg font-medium text-white hover:bg-surface transition-colors"
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
