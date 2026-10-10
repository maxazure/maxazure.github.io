import type { Locale } from './profile';

const additions = [
  {
    id: 'voice-companion', group: 'labs', status: 'live', href: 'https://hilily.ai/',
    tags: ['Python', 'Streaming audio', 'Conversational AI'],
    en: { name: 'Conversational AI · Voice companion backend', description: 'A device-to-cloud conversation pipeline connecting voice activity detection, transcription, language models, memory and speech synthesis for an embedded companion device.', alt: 'Concept illustration of a voice companion device connected to speech and memory services' },
    zh: { name: '对话式 AI · 语音陪伴设备后端', description: '为嵌入式语音陪伴设备连接端云对话链路，集成语音活动检测、转写、语言模型、记忆与语音合成。', alt: '语音陪伴设备连接语音服务与记忆模块的项目示意图' },
  },
  {
    id: 'web-builder-agent', group: 'labs', status: 'private',
    tags: ['Workflow orchestration', 'Agent profiles', 'Delivery gates'],
    en: { name: 'Web Builder Agent · Website delivery', description: 'A complete website workflow from research and design to build, checks and deployment. Reusable stages and agent profiles accommodate Claude Code, Codex and OpenCode, with evidence, retries and review gates.', alt: 'Concept illustration of interchangeable agents supporting a research-to-deployment website workflow' },
    zh: { name: 'Web Builder Agent · 网站交付工作流', description: '串联调研、设计、构建、检查与部署的完整流程。通过可复用阶段和 Agent 配置兼容 Claude Code、Codex 与 OpenCode，记录执行证据，支持重试与审核节点。', alt: '多种 Agent 接入从调研到部署的网站交付流程的项目示意图' },
  },
  {
    id: 'idea-builder', group: 'labs', status: 'private',
    tags: ['Rust', 'Agent CLI integration', 'Session recovery'],
    en: { name: 'Idea Builder · Multi-agent delivery', description: 'A guided software delivery system turning an idea into planning, implementation, testing and deployment stages, with interchangeable coding agents, streamed output and resumable sessions.', alt: 'Concept illustration of an idea becoming a plan, software modules and a verified delivery package' },
    zh: { name: 'Idea Builder · 多 Agent 软件交付', description: '将想法推进到规划、实现、测试与部署的分阶段系统，支持切换编码 Agent、实时输出与会话恢复。', alt: '想法逐步形成计划、代码模块与交付包的项目示意图' },
  },
  {
    id: 'writing-assessment', group: 'labs', status: 'private',
    tags: ['Next.js', 'PostgreSQL', 'LLM integration'],
    en: { name: 'Education industry · AI writing assessment', description: 'An assessment application combining rubric-based AI feedback, teacher review and role-based access, with structured assessment records and an editable grading workflow.', alt: 'Concept illustration of writing evidence linked to an assessment rubric and teacher review' },
    zh: { name: '教育行业 · AI 写作评估系统', description: '将评分量表、AI 反馈与教师复核连接到同一评估流程，包含角色权限、结构化评估记录与可编辑的评分环节。', alt: '写作证据连接评估量表与教师复核的项目示意图' },
  },
  {
    id: 'voice-capture', group: 'labs', status: 'private',
    tags: ['Android / Kotlin', 'VAD / AAC', 'ASR processing'],
    en: { name: 'Voice2Task · Voice capture & intent', description: 'Android voice capture with VAD segmentation, AAC encoding and retryable uploads, paired with server-side transcription and contextual processing of spoken requests.', alt: 'Concept illustration of a phone recording audio segments and producing structured request cards' },
    zh: { name: 'Voice2Task · 语音采集与意图处理', description: 'Android 端使用 VAD 分段、AAC 编码与可重试上传，服务端完成语音转写和结合上下文的请求处理。', alt: '手机采集语音片段并形成结构化请求的项目示意图' },
  },
  {
    id: 'live-interpretation', group: 'labs', status: 'prototype',
    tags: ['Android / Kotlin', 'ONNX VAD', 'Speech translation'],
    en: { name: 'Live interpretation · Speech to captions', description: 'An Android interpretation prototype that segments incoming speech, sends it for transcription and presents translated captions through a continuous audio-processing flow.', alt: 'Concept illustration of segmented speech becoming translated captions on a phone' },
    zh: { name: '语音翻译 · 实时字幕原型', description: '在 Android 端检测并分段语音，调用转写与翻译服务，将连续音频处理结果显示为翻译字幕。', alt: '语音片段转成手机翻译字幕的项目示意图' },
  },
  {
    id: 'local-narration', group: 'labs', status: 'private',
    tags: ['VoxCPM2 integration', 'Local inference', 'Audio artifacts'],
    en: { name: 'Local voice synthesis · Narration toolkit', description: 'CLI and service integration around the existing VoxCPM2 model, packaging script input, voice settings, playback and WAV/MP3 delivery into repeatable narration workflows.', alt: 'Concept illustration of scripts passing through local speech inference into narration audio files' },
    zh: { name: '本地语音合成 · 配音工具链', description: '围绕现有 VoxCPM2 模型构建命令行与服务集成，把稿件输入、音色设置、试听和 WAV／MP3 输出组织成可重复的配音流程。', alt: '稿件通过本地语音推理生成配音文件的项目示意图' },
  },
  {
    id: 'lan-microphone', group: 'labs', status: 'prototype',
    tags: ['SwiftUI', 'Bonjour / TCP', 'PCM audio'],
    en: { name: 'AirMicLAN · Network microphone', description: 'A Mac-to-Mac microphone bridge using Bonjour discovery and TCP audio streaming, with PCM capture and virtual audio input on the receiving computer.', alt: 'Concept illustration of two computers linked by a local-network microphone audio stream' },
    zh: { name: 'AirMicLAN · 局域网麦克风', description: '通过 Bonjour 发现与 TCP 音频流连接两台 Mac，发送端采集 PCM，接收端将声音送入虚拟音频输入。', alt: '两台电脑通过局域网传输麦克风声音的项目示意图' },
  },
  {
    id: 'agentmeshkit', group: 'labs', status: 'open', href: 'https://github.com/agentmeshkit',
    tags: ['TypeScript SDK', 'Agent protocols', 'Workspace tooling'],
    en: { name: 'AgentMeshKit · Agent workbench SDK', description: 'A modular toolkit extracted from agent-workbench engineering: shared event protocols, CLI runners, conversation components, workspace artifacts and task-state handling.', alt: 'Concept illustration of reusable agent SDK modules joined through a shared protocol hub' },
    zh: { name: 'AgentMeshKit · Agent 工作台 SDK', description: '从 Agent 工作台工程中提取的模块化工具包，覆盖共享事件协议、CLI 执行器、对话组件、工作区产物和任务状态。', alt: '可复用 Agent SDK 模块通过共享协议连接的项目示意图' },
  },
  {
    id: 'codexview', group: 'labs', status: 'open', href: 'https://github.com/codexview/codexview',
    tags: ['React', 'Transcript adapters', 'Markdown CLI'],
    en: { name: 'CodexView · Agent transcript rendering', description: 'React components, adapters and a Markdown CLI for reading coding-agent transcripts, preserving tool events and nested sessions in a consistent conversation format.', alt: 'Concept illustration of structured agent events becoming a readable transcript and Markdown document' },
    zh: { name: 'CodexView · Agent 会话渲染', description: '通过 React 组件、会话适配器与 Markdown CLI 呈现编码 Agent 的记录，将工具事件和嵌套会话整理成一致的阅读格式。', alt: 'Agent 事件整理为可读会话与 Markdown 文档的项目示意图' },
  },
  {
    id: 'capability-vault', group: 'labs', status: 'private',
    tags: ['Electron', 'Capability management', 'LAN sync'],
    en: { name: 'Agent Capability Vault · Configuration sync', description: 'A desktop and LAN-sync system for managing agent instructions, skills, tool connections and machine capabilities across engineering workstations.', alt: 'Concept illustration of agent instructions, skills and tool connectors synchronised between workstations' },
    zh: { name: 'Agent Capability Vault · 能力配置同步', description: '通过桌面应用和局域网同步服务，在多台工程工作站之间管理 Agent 指示、技能、工具连接与机器能力配置。', alt: '多台工作站同步 Agent 指示、技能与工具配置的项目示意图' },
  },
  {
    id: 'agent-home', group: 'labs', status: 'private',
    tags: ['Python / Shell', 'Persistent workspaces', 'Agent instructions'],
    en: { name: 'AgentHome · Persistent agent workspace', description: 'A reusable work-directory toolkit for coding agents, combining instruction templates, Markdown memory, reminders and CLI maintenance tools in a persistent workspace.', alt: 'Concept illustration of instructions, memory notes, reminders and tools organised inside an agent workspace' },
    zh: { name: 'AgentHome · 持久化 Agent 工作区', description: '为编码 Agent 提供可复用的工作目录，将指示模板、Markdown 记忆、提醒与命令行维护工具放入持久化工作区。', alt: 'Agent 工作区中组织指示、记忆、提醒与工具的项目示意图' },
  },
  {
    id: 'browser-test-workspace', group: 'labs', status: 'private',
    tags: ['Docker', 'Browser runtime', 'Artifact capture'],
    en: { name: 'Browser testing · Isolated workspace', description: 'A containerised desktop browser environment for functional checks, with persistent browser profiles, captured test artifacts and backup/restore tooling.', alt: 'Concept illustration of a browser runtime, persistent profile and test artifacts in an isolated container' },
    zh: { name: '浏览器测试 · 隔离工作区', description: '面向功能检查的容器化桌面浏览器环境，保留浏览器配置、测试产物，并提供备份和恢复工具。', alt: '隔离容器中的浏览器运行环境、配置与测试产物的项目示意图' },
  },
  {
    id: 'hardware-control', group: 'labs', status: 'private',
    tags: ['ESP32-S3', 'USB HID', 'Visual control loop'],
    en: { name: 'Hardware control · Vision-to-HID bridge', description: 'An ESP32-S3 keyboard/mouse bridge paired with host-side screen capture and decision tooling, connecting visual observation to controlled USB HID actions.', alt: 'Concept illustration of screen capture and an ESP32 board controlling a keyboard and mouse' },
    zh: { name: '硬件控制 · 视觉到 HID 桥接', description: '将 ESP32-S3 键鼠桥接与主机端屏幕采集、决策工具连接起来，把视觉观察转换成受控的 USB HID 操作。', alt: '屏幕采集与 ESP32 开发板驱动键鼠的项目示意图' },
  },
  {
    id: 'editorial-workflow', group: 'labs', status: 'private',
    tags: ['Python / Shell', 'Source-aware drafting', 'Human review'],
    en: { name: 'AI editorial workflow · Reviewed publishing', description: 'A source-aware drafting pipeline connecting topic planning, article generation, metadata and content checks, with review before publishing.', alt: 'Concept illustration of sources becoming a drafted article, a review pack and a publishing artifact' },
    zh: { name: 'AI 内容工作流 · 审核后发布', description: '将选题规划、来源材料、文章生成、元数据与内容检查连接起来，并在发布前保留人工审核环节。', alt: '来源材料形成文章草稿、审核包和发布产物的项目示意图' },
  },
  {
    id: 'media-workspace', group: 'labs', status: 'private',
    tags: ['Android / Compose', 'FastAPI', 'Media packages'],
    en: { name: 'Media workflows · Android workspace', description: 'An Android and API-backed workspace for organising copy, images and video into media packages, handling agent requests and delivering assets to the phone.', alt: 'Concept illustration of grouped copy, image and video packages delivered to an Android phone' },
    zh: { name: '媒体工作流 · Android 素材工作区', description: '使用 Android 应用和后端 API 整理文案、图片与视频素材包，处理 Agent 请求，并将产物交付到手机。', alt: '文案、图片与视频素材包交付到 Android 手机的项目示意图' },
  },
] as const;

export function projectAdditions(locale: Locale) {
  return additions.map(({ en, zh, ...shared }) => ({
    ...shared,
    ...(locale === 'en' ? en : zh),
    image: `/projects/${shared.id}-concept.jpg`,
    caption: locale === 'en' ? 'AI-generated concept illustration' : 'AI 生成的项目示意图',
  }));
}
