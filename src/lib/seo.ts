import { copy, profile, type Locale } from '../data/profile';

export function seo(locale: Locale, kind: 'home' | 'privacy' | 'projects' | '404' = 'home') {
  const c = copy[locale];
  const path = kind === 'home' ? '' : kind === '404' ? '404.html' : `${kind}/`;
  const canonical = new URL(`${locale === 'zh' ? 'zh/' : ''}${path}`, `${profile.url}/`).href;
  const title = kind === 'home'
    ? locale === 'en' ? profile.title : 'Jay Liu 刘杰 - 资深软件工程师 | FinTech | .NET | React | Cloud | AI Integration'
    : kind === 'privacy' ? c.privacyTitle : kind === 'projects' ? locale === 'en' ? 'Projects & Engineering Work | Jay Liu' : '项目与工程实践 | Jay Liu 刘杰' : 'Page not found | Jay Liu';
  const description = kind === 'home'
    ? locale === 'en' ? profile.description : 'Jay Liu（刘杰），常驻奥克兰的资深软件工程师。18 年以上企业软件经验，在 FNZ 参与金融平台交付，个人项目关注 AI 集成、Agent 与语音系统。'
    : kind === 'privacy' ? c.privacyIntro : kind === 'projects' ? locale === 'en' ? 'Explore 30 projects by Jay Liu: enterprise software, applied AI, voice workflows and open-source engineering tools, with project stages and public evidence.' : '查看 Jay Liu 的 30 个项目案例：企业软件、AI 应用、语音工作流与开源工程工具，包含项目阶段和公开证据链接。' : 'This page could not be found. Return to Jay Liu’s personal website.';

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
  } : kind === 'projects' ? {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    inLanguage: c.lang,
    isPartOf: { '@id': `${profile.url}/#website` },
    author: { '@id': `${profile.url}/#person` },
  } : null;
  return { canonical, title, description, alternates, graph, image: `${profile.url}/brand/social-card.png` };
}
