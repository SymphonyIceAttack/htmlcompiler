"use client";

import { html } from "@codemirror/lang-html";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import { Code2, Download, Eye, Maximize2, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AboutDialog } from "@/components/about-dialog";
import { FaqDialog } from "@/components/faq-dialog";
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
              <FaqDialog />
              <AboutDialog />

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
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Editor Panel */}
        <div
          className={`${mobileView === "editor" ? "flex" : "hidden"} md:flex w-full md:w-1/2 flex-col md:border-r border-border`}
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
          className={`${mobileView === "preview" ? "flex" : "hidden"} md:flex w-full md:w-1/2 flex-col`}
        >
          <div className="bg-card border-b border-border px-3 sm:px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs sm:text-sm font-medium">Preview</span>
            </div>
            <Button
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
          <div className="hidden sm:block">
            HTML syntax highlighting enabled
          </div>
          <div className="text-center sm:text-right">
            {livePreview ? "Live preview enabled" : "Click Run to preview"}
          </div>
        </div>
      </footer>
    </div>
  );
}
