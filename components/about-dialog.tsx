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
        </div>
      </DialogContent>
    </Dialog>
  );
}
