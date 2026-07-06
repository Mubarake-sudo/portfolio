'use client';

import { useEffect, type ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

const LOCALES = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language || 'fr';

  useEffect(() => {
    document.documentElement.lang = currentLocale;
    document.documentElement.dir = currentLocale === 'ar' ? 'rtl' : 'ltr';
  }, [currentLocale]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-full glass border border-white/10 overflow-hidden text-sm font-medium text-white/80">
      <span className="px-3 py-2 hidden sm:inline-block">{LOCALES.find((locale) => locale.code === currentLocale)?.flag}</span>
      <select
        value={currentLocale}
        onChange={handleChange}
        className="appearance-none bg-transparent pr-6 pl-2 py-2 outline-none text-white/90"
      >
        {LOCALES.map((locale) => (
          <option key={locale.code} value={locale.code} className="bg-[#050816] text-white">
            {locale.flag} {locale.label}
          </option>
        ))}
      </select>
    </div>
  );
}
