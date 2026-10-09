export type Locale = 'en' | 'zh';

export const profile = {
  name: 'Jay Liu',
  alternateName: 'Jie Liu',
  url: 'https://jayliu.co.nz',
  email: 'maxazure@gmail.com',
  location: 'Auckland, New Zealand',
  employer: 'FNZ Group',
  role: 'Analyst Developer',
  updated: '2026-10-10',
  // Preserve the established search identity and description verbatim.
  title: 'Jay Liu - Senior Software Engineer | FinTech | .NET | React | Cloud | AI Integration',
  description: 'Professional portfolio of Jay Liu, a senior software engineer with 18+ years of experience. Currently at FNZ Group building enterprise financial platforms with .NET, React, Azure, and AI integration. Based in Auckland, New Zealand.',
  keywords: 'Jay Liu, senior software engineer, FinTech, .NET, ASP.NET Core, React, TypeScript, Azure, microservices, AI integration, AI agent, full stack developer, Auckland, New Zealand, FNZ',
  social: [
    { label: 'GitHub', href: 'https://github.com/maxazure' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jayliuinvers/' },
    { label: 'X', href: 'https://twitter.com/maxazure' },
  ],
} as const;

export const copy = {
  en: {
    lang: 'en-NZ', switchLabel: '中文', switchHref: '/zh/',
    skip: 'Skip to content', menu: 'Menu', navLabel: 'Main navigation',
    nav: [ ['about', 'About'], ['portfolio', 'Projects'], ['skills', 'Skills'], ['resume', 'Experience'], ['contact', 'Contact'] ],
    location: 'Auckland, New Zealand', heroLabel: 'Software / Systems / Applied AI',
    role: 'Senior Software Engineer',
    heroIntro: "Enterprise engineering. Applied AI. Reliable systems.",
    heroBody: "FinTech development at FNZ, with independent work in agent orchestration, knowledge retrieval and production software. Connecting AI capabilities to sound engineering practices.",
    viewWork: 'Explore my work', getInTouch: 'Get in touch',
    current: 'Currently at FNZ Group', focus: 'Exploring applied AI',
    orbitLabel: 'Engineering, connected.', orbitFooter: 'Human judgment. Software. Intelligence.',
    aboutLabel: 'About me', aboutHeading: "Software foundations.\nSystems thinking.",
    aboutLead: "Enterprise software experience, extended into the engineering of AI-enabled systems.",
    aboutBody: 'I’m Jay, a software engineer based in Auckland. Over 18 years, I’ve worked on financial platforms, healthcare systems and web applications in China and New Zealand. I’m still at FNZ Group, working as an Analyst Developer on enterprise financial software.',
    aboutBody2: "My recent independent work focuses on agent-tool interfaces, persistent knowledge retrieval and transactional workflow platforms. The common thread is reliability: explicit execution boundaries, source provenance, concurrency control and validation. I bring the same attention to testing, maintainability and production support that underpins enterprise development.",
    aboutFacts: [ ['18+', 'Years in software'], ['FNZ', 'Current workplace'], ['Auckland', 'Home base'] ],
    workLabel: "Selected engineering work", workHeading: "Recent systems & projects.",
    workIntro: "Independent engineering projects alongside my role at FNZ. Each explores a practical systems problem with relevance to enterprise software and applied AI.",
    workLink: 'More on GitHub', projectLink: 'Explore project',
    projects: [
  {
    "name": "Agentic software delivery",
    "category": "Orchestration & tool interfaces",
    "description": "Developing workflows that connect coding agents, browser automation and command-line tools to software delivery. Separating model-led planning from deterministic execution checks, with explicit permissions, observable actions and build/test checkpoints.",
    "tags": [
      "Agent orchestration",
      "Tool contracts",
      "CI/CD"
    ],
    "visual": "flow"
  },
  {
    "name": "Knowledge & memory infrastructure",
    "category": "Retrieval & evidence governance",
    "description": "Prototyping persistent knowledge workflows with source-linked records, validity checks and review gates. Keeping retrieval and model-generated candidates separate from approved knowledge, with bounded context selection and citation checks.",
    "tags": [
      "Persistent memory",
      "Retrieval",
      "Provenance"
    ],
    "visual": "orbit"
  },
  {
    "name": "Transactional workflow platforms",
    "category": "Data integrity & systems integration",
    "description": "Building business applications around typed API boundaries and a PostgreSQL source of truth. Applying idempotent commands, optimistic concurrency and versioned records across web and CLI interfaces to handle retries and conflicting updates.",
    "tags": [
      "PostgreSQL",
      "Idempotency",
      "Concurrency"
    ]
  },
  {
    "name": "Multimodal processing pipelines",
    "category": "Reproducible automation",
    "description": "Developing modular speech and video tooling with source-bound artifacts, timeline normalisation and automated media checks. Applying reproducible pipeline design to model-assisted processing and downstream delivery.",
    "tags": [
      "Python",
      "FFmpeg",
      "Artifact validation"
    ],
    "href": "https://github.com/maxazure/video-editing-skill",
    "linkLabel": "View public toolkit"
  }
],
    skillLabel: 'Skills & approach', skillHeading: 'A broader toolkit.\nThe same engineering standards.',
    skillIntro: 'A strong software foundation, with an expanding focus on practical AI systems and the tools around them.',
    skills: [
      { name: 'Software engineering', summary: 'Building and maintaining applications from the data layer to the interface.', items: ['C# · .NET · ASP.NET Core', 'React · TypeScript · Astro', 'Python · FastAPI · Node.js', 'SQL Server · PostgreSQL · REST APIs'] },
      { name: 'Applied AI & agents', summary: 'Connecting models, knowledge and tools into workflows people can use.', items: ['LLM integration · AI agents · MCP', 'Retrieval · RAG · Vector search', 'Agent memory · Knowledge management', 'Browser automation · AI-assisted development'] },
      { name: 'Cloud & delivery', summary: 'Taking systems into production and looking after them once they’re there.', items: ['Azure · Cloudflare · Linux', 'Docker · CI/CD · GitHub Actions', 'Architecture · Testing · Code review', 'Observability · Production support'] },
      { name: 'Systems integration', summary: 'Designing interfaces and data flows that remain predictable under change.', items: ['Typed APIs · Schema validation', 'Idempotency · Optimistic concurrency', 'Source provenance · Execution boundaries', 'Responsive UI · Accessibility'] },
    ],
    researchLabel: 'Research context', researchHeading: 'Engineering questions,\nwith research behind them.',
    researchIntro: 'Selected research relevant to my current work: how agents interact with tools, how retrieval grounds answers, and how memory stays useful over time.',
    papers: [
  {
    "name": "ReAct",
    "detail": "Yao et al. · ICLR 2023",
    "note": "Interleaving reasoning and external actions provides a useful lens for designing observable agent-tool loops.",
    "href": "https://arxiv.org/abs/2210.03629",
    "title": "ReAct: Synergizing Reasoning and Acting in Language Models"
  },
  {
    "name": "SWE-agent",
    "detail": "Yang et al. · NeurIPS 2024",
    "note": "Agent-computer interface design connects directly to stable tool contracts and software-delivery workflows.",
    "href": "https://arxiv.org/abs/2405.15793",
    "title": "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
  },
  {
    "name": "Retrieval-Augmented Generation",
    "detail": "Lewis et al. · NeurIPS 2020",
    "note": "Combining language models with external retrieval frames the problem of grounding answers in source material.",
    "href": "https://arxiv.org/abs/2005.11401",
    "title": "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
  },
  {
    "name": "LongMemEval",
    "detail": "Wu et al. · ICLR 2025",
    "note": "Temporal reasoning, knowledge updates and abstention are relevant to source validity and evidence sufficiency in memory systems.",
    "href": "https://arxiv.org/abs/2410.10813",
    "title": "LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory"
  }
],
    experienceLabel: 'Experience', experienceHeading: 'The work behind the work.',
    experienceIntro: 'A career spanning enterprise engineering, team leadership and teaching.',
    experience: [
      { date: 'Oct 2022 - Present', role: 'Analyst Developer', company: 'FNZ Group', place: 'Auckland, New Zealand', description: 'Building and maintaining enterprise financial platforms with C# and .NET. Working across feature delivery, code review, production support and reliable releases.' },
      { date: 'Feb - Jul 2022', role: 'Information Technology Tutor', company: 'Southern Institute of Technology', place: 'Invercargill, New Zealand', description: 'Teaching programming fundamentals and software engineering, with practical coursework and individual mentoring.' },
      { date: '2018 - 2021', role: 'Full Stack Developer', company: 'Best IT Solution / Hangzhou Xianbing Technology', place: 'New Zealand & China', description: 'Developing commercial web systems and SMS platforms with Flask, REST APIs, MySQL, React and Redux.' },
      { date: '2008 - 2017', role: 'Engineering Manager & Technical Lead', company: 'Enterprise software & consulting', place: 'Beijing, China', description: 'Leading teams and delivering healthcare information systems, enterprise software, web platforms and mobile applications.' },
    ],
    educationLabel: 'Education', education: 'Master of Information Technology', educationSchool: 'Southern Institute of Technology · 2019-2021', educationNote: 'Research interests in conversational AI and generative models.',
    contactLabel: 'Contact', contactHeading: 'Let’s talk engineering.',
    contactBody: "For conversations about senior software engineering, enterprise platforms or applied AI systems, you can reach me directly.",
    emailLabel: 'Email Jay', contactBusiness: "Independent engineering work also includes BestAI Labs.",
    personalNote: 'Personal projects and views are my own.', privacy: 'Privacy', backHome: 'Back to home', footerRole: 'Software engineer & builder',
    privacyTitle: 'Privacy | Jay Liu', privacyHeading: 'A simple site. A clear policy.',
    privacyIntro: 'This is Jay Liu’s personal portfolio. It provides information about my work and links to ways to contact me.',
    privacySections: [
      ['Browsing this site', 'This site has no contact form, advertising trackers, analytics scripts or cookies set by its application code. Fonts and graphics are served with the site. GitHub Pages hosts the website and may process technical information such as IP addresses and request logs under its own privacy policy.'],
      ['Email and external links', 'Email links open your own email application. If you email me, I use the details you provide to read and respond to your message. Links to GitHub, LinkedIn, X and BestAI take you to separate services with their own privacy policies.'],
      ['Questions', 'Contact maxazure@gmail.com if you have a question about information you have shared with me, or want to request access or correction.'],
    ],
    updatedLabel: 'Updated 10 October 2026',
  },
  zh: {
    lang: 'zh-CN', switchLabel: 'EN', switchHref: '/',
    skip: '跳到正文', menu: '菜单', navLabel: '主导航',
    nav: [ ['about', '关于'], ['portfolio', '项目'], ['skills', '技能'], ['resume', '经历'], ['contact', '联系'] ],
    location: '新西兰，奥克兰', heroLabel: '软件 / 系统 / AI 应用',
    role: '资深软件工程师',
    heroIntro: "企业软件工程、AI 应用与可靠系统。",
    heroBody: "目前在 FNZ 从事金融科技开发，工作之外探索 Agent 编排、知识检索和生产级软件，让 AI 能力与工程实践结合。",
    viewWork: '看看我的项目', getInTouch: '联系我', current: '目前就职于 FNZ Group', focus: '持续探索 AI 应用',
    orbitLabel: '让工程能力连接起来。', orbitFooter: '人的判断。软件。智能。',
    aboutLabel: '关于我', aboutHeading: "软件工程基础，\n系统设计视角。",
    aboutLead: "从企业软件开发出发，逐步扩展到 AI 系统的工程实现。",
    aboutBody: '我是 Jay，中文名刘杰，目前住在奥克兰。过去 18 年多，我在中国和新西兰参与过金融平台、医疗信息系统和 Web 应用的开发。目前我仍在 FNZ Group 任职，担任 Analyst Developer，从事企业金融软件开发。',
    aboutBody2: "近期的独立项目集中在 Agent 与工具的接口、持久化知识检索和事务型工作流平台。共同关注的问题是可靠性：明确执行边界、保留来源、处理并发冲突，并验证执行结果。测试、可维护性和生产支持也贯穿这些项目。",
    aboutFacts: [ ['18+', '年软件开发经验'], ['FNZ', '目前任职公司'], ['Auckland', '生活与工作城市'] ],
    workLabel: "近期工程项目", workHeading: "近期的系统与项目。",
    workIntro: "这些是 FNZ 工作之外的独立工程项目，围绕企业软件和 AI 应用中的实际系统问题展开。",
    workLink: '更多 GitHub 项目', projectLink: '查看项目',
    projects: [
  {
    "name": "Agent 驱动的软件交付",
    "category": "编排与工具接口",
    "description": "开发连接编程 Agent、浏览器自动化和命令行工具的交付工作流，将模型规划与确定性的执行检查分离，并加入明确权限、可观测操作及构建和测试检查点。",
    "tags": [
      "Agent 编排",
      "工具契约",
      "CI/CD"
    ],
    "visual": "flow"
  },
  {
    "name": "知识与记忆基础设施",
    "category": "检索与证据管理",
    "description": "构建持久化知识工作流原型，结合来源关联、有效性检查和审阅机制。区分检索结果、模型生成候选与已确认知识，并约束上下文选择、检查引用。",
    "tags": [
      "持久化记忆",
      "检索",
      "来源追溯"
    ],
    "visual": "orbit"
  },
  {
    "name": "事务型工作流平台",
    "category": "数据一致性与系统集成",
    "description": "围绕类型化 API 边界和 PostgreSQL 统一数据源构建业务应用，通过幂等命令、乐观并发控制和版本化记录，处理 Web 与 CLI 接口中的重试和更新冲突。",
    "tags": [
      "PostgreSQL",
      "幂等性",
      "并发控制"
    ]
  },
  {
    "name": "多模态处理流水线",
    "category": "可复现的自动化",
    "description": "开发模块化语音与视频工具，使用绑定来源的产物、时间轴归一和自动媒体检查，将可复现流水线设计用于模型辅助处理及后续交付。",
    "tags": [
      "Python",
      "FFmpeg",
      "产物验证"
    ],
    "href": "https://github.com/maxazure/video-editing-skill",
    "linkLabel": "查看公开工具"
  }
],
    skillLabel: '技能与方法', skillHeading: '工具更多了，\n工程要求依然具体。',
    skillIntro: '以软件工程为基础，逐步扩展到 AI 系统及其周边工具。',
    skills: [
      { name: '软件工程', summary: '从数据层到用户界面，构建和维护完整应用。', items: ['C# · .NET · ASP.NET Core', 'React · TypeScript · Astro', 'Python · FastAPI · Node.js', 'SQL Server · PostgreSQL · REST APIs'] },
      { name: 'AI 应用与 Agent', summary: '把模型、知识和工具连接成可以使用的工作流。', items: ['LLM 集成 · AI Agent · MCP', '检索 · RAG · 向量搜索', 'Agent 记忆 · 知识管理', '浏览器自动化 · AI 辅助开发'] },
      { name: '云平台与交付', summary: '让系统上线运行，并持续处理运行中的问题。', items: ['Azure · Cloudflare · Linux', 'Docker · CI/CD · GitHub Actions', '架构 · 测试 · 代码审查', '可观测性 · 生产支持'] },
      { name: '系统集成', summary: '让接口与数据流在变化和冲突下仍然可预测。', items: ['类型化 API · Schema 校验', '幂等性 · 乐观并发控制', '来源追溯 · 执行边界', '响应式界面 · 无障碍'] },
    ],
    researchLabel: '研究背景', researchHeading: '工程问题，\n也有研究依据。',
    researchIntro: '与近期工程方向相关的论文，涉及 Agent 工具交互、检索增强，以及长期记忆中的时效性与证据问题。',
    papers: [
  {
    "name": "ReAct",
    "detail": "Yao 等 · ICLR 2023",
    "note": "将推理与外部行动交织，为可观测的 Agent 工具调用循环提供了研究视角。",
    "href": "https://arxiv.org/abs/2210.03629",
    "title": "ReAct: Synergizing Reasoning and Acting in Language Models"
  },
  {
    "name": "SWE-agent",
    "detail": "Yang 等 · NeurIPS 2024",
    "note": "Agent 与计算机的接口设计，与稳定工具契约和软件交付工作流直接相关。",
    "href": "https://arxiv.org/abs/2405.15793",
    "title": "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
  },
  {
    "name": "Retrieval-Augmented Generation",
    "detail": "Lewis 等 · NeurIPS 2020",
    "note": "结合语言模型与外部检索，为基于来源材料生成答案提供了技术框架。",
    "href": "https://arxiv.org/abs/2005.11401",
    "title": "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
  },
  {
    "name": "LongMemEval",
    "detail": "Wu 等 · ICLR 2025",
    "note": "关注时间推理、知识更新和信息不足时的拒答，可用于思考记忆系统的来源有效性与证据充分性。",
    "href": "https://arxiv.org/abs/2410.10813",
    "title": "LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory"
  }
],
    experienceLabel: '工作经历', experienceHeading: '一路积累的经验。', experienceIntro: '经历过企业软件开发、团队管理和技术教学。',
    experience: [
      { date: '2022 年 10 月至今', role: 'Analyst Developer', company: 'FNZ Group', place: '新西兰，奥克兰', description: '使用 C# 和 .NET 开发、维护企业金融平台，参与功能交付、代码审查、生产支持和版本发布。' },
      { date: '2022 年 2-7 月', role: '信息技术讲师', company: 'Southern Institute of Technology', place: '新西兰，因弗卡吉尔', description: '教授编程基础和软件工程，通过实践课程和个别辅导帮助学生学习。' },
      { date: '2018-2021 年', role: '全栈开发工程师', company: 'Best IT Solution / Hangzhou Xianbing Technology', place: '新西兰与中国', description: '使用 Flask、REST API、MySQL、React 和 Redux 开发商用 Web 系统和短信平台。' },
      { date: '2008-2017 年', role: '工程经理与技术负责人', company: '企业软件与技术咨询', place: '中国，北京', description: '带领团队交付医疗信息系统、企业软件、Web 平台和移动应用。' },
    ],
    educationLabel: '教育经历', education: '信息技术硕士', educationSchool: 'Southern Institute of Technology · 2019-2021', educationNote: '研究方向涉及对话式 AI 与生成模型。',
    contactLabel: '联系', contactHeading: "聊聊工程与合作。", contactBody: "欢迎交流资深软件工程岗位、企业平台开发，以及 AI 系统的工程应用。可以通过邮件直接联系我。",
    emailLabel: '给 Jay 发邮件', contactBusiness: "我的独立工程实践也包括 BestAI Labs。",
    personalNote: '个人项目及观点仅代表我自己。', privacy: '隐私说明', backHome: '返回首页', footerRole: '软件工程师，也喜欢做工具',
    privacyTitle: '隐私说明 | Jay Liu', privacyHeading: '一个简单的网站，\n一份清楚的说明。',
    privacyIntro: '这是 Jay Liu 的个人网站，用于介绍我的工作，并提供联系入口。',
    privacySections: [
      ['浏览网站', '本站的应用代码没有设置 Cookie，也没有联系表单、广告跟踪或分析脚本。字体和图形随网站提供。网站由 GitHub Pages 托管，托管方可能根据其隐私政策处理 IP 地址、访问日志等技术信息。'],
      ['邮件和外部链接', '邮件链接会打开你自己的邮件应用。如果你给我发邮件，我会使用你提供的信息阅读和回复。GitHub、LinkedIn、X 和 BestAI 的链接会带你前往各自的网站，它们有独立的隐私政策。'],
      ['有疑问时', '如果对分享给我的个人信息有疑问，或需要申请查看、更正，可发送邮件至 maxazure@gmail.com。'],
    ],
    updatedLabel: '更新于 2026 年 10 月 10 日',
  },
} as const;
