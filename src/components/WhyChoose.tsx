"use client";

import {
  Bot,
  CheckCircle2,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const points = [
  {
    number: "01",
    title: "Technology that fits the business",
    description:
      "We choose the right stack for the problem instead of forcing every project into the same solution. From Next.js and MERN to Shopify, WordPress, APIs, and custom systems.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "AI where it actually helps",
    description:
      "AI isn't added just because it's trending. We identify useful opportunities for chatbots, assistants, content systems, customer support, and business automation.",
    icon: Bot,
  },
  {
    number: "03",
    title: "Automation that saves time",
    description:
      "We connect tools and build Python-powered workflows that reduce repetitive work, move data between systems, and create more efficient business processes.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Built for performance",
    description:
      "Fast-loading interfaces, responsive experiences, clean architecture, and scalable foundations help your digital product perform across devices.",
    icon: Gauge,
  },
  {
    number: "05",
    title: "Growth beyond the website",
    description:
      "Your website is only one part of the system. We can connect SEO, content, analytics, advertising, funnels, automation, and lead generation around it.",
    icon: Sparkles,
  },
  {
    number: "06",
    title: "Secure and maintainable",
    description:
      "Authentication, APIs, databases, payments, deployment, and integrations are designed with reliability and long-term maintenance in mind.",
    icon: ShieldCheck,
  },
];

export default function WhyChoose() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/10 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              <Zap size={14} />
              Why work with us
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              More than a website.
              <span className="block text-amber-300">
                A complete digital system.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              We combine development, AI, automation, marketing, and
              growth thinking to create digital systems that are useful
              today and ready to evolve tomorrow.
            </p>
          </div>
        </div>

        {/* Main feature area */}
        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {/* Main statement */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-400/[0.08] via-white/[0.03] to-transparent p-7 sm:p-9 lg:col-span-5">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                <CheckCircle2 size={22} />
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                One partner for your digital growth.
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Instead of managing separate developers, automation
                specialists, marketers, and platform experts, you can
                build the core of your digital operation with one
                connected team.
              </p>

              {/* Capabilities */}
              <div className="mt-8 space-y-3">
                {[
                  "Development & infrastructure",
                  "AI & business automation",
                  "SEO & content systems",
                  "Advertising & lead generation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                      <CheckCircle2 size={13} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {points.map((point) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/20 hover:bg-white/[0.055]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-amber-300 transition group-hover:border-amber-400/20 group-hover:bg-amber-400/10">
                      <Icon size={19} />
                    </div>

                    <span className="font-mono text-xs text-slate-600">
                      {point.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {point.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {point.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="mt-5 grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] sm:grid-cols-3">
          <TrustItem
            title="Modern Stack"
            text="Built with current technologies"
          />

          <TrustItem
            title="Business Focus"
            text="Technology tied to outcomes"
          />

          <TrustItem
            title="Long-Term Thinking"
            text="Systems designed to evolve"
          />
        </div>
      </div>
    </section>
  );
}

function TrustItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-white/10 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
        <CheckCircle2 size={17} />
      </div>

      <div>
        <p className="text-sm font-medium text-white">{title}</p>

        <p className="mt-1 text-xs text-slate-500">{text}</p>
      </div>
    </div>
  );
}
