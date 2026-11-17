# Хард скилы — проекты каталога 2024

**Источник:** `D:\Work\2024`  
**Дата анализа:** 19.10.2026  
**Статус:** дополнен GitHub-историей (база для резюме)

---

## ⚠️ Важное примечание по источнику данных

В каталоге `2024` **нет доступной локальной истории коммитов** (`git log`). Что найдено:

- **`CityOs/client`** — полноценный `.git`-каталог, но коммитов в нём **нет** (ветка `main` пуста, только untracked `package.json`).
- Остальные подкаталоги (`CityOs/admin`, `CityOs/old`, `CityOs/shared`, `modules/events`, `modules/offers`, `NorthWaterfront/admin`, `NorthWaterfront/old`, `Nuanu/admin`, `Nuanu/events`, `Nuanu/nuanu_frontend_next`, `Nuanu/shared`) содержат **`.git` — файл-указатель git submodule** (не полноценный репозиторий). Сами субмодули не инициализированы/не клонированы локально, поэтому их история коммитов недоступна.

**Найденные git-submodule ссылки (URL на GitHub):**

| Субмодуль | Путь в проекте | URL репозитория |
|-----------|----------------|-----------------|
| `CityOs/admin` | `src/shared` | `git@github.com:CityOS-Dev/frontend-shared.git` |
| `modules/events` | `shared` | `git@github.com:CityOS-Dev-Frontend-Submodules/ui-kit.git` |
| `modules/offers` | `shared` | `git@github.com:CityOS-Dev-Frontend-Submodules/ui-kit.git` |
| `Nuanu/admin` | `src/shared` | `git@github.com:CityOS-Dev/nuanu-frontend-shared.git` |
| `Nuanu/nuanu_frontend_next` | `src/modules/employees` | `git@github.com:CityOS-Dev-Frontend-Submodules/employees.git` |
| `Nuanu/nuanu_frontend_next` | `src/modules/events` | `git@github.com:CityOS-Dev-Frontend-Submodules/events.git` |
| `Nuanu/nuanu_frontend_next` | `src/modules/offers` | `git@github.com:CityOS-Dev-Frontend-Submodules/offers.git` |
| `Nuanu/nuanu_frontend_next` | `src/modules/shared` | `git@github.com:CityOS-Dev-Frontend-Submodules/ui-kit.git` |

Поэтому анализ хард скилл ниже проведён **по содержимому конфигурационных файлов (`package.json`) и структуре проектов**, а не по истории коммитов. Данные стоит верифицировать при обработке каталогов 2025, 2026 и selfProjects, где (по предварительной проверке) есть репозитории с коммитами.

---

## Дополнение по GitHub-коммитам за 2024

**Дата проверки:** 26.10.2026
**Учётная запись:** `StanislavMelnik1991`
**Метод:** поиск коммитов GitHub по автору и диапазону дат `2024-01-01..2024-12-31`, затем сверка с историей репозиториев и их конфигурацией. GitHub Search API возвращает не более 1 000 результатов, поэтому число ниже следует трактовать как **не менее 1 000 проиндексированных коммитов**, а не как окончательную статистику по всем веткам и возможным авторским e-mail.

Это снимает прежнее ограничение только локального источника: история найдена и в личных репозиториях, и в организациях. Коммиты подтверждают не только наличие зависимостей, но и практическую работу с UI, авторизацией, локализацией, API и серверной частью.

