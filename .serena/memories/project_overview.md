# HTML Compiler Project Overview

## Project Purpose
This is a Next.js 16 application that provides an online HTML compiler with integrated blog functionality. The main feature is a client-side HTML editor with live preview capabilities, powered by CodeMirror 6. The project also includes a blog section powered by Directus CMS.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.17
- **UI Components**: shadcn/ui with Radix primitives
- **Code Editor**: CodeMirror 6 (@uiw/react-codemirror)
- **CMS**: Directus (headless CMS)
- **Linting/Formatting**: Biome 2.2.4
- **Theme**: next-themes (dark mode support)
- **Icons**: Lucide React
- **Cloud**: Cloudflare Workers with OpenNext adapter
- **Package Manager**: pnpm

## Project Architecture

### Main Components
1. **HtmlCompiler** (`components/html-compiler.tsx`)
   - Client-side component using CodeMirror for HTML editing
   - Split-pane editor with live preview
   - Features: syntax highlighting, live preview toggle, download, fullscreen
   - Mobile-responsive with editor/preview mode switch
   - Runs code in sandboxed iframe with allow-scripts

2. **Blog System**
   - Data sourced from Directus CMS
   - Dynamic routes for posts (`/posts/[slug]`)
   - Draft mode support via `/api/draft` endpoint
   - Server-side rendering with caching (revalidate = 86400)
   - Markdown rendering with automatic TOC generation

### Directory Structure
```
app/                     # Next.js app directory (App Router)
├── page.tsx            # Home page with HTML compiler
├── layout.tsx          # Root layout with metadata and theme provider
├── posts/              # Blog section
│   ├── page.tsx        # Blog listing (fetches from Directus)
│   ├── [slug]/page.tsx # Individual post page
│   └── layout.tsx      # Blog layout
├── api/draft/route.ts  # Draft mode endpoint for blog
├── sitemap.ts          # Dynamic sitemap
└── globals.css         # Global styles

components/             # React components
├── html-compiler.tsx  # Main editor component with CodeMirror
├── blog/              # Blog-related components
├── ui/                # shadcn/ui components
├── about-dialog.tsx   # About modal
├── faq-dialog.tsx     # FAQ modal
├── theme-provider.tsx # Theme context provider
└── theme-toggle.tsx   # Theme switcher

lib/                   # Utility libraries
├── directus.ts       # Directus SDK client and types
└── utils.ts          # cn() utility for class merging

Configuration Files:
├── open-next.config.ts    # OpenNext Cloudflare configuration
├── next.config.ts         # Next.js configuration
├── biome.json            # Biome linting/formatting rules
├── components.json       # shadcn/ui configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── wrangler.jsonc        # Cloudflare Workers configuration
```

### Data Flow
1. **HTML Compiler**: Client-side only, no server dependencies
2. **Blog**: Server components fetch from Directus REST API
3. **Directus**: Headless CMS with posts content
4. **Caching**: Static generation with 24hr revalidation, Cloudflare cache

### Cloudflare Configuration
- **open-next.config.ts** includes:
  - R2 Incremental Cache for static generation
  - D1 Next Tag Cache for cache invalidation
  - DO Queue for background tasks
  - Cache interception enabled
- Durable Objects defined in config but don't work in local dev

### Environment Variables
Required (defined in `.env`):
- `NEXT_PUBLIC_DIRECTUS_URL` - Directus CMS endpoint
- `DIRECTUS_ACCESS_TOKEN` - API access token
- `DIRECTUS_SECRET_TOKEN` - Secret for draft mode

### Development Notes
- TypeScript 5, React 19, Next.js 16
- Tailwind CSS 4 (latest version)
- No test framework configured
- Uses experimental React features (19.2.0)
- Cloudflare Workers deployment via OpenNext adapter