import catalog from './featured-catalog.json';
import { content } from './content';
import type { Locale } from '../lib/locales';

export function featuredWork(locale: Locale) {
  const text = content[locale].featured;
  return catalog.map(project => ({ ...project, ...text[project.id as keyof typeof text] }));
}
