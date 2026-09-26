import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe2,
  Heart,
  MapPin,
  MessageCircle,
  PackageCheck,
  Palette,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Truck,
} from "lucide-react";

const highlights = [
  {
    icon: ShoppingBag,
    title: "Curated collections",
    text: "New arrivals, signature styles, luxury pret, embroidered designs, and everyday edits are organized to make browsing feel effortless.",
  },
  {
    icon: Smartphone,
    title: "Responsive storefront",
    text: "A mobile-friendly shopping experience helps customers explore the collection from the devices they use every day.",
  },
  {
    icon: PackageCheck,
    title: "Product-led shopping",
    text: "Collection pages, product imagery, sizing guidance, and clear calls to action help shoppers move from discovery toward an order.",
  },
  {
    icon: Truck,
    title: "Nationwide delivery",
    text: "Delivery information and convenient order options make the store relevant to customers across Pakistan.",
  },
];

const journey = [
  {
    number: "01",
    title: "Discover",
    text: "Explore new arrivals and carefully selected edits, from everyday wear to special-occasion styles.",
  },
  {
    number: "02",
    title: "Choose",
    text: "Browse the collection, review product details, and find the right style and size.",
  },
  {
    number: "03",
    title: "Order",
    text: "Continue through a simple online shopping journey with convenient order and payment options.",
  },
  {
    number: "04",
    title: "Receive",
    text: "Have the selected Zarqash pieces delivered to your doorstep anywhere in Pakistan.",
  },
];

const faqs = [
  {
    question: "What is the Zarqash Collection website?",
    answer:
      "It is an online fashion storefront for Zarqash Collection, presenting Pakistani fashion through curated collections, product discovery, and convenient ordering options.",
  },
  {
    question: "What collections can shoppers explore?",
    answer:
      "The storefront highlights new arrivals, signature styles, luxury pret, embroidered designs, everyday elegance, and customer favorites.",
  },
  {
    question: "Can customers shop from across Pakistan?",
    answer:
      "The site promotes nationwide delivery, making the collection accessible to shoppers throughout Pakistan.",
  },
  {
    question: "What is the starting price shown on the site?",
    answer:
      "The displayed edits start from PKR 2,499. Prices may vary by design, fabric, size, and collection; shoppers should check the live store for current product pricing.",
  },
];

