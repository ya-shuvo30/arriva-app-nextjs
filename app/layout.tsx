import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arriva Soft - Transform Your Business with Custom Software Solutions | 23+ Years Excellence',
  description: 'Award-winning software development company delivering custom solutions for Fintech, Healthcare, E-commerce & Enterprise. 200+ successful projects, 850+ expert developers, 98% client satisfaction. Get a free consultation today.',
  keywords: 'custom software development, enterprise software solutions, fintech development, healthcare software, e-commerce platforms, mobile app development, cloud solutions, AI machine learning, software consulting, digital transformation, agile development, offshore development team',
  authors: [{ name: 'Arriva Soft' }],
  creator: 'Arriva Soft',
  publisher: 'Arriva Soft',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.arrivasofts.com',
    siteName: 'Arriva Soft',
    title: 'Arriva Soft - Transform Your Business with Custom Software Solutions',
    description: 'Award-winning software development company with 23+ years of excellence. 200+ successful projects across Fintech, Healthcare, E-commerce & Enterprise industries.',
    images: [
      {
        url: 'https://www.arrivasofts.com/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Arriva Soft - Custom Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arriva Soft - Transform Your Business with Custom Software Solutions',
    description: 'Award-winning software development company with 23+ years of excellence. 200+ successful projects.',
    images: ['https://www.arrivasofts.com/og-image.svg'],
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://www.arrivasofts.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/app-icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/app-icon.svg" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Arriva Soft',
              url: 'https://www.arrivasofts.com',
              logo: 'https://www.arrivasofts.com/app-icon.svg',
              description: 'Award-winning software development company with 23+ years of excellence',
              foundingDate: '2001',
              areaServed: 'Worldwide',
              sameAs: [
                'https://www.linkedin.com/company/arrivasoft',
                'https://twitter.com/arrivasoft',
                'https://www.facebook.com/arrivasoft',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '200',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
