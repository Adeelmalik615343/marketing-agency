import { ArrowRight, Brain, Palette, Rocket, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Brand Strategy",
    description:
      "Positioning, messaging, and growth narratives crafted to sharpen your market edge.",
    icon: Brain,
  },
  {
    title: "Visual Systems",
    description:
      "Identity, web design, and product experiences that feel cohesive, premium, and modern.",
    icon: Palette,
  },
  {
    title: "Launch Campaigns",
    description:
      "Go-to-market execution with high-converting flows, storytelling, and performance focus.",
    icon: Rocket,
  },
  {
    title: "Reliability & Growth",
    description:
      "We build durable systems and optimize every layer to support long-term momentum.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Strategy and execution built for ambitious brands.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Each engagement is designed to deliver both immediate momentum and long-term value.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-amber-400/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                  <Icon size={22} />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <span className="text-sm text-slate-400">0{index + 1}</span>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-300">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-200 transition group-hover:text-amber-100"
                >
                  Discover More
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
