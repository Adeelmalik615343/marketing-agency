
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ShoppingCart,
  ShieldCheck,
  CreditCard,
  LayoutDashboard,
  Database,
  Smartphone,
  Search,
  Zap,
  Code2,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Shopping Cart",
    text: "Customers can browse products, add items to their cart, update quantities, and review their order before checkout.",
  },
  {
    icon: ShieldCheck,
    title: "Authentication",
    text: "Secure user authentication provides a smoother experience for customers and protects account-specific functionality.",
  },
  {
    icon: CreditCard,
    title: "Checkout System",
    text: "A streamlined checkout experience designed to reduce friction and make the purchasing journey simple.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Management",
    text: "Administrative functionality makes it easier to manage products, orders, and important store information.",
  },
  {
    icon: Database,
    title: "Database Integration",
    text: "Product and application data is connected to a structured backend and database architecture.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    text: "The interface adapts across desktop, tablet, and mobile devices for a consistent shopping experience.",
  },
];

const technologies = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "JavaScript",
  "REST API",
  "JWT Authentication",
  "Responsive UI",
];

const faqs = [
  {
    question: "What type of e-commerce website was built?",
    answer:
      "This project is a full-stack e-commerce experience designed around product browsing, authentication, shopping cart functionality, checkout flows, and backend data management.",
  },
  {
    question: "What technologies were used?",
    answer:
      "The project uses modern full-stack technologies including React, Node.js, Express, MongoDB, Mongoose, JavaScript, REST APIs, and JWT-based authentication.",
  },
  {
    question: "Does the website have a backend?",
    answer:
      "Yes. The project includes a backend architecture for handling application logic, APIs, authentication, and database-connected functionality.",
  },
  {
    question: "Is the e-commerce website responsive?",
    answer:
      "Yes. The interface is designed to work across desktop, tablet, and mobile screen sizes.",
  },
  {
    question: "Can a similar e-commerce system be customized?",
    answer:
      "Yes. The architecture can be adapted for different businesses, products, payment providers, shipping requirements, customer accounts, and administrative workflows.",
  },
  {
    question: "Can you build an e-commerce website for my business?",
    answer:
      "Yes. We can build custom e-commerce websites and applications based on your products, target customers, business model, and required integrations.",
  },
];

