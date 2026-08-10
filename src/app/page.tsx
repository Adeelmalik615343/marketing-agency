"use client";

import { useEffect } from "react";


import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";

import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
      
        <Testimonials />
        <Pricing />
       
        <CTA />
      </main>

      <Footer />
    </>
  );
}
