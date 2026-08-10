import type { Metadata } from "next";
<<<<<<< HEAD
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

=======
import Script from "next/script";
import "./globals.css";

>>>>>>> 248fe33 (ok)
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
