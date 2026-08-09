"use client";

import {
  ArrowRight,
  Bot,
  Code2,
  Database,
  Megaphone,
  Search,
  ShoppingBag,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web & App Development",
    shortTitle: "Web Development",
    description:
      "High-performance business websites, web apps, dashboards, landing pages, and custom digital platforms built for speed, usability, and growth.",
    icon: Code2,
    technologies: "Next.js • React • MERN • JavaScript",
  },
  {
    number: "02",
    title: "AI Chatbots & AI Systems",
    shortTitle: "AI Solutions",
    description:
      "AI-powered chatbots, customer assistants, knowledge systems, and API integrations that help businesses automate conversations and support.",
    icon: Bot,
    technologies: "AI APIs • Chatbots • APIs • LLM Systems",
  },
  {
    number: "03",
    title: "Python Automation",
    shortTitle: "Automation",
    description:
      "Automate repetitive business workflows, data processing, content pipelines, reporting, publishing, and integrations with custom Python systems.",
    icon: Workflow,
    technologies: "Python • APIs • Automation • Web Scraping",
  },
  {
    number: "04",
    title: "E-commerce Development",
    shortTitle: "E-commerce",
    description:
      "Conversion-focused online stores with product management, payments, custom functionality, integrations, and scalable commerce experiences.",
    icon: ShoppingBag,
    technologies: "Shopify • WooCommerce • Stripe • Custom Stores",
  },
  {
    number: "05",
    title: "SEO & Organic Growth",
    shortTitle: "SEO",
    description:
      "Technical SEO, structured content, landing pages, blogs, internal linking, and content systems designed to build sustainable organic visibility.",
    icon: Search,
    technologies: "Technical SEO • Content • Analytics • Search",
  },
  {
    number: "06",
    title: "Paid Ads & Lead Generation",
    shortTitle: "Paid Growth",
    description:
      "Conversion-focused advertising systems that connect campaigns, landing pages, tracking, and lead funnels to turn traffic into business opportunities.",
    icon: Megaphone,
    technologies: "Meta Ads • Google Ads • Funnels • Analytics",
  },
  {
    number: "07",
    title: "Backend & API Systems",
    shortTitle: "Backend Systems",
    description:
      "Secure backend systems, REST APIs, authentication, databases, admin panels, payment integrations, and business logic for modern applications.",
    icon: Database,
    technologies: "Node.js • Express • MongoDB • APIs",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-white/10 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-amber-400/5 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            What we build
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Digital services built around{" "}
            <span className="text-amber-300">real business goals.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            From your first website to AI-powered automation and complete
            growth systems, we combine development, technology, marketing,
            and automation to build digital infrastructure that works for
            your business.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-400/25 hover:bg-white/[0.055] hover:shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-amber-300/70">
                    {service.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-amber-300 transition group-hover:border-amber-400/20 group-hover:bg-amber-400/10">
                    <Icon size={21} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                    {service.shortTitle}
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>
                </div>

                {/* Technology */}
                <div className="mt-auto pt-7">
                  <div className="border-t border-white/10 pt-5">
                    <p className="text-xs leading-5 text-slate-500">
                      {service.technologies}
                    </p>

                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition group-hover:text-amber-200"
                    >
                      Discuss this service
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-amber-400/5 blur-3xl transition group-hover:bg-amber-400/10" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-lg font-semibold text-white">
              Need something custom?
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              We can combine development, AI, automation, APIs, SEO, and
              advertising into one complete digital system.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Tell Us What You Need
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