| Репозиторий | Подтверждённая активность в 2024 | Что видно по коммитам |
|---|---:|---|
| `CityOS-Dev/NorthWaterfront` | 486+ | Развитие клиентского приложения: страницы, UI, стили, локализация, FSD-структура |
| `StanislavMelnik1991/CityOs` | 342+ | Административный React-клиент, формы, дашборды, общие модули |
| `CityOS-Dev/nuanu-frontend-shared` | 36 | Библиотека UI-компонентов: таблицы, селекты, date picker, pagination, Storybook |
| `CityOS-Dev/frontend-shared` | 12 | Базовые темы, shared-компоненты, иконки и рефакторинг структуры UI |
| `StanislavMelnik1991/ura_remont_client` | 30 | Next.js-клиент: авторизация, Telegram login, Axios-слой, страницы брендов, локализация |
| `StanislavMelnik1991/ura_remont_server` | 39 | NestJS API: auth, CRUD-маршруты, логирование, Swagger и загрузка изображений |
| `WutheringWavesChampionship/Application` | 30 | Next.js-приложение: FSD, auth, пользовательские сущности, i18n и адаптивные стили |
| `WutheringWavesChampionship/server` | 11 | NestJS API: JWT-auth, модуль пользователя, персонажи/оружие, документация API |
| `StanislavMelnik1991/InnowiseGroup` | 12 | Next.js-интерфейс: календарь, навигация, обработка ошибок, оптимизация рендера |
| `StanislavMelnik1991/twitch_chat-bot` | 2 | Next.js-интерфейс и интеграция Twitch-чата через `tmi.js` |

### 10. Full-stack разработка: Next.js + NestJS
**Уровень:** уверенный
**Проекты:** ura_remont_client/server, WutheringWavesChampionship/Application/server

- Разработка клиентских приложений на Next.js 14, React 18 и TypeScript.
- Разработка REST API на NestJS 10: модули, контроллеры, сервисы и маршруты CRUD.
- Авторизация: JWT, хеширование паролей (`bcrypt`/`bcryptjs`), разграничение auth/unauthorized UI; отдельный Telegram login-flow на клиенте.
- Работа с данными через TypeORM и PostgreSQL (`pg`): пользовательские сущности, связанные доменные данные (персонажи, оружие, бренды).
- Документирование API через Swagger / OpenAPI; обновление контрактов для загрузки изображений.
- Конфигурация окружения и внешних сервисов: `@nestjs/config`, dotenv, Firebase Admin.
- Контейнеризация серверных приложений: Dockerfile и Docker Compose.

### 11. Практика продуктового frontend-развития
**Уровень:** уверенный
**Проекты:** CityOS, NorthWaterfront, Nuanu shared, WutheringWavesChampionship, InnowiseGroup

- Реализация и доработка интерфейсных сценариев: таблицы, пагинация, date picker, селекты, popup-меню, skeleton-состояния, формы и дашборды.
- Поддержка дизайн-системы и переиспользуемых UI-компонентов: темы, иконки, Storybook stories, типы и public API shared-пакетов.
- Интернационализация интерфейсов: добавление языков, переводов и локализованных подписей.
- Производительность и UX: оптимизация рендера, состояния загрузки и ошибок, управление скроллом и адаптивные стили.
- Архитектурная работа с FSD: создание базовой структуры, перенос layout-слоя в widgets, соблюдение границ слоёв.

### 12. Интеграции и серверные возможности
**Уровень:** базовый / уверенный
**Проекты:** ura_remont, WutheringWavesChampionship, twitch_chat-bot

- HTTP-клиент и единый Axios instance для работы с API.
- Загрузка изображений в API и отражение контракта в Swagger.
- Интеграция Twitch-чата с `tmi.js`.
- Серверное логирование и конфигурация production-сборки NestJS.

---

## Проекты каталога 2024

