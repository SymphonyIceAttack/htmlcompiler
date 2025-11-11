"use client";

import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function FaqDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 text-xs sm:text-sm">
          <HelpCircle className="w-4 h-4 mr-2" />
          FAQ
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Frequently Asked Questions
          </DialogTitle>
          <DialogDescription>
            Common questions about HTML Compiler
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              What is HTML Compiler?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              HTML Compiler is an online code editor that lets you write HTML,
              CSS, and JavaScript code and see the results in real-time. It's
              perfect for quick prototyping, learning web development, or
              testing code snippets.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              How do I use the live preview feature?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Toggle the "Live Preview" switch in the header to enable automatic
              updates. When enabled, your preview will update as you type. When
              disabled, click the "Run" button to manually update the preview.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Can I download my code?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes! Click the "Download" button in the header to save your HTML
              file to your computer. The file will be saved as "index.html" and
              can be opened in any web browser.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Is my code saved automatically?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently, code is not saved automatically. Make sure to download
              your work before closing the browser tab. We recommend copying
              your code to a safe place or downloading it regularly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              What features are supported?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              HTML Compiler supports all standard HTML, CSS, and JavaScript
              features. You can use external libraries by including CDN links in
              your HTML. The editor includes syntax highlighting and code
              completion for better development experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Does it work on mobile devices?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes! HTML Compiler is fully responsive and works on tablets and
              mobile phones. On smaller screens, you can switch between the
              Editor and Preview views using the tabs below the header.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              How do I view the preview in fullscreen?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Click the fullscreen icon in the preview panel header to view your
              work in fullscreen mode. Press ESC to exit fullscreen.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
