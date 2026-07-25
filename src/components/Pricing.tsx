import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Launch",
    price: "PKR 250,000",
    description: "Ideal for fast-moving startups and fresh launches.",
    features: ["Core strategic direction", "Premium landing page", "Responsive implementation", "Launch support"],
    featured: false,
  },
  {
    name: "Growth",
    price: "PKR 550,000",
    description: "A stronger package for scaling products and campaigns.",
    features: ["Full experience design", "Multi-page build", "Conversion refinement", "Priority communication"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom PKR",
    description: "For high-growth brands that need deeper product support.",
    features: ["Advanced strategy", "Product & marketing systems", "Ongoing optimization", "Dedicated collaboration"],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-900 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Pricing</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Flexible options for different stages of growth.</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 ${plan.featured ? "border-amber-400/40 bg-amber-400/10" : "border-white/10 bg-white/5"}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-amber-300/20 px-3 py-1 text-sm text-amber-100">Popular</span>
                )}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{plan.description}</p>
              <div className="mt-6 text-4xl font-semibold">{plan.price}</div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-amber-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
