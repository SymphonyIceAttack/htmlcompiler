"use client";

import { html } from "@codemirror/lang-html";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import {
  BookOpen,
  Code2,
  Download,
  Eye,
  HelpCircle,
  Info,
  Mail,
  Maximize2,
  Play,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const defaultHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to HTML Compiler</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    
    .container {
      max-width: 800px;
      width: 100%;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      padding: 3rem;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      animation: fadeIn 0.6s ease-out;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    h1 {
      font-size: 2.5rem;
      color: #667eea;
      margin-bottom: 1rem;
      text-align: center;
    }
    
    p {
      color: #666;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin: 2rem 0;
    }
    
    .feature {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1.5rem;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s ease;
    }
    
    .feature:hover {
      transform: translateY(-5px);
    }
    
    .feature h3 {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }
    
    .feature p {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.9);
    }
    
    button {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: block;
      margin: 2rem auto 0;
    }
    
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✨ HTML Compiler</h1>
    <p>Welcome to the online HTML compiler! Edit your code on the left and see live preview on the right.</p>
    
    <div class="features">
      <div class="feature">
        <h3>🎨 Live Preview</h3>
        <p>See your changes in real-time</p>
      </div>
      <div class="feature">
        <h3>💾 Quick Download</h3>
        <p>Export your work instantly</p>
      </div>
      <div class="feature">
        <h3>🚀 Easy to Use</h3>
        <p>Zero config, start creating now</p>
      </div>
    </div>
    
    <button onclick="changeBackground()">Click to Change Background</button>
  </div>
  
  <script>
    function changeBackground() {
      const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.background = randomColor;
    }
  </script>
</body>
</html>`;

export function HtmlCompiler() {
  const [code, setCode] = useState(defaultHtml);
  const [livePreview, setLivePreview] = useState(false);
  const [mobileView, setMobileView] = useState<"editor" | "preview">("editor");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    updatePreview();
  }, []);

  useEffect(() => {
    if (livePreview) {
      updatePreview();
    }
  }, [code, livePreview]);

  useEffect(() => {
    if (mobileView === "preview") {
      const timer = setTimeout(() => {
        updatePreview();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [mobileView, code]);

  const updatePreview = () => {
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(code);
        iframeDoc.close();
      }
    }
  };

  const handleRun = () => {
    if (!livePreview) {
      updatePreview();
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setCode("");
  };

  const handleFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 text-primary">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
                <h1 className="text-base sm:text-xl font-bold">
                  HTML Compiler
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="h-8 text-xs sm:text-sm"
              >
                <Link
                  href="/posts"
                  className="flex items-center gap-1.5"
                  scroll={false}
                >
                  <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Blog</span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="h-8 text-xs sm:text-sm"
              >
                <Link href="/faq" className="flex items-center gap-1.5">
                  <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>FAQ</span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="h-8 text-xs sm:text-sm"
              >
                <Link href="/about" className="flex items-center gap-1.5">
                  <Info className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>About</span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="h-8 text-xs sm:text-sm"
              >
                <Link href="/contact" className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Contact</span>
                </Link>
              </Button>

              {/* Theme Toggle Button */}
              <ThemeToggle />

              <div className="flex items-center gap-2">
                <Switch
                  id="live-preview"
                  checked={livePreview}
                  onCheckedChange={setLivePreview}
                />
                <Label
                  htmlFor="live-preview"
                  className="text-xs sm:text-sm cursor-pointer whitespace-nowrap"
                >
                  Live Preview
                </Label>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleClear}
                className="h-8 text-xs sm:text-sm bg-transparent"
              >
                Clear
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleDownload}
                className="h-8 text-xs sm:text-sm bg-transparent"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Download</span>
              </Button>

              {!livePreview && (
                <Button
                  size="sm"
                  onClick={handleRun}
                  className="bg-primary hover:bg-primary/90 h-8 text-xs sm:text-sm"
                >
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Run
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile view toggle buttons */}
      <div className="md:hidden border-b border-border bg-card">
        <div className="flex w-full">
          <button
            type="button"
            onClick={() => setMobileView("editor")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
              mobileView === "editor"
                ? "text-primary border-b-2 border-primary bg-accent/50"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
            }`}
          >
            <Code2 className="w-4 h-4" />
            Editor
          </button>
          <button
            type="button"
            onClick={() => setMobileView("preview")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
              mobileView === "preview"
                ? "text-primary border-b-2 border-primary bg-accent/50"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
            }`}
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Editor Panel */}
        <div
          className={`w-full md:w-1/2 flex flex-col md:border-r border-border absolute md:relative inset-0 md:inset-auto ${
            mobileView === "editor" ? "block" : "hidden md:flex"
          }`}
        >
          <div className="bg-card border-b border-border px-3 sm:px-4 py-2 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs sm:text-sm font-medium">Editor</span>
            <span className="text-xs text-muted-foreground ml-auto">
              {code.length} chars
            </span>
          </div>
          <div className="flex-1 relative overflow-auto">
            <CodeMirror
              value={code}
              height="100%"
              theme={vscodeDark}
              extensions={[html()]}
              onChange={(value) => setCode(value)}
              className="h-full text-sm"
            />
          </div>
        </div>

        {/* Preview Panel */}
        <div
          className={`w-full md:w-1/2 flex flex-col absolute md:relative inset-0 md:inset-auto ${
            mobileView === "preview" ? "block" : "hidden md:flex"
          }`}
        >
          <div className="bg-card border-b border-border px-3 sm:px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs sm:text-sm font-medium">Preview</span>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleFullscreen}
              className="h-7 px-2"
            >
              <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>
          <div className="flex-1 bg-[var(--preview-bg)] relative">
            <iframe
              ref={iframeRef}
              className="absolute inset-0 w-full h-full bg-white"
              sandbox="allow-scripts allow-same-origin"
              title="preview"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-3 sm:px-4 py-2">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-0 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              HTML syntax highlighting enabled
            </div>
            <a
              href="https://github.com/SymphonyIceAttack/htmlcompiler"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
          <div className="text-center sm:text-right">
            {livePreview ? "Live preview enabled" : "Click Run to preview"}
          </div>
        </div>
      </footer>
    </div>
  );
}
