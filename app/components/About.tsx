import { ArrowRight, Building2, Handshake, MapPin, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "0+",
    label: "Farmers Connected",
    description: "Growing our farmer network across regions",
  },
  {
    icon: Handshake,
    value: "0+",
    label: "Partners",
    description: "Building strategic agricultural partnerships",
  },
  {
    icon: Building2,
    value: "0+",
    label: "Companies",
    description: "Collaborating with industry leaders",
  },
  {
    icon: MapPin,
    value: "0+",
    label: "Locations",
    description: "Expanding reach across India",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-msm-green sm:text-4xl">
            About MSM Farming Solutions
          </h2>
          <p className="mt-6 text-base leading-relaxed text-msm-gray sm:text-lg">
            MSM Farming Solutions is an agri-tech company focused on delivering
            end-to-end solutions for farmers, partners, and businesses. From
            consultancy and marketing to manufacturing partnerships and technical
            support — we help agriculture thrive in the digital age.
          </p>
          <p className="mt-4 text-base leading-relaxed text-msm-gray">
            Our mission is to empower every farmer with the tools, knowledge,
            and connections they need to grow sustainably and profitably.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-msm-green px-6 py-3 text-sm font-semibold text-msm-green transition-colors hover:bg-msm-lime-light"
          >
            Know More About Us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-msm-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-msm-lime text-msm-green">
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="text-3xl font-bold text-msm-green">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {stat.label}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-msm-gray">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
