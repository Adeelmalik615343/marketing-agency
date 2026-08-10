
"use client";

import { ArrowUpRight, Quote, Star } from "lucide-react";
import Link from "next/link";

const reviews = [
  {
    quote:
      "The new website completely changed how we present our business online. It feels premium, loads quickly, and gives visitors a much clearer path to becoming customers.",
    name: "Mina Cole",
    role: "Founder",
    company: "Northstar Labs",
    project: "Website & Growth System",
    result: "+42%",
    resultLabel: "Lead conversion",
    initials: "MC",
  },
  {
    quote:
      "We needed more than a beautiful website. The team built a proper digital system around our business, from the user experience to the technical implementation.",
    name: "Dario Singh",
    role: "Product Lead",
    company: "Forma",
    project: "Product Experience",
    result: "2.4x",
    resultLabel: "Engagement",
    initials: "DS",
  },
  {
    quote:
      "The combination of design, development, SEO structure, and automation gave us a much stronger foundation for growth. The entire experience feels polished and intentional.",
    name: "Alicia Park",
    role: "Marketing Director",
    company: "Nexo",
    project: "Digital Growth Platform",
    result: "+68%",
    resultLabel: "Organic visibility",
    initials: "AP",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            <Star size={14} fill="currentColor" />
            Client Results
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Built to look great.
            <span className="block text-amber-300">
              Built to perform.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            We combine strategy, design, development, automation, and growth
            systems to create digital experiences that actually move the
            business forward.
          </p>
        </div>

        {/* Rating bar */}
        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:gap-8 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold text-white">4.9</div>

            <div>
              <div className="flex gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Average client rating
              </p>
            </div>
          </div>

          <div className="hidden h-10 w-px bg-white/10 sm:block" />

          <div className="text-center sm:text-left">
            <p className="font-semibold text-white">
              Strategy + Technology + Growth
            </p>

            <p className="mt-1 text-sm text-slate-500">
              One digital partner from idea to scale.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.05] sm:p-8"
            >
              {/* Quote icon */}
              <div className="absolute right-7 top-7 text-white/[0.05]">
                <Quote size={64} />
              </div>

              {/* Stars */}
              <div className="relative flex gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Project */}
              <div className="relative mt-6">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-400">
                  {review.project}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="relative mt-6 flex-1 text-[15px] leading-7 text-slate-300">
                “{review.quote}”
              </blockquote>

              {/* Result */}
              <div className="mt-8 rounded-2xl border border-amber-400/10 bg-amber-400/[0.06] p-4">
                <p className="text-2xl font-semibold text-amber-300">
                  {review.result}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {review.resultLabel}
                </p>
              </div>

              {/* Client */}
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10 text-sm font-semibold text-amber-300">
                    {review.initials}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {review.name}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>

                <div className="text-slate-600 transition group-hover:text-amber-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:flex-row sm:p-8">
          <div>
            <p className="text-lg font-semibold text-white">
              Want results like these?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Let&apos;s build a digital system around your business.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Start a Project
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
