"use client";

const clients = [
  "Next.js",
  "React",
  "MERN",
  "Shopify",
  "WordPress",
  "WooCommerce",
  "OpenAI",
  "MongoDB",
  "Node.js",
  "Cloudinary",
  "Stripe",
  "Google",
];

export default function Clients() {
  const repeatedClients = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 py-10 sm:py-12">
      {/* Soft edge gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-950 to-transparent sm:w-32" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-950 to-transparent sm:w-32" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 sm:text-sm">
            Technologies & platforms we work with
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Modern tools and platforms used to build scalable digital
            products, automation systems, and online businesses.
          </p>
        </div>
      </div>

      {/* Infinite ticker */}
      <div className="mt-8 overflow-hidden">
        <div className="clients-ticker flex w-max">
          {repeatedClients.map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="mx-2 flex h-14 items-center rounded-full border border-white/10 bg-white/[0.035] px-6 text-sm font-medium text-slate-300 backdrop-blur-sm transition hover:border-amber-400/30 hover:bg-amber-400/5 hover:text-amber-200 sm:h-16 sm:px-8 sm:text-base"
            >
              <span className="mr-3 h-1.5 w-1.5 rounded-full bg-amber-400" />
              {client}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .clients-ticker {
          animation: clients-scroll 30s linear infinite;
        }

        .clients-ticker:hover {
          animation-play-state: paused;
        }

        @keyframes clients-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .clients-ticker {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
