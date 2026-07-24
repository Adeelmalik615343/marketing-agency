import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "How quickly can we start?",
    answer: "Most projects begin within 1–2 weeks depending on scope and availability.",
  },
  {
    question: "Do you work with existing brands?",
    answer: "Yes. We can refresh an existing brand presence, improve messaging, or build from scratch.",
  },
  {
    question: "Can you support ongoing growth?",
    answer: "Absolutely. We offer ongoing optimization and expansion support for growing teams.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Questions founders usually ask before they book.</h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <ChevronRight size={18} className="text-amber-300" />
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
