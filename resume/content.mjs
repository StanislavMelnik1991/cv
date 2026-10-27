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
    summary: '**4+ года коммерческого опыта** в React, Next.js и TypeScript. Спроектировал frontend-платформу из **30+ доменных модулей**, переиспользуемых в четырёх продуктовых внедрениях. Основной опыт — B2B-интерфейсы, общие UI-библиотеки и real-time-функции; дополнительно — NestJS и PostgreSQL.',
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
      name: 'CityOS',
      role: 'Frontend Developer',
      date: 'Апрель 2024 — настоящее время',
      intro: 'Платформа управления недвижимостью: админ-панель, портал жителей и общий backend. Внедрения: CityOS, North Waterfront, Nuanu и SunBridge.',
      groups: [
        {
          title: 'Модульная платформа и админ-панель',
          bullets: [
            '**Спроектировал и реализовал frontend-архитектуру с нуля.** Общие модули переиспользуются между внедрениями и поддерживают параллельную разработку. Границы FSD контролируются архитектурным линтингом; интеграция — через git submodules и workspace-пакеты.',
            'Развиваю **общую UI-библиотеку** для модулей и приложений: компоненты, формы, типы и API-контракты. Реализовал фильтрацию, пагинацию и кэширование справочников с учётом часовых поясов и прав доступа.',
            'Реализовал **real-time-чаты на Centrifugo / WebSocket**: история, ответственные, непрочитанные сообщения и права доступа. Разработал модули заявок, жителей, сотрудников, коммуникаций и доступа.',
            'Интегрировал легаси-API и мониторинг в **Sentry**. Добавил восстановление после ошибок устаревших чанков при деплое: хранение трёх последних сборок и однократная перезагрузка приложения.',
            'Выстроил проверки качества: **Jest / Testing Library, Storybook / Chromatic**, TypeScript strict и линтеры. Интегрировал Quill и загрузку медиа с санитизацией пользовательского HTML.',
          ],
        },
        {
          title: 'North Waterfront · портал жителей',
          bullets: [
            'Разработал портал на **Next.js 16 / React 19**: FSD, SSR, SEO, серверная локализация ru/en, авторизация, новости, база знаний и постаматы.',
            'Реализовал просмотр камер (**hls.js, RTSP / go2rtc**), домофоны и удалённое открытие дверей. Добавил проверки HLS-прокси для защиты от SSRF; настроил Docker Compose для web и go2rtc.',
          ],
        },
        {
          title: 'Backend и интеграции · 2026',
          bullets: [
            'Участвовал в разработке **NestJS API gateway, чат-бота и уведомлений**: JWT, межсервисная авторизация, миграции, транзакции и идемпотентные callback-операции на **PostgreSQL / TypeORM**. Писал серверные интеграционные и e2e-тесты на Jest / Supertest.',
          ],
        },
      ],
      closing: '**Совместная работа и поставка:** согласую API-контракты с Laravel-командой, пишу спецификации и планы внедрения, веду бэклог. Docker Compose, GitHub Actions, dev / SIT / prod. Настроил правила для AI-агентов; использую их вместе с проверками типов, линтингом, тестами и Pull Request.',
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
    summary: 'Frontend engineer with **4+ years of professional experience** in React, Next.js, and TypeScript. Designed a frontend platform with **30+ domain modules** reused across four product implementations. Focused on B2B applications, shared UI libraries, and real-time features, with additional NestJS and PostgreSQL experience.',
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
      intro: 'Property management platform with an admin application, resident portal, and shared backend. Implementations: CityOS, North Waterfront, Nuanu, and SunBridge.',
      groups: [
        {
          title: 'Modular platform & admin application',
          bullets: [
            '**Designed and implemented the frontend architecture from scratch.** Shared modules are reused across implementations and enable parallel development. Architectural linting enforces FSD boundaries; modules are integrated through git submodules and workspace packages.',
            'Maintain the **shared UI library** across modules and applications: components, forms, types, and API contracts. Implemented filtering, pagination, and reference-data caching, accounting for time zones and permissions.',
            'Built **real-time resident chats with Centrifugo / WebSocket**: history, assignments, unread counters, and permissions. Developed modules for resident requests, residents, staff, communications, and access control.',
            'Integrated the legacy API and **Sentry** monitoring. Added recovery from stale-chunk errors after deployment by retaining the last three builds and reloading the application once.',
            'Established quality checks with **Jest / Testing Library, Storybook / Chromatic**, strict TypeScript, and linting. Integrated Quill and media uploads with HTML sanitization for user-generated content.',
          ],
        },
        {
          title: 'North Waterfront · resident portal',
          bullets: [
            'Built the portal with **Next.js 16 / React 19**: FSD, SSR, SEO, server-side ru/en localization, authentication, news, a knowledge base, and parcel lockers.',
            'Implemented camera streaming (**hls.js, RTSP / go2rtc**), intercoms, and remote door unlocking. Added HLS proxy validation to mitigate SSRF; configured Docker Compose for web and go2rtc.',
          ],
        },
        {
          title: 'Backend & integrations · 2026',
          bullets: [
            'Contributed to the **NestJS API gateway, chatbot, and notification service**: JWT, service-to-service authentication, migrations, transactions, and idempotent callbacks with **PostgreSQL / TypeORM**. Wrote backend integration and end-to-end tests with Jest / Supertest.',
          ],
        },
      ],
      closing: '**Collaboration & delivery:** define API contracts with the Laravel team, write specifications and implementation plans, and maintain the backlog. Docker Compose, GitHub Actions, dev / SIT / prod. Set up AI agent rules; use coding assistants alongside type checks, linting, tests, and a pull request workflow.',
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
      ['Testing', 'Jest · Vitest · Testing Library · Storybook · Chromatic; backend: Supertest / Testcontainers'],
      ['Delivery', 'Docker · GitHub Actions · Sentry · Vite / Webpack · Git · pnpm'],
    ],
    education: '**Belarusian State Technological University**, Minsk — undergraduate studies; degree not completed. **PixelPlex** — “Node.js: Theory and Practice”, 2022.',
    languages: 'Belarusian — native · Russian — C2\nUkrainian — C1 · English — B1',
  },
};
