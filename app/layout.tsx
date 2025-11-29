import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arriva Soft - Digital Transformation Platform',
  description: 'Custom Software Solutions That Transform Your Business. Expert software development across Fintech, Healthcare, E-commerce, and Enterprise industries.',
  keywords: 'software development, custom software, fintech, healthcare tech, e-commerce, enterprise solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
