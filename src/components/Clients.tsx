const clients = ["Notion", "Stripe", "Linear", "Vercel", "Dropbox", "Framer"];

export default function Clients() {
  return (
    <section className="border-b border-slate-200 bg-white/80 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 sm:text-sm">
          Trusted by modern teams worldwide
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-lg font-semibold text-slate-600 shadow-sm"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
