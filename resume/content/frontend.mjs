// Frontend editions for the two-page PDFs. Facts come from resumes/frontend/.
// Keep both languages aligned when editing; see README.md for the source mapping.
export const frontendResumes = {
  ru: {
    language: 'ru-RU',
    filename: 'frontend/Melnik_Stanislau_Resume_2026.pdf',
    source: 'resumes/frontend/Melnik_Stanislau_Resume_2026.md',
    name: 'Станислав Мельник',
    headline: 'Senior Frontend Developer',
    tagline: 'React  /  Next.js  /  TypeScript',
    subject: 'React, Next.js, TypeScript — Resume 2026',
    keywords: 'React, Next.js, TypeScript, frontend architecture, FSD, CI/CD, Claude Code, Codex, NestJS',
    showPhoto: true,
    location: 'Минск, Беларусь',
    availability: 'Удалённо из Минска / офис и гибрид в Минске · выход в течение недели после оффера',
    summary: '**4+ года коммерческого опыта** в React, Next.js и TypeScript. Самостоятельно вёл frontend **CityOS и North Waterfront** — от архитектуры и реализации до проверок качества и **CI/CD для деплоя**. Спроектировал платформу из **30+ общих модулей** для нескольких приложений.',
    labels: {
      experience: 'Опыт работы',
      continued: 'Опыт, проекты и навыки',
      projects: 'Личный проект',
      skills: 'Ключевые навыки',
      education: 'Образование',
      languages: 'Языки',
      footer: 'Резюме · ноябрь 2026',
    },
    cityos: {
      name: 'CityOS (ООО «СИТИОС»)',
      role: 'Frontend Developer',
      date: 'Апрель 2024 — настоящее время',
      intro: 'Платформа управления недвижимостью. Внедрения: CityOS, North Waterfront, Nuanu и SunBridge.',
      groups: [
        {
          title: 'Самостоятельная разработка и общая платформа',
          bullets: [
            '**Единственный постоянный frontend-разработчик** CityOS: самостоятельно вёл админ-панель и порталы CityOS / North Waterfront, архитектуру, реализацию, проверки качества и CI/CD для деплоя. Коллеги помогали эпизодически.',
            '**Спроектировал архитектуру с нуля:** 30+ общих модулей и UI-библиотека для CityOS, North Waterfront и SunBridge. FSD, git submodules, workspaces; общие типы и API-контракты.',
            'Реализовал **real-time-чаты на Centrifugo / WebSocket**: история, ответственные, непрочитанные и права доступа; модули заявок, жителей, сотрудников и коммуникаций.',
            '**Качество и надёжность релизов:** TypeScript strict, линтеры, Jest / Testing Library, Storybook / Chromatic, Sentry. Интегрировал легаси-API; добавил восстановление после ошибок устаревших чанков.',
          ],
        },
        {
          title: 'North Waterfront и CityOS · порталы жителей · 2026',
          bullets: [
            'Разработал портал **North Waterfront на Next.js 16 / React 19**: SSR, SEO, серверная локализация ru/en, авторизация и постаматы. Развивал версию CityOS на его основе.',
            'В North Waterfront реализовал камеры (**hls.js, RTSP / go2rtc**), домофоны и удалённое открытие дверей. Добавил защиту HLS-прокси от SSRF; настроил Docker Compose для web и go2rtc.',
          ],
        },
        {
          title: 'Backend и интеграции · 2026',
          bullets: [
            'Участвовал в разработке **NestJS gateway и чат-бота**; реализовал **OpenRouter LLM-сервис и Telegram / Telegraf**, вынес логику бота в микросервис. JWT и межсервисный доступ; **PostgreSQL / TypeORM**, миграции, транзакции, идемпотентность и тесты Jest / Supertest.',
            'С AI разработал **модуль переписки жильцов и сотрудников на PHP / Laravel**; дорабатывал его интеграцию с CityOS и North Waterfront.',
          ],
        },
      ],
      closing: '**Процессы и поставка:** спецификации и API-контракты с backend-командой, бэклог; Docker Compose, GitHub Actions. **Claude / Codex:** планы, делегирование реализации, ревью и тесты с проверкой результата.',
    },
    edwin: {
      name: 'EdWin',
      role: 'Frontend Developer · проектный контракт',
      date: 'Май — июль 2026',
      bullets: [
        'Создал frontend AI-сервиса аналитики с нуля: **React 19, TypeScript, Vite, FSD**. Дизайн-система на токенах Figma и UI-компоненты в Storybook.',
        'Реализовал чат, сессии, персоны и задачи. **TanStack Query v5**: оптимистичные обновления, инвалидация кэша, отмена запросов и восстановление после ошибок. Маршрутизация в контексте проекта, аутентификация и i18next.',
        'Настроил **OpenAPI codegen**, Sentry, Vitest / Testing Library и CI: проверка типов, линтеры, тесты, сборка приложения и Storybook. Контейнеризация в Docker.',
      ],
    },
    comdev: {
      name: 'ComDev.group',
      role: 'Frontend Developer',
      date: 'Апрель 2022 — декабрь 2023',
      bullets: [
        'Разрабатывал приложение на **React / Redux Toolkit**: MUI, формы, локализация и Mapbox. Перевёл сервис с **iSSR на Next.js**, внедрил FSD.',
        'Интегрировал **Self-Sovereign Identity** и verifiable credentials на базе owlmeans.',
      ],
    },
    projects: [
      {
        name: 'LLM Integrator',
        role: 'Full-stack · LLM-бот для Twitch',
        date: 'Март 2026 — настоящее время',
        bullets: [
          '**React 19 / Vite / Ant Design / Recharts:** настройки бота, графики расходов на LLM, журнал ошибок и управление пользователями. Docker, Nginx и GitHub Actions.',
          '**NestJS, TypeORM, PostgreSQL, Twitch Helix API:** LLM-ответы, обработка ошибок и учёт стоимости запросов. Тесты Jest / Supertest / Testcontainers.',
          'Март — Next.js-прототип с Twitch OAuth, Telegram-ботом и дедупликацией сообщений; с апреля — платформа с отдельными backend, клиентом и админ-панелью.',
        ],
      },
    ],
    skills: [
      ['Frontend', 'TypeScript · JavaScript · React · Next.js · App Router / SSR · React Router'],
      ['Данные', 'TanStack Query · Redux Toolkit · Formik · react-hook-form · Yup · REST / OpenAPI'],
      ['UI и вёрстка', 'HTML / CSS · Sass / CSS Modules · Tailwind · Ant Design · MUI · Figma · i18next'],
      ['Backend', 'Node.js · NestJS · Express · PostgreSQL · TypeORM · JWT / OAuth'],
      ['Интеграции', 'LLM API / OpenRouter · Telegram / Telegraf · WebSocket · HLS / go2rtc'],
      ['Тестирование', 'Jest · Vitest · Testing Library · Storybook · Chromatic; backend: Supertest / Testcontainers'],
      ['Поставка', 'Docker · GitHub Actions · Sentry · Vite / Webpack · Git · pnpm'],
    ],
    education: '**БГТУ**, Минск — неоконченное высшее. **PixelPlex** — «Node.js: теория и практика», 2022.',
    languages: 'Белорусский — родной · Русский — C2\nУкраинский — C1 · Английский — B1',
  },
  en: {
    language: 'en',
    filename: 'frontend/Melnik_Stanislau_Resume_2026_EN.pdf',
    source: 'resumes/frontend/Melnik_Stanislau_Resume_2026_EN.md',
    name: 'Stanislau Melnik',
    headline: 'Senior Frontend Developer',
    tagline: 'React  /  Next.js  /  TypeScript',
    subject: 'React, Next.js, TypeScript — Resume 2026',
    keywords: 'React, Next.js, TypeScript, frontend architecture, FSD, CI/CD, Claude Code, Codex, NestJS',
    showPhoto: false,
    location: 'Minsk, Belarus',
    availability: 'Remote from Minsk / hybrid or on-site in Minsk · available within one week of an offer',
    summary: '**4+ years of professional experience** in React, Next.js, and TypeScript. Independently owned **CityOS and North Waterfront** frontend development, from architecture and implementation to quality checks and **deployment CI/CD**. Designed a platform with **30+ shared modules** for multiple applications.',
    labels: {
      experience: 'Work experience',
      continued: 'Experience, projects & skills',
      projects: 'Personal project',
      skills: 'Core skills',
      education: 'Education',
      languages: 'Languages',
      footer: 'Resume · November 2026',
    },
    cityos: {
      name: 'CityOS',
      role: 'Frontend Developer',
      date: 'April 2024 — present',
      intro: 'Property management platform. Client deployments: CityOS, North Waterfront, Nuanu, and SunBridge.',
      groups: [
        {
          title: 'Independent development & shared platform',
          bullets: [
            'CityOS\'s **only permanent frontend developer**: independently owned the admin application and CityOS / North Waterfront portals, architecture, implementation, quality checks, and deployment CI/CD. Colleagues helped occasionally.',
            '**Designed the architecture from scratch:** 30+ shared modules and a UI library for CityOS, North Waterfront, and SunBridge. FSD, git submodules, workspaces, shared types, and API contracts.',
            'Built **real-time chats with Centrifugo / WebSocket**: history, assignments, unread counters, and permissions; modules for resident requests, residents, staff, and communications.',
            '**Quality and release reliability:** strict TypeScript, linting, Jest / Testing Library, Storybook / Chromatic, and Sentry. Integrated legacy APIs and added recovery from stale-chunk errors.',
          ],
        },
        {
          title: 'North Waterfront & CityOS · resident portals · 2026',
          bullets: [
            'Built the **North Waterfront portal with Next.js 16 / React 19**: SSR, SEO, server-side ru/en localization, authentication, and parcel lockers. Developed the CityOS version based on it.',
            'For North Waterfront, implemented camera streaming (**hls.js, RTSP / go2rtc**), intercoms, and remote door unlocking. Added SSRF protection for the HLS proxy; configured Docker Compose for web and go2rtc.',
          ],
        },
        {
          title: 'Backend & integrations · 2026',
          bullets: [
            'Contributed to the **NestJS gateway and chatbot**; built an **OpenRouter LLM service and Telegram / Telegraf adapter** and extracted bot logic into a microservice. User JWT and service-to-service access; **PostgreSQL / TypeORM**, migrations, transactions, idempotency, and Jest / Supertest.',
            'Built a **PHP / Laravel module for resident and staff messaging with AI assistance**; worked on its integration with CityOS and North Waterfront.',
          ],
        },
      ],
      closing: '**Workflow & delivery:** specifications and API contracts with the backend team, backlog; Docker Compose and GitHub Actions. **Claude / Codex:** plans, delegated implementation, reviews, and tests with independent verification.',
    },
    edwin: {
      name: 'EdWin',
      role: 'Frontend Developer · project contract',
      date: 'May — July 2026',
      bullets: [
        'Built the frontend of an AI analytics service from scratch: **React 19, TypeScript, Vite, FSD**. Created a design system using Figma tokens and UI components in Storybook.',
        'Implemented chat, sessions, personas, and tasks. **TanStack Query v5**: optimistic updates, cache invalidation, request cancellation, and error recovery. Project-scoped routing, authentication, and i18next.',
        'Set up **OpenAPI codegen**, Sentry, Vitest / Testing Library, and CI: type checks, linting, tests, application and Storybook builds. Docker containerization.',
      ],
    },
    comdev: {
      name: 'ComDev.group',
      role: 'Frontend Developer',
      date: 'April 2022 — December 2023',
      bullets: [
        'Developed a **React / Redux Toolkit** application with MUI, forms, localization, and Mapbox. Migrated the service from **iSSR to Next.js** and introduced FSD.',
        'Integrated **Self-Sovereign Identity** and verifiable credentials using owlmeans.',
      ],
    },
    projects: [
      {
        name: 'LLM Integrator',
        role: 'Full-stack · LLM bot for Twitch',
        date: 'March 2026 — present',
        bullets: [
          '**React 19 / Vite / Ant Design / Recharts:** bot settings, LLM spend charts, error logs, and user management. Docker, Nginx, and GitHub Actions.',
          '**NestJS, TypeORM, PostgreSQL, Twitch Helix API:** LLM responses, error handling, and request cost tracking. Jest / Supertest / Testcontainers tests.',
          'March: Next.js prototype with Twitch OAuth, a Telegram bot, and message deduplication. Since April: a platform with a separate backend, client, and admin application.',
        ],
      },
    ],
    skills: [
      ['Frontend', 'TypeScript · JavaScript · React · Next.js · App Router / SSR · React Router'],
      ['Data', 'TanStack Query · Redux Toolkit · Formik · react-hook-form · Yup · REST / OpenAPI'],
      ['UI & styling', 'HTML / CSS · Sass / CSS Modules · Tailwind · Ant Design · MUI · Figma · i18next'],
      ['Backend', 'Node.js · NestJS · Express · PostgreSQL · TypeORM · JWT / OAuth'],
      ['Integrations', 'LLM APIs / OpenRouter · Telegram / Telegraf · WebSocket · HLS / go2rtc'],
      ['Testing', 'Jest · Vitest · Testing Library · Storybook · Chromatic; backend: Supertest / Testcontainers'],
      ['Delivery', 'Docker · GitHub Actions · Sentry · Vite / Webpack · Git · pnpm'],
    ],
    education: '**Belarusian State Technological University**, Minsk — undergraduate studies; degree not completed. **PixelPlex** — “Node.js: Theory and Practice”, 2022.',
    languages: 'Belarusian — native · Russian — C2\nUkrainian — C1 · English — B1',
  },
};
