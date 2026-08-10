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
      "A complete full-stack web application with modern UI, authentication, product flows, and scalable architecture.",
    url: "https://full-project-5.onrender.com/",
    tags: ["MERN", "Full Stack", "Auth"],
  },
  {
    title: "Online Store Auth",
    description:
      "An authentication-focused e-commerce experience with responsive design and smooth customer onboarding.",
    url: "https://onlinestoreauth.onrender.com/",
    tags: ["React", "Auth", "E-commerce"],
  },
  {
    title: "Digital Agency Portfolio",
    description:
      "A modern portfolio website focused on responsive design, strong visual hierarchy, services, and conversion.",
    url: "https://myweb-va1l.vercel.app/#portfolio",
    tags: ["Next.js", "UI/UX", "SEO"],
  },
  {
    title: "Food Ordering Website",
    description:
      "A responsive food-ordering website designed for quick browsing, clear navigation, and customer conversion.",
    url: "https://pizzahutsitereadytouse.onrender.com/#delivery",
    tags: ["Web App", "Responsive", "UX"],
  },
  {
    title: "Online Store",
    description:
      "A clean e-commerce interface designed around products, usability, responsive layouts, and a smooth shopping experience.",
    url: "https://onlinestore1-yfce.onrender.com/",
    tags: ["E-commerce", "Frontend", "UI"],
  },
  {
    title: "Online Tools Platform",
    description:
      "A practical web tools platform focused on useful functionality, clean interfaces, and modern interactions.",
    url: "https://tools-six-nu-26.vercel.app/",
    tags: ["React", "Tools", "Web App"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="border-b border-white/10 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              <Sparkles size={14} />
              Selected Work
            </div>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Projects that turn ideas into{" "}
              <span className="text-amber-300">digital products.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Explore websites, full-stack applications, e-commerce
              experiences, and useful digital tools built with modern
              technologies.
            </p>
          </div>

          <a
            href="https://github.com/Adeelmalik615343"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-400/30 hover:bg-amber-400/10"
          >
            <Github size={17} />
            GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.06]"
            >
              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                  {index % 2 === 0 ? (
                    <Globe size={22} />
                  ) : (
                    <Sparkles size={22} />
                  )}
                </div>

                <span className="text-sm font-medium text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <h3 className="mt-5 text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Link */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-amber-200"
              >
                View Live Project
                <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-amber-400/20 bg-amber-400/5 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Want your project here?
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
              Let's build your website, web application, e-commerce platform,
              AI system, or automation workflow.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Start a Project
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
