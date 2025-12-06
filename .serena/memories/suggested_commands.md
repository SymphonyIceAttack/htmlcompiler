# Suggested Commands for HTML Compiler Project

## Development Commands

### Basic Development
- `pnpm dev` - Start development server (Next.js with Turbopack)
- `pnpm build` - Build for production (standard Next.js build)
- `pnpm start` - Start production server

### Cloudflare Deployment (via OpenNext)
- `pnpm build:worker` - Build for Cloudflare Workers using OpenNext
- `pnpm preview` - Preview Cloudflare Workers build locally
- `pnpm deploy` - Deploy to Cloudflare Workers
- `pnpm upload` - Build and upload to Cloudflare Workers

### Code Quality
- `pnpm lint` - Run Biome linter (checks for issues)
- `pnpm format` - Format code with Biome (writes changes automatically)

### Type Generation
- `pnpm cf-typegen` - Generate Cloudflare type definitions

## System Commands (Darwin/macOS)

### File Operations
- `ls` - List directory contents
- `cd` - Change directory
- `pwd` - Print working directory
- `find` - Find files and directories
- `grep` - Search text patterns in files
- `cat` - Display file contents
- `head` - Display first lines of file
- `tail` - Display last lines of file

### Git Commands
- `git status` - Check git status
- `git add` - Stage files for commit
- `git commit` - Commit staged changes
- `git push` - Push to remote repository
- `git pull` - Pull from remote repository
- `git log` - View commit history

### Package Management
- `pnpm install` - Install dependencies
- `pnpm add` - Add new dependency
- `pnpm remove` - Remove dependency

## Project-Specific Notes

- Uses `pnpm` as package manager (not npm/yarn)
- Biome is used for both linting and formatting
- TypeScript is configured with strict mode enabled
- Path aliases: `@/*` maps to `./*` (root directory)