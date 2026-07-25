import { ArrowRight, Send } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-amber-400/20 bg-slate-900/70 p-6 shadow-[0_0_80px_rgba(245,158,11,0.16)] sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Let’s build something memorable</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Ready to turn your idea into a premium digital experience?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Let&apos;s talk about your goals, your timeline, and the kind of brand presence you want to create.
              </p>
            </div>

            <a
              href="mailto:adeel61524387@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-amber-300"
            >
              <Send size={16} />
              Book a Discovery Call
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
