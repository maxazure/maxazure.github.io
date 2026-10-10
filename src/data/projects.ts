import { projectAdditions } from './project-additions';

const existingProjects = {
  "en": [
    {
      "id": "operations-erp",
      "group": "enterprise",
      "name": "Tourism industry · Operations ERP",
      "description": "An ERP development instance connecting planning, product/SKU catalogues, orders, procurement and operational reminders, with permissions and audit records.",
      "tags": [
        "React / TypeScript",
        "NestJS / PostgreSQL",
        "ERP workflows"
      ],
      "status": "development",
      "image": "/projects/operations-erp.webp",
      "alt": "Small empty-data demonstration of the operations ERP dashboard",
    },
    {
      "id": "transactional-crm",
      "group": "enterprise",
      "name": "Business operations · Enterprise CRM",
      "description": "Relationships, projects, invoicing and operational records in one platform, with PostgreSQL, typed APIs, controlled writes and revision history.",
      "tags": [
        "Python / FastAPI",
        "PostgreSQL",
        "Concurrency control"
      ],
      "status": "operational",
      "image": "/projects/transactional-crm.webp",
      "alt": "Small redacted screenshot of the internal operations",
    },
    {
      "id": "agent-workbench",
      "group": "labs",
      "name": "AgentWeb · AI engineering workbench",
      "description": "A browser workbench for coding-agent sessions, streamed tool events and workspace artifacts, built with React, TypeScript and Fastify.",
      "tags": [
        "React / TypeScript",
        "Fastify / SSE",
        "CLI integration"
      ],
      "status": "private",
      "image": "/projects/agent-workbench.webp",
      "alt": "Small redacted screenshot of the ai engineering workbench",
    },
    {
      "id": "knowledge-memory",
      "group": "labs",
      "name": "Knowledge & memory · Evidence workflow",
      "description": "A source-backed knowledge prototype with validity checks, reviewed records and traceable retrieval.",
      "tags": [
        "Python CLI",
        "Retrieval",
        "Source provenance"
      ],
      "status": "prototype",
      "image": "/projects/knowledge-memory.webp",
      "alt": "Small redacted screenshot of the evidence prototype",
    },
    {
      "id": "video-editing",
      "group": "labs",
      "name": "Video Editing Skill",
      "description": "Transcript-led editing and reproducible media delivery with Python, FFmpeg and artifact validation.",
      "tags": [
        "Python",
        "FFmpeg",
        "Artifact validation"
      ],
      "status": "open",
      "image": "/projects/video-editing-interface.jpg",
      "alt": "Generated interface mockup: Transcript-led editing and media export",
      "href": "https://github.com/maxazure/video-editing-skill"
    },
    {
      "id": "speech-tooling",
      "group": "labs",
      "name": "OmniVoice TTS Skill",
      "description": "A command-line wrapper for the existing OmniVoice engine, packaging local speech generation into repeatable workflows.",
      "tags": [
        "Python",
        "Local inference",
        "Tool integration"
      ],
      "status": "open",
      "image": "/projects/speech-tooling-interface.jpg",
      "alt": "Generated interface mockup: Local speech synthesis and audio preview",
      "href": "https://github.com/maxazure/omnivoice-tts-skill"
    },
    {
      "id": "bookkeeping-assistant",
      "group": "labs",
      "name": "NZ Accounting Assistant",
      "description": "Receipt and statement normalisation, structured ledgers and reconciliation packs for human review.",
      "tags": [
        "Structured JSON",
        "Reconciliation",
        "Human review"
      ],
      "status": "open",
      "image": "/projects/bookkeeping-assistant-interface.jpg",
      "alt": "Generated interface mockup: Ledger reconciliation and accountant review",
      "href": "https://github.com/maxazure/new-zealand-accounting-assistant"
    },
    {
      "id": "tourism",
      "group": "recent",
      "name": "Tourism industry · Journey website",
      "description": "A travel website organising journeys, itineraries and enquiry paths with reusable pages and structured metadata.",
      "tags": [
        "Astro",
        "TypeScript",
        "Content architecture"
      ],
      "status": "live",
      "image": "/projects/tourism.webp",
      "alt": "Small redacted screenshot of the journey website",
      "href": "https://futuresgroup.co.nz/"
    },
    {
      "id": "transport",
      "group": "recent",
      "name": "Transport industry · Service website",
      "description": "A bilingual service website with clear service information, contact flows and mobile navigation.",
      "tags": [
        "Astro",
        "React",
        "Bilingual routing"
      ],
      "status": "live",
      "image": "/projects/transport.webp",
      "alt": "Small redacted screenshot of the service website",
      "href": "https://drive1towing.co.nz/"
    },
    {
      "id": "accounting",
      "group": "recent",
      "name": "Accounting industry · Services & insights",
      "description": "A bilingual professional-services website with a structured insights library and maintainable content models.",
      "tags": [
        "Astro",
        "Content modelling",
        "Technical SEO"
      ],
      "status": "live",
      "image": "/projects/accounting.webp",
      "alt": "Small redacted screenshot of the services & insights",
      "href": "https://pillar.nz/"
    },
    {
      "id": "finance-archive",
      "group": "legacy",
      "name": "Financial industry · Digital asset platform",
      "description": "An earlier digital-asset web project. The preview is historical; the current domain serves a holding page.",
      "tags": [
        "Web development",
        "Financial services"
      ],
      "status": "holding",
      "image": "/projects/finance-archive.webp",
      "alt": "Small redacted screenshot of the digital asset platform",
      "href": "https://www.renrenbit.com/"
    },
    {
      "id": "medical-archive-a",
      "group": "legacy",
      "name": "Medical industry · Service website",
      "description": "An earlier healthcare website presenting service categories, team information and enquiry paths.",
      "tags": [
        "Web development",
        "Information architecture"
      ],
      "status": "archive",
      "image": "/projects/medical-archive-a.webp",
      "alt": "Small redacted screenshot of the service website",
    },
    {
      "id": "consumer-app-archive",
      "group": "legacy",
      "name": "Consumer app · Spending & activity",
      "description": "A mobile-app project for recording spending and activity, with a companion web introduction.",
      "tags": [
        "App development",
        "Web landing page"
      ],
      "status": "archive",
      "image": "/projects/consumer-app-archive.webp",
      "alt": "Small redacted screenshot of the spending & activity records",
    },
    {
      "id": "medical-archive-b",
      "group": "legacy",
      "name": "Medical industry · Specialist website",
      "description": "An earlier healthcare website presenting specialist services and patient-facing information.",
      "tags": [
        "Web development",
        "Service content"
      ],
      "status": "archive",
      "image": "/projects/medical-archive-b.webp",
      "alt": "Small redacted screenshot of the specialist service website",
    }
  ],
  "zh": [
    {
      "id": "operations-erp",
      "group": "enterprise",
      "name": "旅游行业 · 运营 ERP",
      "description": "连接需求规划、产品与 SKU、订单、采购预订和业务提醒，结合权限与审计管理业务流程。当前展示开发实例。",
      "tags": [
        "React / TypeScript",
        "NestJS / PostgreSQL",
        "ERP workflows"
      ],
      "status": "development",
      "image": "/projects/operations-erp.webp",
      "alt": "运营 ERP 空数据演示界面的缩略图",
    },
    {
      "id": "transactional-crm",
      "group": "enterprise",
      "name": "业务管理 · 企业 CRM",
      "description": "统一管理关系、项目、开票及业务记录，以 PostgreSQL、类型化 API 和受控写入支持版本追溯。",
      "tags": [
        "Python / FastAPI",
        "PostgreSQL",
        "并发控制"
      ],
      "status": "operational",
      "image": "/projects/transactional-crm.webp",
      "alt": "内部业务系统的匿名缩略图",
    },
    {
      "id": "agent-workbench",
      "group": "labs",
      "name": "AgentWeb · AI 工程工作台",
      "description": "以 React、TypeScript 和 Fastify 连接编程 Agent 会话、工具事件流与工作区交付物。",
      "tags": [
        "React / TypeScript",
        "Fastify / SSE",
        "CLI 集成"
      ],
      "status": "private",
      "image": "/projects/agent-workbench.webp",
      "alt": "AI 工程工作台的匿名缩略图",
    },
    {
      "id": "knowledge-memory",
      "group": "labs",
      "name": "知识与记忆 · 证据工作流",
      "description": "通过来源有效性检查、人工审阅与可追溯检索，组织知识与记忆记录的实验原型。",
      "tags": [
        "Python CLI",
        "检索",
        "来源追溯"
      ],
      "status": "prototype",
      "image": "/projects/knowledge-memory.webp",
      "alt": "证据管理原型的匿名缩略图",
    },
    {
      "id": "video-editing",
      "group": "labs",
      "name": "Video Editing Skill",
      "description": "以 Python 和 FFmpeg 连接转录驱动的剪辑、媒体渲染与交付物校验。",
      "tags": [
        "Python",
        "FFmpeg",
        "产物验证"
      ],
      "status": "open",
      "image": "/projects/video-editing-interface.jpg",
      "alt": "AI 生成的界面示意：转写稿、视频片段与编辑时间线",
      "href": "https://github.com/maxazure/video-editing-skill"
    },
    {
      "id": "speech-tooling",
      "group": "labs",
      "name": "OmniVoice TTS Skill",
      "description": "封装现有 OmniVoice 引擎，为本地语音生成提供可重复使用的命令行工作流。",
      "tags": [
        "Python",
        "本地推理",
        "工具集成"
      ],
      "status": "open",
      "image": "/projects/speech-tooling-interface.jpg",
      "alt": "AI 生成的界面示意：本地语音合成与音频试听",
      "href": "https://github.com/maxazure/omnivoice-tts-skill"
    },
    {
      "id": "bookkeeping-assistant",
      "group": "labs",
      "name": "NZ Accounting Assistant",
      "description": "整理收据和流水，生成结构化账簿与对账资料，供人工核对。",
      "tags": [
        "结构化 JSON",
        "对账",
        "人工审阅"
      ],
      "status": "open",
      "image": "/projects/bookkeeping-assistant-interface.jpg",
      "alt": "AI 生成的界面示意：账簿对账与会计复核",
      "href": "https://github.com/maxazure/new-zealand-accounting-assistant"
    },
    {
      "id": "tourism",
      "group": "recent",
      "name": "旅游行业 · 行程展示网站",
      "description": "组织行程、路线与咨询路径，通过可复用页面和结构化元数据支持持续维护。",
      "tags": [
        "Astro",
        "TypeScript",
        "内容架构"
      ],
      "status": "live",
      "image": "/projects/tourism.webp",
      "alt": "行程展示网站的匿名缩略图",
      "href": "https://futuresgroup.co.nz/"
    },
    {
      "id": "transport",
      "group": "recent",
      "name": "运输行业 · 服务网站",
      "description": "以双语页面呈现服务与联系入口，兼顾手机端导航和使用体验。",
      "tags": [
        "Astro",
        "React",
        "双语路由"
      ],
      "status": "live",
      "image": "/projects/transport.webp",
      "alt": "服务与询价网站的匿名缩略图",
      "href": "https://drive1towing.co.nz/"
    },
    {
      "id": "accounting",
      "group": "recent",
      "name": "会计行业 · 服务与知识网站",
      "description": "连接专业服务与知识内容，使用共享内容模型维护双语页面和文章库。",
      "tags": [
        "Astro",
        "内容建模",
        "技术 SEO"
      ],
      "status": "live",
      "image": "/projects/accounting.webp",
      "alt": "服务与知识网站的匿名缩略图",
      "href": "https://pillar.nz/"
    },
    {
      "id": "finance-archive",
      "group": "legacy",
      "name": "金融行业 · 数字资产平台",
      "description": "早期数字资产 Web 项目。缩略图保留历史界面，现域名为占位页面。",
      "tags": [
        "Web 开发",
        "金融服务"
      ],
      "status": "holding",
      "image": "/projects/finance-archive.webp",
      "alt": "数字资产平台的匿名缩略图",
      "href": "https://www.renrenbit.com/"
    },
    {
      "id": "medical-archive-a",
      "group": "legacy",
      "name": "医疗行业 · 服务网站",
      "description": "早期医疗网站，组织服务类别、团队信息和咨询路径。",
      "tags": [
        "Web 开发",
        "信息架构"
      ],
      "status": "archive",
      "image": "/projects/medical-archive-a.webp",
      "alt": "服务展示网站的匿名缩略图",
    },
    {
      "id": "consumer-app-archive",
      "group": "legacy",
      "name": "消费应用 · 支出与活动记录",
      "description": "用于记录支出与活动的移动应用，配有 Web 介绍页面。",
      "tags": [
        "应用开发",
        "Web 介绍页"
      ],
      "status": "archive",
      "image": "/projects/consumer-app-archive.webp",
      "alt": "支出与活动记录的匿名缩略图",
    },
    {
      "id": "medical-archive-b",
      "group": "legacy",
      "name": "医疗行业 · 专科服务网站",
      "description": "早期医疗网站，呈现专科服务和面向患者的信息。",
      "tags": [
        "Web 开发",
        "服务内容"
      ],
      "status": "archive",
      "image": "/projects/medical-archive-b.webp",
      "alt": "专项服务网站的匿名缩略图",
    }
  ]
} as const;


// Keep AI systems together while retaining enterprise and historical examples.
const order: string[] = [
  'voice-companion', 'web-builder-agent', 'idea-builder', 'agent-workbench',
  'voice-capture', 'writing-assessment', 'knowledge-memory', 'agentmeshkit',
  'codexview', 'capability-vault', 'agent-home', 'browser-test-workspace',
  'hardware-control', 'local-narration', 'live-interpretation', 'speech-tooling',
  'lan-microphone', 'video-editing', 'editorial-workflow', 'media-workspace',
  'bookkeeping-assistant', 'operations-erp', 'transactional-crm', 'tourism',
  'transport', 'accounting', 'finance-archive', 'medical-archive-a',
  'consumer-app-archive', 'medical-archive-b',
];

export const projects = {
  en: [...existingProjects.en, ...projectAdditions('en')].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id)),
  zh: [...existingProjects.zh, ...projectAdditions('zh')].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id)),
};
