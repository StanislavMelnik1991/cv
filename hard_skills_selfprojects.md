# Хард-скилы (на основе истории коммитов проектов selfProjects)

**Источник данных:** история коммитов репозиториев:
- `selfProjects\llm-integrator-composition` — 49 коммитов (период: апрель — октябрь 2026)
- `selfProjects\twitch-bot` — 57 коммитов (период: март 2026)
- `selfProjects\wuthering_waves` — 30 коммитов (период: октябрь 2024)

**Автор коммитов:** Станислав Мельник (логины: `Stanislau`, `Stanislau Melnik`, `StanislavMelnik1991`). Посторонние коммиты от других авторов не учитывались — в analysed периодах все коммиты принадлежат Станиславу.

**Общий объём:** 136 коммитов (100 % analysed истории).

---

## 1. Краткий обзор проектов

| Проjekt | Описание | Коммиты | Период |
|---------|----------|---------|--------|
| `llm-integrator-composition` | Komposition-репозиторий (git submodules: client, server, admin, obs_extention) с CI/CD workflows (Netlify), Docker-конфигурацией и документацией AGENTS.md | 49 | апр — окт 2026 |
| `twitch-bot` | Twitch-бот на Next.js 16 + React 19: LLM-интеграция в чат, Twitch OAuth, Telegram-бот (Telegraf), чат с deduplication, профили пользователей, миграция Prisma → TypeORM, Docker | 57 | март 2026 |
| `wuthering_waves` | Фан-сайт для игры Wuthering Waves на Next.js 14 + React 18: FSD-архитектура, авторизация (JWT, Telegram auth), личный кабинет, каталог персонажей и оружия, i18n (русификация) | 30 | окт 2024 |

---

## 2. Хард-скилы по категориям

### 2.1 Backend-разработка (Node.js, TypeORM, PostgreSQL)
**Уровень:** уверенный / сильный

- Разработка серверной части на **Node.js** с **TypeORM** (ORM для работы с БД, миграции, сущности, репозитории).
- Работа с **PostgreSQL** (`pg` драйвер): подключение, запросы, мониторинг статуса БД в UI.
- Миграция с **Prisma** на **TypeORM** для улучшения гибкости и производительности (`refactor database integration: replace Prisma with TypeORM`).
- Настройка переменных окружения для подключения к Vercel Postgres.
- Подтверждающие коммиты: `d2d6b5b refactor database integration...`, `cd899b8 update Docker... apply Prisma migrations`, `8f100b9 LLM model validation... chat message handling`.

### 2.2 Фронтенд-разработка (Next.js, React, TypeScript)
**Уровень:** уверенный

- Разработка UI на **React 18** и **React 19** с функциональными компонентами и хуками.
- **Next.js 14** (App Router, серверный рендеринг) и **Next.js 16**: роутинг, API-роуты, серверные действия.
- **TypeScript 5** в строгом режиме: строгая типизация props, состояния, ответов API, DTO.
- Работа с состоянием компонентов, побочными эффектами, формой ввода, модальными окнами.
- Подтверждающие коммиты: `b8096b7 Refactor ConnectionSettingsLlmTab...`, `59dc37c Refactor ManualLlmPromptTab...`, `482b963 Refactor Twitch OAuth handling...`, `1c03c78 Refactor project structure... Next.js`, `e7cc220 complete base FSD structure`.

### 2.3 Архитектура приложений (Feature-Sliced Design, модульная структура)
**Уровень:** уверенный

- Организация кода по слоям **FSD**: `app`, `pages`, `widgets`, `features`, `entities`, `shared` (в `wuthering_waves`).
- Модульная структура с разделением на `shared`, `client`, `server` модули через path aliases в `tsconfig.json` (в `twitch-bot`).
- Композиционный репозиторий с **git submodules** (`client`, `server`, `admin`, `obs_extention`) — централизованное управление зависимыми подпроектами.
- Подтверждающие коммиты: `e7cc220 complete base FSD structure`, `d5eb708 path aliases for shared, client, and server modules`, `a00a27a Add admin submodule`, `33bcbf6 add obs_extention submodule`.

### 2.4 Аутентификация и безопасность
**Уровень:** уверенный

