import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'TOMVIS | Demo & Solution Showcase',
    template: '%s | TOMVIS Showcase'
  },
  description: 'Tomvis is a modular application platform designed for building modern, secure and scalable digital solutions. One Framework. Multiple Solutions.',
  keywords: [
    'Tomvis',
    'Tomvis Framework',
    'Solution Showcase',
    'SmartOP',
    'Smart EMS',
    'Smart Cooperative',
    'Smart POS',
    'Smart Finance',
    'Smart Healthcare',
    'Smart Inspection',
    'Smart Dashboard'
  ],
  authors: [{ name: 'Tomvis Architecture Team' }],
  openGraph: {
    title: 'TOMVIS | Demo & Solution Showcase',
    description: 'One Framework. Multiple Solutions. Explore live interactive demonstrations of enterprise solutions built on the Tomvis platform.',
    siteName: 'TOMVIS Demo & Solution Showcase',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  }
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
