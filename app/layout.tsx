import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Win Back | Shopify Abandoned Product Recovery',
  description: 'Track product page visits and win back customers who viewed but never bought with personalized emails and dynamic discounts.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b7f825d3-0b71-44d4-ace1-d00dabc13ac5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
