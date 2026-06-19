"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Vision", href: "#vision" },
  { label: "Products", href: "#services" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "About Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-msm-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home">
          <Logo />
        </a>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-msm-green ${
                link.label === "Home"
                  ? "text-msm-green underline decoration-msm-lime decoration-2 underline-offset-8"
                  : "text-foreground/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-msm-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-msm-green-dark lg:inline-flex"
          >
            Get In Touch
          </a>

          <button
            type="button"
            className="rounded-lg p-2 text-msm-green lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-msm-border bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-msm-green"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-msm-green px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