export default function ZarqashCollectionCaseStudy() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] rounded-full bg-amber-400/[0.08] blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-orange-500/[0.06] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-200"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200">
                <Sparkles size={16} />
                Fashion E-commerce Case Study
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                An elegant online home for{" "}
                <span className="text-amber-300">Zarqash Collection.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                A fashion storefront designed to bring Pakistani style,
                thoughtfully selected collections, and a convenient shopping
                journey together in one polished digital experience.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://marketing-agency-main-main.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  Visit Live Store
                  <ExternalLink size={17} />
                </a>
                <a
                  href="https://wa.me/923175265316?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20fashion%20e-commerce%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-white transition hover:border-amber-400/30 hover:bg-amber-400/5"
                >
                  Discuss a Similar Project
                  <MessageCircle size={17} />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-amber-400/15 via-transparent to-orange-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#17120e] p-3 shadow-[0_35px_100px_rgba(0,0,0,0.45)]">
                <div className="relative flex min-h-[26rem] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-amber-100/10 bg-[radial-gradient(ellipse_at_75%_15%,rgba(251,191,36,0.15),transparent_38%),linear-gradient(145deg,#2a2119,#110f0d_66%)] p-7 sm:p-9">
                  <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.3em] text-amber-100/60">
                    <span>Zarqash Collection</span>
                    <span>New Collection 2026</span>
                  </div>

                  <div className="relative py-12 text-center">
                    <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/10 sm:h-64 sm:w-64" />
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/10 sm:h-48 sm:w-48" />
                    <p className="relative text-xs uppercase tracking-[0.35em] text-amber-200/70">Elegance, made for you.</p>
                    <p className="relative mt-5 font-serif text-5xl tracking-[0.12em] text-amber-50 sm:text-6xl">ZARQASH</p>
                    <p className="relative mt-3 text-[10px] uppercase tracking-[0.4em] text-amber-100/50">Discover your signature style</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-5 text-xs text-amber-100/70">
                    <span>Pakistani fashion</span>
                    <span className="inline-flex items-center gap-2"><MapPin size={13} /> Delivered nationwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetaCard icon={ShoppingBag} title="Project Type" value="Fashion storefront" />
            <MetaCard icon={Globe2} title="Market" value="Pakistan" />
            <MetaCard icon={Palette} title="Brand Direction" value="Timeless elegance" />
            <MetaCard icon={MapPin} title="Fulfilment" value="Nationwide delivery" />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Project Overview</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Fashion discovery shaped around the Zarqash brand
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              Zarqash Collection brings together contemporary fashion and
              Pakistani elegance. The website introduces the brand through a
              refined visual identity and guides shoppers into a collection
              organized around different styles and occasions.
            </p>
            <p>
              The experience gives space to new arrivals, signature designs,
              luxury pret, embroidered pieces, everyday edits, and customer
              favorites, helping visitors find a relevant place to start.
            </p>
            <p>
              Product discovery is supported by sizing guidance, clear price
              ranges, convenient ordering options, customer reassurance, and
              nationwide delivery messaging.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Experience"
            title="A storefront that makes every collection easy to explore"
            text="The shopping journey connects brand storytelling with practical product discovery, so customers can move from inspiration to a collection that fits their style."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-amber-400/25 hover:bg-white/[0.05]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/15 bg-amber-400/10 text-amber-300">
                    <Icon size={21} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Shopping Journey"
            title="From first look to doorstep"
            text="A clear, familiar flow helps shoppers understand how to browse, choose, order, and receive their Zarqash pieces."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step) => (
              <article key={step.number} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-amber-300">{step.number}</span>
                  <ArrowRight size={17} className="text-amber-300/70" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Brand & Commerce</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A polished presentation for Pakistani fashion
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              Warm editorial styling, elegant collection language, and
              product-focused navigation support the brand promise: premium
              fabrics, thoughtful designs, and convenient shopping from
              anywhere in Pakistan.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["New arrivals", "Signature edit", "Luxury pret", "Everyday elegance", "PKR pricing", "WhatsApp support"].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300">{tag}</span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-amber-400/15 bg-gradient-to-br from-amber-400/[0.09] via-white/[0.025] to-transparent p-7 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300"><Heart size={22} /></div>
            <h3 className="mt-7 text-2xl font-semibold">Made for the modern Pakistani woman.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              The store pairs the emotional appeal of fashion with useful
              shopping details: fabric and design highlights, sizing support,
              visible starting prices, easy ordering, and delivery across the
              country.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <ValueCard title="From" value="PKR 2,499" />
              <ValueCard title="Delivery" value="Nationwide" />
              <ValueCard title="Shopping" value="Online" />
              <ValueCard title="Style" value="Pakistani" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="About the Zarqash Collection experience"
            text="A few details about the fashion storefront and the customer journey."
          />
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium text-white">
                  {faq.question}
                  <ArrowRight size={17} className="shrink-0 text-amber-300 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-amber-400/[0.1] via-white/[0.025] to-transparent p-8 text-center sm:p-12 lg:p-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300"><Sparkles size={24} /></div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Your next favorite look is waiting</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Discover elegant fashion, made for you.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Explore Zarqash Collection for thoughtfully selected Pakistani
            fashion, premium fabrics, and styles for everyday moments and
            special occasions.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://marketing-agency-main-main.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-300">
              Shop Zarqash
              <ExternalLink size={17} />
            </a>
            <Link href="/#work" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
              More case studies
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-3xl leading-7 text-slate-400">{text}</p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">{children}</p>;
}

function MetaCard({ icon: Icon, title, value }: { icon: typeof ShoppingBag; title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center gap-3 text-amber-300"><Icon size={18} /><p className="text-xs uppercase tracking-[0.15em] text-slate-500">{title}</p></div>
      <p className="mt-3 font-semibold text-white">{value}</p>
    </div>
  );
}

function ValueCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
      <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500">{title}</p>
      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
