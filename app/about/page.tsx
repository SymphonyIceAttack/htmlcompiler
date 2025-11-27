import { Code2, Heart, Lightbulb, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us - HTML Compiler | About Our Online HTML Editor",
  description:
    "Learn about HTML Compiler, the free online HTML editor with live preview. Our mission is to make web development accessible to everyone through simple yet powerful tools.",
  keywords: [
    "about HTML compiler",
    "online code editor",
    "web development tools",
    "HTML editor mission",
  ],
};

export default function AboutPage() {
  return (
    <>
      <PageHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-balance text-foreground">
              About HTML Compiler
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              We're on a mission to make web development accessible, simple, and
              enjoyable for everyone, from beginners to professionals.
            </p>
          </div>

          <div className="mb-12 rounded-xl overflow-hidden border-2 border-border">
            <Image
              src="/images/about-hero.jpg"
              alt="HTML Compiler - Code Editor Visualization"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>

          <Card className="mb-8 border-2 border-primary bg-card">
            <CardContent className="py-12">
              <div className="flex flex-col items-center text-center">
                <Code2 className="w-20 h-20 text-primary mb-6" />
                <h2 className="text-4xl font-bold mb-4 text-foreground">
                  Empowering Web Developers
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                  HTML Compiler was born from a simple idea: everyone should
                  have access to powerful web development tools without the
                  hassle of complex setup or expensive software. Our online
                  editor provides a clean, intuitive interface where you can
                  write, test, and share HTML, CSS, and JavaScript code
                  instantly.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card className="border-2 border-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-8 h-8 text-yellow-500" />
                  <CardTitle className="text-2xl text-foreground">
                    Our Mission
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize web development by providing free, high-quality
                  tools that enable anyone to create and experiment with web
                  technologies. We believe that learning to code should be
                  accessible, affordable, and enjoyable for everyone, regardless
                  of their background or technical expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-500" />
                  <CardTitle className="text-2xl text-foreground">
                    Our Community
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We serve thousands of developers, students, educators, and
                  hobbyists worldwide. From computer science students learning
                  their first HTML tags to seasoned developers prototyping new
                  ideas, our platform supports a diverse and growing community
                  of web creators.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 border-2 border-border bg-card">
            <CardHeader>
              <CardTitle className="text-3xl text-foreground text-center">
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                HTML Compiler started as a small project to solve a common
                problem: the need for a simple, fast, and reliable online HTML
                editor. We noticed that existing tools were either too
                complicated, required sign-ups, or lacked essential features
                like live preview.
              </p>
              <p>
                In 2024, we set out to create something different—a tool that
                puts the power of web development in everyone's hands without
                barriers. We focused on building a clean, responsive interface
                with real-time preview, syntax highlighting, and all the
                features developers need to be productive.
              </p>
              <p>
                Today, HTML Compiler continues to evolve based on feedback from
                our community. We're committed to keeping it free, improving
                performance, and adding features that matter most to our users.
                Every line of code we write is guided by our commitment to
                simplicity and accessibility.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card className="border-2 border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground text-center">
                  Free Forever
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  HTML Compiler will always be free to use. We believe powerful
                  tools shouldn't come with a price tag.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground text-center">
                  Privacy First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Your code stays on your device. We don't store your work or
                  track your activity on our platform.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground text-center">
                  Always Improving
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  We continuously update and improve the platform based on user
                  feedback and modern web standards.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12 rounded-xl overflow-hidden border-2 border-border">
            <Image
              src="/images/team-hero.jpg"
              alt="Our Development Team"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>

          <div className="mb-12 rounded-xl overflow-hidden border-2 border-border">
            <Image
              src="/images/community.jpg"
              alt="Our Community"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>

          <Card className="mb-8 border-2 border-primary bg-card">
            <CardHeader>
              <CardTitle className="text-3xl text-foreground text-center flex items-center justify-center gap-3">
                <Heart className="w-8 h-8 text-red-500" />
                Built with Love
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                HTML Compiler is built by a passionate team of developers who
                believe in open-source values and the power of community. We
                pour our heart into every feature, making sure it meets the
                highest standards of quality and usability.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border bg-card">
            <CardContent className="py-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Join Our Community
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're learning to code, teaching others, or building
                the next big thing, we'd love to have you as part of our
                community. Start coding today and see what you can create!
              </p>
              <a
                href="/"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Start Coding Now
              </a>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
