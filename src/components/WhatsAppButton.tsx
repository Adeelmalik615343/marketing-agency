
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
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_10px_35px_rgba(34,197,94,0.35)] transition duration-300 hover:scale-110 hover:bg-green-600 sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={26} strokeWidth={2.2} />
      
      <span className="absolute right-16 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white shadow-lg sm:block">
        Chat with us
      </span>
    </a>
  );
}

