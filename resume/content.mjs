// Editorial versions for the two-page PDF. Facts come from the root resume MDs.
// Keep both languages aligned when editing; see README.md for the source mapping.
export const resumes = {
  ru: {
    language: 'ru-RU',
    filename: 'Melnik_Stanislau_Resume_2026.pdf',
    source: 'Melnik_Stanislau_Resume_2026.md',
    name: 'Станислав Мельник',
    location: 'Минск, Беларусь',
    availability: 'Удалённо / гибрид / офис · готов к переезду',
    summary: '**4+ года коммерческого опыта.** Создаю B2B-админки и клиентские порталы на React / Next.js и TypeScript. Основной фокус — модульная frontend-архитектура, общие UI-библиотеки и надёжность интерфейсов. Также разрабатываю backend-сервисы на NestJS и интеграции с LLM.',
    labels: {
      experience: 'Опыт работы',
      continued: 'Опыт, проекты и навыки',
      projects: 'Личные проекты',
      skills: 'Ключевые навыки',
      education: 'Образование',
      languages: 'Языки',
      footer: 'Резюме · октябрь 2026',
    },
    cityos: {
      name: 'CityOS',
      role: 'Frontend Developer',
      date: 'Апрель 2024 — настоящее время',
      intro: 'Платформа управления недвижимостью: админ-панель, портал жителей и общий backend. Продукты для CityOS, North Waterfront, Nuanu и SunBridge.',
      groups: [
        {
          title: 'Модульная платформа и админ-панель',
          bullets: [
            'Спроектировал frontend-платформу с нуля: **30+ доменных модулей**, отдельные репозитории, **git submodules и pnpm workspaces**. FSD и архитектурный линтинг задают границы; модули переиспользуются в продуктах четырёх заказчиков.',
            'Разработал модули заявок, жителей, сотрудников, коммуникаций и доступа. Реализовал **real-time-чаты на Centrifugo / WebSocket**: история, ответственные, непрочитанные сообщения и права доступа.',
            'Развиваю **общую UI-библиотеку**: формы, таблицы, фильтры, пагинация и кэширование справочников. Интегрировал Quill, загрузку медиа и санитизацию HTML; учитывал часовые пояса и валидацию данных.',
            'Выстроил проверки качества: **Jest / Testing Library, Storybook / Chromatic**, TypeScript strict, линтеры и Husky. Устранил сбои загрузки устаревших чанков после деплоя: хранение последних сборок и однократная перезагрузка.',
          ],
        },
        {
          title: 'North Waterfront · портал жителей',
          bullets: [
            'Разработал портал на **Next.js 16 / React 19**: FSD, SSR, SEO, серверная локализация ru/en, авторизация, новости, база знаний и постаматы.',
            'Реализовал просмотр камер (**hls.js, RTSP / go2rtc**), домофоны и удалённое открытие точек доступа. Добавил проверки HLS-прокси для защиты от SSRF; настроил Docker Compose для web и go2rtc.',
          ],
        },
        {
          title: 'Backend и интеграции · 2026',
          bullets: [
            'Участвовал в разработке **NestJS API gateway, чат-бота и сервиса уведомлений**: проксирование, DTO-валидация, загрузка файлов, JWT и межсервисная авторизация через guards.',
            'Работал с **PostgreSQL / TypeORM**: миграции, транзакции, идемпотентные callback-операции; писал интеграционные и e2e-тесты на **Jest / Supertest**.',
          ],
        },
      ],
      closing: '**Инфраструктура и процессы:** композиционный репозиторий, Docker Compose, GitHub Actions, dev / SIT / prod. Согласую API-контракты с Laravel-командой; настраиваю правила для Claude Code и OpenCode.',
    },
    edwin: {
      name: 'EdWin',
      role: 'Frontend Developer · контракт',
      date: 'Май — июль 2026',
      bullets: [
        'Создал frontend AI-сервиса аналитики с нуля: **React 19, TypeScript strict, Vite, FSD**. Дизайн-система на токенах Figma, SCSS / CSS Modules, UI-компоненты в Storybook.',
        'Реализовал чат, сессии, персоны и задачи. **TanStack Query v5**: оптимистичные обновления, инвалидация, AbortSignal и восстановление после ошибок. React Router v7, аутентификация и i18next.',
        'Настроил **OpenAPI codegen**, Sentry, Vitest / Testing Library и CI: проверка типов, линтеры, тесты, сборка приложения и Storybook. Контейнеризация в Docker.',
      ],
    },
    comdev: {
      name: 'ComDev.group',
      role: 'Frontend Developer',
      date: 'Апрель 2022 — декабрь 2023',
      bullets: [
        'Разрабатывал приложение на **React / Redux Toolkit**: MUI, Formik / Yup, react-hook-form, i18next и Mapbox. Перевёл сервис с **iSSR на Next.js**, внедрил FSD.',
        'Интегрировал **Self-Sovereign Identity** и verifiable credentials на базе owlmeans.',
      ],
    },
    projects: [
      {
        name: 'LLM Integrator',
        role: 'Full-stack · LLM-бот для Twitch',
        date: 'Апрель 2026 — настоящее время',
        bullets: [
          '**NestJS 11, TypeORM, PostgreSQL, Twitch Helix API.** LLM-ответы, обработка ошибок, защита от эхо-ответов и учёт стоимости запросов; тесты Jest / Supertest / Testcontainers.',
          '**React 19 / Vite / Ant Design:** настройки бота, графики расходов и журнал ошибок. Композиционный репозиторий: server, client, admin, OBS-расширение; Docker, Nginx и GitHub Actions.',
        ],
      },
    ],
    smallerProjects: [
      '**Twitch-бот · март 2026.** Прототип на Next.js 16: Twitch OAuth, Telegram / Telegraf, дедупликация сообщений; миграция с Prisma на TypeORM.',
    ],
    skills: [
      ['Frontend', 'TypeScript · React · Next.js · React Router · Redux Toolkit · TanStack Query'],
      ['UI и данные', 'Ant Design · MUI · Sass / CSS Modules · Tailwind · Formik · react-hook-form · Zod · Yup · Axios · i18next'],
      ['Backend', 'Node.js · NestJS · Express · REST / OpenAPI · PostgreSQL · TypeORM · JWT / OAuth'],
      ['Качество', 'Jest · Vitest · Testing Library · Supertest · Testcontainers · Storybook · Chromatic'],
      ['Инструменты', 'Docker · GitHub Actions · Sentry · Vite / Webpack · Git · pnpm · Claude Code / OpenCode'],
    ],
    education: '**БГТУ**, Минск — неоконченное высшее. **PixelPlex** — «Node.js: теория и практика», 2022.',
    languages: 'Белорусский — родной · Русский — C2\nУкраинский — C1 · Английский — B1',
  },
  en: {
    language: 'en',
    filename: 'Melnik_Stanislau_Resume_2026_EN.pdf',
    source: 'Melnik_Stanislau_Resume_2026_EN.md',
    name: 'Stanislau Melnik',
    location: 'Minsk, Belarus',
    availability: 'Remote / hybrid / on-site · open to relocation',
    summary: '**4+ years of commercial experience.** I build B2B admin applications and customer portals with React / Next.js and TypeScript. My focus is modular frontend architecture, shared UI libraries, and reliable interfaces. I also develop NestJS backend services and LLM integrations.',
    labels: {
      experience: 'Work experience',
      continued: 'Experience, projects & skills',
      projects: 'Personal projects',
      skills: 'Core skills',
      education: 'Education',
      languages: 'Languages',
      footer: 'Resume · October 2026',
    },
    cityos: {
      name: 'CityOS',
      role: 'Frontend Developer',
      date: 'April 2024 — present',
      intro: 'Property management platform with an admin application, resident portal, and shared backend. Products for CityOS, North Waterfront, Nuanu, and SunBridge.',
      groups: [
        {
          title: 'Modular platform & admin application',
          bullets: [
            'Designed the frontend platform from scratch: **30+ domain modules** in separate repositories, **git submodules and pnpm workspaces**. FSD and architectural linting enforce boundaries; modules are reused across products for four clients.',
            'Built modules for resident requests, residents, staff, communications, and access control. Implemented **real-time chats with Centrifugo / WebSocket**: history, assignments, unread messages, and permissions.',
            'Maintain the **shared UI library**: forms, tables, filters, pagination, and cached reference data. Integrated Quill, media uploads, and HTML sanitization; handled time zones and data validation.',
            'Established quality checks with **Jest / Testing Library, Storybook / Chromatic**, strict TypeScript, linters, and Husky. Addressed stale-chunk failures after deployment by retaining recent builds and reloading the application once.',
          ],
        },
        {
          title: 'North Waterfront · resident portal',
          bullets: [
            'Built the portal with **Next.js 16 / React 19**: FSD, SSR, SEO, server-side ru/en localization, authentication, news, a knowledge base, and parcel lockers.',
            'Implemented camera viewing (**hls.js, RTSP / go2rtc**), intercoms, and remote access-point opening. Added HLS proxy validation to mitigate SSRF; configured Docker Compose for web and go2rtc.',
          ],
        },
        {
          title: 'Backend & integrations · 2026',
          bullets: [
            'Contributed to the **NestJS API gateway, chatbot, and notification service**: proxying, DTO validation, file uploads, JWT, and service-to-service authentication using guards.',
            'Worked with **PostgreSQL / TypeORM**: migrations, transactions, and idempotent callbacks; wrote integration and end-to-end tests with **Jest / Supertest**.',
          ],
        },
      ],
      closing: '**Infrastructure & processes:** composition repository, Docker Compose, GitHub Actions, dev / SIT / prod. Define API contracts with the Laravel team; configure project rules for Claude Code and OpenCode.',
    },
    edwin: {
      name: 'EdWin',
      role: 'Frontend Developer · contract',
      date: 'May — July 2026',
      bullets: [
        'Built the frontend of an AI analytics service from scratch: **React 19, strict TypeScript, Vite, FSD**. Figma design tokens, SCSS / CSS Modules, and UI components in Storybook.',
        'Implemented chat, sessions, personas, and tasks. **TanStack Query v5**: optimistic updates, invalidation, AbortSignal, and error recovery. React Router v7, authentication, and i18next.',
        'Set up **OpenAPI codegen**, Sentry, Vitest / Testing Library, and CI: type checks, linting, tests, application and Storybook builds. Docker containerization.',
      ],
    },
    comdev: {
      name: 'ComDev.group',
      role: 'Frontend Developer',
      date: 'April 2022 — December 2023',
      bullets: [
        'Developed a **React / Redux Toolkit** application with MUI, Formik / Yup, react-hook-form, i18next, and Mapbox. Migrated the service from **iSSR to Next.js** and introduced FSD.',
        'Integrated **Self-Sovereign Identity** and verifiable credentials using owlmeans.',
      ],
    },
    projects: [
      {
        name: 'LLM Integrator',
        role: 'Full-stack · LLM bot for Twitch',
        date: 'April 2026 — present',
        bullets: [
          '**NestJS 11, TypeORM, PostgreSQL, Twitch Helix API.** LLM responses, error handling, echo-response protection, and request cost tracking; Jest / Supertest / Testcontainers tests.',
          '**React 19 / Vite / Ant Design:** bot settings, spend charts, and error logs. Composition repository: server, client, admin, OBS extension; Docker, Nginx, and GitHub Actions.',
        ],
      },
    ],
    smallerProjects: [
      '**Twitch bot · March 2026.** Next.js 16 prototype: Twitch OAuth, Telegram / Telegraf, message deduplication; migrated from Prisma to TypeORM.',
    ],
    skills: [
      ['Frontend', 'TypeScript · React · Next.js · React Router · Redux Toolkit · TanStack Query'],
      ['UI & data', 'Ant Design · MUI · Sass / CSS Modules · Tailwind · Formik · react-hook-form · Zod · Yup · Axios · i18next'],
      ['Backend', 'Node.js · NestJS · Express · REST / OpenAPI · PostgreSQL · TypeORM · JWT / OAuth'],
      ['Quality', 'Jest · Vitest · Testing Library · Supertest · Testcontainers · Storybook · Chromatic'],
      ['Tools', 'Docker · GitHub Actions · Sentry · Vite / Webpack · Git · pnpm · Claude Code / OpenCode'],
    ],
    education: '**Belarusian State Technological University**, Minsk — incomplete degree. **PixelPlex** — “Node.js: Theory and Practice”, 2022.',
    languages: 'Belarusian — native · Russian — C2\nUkrainian — C1 · English — B1',
  },
};
