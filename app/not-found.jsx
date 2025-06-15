/**
 * Custom 404 Not Found Page
 *
 * This component provides a beautiful, branded 404 error page that maintains
 * consistency with the Maraikka design system while offering helpful navigation
 * options for users who encounter missing pages.
 *
 * Design Philosophy:
 * - Transform frustrating 404 errors into positive brand experiences
 * - Provide clear navigation paths to help users find what they need
 * - Maintain visual consistency with the overall documentation design
 * - Use engaging visuals to reduce user frustration
 *
 * Technical Implementation:
 * - Server component for optimal performance and SEO
 * - CSS imported in layout for pre-rendered styling (no FOUC)
 * - Responsive design using CSS Grid and Flexbox
 * - Static export compatible with full pre-rendering
 *
 * Visual Design Elements:
 * - Gradient background matching Maraikka's purple/blue brand colors
 * - Large, eye-catching "404" text with gradient effects
 * - Subtle background blur effects for depth and visual interest
 * - Card-based layout for popular pages with hover transitions
 * - Consistent typography and spacing throughout
 *
 * User Experience Features:
 * - Clear error messaging with helpful context
 * - Primary action buttons for common user paths (Home, Getting Started)
 * - Popular pages section to help users discover relevant content
 * - Search suggestion to encourage use of site search functionality
 *
 * Accessibility Considerations:
 * - Semantic HTML structure with proper heading hierarchy
 * - High contrast text for readability
 * - Focus-friendly button and link styling
 * - Screen reader friendly content structure
 *
 * Performance Optimizations:
 * - CSS pre-loaded in layout prevents flash of unstyled content
 * - Server-side rendering for instant page loads
 * - Optimized for static generation and CDN caching
 * - No JavaScript required for styling or interactions
 */

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container">
      {/* Background Effects */}
      <div className="background-effect-1"></div>
      <div className="background-effect-2"></div>

      <div className="content-wrapper">
        {/* 404 Display */}
        <div style={{ marginBottom: "3rem" }}>
          <h1 className="error-number">404</h1>
          <h2 className="error-title">Page Not Found</h2>
          <p className="error-description">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back to protecting what matters.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="action-buttons">
          <Link href="https://maraikka.com" className="btn-primary">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Home
          </Link>

          <Link href="/getting-started/" className="btn-secondary">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Getting Started
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="popular-section">
          <h3 className="popular-title">Popular Pages</h3>

          <div className="popular-grid">
            {/* Installation Page Card */}
            <Link href="/installation/" className="page-card card-installation">
              <div className="card-header">
                <div className="card-icon card-icon-installation">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#a78bfa"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h4 className="card-title">Installation</h4>
              </div>
              <p className="card-description">
                Download and install Maraikka on your platform
              </p>
            </Link>

            {/* User Guide Page Card */}
            <Link href="/user-guide/" className="page-card card-user-guide">
              <div className="card-header">
                <div className="card-icon card-icon-user-guide">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#60a5fa"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="card-title">User Guide</h4>
              </div>
              <p className="card-description">
                Complete usage documentation and tutorials
              </p>
            </Link>

            {/* Security Page Card */}
            <Link href="/security/" className="page-card card-security">
              <div className="card-header">
                <div className="card-icon card-icon-security">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#4ade80"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h4 className="card-title">Security</h4>
              </div>
              <p className="card-description">
                Understanding encryption and security features
              </p>
            </Link>
          </div>
        </div>

        {/* Footer Message */}
        <div className="footer-message">
          <p className="footer-text">
            Can&apos;t find what you&apos;re looking for? Try using the{" "}
            <span style={{ fontWeight: "600", color: "#a78bfa" }}>
              search bar
            </span>{" "}
            at the top of the page or visit our{" "}
            <Link href="/" className="inline-link">
              homepage
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
