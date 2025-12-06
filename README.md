<div align="center">
  <img src="./logo.svg" alt="HTML Compiler Logo" width="200"/>
  
  # HTML Compiler
  
  <p>
    <strong>Online HTML playground with live preview and modern code editor</strong>
  </p>
  
  <p>
    <a href="https://htmlcompiler.top">Website</a> •
    <a href="#features">Features</a> •
    <a href="#demo">Demo</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="https://github.com/SymphonyIceAttack/htmlcompiler/issues">Issues</a>
  </p>
</div>

## 🌟 About

HTML Compiler is a modern, feature-rich online HTML editor designed to make web development accessible and enjoyable for everyone. Whether you're a beginner learning your first lines of code or an experienced developer testing a quick idea, we provide a powerful, user-friendly environment to bring your ideas to life.

**Visit our website: [https://htmlcompiler.top](https://htmlcompiler.top)**

## ✨ Features

### 🎯 Core Functionality
- **Real-time Preview**: See your HTML changes instantly with live preview mode
- **Manual Update**: Update preview on-demand for better performance control
- **Syntax Highlighting**: Powered by CodeMirror 6 for the best editing experience
- **Code Editor**: Professional-grade code editor with IntelliSense support

### 🎨 User Experience
- **Dark & Light Themes**: Elegant theme switching with system preference detection
- **Mobile Responsive**: Fully responsive design for coding on any device
- **Fullscreen Mode**: Distraction-free editing with fullscreen preview
- **Quick Download**: Download your HTML files instantly

### 🔧 Development Features
- **Sandboxed Preview**: Secure preview environment with iframe sandboxing
- **Preset Templates**: Start quickly with included example HTML templates
- **Clean Interface**: Modern, intuitive UI designed for productivity
- **Keyboard Shortcuts**: Efficient coding with keyboard navigation

## 🚀 Demo

Experience HTML Compiler live at **[https://htmlcompiler.top](https://htmlcompiler.top)**

![HTML Compiler Demo](https://htmlcompiler.top/og-image.jpg)

## 🛠️ Tech Stack

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - Modern React with experimental features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[CodeMirror 6](https://codemirror.net/)** - Powerful code editor
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible UI components
- **[Biome](https://biomejs.dev/)** - Fast formatter and linter
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Cloudflare Workers](https://workers.cloudflare.com/)** - Edge deployment

## 📋 Getting Started

### Prerequisites

- **Node.js 18+** - Latest LTS version recommended
- **pnpm** - Fast, disk space efficient package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SymphonyIceAttack/htmlcompiler.git
   cd htmlcompiler
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Build for Cloudflare Workers
pnpm build:worker

# Preview Cloudflare build
pnpm preview
```

## 🏗️ Project Structure

```
html-compiler/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page with HTML compiler
│   ├── layout.tsx         # Root layout
│   ├── posts/             # Blog section
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── html-compiler.tsx  # Main editor component
│   ├── blog/              # Blog-related components
│   ├── ui/                # shadcn/ui components
│   └── *.tsx              # Feature components
├── lib/                   # Utilities
│   ├── directus.ts        # CMS client
│   └── utils.ts           # Helper functions
├── public/                # Static assets
├── logo.svg               # Project logo
└── Configuration files...
```

## 🎨 Key Components

### HtmlCompiler
The main editor component featuring:
- CodeMirror 6 integration with HTML language support
- Split-pane layout with adjustable editor/preview ratio
- Live preview with sandboxed iframe
- Theme switching and responsive design
- File download functionality

### Blog System
Integrated blog powered by Directus CMS:
- Server-side rendering for optimal performance
- Markdown processing with syntax highlighting
- Automatic table of contents generation
- Draft mode for content preview

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm format` - Format code with Biome
- `pnpm build:worker` - Build for Cloudflare Workers
- `pnpm preview` - Preview Cloudflare build
- `pnpm deploy` - Deploy to Cloudflare Workers

## 🌍 Deployment

### Cloudflare Workers (Recommended)
This project is optimized for Cloudflare Workers deployment:

```bash
# Build for Cloudflare
pnpm build:worker

# Preview locally
pnpm preview

# Deploy to Cloudflare
pnpm deploy
```

### Other Platforms
The project can also be deployed on:
- **Vercel** - Zero-config deployment
- **Netlify** - JAMstack hosting
- **GitHub Pages** - Static site hosting

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

1. **🐛 Bug Reports**: Report bugs through [GitHub Issues](https://github.com/SymphonyIceAttack/htmlcompiler/issues)
2. **💡 Feature Requests**: Suggest new features or improvements
3. **📝 Documentation**: Improve documentation and examples
4. **🔧 Code Contributions**: Submit pull requests for bug fixes or features

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run linting and formatting: `pnpm lint && pnpm format`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style

- Follow the existing code style
- Use TypeScript for type safety
- Run Biome linting before committing
- Add tests for new features (when test framework is added)
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing React framework
- [CodeMirror](https://codemirror.net/) for the excellent code editor
- [shadcn](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Directus](https://directus.io/) for the headless CMS solution

## 📞 Support

- **Website**: [https://htmlcompiler.top](https://htmlcompiler.top)
- **GitHub Issues**: [Report bugs or request features](https://github.com/SymphonyIceAttack/htmlcompiler/issues)
- **Email**: 1994370030@qq.com

## 🗺️ Roadmap

- [ ] **Code Snippets Library**: Pre-built HTML templates and components
- [ ] **Collaborative Editing**: Real-time collaboration features
- [ ] **Export Options**: Export to multiple formats (PDF, image, etc.)
- [ ] **Plugin System**: Extensible plugin architecture
- [ ] **Performance Optimization**: Further performance improvements
- [ ] **Mobile App**: Native mobile application
- [ ] **User Accounts**: Save and sync projects across devices

---

<div align="center">
  <p>
    <strong>Made with ❤️ by SymphonyIceAttack</strong>
  </p>
  <p>
    <a href="https://htmlcompiler.top">Website</a> •
    <a href="https://github.com/SymphonyIceAttack">GitHub</a> •
    <a href="mailto:1994370030@qq.com">Contact</a>
  </p>
</div>