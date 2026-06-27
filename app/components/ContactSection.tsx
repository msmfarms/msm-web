"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import Toast from "./Toast";
import { submitContact } from "../lib/api";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+91 98848 46931", href: "tel:+919884846931" },
  { icon: Mail, label: "Email", value: "info@msmfarmingsolutions.com", href: "mailto:info@msmfarmingsolutions.com" },
  { icon: MapPin, label: "Location", value: "Madanapalle, Annamayya Dist, Andhra Pradesh, India", href: null },
  { icon: Phone, label: "WhatsApp", value: "+91 98848 46931", href: "https://wa.me/919884846931" },
];

export default function ContactSection() {
  const [toastOpen, setToastOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1b5e3b] sm:text-4xl">Contact Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#6b7280]">Have questions or want to partner with us? Reach out — we&apos;d love to hear from you.</p>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8f5e3] text-[#1b5e3b]"><item.icon className="h-5 w-5" /></div>
                <div className="min-w-0 pt-1">
                  <p className="text-sm font-semibold text-[#1a2e1f]">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block text-sm text-[#6b7280] transition-colors hover:text-[#1b5e3b]">{item.value}</a>
                  ) : (
                    <p className="mt-1 text-sm text-[#6b7280]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            className="rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-6 sm:p-8"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              setIsSubmitting(true);
              const formData = {
                name: (form.elements.namedItem("name") as HTMLInputElement).value,
                email: (form.elements.namedItem("email") as HTMLInputElement).value,
                message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
              };
              console.log("Submitting contact form:", formData);
              try {
                const result = await submitContact(formData);
                console.log("Contact form submission result:", result);
                setToastOpen(true);
                form.reset();
              } catch (error) {
                console.error("Failed to submit contact form:", error);
                alert("Failed to send message. Please try again or contact us directly.");
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            <h3 className="text-lg font-bold text-[#1a2e1f]">Send us a message</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#1a2e1f]">Name</label>
                <input id="name" type="text" placeholder="Your name" className="w-full rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm text-[#1a2e1f] placeholder:text-[#9ca3af] focus:border-[#1b5e3b] focus:outline-none focus:ring-1 focus:ring-[#1b5e3b]" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#1a2e1f]">Email</label>
                <input id="email" type="email" placeholder="your@email.com" className="w-full rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm text-[#1a2e1f] placeholder:text-[#9ca3af] focus:border-[#1b5e3b] focus:outline-none focus:ring-1 focus:ring-[#1b5e3b]" />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#1a2e1f]">Message</label>
              <textarea id="message" rows={4} placeholder="How can we help you?" className="w-full resize-none rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm text-[#1a2e1f] placeholder:text-[#9ca3af] focus:border-[#1b5e3b] focus:outline-none focus:ring-1 focus:ring-[#1b5e3b]" />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1b5e3b] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f3d26] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send className="h-4 w-4" />}
            </button>

            <Toast open={toastOpen} message="Message sent successfully!" onClose={() => setToastOpen(false)} />
          </form>
        </div>
      </div>
    </section>
  );
}
