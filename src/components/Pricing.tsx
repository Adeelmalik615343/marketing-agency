"use client";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Globe2,
  Megaphone,
  Sparkles,
} from "lucide-react";

const plans = [
  {
    name: "Launch",
    label: "For new businesses",
    price: "From $750",
    description:
      "A strong digital foundation for startups, small businesses, and new brands ready to establish a professional online presence.",
    icon: Sparkles,
    features: [
      "Strategy & project planning",
      "Premium responsive website",
      "Modern UI/UX implementation",
      "SEO-ready structure",
      "Analytics & tracking setup",
      "Deployment & launch support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    label: "Most popular",
    price: "From $1,500",
    description:
      "A complete digital growth package for businesses that need a stronger website, automation, and conversion-focused systems.",
    icon: Globe2,
    features: [
      "Everything in Launch",
      "Multi-page website",
      "Advanced frontend development",
      "Backend & API integration",
      "AI chatbot / business assistant",
      "Automation workflows",
      "Conversion optimization",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Scale",
    label: "For ambitious brands",
    price: "Custom",
    description:
      "Advanced digital systems for businesses that need custom applications, AI automation, advertising, and ongoing growth.",
    icon: Code2,
    features: [
      "Everything in Growth",
      "Custom web applications",
      "Advanced AI systems",
      "Python automation",
      "Marketing automation",
      "Meta & Google Ads support",
      "Advanced analytics",
      "Ongoing optimization",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-b border-white/10 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            <Sparkles size={14} />
            Investment
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Choose the right{" "}
            <span className="text-amber-300">growth stage.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Flexible packages for businesses at different stages. Every
            project can be customized around your goals, technology,
            integrations, and growth strategy.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.name}
                className={`group relative flex flex-col overflow-hidden rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                  plan.featured
                    ? "border-amber-400/40 bg-gradient-to-b from-amber-400/10 to-white/[0.03] shadow-[0_20px_80px_rgba(251,191,36,0.08)]"
                    : "border-white/10 bg-white/[0.035] hover:border-white/20"
                }`}
              >
                {/* Popular badge */}
                {plan.featured && (
                  <div className="absolute right-5 top-5 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-200">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    plan.featured
                      ? "bg-amber-400 text-slate-950"
                      : "bg-amber-400/10 text-amber-300"
                  }`}
                >
                  <Icon size={21} />
                </div>

                {/* Title */}
                <div className="mt-7">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    {plan.label}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {plan.name}
                  </h3>

                  <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-400">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-7 border-y border-white/10 py-6">
                  <p className="text-xs uppercase tracking-wider text-slate-600">
                    Starting investment
                  </p>

                  <div className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {plan.price}
                  </div>

                  {plan.name !== "Scale" && (
                    <p className="mt-2 text-xs text-slate-600">
                      Final quote depends on project scope.
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="mt-7 flex-1">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    What's included
                  </p>

                  <ul className="space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-amber-300"
                        />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-amber-400 text-slate-950 hover:bg-amber-300"
                      : "border border-white/10 bg-white/[0.04] text-white hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-200"
                  }`}
                >
                  {plan.name === "Scale"
                    ? "Discuss Your Project"
                    : "Start Your Project"}

                  <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>

        {/* Global pricing note */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <Globe2 className="text-amber-300" size={20} />

            <h4 className="mt-4 font-semibold text-white">
              Global clients
            </h4>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Serving businesses and startups across Pakistan, GCC, UK,
              USA, and international markets.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <Bot className="text-amber-300" size={20} />

            <h4 className="mt-4 font-semibold text-white">
              AI & automation
            </h4>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Custom AI assistants, chatbots, APIs, Python automation,
              workflows, and business integrations.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <Megaphone className="text-amber-300" size={20} />

            <h4 className="mt-4 font-semibold text-white">
              Growth services
            </h4>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              SEO, analytics, content systems, Meta Ads, Google Ads, and
              conversion-focused digital campaigns.
            </p>
          </div>
        </div>

        {/* Custom project CTA */}
        <div className="mt-10 rounded-[2rem] border border-amber-400/20 bg-gradient-to-r from-amber-400/[0.08] via-white/[0.025] to-transparent p-7 sm:p-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xl font-semibold text-white">
                Don't fit into a package?
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                No problem. We can build a custom solution around your
                business, whether you need a website, SaaS product,
                e-commerce platform, AI system, automation, or advertising
                campaign.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Get a Custom Quote
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        {/* Pricing disclaimer */}
        <p className="mt-6 text-center text-xs leading-6 text-slate-600">
          Prices shown are starting estimates. Final pricing depends on
          requirements, integrations, complexity, timeline, and ongoing
          support.
        </p>
      </div>
    </section>
  );
}
