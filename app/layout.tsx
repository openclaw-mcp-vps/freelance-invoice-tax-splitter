import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Tax Splitter — Split Freelance Invoices by Tax Jurisdiction',
  description: 'Automatically categorize freelance income by client location and tax rules for multi-state/country tax filing. Built for remote freelancers earning $50k+.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="395f0a53-a7ac-4fe5-a00d-9d4b3f95adeb"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
