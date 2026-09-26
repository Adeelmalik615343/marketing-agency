
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Calculator,
  Search,
  Smartphone,
  Zap,
  Code2,
  ShieldCheck,
  Globe,
  Wrench,
  MessageCircle,
  ChevronDown,
  Gauge,
  Layers3,
} from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Online Tools",
    text: "A collection of practical browser-based tools designed to help users complete common digital tasks quickly.",
  },
  {
    icon: Calculator,
    title: "Utility Features",
    text: "Useful utilities provide fast results directly in the browser without requiring users to install desktop software.",
  },
  {
    icon: Search,
    title: "Easy Discovery",
    text: "Clear navigation and structured tool sections make it easier for visitors to find the utility they need.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    text: "The interface adapts across mobile, tablet, and desktop devices for a consistent experience.",
  },
  {
    icon: Gauge,
    title: "Fast Experience",
    text: "The platform is designed around quick interactions and simple workflows so users can get results without unnecessary steps.",
  },
  {
    icon: Globe,
    title: "Browser Based",
    text: "Users can access the tools directly from a web browser without downloading additional applications.",
  },
  {
    icon: Layers3,
    title: "Scalable Structure",
    text: "The architecture can be expanded with additional tools, categories, pages, and utility features.",
  },
  {
    icon: ShieldCheck,
    title: "User Focused",
    text: "The interface focuses on usability, clear instructions, simple inputs, and understandable outputs.",
  },
];

const technologies = [
  "React",
  "JavaScript",
  "Responsive UI",
  "Component Architecture",
  "Modern CSS",
  "Browser APIs",
  "SEO Structure",
  "Mobile Optimization",
];

const faqs = [
  {
    question: "What is the Tools website?",
    answer:
      "It is a browser-based utility platform that brings practical online tools together in one accessible web application.",
  },
  {
    question: "What type of tools can the platform provide?",
    answer:
      "A utility platform can include calculators, converters, generators, text utilities, developer tools, image utilities, productivity tools, and many other browser-based features.",
  },
  {
    question: "Does the Tools website work on mobile?",
    answer:
      "Yes. The interface is designed to be responsive so users can access the tools from smartphones, tablets, and desktop computers.",
  },
  {
    question: "Do users need to install software?",
    answer:
      "No. Browser-based utilities can be accessed directly through a web browser, making the experience convenient across different devices.",
  },
  {
    question: "Can more tools be added later?",
    answer:
      "Yes. The platform can be expanded with new tools, categories, landing pages, search functionality, and additional utility features.",
  },
  {
    question: "Can the Tools website generate organic traffic?",
    answer:
      "Yes. Individual tools can target specific search queries. Creating useful tool pages with unique titles, descriptions, explanatory content, FAQs, internal links, and strong technical SEO can create opportunities for organic search traffic.",
  },
  {
    question: "Can this platform be monetized?",
    answer:
      "Yes. Depending on the audience and traffic, a utility platform can support advertising, premium tools, subscriptions, sponsored placements, affiliate content, or other business models.",
  },
  {
    question: "Can you build a custom tools platform?",
    answer:
      "Yes. We can build custom utility platforms for businesses, communities, SaaS products, educational websites, developer platforms, and other digital products.",
  },
];

