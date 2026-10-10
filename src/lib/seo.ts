import { copy, profile } from '../data/profile';
import { content } from '../data/content';
import { locales, localeCodes, localePath, type Locale, type PageKind } from './locales';

export function seo(locale: Locale, kind: PageKind = 'home') {
  const c = copy[locale];
  const m = content[locale].meta;
  const canonical = new URL(kind === '404' ? '/404.html' : localePath(locale, kind), profile.url).href;
  const title = kind === 'home' ? m.homeTitle : kind === 'privacy' ? c.privacyTitle : kind === 'projects' ? m.projectsTitle : 'Page not found | Jay Liu';
  const description = kind === 'home' ? m.homeDescription : kind === 'privacy' ? c.privacyIntro : kind === 'projects' ? m.projectsDescription : 'This page could not be found. Return to Jay Liu’s personal website.';
  const alternates = kind === '404' ? [] : [
    ...localeCodes.map(code => ({ lang: locales[code].lang, href: new URL(localePath(code, kind), profile.url).href })),
    { lang: 'x-default', href: new URL(localePath('en', kind), profile.url).href },
  ];
  const graph = kind === 'home' ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person', '@id': `${profile.url}/#person`,
        name: profile.name, alternateName: profile.alternateName, url: `${profile.url}/`, email: profile.email,
        jobTitle: profile.role, worksFor: { '@type': 'Organization', name: profile.employer },
        homeLocation: { '@type': 'Place', name: profile.location }, sameAs: profile.social.map(link => link.href),
        knowsAbout: ['Software engineering', 'FinTech', '.NET', 'React', 'Azure', 'Applied AI', 'AI agents', 'Browser automation'],
      },
      { '@type': 'WebSite', '@id': `${profile.url}/#website`, url: `${profile.url}/`, name: profile.name, inLanguage: localeCodes.map(code => locales[code].lang), publisher: { '@id': `${profile.url}/#person` } },
      { '@type': 'ProfilePage', '@id': `${canonical}#webpage`, url: canonical, name: title, description, inLanguage: locales[locale].lang, isPartOf: { '@id': `${profile.url}/#website` }, mainEntity: { '@id': `${profile.url}/#person` }, dateModified: profile.updated },
    ],
  } : kind === 'projects' ? {
    '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': `${canonical}#webpage`,
    url: canonical, name: title, description, inLanguage: locales[locale].lang,
    isPartOf: { '@id': `${profile.url}/#website` }, author: { '@id': `${profile.url}/#person` },
  } : null;
  return { canonical, title, description, alternates, graph, image: `${profile.url}/brand/social-card.png`, socialAlt: m.socialAlt };
}
