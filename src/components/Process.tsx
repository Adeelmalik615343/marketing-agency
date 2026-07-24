import { ArrowRight, MonitorPlay, Rocket, Search, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Discover",
    description: "We map your audience, goals, and market opportunity with clarity.",
    icon: Search,
  },
  {
    title: "Design",
    description: "We shape the experience around conversion, motion, and premium feel.",
    icon: MonitorPlay,
  },
  {
    title: "Launch",
    description: "We build, test, and release with precision so your brand can grow fast.",
    icon: Rocket,
  },
  {
    title: "Optimize",
    description: "We keep improving performance, messaging, and user experience over time.",
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Process</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A simple process that keeps momentum high.</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                  <Icon size={20} />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <span className="text-sm text-slate-400">0{index + 1}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200">
          Tailored for fast-moving companies
          <ArrowRight size={16} />
        </div>
      </div>
    </section>
  );
}
