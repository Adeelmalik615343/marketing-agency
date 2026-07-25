"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);

    if (isLoading) {
      const root = document.documentElement;
      const body = document.body;

      root.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.height = "100%";
      root.style.height = "100%";
    }

    return () => {
      window.clearTimeout(timer);
      if (!isLoading) {
        const root = document.documentElement;
        const body = document.body;

        root.style.overflow = "";
        body.style.overflow = "";
        body.style.height = "";
        root.style.height = "";
      }
    };
  }, [isLoading]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl">
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10">
          <div className="absolute inset-0 animate-ping rounded-full border border-amber-300/50" />
          <Sparkles className="h-7 w-7 text-amber-300" />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Aether Studio
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Crafting your digital experience
          </h2>
        </div>

        <div className="h-1.5 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-[loadingBar_1.2s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400" />
        </div>
      </div>
    </div>
  );
}
