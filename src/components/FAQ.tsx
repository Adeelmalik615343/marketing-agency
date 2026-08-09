"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does your agency provide?",
    answer:
      "We provide web development, AI chatbots, Python automation, APIs, SEO, analytics, Meta Ads, Google Ads, e-commerce development, and custom digital solutions.",
  },
  {
    question: "Can you build a complete website from scratch?",
    answer:
      "Yes. We handle planning, UI/UX, development, responsive design, SEO setup, analytics, deployment, and ongoing improvements.",
  },
  {
    question: "Can you build AI chatbots?",
    answer:
      "Yes. We build AI-powered website assistants and business chatbots that can answer questions, collect leads, connect with APIs, and automate customer interactions.",
  },
  {
    question: "Do you provide Python automation?",
    answer:
      "Yes. Python can be used to automate repetitive business tasks, data processing, reporting, API integrations, content workflows, and other custom processes.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes. We can optimize your website structure, technical SEO, metadata, content, performance, analytics, and organic growth strategy.",
  },
  {
    question: "Do you provide Meta and Google Ads?",
    answer:
      "Yes. We can help with advertising strategy, campaign setup, tracking, landing pages, conversion optimization, and campaign improvement.",
  },
  {
    question: "Can you improve an existing website?",
    answer:
      "Yes. We can redesign sections, fix bugs, improve performance, add new features, improve SEO, and integrate AI or automation into an existing website.",
  },
  {
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. We can build and improve e-commerce websites using Shopify, WooCommerce, React, Next.js, or custom solutions.",
  },
  {
    question: "Can you integrate APIs?",
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
      "Pricing depends on the project scope, technology, integrations, timeline, and support requirements. We provide starting packages and custom quotes.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We can provide maintenance, SEO, analytics, advertising, automation, performance optimization, new features, and ongoing technical support.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleFAQ(index: number) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

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

        {/* Questions */}
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
                    className={`shrink-0 text-amber-300 transition-transform ${
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

        {/* CTA */}
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