| Проект | Путь | Описание | Статус git | Ключевой стек |
|--------|------|----------|------------|---------------|
| **CityOs — admin** | `2024/CityOs/admin` | Административное приложение для управления сервисами CityOS (централизованная панель администрирования) | git submodule (ссылка на `frontend-shared`) | React 18, TypeScript 5.4, Webpack 5, i18next, Formik, Zod, chart.js, Storybook 8, Jest, ESLint, Stylelint, Husky, Sass |
| **CityOs — client** | `2024/CityOs/client` | Клиентская часть | локальный репозиторий, **коммитов нет** | — |
| **CityOs — shared / old** | `2024/CityOs/shared`, `2024/CityOs/old` | Общий и archive-код CityOS | git submodule (ссылка) | — |
| **modules / events** | `2024/modules/events` | Микро-модуль событий | git submodule (ссылка на `ui-kit`) | React 18.3, TypeScript 5.6, ts-node, Sass, Zod, Formik |
| **modules / offers** | `2024/modules/offers` | Микро-модуль офферов | git submodule (ссылка на `ui-kit`) | React, TypeScript |
| **NorthWaterfront — admin** | `2024/NorthWaterfront/admin` | Админ-панель (Vite-проект) | git submodule (ссылка) | React 18, TypeScript 5.7, Vite 6, i18next, Formik, Zod, chart.js, Storybook 8, Jest, Husky, Sass |
| **NorthWaterfront — old** | `2024/NorthWaterfront/old` | Archive-код NorthWaterfront | git submodule (ссылка) | — |
| **Nuanu — admin** | `2024/Nuanu/admin` | Админ-панель Nuanu | git submodule (ссылка на `nuanu-frontend-shared`) | — |
| **Nuanu — events / shared** | `2024/Nuanu/events`, `2024/Nuanu/shared` | Модуль событий и общий код | git submodule (ссылка) | — |
| **Nuanu — nuanu_frontend_next** | `2024/Nuanu/nuanu_frontend_next` | Фронтенд на Next.js (монорепо с workspace `shared`, 4 субмодуля модулей) | git submodule (корень) | Next.js 14.2.5, React 18, TypeScript 5, Storybook 8, MDX editor, Jest |
| **Nuanu — proxy** | `2024/Nuanu/proxy` | Бэкенд-прокси сервер | — (не репозиторий) | Node.js 18, Express, TypeScript 4.8, ts-node-dev, WebSocket, Cors, Jest |

---

## Хард скилы (выявленные по проектам 2024)

### 1. Frontend-разработка (React)
**Уровень:** уверенный  
**Проекты:** CityOs/admin, CityOs/client, NorthWaterfront/admin, Nuanu/nuanu_frontend_next, modules/events/offers

- React 18 (функциональные компоненты, хуки)
- Next.js 14 (App Router, серверный рендеринг)
- TypeScript 4.8–5.7 (строгая типизация, интерфейсы, дженерики)
- State management и формы: Formik, Zod (схемы валидации)
- Интернационализация: i18next, i18next-browser-languagedetector, i18next-http-backend
- Работа с датами: date-fns
- HTTP-запросы: axios

### 2. UI-компоненты и библиотеки
**Уровень:** уверенный  
**Проекты:** CityOs/admin, NorthWaterfront/admin, modules/events, Nuanu/nuanu_frontend_next

- Графики и дашборды: chart.js, react-chartjs-2
- Rich-текстовый редактор: react-quill, @mdxeditor/editor
- Загрузка файлов: react-dropzone
- Селекты и выпадающие списки: react-select
- Датапикеры: react-datepicker
- Плеер HLS-видео: react-hls-player
- Уведомления: react-toastify
- Пагинация / бесконечная прокрутка: react-paginate, react-infinite-scroll-component
- Утилиты: classnames, lodash, uuid, sanitize-html, use-debounce

### 3. Архитектура фронтенда
**Уровень:** уверенный  
**Проекты:** CityOs/admin, NorthWaterfront/admin

- Feature-Sliced Design (FSD) — разделение на `app`, `processes`, `pages`, `widgets`, `features`, `entities`, `shared`
- eslint-plugin-boundaries + @feature-sliced/eslint-config — архитектурный линтинг (контроль границ между слоями)
- Монорепо с workspace-пакетами (Nuanu: `shared: workspace:*`)
- Git submodules для общих модулей (`init-submodules`, `init-shared`)

### 4. Инструменты сборки и конфигурация
**Уровень:** уверенный  
**Проекты:** CityOs/admin, NorthWaterfront/admin, Nuanu/nuanu_frontend_next, Nuanu/proxy

- Webpack 5 (webpack-dev-server, html-webpack-plugin, mini-css-extract-plugin, ts-loader, fork-ts-checker-webpack-plugin)
- Vite 6 (@vitejs/plugin-react, vite build)
- ts-node / ts-node-dev / ts-jest (TypeScript в Node.js окружении)
- pnpm (pnpm-workspace, node_modules/.pnpm)

