import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Full-Stack Web Platform",
    description:
      "A complete full-stack web application with modern UI and user-focused product flows.",
    url: "https://full-project-5.onrender.com/",
  },
  {
    title: "Online Store",
    description:
      "An e-commerce website with authentication and a responsive shopping experience.",
    url: "https://onlinestoreauth.onrender.com/",
  },
  {
    title: "Agency Portfolio",
    description:
      "A modern digital agency and portfolio website built for strong presentation and conversion.",
    url: "https://myweb-va1l.vercel.app/#portfolio",
  },
  {
    title: "Food Ordering Website",
    description:
      "A responsive food-ordering website with a simple and user-friendly customer experience.",
    url: "https://pizzahutsitereadytouse.onrender.com/#delivery",
  },
  {
    title: "Online Store 1",
    description:
      "A clean e-commerce interface focused on usability and responsive design.",
    url: "https://onlinestore1-yfce.onrender.com/",
  },
  {
    title: "Tools Platform",
    description:
      "A collection of useful online tools with a clean and practical interface.",
    url: "https://tools-six-nu-26.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="border-b border-white/10 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Our latest work
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Explore websites, web applications, e-commerce projects, and
            digital products we have built.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-amber-400/30 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                <ArrowUpRight size={22} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200"
              >
                View Project
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
