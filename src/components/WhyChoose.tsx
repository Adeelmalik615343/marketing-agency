import { BadgeCheck, Compass, Sparkles, Zap } from "lucide-react";

const points = [
  {
    title: "Fast, focused execution",
    description: "We ship quickly without sacrificing quality, clarity, or detail.",
    icon: Zap,
  },
  {
    title: "Strategy-first thinking",
    description: "Every design decision is tied to user behavior and business outcomes.",
    icon: Compass,
  },
  {
    title: "Premium polish",
    description: "From motion to spacing, every touchpoint feels refined and deliberate.",
    icon: Sparkles,
  },
  {
    title: "Trusted delivery",
    description: "Reliable communication, clear milestones, and measurable results from day one.",
    icon: BadgeCheck,
  },
];

export default function WhyChoose() {
  return (
    <section id="about" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Why Choose Us</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Built for founders who want a sharp digital presence without the usual friction.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              We blend strategy, design, and product thinking into a seamless experience that helps your brand stand out and convert.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
