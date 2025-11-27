import { Bug, Lightbulb, Mail, MessageSquare } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us - HTML Compiler | Get in Touch",
  description:
    "Contact HTML Compiler team for support, feedback, or questions. We're here to help with any issues or suggestions about our online HTML editor.",
  keywords: [
    "contact HTML compiler",
    "HTML editor support",
    "report bug",
    "feature request",
    "get help",
  ],
};

export default function ContactPage() {
  return (
    <>
      <PageHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-balance text-foreground">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Have a question, suggestion, or found a bug? We'd love to hear
              from you. Choose the best way to reach us below.
            </p>
          </div>

          <div className="mb-12 rounded-xl overflow-hidden border-2 border-border">
            <Image
              src="/images/contact-hero.jpg"
              alt="Contact Us - Get in Touch"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <Card className="border-2 border-border bg-card hover:border-primary transition-colors flex flex-col">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <Mail className="w-12 h-12 text-primary mb-3" />
                  <CardTitle className="text-lg text-foreground">
                    Email Support
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="mt-auto">
                <p className="text-muted-foreground text-sm text-center mb-4 min-h-[2.5rem] flex items-center justify-center">
                  For general questions and support
                </p>
                <a
                  href="mailto:support@htmlcompiler.top"
                  className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground text-center font-semibold py-3 px-4 rounded-lg transition-colors text-sm break-all"
                >
                  support@htmlcompiler.top
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card hover:border-blue-500 transition-colors flex flex-col">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <Bug className="w-12 h-12 text-blue-600 mb-3" />
                  <CardTitle className="text-lg text-foreground">
                    Report a Bug
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="mt-auto">
                <p className="text-muted-foreground text-sm text-center mb-4 min-h-[2.5rem] flex items-center justify-center">
                  Found an issue? Let us know
                </p>
                <a
                  href="mailto:bugs@htmlcompiler.top"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors text-sm break-all"
                >
                  bugs@htmlcompiler.top
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card hover:border-green-500 transition-colors flex flex-col">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <Lightbulb className="w-12 h-12 text-green-600 mb-3" />
                  <CardTitle className="text-lg text-foreground">
                    Feature Request
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="mt-auto">
                <p className="text-muted-foreground text-sm text-center mb-4 min-h-[2.5rem] flex items-center justify-center">
                  Have an idea? We'd love to hear it
                </p>
                <a
                  href="mailto:ideas@htmlcompiler.top"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors text-sm break-all"
                >
                  ideas@htmlcompiler.top
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card hover:border-pink-500 transition-colors flex flex-col">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <MessageSquare className="w-12 h-12 text-pink-600 mb-3" />
                  <CardTitle className="text-lg text-foreground">
                    General Inquiry
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="mt-auto">
                <p className="text-muted-foreground text-sm text-center mb-4 min-h-[2.5rem] flex items-center justify-center">
                  Business and partnerships
                </p>
                <a
                  href="mailto:hello@htmlcompiler.top"
                  className="block w-full bg-pink-600 hover:bg-pink-700 text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors text-sm break-all"
                >
                  hello@htmlcompiler.top
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 border-2 border-border bg-card">
            <CardHeader>
              <CardTitle className="text-3xl text-foreground text-center">
                How Can We Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Common Reasons to Contact Us
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Having trouble with the editor or preview not working
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Reporting a bug or technical issue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Requesting a new feature or enhancement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Asking about how to use specific features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sharing feedback about your experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Business inquiries or partnership opportunities</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Before You Contact Us
                </h3>
                <p className="text-muted-foreground mb-3">
                  To help us assist you better, please check if your question is
                  answered in our{" "}
                  <a href="/faq" className="text-primary hover:underline">
                    FAQ section
                  </a>{" "}
                  or try the following:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Refresh the page and try again</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Clear your browser cache and cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Try using a different browser</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Check if JavaScript is enabled in your browser</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Response Time
                </h3>
                <p className="text-muted-foreground">
                  We typically respond to emails within 24-48 hours during
                  business days. For urgent bugs or critical issues, please mark
                  your email as "Urgent" and we'll prioritize it accordingly.
                  Bug reports with clear steps to reproduce are usually resolved
                  faster.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary bg-card">
            <CardContent className="py-8 text-center">
              <h2 className="text-2xl font-bold mb-3 text-foreground">
                We're Here to Help!
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Your feedback helps us improve HTML Compiler. Whether it's a
                simple question or a complex issue, don't hesitate to reach out.
                We're committed to providing the best possible experience for
                our users.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:support@htmlcompiler.top"
                  className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Send an Email
                </a>
                <a
                  href="/faq"
                  className="inline-block bg-muted hover:bg-muted/80 text-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Browse FAQ
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
