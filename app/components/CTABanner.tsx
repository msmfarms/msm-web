import { ArrowRight, Sprout } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-[#1b5e3b] py-12 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:gap-8 lg:px-8">
        <div className="flex items-start gap-4 text-center lg:text-left">
          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-msm-lime/20 sm:flex">
            <Sprout className="h-6 w-6 text-msm-lime" />
          </div>
          <div>
            <p className="text-xl font-bold text-white sm:text-2xl">
              Let&apos;s build the future of agriculture – together.
            </p>
            <p className="mt-2 text-sm text-white/80">
              Connect with us and be a part of our journey.
            </p>
          </div>
        </div>
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-msm-lime px-6 py-3 text-sm font-semibold text-msm-green-dark transition-colors hover:bg-white"
        >
          Get In Touch
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
