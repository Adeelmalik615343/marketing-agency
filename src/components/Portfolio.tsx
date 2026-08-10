"use client";

import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Globe,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "Full-Stack Web Platform",
    description:
      "A complete full-stack web experience focused on modern UI, authentication, product flows, and scalable application structure.",
    url: "https://full-project-5.onrender.com/",
    tags: ["MERN", "Full Stack", "Authentication"],
  },
  {
    title: "Online Store Authentication",
    description:
      "An e-commerce experience with authentication, user flows, responsive interface, and a foundation for scalable online commerce.",
    url: "https://onlinestoreauth.onrender.com/",
    tags: ["React", "Auth", "E-commerce"],
  },
  {
    title: "Digital Agency Portfolio",
    description:
      "A modern agency-style portfolio designed around strong visual hierarchy, responsive design, services, projects, and conversion.",
    url: "https://myweb-va1l.vercel.app/#portfolio",
    tags: ["Next.js", "UI/UX", "SEO"],
  },
  {
    title: "Food Ordering Platform",
    description:
      "A responsive food-ordering experience designed for fast navigation, product discovery, and conversion-focused customer journeys.",
    url: "https://pizzahutsitereadytouse.onrender.com/#delivery",
    tags: ["Web App", "Responsive", "UX"],
  },
  {
    title: "Online Store",
    description:
      "A clean e-commerce interface with product-focused layouts and a user-friendly shopping experience.",
    url: "https://onlinestore1-yfce.onrender.com/",
    tags: ["E-commerce", "Frontend", "UI"],
  },
  {
    title: "Online Tools Platform",
    description:
      "A practical collection of web utilities focused on useful functionality, clean interaction patterns, and accessible design.",
    url: "https://tools-six-nu-26.vercel.app/",
    tags: ["Web Tools", "React", "Utilities"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-b border-white/10 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-amber-400/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              <Sparkles size={14} />
              Selected Work
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Digital products built to{" "}
              <span className="text-amber-300">perform.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              A selection of websites, full-stack applications, e-commerce
              experiences, and digital products built with modern
              technologies.
            </p>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/Adeelmalik615343"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-200"
          >
            <Github size={17} />
            View GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.05]"
            >
              {/* Project preview */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/20">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute left-1/4 top-1/4 h-24 w-24 rounded-full bg-amber-400/20 blur-3xl" />
                  <div className="absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300 transition duration-300 group-hover:scale-110">
                  {index % 2 === 0 ? (
                    <Globe size={28} />
                  ) : (
                    <Sparkles size={28} />
                  )}
                </div>

                <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-slate-400 backdrop-blur">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Visit */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-amber-200"
                >
                  View Live Project
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Portfolio bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 rounded-[2rem] border border-amber-400/20 bg-amber-400/[0.05] p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xl font-semibold text-white">
              Have a project in mind?
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
              We can turn your idea into a production-ready website,
              application, e-commerce platform, AI system, or automated
              business workflow.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Start a Project
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