export default function ToolsCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.10),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>

          <div className="mt-12 max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200">
              <Wrench size={16} />
              Online Tools Platform Case Study
            </div>

            <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Building a practical{" "}
              <span className="text-amber-300">
                online tools platform
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              A browser-based utility platform designed to give users fast,
              accessible, and practical tools while creating a strong
              foundation for search-driven organic growth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://tools-six-nu-26.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Visit Live Tools
                <ExternalLink size={17} />
              </a>

              <a
                href="https://wa.me/923175265316?text=Hi%2C%20I%20want%20to%20discuss%20a%20tools%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-white transition hover:bg-white/[0.07]"
              >
                Discuss a Similar Project
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* META */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetaCard title="Project Type" value="Tools Platform" />
            <MetaCard title="Business Model" value="Utility Website" />
            <MetaCard title="Primary Focus" value="User Experience" />
            <MetaCard title="Growth Focus" value="Organic Search" />
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Project Walkthrough"
            title="See the tools platform in action"
            text="Use a short walkthrough video to demonstrate the homepage, tool navigation, individual utilities, inputs, outputs, and mobile experience."
          />

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
            <div className="aspect-video">
              <video
                className="h-full w-full object-cover"
                controls
                preload="metadata"
              >
                <source
                  src="/videos/tools.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            Tools platform walkthrough — replace /videos/tools.mp4 with
            your actual project video.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Project Overview</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Turning useful web utilities into a scalable platform
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              The Tools project was designed around a simple idea: give
              visitors useful browser-based utilities without making the
              experience complicated.
            </p>

            <p>
              Instead of building a single-purpose website, the platform can
              bring multiple utilities together under one searchable,
              structured experience.
            </p>

            <p>
              This approach also creates opportunities for organic growth
              because individual tools can target specific problems and
              search queries.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Challenge"
            title="Making useful tools easy to find and use"
            text="Utility websites need to balance functionality, speed, usability, discoverability, and scalable content structure."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <InfoCard
              title="Simple Interaction"
              text="Users should understand what a tool does and how to use it almost immediately."
            />

            <InfoCard
              title="Search Visibility"
              text="Each useful tool can become a potential landing page for users searching for a specific solution."
            />

            <InfoCard
              title="Scalable Content"
              text="The platform needs a structure that allows additional tools and supporting content to be added over time."
            />
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Solution"
            title="A scalable utility-first web experience"
            text="The platform combines practical functionality with a structure that can support more tools, content, and organic search opportunities."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <SolutionCard
              number="01"
              title="Tool Experience"
              text="Each utility can focus on one specific user problem with clear inputs, instructions, actions, and results."
            />

            <SolutionCard
              number="02"
              title="Organized Platform"
              text="Tools can be grouped into logical categories so users can discover related utilities more easily."
            />

            <SolutionCard
              number="03"
              title="SEO Foundation"
              text="Individual tools can have dedicated URLs, useful descriptions, FAQs, internal links, and search-focused content."
            />

            <SolutionCard
              number="04"
              title="Future Expansion"
              text="The platform can grow with additional utilities, categories, content pages, APIs, accounts, and monetization features."
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Features & Functionality"
            title="What the Tools platform provides"
            text="A practical foundation for building a larger collection of useful online utilities."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-slate-900/60 p-7 transition hover:-translate-y-1 hover:border-amber-400/20 hover:bg-slate-900"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {feature.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>Technology</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Built for fast and scalable web utilities
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-400">
                A component-based frontend architecture makes it possible to
                build and maintain multiple tools while keeping the interface
                consistent across the platform.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-medium text-slate-200"
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-amber-300"
                  />
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>SEO & Organic Growth</SectionLabel>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Building a tools website with organic traffic potential
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
            <p>
              Online tools can be powerful SEO assets because users frequently
              search Google for specific problems they want to solve quickly.
              A useful tool can provide a direct answer to that search intent.
            </p>

            <p>
              Instead of relying on one homepage to rank for everything, a
              larger tools platform can create dedicated pages for individual
              utilities. Each page can target a specific topic while linking
              visitors to related tools.
            </p>

            <p>
              Strong technical SEO, descriptive page titles, useful
              explanations, internal linking, FAQs, fast loading pages, and
              genuinely helpful functionality can create a stronger
              foundation for organic search visibility.
            </p>

            <p>
              The platform can also be expanded with supporting educational
              articles, tutorials, comparisons, guides, and problem-solving
              content around each tool.
            </p>

            <p>
              This creates a broader content ecosystem where tools attract
              search visitors and supporting content helps users discover
              additional parts of the platform.
            </p>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Development Process"
            title="How the platform can grow"
            text="A structured approach makes it easier to continuously add useful utilities and improve search visibility."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProcessCard
              number="01"
              title="Research"
              text="Identify useful problems, search demand, competitors, and opportunities for new tools."
            />

            <ProcessCard
              number="02"
              title="Build"
              text="Create fast, focused utilities with reusable components and clear user workflows."
            />

            <ProcessCard
              number="03"
              title="Optimize"
              text="Improve usability, performance, mobile experience, metadata, content, and internal linking."
            />

            <ProcessCard
              number="04"
              title="Expand"
              text="Add new tools, categories, guides, FAQs, and supporting content to grow the platform."
            />
          </div>
        </div>
      </section>

      {/* BUSINESS VALUE */}
      <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Business Potential"
            title="More than a collection of simple utilities"
            text="A well-structured tools platform can become a long-term digital property."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <InfoCard
              title="Organic Acquisition"
              text="Individual utilities can target specific search intent and attract users looking for practical solutions."
            />

            <InfoCard
              title="Repeat Visitors"
              text="Useful tools can encourage users to return whenever they need the same functionality again."
            />

            <InfoCard
              title="Monetization"
              text="Depending on traffic and audience, the platform can support advertising, premium features, affiliate offers, or other models."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Online tools website questions"
            text="Common questions about building and growing a browser-based tools platform."
          />

          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium text-white">
                  {faq.question}

                  <ChevronDown
                    size={18}
                    className="shrink-0 text-amber-300 transition group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-amber-400/20 bg-amber-400/[0.06] p-8 text-center sm:p-12 lg:p-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
            <Zap size={25} />
          </div>

          <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">
            Need a custom tools platform?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            We build modern websites, online tools, AI systems, automation
            workflows, e-commerce platforms, and custom digital products
            designed around real business goals.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/923175265316?text=Hi%2C%20I%20want%20to%20discuss%20a%20tools%20platform."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Start a Conversation
              <MessageCircle size={17} />
            </a>

            <Link
              href="/#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              View More Projects
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -----------------------------
Reusable Components
------------------------------ */

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 max-w-3xl leading-7 text-slate-400">
        {text}
      </p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
      {children}
    </p>
  );
}

function MetaCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
        {title}
      </p>

      <p className="mt-2 font-semibold text-white">{value}</p>
    </div>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-7">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        {text}
      </p>
    </div>
  );
}

function SolutionCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
      <span className="text-sm font-semibold text-amber-300">
        {number}
      </span>

      <h3 className="mt-5 text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        {text}
      </p>
    </div>
  );
}

function ProcessCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-amber-300">
          {number}
        </span>

        <Zap size={17} className="text-slate-600" />
      </div>

      <h3 className="mt-6 text-lg font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        {text}
      </p>
    </div>
  );
}

