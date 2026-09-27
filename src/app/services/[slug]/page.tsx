import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

const services = [
  {
    slug: "web-development",
    name: "Web & App Development",
    tagline: "Custom websites and web apps designed to look premium and convert visitors into customers.",
    heroDescription:
      "We build custom business websites, landing pages, SaaS interfaces, dashboards, and web platforms that balance design, speed, scalability, and conversion-focused performance.",
    summary:
      "From product showcases to full business systems, our web development service focuses on clean user experience, responsive design, technical performance, and growth-friendly architecture.",
    deliverables: [
      "Business websites and portfolio pages",
      "Landing pages designed for lead generation",
      "Custom dashboards and web apps",
      "Responsive UI/UX built for mobile and desktop",
      "SEO-ready structure and performance optimization",
    ],
    faqs: [
      {
        question: "What is included in your web development service?",
        answer:
          "Our web development service includes strategy, wireframes, design direction, frontend development, backend integration, data structure, deployment, and optional SEO improvements.",
      },
      {
        question: "Do you build custom business websites or standard pages?",
        answer:
          "We build both. Whether you need a fully custom web platform or a polished business website, we tailor the architecture and design to your brand and goals.",
      },
      {
        question: "Can you improve an existing website instead of building from scratch?",
        answer:
          "Yes. We can redesign, rebuild, optimize speed, improve SEO, add features, and modernize your current site for better performance and conversion rates.",
      },
    ],
    relatedLinks: [
      { label: "SEO & Organic Growth", href: "/services/seo-organic-growth" },
      { label: "Backend & API Systems", href: "/services/backend-api-systems" },
      { label: "Full-Stack E-commerce Case Study", href: "/case-studies/full-project" },
    ],
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots & AI Systems",
    tagline: "Smart automation that handles conversations, qualification, and routine support tasks around the clock.",
    heroDescription:
      "Our AI chatbot development service helps businesses automate customer interactions, capture leads, answer FAQs, and connect with business workflows using modern AI tools and APIs.",
    summary:
      "AI is most valuable when it reduces friction and saves time. We design conversational systems that work with your business goals and customer journey while staying practical and measurable.",
    deliverables: [
      "Website AI assistants and chatbots",
      "Lead qualification flows and intake automation",
      "Customer support automation",
      "Knowledge-base powered AI systems",
      "Third-party integrations with CRMs and APIs",
    ],
    faqs: [
      {
        question: "What kind of businesses benefit from AI chatbots?",
        answer:
          "E-commerce stores, service businesses, agencies, education brands, and real-estate teams can all benefit from AI chatbots that answer questions and capture leads automatically.",
      },
      {
        question: "Can an AI chatbot connect to my CRM or WhatsApp?",
        answer:
          "Yes. We can integrate chatbot workflows with your existing tools, including messaging apps, forms, CRMs, ticketing systems, and internal dashboards.",
      },
      {
        question: "Will AI replace my support team?",
        answer:
          "AI is designed to support your team by handling repetitive questions and routine requests, while your team focuses on complex or high-value interactions.",
      },
    ],
    relatedLinks: [
      { label: "Backend & API Systems", href: "/services/backend-api-systems" },
      { label: "Python Automation", href: "/services/python-automation" },
      { label: "Tools Platform Case Study", href: "/case-studies/tools" },
    ],
  },
  {
    slug: "python-automation",
    name: "Python Automation",
    tagline: "Automate repetitive work so your team can focus on growth, strategy, and customer value.",
    heroDescription:
      "We create custom Python automation solutions that reduce manual effort in operations, content publishing, reporting, data processing, integrations, and business workflows.",
    summary:
      "Automation works best when it targets tasks that are repetitive, time-consuming, or error-prone. We build reliable systems that save hours each week and create operational consistency.",
    deliverables: [
      "Task automation for pipelines and workflows",
      "Data extraction and reporting systems",
      "API integrations and data sync",
      "Content publishing and admin automation",
      "Monitoring and scheduling tools",
    ],
    faqs: [
      {
        question: "What can Python automation do for a business?",
        answer:
          "It can automate reports, file processing, data collection, lead management, content tasks, API workflows, database tasks, and repetitive admin processes.",
      },
      {
        question: "Is Python automation suitable for small businesses?",
        answer:
          "Absolutely. Even small improvements in operational efficiency can have a large impact when they eliminate repetitive work and reduce manual mistakes.",
      },
      {
        question: "Can you automate tasks across multiple platforms?",
        answer:
          "Yes. We can build automation that connects your systems, tools, and workflows across CRMs, forms, dashboards, spreadsheets, databases, and third-party services.",
      },
    ],
    relatedLinks: [
      { label: "AI Chatbots & AI Systems", href: "/services/ai-chatbots" },
      { label: "Backend & API Systems", href: "/services/backend-api-systems" },
      { label: "SEO & Organic Growth", href: "/services/seo-organic-growth" },
    ],
  },
  {
    slug: "ecommerce-development",
    name: "E-commerce Development",
    tagline: "Premium online stores built to convert traffic into sales and repeat customers.",
    heroDescription:
      "We design and develop e-commerce websites that combine trust, conversion-focused UX, product organization, checkout flow, and scalable technical foundations.",
    summary:
      "The best e-commerce experiences are not just attractive. They are easy to browse, fast to load, simple to shop, and supported by the right tools behind the scenes.",
    deliverables: [
      "Custom storefronts and product pages",
      "Checkout and shopping cart experiences",
      "Payment and order flow integration",
      "Responsive design for mobile shopping",
      "Admin tools for product and order management",
    ],
    faqs: [
      {
        question: "Do you build Shopify and custom e-commerce websites?",
        answer:
          "Yes. We can build on Shopify, WooCommerce, or custom stacks depending on your goals, budget, and growth plans.",
      },
      {
        question: "Can you improve a current online store?",
        answer:
          "Yes. We improve UX, conversion flow, checkout optimization, product page structure, mobile usability, and technical performance.",
      },
      {
        question: "What makes a good e-commerce website?",
        answer:
          "A good store balances product presentation, trust signals, smooth navigation, fast checkout, and scalable backend operations that support growth.",
      },
    ],
    relatedLinks: [
      { label: "Web & App Development", href: "/services/web-development" },
      { label: "Paid Ads & Lead Generation", href: "/services/paid-ads-growth" },
      { label: "Zarqash Collection Case Study", href: "/case-studies/zarqash-collection" },
    ],
  },
  {
    slug: "seo-organic-growth",
    name: "SEO & Organic Growth",
    tagline: "Search-focused growth systems designed to improve visibility, trust, and long-term traffic.",
    heroDescription:
      "Our SEO service combines technical optimization, keyword-driven content strategy, internal linking, site structure, and performance improvements to create durable organic growth.",
    summary:
      "SEO is not only about rankings. It helps your website become more discoverable, more trusted, and better aligned with how customers actually search and buy.",
    deliverables: [
      "Technical SEO audits and implementation",
      "Keyword-focused website copy and content strategy",
      "On-page optimization and metadata improvements",
      "Internal linking and URL structure cleanup",
      "Analytics and growth reporting",
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO is a long-term strategy. Most businesses begin to see meaningful movement within a few months, with stronger momentum as content, authority, and technical performance improve.",
      },
      {
        question: "Do you only focus on keywords?",
        answer:
          "No. We also optimize technical health, site structure, page experience, internal links, content quality, and conversion paths so rankings are supported by real user value.",
      },
      {
        question: "Can SEO help service businesses?",
        answer:
          "Yes. Service businesses benefit strongly from local SEO, industry pages, usage-focused landing pages, and trust-building content that matches customer intent.",
      },
    ],
    relatedLinks: [
      { label: "Web & App Development", href: "/services/web-development" },
      { label: "Paid Ads & Lead Generation", href: "/services/paid-ads-growth" },
      { label: "Tools Platform Case Study", href: "/case-studies/tools" },
    ],
  },
  {
    slug: "paid-ads-growth",
    name: "Paid Ads & Lead Generation",
    tagline: "Campaigns and landing pages built to capture qualified traffic and turn it into real business opportunities.",
    heroDescription:
      "We help businesses run efficient paid advertising campaigns across Google and Meta platforms, with the strategy and landing page support needed to improve conversion quality.",
    summary:
      "Paid ads work best when they are paired with clear messaging, landing page relevance, proper tracking, and conversion-focused testing. That is where strategy and design work together.",
    deliverables: [
      "Campaign strategy and targeting",
      "Landing page creation and optimization",
      "Conversion tracking setup and analytics",
      "Ad copy and creative guidance",
      "Performance review and iteration",
    ],
    faqs: [
      {
        question: "Do you manage campaigns for Google and Meta?",
        answer:
          "Yes. We can support Meta Ads, Google Ads, and landing page strategy so your traffic is better matched to the right offers and audiences.",
      },
      {
        question: "Do you build the landing pages too?",
        answer:
          "Yes. We often build or optimize landing pages specifically for paid campaigns so conversion rates are stronger and ad spend is used more effectively.",
      },
      {
        question: "Can paid ads work with a limited budget?",
        answer:
          "Yes. Smaller campaigns can still be effective when the targeting, messaging, and funnel are well aligned with the business offer.",
      },
    ],
    relatedLinks: [
      { label: "SEO & Organic Growth", href: "/services/seo-organic-growth" },
      { label: "E-commerce Development", href: "/services/ecommerce-development" },
      { label: "Pizza Hut Case Study", href: "/case-studies/pizza-hut" },
    ],
  },
  {
    slug: "backend-api-systems",
    name: "Backend & API Systems",
    tagline: "Reliable infrastructure that powers websites, apps, automations, and data workflows securely.",
    heroDescription:
      "We build backend systems, APIs, admin tools, authentication flows, database architecture, and integrations that keep modern digital products stable and scalable.",
    summary:
      "A business may have a strong front-end, but the real long-term performance depends on the systems behind it. We focus on practical infrastructure that supports growth and reliability.",
    deliverables: [
      "REST API development and integrations",
      "Authentication and user security systems",
      "Database architecture and admin dashboards",
      "Payments, CRMs, and third-party connectivity",
      "Scalable backend foundation for business apps",
    ],
    faqs: [
      {
        question: "Why do I need a backend system for my website?",
        answer:
          "A backend handles data, authentication, automation, payments, admin management, and integrations. Without it, modern digital products become harder to scale and maintain.",
      },
      {
        question: "Can you integrate third-party APIs into my existing workflow?",
        answer:
          "Yes. We can connect payment systems, CRMs, AI services, analytics tools, messaging platforms, and custom internal systems.",
      },
      {
        question: "Do you build admin dashboards?",
        answer:
          "Yes. We can create internal dashboards for managing orders, leads, reports, content, user accounts, and business workflows.",
      },
    ],
    relatedLinks: [
      { label: "Web & App Development", href: "/services/web-development" },
      { label: "AI Chatbots & AI Systems", href: "/services/ai-chatbots" },
      { label: "Full-Stack E-commerce Case Study", href: "/case-studies/full-project" },
    ],
  },
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service not found | Digital Agency",
    };
  }

  return {
    title: `${service.name} | Digital Growth Services`,
    description: `${service.heroDescription} Explore our ${service.name.toLowerCase()} service with FAQs, deliverables, and related growth solutions.`,
    keywords: [
      service.name,
      "digital agency",
      "business websites",
      "SEO",
      "AI automation",
      "web development",
      "marketing agency",
    ],
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Script
        id={`${service.slug}-faq-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-amber-400/5 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to services
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                {service.name}
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {service.tagline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {service.heroDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  Discuss this service
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white transition hover:bg-white/[0.05]"
                >
                  View all services
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Why businesses choose it
              </p>
              <ul className="mt-6 space-y-4">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              Overview
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for results, not just appearance.
            </h2>
          </div>

          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
            <p>{service.summary}</p>
            <p>
              We combine strategy, design, and technical execution so each service is aligned with business goals, customer journey, and measurable performance.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              FAQs
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Common questions about this service
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {service.faqs.map((item, index) => (
              <div
                key={item.question}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-400">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Related resources
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Explore more growth-focused content
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-amber-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-lg font-medium text-white">{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-amber-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Let’s build it
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Need a custom solution for your business?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Tell us about your goals and we will recommend the right mix of strategy, development, automation, SEO, or paid growth.
          </p>
          <a
            href="https://wa.me/923175265316?text=Hi%2C%20I%20want%20to%20discuss%20a%20project%20for%20your%20digital%20services."
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Start a conversation
            <MessageCircle size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
