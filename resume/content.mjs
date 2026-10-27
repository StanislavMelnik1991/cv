// Editorial versions for the two-page PDF. Facts come from the root resume MDs.
// Keep both languages aligned when editing; see README.md for the source mapping.
export const resumes = {
  ru: {
    language: 'ru-RU',
    filename: 'Melnik_Stanislau_Resume_2026.pdf',
    source: 'Melnik_Stanislau_Resume_2026.md',
    name: 'Станислав Мельник',
    showPhoto: true,
    location: 'Минск, Беларусь',
    availability: 'Удалённо / гибрид / офис · готов к переезду',
    summary: '**4+ года коммерческого опыта** в React, Next.js и TypeScript. Спроектировал frontend-платформу из **30+ модулей** для сборки приложений CityOS, North Waterfront и SunBridge. Фокус — B2B-интерфейсы, UI-библиотеки и real-time; также — коммерческие интеграции LLM / OpenRouter и Telegram.',
    labels: {
      experience: 'Опыт работы',
      continued: 'Опыт, проекты и навыки',
      projects: 'Личный проект',
      skills: 'Ключевые навыки',
      education: 'Образование',
      languages: 'Языки',
      footer: 'Резюме · октябрь 2026',
    },
    cityos: {
      name: 'CityOS (ООО «СИТИОС»)',
      role: 'Frontend Developer',
      date: 'Апрель 2024 — настоящее время',
      intro: 'Платформа управления недвижимостью. Внедрения: CityOS, North Waterfront, Nuanu и SunBridge.',
      groups: [
        {
          title: 'Модульная платформа и админ-панель',
          bullets: [
            '**Спроектировал frontend-архитектуру с нуля.** Приложения заказчиков собираются из общих модулей в отдельных репозиториях. Границы FSD контролируются линтингом; интеграция — через git submodules и workspace-пакеты для параллельной разработки.',
            'Развиваю **общую UI-библиотеку**: компоненты, формы и API-контракты. Реализовал фильтры и кэширование справочников; учитывал часовые пояса и права в формах. Интегрировал Quill и загрузку медиа с санитизацией HTML.',
            'Реализовал **real-time-чаты на Centrifugo / WebSocket**: история, ответственные, непрочитанные сообщения и права доступа. Разработал модули заявок, жителей, сотрудников, коммуникаций и доступа.',
            'Настроил **Jest / Testing Library, Storybook / Chromatic**, TypeScript strict, линтеры и Sentry. Интегрировал легаси-API; добавил восстановление после ошибок устаревших чанков: хранение трёх сборок и однократная перезагрузка.',
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
            'Реализовал **LLM-сервис на OpenRouter и Telegram-адаптер на Telegraf**; выделил бизнес-логику чатов из API gateway в отдельный микросервис.',
            'API gateway и чат-бот — **NestJS**, уведомления — **Fastify**. Разделил пользовательскую JWT-авторизацию и межсервисный доступ. **PostgreSQL / TypeORM**: миграции, транзакции, идемпотентные callback-и; серверные интеграционные и e2e-тесты Jest / Supertest.',
          ],
        },
      ],
      closing: '**Совместная работа и поставка:** согласую API-контракты и планы внедрения с Laravel-командой, веду бэклог. Создал и поддерживаю репозитории North Waterfront и CityOS; Docker Compose, GitHub Actions.',
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
      ['Backend', 'Node.js · NestJS · Fastify · Express · PostgreSQL · TypeORM · JWT / OAuth'],
      ['Интеграции', 'LLM API / OpenRouter · Telegram / Telegraf · WebSocket · HLS / go2rtc'],
      ['Тестирование', 'Jest · Vitest · Testing Library · Storybook · Chromatic; backend: Supertest / Testcontainers'],
      ['Поставка', 'Docker · GitHub Actions · Sentry · Vite / Webpack · Git · pnpm'],
    ],
    education: '**БГТУ**, Минск — неоконченное высшее. **PixelPlex** — «Node.js: теория и практика», 2022.',
    languages: 'Белорусский — родной · Русский — C2\nУкраинский — C1 · Английский — B1',
  },
  en: {
    language: 'en',
    filename: 'Melnik_Stanislau_Resume_2026_EN.pdf',
    source: 'Melnik_Stanislau_Resume_2026_EN.md',
    name: 'Stanislau Melnik',
    showPhoto: false,
    location: 'Minsk, Belarus',
    availability: 'Remote / hybrid / on-site · open to relocation',
    summary: 'Frontend engineer with **4+ years of professional experience** in React, Next.js, and TypeScript. Designed a **frontend platform with 30+ modules** for CityOS, North Waterfront, and SunBridge applications. Focused on B2B interfaces, shared UI and real-time features; also delivered commercial LLM / OpenRouter and Telegram integrations.',
    labels: {
      experience: 'Work experience',
      continued: 'Experience, projects & skills',
      projects: 'Personal project',
      skills: 'Core skills',
      education: 'Education',
      languages: 'Languages',
      footer: 'Resume · October 2026',
    },
    cityos: {
      name: 'CityOS',
      role: 'Frontend Developer',
      date: 'April 2024 — present',
      intro: 'Property management platform. Client deployments: CityOS, North Waterfront, Nuanu, and SunBridge.',
      groups: [
        {
          title: 'Modular platform & admin application',
          bullets: [
            '**Designed the frontend architecture from scratch.** Client applications are assembled from shared modules in separate repositories. Linting enforces FSD boundaries; git submodules and workspace packages integrate modules for parallel development.',
            'Maintain the **shared UI library**: components, forms, and API contracts. Implemented filters and reference-data caching; handled time zones and permissions in forms. Integrated Quill and media uploads with HTML sanitization.',
            'Built **real-time resident chats with Centrifugo / WebSocket**: history, assignments, unread counters, and permissions. Developed modules for resident requests, residents, staff, communications, and access control.',
            'Set up **Jest / Testing Library, Storybook / Chromatic**, strict TypeScript, linting, and Sentry. Integrated the legacy API; added recovery from stale-chunk errors by retaining the last three builds and reloading the application once.',
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
            'Built an **OpenRouter LLM service and a Telegram adapter with Telegraf**; extracted chat business logic from the API gateway into a separate microservice.',
            'API gateway and chatbot: **NestJS**; notifications: **Fastify**. Separated user JWT authentication from service-to-service access. **PostgreSQL / TypeORM**: migrations, transactions, idempotent callbacks; backend integration and end-to-end tests with Jest / Supertest.',
          ],
        },
      ],
      closing: '**Collaboration & delivery:** define API contracts and implementation plans with the Laravel team; maintain the backlog. Created and maintain North Waterfront and CityOS integration repositories; Docker Compose, GitHub Actions.',
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
      ['Backend', 'Node.js · NestJS · Fastify · Express · PostgreSQL · TypeORM · JWT / OAuth'],
      ['Integrations', 'LLM APIs / OpenRouter · Telegram / Telegraf · WebSocket · HLS / go2rtc'],
      ['Testing', 'Jest · Vitest · Testing Library · Storybook · Chromatic; backend: Supertest / Testcontainers'],
      ['Delivery', 'Docker · GitHub Actions · Sentry · Vite / Webpack · Git · pnpm'],
    ],
    education: '**Belarusian State Technological University**, Minsk — undergraduate studies; degree not completed. **PixelPlex** — “Node.js: Theory and Practice”, 2022.',
    languages: 'Belarusian — native · Russian — C2\nUkrainian — C1 · English — B1',
  },
};
