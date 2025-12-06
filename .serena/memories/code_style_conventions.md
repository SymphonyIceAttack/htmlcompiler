# Code Style and Conventions

## Formatting and Linting
- **Formatter**: Biome (space style, 2-space indent)
- **Linting**: Biome with recommended rules for React and Next.js
- **File Extensions**: TypeScript (.ts, .tsx), JavaScript (.js, .jsx)

## Code Style Rules

### Biome Configuration
- **Indent Style**: Space
- **Indent Width**: 2 spaces
- **Import Organization**: Enabled (automatic import sorting)
- **VCS Integration**: Git integration enabled

### Disabled Rules
- `useExhaustiveDependencies` - Off (for React hooks)
- `noUnknownAtRules` - Off (for Tailwind CSS)
- `noArrayIndexKey` - Off (for list rendering)
- `noDangerouslySetInnerHtml` - Off (for HTML compiler functionality)
- `noSvgWithoutTitle` - Off
- `noStaticElementInteractions` - Off
- `noImgElement` - Off
- `useOptionalChain` - Off

### TypeScript Configuration
- **Target**: ES2017
- **Strict Mode**: Enabled
- **JSX**: react-jsx
- **Module Resolution**: bundler
- **Path Aliases**: `@/*` maps to `./*` (root directory)

## Naming Conventions
- **Components**: PascalCase (e.g., `HtmlCompiler`, `ThemeProvider`)
- **Files**: kebab-case for pages (`page.tsx`), PascalCase for components
- **Functions**: camelCase
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **CSS Classes**: kebab-case (Tailwind CSS)

## File Organization
- **Components**: `@/components` alias
- **UI Components**: `@/components/ui` alias
- **Utilities**: `@/lib` alias
- **Hooks**: `@/hooks` alias
- **Pages**: `app/` directory (App Router structure)

## shadcn/ui Configuration
- **Style**: new-york
- **RSC**: true (React Server Components support)
- **TypeScript**: true
- **Tailwind**: CSS variables enabled, base color "neutral"
- **Icon Library**: Lucide React
- **Prefix**: Empty (no prefix for CSS variables)

## Development Patterns

### Component Architecture
- **Client Components**: Required for interactive features (CodeMirror editor)
- **Server Components**: Used for CMS fetching (blog posts)
- **Theme Support**: Dark mode default, system preference support
- **Mobile Support**: Responsive design with mobile-specific editor/preview toggle

### Security Patterns
- **Sandboxing**: HTML preview runs in sandboxed iframe with allow-scripts
- **Content Security**: Direct API calls from server components only

### Code Organization
- **Single Responsibility**: Each component has one clear purpose
- **Separation of Concerns**: Business logic in lib/, UI in components/
- **Type Safety**: Full TypeScript coverage with strict mode
- **Import Organization**: Biome handles automatic import sorting

## React and Next.js Patterns
- **App Router**: Uses Next.js 16 App Router structure
- **Server Actions**: Not extensively used
- **Dynamic Routes**: Used for blog posts (`/posts/[slug]`)
- **API Routes**: Minimal usage (only draft mode endpoint)
- **Caching**: Static generation with 24hr revalidation for blog content