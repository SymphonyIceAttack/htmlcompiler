"use client";

import { BookOpen, HelpCircle, Info, Mail } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function PageHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="flex items-center gap-1.5 sm:gap-2 text-primary"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <defs>
                  <linearGradient
                    id="headerGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#8b5cf6", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#a78bfa", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="10" fill="url(#headerGradient)" />
                <path
                  d="M8 8 L6 12 L8 16"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8 L18 12 L16 16"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="9" y="10" width="6" height="3" rx="0.5" fill="white" />
                <text
                  x="12"
                  y="12"
                  fontSize="1.5"
                  fontWeight="bold"
                  fill="#8b5cf6"
                  textAnchor="middle"
                >
                  &lt;/&gt;
                </text>
              </svg>
              <h1 className="text-base sm:text-xl font-bold">HTML Compiler</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="h-8 text-xs sm:text-sm"
            >
              <Link href="/" className="flex items-center gap-1.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 sm:w-4 sm:h-4"
                >
                  <path
                    d="M3 12L5 10L8 12L11 10L14 12L17 10L20 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Home</span>
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              asChild
              className="h-8 text-xs sm:text-sm"
            >
              <Link href="/posts" className="flex items-center gap-1.5">
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

            <Button
              variant="ghost"
              size="sm"
              asChild
              className="h-8 text-xs sm:text-sm"
            >
              <Link href="/privacy" className="flex items-center gap-1.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 sm:w-4 sm:h-4"
                >
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Privacy</span>
              </Link>
            </Button>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
