import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://tomvisolution.tech'),
  title: {
    default: 'TOMVIS Framework | Modular Enterprise Digital Solutions',
    template: '%s | TOMVIS Framework'
  },
  description: 'TOMVIS is a modular digital solution platform for developing enterprise web applications, healthcare systems, emergency EMS, cooperatives, finance, and operational dashboards. Simple • Connected • Sustainable.',
  keywords: [
    'TOMVIS',
    'TOMVIS Framework',
    'Modular Digital Solution Platform',
    'Healthcare Technology',
    'SmartOP',
    'Smart EMS',
    'Smart Cooperative',
    'Smart POS',
    'Smart Finance',
    'Smart Healthcare',
    'Smart Inspection',
    'Smart Dashboard',
    'Enterprise Web Application',
    'Hospital Information System',
    'Connected Care'
  ],
  authors: [{ name: 'TOMVIS Architecture Team' }],
  alternates: {
    canonical: 'https://tomvisolution.tech',
  },
  openGraph: {
    title: 'TOMVIS Framework | Building a Connected Tomorrow',
    description: 'TOMVIS is a modular digital solution platform for modern enterprise applications. One Framework. Multiple Solutions.',
    url: 'https://tomvisolution.tech',
    siteName: 'TOMVIS Framework',
    images: [
      {
        url: '/images/tomvis-landscape-card.png',
        width: 1200,
        height: 630,
        alt: 'TOMVIS Framework - Building a Connected Tomorrow',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TOMVIS Framework | Building a Connected Tomorrow',
    description: 'Modular digital solution platform for enterprise and healthcare web applications.',
    images: ['/images/tomvis-landscape-card.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0f1d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-grid-pattern">
        <ThemeProvider>
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 140px)', position: 'relative' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