export default function FullProjectCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-amber-400/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

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
              <Code2 size={16} />
              Full-Stack E-commerce Case Study
            </div>

            <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Building a modern{" "}
              <span className="text-amber-300">
                full-stack e-commerce platform
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              A complete e-commerce experience combining a modern frontend,
              backend APIs, authentication, database integration, shopping
              functionality, and a responsive user experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://full-project-5.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                View Live Project
                <ExternalLink size={17} />
              </a>

              <a
                href="https://wa.me/923175265316?text=Hi%2C%20I%20want%20to%20discuss%20an%20e-commerce%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-white transition hover:bg-white/[0.07]"
              >
                Discuss a Similar Project
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* PROJECT META */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetaCard title="Project Type" value="E-commerce" />
            <MetaCard title="Architecture" value="Full Stack" />
            <MetaCard title="Frontend" value="React" />
            <MetaCard title="Backend" value="Node + Express" />
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Project Walkthrough"
            title="See the e-commerce experience in action"
            text="Use this section for your project walkthrough video. Showing the actual product helps visitors understand the functionality instead of relying only on screenshots."
          />

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
            <div className="aspect-video">
              {https://player.cloudinary.com/embed/?cloud_name=dol2tqymo&public_id=home_20260813_104516_818_FINAL_jdkjd9}
              <video
                className="h-full w-full object-cover"
                controls
                preload="metadata"
              >
                <source src="https://player.cloudinary.com/embed/?cloud_name=dol2tqymo&public_id=home_20260813_104516_818_FINAL_jdkjd9"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            Full project walkthrough — replace /videos/full-project.mp4 with
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
              From storefront interface to backend system
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              This project was developed as a complete full-stack e-commerce
              application rather than a simple static storefront. The goal was
              to combine a polished customer-facing interface with the backend
              functionality required by a real digital commerce product.
            </p>

            <p>
              The application connects the frontend with backend APIs and a
              database so that important business data can be handled
              dynamically.
            </p>

            <p>
              The result is a scalable foundation that can be extended with
              additional products, payment providers, shipping systems,
              customer accounts, analytics, marketing automation, and other
              business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Challenge"
            title="Creating more than just a product catalog"
            text="Modern e-commerce requires the frontend experience and backend architecture to work together."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <InfoCard
              title="User Experience"
              text="Customers need a clear path from discovering products to completing an order."
            />

            <InfoCard
              title="Application Logic"
              text="The application needs backend APIs and structured data handling for dynamic functionality."
            />

            <InfoCard
              title="Scalability"
              text="The foundation should allow additional features and integrations to be added later."
            />
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Solution"
            title="A connected digital commerce system"
            text="The project combines frontend development, backend engineering, database integration, and responsive UX into one application."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <SolutionCard
              number="01"
              title="Frontend Experience"
              text="A responsive React interface provides the customer-facing shopping experience with reusable components and structured product flows."
            />

            <SolutionCard
              number="02"
              title="Backend APIs"
              text="Node.js and Express provide server-side functionality and APIs that connect the frontend to application data."
            />

            <SolutionCard
              number="03"
              title="Database"
              text="MongoDB and Mongoose provide structured persistence for application and product-related data."
            />

            <SolutionCard
              number="04"
              title="Authentication"
              text="Authentication functionality allows the application to support account-based experiences and protected functionality."
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Features & Functionality"
            title="What the platform can do"
            text="The project demonstrates the core functionality required to build a modern full-stack e-commerce application."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-slate-900/60 p-7 transition hover:border-amber-400/20 hover:bg-slate-900"
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
              <SectionLabel>Technology Stack</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Built with modern web technologies
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-400">
                The technology stack was selected to provide a modern
                development workflow, reusable frontend architecture,
                backend APIs, database connectivity, and room for future
                expansion.
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

      {/* DEVELOPMENT PROCESS */}
      <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Development Process"
            title="How the system was built"
            text="A structured development process keeps the product maintainable and makes future improvements easier."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProcessCard
              number="01"
              title="Plan"
              text="Define the user journey, features, architecture, and project requirements."
            />

            <ProcessCard
              number="02"
              title="Build"
              text="Develop reusable frontend components, APIs, authentication, and database functionality."
            />

            <ProcessCard
              number="03"
              title="Test"
              text="Check responsive layouts, user flows, application functionality, and integration points."
            />

            <ProcessCard
              number="04"
              title="Deploy"
              text="Deploy the application and prepare the system for future improvements and integrations."
            />
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Why This Project Matters</SectionLabel>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            A practical example of full-stack e-commerce development
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
            <p>
              A professional e-commerce website needs more than attractive
              pages. It needs a reliable connection between the customer
              interface, application logic, data, authentication, and
              business workflows.
            </p>

            <p>
              This project demonstrates how a modern e-commerce application
              can be structured using React on the frontend and Node.js,
              Express, and MongoDB on the backend.
            </p>

            <p>
              The same approach can be adapted for online stores, retail
              businesses, product companies, subscription businesses, and
              other organizations that need a custom commerce experience.
            </p>

            <p>
              Instead of forcing every business into the same template, a
              custom e-commerce system can be designed around the products,
              customers, operations, marketing strategy, and integrations
              that matter to the business.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="E-commerce development questions"
            text="Answers to common questions about building custom e-commerce websites and applications."
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
            Need a custom e-commerce website?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            We build modern websites, e-commerce platforms, AI systems,
            automation workflows, and custom digital products for businesses
            that want to grow online.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/923175265316?text=Hi%2C%20I%20want%20to%20discuss%20a%20custom%20e-commerce%20website."
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
   Reusable page components
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
    <div className="max-w-3xl">
      <SectionLabel>{eyebrow}</SectionLabel>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-slate-400">{text}</p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
      {children}
    </div>
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
      <p className="text-xs uppercase tracking-wider text-slate-500">
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
      <h3 className="text-lg font-semibold">{title}</h3>

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
    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
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

