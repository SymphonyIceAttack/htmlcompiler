# Development Tips and Patterns

## Project-Specific Development Tips

### HTML Compiler Development
- **CodeMirror Integration**: Use `@uiw/react-codemirror` with `@codemirror/lang-html` for syntax highlighting
- **Sandbox Security**: Always use `sandbox="allow-scripts"` for preview iframe, never omit sandbox attributes
- **Mobile Editor**: Implement editor/preview toggle for mobile using responsive design patterns
- **File Downloads**: Use blob URLs for generating downloadable HTML files
- **Theme Integration**: Ensure CodeMirror theme works with both light and dark modes

### Blog System Development
- **Directus Integration**: Use `@directus/sdk` for API calls, implemented in `lib/directus.ts`
- **Server Components**: Fetch data in server components for better performance
- **Draft Mode**: Implement draft mode via `/api/draft` endpoint for content preview
- **Markdown Processing**: Use Shiki for syntax highlighting in code blocks
- **TOC Generation**: Automatic table of contents generation from markdown headings

### UI Development with shadcn/ui
- **Component Structure**: Follow shadcn/ui patterns with `class-variance-authority` and `clsx`
- **Tailwind CSS 4**: Use CSS variables for theming, defined in `app/globals.css`
- **Lucide Icons**: Import icons from `lucide-react` for consistent iconography
- **Theme Provider**: Use `next-themes` for dark/light mode management
- **Responsive Design**: Implement mobile-first responsive patterns

### Cloudflare Workers Integration
- **OpenNext Configuration**: Configure caching, queues, and durable objects in `open-next.config.ts`
- **Build Process**: Use `pnpm build:worker` for Cloudflare-specific builds
- **Type Generation**: Generate Cloudflare types with `pnpm cf-typegen`
- **Environment Variables**: Properly type environment variables using CloudflareEnv interface

## Common Development Patterns

### File Structure Patterns
```
# Component Pattern
components/
├── ui/              # shadcn/ui components (auto-generated)
├── feature/         # Feature-specific components
├── layout/          # Layout components
└── shared/          # Shared utility components

# Utility Pattern
lib/
├── utils.ts         # General utilities (cn, etc.)
├── directus.ts      # API client and types
├── types.ts         # Shared TypeScript types
└── constants.ts     # Application constants

# Page Pattern
app/
├── page.tsx         # Home page (server component)
├── layout.tsx       # Root layout
├── (feature)/       # Route groups
│   └── page.tsx     # Feature page
└── api/             # API routes
```

### Component Patterns
```tsx
// Client Component Pattern
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function MyComponent() {
  const [state, setState] = useState();
  return <Button>Click me</Button>;
}

// Server Component Pattern
export default async function MyPage() {
  const data = await fetchData();
  return <div>{data}</div>;
}

// TypeScript Pattern
interface MyComponentProps {
  title: string;
  variant?: "default" | "secondary";
}

export function MyComponent({ title, variant = "default" }: MyComponentProps) {
  return <div className={cn("base-class", variant && `variant-${variant}`)}>{title}</div>;
}
```

### State Management Patterns
- **Local State**: Use `useState` for component-local state
- **Theme State**: Use `next-themes` for theme management
- **Server State**: Use React Server Components for data fetching
- **No Global State**: Avoid global state libraries (Redux, Zustand) unless necessary

### Performance Patterns
- **Static Generation**: Use `revalidate = 86400` for 24-hour cache
- **Image Optimization**: Configure Next.js images for Cloudflare Workers
- **Bundle Optimization**: Use dynamic imports for large dependencies
- **Caching Strategy**: Leverage Cloudflare's edge caching capabilities

### Security Patterns
- **Environment Variables**: Keep secrets in environment variables
- **CSP Headers**: Consider Content Security Policy for HTML compiler
- **Input Sanitization**: Sanitize user input in HTML compiler
- **API Security**: Secure Directus API tokens and endpoints

## Debugging Tips

### Development Server
- Use `pnpm dev` for Next.js development with Turbopack
- Enable React DevTools for component debugging
- Use browser DevTools for CodeMirror debugging

### Cloudflare Development
- Use `pnpm preview` to test Cloudflare Workers build locally
- Check Cloudflare dashboard for deployment logs
- Use Wrangler CLI for advanced debugging

### Common Issues
- **Type Errors**: Ensure all imports use proper TypeScript paths
- **CSS Issues**: Check Tailwind CSS configuration and class names
- **Build Failures**: Verify all environment variables are set
- **Performance**: Monitor bundle size with Next.js analytics

## Testing Considerations
- **No Test Framework**: Currently no testing setup, consider adding Jest/Vitest
- **Manual Testing**: Test key user flows manually
- **Cross-browser**: Test in multiple browsers (Chrome, Firefox, Safari)
- **Mobile Testing**: Test responsive design on actual mobile devices
- **Performance Testing**: Use Lighthouse for performance audits