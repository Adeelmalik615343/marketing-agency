"use client";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Megaphone,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    label: "Strategy & Requirements",
    description:
      "We understand your business, audience, goals, existing systems, and the opportunity before recommending a solution.",
    icon: Search,
    deliverables: ["Goals & requirements", "Technical direction", "Growth opportunities"],
  },
  {
    number: "02",
    title: "Plan",
    label: "Architecture & Roadmap",
    description:
      "We turn the requirements into a practical roadmap covering technology, features, content, integrations, and launch priorities.",
    icon: Settings2,
    deliverables: ["Project roadmap", "System architecture", "Feature priorities"],
  },
  {
    number: "03",
    title: "Build",
    label: "Development & Automation",
    description:
      "We design and build the experience, backend, integrations, AI systems, automation, and marketing infrastructure your project needs.",
    icon: Code2,
    deliverables: ["Website / application", "APIs & integrations", "AI & automation"],
  },
  {
    number: "04",
    title: "Launch",
    label: "Growth & Optimization",
    description:
      "After testing and deployment, we connect analytics, SEO, content, advertising, and ongoing optimization to help the system grow.",
    icon: Megaphone,
    deliverables: ["Deployment", "Analytics & tracking", "Growth strategy"],
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-b border-white/10 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-[15%] top-20 h-72 w-72 rounded-full bg-amber-400/5 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-[10%] h-80 w-80 rounded-full bg-blue-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              <Sparkles size={14} />
              Our process
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              From idea to{" "}
              <span className="text-amber-300">working system.</span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:ml-auto">
            A straightforward process designed to keep projects clear,
            practical, and moving forward — from the first conversation
            through launch and ongoing growth.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative mt-16">
          {/* Desktop connecting line */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative flex flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/20 hover:bg-white/[0.055] sm:p-7"
                >
                  {/* Step indicator */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-amber-300 shadow-lg transition group-hover:border-amber-400/30 group-hover:bg-amber-400/10">
                      <Icon size={22} />
                    </div>

                    <span className="font-mono text-xs tracking-widest text-slate-600">
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="mt-7">
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-amber-300/70">
                      {step.label}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="mt-7 border-t border-white/10 pt-5">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-600">
                      What happens
                    </p>

                    <div className="space-y-2.5">
                      {step.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs text-slate-400"
                        >
                          <CheckCircle2
                            size={14}
                            className="shrink-0 text-emerald-400/80"
                          />

                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-amber-400/50 transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-6 rounded-[1.75rem] border border-white/10 bg-gradient-to-r from-white/[0.035] to-amber-400/[0.035] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300 sm:flex">
              <Bot size={20} />
            </div>

            <div>
              <p className="font-semibold text-white">
                Have a project in mind?
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Tell us what you're trying to build and we'll help map out
                the right technology and growth approach.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Start a Conversation
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
