import catalog from './project-catalog.json';
import { content } from './content';
import { localeCodes, type Locale } from '../lib/locales';

function localisedProjects(locale: Locale) {
  const text = content[locale].projects;
  return catalog.map(project => ({ ...project, ...text[project.id as keyof typeof text] }));
}
export const projects = Object.fromEntries(localeCodes.map(locale => [locale, localisedProjects(locale)])) as Record<Locale, ReturnType<typeof localisedProjects>>;
