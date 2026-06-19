import { Check, Clock, Leaf } from "lucide-react";

const roadmapItems = [
  {
    year: "2026",
    milestone: "MSM Farming Solutions Founded",
    status: "completed",
  },
  {
    year: "2026",
    milestone: "Website Launch",
    status: "completed",
  },
  {
    year: "2026",
    milestone: "MSM Farm Shield Prototype",
    status: "in-progress",
  },
  {
    year: "2027",
    milestone: "Pilot Farmers Program",
    status: "upcoming",
  },
  {
    year: "2027",
    milestone: "Commercial Launch",
    status: "upcoming",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-msm-gray-light py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-msm-green sm:text-4xl">
            Our Journey
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-msm-lime" />
            <Leaf className="h-5 w-5 text-msm-lime" />
            <div className="h-px w-12 bg-msm-lime" />
          </div>
        </div>

        <div className="mt-14 space-y-4">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg border-l-4 border-msm-lime bg-white p-6"
            >
              <div className="flex shrink-0 items-center justify-center">
                {item.status === "completed" && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-msm-lime text-white">
                    <Check className="h-5 w-5" />
                  </div>
                )}
                {item.status === "in-progress" && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-msm-green text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                )}
                {item.status === "upcoming" && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-msm-green bg-white text-msm-green">
                    <span className="text-xs font-bold">⏳</span>
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-msm-green">
                  {item.year}
                </p>
                <p className="mt-1 text-base font-semibold text-foreground">
                  {item.milestone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
