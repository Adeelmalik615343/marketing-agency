
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://myweb-silk-three.vercel.app";
const siteName = "MyCompany";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: siteName,

  title: {
    default: "MyCompany | Premium Digital Agency",
    template: "%s | MyCompany",
  },

  description:
    "Premium digital agency website for web development, SEO, AI systems, growth marketing, and business automation.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "MyCompany | Premium Digital Agency",
    description:
      "Web development, AI automation, SEO, e-commerce, and digital growth solutions for modern businesses.",
    url: siteUrl,
    siteName: siteName,
    type: "website",
    images: ["/opengraph-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "MyCompany | Premium Digital Agency",
    description:
      "Premium digital agency website for web development, SEO, AI systems, growth marketing, and business automation.",
    images: ["/opengraph-image.png"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MyCompany",
  alternateName: "MyCompany Digital Agency",
  url: siteUrl,
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

        {/* Google Website Branding */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

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
