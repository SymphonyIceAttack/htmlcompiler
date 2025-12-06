# Task Completion Guidelines

## Post-Development Checklist

### 1. Code Quality Verification
- [ ] **Lint Check**: Run `pnpm lint` to check for code quality issues
- [ ] **Format Code**: Run `pnpm format` to ensure consistent formatting
- [ ] **Type Check**: Ensure TypeScript compilation passes without errors
- [ ] **Build Test**: Run `pnpm build` to verify production build works

### 2. Testing
- [ ] **Local Testing**: Test changes locally with `pnpm dev`
- [ ] **Production Build**: Verify `pnpm start` works after build
- [ ] **Cloudflare Preview**: Test Cloudflare Workers build with `pnpm preview` if applicable

### 3. Code Review
- [ ] **Self Review**: Review your own changes for:
  - Code clarity and documentation
  - Error handling
  - Performance implications
  - Security considerations
- [ ] **Architecture Compliance**: Ensure changes align with project architecture

### 4. Dependencies
- [ ] **Dependency Updates**: If new dependencies added, ensure they're properly typed
- [ ] **Environment Variables**: Verify any new environment variables are documented
- [ ] **Package Lock**: Ensure `pnpm-lock.yaml` is updated if dependencies changed

### 5. Configuration
- [ ] **Config Files**: Update relevant config files if needed:
  - `biome.json` - for new linting rules
  - `components.json` - for new UI components
  - `tailwind.config.js` - for new styling needs
  - `open-next.config.ts` - for Cloudflare-specific changes

### 6. Documentation
- [ ] **Update CLAUDE.md**: Update project documentation if architecture changed
- [ ] **Code Comments**: Add clear comments for complex logic
- [ ] **Type Definitions**: Ensure TypeScript types are comprehensive

### 7. Deployment Readiness
- [ ] **Environment Variables**: Ensure all required env vars are set in deployment
- [ ] **Cloudflare Build**: Test `pnpm build:worker` for Cloudflare deployment
- [ ] **Performance**: Consider bundle size and loading performance

## Quality Gates

### Must Pass
1. `pnpm lint` - No linting errors
2. `pnpm build` - Successful production build
3. TypeScript compilation - No type errors
4. Local development server - `pnpm dev` starts successfully

### Should Pass
1. `pnpm format` - Code formatting is consistent
2. No console.log statements in production code
3. Responsive design works on mobile devices
4. Dark/light theme toggle functions properly
5. HTML compiler sandbox security is maintained

### Nice to Have
1. Performance optimization considerations
2. Accessibility improvements
3. Error boundary implementation
4. Loading states for async operations

## Specific Project Considerations

### HTML Compiler Component
- Ensure sandboxed iframe security is maintained
- Test mobile responsiveness of editor/preview toggle
- Verify CodeMirror syntax highlighting works correctly
- Check file download functionality

### Blog System
- Verify Directus integration works correctly
- Test draft mode functionality
- Ensure proper caching headers are set
- Check SEO meta tags for blog posts

### Cloudflare Deployment
- Test OpenNext build process
- Verify Durable Objects configuration (if applicable)
- Check R2 cache configuration
- Test deployment pipeline

## Common Issues to Check
- Path aliases (`@/*`) work correctly
- Environment variables are properly typed
- Server/Client component boundaries are correct
- Tailwind CSS classes are properly configured
- Biome formatter doesn't conflict with manual formatting