# Хард скилы — проекты каталога 2024

**Источник:** `D:\Work\2024`  
**Дата анализа:** 19.10.2026  
**Статус:** черновик (база для резюме, будет дополняться данными из каталогов 2025, 2026 и selfProjects)

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
> **Backend:** Node.js, Express, TypeScript, WebSocket  
> **Инструменты:** Git, pnpm, npm scripts

---

## План следующих шагов

1. Обработать каталоги `2025`, `2026`, `selfProjects` (есть git-репозитории с коммитами — `giga-monorepo`, `starup`, `llm-integrator-composition`, `twitch-bot`, `wuthering_waves` и др.).
2. Выявить дополнительные хард скилы и уточнить уровни владения на основе реальной истории коммитов.
3. Объединить все навыки в единый документ `selfProjects\CV\hard_skills.md`.
4. Сформировать резюме на основе итогового документа.

---

**Файл:** `D:\Work\selfProjects\CV\hard_skills_2024.md`  
**Каталог 2024 проанализирован.** Коммитов не найдено — навыки восстановлены по конфигам проектов. Остальные каталоги запланированы к анализу в отдельных сессиях.