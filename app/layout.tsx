import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HTML Compiler - Online HTML Editor & Preview",
  description:
    "Modern online HTML compiler with real-time preview, syntax highlighting, and code completion. Write, test, and download your HTML code instantly.",
  keywords: [
    "HTML compiler",
    "online HTML editor",
    "HTML preview",
    "code editor",
    "web development",
    "HTML playground",
  ],
  authors: [{ name: "HTML Compiler" }],
  creator: "HTML Compiler",
  publisher: "HTML Compiler",
  generator: "HTML Compiler",
  metadataBase: new URL("https://htmlcompiler.top"),
  openGraph: {
    title: "HTML Compiler - Online HTML Editor & Preview",
    description:
      "Modern online HTML compiler with real-time preview, syntax highlighting, and code completion.",
    url: "https://htmlcompiler.top",
    siteName: "HTML Compiler",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HTML Compiler - Modern Online HTML Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML Compiler - Online HTML Editor & Preview",
    description:
      "Modern online HTML compiler with real-time preview, syntax highlighting, and code completion.",
    images: ["/og-image.jpg"],
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
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
