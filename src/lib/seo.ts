import { copy, profile, type Locale } from '../data/profile';

export function seo(locale: Locale, kind: 'home' | 'privacy' | '404' = 'home') {
  const c = copy[locale];
  const path = kind === 'home' ? '' : kind === 'privacy' ? 'privacy/' : '404.html';
  const canonical = new URL(`${locale === 'zh' ? 'zh/' : ''}${path}`, `${profile.url}/`).href;
  const title = kind === 'home'
    ? locale === 'en' ? profile.title : 'Jay Liu 刘杰 - 资深软件工程师 | FinTech | .NET | React | Cloud | AI Integration'
    : kind === 'privacy' ? c.privacyTitle : 'Page not found | Jay Liu';
  const description = kind === 'home'
    ? locale === 'en' ? profile.description : 'Jay Liu（刘杰）的个人网站。拥有 18 年以上软件开发经验，目前就职于 FNZ Group，专注企业金融平台、.NET、React、Azure 和 AI 应用。常驻新西兰奥克兰。'
    : kind === 'privacy' ? c.privacyIntro : 'This page could not be found. Return to Jay Liu’s personal website.';

  const alternates = kind === '404' ? [] : [
    { lang: 'en-NZ', href: new URL(path, `${profile.url}/`).href },
    { lang: 'zh-CN', href: new URL(`zh/${path}`, `${profile.url}/`).href },
    { lang: 'x-default', href: new URL(path, `${profile.url}/`).href },
  ];

  const graph = kind === 'home' ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person', '@id': `${profile.url}/#person`,
        name: profile.name, alternateName: profile.alternateName, url: `${profile.url}/`, email: profile.email,
        jobTitle: profile.role,
        worksFor: { '@type': 'Organization', name: profile.employer },
        homeLocation: { '@type': 'Place', name: profile.location },
        sameAs: profile.social.map((link) => link.href),
        knowsAbout: ['Software engineering', 'FinTech', '.NET', 'React', 'Azure', 'Applied AI', 'AI agents', 'Browser automation'],
      },
      { '@type': 'WebSite', '@id': `${profile.url}/#website`, url: `${profile.url}/`, name: profile.name, inLanguage: ['en-NZ', 'zh-CN'], publisher: { '@id': `${profile.url}/#person` } },
      { '@type': 'ProfilePage', '@id': `${canonical}#webpage`, url: canonical, name: title, description, inLanguage: c.lang, isPartOf: { '@id': `${profile.url}/#website` }, mainEntity: { '@id': `${profile.url}/#person` }, dateModified: profile.updated },
    ],
  } : null;
  return { canonical, title, description, alternates, graph, image: `${profile.url}/brand/social-card.png` };
}
