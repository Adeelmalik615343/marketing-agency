"use client";

import { ArrowRight, Sparkles, TrendingUp, Cpu, Globe } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-item",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Left side */}
        <div>
          <div className="hero-item mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-200">
            <Sparkles size={16} />
            Premium Digital Growth Agency
          </div>

          <h1 className="hero-item max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build a digital presence that{" "}
            <span className="text-amber-300">
              grows your business.
            </span>
          </h1>

          <p className="hero-item mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We build high-converting websites, intelligent automation
            systems, AI-powered solutions, and digital experiences
            designed to help ambitious brands grow faster.
          </p>

          <div className="hero-item mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-item mt-12 grid max-w-2xl grid-cols-3 gap-4">
            <div>
              <div className="text-3xl font-bold text-white">
                120+
              </div>

              <div className="mt-1 text-sm text-slate-400">
                Systems Delivered
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold text-white">
                45+
              </div>

              <div className="mt-1 text-sm text-slate-400">
                Global Partners
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold text-white">
                4.9/5
              </div>

              <div className="mt-1 text-sm text-slate-400">
                Client Rating
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="hero-item">
          <div className="relative mx-auto max-w-lg rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-amber-400/10 bg-slate-950 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">
                    Digital Growth System
                  </p>

                  <p className="text-sm text-slate-500">
                    Performance overview
                  </p>
                </div>

                <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300">
                  Live
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <TrendingUp
                    className="mb-4 text-amber-300"
                    size={24}
                  />

                  <div className="text-sm text-slate-400">
                    Conversion Growth
                  </div>

                  <div className="mt-2 text-3xl font-bold text-white">
                    +38%
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Cpu
                    className="mb-4 text-amber-300"
                    size={24}
                  />

                  <div className="text-sm text-slate-400">
                    Automation
                  </div>

                  <div className="mt-2 text-3xl font-bold text-white">
                    80+
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                  <Globe
                    className="mb-4 text-amber-300"
                    size={24}
                  />

                  <div className="text-sm text-slate-400">
                    Global Digital Reach
                  </div>

                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[82%] rounded-full bg-amber-400" />
                  </div>

                  <div className="mt-2 flex justify-between text-xs text-slate-500">
                    <span>Performance</span>
                    <span>82%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
