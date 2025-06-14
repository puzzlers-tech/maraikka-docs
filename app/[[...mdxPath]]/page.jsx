// Dynamic MDX Page Handler for Maraikka Documentation
// This file handles all dynamic routes for MDX content using Next.js App Router
// It integrates with Nextra to provide documentation functionality

import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

// Static Site Generation
// Generate static paths for all MDX files in the content directory
// This enables pre-rendering of all documentation pages at build time
export const generateStaticParams = generateStaticParamsFor('mdxPath')

// Metadata Generation
// Generates page metadata (title, description, etc.) for SEO and browser display
// Runs at build time for static generation and at request time for dynamic routes
export async function generateMetadata(props) {
  // Extract the dynamic route parameters
  const params = await props.params

  // Import the MDX page and extract its metadata
  const { metadata } = await importPage(params.mdxPath)

  // Return metadata for Next.js to use in <head>
  return metadata
}

// MDX Wrapper Component
// Gets the wrapper component from mdx-components.jsx for consistent page layout
const Wrapper = getMDXComponents().wrapper

// Main Page Component
// Renders MDX content within the documentation layout
// Handles dynamic routing for all documentation pages
export default async function Page(props) {
  // Extract dynamic route parameters from Next.js
  const params = await props.params

  // Import the MDX page content and associated data
  // This includes the MDX component, table of contents, and metadata
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result

  // Render the MDX content within the documentation wrapper
  // The wrapper provides consistent layout, navigation, and styling
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}

// How This Works
//
// DYNAMIC ROUTING:
// - [[...mdxPath]] captures all routes like /installation, /user-guide/setup, etc.
// - Next.js passes the route segments as params.mdxPath array
//
// NEXTRA INTEGRATION:
// - generateStaticParamsFor() finds all MDX files and creates static routes
// - importPage() loads MDX content, TOC, and metadata for each route
//
// STATIC GENERATION:
// - All documentation pages are pre-rendered at build time
// - Fast loading and excellent SEO performance
//
// COMPONENT STRUCTURE:
// - Wrapper provides consistent layout and navigation
// - MDXContent is the actual documentation content
// - TOC and metadata enable rich documentation features