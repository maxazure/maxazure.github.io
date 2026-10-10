import type { Locale } from './profile';

const cases = [
  {
    id: 'transactional-crm',
    tags: ['Python / FastAPI', 'PostgreSQL', 'Typed API / CLI'],
    en: {
      name: 'Enterprise CRM', category: 'Business systems', stage: 'Internal operational system',
      problem: 'Customer relationships, projects and invoices need a consistent record when people and software agents both update the same business data.',
      role: 'I designed and built the application, API and CLI, connecting structured records with versioned notes.',
      decision: 'Retries and concurrent edits can duplicate or overwrite work. Idempotent writes and version checks make repeat requests safe and expose conflicting edits for resolution.',
      evidence: 'An implemented internal workflow with revision history and controlled writes. The complete project collection includes an empty-data preview; operational records and endpoints stay private.',
    },
    zh: {
      name: '企业 CRM', category: '业务系统', stage: '内部使用系统',
      problem: '客户关系、项目和发票需要一致的业务记录，同时支持人员与软件 Agent 参与更新。',
      role: '我设计并实现应用、API 和命令行工具，将结构化业务记录与版本化笔记连接起来。',
      decision: '重复请求和并发编辑容易造成重复记录或覆盖。通过幂等写入和版本检查，允许安全重试，并将冲突交回使用者处理。',
      evidence: '已实现带版本历史和受控写入的内部工作流。完整项目页提供空数据预览，实际业务记录与系统入口保持私有。',
    },
  },
  {
    id: 'bookkeeping-assistant',
    href: 'https://github.com/maxazure/new-zealand-accounting-assistant',
    tags: ['Structured records', 'Reconciliation', 'Python'],
    en: {
      name: 'NZ Accounting Assistant', category: 'Financial workflows', stage: 'Open-source workflow',
      problem: 'Receipts and bank statements arrive in different formats. Preparing a reviewable ledger requires matching entries without losing the original evidence.',
      role: 'I built the reusable skill and supporting tooling for evidence capture, ledger preparation, reconciliation and export.',
      decision: 'Unclear matches must remain visible. Preserve source files, normalise records into JSON and leave ambiguous items for human confirmation before preparing exports.',
      evidence: 'Public workflow instructions and scripts cover Xero CSV exports and accountant review packs. Financial records and final decisions remain subject to human review.',
      linkLabel: 'Read the workflow & source',
    },
    zh: {
      name: 'NZ Accounting Assistant', category: '财务工作流', stage: '开源工作流',
      problem: '收据和银行流水格式各异。整理可复核的账簿，需要在匹配记录时保留每一笔对应的原始依据。',
      role: '我编写可复用技能和配套工具，连接凭证采集、账簿整理、对账与导出。',
      decision: '不明确的匹配需要保留。保存原文件，将记录整理为 JSON，把有歧义的条目留给人工确认，再准备导出资料。',
      evidence: '公开的工作流与脚本覆盖 Xero CSV 导出和会计复核材料。财务记录与最终判断由人复核。',
      linkLabel: '查看工作流与源码',
    },
  },
  {
    id: 'voice-companion', href: 'https://www.hilily.ai/',
    tags: ['Conversational AI', 'Memory', 'Voice processing'],
    en: {
      name: 'HiLily', category: 'AI systems integration', stage: 'Functional MVP · preparing for pilots',
      problem: 'A voice companion for older adults needs speech, conversation and memory to work together across an embedded device and cloud services.',
      role: 'As a volunteer AI Coach, I guide the team on AI architecture, conversational memory and audio processing. The product is a team effort.',
      decision: 'Device audio, model responses and retained context have different constraints. My guidance focuses on how those parts connect through the AI pipeline and edge voice processing.',
      evidence: 'The project website includes demonstrations and my team role. The team reports a working MVP with multiple iterations completed and is preparing for real-world pilots.',
      linkLabel: 'See the demo & team',
    },
    zh: {
      name: 'HiLily', category: 'AI 系统集成', stage: '功能 MVP · 准备试点',
      problem: '面向老年人的语音陪伴设备，需要在嵌入式终端与云服务之间协同处理语音、对话和记忆。',
      role: '我以志愿 AI Coach 身份，为团队提供 AI 架构、对话记忆与音频处理方面的技术指导。产品由团队共同完成。',
      decision: '设备音频、模型响应和记忆上下文各有约束。我的指导重点是 AI 处理链路与端侧语音处理如何衔接。',
      evidence: '项目官网提供演示和我的团队角色说明。团队已完成功能 MVP 与多轮迭代，正在准备实际场景的试点。',
      linkLabel: '查看演示与团队介绍',
    },
  },
  {
    id: 'codexview', href: 'https://github.com/codexview/codexview',
    tags: ['TypeScript', 'React', 'Transcript adapters'],
    en: {
      name: 'CodexView', category: 'Engineering tools', stage: 'Open-source packages',
      problem: 'Coding agents produce different transcript formats. Reviewing tool calls and nested sessions should not require a different viewer for every agent.',
      role: 'I developed the transcript adapters, React components and Markdown CLI as reusable packages.',
      decision: 'Keep format parsing separate from presentation. Adapters produce a shared event model that supports both a visual transcript and compact text, preserving tool and subagent context.',
      evidence: 'The public repository contains the three packages, usage examples and test fixtures. The implementation can be inspected independently of private workbench projects.',
      linkLabel: 'Explore the packages & source',
    },
    zh: {
      name: 'CodexView', category: '工程工具', stage: '开源软件包',
      problem: '不同编码 Agent 的会话格式各异。阅读工具调用和嵌套会话时，需要一个统一的呈现方式。',
      role: '我将会话适配器、React 组件和 Markdown 命令行工具开发为可复用的软件包。',
      decision: '分开处理格式解析与界面呈现。适配器输出共享事件模型，同时支持可视化会话与紧凑文本，并保留工具调用及子 Agent 上下文。',
      evidence: '公开仓库包含三个软件包、使用示例和测试样本，可直接查看实现，无需访问私有工作台。',
      linkLabel: '查看软件包与源码',
    },
  },
] as const;

export function featuredWork(locale: Locale) {
  return cases.map(({ en, zh, ...shared }) => ({ ...shared, ...(locale === 'en' ? en : zh) }));
}
