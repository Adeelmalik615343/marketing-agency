"use client";

import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
  Play,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Full-Stack Business Platform",
    category: "Full-Stack Development",
    description:
      "A complete full-stack web experience combining modern frontend design with backend functionality and production deployment.",
    url: "https://full-project-5.onrender.com/",
    technologies: ["MERN", "REST API", "Responsive UI"],
  },
  {
    number: "02",
    title: "Online Store Authentication",
    category: "E-commerce",
    description:
      "An authentication-focused online store experience designed around account flows, onboarding, and a smooth shopping interface.",
    url: "https://onlinestoreauth.onrender.com/",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    number: "03",
    title: "My Web Portfolio",
    category: "Web Development",
    description:
      "A modern portfolio experience focused on visual presentation, responsive design, project showcasing, and professional positioning.",
    url: "https://myweb-va1l.vercel.app/#portfolio",
    technologies: ["Next.js", "React", "Tailwind"],
  },
  {
    number: "04",
    title: "Food Ordering Experience",
    category: "Food & E-commerce",
    description:
      "A responsive food-ordering interface built around fast navigation, product discovery, and a conversion-focused customer journey.",
    url: "https://pizzahutsitereadytouse.onrender.com/#delivery",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "05",
    title: "Online Store",
    category: "E-commerce Development",
    description:
      "A clean storefront experience designed to make product discovery, browsing, and customer interaction simple and intuitive.",
    url: "https://onlinestore1-yfce.onrender.com/",
    technologies: ["React", "E-commerce", "Responsive UI"],
  },
  {
    number: "06",
    title: "Web Tools Platform",
    category: "Web Application",
    description:
      "A practical collection of browser-based tools with a simple interface focused on usability and fast interaction.",
    url: "https://tools-six-nu-26.vercel.app/",
    technologies: ["Next.js", "JavaScript", "Web APIs"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-b border-white/10 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              <Sparkles size={14} />
              Selected Work
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Work that turns{" "}
              <span className="text-amber-300">
                ideas into products.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              A selection of websites, applications, e-commerce experiences,
              and digital products we have built.
            </p>
          </div>

          <a
            href="https://github.com/Adeelmalik615343"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-200"
          >
            <GitBranch size={17} />
            View GitHub
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Featured Project */}
        <div className="mt-14">
          <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              {/* Project Visual */}
              <div className="relative min-h-[330px] overflow-hidden bg-slate-900 p-5 sm:p-7 lg:min-h-[450px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.12),transparent_35%)]" />

                <div className="relative flex h-full min-h-[290px] flex-col rounded-[1.5rem] border border-white/10 bg-slate-950 p-5 shadow-2xl sm:p-7">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                    </div>

                    <span className="font-mono text-[10px] text-slate-600">
                      PROJECT_01
                    </span>
                  </div>

                  <div className="flex flex-1 items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-amber-400/20 bg-amber-400/10 text-amber-300 transition duration-500 group-hover:scale-110">
                        <Sparkles size={34} />
                      </div>

                      <p className="mt-5 text-xs uppercase tracking-[0.25em] text-slate-600">
                        Featured Project
                      </p>

                      <p className="mt-2 text-xl font-semibold text-white">
                        Full-Stack Digital Platform
                      </p>
                    </div>
                  </div>

                  {/* Future Video */}
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-slate-950">
                        <Play size={15} fill="currentColor" />
                      </div>

                      <span className="text-xs text-slate-400">
                        Project walkthrough
                      </span>
                    </div>

                    <span className="text-[10px] uppercase tracking-wider text-slate-600">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured Content */}
              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-amber-300/70">
                    01
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-500">
                    Featured
                  </span>
                </div>

                <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-amber-300/70">
                  Full-Stack Development
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Full-Stack Business Platform
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                  A complete full-stack web experience combining modern
                  frontend design with backend functionality and production
                  deployment.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {projects[0].technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-9">
                  <a
                    href={projects[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
                  >
                    View Live Project
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Other Projects */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(1).map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-amber-400/20 hover:bg-white/[0.055]"
            >
              {/* Project Visual */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/10 bg-slate-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08),transparent_55%)]" />

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-950 text-amber-300 shadow-xl transition duration-500 group-hover:scale-110 group-hover:border-amber-400/20">
                  <Sparkles size={24} />
                </div>

                <span className="absolute left-5 top-5 font-mono text-xs text-slate-600">
                  {project.number}
                </span>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-slate-400 opacity-0 transition group-hover:opacity-100 hover:text-amber-300"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-300/70">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-500"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition hover:text-amber-200"
                  >
                    View Project
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Future Case Studies */}
        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-r from-amber-400/[0.06] to-transparent p-7 sm:p-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">
                More projects are coming.
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Selected projects can later become detailed case studies with
                screenshots, technical breakdowns, results, and short videos.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-3 text-sm font-medium text-amber-200 transition hover:bg-amber-400/20"
            >
              Build Something
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
