import en from './locales/en.json';
import zh from './locales/zh.json';
import zhHant from './locales/zh-hant.json';
import ja from './locales/ja.json';
import fr from './locales/fr.json';
import ko from './locales/ko.json';
import type { Locale } from '../lib/locales';

// English defines the complete content contract. No silent language fallback.
export type SiteContent = typeof en;
export const content: Record<Locale, SiteContent> = { en, zh, 'zh-hant': zhHant, ja, fr, ko };
export function ui(locale: Locale) {
  return (text: keyof SiteContent['ui']) => content[locale].ui[text];
}
