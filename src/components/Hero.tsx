"use client";

import { ArrowRight, Sparkles, TrendingUp, Cpu, Globe } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import type { Mesh } from "three";

const tickerItems = [
  "High-converting websites",
  "AI-powered lead systems",
  "Automated growth funnels",
  "Chatbot revenue assistants",
  "Performance-first brand experiences",
];

function HeroOrbit() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.45;
      meshRef.current.rotation.y += delta * 0.55;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.12;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.2}>
      <icosahedronGeometry args={[1.1, 2]} />
      <meshPhysicalMaterial
        color="#f59e0b"
        emissive="#7c2d12"
        roughness={0.2}
        metalness={0.25}
        transmission={0.2}
      />
    </mesh>
  );
}

function HeroScene() {
  return (
    <div className="relative h-[260px] w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-amber-400/20 bg-slate-900/75 p-3 shadow-[0_0_80px_rgba(245,158,11,0.2)] backdrop-blur-xl sm:h-[320px] lg:h-[360px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.22),_transparent_55%)]" />
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.95} />
        <directionalLight position={[3, 3, 3]} intensity={1.8} />
        <pointLight position={[-3, 2, 2]} intensity={1.4} color="#fb923c" />
        <HeroOrbit />
      </Canvas>
    </div>
  );
}

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [headlineRef.current, subtitleRef.current, ctasRef.current, statsRef.current, cardRef.current],
        { opacity: 0, y: 28, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out", stagger: 0.12 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#111827_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.14),_transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <div className="relative z-10 flex flex-col justify-center text-center sm:text-left">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm uppercase tracking-[0.32em] text-amber-200">
              <Sparkles size={14} />
              premium digital growth systems
            </span>
            <h1
              ref={headlineRef}
              className="text-[2.4rem] font-semibold leading-[1.03] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            >
              Launch standout digital experiences with AI-powered automation.
            </h1>
            <p
              ref={subtitleRef}
              className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              We build websites, conversion funnels, and intelligent chatbots for ambitious brands ready to scale faster and capture more leads.
            </p>
            <div ref={ctasRef} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300 sm:w-auto"
              >
                Start your launch
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Explore services
              </a>
            </div>
            <div ref={statsRef} className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4">
                <div className="flex items-center gap-2 text-amber-300">
                  <TrendingUp size={18} />
                  <span className="text-sm font-medium">Average engagement lift</span>
                </div>
                <div className="mt-3 text-3xl font-semibold text-white">72%</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4">
                <div className="flex items-center gap-2 text-amber-300">
                  <Cpu size={18} />
                  <span className="text-sm font-medium">Systems delivered</span>
                </div>
                <div className="mt-3 text-3xl font-semibold text-white">120+</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4">
                <div className="flex items-center gap-2 text-amber-300">
                  <Globe size={18} />
                  <span className="text-sm font-medium">Global brand partners</span>
                </div>
                <div className="mt-3 text-3xl font-semibold text-white">45</div>
              </div>
            </div>
          </div>

          <div ref={cardRef} className="relative z-10 flex items-center justify-center">
            <div className="w-full max-w-[28rem] rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6">
              <div className="rounded-[1.75rem] border border-amber-400/20 bg-slate-950/90 p-6">
                <div className="mb-5 flex items-center justify-between text-slate-300">
                  <div>
                    <p className="text-sm font-medium">Live growth preview</p>
                    <p className="text-xs text-slate-500">Interactive performance dashboard</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-300">Online</span>
                </div>
                <HeroScene />
                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                    <div className="text-sm text-slate-400">Conversion boost</div>
                    <div className="mt-2 text-3xl font-semibold text-white">38%</div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                      <div className="text-sm text-slate-400">Launch-ready funnels</div>
                      <div className="mt-2 text-2xl font-semibold text-white">80+</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                      <div className="text-sm text-slate-400">Client satisfaction</div>
                      <div className="mt-2 text-2xl font-semibold text-white">4.9/5</div>
                    </div>
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
