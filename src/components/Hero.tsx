"use client";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Layers3,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-badge",
        { opacity: 0, y: 16, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-line",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 }
      );

      gsap.fromTo(
        ".hero-reveal",
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      gsap.to(".hero-glow", {
        y: -6,
        duration: 3.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden border-b border-white/5 px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-glow absolute left-[8%] top-20 h-72 w-72 rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="hero-glow absolute right-[7%] top-16 h-80 w-80 rounded-full bg-orange-500/10 blur-[130px]" />
        <div className="hero-glow absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <div className="hero-badge hero-reveal mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200 shadow-[0_0_25px_rgba(251,191,36,0.14)] backdrop-blur-sm">
              <Sparkles size={15} />
              Web • AI • Automation • Growth
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
              <span className="hero-line hero-reveal inline-block">We build digital systems that</span>{" "}
              <span className="hero-line hero-reveal inline-block bg-gradient-to-r from-amber-200 via-amber-300 to-orange-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(251,191,36,0.3)]">
                move businesses forward.
              </span>
            </h1>

            <p className="hero-reveal mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              From high-performance websites and e-commerce stores to
              AI-powered chatbots, automation, SEO, and custom business
              systems — we turn ideas into scalable digital products.
            </p>

            <div className="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(251,191,36,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.28)]"
              >
                Start a Project
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-amber-400/30 hover:bg-amber-400/5"
              >
                Explore Our Work
              </Link>
            </div>

            <div className="hero-reveal mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400" />
                Modern technology
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400" />
                Conversion focused
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400" />
                Built to scale
              </span>
            </div>
          </div>

          <div className="hero-reveal relative">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-7 rounded-[2.5rem] bg-gradient-to-br from-amber-400/12 via-transparent to-orange-500/12 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/80 p-2 shadow-[0_35px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                <div className="rounded-[1.6rem] border border-white/10 bg-slate-950 p-5 sm:p-7">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/15 to-orange-400/15 text-amber-300 ring-1 ring-white/10">
                        <Zap size={20} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          Digital Growth Stack
                        </p>

                        <p className="text-xs text-slate-500">
                          Built for modern businesses
                        </p>
                      </div>
                    </div>

                    <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/10 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Active
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <ServiceCard
                      icon={<Code2 size={19} />}
                      title="Web Development"
                      text="Next.js • React • MERN"
                    />

                    <ServiceCard
                      icon={<Bot size={19} />}
                      title="AI & Automation"
                      text="Chatbots • APIs • Workflows"
                    />

                    <ServiceCard
                      icon={<Layers3 size={19} />}
                      title="E-commerce"
                      text="Shopify • WooCommerce"
                    />

                    <ServiceCard
                      icon={<Sparkles size={19} />}
                      title="SEO & Growth"
                      text="Content • Technical SEO"
                    />
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-slate-500">Digital performance</p>
                        <p className="mt-1 text-2xl font-semibold text-white">Built for growth</p>
                      </div>

                      <span className="text-sm font-medium text-amber-300">Scalable</span>
                    </div>

                    <div className="mt-5 flex h-28 items-end gap-2">
                      <GrowthBar height="35%" />
                      <GrowthBar height="48%" />
                      <GrowthBar height="42%" />
                      <GrowthBar height="61%" />
                      <GrowthBar height="56%" />
                      <GrowthBar height="74%" />
                      <GrowthBar height="68%" />
                      <GrowthBar height="88%" />
                      <GrowthBar height="78%" />
                      <GrowthBar height="96%" />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <Metric value="Fast" label="Performance" />
                    <Metric value="Secure" label="Architecture" />
                    <Metric value="SEO" label="Ready" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-reveal mt-16 border-t border-white/10 pt-7 lg:mt-20">
          <div className="grid gap-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <MiniService
              number="01"
              title="Web & Apps"
              text="Modern websites and applications"
            />

            <MiniService
              number="02"
              title="AI Systems"
              text="Chatbots and intelligent workflows"
            />

            <MiniService
              number="03"
              title="E-commerce"
              text="Stores built to convert"
            />

            <MiniService
              number="04"
              title="Growth"
              text="SEO, content and automation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-amber-400/20 hover:bg-white/[0.055]">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-amber-300">
          {icon}
        </div>

        <div>
          <p className="text-sm font-medium text-white">{title}</p>
          <p className="mt-0.5 text-xs text-slate-500">{text}</p>
        </div>
      </div>
    </div>
  );
}

function GrowthBar({ height }: { height: string }) {
  return (
    <div className="flex h-full flex-1 items-end">
      <div
        className="w-full rounded-t-md bg-gradient-to-t from-amber-500/30 to-amber-300"
        style={{ height }}
      />
    </div>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3 text-center">
      <p className="text-sm font-semibold text-white">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
        {label}
      </p>
    </div>
  );
}

function MiniService({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <span className="font-mono text-xs text-amber-300/70">
        {number}
      </span>

      <div>
        <p className="font-medium text-white">{title}</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
}
