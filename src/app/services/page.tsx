import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    slug: "web-development",
    title: "Web & App Development",
    description:
      "Custom websites, business apps, landing pages, portals, and SaaS solutions built for performance, usability, and lead generation.",
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots & AI Systems",
    description:
      "AI-powered customer support, lead qualification bots, workflow automation, and internal knowledge systems that save time and improve response quality.",
  },
  {
    slug: "python-automation",
    title: "Python Automation",
    description:
      "Custom Python workflows that automate reporting, scraping, content publishing, CRM tasks, integrations, and repetitive business operations.",
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    description:
      "Conversion-focused e-commerce websites and storefronts designed to drive sales, streamline checkout, and support growth.",
  },
  {
    slug: "seo-organic-growth",
    title: "SEO & Organic Growth",
    description:
      "Technical SEO audits, content strategy, on-page optimization, internal linking, and search visibility improvements for long-term growth.",
  },
  {
    slug: "paid-ads-growth",
    title: "Paid Ads & Lead Generation",
    description:
      "Strategic paid media campaigns and landing pages that turn ad spend into measurable leads, sales, and customer acquisition.",
  },
  {
    slug: "backend-api-systems",
    title: "Backend & API Systems",
    description:
      "Secure APIs, admin dashboards, database architecture, payment integrations, and custom backend systems for scalable digital operations.",
  },
];

export const metadata: Metadata = {
  title: "Digital Services | Web Development, SEO, AI, and Growth Systems",
  description:
    "Explore our digital services covering web development, AI chatbots, automation, e-commerce, SEO, ads, and backend systems for business growth.",
};

export default function ServicesOverviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Our services
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Digital solutions built to grow modern businesses.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We design, build, automate, and optimize online systems that help businesses grow faster and operate more efficiently.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 transition hover:border-amber-400/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Service
                </span>
                <CheckCircle2 className="h-5 w-5 text-amber-300" />
              </div>

              <h2 className="mt-5 text-2xl font-semibold text-white">
                {service.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-amber-200"
              >
                Learn more
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
