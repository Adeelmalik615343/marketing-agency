
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does your agency provide?",
    answer:
      "We provide modern web development, AI chatbots, Python automation, APIs, SEO, analytics, Meta Ads, Google Ads, e-commerce development, and custom digital solutions.",
  },
  {
    question: "Can you build a complete website from scratch?",
    answer:
      "Yes. We handle strategy, UI/UX, development, responsive design, SEO setup, analytics, deployment, and ongoing improvements.",
  },
  {
    question: "Can you build AI chatbots for businesses?",
    answer:
      "Yes. We build AI-powered chatbots and website assistants that can answer questions, collect leads, assist customers, and connect with business APIs and systems.",
  },
  {
    question: "Do you provide Python automation?",
    answer:
      "Yes. We create Python automation for repetitive tasks, data processing, reporting, API integrations, content workflows, and custom business processes.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes. We work on technical SEO, website structure, metadata, performance, content strategy, analytics, and long-term organic growth.",
  },
  {
    question: "Do you provide Meta and Google Ads?",
    answer:
      "Yes. We can help with campaign strategy, setup, tracking, landing pages, conversion optimization, and ongoing campaign improvement.",
  },
  {
    question: "Can you improve my existing website?",
    answer:
      "Absolutely. We can redesign sections, fix technical issues, improve performance, add features, improve SEO, and integrate AI or automation.",
  },
  {
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. We build and improve e-commerce solutions using Shopify, WooCommerce, React, Next.js, and custom technologies.",
  },
  {
    question: "Can you integrate APIs and third-party services?",
    answer:
      "Yes. We can integrate payment gateways, AI services, analytics, databases, authentication, cloud services, social platforms, CRMs, and other APIs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with businesses in Pakistan and international markets including the UAE, Saudi Arabia, Qatar, UK, USA, and other regions.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on the project scope, technology, integrations, timeline, and support requirements. We offer starting packages as well as custom quotes.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We can provide maintenance, SEO, analytics, advertising, automation, performance optimization, new features, and ongoing technical support.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="border-b border-white/10 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Questions,{" "}
            <span className="text-amber-300">answered.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            Common questions about our websites, AI systems, automation,
            marketing, and digital growth services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-amber-400/30 bg-amber-400/5"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="flex items-center gap-4">
                    <span className="hidden text-xs font-semibold text-amber-300 sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium text-white sm:text-base">
                      {faq.question}
                    </span>
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-amber-300 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-5 pb-6 pt-5 sm:px-6">
                    <p className="text-sm leading-7 text-slate-400 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center sm:p-10">
          <h3 className="text-xl font-semibold text-white">
            Have a different question?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
            Tell us what you want to build and we can discuss the best
            technology and growth solution for your business.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
