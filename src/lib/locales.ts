export const locales = {
  en: { lang: 'en-NZ', og: 'en_NZ', name: 'English' },
  zh: { lang: 'zh-Hans', og: 'zh_CN', name: 'Simplified Chinese' },
  'zh-hant': { lang: 'zh-Hant', og: 'zh_TW', name: 'Traditional Chinese' },
  ja: { lang: 'ja', og: 'ja_JP', name: 'Japanese' },
  fr: { lang: 'fr', og: 'fr_FR', name: 'French' },
  ko: { lang: 'ko', og: 'ko_KR', name: 'Korean' },
} as const;

export type Locale = keyof typeof locales;
export const localeCodes = Object.keys(locales) as Locale[];
export type PageKind = 'home' | 'privacy' | 'projects' | '404';

export function localePath(locale: Locale, kind: PageKind = 'home') {
  const root = locale === 'en' ? '/' : `/${locale}/`;
  return kind === 'home' || kind === '404' ? root : `${root}${kind}/`;
}
