import { Database, Eye, Lock, Shield } from "lucide-react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy - HTML Compiler | Your Privacy Matters",
  description:
    "Read our privacy policy to understand how HTML Compiler protects your data and privacy while using our online HTML editor with live preview.",
  keywords: [
    "privacy policy",
    "HTML compiler privacy",
    "data protection",
    "online editor privacy",
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-balance text-foreground">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: November 27, 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-2 border-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl text-foreground">
                    Information We Collect
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  HTML Compiler is designed with privacy in mind. We collect
                  minimal information to provide our services:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Code Data:</strong> Your HTML, CSS, and JavaScript
                      code is processed locally in your browser and is not
                      stored on our servers unless you explicitly use features
                      that require it.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Usage Data:</strong> We may collect anonymous
                      analytics data about how you use the editor (page views,
                      features used) to improve our service. This data cannot be
                      traced back to you personally.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Device Information:</strong> Basic information
                      like browser type, screen size, and operating system to
                      optimize the editor for your device.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl text-foreground">
                    How We Use Your Information
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Provide and maintain the HTML Compiler service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Improve the editor's performance and features based on
                      usage patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Respond to your questions and support requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Ensure the security and integrity of our service
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl text-foreground">
                    Data Protection
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We implement appropriate security measures to protect your
                  information:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>All data transmission is encrypted using HTTPS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      We do not store your code on our servers by default
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Access to any stored data is strictly limited and
                      monitored
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      We regularly review and update our security practices
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Eye className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl text-foreground">
                    Your Rights
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Access any personal information we have about you
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Request correction of inaccurate or incomplete information
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Opt-out of non-essential data collection</span>
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a
                    href="mailto:privacy@htmlcompiler.top"
                    className="text-primary hover:underline"
                  >
                    privacy@htmlcompiler.top
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Third-Party Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  HTML Compiler may use third-party services to enhance
                  functionality:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>CDN Providers:</strong> To deliver static assets
                      (CSS, JavaScript) efficiently. These providers may collect
                      basic usage analytics.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Analytics Services:</strong> Anonymous usage
                      statistics to help us improve the editor.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Error Monitoring:</strong> To identify and fix
                      bugs in the application.
                    </span>
                  </li>
                </ul>
                <p className="mt-4">
                  These third parties have their own privacy policies governing
                  how they handle your data.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We use minimal cookies to enhance your experience:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Essential Cookies:</strong> Required for the
                      editor to function properly
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Preference Cookies:</strong> Remember your theme
                      choice (dark/light mode)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Analytics Cookies:</strong> Anonymous usage
                      statistics (you can opt out)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Changes to This Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We may update this privacy policy from time to time. When we
                  do, we will:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Post the updated policy on this page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Update the "Last updated" date at the top of the policy
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Notify users of significant changes via email or site
                      notification
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-card">
              <CardContent className="py-8 text-center">
                <h2 className="text-2xl font-bold mb-3 text-foreground">
                  Questions About Privacy?
                </h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about this privacy policy or how we
                  handle your data, please don't hesitate to contact us.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:privacy@htmlcompiler.top"
                    className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Email Privacy Team
                  </a>
                  <a
                    href="/contact"
                    className="inline-block bg-muted hover:bg-muted/80 text-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
