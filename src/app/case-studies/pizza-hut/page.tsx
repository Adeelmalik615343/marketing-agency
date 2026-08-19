
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ShoppingCart,
  Smartphone,
  LayoutGrid,
  MapPin,
  Utensils,
  Search,
  Zap,
  Code2,
  MessageCircle,
  ChevronDown,
  Monitor,
  Database,
} from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Restaurant Menu",
    text: "A structured food menu experience makes it easy for customers to browse available items, explore categories, and discover what they want to order.",
  },
  {
    icon: ShoppingCart,
    title: "Food Ordering",
    text: "Customers can select food items and move through a clear ordering journey designed around convenience and fast decision-making.",
  },
  {
    icon: LayoutGrid,
    title: "Product Categories",
    text: "Menu items are organized into clear sections so visitors can quickly find pizzas, meals, sides, drinks, and other available products.",
  },
  {
    icon: MapPin,
    title: "Delivery Experience",
    text: "The delivery section helps customers understand the ordering and delivery journey while providing a clear path toward placing an order.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    text: "The interface is designed to adapt across desktop, tablet, and mobile screens for customers ordering from different devices.",
  },
  {
    icon: Search,
    title: "Easy Product Discovery",
    text: "Clear navigation, structured content, and focused sections help customers move quickly from browsing to ordering.",
  },
  {
    icon: Monitor,
    title: "Modern User Interface",
    text: "The visual system combines strong food-focused presentation, clear calls to action, responsive layouts, and modern web interaction patterns.",
  },
  {
    icon: Database,
    title: "Application Structure",
    text: "The project provides a foundation that can be extended with additional restaurant functionality, integrations, and business workflows.",
  },
];

const technologies = [
  "React",
  "JavaScript",
  "Responsive UI",
  "Component-Based Architecture",
  "Modern CSS",
  "REST API Ready",
  "Mobile Optimization",
  "SEO Structure",
];

const faqs = [
  {
    question: "What type of website is the Pizza Hut project?",
    answer:
      "It is a restaurant and food-ordering web experience designed around menu discovery, product presentation, customer ordering, delivery information, and conversion-focused user journeys.",
  },
  {
    question: "What features does the restaurant website include?",
    answer:
      "The project includes a restaurant menu experience, food categories, product discovery, ordering-focused sections, delivery information, responsive layouts, and clear calls to action.",
  },
  {
    question: "Is the Pizza Hut website mobile responsive?",
    answer:
      "Yes. The interface is designed to provide a usable experience across desktop, tablet, and mobile devices, which is especially important for customers ordering food from smartphones.",
  },
  {
    question: "Can this restaurant website support online ordering?",
    answer:
      "Yes. The frontend structure can be connected to a backend ordering system, payment gateway, database, delivery management system, or third-party restaurant API.",
  },
  {
    question: "Can the design be customized for another restaurant?",
    answer:
      "Yes. The same approach can be adapted for restaurants, cafes, bakeries, pizza shops, fast-food businesses, cloud kitchens, and other food businesses.",
  },
  {
    question: "Can payment systems be added?",
    answer:
      "Yes. A custom restaurant platform can be integrated with suitable payment providers, cash-on-delivery workflows, order confirmation systems, and other payment options.",
  },
  {
    question: "Can a restaurant website include an admin panel?",
    answer:
      "Yes. A complete restaurant system can include an admin dashboard for managing products, prices, categories, orders, customers, promotions, and delivery information.",
  },
  {
    question: "Can you build a custom food-ordering website?",
    answer:
      "Yes. We build custom websites and digital systems for restaurants and businesses, including responsive interfaces, e-commerce functionality, automation, SEO, APIs, and custom business workflows.",
  },
];

export default function PizzaHutCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.10),transparent_35%)]" />
        <div className="absolute bottom-0 left-[5%] h-72 w-72 rounded-full bg-red-500/5 blur-[120px]" />

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
              <Utensils size={16} />
              Restaurant & Food Ordering Case Study
            </div>

            <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Building a modern{" "}
              <span className="text-amber-300">
                restaurant ordering experience
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              A responsive restaurant website designed around menu discovery,
              food ordering, delivery information, product presentation, and
              a smooth customer journey from browsing to conversion.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://pizzahutsitereadytouse.onrender.com/#delivery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                View Live Project
                <ExternalLink size={17} />
              </a>

              <a
                href="https://wa.me/923175265316?text=Hi%2C%20I%20want%20to%20discuss%20a%20restaurant%20website."
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
            <MetaCard title="Project Type" value="Restaurant Website" />
            <MetaCard title="Industry" value="Food & Delivery" />
            <MetaCard title="Focus" value="Online Ordering" />
            <MetaCard title="Experience" value="Responsive Web" />
          </div>
        </div>
      </section>

     {/* VIDEO */}
<section className="border-y border-white/10 bg-white/[0.02] px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <SectionHeading
      eyebrow="Project Walkthrough"
      title="See the restaurant experience in action"
      text="Show potential clients how the website works through a short walkthrough covering the homepage, menu, products, ordering journey, and delivery experience."
    />

    <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
      <div className="aspect-video">
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dol2tqymo&public_id=portfolio_final_xgigap"
          className="h-full w-full"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          title="Pizza Hut Restaurant Website Project Walkthrough"
        />
      </div>
    </div>

    <p className="mt-4 text-center text-sm text-slate-500">
      Restaurant website walkthrough — complete project demonstration.
    </p>
  </div>
