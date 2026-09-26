
"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "923175265316";
  const message = encodeURIComponent(
    "Hi, I would like to discuss a project with you."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-white/20 bg-gradient-to-br from-green-400 to-green-600 py-2.5 pl-2.5 pr-5 text-white shadow-[0_12px_40px_rgba(34,197,94,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(34,197,94,0.5)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300/40 motion-reduce:transition-none sm:bottom-6 sm:right-6"
    >
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/20 motion-reduce:animate-none" />
        <MessageCircle className="relative" size={23} strokeWidth={2.2} />
      </span>
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">Quick chat</span>
        <span className="mt-0.5 whitespace-nowrap text-sm font-semibold">Chat on WhatsApp</span>
      </span>
    </a>
  );
}

