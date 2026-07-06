'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </NextThemesProvider>
  );
}