</section>

      {/* OVERVIEW */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Project Overview</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Turning a restaurant website into a customer ordering journey
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              This project focuses on creating a modern restaurant web
              experience where customers can discover food, explore menu
              categories, understand delivery options, and move naturally
              toward ordering.
            </p>

            <p>
              Instead of treating the website as a simple collection of
              restaurant pages, the interface is structured around the
              customer journey. Every major section helps visitors understand
              the products and take the next step.
            </p>

            <p>
              The architecture can also serve as a foundation for a larger
              food-ordering platform with customer accounts, payments,
              delivery tracking, order management, promotions, analytics,
              and restaurant administration.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Challenge"
            title="Making food ordering simple and fast"
            text="Restaurant websites have to communicate products quickly while keeping the ordering journey easy to understand."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <InfoCard
              title="Product Discovery"
              text="Customers should be able to understand the menu and discover products without unnecessary navigation."
            />

            <InfoCard
              title="Conversion"
              text="The interface needs clear calls to action that guide visitors toward ordering instead of creating confusion."
            />

            <InfoCard
              title="Mobile Usage"
              text="Many food customers browse and order from smartphones, making responsive design a core requirement."
            />
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Solution"
            title="A conversion-focused restaurant experience"
            text="The project combines product presentation, menu structure, responsive design, delivery information, and ordering-focused interactions."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <SolutionCard
              number="01"
              title="Restaurant Interface"
              text="A modern customer-facing interface presents the restaurant, menu, products, offers, and important information in a structured experience."
            />

            <SolutionCard
              number="02"
              title="Menu & Products"
              text="Food categories and products are organized so customers can quickly browse options and understand what is available."
            />

            <SolutionCard
              number="03"
              title="Ordering Journey"
              text="Calls to action and ordering-focused sections create a clear path from discovering food to starting an order."
            />

            <SolutionCard
              number="04"
              title="Delivery Experience"
              text="Delivery-focused content gives customers a dedicated place to understand how the restaurant serves and delivers orders."
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Features & Functionality"
            title="What the restaurant platform delivers"
            text="The project demonstrates the core building blocks of a modern restaurant and food-ordering website."
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
              <SectionLabel>Technology & Architecture</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Built for a modern restaurant business
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-400">
                The project uses a modern component-based approach that can
                be expanded into a complete restaurant commerce system with
                APIs, databases, payment providers, customer accounts,
                analytics, and automation.
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

      {/* BUSINESS VALUE */}
      <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Business Value"
            title="Designed around how restaurant customers actually behave"
            text="A restaurant website should not only look attractive. It should help customers find food, understand the offer, and take action quickly."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <InfoCard
              title="Better Discovery"
              text="Organized menu content makes it easier for customers to find products and explore the restaurant's offering."
            />

            <InfoCard
              title="Stronger Conversion"
              text="Focused calls to action help reduce friction between discovering a product and beginning the ordering process."
            />

            <InfoCard
              title="Mobile Friendly"
              text="Responsive layouts allow customers to browse and order comfortably from phones, tablets, and desktops."
            />
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Development Process"
            title="How the restaurant experience was structured"
            text="A structured workflow keeps the website focused on usability, performance, maintainability, and future expansion."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProcessCard
              number="01"
              title="Plan"
              text="Define the restaurant journey, menu structure, target customers, and primary conversion actions."
            />

            <ProcessCard
              number="02"
              title="Design"
              text="Create the interface, product sections, responsive layouts, navigation, and ordering-focused user flow."
            />

            <ProcessCard
              number="03"
              title="Develop"
              text="Build reusable components and connect the required application functionality and business logic."
            />

            <ProcessCard
              number="04"
              title="Optimize"
              text="Improve responsiveness, usability, technical SEO, performance, and the overall customer experience."
            />
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Restaurant Website Development</SectionLabel>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            A modern food-ordering website built for digital growth
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
            <p>
              A modern restaurant website needs to do more than display a
              menu. It should help customers discover food, understand
              products, find delivery information, and quickly start an
              order.
            </p>

            <p>
              This Pizza Hut-inspired restaurant project demonstrates how a
              food business can use a responsive website to create a stronger
              online ordering experience. The interface is structured around
              menu discovery, product presentation, customer convenience,
              delivery information, and clear conversion paths.
            </p>

            <p>
              Restaurant website development can include much more than the
              frontend experience. A complete food-ordering platform can
              connect products to a database, provide customer accounts,
              integrate payment gateways, manage orders, connect delivery
              systems, and provide an administration dashboard.
            </p>

            <p>
              The same approach can be customized for pizza restaurants,
              fast-food businesses, cafes, bakeries, restaurants, cloud
              kitchens, catering companies, and food delivery startups.
            </p>

            <p>
              For businesses competing online, a fast and mobile-friendly
              restaurant website can become an important part of the
              customer acquisition and conversion strategy. Technical SEO,
              useful content, structured pages, strong internal linking, and
              a clear user journey can also help create a stronger foundation
              for organic search growth.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Restaurant website development questions"
            text="Common questions businesses ask when planning a restaurant website or online food-ordering platform."
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
            Need a restaurant or food-ordering website?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            We build modern restaurant websites, e-commerce platforms,
            AI-powered systems, automation workflows, SEO experiences, and
            custom digital products for businesses that want to grow online.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/923175265316?text=Hi%2C%20I%20want%20to%20discuss%20a%20restaurant%20website."
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

