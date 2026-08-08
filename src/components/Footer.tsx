import { ArrowUpRight, BadgeCheck, Mail, Send, ScanLine } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-16 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Aether Studio</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Premium  hy web experiences for ambitious brands.</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Strategy, design, and product execution tailored for founders who want standout digital presence.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a href="mailto:adeel61524387@gmail.com" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
            <Mail size={18} />
          </a>
          <a href="https://github.com/Adeelmalik615343" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
            <Send size={18} />
          </a>
          <a href="https://github.com/Adeelmalik615343" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
            <BadgeCheck size={18} />
          </a>
          <a href="https://github.com/Adeelmalik615343" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
            <ScanLine size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 px-4 pt-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 Aether Studio. All rights reserved.</p>
        <a href="#top" className="inline-flex items-center gap-2 text-amber-300 transition hover:text-amber-200">
          Back to top
          <ArrowUpRight size={16} />
        </a>
      </div>
    </footer>
  );
}
