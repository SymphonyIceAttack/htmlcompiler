"use client";

import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 text-xs sm:text-sm">
          <Info className="w-4 h-4 mr-2" />
          About
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">About HTML Compiler</DialogTitle>
          <DialogDescription>Your online HTML playground</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              HTML Compiler is designed to make web development accessible and
              enjoyable for everyone. Whether you're a beginner learning your
              first lines of code or an experienced developer testing a quick
              idea, we provide a simple, powerful environment to bring your
              ideas to life.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Real-time preview with live or manual update modes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Syntax highlighting powered by CodeMirror</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Dark and light theme support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Mobile-responsive design for coding on the go</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Quick download functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Fullscreen preview mode</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Technology</h3>
            <p className="text-muted-foreground leading-relaxed">
              Built with modern web technologies including Next.js, React,
              TypeScript, and Tailwind CSS. We use CodeMirror for the best code
              editing experience and shadcn/ui for beautiful, accessible
              components.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Get Started</h3>
            <p className="text-muted-foreground leading-relaxed">
              Start coding immediately with our preset template, or clear it and
              begin from scratch. Toggle live preview to see your changes in
              real-time, and download your work when you're ready. Happy coding!
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Open Source</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              HTML Compiler is open source and available on GitHub. We welcome
              contributions, bug reports, and feature requests from the
              community.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/SymphonyIceAttack/htmlcompiler"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
              <a
                href="https://htmlcompiler.top"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
