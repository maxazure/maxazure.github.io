export const locales = {
  en: { lang: 'en-NZ', og: 'en_NZ', nativeName: 'English' },
  zh: { lang: 'zh-Hans', og: 'zh_CN', nativeName: '简体中文' },
  'zh-hant': { lang: 'zh-Hant', og: 'zh_TW', nativeName: '繁體中文' },
  ja: { lang: 'ja', og: 'ja_JP', nativeName: '日本語' },
  fr: { lang: 'fr', og: 'fr_FR', nativeName: 'Français' },
  ko: { lang: 'ko', og: 'ko_KR', nativeName: '한국어' },
} as const;

export type Locale = keyof typeof locales;
export const localeCodes = Object.keys(locales) as Locale[];
export type PageKind = 'home' | 'privacy' | 'projects' | '404';

export function localePath(locale: Locale, kind: PageKind = 'home') {
  const root = locale === 'en' ? '/' : `/${locale}/`;
  return kind === 'home' || kind === '404' ? root : `${root}${kind}/`;
}
