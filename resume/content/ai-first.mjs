// AI-first editions. Full bilingual sources live in resumes/ai-first/.
// Backend work dates from 2026; the historical CityOS title remains unchanged.
export const aiFirstResumes = {
  ru: {
    language: 'ru-RU',
    filename: 'ai-first/Melnik_Stanislau_Resume_2026_AI_First.pdf',
    source: 'resumes/ai-first/Melnik_Stanislau_Resume_2026_AI_First.md',
    name: 'Станислав Мельник',
    headline: 'Ведущий разработчик · Full-stack / AI-first',
    tagline: 'TypeScript  /  NestJS  /  React  /  Claude  /  Codex',
    subject: 'Ведущий разработчик — Full-stack / AI-first — Резюме 2026',
    keywords: 'Claude Code, Codex, AI agents, TypeScript, NestJS, React, Laravel, PostgreSQL',
    showPhoto: true,
    location: 'Минск, Беларусь',
    availability: 'Удалённо из Минска · выход в течение недели после оффера',
    summary: '**4+ года коммерческого опыта.** В CityOS самостоятельно вёл frontend от архитектуры до CI/CD; с **2026 года** также разрабатываю серверные фичи. Использую **Claude и Codex** для полного агентного цикла: спецификации, планы, реализация, ревью, тест-кейсы и выполнение тестов.',
    labels: {
      experience: 'Опыт работы',
      continued: 'Опыт, проекты и навыки',
      projects: 'Личный проект',
      skills: 'Ключевые навыки',
      education: 'Образование',
      languages: 'Языки',
      footer: 'AI-first · ноябрь 2026',
    },
    cityos: {
      name: 'CityOS (ООО «СИТИОС»)',
      role: 'Frontend Developer · с 2026 года также backend-фичи и интеграции',
      date: 'Апрель 2024 — настоящее время',
      intro: 'Платформа управления недвижимостью. Внедрения: CityOS, North Waterfront, Nuanu, SunBridge.',
      groups: [
        {
          title: 'Самостоятельная разработка и AI-агенты',
          bullets: [
            'Вёл frontend **практически самостоятельно**, с эпизодической помощью коллег: архитектура, реализация, проверки качества, **CI/CD для деплоя** и цикл разработки. Расширил работу на серверные фичи параллельно frontend.',
            'Работаю через **корпоративную платформу над Claude / Codex**: ставлю задачи, пишу спецификации и планы, делегирую реализацию, проверяю результат и организую тестирование агентами. Настраивал правила репозиториев.',
          ],
        },
        {
          title: 'Backend, данные и надёжность · 2026',
          bullets: [
            'С AI **разработал модуль переписки жильцов и сотрудников на PHP / Laravel**, осваивая новый стек. Дорабатывал его интеграцию с CityOS и North Waterfront: модели, миграции, API, доступ, real-time и уведомления.',
            '**Транзакции и идемпотентность**, конкурентные изменения, доступ по компании и адресу; real-time после коммита. Писал функциональные тесты и исправлял перенесённые проверки с неверными URL-префиксами.',
            'Участвовал в разработке **NestJS gateway и чат-бота для LLM / Telegram**; выделил логику бота из gateway в микросервис. JWT и межсервисный доступ; **PostgreSQL / TypeORM**, миграции, callback-операции и тесты Jest / Supertest.',
          ],
        },
        {
          title: 'Платформа, LLM и поставка',
          bullets: [
            'Спроектировал frontend из **30+ общих модулей**, UI-библиотеку и API-контракты. React / TypeScript, FSD, workspaces; порталы North Waterfront и CityOS на **Next.js 16 / React 19**.',
            'Реализовал коммерческие **OpenRouter LLM-сервис и Telegram / Telegraf**: контекст, промпты, ошибки и таймауты. Интегрировал legacy-API, WebSocket и HLS; добавил SSRF-защиту прокси.',
          ],
        },
      ],
      closing: '**Качество и поставка:** TypeScript strict, линтеры, Jest / Testing Library, Storybook / Chromatic, Sentry; Docker Compose и GitHub Actions для dev / SIT / prod.',
    },
    edwin: {
      name: 'EdWin',
      role: 'Frontend Developer · проектный контракт',
      date: 'Май — июль 2026',
      bullets: [
        'Создал frontend AI-сервиса с нуля: **React 19 / TypeScript / Vite**, FSD, дизайн-система и Storybook; чат, сессии, персоны и задачи.',
        '**TanStack Query v5**, OpenAPI codegen, Sentry, Vitest / Testing Library; CI с проверками типов, линтингом, тестами и сборкой. Docker-контейнеризация.',
      ],
    },
    comdev: {
      name: 'ComDev.group',
      role: 'Frontend Developer',
      date: 'Апрель 2022 — декабрь 2023',
      bullets: [
        'React / Redux Toolkit, MUI, формы, локализация и Mapbox. Перевёл сервис с **iSSR на Next.js**, внедрил FSD.',
        'Интегрировал **Self-Sovereign Identity** и verifiable credentials на базе owlmeans.',
      ],
    },
    projects: [
      {
        name: 'LLM Integrator',
        role: 'Full-stack · LLM-бот для Twitch',
        date: 'Март 2026 — настоящее время',
        bullets: [
          'Развиваю **backend, клиент и админ-панель**: NestJS, PostgreSQL / TypeORM, React / Vite. Twitch Helix API и LLM; настройки ботов, история, расходы на модели и журнал ошибок.',
          'Обработка ошибок, дедупликация и **учёт стоимости LLM-запросов**; Jest / Supertest / Testcontainers. Docker, Nginx и GitHub Actions.',
          'Март — Next.js-прототип с OAuth и Telegram-ботом; с апреля — отдельные приложения. Миграция с Prisma на TypeORM.',
        ],
      },
    ],
    skills: [
      ['AI-агенты', 'Claude / Claude Code · Codex · Cursor; задачи, спецификации, планы, ревью, тест-кейсы и прогоны'],
      ['Архитектура', 'Модульные приложения · FSD · API-контракты · REST / OpenAPI · legacy-интеграции'],
      ['Backend', 'Node.js / NestJS · PostgreSQL / TypeORM · JWT; PHP / Laravel / MariaDB — модуль чатов'],
      ['Интеграции', 'OpenRouter / LLM API · Telegram / Telegraf · Twitch API · WebSocket / Centrifugo'],
      ['Frontend', 'TypeScript · React / Next.js · TanStack Query · Redux Toolkit · Ant Design / MUI · Tailwind'],
      ['Качество', 'Jest · Vitest · Testing Library · Supertest / Testcontainers · Docker / Compose · GitHub Actions · Sentry'],
    ],
    education: '**БГТУ**, Минск — неоконченное высшее. **PixelPlex** — «Node.js: теория и практика», 2022.',
    languages: 'Белорусский — родной · Русский — C2\nУкраинский — C1 · Английский — B1',
  },
  en: {
    language: 'en',
    filename: 'ai-first/Melnik_Stanislau_Resume_2026_AI_First_EN.pdf',
    source: 'resumes/ai-first/Melnik_Stanislau_Resume_2026_AI_First_EN.md',
    name: 'Stanislau Melnik',
    headline: 'Lead Developer · Full-stack / AI-first',
    tagline: 'TypeScript  /  NestJS  /  React  /  Claude  /  Codex',
    subject: 'Lead Developer — Full-stack / AI-first — Resume 2026',
    keywords: 'Claude Code, Codex, AI agents, TypeScript, NestJS, React, Laravel, PostgreSQL',
    showPhoto: false,
    location: 'Minsk, Belarus',
    availability: 'Remote from Minsk · available within one week of an offer',
    summary: '**4+ years of commercial experience.** Independently owned CityOS frontend development, from architecture to CI/CD; also building backend features since **2026**. Use **Claude and Codex** across the full agent workflow: specifications, plans, implementation, reviews, test cases, and test execution.',
    labels: {
      experience: 'Work experience',
      continued: 'Experience, projects & skills',
      projects: 'Personal project',
      skills: 'Core skills',
      education: 'Education',
      languages: 'Languages',
      footer: 'AI-first · November 2026',
    },
    cityos: {
      name: 'CityOS',
      role: 'Frontend Developer · also backend features and integrations since 2026',
      date: 'April 2024 — present',
      intro: 'Property management platform. Deployments: CityOS, North Waterfront, Nuanu, and SunBridge.',
      groups: [
        {
          title: 'Independent ownership & AI agents',
          bullets: [
            'Owned **almost all frontend development**, with occasional help from colleagues: architecture, implementation, quality checks, **deployment CI/CD**, and the development lifecycle. Expanded into backend features alongside the frontend.',
            'Use the **company platform built around Claude / Codex**: define tasks, write specifications and plans, delegate implementation, review results, and have agents execute tests. Set up repository rules for AI coding tools.',
          ],
        },
        {
          title: 'Backend, data & reliability · 2026',
          bullets: [
            'Built a **PHP / Laravel module for resident and staff messaging with AI assistance**, learning a new stack. Worked on its integration with CityOS and North Waterfront: models, migrations, APIs, access control, real-time events, and notifications.',
            '**Transactions and idempotency**, concurrent state changes, company/address access boundaries, and real-time events after commit. Wrote functional tests and fixed migrated tests with incorrect URL prefixes.',
            'Contributed to the **NestJS gateway and chatbot for LLM / Telegram**; extracted bot logic from the gateway into a microservice. User JWT and service-to-service access; **PostgreSQL / TypeORM**, migrations, callbacks, and Jest / Supertest tests.',
          ],
        },
        {
          title: 'Platform, LLM integrations & delivery',
          bullets: [
            'Designed a frontend platform with **30+ shared modules**, a UI library, and API contracts. React / TypeScript, FSD, workspaces; North Waterfront and CityOS portals with **Next.js 16 / React 19**.',
            'Built commercial **OpenRouter LLM and Telegram / Telegraf integrations**: context, prompts, error and timeout handling. Integrated legacy APIs, WebSocket, and HLS; added SSRF protection to the proxy.',
          ],
        },
      ],
      closing: '**Quality & delivery:** strict TypeScript, linting, Jest / Testing Library, Storybook / Chromatic, Sentry; Docker Compose and GitHub Actions for development, SIT (system integration testing), and production.',
    },
    edwin: {
      name: 'EdWin',
      role: 'Frontend Developer · project contract',
      date: 'May — July 2026',
      bullets: [
        'Built the frontend of an AI service from scratch: **React 19 / TypeScript / Vite**, FSD, a design system, and Storybook; chat, sessions, personas, and tasks.',
        '**TanStack Query v5**, OpenAPI codegen, Sentry, Vitest / Testing Library; CI for type checks, linting, tests, and builds. Docker containerization.',
      ],
    },
    comdev: {
      name: 'ComDev.group',
      role: 'Frontend Developer',
      date: 'April 2022 — December 2023',
      bullets: [
        'React / Redux Toolkit, MUI, forms, localization, and Mapbox. Migrated the service from **iSSR to Next.js** and introduced FSD.',
        'Integrated **Self-Sovereign Identity** and verifiable credentials using owlmeans.',
      ],
    },
    projects: [
      {
        name: 'LLM Integrator',
        role: 'Full-stack · LLM bot for Twitch',
        date: 'March 2026 — present',
        bullets: [
          'Develop the **backend, client, and admin application**: NestJS, PostgreSQL / TypeORM, React / Vite. Twitch Helix API and LLMs; bot settings, history, model spend, and error logs.',
          'Error handling, deduplication, and **LLM request cost tracking**; Jest / Supertest / Testcontainers. Docker, Nginx, and GitHub Actions.',
          'March: Next.js prototype with OAuth and a Telegram bot. Since April: separate applications. Migrated from Prisma to TypeORM.',
        ],
      },
    ],
    skills: [
      ['AI agents', 'Claude / Claude Code · Codex · Cursor; tasks, specifications, plans, reviews, test cases, and execution'],
      ['Architecture', 'Modular applications · FSD · API contracts · REST / OpenAPI · legacy integrations'],
      ['Backend', 'Node.js / NestJS · PostgreSQL / TypeORM · JWT; PHP / Laravel / MariaDB for the chat module'],
      ['Integrations', 'OpenRouter / LLM APIs · Telegram / Telegraf · Twitch API · WebSocket / Centrifugo'],
      ['Frontend', 'TypeScript · React / Next.js · TanStack Query · Redux Toolkit · Ant Design / MUI · Tailwind'],
      ['Quality', 'Jest · Vitest · Testing Library · Supertest / Testcontainers · Docker / Compose · GitHub Actions · Sentry'],
    ],
    education: '**Belarusian State Technological University**, Minsk — undergraduate studies; degree not completed. **PixelPlex** — “Node.js: Theory and Practice”, 2022.',
    languages: 'Belarusian — native · Russian — C2\nUkrainian — C1 · English — B1',
  },
};
