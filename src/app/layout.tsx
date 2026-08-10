import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aether Studio | Premium Digital Agency",
  description:
    "A premium agency website built with Next.js, Tailwind CSS, and modern motion design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen">
        {children}

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z5QH5D56GJ"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'G-Z5QH5D56GJ');
          `}
        </Script>
      </body>
    </html>
  );
}
