# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
- `pnpm dev` - Start development server (Next.js with Turbopack)
- `pnpm build` - Build for production (standard Next.js build)
- `pnpm start` - Start production server

### Cloudflare Deployment
- `pnpm build:worker` - Build for Cloudflare Workers using OpenNext
- `pnpm preview` - Preview Cloudflare Workers build locally
- `pnpm deploy` - Deploy to Cloudflare Workers
- `pnpm upload` - Build and upload to Cloudflare Workers

### Code Quality
- `pnpm lint` - Run Biome linter
- `pnpm format` - Format code with Biome (writes changes)

### Type Generation
- `pnpm cf-typegen` - Generate Cloudflare type definitions

## Project Architecture

### Overview
This is a Next.js 16 application deployed on Cloudflare Workers using OpenNext. The main feature is an online HTML compiler with a blog section powered by Directus CMS.

### Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui with Radix primitives
- **Code Editor**: CodeMirror 6 (@uiw/react-codemirror)
- **CMS**: Directus (headless CMS)
- **Linting/Formatting**: Biome
- **Theme**: next-themes
- **Icons**: Lucide React
- **Cloud**: Cloudflare Workers with OpenNext

### Directory Structure

```
app/
├── page.tsx                   # Home page with HTML compiler
├── layout.tsx                 # Root layout with metadata and theme provider
├── posts/
│   ├── page.tsx              # Blog listing (fetches from Directus)
│   ├── [slug]/page.tsx       # Individual post page
│   └── layout.tsx            # Blog layout
├── api/draft/route.ts        # Draft mode endpoint for blog
├── sitemap.ts                # Dynamic sitemap
└── globals.css               # Global styles

components/
├── html-compiler.tsx         # Main editor component with CodeMirror
├── blog/
│   ├── site-nav.tsx         # Blog navigation
│   ├── markdown-with-ids.tsx # Markdown rendering with TOC support
│   ├── table-of-contents.tsx # Auto-generated TOC
│   ├── post-cta.tsx         # Post footer CTA
│   └── recent-posts.tsx     # Related posts
├── ui/                       # shadcn/ui components
├── about-dialog.tsx          # About modal
├── faq-dialog.tsx           # FAQ modal
├── theme-provider.tsx       # Theme context provider
└── theme-toggle.tsx         # Theme switcher

lib/
├── directus.ts              # Directus SDK client and types
└── utils.ts                 # cn() utility for class merging

open-next.config.ts          # OpenNext Cloudflare configuration
next.config.ts               # Next.js configuration
biome.json                   # Biome linting/formatting rules
components.json              # shadcn/ui configuration
```

### Key Components

**HtmlCompiler** (`components/html-compiler.tsx`)
- Client-side component using CodeMirror for HTML editing
- Split-pane editor with live preview
- Features: syntax highlighting, live preview toggle, download, fullscreen
- Mobile-responsive with editor/preview mode switch
- Runs code in sandboxed iframe

**Blog System**
- Data sourced from Directus CMS
- Dynamic routes for posts (`/posts/[slug]`)
- Draft mode support via `/api/draft` endpoint
- Server-side rendering with caching (revalidate = 86400)
- Markdown rendering with automatic TOC generation

### Cloudflare Configuration

**open-next.config.ts**
- R2 Incremental Cache for static generation
- D1 Next Tag Cache for cache invalidation
- DO Queue for background tasks
- Cache interception enabled

### Environment Variables

Required (defined in `.env`):
- `NEXT_PUBLIC_DIRECTUS_URL` - Directus CMS endpoint
- `DIRECTUS_ACCESS_TOKEN` - API access token
- `DIRECTUS_SECRET_TOKEN` - Secret for draft mode

### Configuration Files

**biome.json**
- 2-space indent, space style formatter
- Recommended rules for React and Next.js
- Disabled rules: exhaustive deps, array index keys, dangerous inner HTML
- Import organization enabled

**next.config.ts**
- TypeScript build errors ignored
- Images unoptimized (for Cloudflare)
- Remote image patterns: symcloud.top and all HTTPS domains
- OpenNext Cloudflare dev initialization

**components.json**
- shadcn/ui "new-york" style
- Tailwind CSS 4 with CSS variables
- Lucide icons
- Aliases: @/components, @/lib, @/hooks, @/ui

### Data Flow

1. **HTML Compiler**: Client-side only, no server dependencies
2. **Blog**: Server components fetch from Directus REST API
3. **Directus**: Headless CMS with posts content
4. **Caching**: Static generation with 24hr revalidation, Cloudflare cache

### Development Notes

- TypeScript 5, React 19, Next 16
- Tailwind CSS 4 (latest version)
- No test framework configured
- Uses experimental React features (19.2.0)
- Cloudflare Workers deployment via OpenNext adapter
- Durable Objects defined in config but don't work in local dev

### Important Architecture Decisions

1. **Client Components**: HtmlCompiler must be client-side for CodeMirror
2. **Server Components**: Blog uses server components for CMS fetching
3. **Theme**: Dark mode default, system preference support
4. **Mobile**: Responsive design with mobile-specific editor/preview toggle
5. **Security**: Preview runs in sandboxed iframe with allow-scripts
