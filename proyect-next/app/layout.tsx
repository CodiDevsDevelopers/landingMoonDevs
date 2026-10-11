import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { EffectsProvider } from "@/components/codidevs/effects-provider"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://codidevs.com"),
  title: {
    default: "CodiDevs",
    template: "%s | CodiDevs",
  },
  description: "CodiDevs - desarrollo de software, automatizacion e integraciones para empresas.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d16",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased selection:bg-accent/25 selection:text-foreground">
        <EffectsProvider>{children}</EffectsProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6WCL0MT6LK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6WCL0MT6LK');`}
        </Script>
        <Script
          src="https://umami.codidevs.com/script.js"
          data-website-id="1a1253f4-5b84-4b91-9fe5-d8a46a1a8487"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
