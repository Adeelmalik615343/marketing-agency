import { ArrowUpRight, GitBranch, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Full Project",
    description: "A polished full-stack experience with strong UI and product flow.",
    url: "https://full-project-5.onrender.com/",
  },
  {
    title: "Online Store Auth",
    description: "Authentication-driven storefront experience designed for smooth onboarding.",
    url: "https://onlinestoreauth.onrender.com/",
  },
  {
    title: "My Web Portfolio",
    description: "A modern personal portfolio experience with a sharp visual identity.",
    url: "https://myweb-va1l.vercel.app/#portfolio",
  },
  {
    title: "Pizza Hut Ready Site",
    description: "A food-ordering experience built for quick browsing and conversion.",
    url: "https://pizzahutsitereadytouse.onrender.com/#delivery",
  },
  {
    title: "Online Store 1",
    description: "A clean e-commerce interface with a highly usable storefront layout.",
    url: "https://onlinestore1-yfce.onrender.com/",
  },
  {
    title: "Tools App",
    description: "A practical web app focused on utility and modern interaction patterns.",
    url: "https://tools-six-nu-26.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="bg-slate-900 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Portfolio
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Selected work from recent builds and product launches.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              These projects reflect a mix of polished frontend experiences, ecommerce flows, and full-stack product delivery.
            </p>
          </div>

          <a
            href="https://github.com/Adeelmalik615343"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200 transition hover:bg-amber-400/20"
          >
            <GitBranch size={16} />
            View GitHub
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-amber-400/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                  <Sparkles size={18} />
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-amber-200 transition group-hover:text-amber-100"
                >
                  Visit
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
