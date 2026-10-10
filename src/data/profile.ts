import { content } from './content';
import { localeCodes, type Locale } from '../lib/locales';
export type { Locale } from '../lib/locales';

export const profile = {
  name: 'Jay Liu',
  alternateName: 'Jie Liu',
  url: 'https://jayliu.co.nz',
  email: 'maxazure@gmail.com',
  cvUrl: '/cv/Jie-Liu-CV.pdf?v=83db2384c48f',
  location: 'Auckland, New Zealand',
  employer: 'FNZ Group',
  role: 'Analyst Developer',
  updated: '2026-10-11',
  keywords: 'Jay Liu, senior software engineer, FinTech, .NET, ASP.NET Core, React, TypeScript, Azure, microservices, AI integration, AI agent, full stack developer, Auckland, New Zealand, FNZ',
  social: [
    { label: 'GitHub', href: 'https://github.com/maxazure' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jayliuinvers/' },
    { label: 'X', href: 'https://twitter.com/maxazure' },
  ],
} as const;

export const copy = Object.fromEntries(localeCodes.map(locale => [locale, content[locale].copy])) as Record<Locale, typeof content.en.copy>;
