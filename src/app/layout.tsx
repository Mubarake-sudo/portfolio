import type { Metadata, Viewport } from 'next';
import './globals.css';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Mubarake Aderemou — Développeur Fullstack Junior',
  description: 'Portfolio de Mubarake Aderemou, Développeur Fullstack Junior basé à Abidjan, Côte d’Ivoire. Découvrez ses projets web et mobiles, ses compétences techniques et son parcours.',
  keywords: ['développeur fullstack junior', 'Mubarake Aderemou', 'Abidjan', 'portfolio'],
  authors: [{ name: 'Mubarake Aderemou' }],
  creator: 'Mubarake Aderemou',
  metadataBase: new URL('https://portfolio-khaki-iota-91.vercel.app/'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://portfolio-khaki-iota-91.vercel.app/',
    title: 'Mubarake Aderemou — Développeur Fullstack Junior',
    description: 'Portfolio de Mubarake Aderemou, Développeur Fullstack Junior basé à Abidjan, Côte d’Ivoire.',
    siteName: 'Portfolio de Mubarake Aderemou',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mubarake Aderemou — Développeur Fullstack Junior',
    description: 'Développeur Fullstack Junior basé à Abidjan, Côte d’Ivoire.',
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
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased overflow-x-hidden transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
