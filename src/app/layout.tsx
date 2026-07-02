import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mubarake Aderemou – MUBADEV | Développeur Full Stack',
  description: 'Portfolio professionnel de Mubarake Aderemou, développeur Full Stack passionné. Expert Next.js, React, TypeScript, Node.js et bien plus. Basé à Paris, ouvert aux opportunités mondiales.',
  keywords: ['développeur full stack', 'Next.js', 'React', 'TypeScript', 'MUBADEV', 'Mubarake Aderemou', 'portfolio', 'EPITECH'],
  authors: [{ name: 'Mubarake Aderemou' }],
  creator: 'Mubarake Aderemou',
  metadataBase: new URL('https://mubadev.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://mubadev.vercel.app',
    title: 'Mubarake Aderemou – MUBADEV | Développeur Full Stack',
    description: 'Portfolio professionnel de Mubarake Aderemou – Développeur Full Stack, créateur d\'expériences digitales premium.',
    siteName: 'MUBADEV Portfolio',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MUBADEV Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mubarake Aderemou – MUBADEV',
    description: 'Développeur Full Stack | Next.js · React · TypeScript · Node.js',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050816',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050816] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
