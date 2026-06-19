import {
  ArrowRight,
  BarChart3,
  Leaf,
  Package,
  Shield,
  ShoppingCart,
} from "lucide-react";

const innovations = [
  {
    icon: Shield,
    title: "MSM Farm Shield",
    description:
      "Crop protection and risk management platform to safeguard farmer investments.",
    status: "Coming Soon",
    statusColor: "bg-msm-lime-light text-msm-green",
  },
  {
    icon: BarChart3,
    title: "MSM Agri Intelligence Platform",
    description:
      "Data-driven insights for smarter crop decisions, yield forecasting, and market trends.",
    status: "Coming Soon",
    statusColor: "bg-msm-lime-light text-msm-green",
  },
  {
    icon: Package,
    title: "MSM Smart Feed Advisor",
    description:
      "AI-powered livestock nutrition recommendations for healthier herds and better yields.",
    status: "Coming Soon",
    statusColor: "bg-msm-lime-light text-msm-green",
  },
  {
    icon: ShoppingCart,
    title: "MSM Market Connect",
    description:
      "Direct marketplace connecting farmers to buyers, eliminating middlemen and boosting profits.",
    status: "Coming Soon",
    statusColor: "bg-msm-lime-light text-msm-green",
  },
];

export default function Innovations() {
  return (
    <section id="innovations" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-msm-green sm:text-4xl">
            Our Upcoming Innovations
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-msm-lime" />
            <Leaf className="h-5 w-5 text-msm-lime" />
            <div className="h-px w-12 bg-msm-lime" />
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {innovations.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-msm-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-msm-lime-light text-msm-green">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-msm-gray">
                {item.description}
              </p>
              <span
                className={`mt-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${item.statusColor}`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>

        <div id="roadmap" className="mt-12 text-center">
          <a
            href="#roadmap"
            className="inline-flex items-center gap-2 text-sm font-semibold text-msm-green transition-colors hover:text-msm-green-dark"
          >
            View Our Roadmap
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
