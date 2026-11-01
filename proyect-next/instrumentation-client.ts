import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn:
    process.env.NEXT_PUBLIC_SENTRY_DSN ??
    "https://876239dd67a38cb71fd9056e860db748@o4512279498260480.ingest.us.sentry.io/4512357786255360",
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
