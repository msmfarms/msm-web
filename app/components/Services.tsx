import { Factory, Headphones, Leaf, Megaphone, Sprout } from "lucide-react";

const services = [
  {
    icon: Sprout,
    title: "Agricultural Consultancy",
    description:
      "Expert guidance on crop planning, soil health, and sustainable farming practices tailored to your land.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description:
      "Connect your produce to the right markets with branding, distribution strategies, and buyer networks.",
  },
  {
    icon: Factory,
    title: "Manufacturing Partnerships",
    description:
      "Bridge the gap between farm output and value-added products through trusted manufacturing alliances.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "On-demand technical assistance for farm equipment, agri-tech tools, and digital platform adoption.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-msm-gray-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-msm-green sm:text-4xl">
            Our Services
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-msm-lime" />
            <Leaf className="h-5 w-5 text-msm-lime" />
            <div className="h-px w-12 bg-msm-lime" />
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-msm-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-msm-lime-light text-msm-green">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-msm-gray">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
