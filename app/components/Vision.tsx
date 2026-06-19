import { Leaf } from "lucide-react";

export default function Vision() {
  return (
    <section id="vision" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-msm-green sm:text-4xl">
            Our Vision
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-msm-lime" />
            <Leaf className="h-5 w-5 text-msm-lime" />
            <div className="h-px w-12 bg-msm-lime" />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-2xl border-2 border-msm-lime-light bg-msm-lime-light p-8 sm:p-10">
            <p className="text-center text-base text-msm-green sm:text-lg leading-relaxed">
              To become India's most trusted agriculture innovation company by 
              combining traditional farming knowledge with modern technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
