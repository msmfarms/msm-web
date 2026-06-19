import Image from "next/image";
import { ArrowRight, Sprout } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-msm-lime-light"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt="Lush green farm field at sunrise"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-24">
        <div className="lg:col-span-4">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-msm-green sm:text-5xl lg:text-[2.75rem]">
            Innovating Today, Nurturing Tomorrow.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-msm-gray sm:text-lg">
            Empowering farmers through technology. We build end-to-end
            agricultural solutions that connect tradition with innovation —
            helping communities grow sustainably.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-msm-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-msm-green-dark"
            >
              Our Services
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-msm-green bg-white px-6 py-3 text-sm font-semibold text-msm-green transition-colors hover:bg-msm-lime-light"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-4">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl shadow-2xl lg:max-w-none">
            <Image
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
              alt="Farmers using technology in the field"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-msm-border bg-white p-6 shadow-xl sm:p-8">
            <h2 className="text-xl font-bold text-msm-green">
              We are just getting started!
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-msm-gray">
              We&apos;re building solutions that bridge the gap between
              traditional farming wisdom and modern agri-tech. Join us on this
              journey to transform agriculture across India.
            </p>
            <div className="mt-6 rounded-xl bg-msm-lime-light p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-msm-lime/20">
                  <Sprout className="h-5 w-5 text-msm-green" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-msm-green">
                    Launching Soon
                  </p>
                  <p className="text-xs text-msm-gray">
                    Our first products are on the way
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
