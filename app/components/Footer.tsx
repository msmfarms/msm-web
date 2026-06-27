"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { useState } from "react";
import Toast from "./Toast";
import { subscribeNewsletter } from "../lib/api";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Innovations", href: "#innovations" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact Us", href: "#contact" },
];

const serviceLinks = [
  "Agricultural Consultancy",
  "Marketing Support",
  "Manufacturing Partnerships",
  "Technical Support",
];

const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

const contactItems = [
  {
    icon: Phone,
    text: "+91 98848 46931",
    href: "tel:+919884846931",
  },
  {
    icon: Mail,
    text: "info@msmfarmingsolutions.com",
    href: "mailto:info@msmfarmingsolutions.com",
  },
  {
    icon: MapPin,
    text: "Madanapalle, Annamayya Dist, Andhra Pradesh, India",
    href: null,
  },
];

export default function Footer() {
  const [toastOpen, setToastOpen] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  return (
    <footer className="bg-[#0d1f14] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-8">
          <div className="sm:col-span-2 lg:col-span-3">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Empowering farmers through technology. Building the future of
              sustainable agriculture across India.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-[#6bbf59] hover:text-[#6bbf59]"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#6bbf59]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-3 lg:pr-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              {contactItems.map((item) => (
                <li key={item.text} className="min-w-0">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-start gap-3 text-left text-sm text-white/60 transition-colors hover:text-[#6bbf59]"
                    >
                      <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#6bbf59]" />
                      <span className="min-w-0 break-words">{item.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-left text-sm text-white/60">
                      <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#6bbf59]" />
                      <span className="min-w-0 break-words">{item.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 sm:col-span-2 lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-white/70">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form
              className="mt-6 flex w-full gap-3"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                setIsSubscribing(true);
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                console.log("Submitting newsletter subscription:", email);
                try {
                  const result = await subscribeNewsletter({ email });
                  console.log("Newsletter subscription result:", result);
                  setToastOpen(true);
                  form.reset();
                } catch (error) {
                  console.error("Failed to subscribe to newsletter:", error);
                  alert("Failed to subscribe. Please try again.");
                } finally {
                  setIsSubscribing(false);
                }
              }}
            >
              <input
                id="email"
                type="email"
                placeholder="Your email"
                required
                disabled={isSubscribing}
                className="min-w-0 flex-1 rounded-lg border-2 border-white/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 transition-colors focus:border-[#6bbf59] focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6bbf59] text-[#0f3d26] transition-colors hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Subscribe"
              >
                {isSubscribing ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#0f3d26] border-t-transparent" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </button>
            </form>
            <Toast
              open={toastOpen}
              message="Successfully subscribed to newsletter!"
              onClose={() => setToastOpen(false)}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} MSM Farming Solutions. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="text-sm text-white/50 transition-colors hover:text-[#6bbf59]"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="text-sm text-white/50 transition-colors hover:text-[#6bbf59]"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
