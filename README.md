# Maraikka Documentation

This directory contains the complete documentation for Maraikka, built with
[Nextra](https://nextra.site/) - a modern documentation framework based on Next.js.

**Maraikka** - _Protect What Matters._

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
├── .husky/                     # Git hooks configuration
│   └── pre-commit              # Pre-commit formatting and linting
├── app/                        # Next.js App Router
│   ├── [[...mdxPath]]/         # Dynamic MDX routing
│   │   └── page.jsx            # MDX page handler with SEO metadata
│   └── layout.jsx              # Root layout with theme configuration
├── components/                 # React components
│   └── CustomFooter.jsx        # Custom footer component
├── content/                    # Documentation content
│   ├── index.mdx               # Homepage
│   ├── getting-started.mdx     # Getting started guide
│   ├── get-started.mdx         # Alternative getting started
│   ├── installation.mdx        # Installation guide
│   ├── development.mdx         # Development documentation
│   ├── security.mdx            # Security documentation
│   ├── troubleshooting.mdx     # Troubleshooting guide
│   ├── api.mdx                 # API documentation
│   ├── meta.json               # Navigation metadata
│   ├── user-guide/             # User guide section
│   │   ├── index.mdx
│   │   ├── encryption.mdx
│   │   └── meta.json
│   ├── features/               # Feature documentation
│   │   ├── index.mdx
│   │   ├── themes.mdx
│   │   ├── image.mdx
│   │   ├── mdx.mdx
│   │   ├── ssg.mdx
│   │   ├── i18n.mdx
│   │   └── meta.json
│   ├── themes/                 # Theme documentation
│   └── advanced/               # Advanced topics
├── public/                     # Static assets
│   ├── images/                 # Documentation images
│   ├── og.png                  # Open Graph image
│   ├── demo.png                # Demo screenshot
│   └── [favicon files]         # Various favicon formats
├── .gitignore                  # Git ignore rules
├── .husky/                     # Git hooks for quality assurance
├── CONTRIBUTING.md             # Contribution guidelines
├── SEO-OPTIMIZATION.md         # SEO strategy and implementation
├── README.md                   # This file
├── eslint.config.js            # ESLint configuration
├── prettier.config.js          # Code formatting rules
├── mdx-components.jsx          # Global MDX components
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
└── pnpm-lock.yaml              # Dependency lock file
```

## 🛠️ **Technology Stack**

### Core Framework

- **[Next.js 15.3.3](https://nextjs.org/)** - React framework with App Router
- **[Nextra 4.2.17](https://nextra.site/)** - Documentation framework
- **[React 19.1.0](https://react.dev/)** - UI library

### Development Tools

- **[pnpm 10.12.1](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[ESLint 9.29.0](https://eslint.org/)** - Code quality and linting
- **[Prettier](https://prettier.io/)** - Code formatter with ES module configuration
- **[Husky 9.1.7](https://typicode.github.io/husky/)** - Git hooks for automation
- **[Lint-staged 16.1.1](https://github.com/okonet/lint-staged)** - Pre-commit code quality
- **[VSCode](https://code.visualstudio.com/)** - Recommended editor with optimized settings

### Content Management

- **[MDX](https://mdxjs.com/)** - Markdown with React components
- **[Pagefind 1.3.0](https://pagefind.app/)** - Static search functionality
- **Frontmatter** - YAML metadata for SEO and page configuration
- **Static Generation** - Pre-rendered pages for optimal performance

## 📝 **Content Guidelines**

### File Organization

- Place content files in the `content/` directory
- Use descriptive, kebab-case filenames
- Organize related content in subdirectories with `meta.json` navigation files
- Include proper frontmatter metadata for SEO

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

The site uses Nextra's documentation theme with custom configuration in `app/layout.jsx`:

```javascript
// Nextra theme configured directly in layout without separate theme.config.jsx
const navbar = (
  <Navbar
    logo={
      <div>
        <strong>Maraikka</strong> Docs
      </div>
    }
    projectLink="https://github.com/puzzlers-labs/maraikka"
  />
);

export default async function RootLayout({ children }) {
  return (
    <Layout
      navbar={navbar}
      footer={footer}
      pageMap={await getPageMap()}
      // ... other configuration
    >
      {children}
    </Layout>
  );
}
```

### Styling

- **Primary Colors**: Violet/Purple theme (`hue: 270`)
- **Typography**: System fonts with excellent readability
- **Dark Mode**: Automatic theme switching support
- **Responsive**: Mobile-first design approach

## 🔧 **Development Workflow**

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm postbuild    # Generate search index with Pagefind
pnpm start        # Start production server
pnpm lint         # Run ESLint code quality checks
pnpm clean        # Clean build artifacts
pnpm analyze      # Bundle analysis
pnpm prepare      # Set up Husky git hooks
```

### Code Quality

- **ESLint** - Code quality and consistency with Next.js configuration
- **Prettier** - Automatic code formatting on save
- **Husky** - Git hooks for automated quality checks
- **Lint-staged** - Pre-commit formatting and validation
- **Trailing Spaces** - Automatic whitespace cleanup

### Performance Optimization

- **Static Generation** - All pages pre-rendered at build time
- **Image Optimization** - Automatic image compression and sizing
- **Bundle Splitting** - Optimized JavaScript loading
- **Caching** - Aggressive caching for static assets
- **Search Index** - Pagefind generates static search functionality

## 🚀 **Deployment**

### Build Process

The documentation is built as a static site with integrated search:

```bash
# Production build with search index
pnpm build        # Builds static site to ./out/
pnpm postbuild    # Generates Pagefind search index

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

We welcome contributions to improve the documentation! Please see
[CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on:

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
5. Ensure quality with `pnpm lint`
6. Submit a pull request

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

This documentation is licensed under the [MIT License](LICENSE). The Maraikka application itself may
have different licensing terms.

---

## 📋 **Project Maintenance**

### Living Documentation

This README file serves as the primary source of truth for project information and is designed to
evolve with the codebase. As the project grows and changes, this document should be kept current and
accurate.

### Update Responsibilities

- **Technology Stack Changes** - Update versions and dependencies
- **Structural Changes** - Reflect new directories or file organization
- **Process Changes** - Update development and contribution workflows
- **Contact Information** - Keep support channels current

### Version History

- **v1.0** - Initial documentation with Nextra 4.x
- **v1.1** - Added ESLint, Husky, Pagefind integration
- **Current** - Enhanced SEO, improved performance, streamlined development