- **JWT-аутентификация** (`jsonwebtoken`): генерация и валидация токенов, защита маршрутов.
- **bcrypt** для хеширования паролей.
- **Twitch OAuth**: поток авторизации через Twitch, cookie-based state management, callback-роуты, валидация токенов.
- **Telegram auth**: авторизация через Telegram (в `wuthering_waves`).
- Route guards, проверка регистрации портала, авторизационные заголовки в API-запросах.
- Подтверждающие коммиты: `482b963 Refactor Twitch OAuth handling... cookie-based state management`, `d355150 enforce authorization checks... portal authentication headers`, `f2e7f19 fix: auth without some data`, `3429906 complete base tg auth`.

### 2.5 Интеграция с внешними API (Twitch, Telegram, LLM)
**Уровень:** уверенный

- **Twitch API / tmi.js**: подключение к Twitch IRC, прием сообщений в реальном времени, канал-логин,广播-идентификаторы, обработка тегов IRC.
- **Telegraf (Telegram Bot API)**: публичные и админские команды, описания команд, уведомления о валидации токена, помощь по контексту чата.
- **LLM-интеграция**: системные и пользовательские промпты, стек приоритета системных сообщений, контекстная история чата, reply-потоки (ChatReplyThreadModalBody), хранение настроек LLM в local storage, валидация моделей.
- Поток обработки сообщений: deduplication исходящих сообщений, слияние live-сообщений IRC с историей из БД, snapshots чата.
- Подтверждающие коммиты: `95cbc98 Refactor chat context loading...`, `2e57758 structured system message stack...`, `d355150 Twitch token validation route... notifying via Telegram`, `4bbd838 Telegram bot functionality... public and admin command support`, `ccb877f normalization for Twitch tokens... bot login input`.

### 2.6 DevOps и инфраструктура (Docker, CI/CD, Git submodules)
**Уровень:** уверенный / базовый-средний

- **Docker & Docker Compose**: `docker-compose.yml`, `Dockerfile`, порт-маппинг, переменные окружения, Prisma миграции в контейнере, запуск клиента через Docker (Nginx SPA fallback).
- **Netlify CI/CD**: workflows для развертывания (admin, client, server), `--no-build` опция, конфигурационные файлы Netlify, pnpm setup action.
- **Git submodules**: регистрация, обновление ссылок, dirty-state указатели, рекурсивный checkout в workflows.
- **AGENTS.md**: инструкции для AI-агентов, правила линтинга, TypeScript качество.
- Подтверждающие коммиты: `b4df1b0 update deploy workflows --no-build Netlify`, `a90e36a pnpm setup action`, `f879f00 register obs_extention submodule`, `cd5e59f standardize submodule checkout`, `78248a9 enhance AGENTS.md with admin linting instructions`.

### 2.7 Базы данных (PostgreSQL, TypeORM, миграции)
**Уровень:** уверенный

- Модели сущностей: `ChatMessage` (с отслеживанием удаления — message deletion, user timeout, ban, chat clear), пользователи, подключения, каналы, персонажи, оружие.
- Пaginация сообщений, soft-delete помечание сообщений, deduplication записей.
- Подключение к Vercel Postgres, мониторинг статуса БД в интерфейсе.
- Подтверждающие коммиты: `cd899b8 ChatMessage model... deletion tracking fields`, `4d1e9ed message fetching with pagination support`, `d2d6b5b replace Prisma with TypeORM... enhanced database status monitoring`.

### 2.8 UI/UX и верстка (Tailwind, Ant Design, SCSS)
**Уровень:** уверенный

- **Tailwind CSS 4** (в `twitch-bot`): утилитарная верстка, кастомные скроллбары (dark theme).
- **Ant Design 6** (в `twitch-bot`): кнопки, алерты, типографика, `AntdRegistry`, `AntdRoot` для контекста.
- **SCSS/Sass** (в `wuthering_waves`): базовые стили, стили элементов и персонажей, адаптивность.
- React-Toastify для уведомлений, classnames для условных классов.
- Подтверждающие коммиты: `32819e1 custom scrollbar styles... Ant Design components`, `5a52aa1 fix: scroll`, `4140db9 complete base bg styles`, `2370fa9 update element styles`.

### 2.9 Интернационализация и переводы (i18next)
**Уровень:** базовый / средний

- Интеграция `eslint-plugin-i18next`, файлы локалей, переводы интерфейса.
- Русификация переводов (fix: ru characters translation, fix: characters name translation).
- Подтверждающие коммиты: `0d8ae1e fix: ru characters translation`, `5a7d5bd fix: characters name translation`, `6e1c874 complete base translations`.

