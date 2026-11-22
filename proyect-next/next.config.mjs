import { withSentryConfig } from "@sentry/nextjs/config"

const isProd = process.env.NODE_ENV === "production"

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"} https://www.googletagmanager.com https://www.google-analytics.com https://umami.codidevs.com https://app.cal.com https://cal.com https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline' https://app.cal.com https://cal.com",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com https://app.cal.com https://cal.com https://*.cal.com",
  "font-src 'self' data: https://cal.com https://app.cal.com",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://umami.codidevs.com https://*.ingest.us.sentry.io https://app.cal.com https://cal.com https://*.cal.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  "frame-src https://app.cal.com https://cal.com https://*.cal.com",
  "worker-src 'self' blob:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  ...(isProd ? ["upgrade-insecure-requests"] : []),
].join("; ")

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: ["192.168.56.1"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: cspDirectives },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          ...(isProd
            ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }]
            : []),
        ],
      },
    ]
  },
}

export default withSentryConfig(nextConfig, {
  org: "codidevs",
  project: "codidevs-landing",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  widenClientFileUpload: true,
  silent: !process.env.CI,
})
