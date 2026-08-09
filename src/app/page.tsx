"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("[data-reveal]")
    );

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
    

      <Navbar />

      <main>
        <Hero />
        <Clients />
        <Services />
        <WhyChoose />
        <Process />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden overflow-y-visible bg-slate-950 text-white">
      <LoadingScreen />
      <Navbar />
      <div data-reveal className="scroll-reveal">
        <Hero />
      </div>
      <div data-reveal className="scroll-reveal">
        <Clients />
      </div>
      <div data-reveal className="scroll-reveal">
        <Services />
      </div>
      <div data-reveal className="scroll-reveal">
        <WhyChoose />
      </div>
      <div data-reveal className="scroll-reveal">
        <Portfolio />
      </div>
      <div data-reveal className="scroll-reveal">
        <Process />
      </div>
      <div data-reveal className="scroll-reveal">
        <Testimonials />
      </div>
      <div data-reveal className="scroll-reveal">
        <Pricing />
      </div>
      <div data-reveal className="scroll-reveal">
        <FAQ />
      </div>
      <div data-reveal className="scroll-reveal">
        <CTA />
      </div>
      <div data-reveal className="scroll-reveal">
        <Footer />
      </div>
    </main>
  );
}
