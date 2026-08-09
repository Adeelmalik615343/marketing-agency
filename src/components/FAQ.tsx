import { ChevronRight } from "lucide-react";

const faqs = [
  {"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What services does your agency provide?",
    answer:
      "We build complete digital growth systems including modern websites, Next.js and React applications, e-commerce platforms, AI chatbots, business automation, Python automation, APIs, SEO, analytics, Meta Ads, Google Ads, and ongoing optimization.",
  },
  {
    question: "Can you build a complete website from scratch?",
    answer:
      "Yes. We handle the complete process from planning and UI/UX to development, responsive optimization, SEO setup, analytics, deployment, and ongoing improvements.",
  },
  {
    question: "Can you build AI chatbots for my business?",
    answer:
      "Yes. We can build AI-powered website assistants and business chatbots that can answer questions, guide visitors, collect leads, connect with APIs, and automate repetitive customer interactions.",
  },
  {
    question: "Do you provide Python automation?",
    answer:
      "Yes. Python can be used to automate repetitive business tasks such as data processing, content workflows, reporting, API integrations, social media workflows, scraping where permitted, and other custom processes.",
  },
  {
    question: "Can you manage SEO and organic growth?",
    answer:
      "Yes. We can build an SEO-ready website structure, optimize pages, create content systems, improve technical SEO, add analytics, and develop content strategies designed to generate long-term organic traffic.",
  },
  {
    question: "Do you provide Meta and Google Ads?",
    answer:
      "Yes. We can help with paid advertising strategy, campaign setup, tracking, landing pages, conversion optimization, and ongoing campaign improvement for businesses targeting local or international markets.",
  },
  {
    question: "Can you work with an existing website?",
    answer:
      "Absolutely. We can improve an existing website instead of rebuilding everything. This can include redesigning sections, improving performance, fixing technical issues, adding new functionality, improving SEO, or integrating automation and AI.",
  },
  {
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. We can build or improve e-commerce experiences using modern web technologies and platforms such as Shopify, WooCommerce, and custom React or Next.js solutions.",
  },
  {
    question: "Can you connect APIs and third-party services?",
    answer:
      "Yes. We can integrate payment gateways, analytics, AI services, cloud storage, social platforms, CRMs, email systems, databases, authentication systems, and other APIs depending on the project requirements.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Our services are designed for businesses in Pakistan and international markets including the UAE, Saudi Arabia, Qatar, UK, USA, and other regions.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on the scope, technology, integrations, timeline, and ongoing support required. We provide starting packages as well as custom quotes for larger projects and digital systems.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We can continue supporting your website or digital system after launch with maintenance, improvements, analytics, SEO, content, automation, advertising, performance optimization, and new features.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-white/10 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-400/5 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            <HelpCircle size={14} />
            FAQ
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Questions,{" "}
            <span className="text-amber-300">answered.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Everything you need to know before starting a digital project
            with us.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-amber-400/30 bg-amber-400/[0.05]"
                    : "border-white/10 bg-white/[0.025] hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`mt-0.5 hidden text-xs font-semibold sm:block ${
                        isOpen ? "text-amber-300" : "text-slate-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className={`text-base font-medium transition sm:text-lg ${
                        isOpen ? "text-white" : "text-slate-200"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-amber-400/30 bg-amber-400/10 text-amber-300"
                        : "border-white/10 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={17} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-5 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pl-[4.5rem]">
                      <p className="max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 text-center sm:p-9">
          <h3 className="text-xl font-semibold text-white">
            Still have a question?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
            Tell us what you are trying to build. We can discuss your
            requirements and recommend the right technology and growth
            approach.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Talk About Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
    question: "How quickly can we start?",
    answer: "Most projects begin within 1–2 weeks depending on scope and availability.",
  },
  {
    question: "Do you work with existing brands?",
    answer: "Yes. We can refresh an existing brand presence, improve messaging, or build from scratch.",
  },
  {
    question: "Can you support ongoing growth?",
    answer: "Absolutely. We offer ongoing optimization and expansion support for growing teams.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Questions founders usually ask before they book.</h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <ChevronRight size={18} className="text-amber-300" />
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