### 2.10 Качество кода, линтинг и инструменты
**Уровень:** уверенный

- **ESLint 8–9** + `eslint-config-next` + `eslint-config-prettier` + `eslint-plugin-import` + `eslint-plugin-prettier` + `eslint-plugin-storybook`.
- **Prettier** для форматирования кода.
- Настройка линтинга для различных модулей (client, server, admin) через AGENTS.md и npm-скрипты.
- Подтверждающие коммиты: `8928f32 Refactor ESLint configuration...`, `091cf91 fix: eslint`, `2b9c694 Enhance AGENTS.md with TypeScript quality guidelines and linting instructions`.

### 2.11 Git, процессы разработки и документация
**Уровень:** уверенный

- Conventional Commits (некоторые коммиты), PR workflow (merge PR #1–#12), squash/merge в основные ветки.
- Работа с git submodules, gitlink, dirty state.
- README documentation: инструкции по настройке, переменные окружения.
- Подтверждающие коммиты: множество merge commit (PR #1–#12), `e3f8e3b Initialize composition repository... add .gitignore, AGENTS.md`.

---

## 3. Стек технологий (таблица для резюме)

| Категория | Инструменты / технологии |
|-----------|--------------------------|
| Языки | TypeScript 5, JavaScript (ESM), SCSS |
| Фреймворки / UI | React 18, React 19, Next.js 14, Next.js 16, Ant Design 6 |
| Стилизация | Tailwind CSS 4, SCSS/Sass, CSS Modules |
| Бэкенд | Node.js, Express-подобные API-роуты (Next.js API routes) |
| ORM / БД | TypeORM, PostgreSQL (pg), Prisma (миграция с него), Vercel Postgres |
| Аутентификация | JWT (jsonwebtoken), bcrypt, Twitch OAuth, Telegram auth |
| Внешние API | tmi.js (Twitch IRC), Telegraf (Telegram Bot API), LLM APIs (промпты, контекст) |
| Состояние / хранение | React estado, local storage, React Query-подобные паттерны кэширования |
| Тестирование | (не найдено в analysed проектах — нет тестовых скриптов) |
| Линтинг / форматирование | ESLint 8–9, Prettier, typescript-eslint |
| DevOps / инфраструктура | Docker, Docker Compose, Nginx (SPA fallback), Netlify CI/CD, Git submodules, pnpm/npm |
| Инструменты разработки | tsx, dotenv, zod (валидация schemas), reflect-metadata |
| Документация | AGENTS.md, README |
| Версии / процессы | Git, git submodules, PR workflow, Conventional Commits |

---

## 4. Ключевые области ответственности (для формулировок в резюме)

- Разработка fullstack-функций для Twitch-бота на Next.js + React + TypeScript: LLM-интеграция в чат, Twitch OAuth, чат с deduplication иreply-потоками.
- Миграция ORM с Prisma на TypeORM, работа с PostgreSQL, модели сущностей и миграции.
- Интеграция с Telegram-ботом (Telegraf): команды, уведомления, help-сообщения.
- Настройка Docker-окружения и Docker Compose для полноценного развертывания приложения.
- Управление git submodules в композиционном репозитории, CI/CD workflows (Netlify), AGENTS.md документация.
- Разработка фан-сайта на Next.js 14 с FSD-архитектурой, JWT-аутентификацией, авторизацией через Telegram, личным кабинетом пользователя.
- Интернационализация и русификация интерфейса (i18next).
- Настройка линтинга (ESLint, Prettier) и поддержание качества кода.

---

## 5. Статистика коммитов (справочно)

- **Всего коммитов Станислава:** 136 (100 % analysed истории).
- **По репозиториям:** `twitch-bot` — 57, `llm-integrator-composition` — 49, `wuthering_waves` — 30.
- **По месяцам:** октябрь 2024 — 30 (`wuthering_waves`), март 2026 — 57 (`twitch-bot`), апрель — октябрь 2026 — 49 (`llm-integrator-composition`).
- **Авторские логины:** `Stanislau` (89 коммитов), `Stanislau Melnik` (17 коммитов), `StanislavMelnik1991` (30 коммитов).

---

*Документ автоматически сформирован на основе истории коммитов каталогов `selfProjects\llm-integrator-composition`, `selfProjects\twitch-bot`, `selfProjects\wuthering_waves`. Предназначен для последующего оформления резюме.*
