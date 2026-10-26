# Мельник Станислав Валерьевич

**Senior Frontend Developer** · React · Next.js · TypeScript

Минск, Беларусь · +375 (44) 733-66-60 · stanislavmelnik@gmail.com · [GitHub: StanislavMelnik1991](https://github.com/StanislavMelnik1991)

Готов к удалённой работе, гибриду или офису, к переезду и командировкам.

---

## О себе

Frontend-разработчик с **4+ годами коммерческого опыта** в продуктовой разработке. Основное направление — сложные B2B-админки и клиентские порталы на **React / Next.js + TypeScript**: модульная архитектура, real-time-функции, видеонаблюдение, SEO и i18n.

Сильная сторона — **проектирование масштабируемой frontend-архитектуры**: спроектировал с нуля модульную платформу CityOS (**Feature-Sliced Design** + независимые модули в отдельных репозиториях), на которой построены продукты четырёх заказчиков. Развиваю общую UI-библиотеку, выстраиваю проверки качества и CI/CD, согласую API-контракты с backend-командой. Также разрабатываю серверные функции и интеграции на **NestJS, TypeORM и PostgreSQL** в CityOS и собственных проектах. Использую Claude Code и OpenCode, пишу инструкции для агентов и правила проекта.

---

## Опыт работы

### ООО «СИТИОС» (CityOS) — Frontend Developer
**Апрель 2024 — настоящее время** · Минск

CityOS — платформа управления жилой и коммерческой недвижимостью: веб-админка для персонала, портал для жителей и мобильные приложения на общем backend. Платформа развёрнута для нескольких заказчиков: **CityOS**, **North Waterfront (Северный Берег)**, **Nuanu**, **SunBridge**.

**Админ-панель платформы** (React 18, TypeScript, Vite, Ant Design, FSD)

- **Архитектура frontend-платформы.** Спроектировал и с нуля реализовал модульную архитектуру: приложение под каждого заказчика (CityOS, North Waterfront, SunBridge) собирается из **30+ независимых доменных модулей**. У каждого модуля отдельный репозиторий и ревью; интеграция — через **git submodules и workspace-пакеты**. Слои и границы задаёт Feature-Sliced Design, их контролирует `eslint-plugin-boundaries`. Готовые модули переиспользуются в продуктах разных заказчиков и позволяют команде вести разработку параллельно.
- Разработал и сопровождаю ключевые модули:
  - **чаты с жителями** в реальном времени (**Centrifugo / WebSocket**): сессии и их архив, история с фильтрами, назначение ответственных, счётчики непрочитанных, настройки чатов;
  - **заявки жителей**: автоназначение исполнителей, фильтры, история, комментарии, проверка прав доступа;
  - **жители, сотрудники, партнёры**: карточки, журнал активности, модерация и аналитика партнёров;
  - **коммуникации**: новости, события, уведомления, технические работы;
  - **безопасность**: СКУД, видеонаблюдение, домофоны;
  - **постаматы, парковки, медиа, организации, подписки**;
  - **роли и права доступа**: редактор ролей, ограничения по типу сотрудника.
- Сопровождаю общую **UI-библиотеку** (shared / ui-kit), которую используют все модули и сборки под заказчиков: компоненты, формы, типы и общие API-контракты.
- Реализовал фильтрацию, сортировку и пагинацию, контекстное кэширование справочников организаций, валидацию дат и IP-адресов; учитывал часовые пояса и права доступа в формах.
- Интегрировал rich-text-редактор **Quill**, загрузку изображений и видео, санитизацию HTML для пользовательского контента.
- Интегрировал новый интерфейс с **легаси-API** North Waterfront: типизированные клиенты, обработка ошибок 422/503, отправка сбоев в **Sentry**.
- Повысил надёжность релизов: образ хранит три последних билда, а при исчезновении чанка с сервера приложение один раз автоматически перезагружается (решение проблемы stale chunks после деплоя).
- Качество кода: строгий TypeScript, ESLint + Stylelint + Prettier, unit-тесты на **Jest + Testing Library**, **Storybook + Chromatic**, Husky pre-push (tsc, линтеры, тесты).

**Портал жителей North Waterfront** (Next.js 16, React 19, App Router, Ant Design) — апрель–август 2026

- Разработал портал по FSD: SSR, SEO (`generateMetadata`, canonical и alternate-ссылки, `sitemap`, `robots`), локализация ru/en через сегмент URL с рендерингом переводов на сервере.
- Сделал раздел **«Безопасность»**: просмотр камер (**HLS / RTSP через go2rtc**, `hls.js`), страницы домофонов и точек доступа с удалённым открытием. Добавил валидацию параметров HLS-прокси для защиты от **SSRF**, включая отклонение `%2e`/`%2f`.
- Реализовал постаматы (подтверждение доставки курьером), новости, базу знаний, настройки и авторизацию.
- Настроил деплой раздела «Безопасность» через **Docker Compose** (web + go2rtc) с лимитами ресурсов и параметрами из CI.

**Серверные сервисы и интеграции** (NestJS, TypeORM, PostgreSQL) — 2026

- Участвовал в разработке API gateway, чат-бота и сервиса уведомлений: проксирование запросов, DTO-валидация, загрузка файлов и асинхронные callback-операции.
- Реализовывал разделение пользовательской **JWT-авторизации** и межсервисного доступа через guards и сервисный секрет, проверку конфигурации при запуске и защиту proxy-маршрутов.
- Работал с миграциями, транзакциями и идемпотентной обработкой повторных callback-запросов, писал интеграционные и e2e-тесты на **Jest / Supertest**.

**Инфраструктура и процессы**

- Создал и поддерживаю **композиционный репозиторий** North Waterfront, объединяющий через git submodules админку, портал, backend, мониторинг и два Flutter-приложения. Полный стек поднимается локально через **Docker Compose**.
- Проектирую API-контракты с backend-командой (Laravel): пишу спецификации и планы внедрения (например, по чатам), веду бэклог.
- Внедрил AI-ассистированную разработку: инструкции для агентов (`CLAUDE.md` / `AGENTS.md`), правила репозиториев, конфигурации агентов OpenCode.
- Работаю по feature-веткам и Pull Request'ам, Conventional Commits, стенды dev / SIT / prod через GitHub Actions.

**Стек:** React 18/19, Next.js 16, TypeScript, Vite, Ant Design, FSD, i18next, Centrifugo, HLS.js, NestJS, TypeORM, PostgreSQL, Sentry, Jest, Supertest, Testing Library, Storybook, Chromatic, Docker, GitHub Actions, pnpm.

### Проектная работа (контракт) — Frontend Developer, EdWin
**Май 2026 — Июль 2026**

EdWin — AI-сервис аналитики с чат-интерфейсом. Frontend разрабатывал с нуля.

- Заложил архитектуру: **React 19 + TypeScript (strict) + Vite**, FSD, дизайн-система на токенах из **Figma** (SCSS + CSS Modules), UI-примитивы в Storybook.
- Работа с серверным состоянием на **TanStack Query v5**: оптимистичные обновления, инвалидация кэша, отмена запросов через `AbortSignal`, восстановление чата после временных ошибок.
- Типизированный API-клиент генерируется из OpenAPI (`@hey-api/openapi-ts`), окружение валидируется при старте, ошибки отслеживаются в Sentry.
- Реализовал чат анализа, сессии, персоны, панель задач, project-scoped роутинг (React Router v7), аутентификацию и локализацию (i18next, включая украинский язык).
- Настроил проверки качества: **Vitest + Testing Library**, ESLint 9, Stylelint, Husky, **GitHub Actions** (typecheck, линтеры, тесты, сборка приложения и Storybook), Docker.

### ComDev.group — Frontend Developer
**Апрель 2022 — Декабрь 2023** (1 год 9 месяцев)

- Разрабатывал клиентское приложение на **React + Redux Toolkit** (MUI, Formik / Yup, react-hook-form, i18next, Mapbox).
- Перевёл сервис с **iSSR (`@issr/core`) на Next.js**.
- Интегрировал **SSI** (Self-Sovereign Identity, verifiable credentials) на базе библиотеки **owlmeans**.
- Внедрил в проект методологию **Feature-Sliced Design**.

---

## Личные проекты

### LLM Integrator — платформа LLM-бота для Twitch
**Апрель 2026 — настоящее время** · full-stack

- **Backend:** NestJS 11, TypeORM, PostgreSQL. Интеграция с **Twitch Helix API**; LLM-сервис с настройками надёжности, структурированными ответами и защитой от эхо-ответов; модуль мониторинга ошибок; учёт стоимости LLM-запросов. Тесты: Jest, Supertest, Testcontainers.
- **Клиент и админ-панель:** React 19, Vite, Ant Design, Recharts — настройки бота, история и графики расходов на LLM, журнал ошибок с деталями попыток, управление пользователями.
- **Инфраструктура:** репозиторий-композиция из сабмодулей (server, client, admin, OBS-расширение), Docker, Nginx (SPA fallback), CI/CD на GitHub Actions.

### Twitch-бот с LLM (прототип LLM Integrator)
**Март 2026** · Next.js 16, React 19, TypeORM, PostgreSQL, tmi.js, Telegraf, Docker

LLM-ответы в чате Twitch, Twitch OAuth, Telegram-бот для администрирования, дедупликация сообщений, reply-потоки. Перевёл проект с Prisma на TypeORM.

### Wuthering Waves Championship — сайт турнира
**Октябрь 2024** · Next.js 14, React 18, FSD, SCSS

JWT-авторизация и вход через Telegram, личный кабинет, каталог персонажей и оружия, локализация.

---

## Навыки

| Категория | Технологии |
|---|---|
| Языки и вёрстка | TypeScript (strict), JavaScript (ES2022+), HTML5, CSS, Sass/SCSS, адаптивная вёрстка |
| Frontend | React 17–19, Next.js 13–16 (App Router, SSR), React Router v7, Redux Toolkit, TanStack Query v5 |
| Архитектура | Feature-Sliced Design, модульные приложения, shared UI/API, отдельные репозитории с git submodules, pnpm workspaces |
| UI | Ant Design, MUI, Storybook, Chromatic, CSS Modules, Tailwind CSS, дизайн-токены, Figma, Quill |
| Формы и валидация | Formik, react-hook-form, Zod, Yup |
| Real-time и медиа | Centrifugo, WebSocket, HLS (hls.js), go2rtc |
| Качество | Jest, Vitest, Testing Library, Supertest, Testcontainers, ESLint (boundaries, i18next), Stylelint, Prettier, Husky |
| i18n и SEO | i18next, локализация на сервере (Next.js), метаданные, sitemap |
| Backend | Node.js, NestJS, Express, REST API, API Gateway, DTO-валидация |
| Базы данных | PostgreSQL, TypeORM, миграции, транзакции, идемпотентная обработка; миграция с Prisma на TypeORM |
| Авторизация | JWT, bcrypt, OAuth, Telegram Login, роли и guards, межсервисная авторизация |
| DevOps | Docker, Docker Compose, Nginx, GitHub Actions, Sentry, Vite, Webpack |
| Интеграции | Swagger/OpenAPI, генерация API-клиентов, Axios, Twitch API, Telegram Bot API (Telegraf), LLM API / OpenRouter |
| Инструменты | Git, Conventional Commits, Claude Code, OpenCode |

---

## Образование

- **Белорусский государственный технологический университет**, Минск — неоконченное высшее.
- **PixelPlex** — курс «Node.js: теория и практика» (2022).

## Языки

Белорусский — родной · Русский — C2 · Украинский — C1 · Английский — B1

## Рекомендации

Предоставлю по запросу: backend-разработчик ComDev.group, автор библиотеки owlmeans.
