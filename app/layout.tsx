import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const mainFont = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kreasof AI - Pioneering Ethical and Culturally-Aware AGI",
  description:
    "We develop Artificial General Intelligence that empowers all of humanity, with a focus on aligning AI with human values and making it explainable. Based in Indonesia, serving humanity.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={mainFont.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
