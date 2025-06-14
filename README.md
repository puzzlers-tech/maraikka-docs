# Maraikka Documentation

This directory contains the complete documentation for Maraikka, built with [Nextra](https://nextra.site/) - a modern documentation framework based on Next.js.

**Maraikka** - *Protect What Matters.*

## 🚀 **Quick Start**

### Prerequisites
- **Node.js** 22+
- **pnpm** (recommended) or npm

### Development Setup
```bash
# Clone the repository
git clone https://github.com/puzzlers-labs/maraikka-docs.git
cd maraikka-docs

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to view the documentation site.

### Production Build
```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 📁 **Project Structure**

```
maraikka-docs/
├── .cursor/                    # Cursor AI configuration
│   └── rules/                  # AI development rules
├── .vscode/                    # VSCode workspace settings
│   ├── extensions.json         # Recommended extensions
│   └── settings.json           # Editor configuration
├── app/                        # Next.js App Router
│   ├── [[...mdxPath]]/         # Dynamic MDX routing
│   │   └── page.jsx            # MDX page handler
│   ├── layout.jsx              # Root layout component
│   └── globals.css             # Global styles
├── content/                    # Documentation content
│   ├── index.mdx               # Homepage
│   ├── getting-started.mdx     # Getting started guide
│   ├── security.mdx            # Security documentation
│   └── troubleshooting.mdx     # Troubleshooting guide
├── public/                     # Static assets
│   └── images/                 # Documentation images
├── .gitignore                  # Git ignore rules
├── CONTRIBUTING.md             # Contribution guidelines
├── README.md                   # This file
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
├── prettier.config.js          # Code formatting rules
└── pnpm-lock.yaml              # Dependency lock file
```

## 🛠️ **Technology Stack**

### Core Framework
- **[Next.js 15.3.3](https://nextjs.org/)** - React framework with App Router
- **[Nextra 4.2.17](https://nextra.site/)** - Documentation framework
- **[React 19.1.0](https://react.dev/)** - UI library

### Development Tools
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[Prettier](https://prettier.io/)** - Code formatter with custom configuration
- **[VSCode](https://code.visualstudio.com/)** - Recommended editor with optimized settings

### Content Management
- **[MDX](https://mdxjs.com/)** - Markdown with React components
- **Frontmatter** - YAML metadata for SEO and page configuration
- **Static Generation** - Pre-rendered pages for optimal performance

## 📝 **Content Guidelines**

### File Organization
- Place content files in the `content/` directory
- Use descriptive, kebab-case filenames
- Organize related content in subdirectories
- Include proper frontmatter metadata

### Writing Standards
- Use clear, concise language
- Include practical examples and code snippets
- Add screenshots or diagrams where helpful
- Cross-reference related documentation

### SEO Optimization
- Include comprehensive frontmatter metadata
- Use descriptive titles and descriptions
- Add relevant keywords
- Optimize images with proper alt text

## 🎨 **Customization**

### Theme Configuration
The site uses Nextra's documentation theme with custom branding:

```javascript
// next.config.js
export default withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  // Custom configuration
      docsRepositoryBase: "https://github.com/puzzlers-labs/maraikka-docs/blob/main",
})
```

### Styling
- **Primary Colors**: Violet/Purple theme (`#8b5cf6`)
- **Typography**: System fonts with excellent readability
- **Dark Mode**: Automatic theme switching support
- **Responsive**: Mobile-first design approach

## 🔧 **Development Workflow**

### Available Scripts
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm clean        # Clean build artifacts
pnpm analyze      # Bundle analysis
```

### Code Quality
- **Prettier** - Automatic code formatting on save
- **ESLint** - Code quality and consistency
- **Git Hooks** - Pre-commit formatting and validation
- **Trailing Spaces** - Automatic whitespace cleanup

### Performance Optimization
- **Static Generation** - All pages pre-rendered at build time
- **Image Optimization** - Automatic image compression and sizing
- **Bundle Splitting** - Optimized JavaScript loading
- **Caching** - Aggressive caching for static assets

## 🚀 **Deployment**

### Build Process
The documentation is built as a static site that can be deployed to any static hosting provider:

```bash
# Production build
pnpm build

# Output directory: ./out/
# Deploy the contents of ./out/ to your hosting provider
```

### Hosting Options
- **Vercel** - Recommended for Next.js applications
- **Netlify** - Static site hosting with continuous deployment
- **GitHub Pages** - Free hosting for open source projects
- **AWS S3** - Scalable cloud storage with CloudFront CDN

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://docs.maraikka.com
```

## 🤝 **Contributing**

We welcome contributions to improve the documentation! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on:

- Setting up your development environment
- Content creation and editing standards
- SEO and metadata requirements
- Code style and formatting rules
- Submission and review process

### Quick Contribution Steps
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `pnpm dev`
5. Submit a pull request

## 📞 **Support**

### Documentation Issues
- **GitHub Issues** - Report bugs or request features
- **Discussions** - Ask questions and share ideas
- **Email** - docs@maraikka.com for direct support

### Community
- **Discord** - Join our community server
- **Twitter** - Follow [@PuzzlersLabs](https://twitter.com/PuzzlersLabs)
- **Website** - [maraikka.com](https://maraikka.com)

## 📄 **License**

This documentation is licensed under the [MIT License](LICENSE). The Maraikka application itself may have different licensing terms.

---

## 📋 **Project Maintenance**

### Living Documentation
This README file serves as the primary source of truth for project information and is designed to evolve with the codebase. As the project grows and changes, this document should be kept current and accurate.

### Update Responsibilities
- **Technology Stack Changes** - Update versions and dependencies
- **Structural Changes** - Reflect new directories or file organization
- **Process Changes** - Update development and contribution workflows
- **Contact Information** - Keep support channels current

### Version History
- **v1.0** - Initial documentation with Nextra 4.x
- **Current** - Enhanced SEO, improved performance, streamlined development
