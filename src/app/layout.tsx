import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CreationNetwork.ai - AI & Blockchain Digital Transformation",
  description: "Your all-in-one platform for content creation, e-commerce, and social media management powered by AI and blockchain technology.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} bg-[#01071d] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
