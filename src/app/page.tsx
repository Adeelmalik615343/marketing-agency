"use client";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="min-h-screen p-10">
          <h1 className="text-5xl font-bold">Test Hero</h1>
          <p className="mt-5">
            If you can scroll from here, the problem is inside Hero.
          </p>
        </section>

        <Services />

        <section className="min-h-screen p-10">
          <h2 className="text-4xl font-bold">Bottom Test</h2>
        </section>
      </main>

      <Footer />
    </>
  );
}
