# Contributing

Thank you for your interest in contributing! This guide will help you understand our contribution process and standards.

## 🚀 **Quick Setup**

### Prerequisites
- **Node.js** 22+
- **pnpm** (recommended package manager)
- **Git** for version control

### Development Environment
```bash
# Clone the repository
git clone https://github.com/puzzlers-labs/maraikka-docs.git
cd maraikka-docs

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see your changes in real-time.

## 🛠️ **Development Tools**

### Essential VSCode Extensions
When you open this project, you'll be prompted to install 3 essential extensions:

1. **Markdown Preview Enhanced** - Advanced markdown editing and preview
2. **Prettier** - Consistent code formatting
3. **Trailing Spaces** - Clean whitespace management

These extensions are automatically configured for optimal documentation workflow.

### Code Formatting
- **Prettier** handles all formatting automatically
- **Format on save** is enabled by default
- **Trailing spaces** are automatically removed
- **Consistent line endings** across platforms

## 📝 **Content Guidelines**

### Writing Style
- **Clear and concise** - Use simple, understandable language
- **User-focused** - Write from the user's perspective
- **Action-oriented** - Use active voice and clear instructions
- **Consistent terminology** - Use the same terms throughout

### File Organization
- Place content files in the `content/` directory
- Use descriptive, kebab-case filenames (`getting-started.mdx`)
- Organize related content in subdirectories
- Include proper frontmatter metadata

### MDX Format
All documentation uses MDX (Markdown + React components):

```mdx
---
title: "Page Title"
description: "Page description for SEO"
---

# Page Title

Your content here...
```

## 📊 **SEO Metadata Guidelines**

### Required Frontmatter Structure

Add this frontmatter block at the top of every MDX file:

```yaml
---
title: "Page Title - Maraikka Documentation"
description: "Detailed description of the page content (150-160 characters optimal)"
keywords: "relevant, keywords, separated, by, commas"
author: "Puzzlers Labs"
type: "article"
section: "Documentation Section"
lastModified: "YYYY-MM-DD"
openGraph:
  title: "Social Media Title (can be different from main title)"
  description: "Social media description (may differ from main description)"
  type: "article"
  images:
    - url: "/images/page-specific-image.png"
      width: 1200
      height: 630
      alt: "Descriptive alt text for the image"
twitter:
  card: "summary_large_image"
  title: "Twitter-specific title"
  description: "Twitter-specific description"
  images: ["/images/twitter-card-image.png"]
canonical: "https://docs.maraikka.com/page-url"
---
```

### Metadata Best Practices

#### **Title Field**
- **Format**: `"Specific Page Title - Maraikka Documentation"`
- **Length**: 50-60 characters optimal
- **Example**: `"Security Guide - Maraikka Documentation"`

#### **Description Field**
- **Length**: 150-160 characters for optimal search snippet display
- **Content**: Clear summary of page content with primary keywords
- **Example**: `"Complete security guide for Maraikka. Learn about AES-256 encryption, password security, hardware authentication, and security best practices."`

#### **Keywords Field**
- **Format**: Comma-separated list of relevant terms
- **Count**: 5-10 keywords optimal
- **Example**: `"maraikka security, AES encryption, file security, password protection, FIDO2 authentication"`

## 🎨 **Style Guidelines**

### Markdown Conventions
- Use `#` for page titles (H1)
- Use `##` for major sections (H2)
- Use `###` for subsections (H3)
- Use **bold** for emphasis
- Use `code` for inline code
- Use code blocks with language specification

### Code Examples
Always include language specification for syntax highlighting:

```javascript
// Good
const example = "with language specified";
```

### Images and Media
- Store images in `public/images/`
- Use descriptive filenames (`feature-overview.png`)
- Include alt text for accessibility
- Optimize images for web delivery

## 🔍 **Quality Checklist**

Before submitting your contribution, ensure:

- [ ] Content is accurate and up-to-date
- [ ] All links work correctly
- [ ] Images are optimized and have alt text
- [ ] Code examples are tested and functional
- [ ] Spelling and grammar are correct
- [ ] Frontmatter metadata is complete
- [ ] Content follows style guidelines
- [ ] Local build succeeds (`pnpm build`)

## 🚀 **Submission Process**

### Creating a Pull Request
1. **Fork** the repository to your GitHub account
2. **Create a branch** for your changes (`git checkout -b feature/improve-docs`)
3. **Make your changes** following the guidelines above
4. **Test locally** to ensure everything works
5. **Commit** with a clear, descriptive message
6. **Push** to your fork and create a pull request

### Pull Request Guidelines
- **Clear title** describing the change
- **Detailed description** of what was changed and why
- **Reference issues** if applicable
- **Include screenshots** for UI-related changes
- **Test instructions** if needed

### Review Process
All contributions go through review:
1. **Automated checks** - Formatting, links, build success
2. **Content review** - Accuracy, clarity, style consistency
3. **Technical review** - Code examples, technical accuracy
4. **Final approval** and merge

## 📞 **Getting Help**

### Documentation Questions
- **GitHub Discussions** - Ask questions and get community help
- **GitHub Issues** - Report bugs or request improvements
- **Email** - docs@maraikka.com - Direct contact with the documentation team

### Community Guidelines
- Be respectful and constructive
- Help others learn and contribute
- Share knowledge and best practices
- Follow the code of conduct

## 🎯 **Contribution Ideas**

### High-Impact Contributions
- **Fix typos and grammar** - Small but valuable improvements
- **Add missing examples** - Help users understand features better
- **Improve explanations** - Make complex topics clearer
- **Add screenshots** - Visual aids for better understanding
- **Update outdated content** - Keep documentation current

### Advanced Contributions
- **Create new guides** - Cover advanced topics or workflows
- **Improve SEO** - Enhance metadata and search optimization
- **Add interactive elements** - Enhance user experience
- **Optimize performance** - Improve site speed and accessibility

---

Thank you for contributing to make Maraikka's documentation better for everyone! 🚀