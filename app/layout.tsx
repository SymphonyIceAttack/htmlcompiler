import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export function generateJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://htmlcompiler.top/#organization",
        name: "HTML Compiler",
        url: "https://htmlcompiler.top",
        logo: {
          "@type": "ImageObject",
          url: "https://htmlcompiler.top/icon-192x192.png",
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": "https://htmlcompiler.top/#website",
        url: "https://htmlcompiler.top",
        name: "HTML Compiler - Online HTML Editor & Preview",
        publisher: {
          "@id": "https://htmlcompiler.top/#organization",
        },
        inLanguage: "en",
        description:
          "Modern online HTML compiler with real-time preview, syntax highlighting, and instant download.",
      },
      {
        "@type": "WebApplication",
        "@id": "https://htmlcompiler.top/#webapp",
        url: "https://htmlcompiler.top",
        name: "HTML Compiler",
        alternateName: "Online HTML Editor",
        description:
          "Modern online HTML compiler with real-time preview, syntax highlighting, and code completion. Write, test, and download your HTML code instantly.",
        applicationCategory: "DeveloperApplication",
        applicationSubCategory: "Code Editor",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript",
        softwareVersion: "1.0",
        datePublished: "2025-01-01",
        author: {
          "@id": "https://htmlcompiler.top/#organization",
        },
        provider: {
          "@id": "https://htmlcompiler.top/#organization",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "Real-time HTML preview",
          "Syntax highlighting",
          "Code completion",
          "Instant download",
          "Mobile-responsive editor",
          "Dark/light theme support",
        ],
        screenshot: "https://htmlcompiler.top/og-image.jpg",
      },
    ],
  };
}

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "HTML Compiler - Online HTML Editor & Preview",
    template: "%s | HTML Compiler",
  },
  description:
    "Modern online HTML compiler with real-time preview, syntax highlighting, and code completion. Write, test, and download your HTML code instantly - free for developers.",
  keywords: [
    "HTML compiler",
    "online HTML editor",
    "HTML preview",
    "code editor",
    "web development",
    "HTML playground",
    "real-time preview",
    "syntax highlighting",
    "free HTML editor",
    "web coding",
  ],
  authors: [{ name: "HTML Compiler Team" }],
  creator: "HTML Compiler",
  publisher: "HTML Compiler",
  generator: "Next.js",
  metadataBase: new URL("https://htmlcompiler.top"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HTML Compiler - Online HTML Editor & Preview",
    description:
      "Modern online HTML compiler with real-time preview, syntax highlighting, and code completion. Write, test, and download your HTML code instantly - free for developers.",
    url: "https://htmlcompiler.top",
    siteName: "HTML Compiler",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HTML Compiler - Modern Online HTML Editor with Real-time Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML Compiler - Online HTML Editor & Preview",
    description:
      "Modern online HTML compiler with real-time preview, syntax highlighting, and code completion. Write, test, and download your HTML code instantly - free for developers.",
    images: ["/og-image.jpg"],
    creator: "@htmlcompiler",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        url: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateJsonLd();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
