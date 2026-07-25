import { Quote, Star } from "lucide-react";

const reviews = [
  {
    quote: "They elevated our brand story and gave us a launch experience that felt truly premium.",
    name: "Mina Cole",
    role: "Founder, Northstar Labs",
  },
  {
    quote: "The team created a site that feels sharp, fast, and incredibly easy to use.",
    name: "Dario Singh",
    role: "Product Lead, Forma",
  },
  {
    quote: "We saw momentum immediately after launch. The design and messaging made a real difference.",
    name: "Alicia Park",
    role: "Marketing Director, Nexo",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Trusted by founders who care about experience.</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="mt-6 flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/10 text-amber-300">
                  <Quote size={18} />
                </div>
                <p className="text-sm leading-7 text-slate-300">{review.quote}</p>
              </div>
              <div className="mt-6">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-slate-400">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