### 5. Тестирование
**Уровень:** уверенный  
**Проекты:** CityOs/admin, NorthWaterfront/admin, Nuanu/nuanu_frontend_next, Nuanu/proxy

- Jest 29 + jest-environment-jsdom
- @testing-library/react, @testing-library/dom, @testing-library/jest-dom
- jest-html-reporters (HTML-отчёты)
- mockdate, ts-jest

### 6. Качество кода и линтинг
**Уровень:** уверенный  
**Проекты:** CityOs/admin, NorthWaterfront/admin, Nuanu/proxy

- ESLint (8–9) + eslint-config-prettier + eslint-plugin-prettier
- eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-import, eslint-plugin-i18next, eslint-plugin-storybook
- Stylelint + stylelint-scss + stylelint-config-standard-scss + stylelint-prettier
- Prettier (форматирование)
- Husky (pre-commit хуки, `prepare: husky install`)
- Chromatic (визуальное тестирование Storybook)

### 7. Компонентная документация и Storybook
**Уровень:** уверенный  
**Проекты:** CityOs/admin, NorthWaterfront/admin, Nuanu/nuanu_frontend_next

- Storybook 8 (React, Webpack 5 / Vite / Next.js builder)
- storybook-addon-essentials, addon-interactions, addon-links, addon-onboarding, addon-viewport, addon-styling-webpack, addon-webpack5-compiler-swc
- storybook-addon-mock, storybook-dark-mode, storybook-addon-themes, @storybook/test, @chromatic-com/storybook

### 8. Бэкенд (Node.js)
**Уровень:** базовый / уверенный (по одному проекту)  
**Проекты:** Nuanu/proxy

- Node.js 18, Express 4
- TypeScript 4.8, ts-node-dev (режим разработки с перезагрузкой)
- WebSocket (связь в реальном времени)
- Cors, dotenv, axios, uuid

### 9. Инструменты разработки и CI-инфраструктура
**Уровень:** базовый  
**Проекты:** все проекты 2024

- Git (submodules, husky pre-commit)
- pnpm workspace
- NPM-скрипты (start, build:prod, build:dev, lint, test:unit, storybook)

---

## Предлагаемая формулировка для резюме (раздел «Навыки» / «Hard skills»)

> **Frontend:** React 18, Next.js 14, TypeScript, JavaScript ES6+  
> **Архитектура:** Feature-Sliced Design (FSD), монорепо, git submodules  
> **Сборка:** Webpack 5, Vite 6, ts-loader, babel  
> **UI-библиотеки:** chart.js, react-chartjs-2, react-quill, react-dropzone, react-select, react-datepicker, react-hls-player, react-toastify, classnames, date-fns, lodash, zod, formik, i18next  
> **Стили:** SCSS/Sass, Stylelint  
> **Тестирование:** Jest, @testing-library, jest-html-reporters  
> **Документация компонентов:** Storybook 8, Chromatic  
> **Качество кода:** ESLint, Prettier, Husky (pre-commit), eslint-plugin-boundaries  
> **Backend:** Node.js, NestJS 10, Express, REST API, TypeORM, PostgreSQL, JWT, Swagger / OpenAPI, Firebase Admin, WebSocket
> **Интеграции и инфраструктура:** Axios, Telegram Login, Twitch (`tmi.js`), Docker Compose, Git, pnpm, npm scripts

---

## План следующих шагов

1. При необходимости обработать каталоги `2025`, `2026`, `selfProjects` и дополнить единый профиль более свежими технологиями.
2. Сверить авторские e-mail в GitHub, если для резюме понадобится точная итоговая метрика коммитов: поиск GitHub ограничен 1 000 результатами.
3. Объединить навыки в единый документ `selfProjects\CV\hard_skills.md`.
4. Сформировать резюме на основе итогового документа.

---

**Файл:** `D:\Work\selfProjects\CV\hard_skills_2024.md`  
**Каталог 2024 и GitHub-активность за 2024 год проанализированы.** Локальная история отсутствует, но GitHub-коммиты подтвердили full-stack опыт, работу с UI-библиотеками, FSD, авторизацией и API.
