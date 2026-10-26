# Хард-скилы (на основе истории коммитов 2026)

**Источник данных:** история коммитов репозиториев `2026\giga-monorepo` и `2026\starup` (локальный каталог `D:\Work`).
**Автор коммитов:** Stanislau Melnik (логин GitHub: `StanislauMelnik1991`, коммиты подписаны как `Stanislau Melnik` / `Stanislau`, email `sm@cityos.pro` и `stanislavmelnik@gmail.com`). Посторонние коммиты от других авторов не учитывались — в analysed периодах все коммиты принадлежат Станиславу.
**Период активности:** май — октябрь 2026.
**Общий объём:** 187 коммитов (185 в `starup`, 2 в `giga-monorepo`).

---

## 1. Краткий обзор проектов

| Репозиторий | Описание | Коммиты | Период |
|-------------|----------|---------|--------|
| `2026\starup` (`edwin-frontend`) | Фронтенд-часть приложения EdWin на React + TypeScript + Vite с архитектурой Feature-Sliced Design (FSD): чат анализа, сессии, персоны, задачи, роутинг, аутентификация, дизайн-система, Storybook, тестирование, CI/CD. | 185 | май — июль 2026 |
| `2026\giga-monorepo` | Монорепозиторий с git-сабмодулями (`city-monorepo`, `nw-monorepo`) и конфигурацией AI-агентов OpenCode (free-first конфигурация агентов). | 2 | август, октябрь 2026 |

---

## 2. Хард-скилы по категориям

### 2.1 Frontend-разработка (React, TypeScript, Vite)
**Уровень:** уверенный / сильный

- Разработка пользовательских интерфейсов на **React 19** с функциональными компонентами и хуками.
- **TypeScript в строгом режиме** (`tsc --noEmit`, `strict`): строгая типизация props, состояния, ответов API, событий; типобезопасность на всём жизненном цикле проекта.
- Сборка и dev-сервер на **Vite** (скорый хот-релоад, оптимизированный продакшн-билд).
- Работа с формами, состоянием компонентов, побочными эффектами (`useEffect`, `useCallback`, `useMemo`), обработкой ошибок и границ (`Error Boundary` подход через try/catch в хуках данных).
- Подтверждающие коммиты: `feat(router): integrate project-scoped router API v2`, `feat(chat): implement recovery mechanism for transient errors in analysis chat`, `refactor(chat): enhance message submission and cleanup in home workspace`.

### 2.2 Архитектура приложений (Feature-Sliced Design, FSD)
**Уровень:** уверенный

- Организация кода по слоям FSD: `app`, `pages`, `widgets`, `features`, `entities`, `shared`.
- Соблюдение направления зависимостей между слоями (нижние слои не импортируют верхние), что подтверждается коммитами рефакторинга структуры (`refactor(shared): remove shared→app imports`, `refactor(widgets): move misplaced model/ out of ui/`, `chore(fsd): enforce cross-slice boundaries and run CI on development`).
- Конфигурация инструментов относится к `app`-слою; корневые файлы только как обязательные entrypoint-обертки.
- Подтверждающие коммиты: `chore(fsd): enforce cross-slice boundaries...`, `refactor(shared): remove shared→app imports`, `refactor(widgets): move misplaced model/ out of ui/`, `feat(eslint): enforce FSD layer hierarchy`.

### 2.3 Работа с данными и серверным состоянием (TanStack Query / React Query v5)
**Уровень:** уверенный

- Интеграция `@tanstack/react-query` v5: запросы, мутации, кэширование, инвалидация кэша (`queryClient.invalidateQueries`), оптимистичные обновления (`optimisticUpdate`).
- Управление жизненным циклом запросов: отмена текущих запросов при размонтировании компонента через `AbortSignal` (`fix(chat): abort in-flight recovery requests`, `fix(api): forward React Query's AbortSignal in analysis query hooks`).
- Обработка состояний загрузки, ошибок и пустых данных на уровне UI (`TasksSection` с loading/error/empty состояниями).
- Подтверждающие коммиты: `feat(tasks-panel): useTaskTriggerSync hook with optimistic cache patching`, `fix(chat): abort in-flight recovery requests, not just the retry loop`, `fix(api): forward React Query's AbortSignal in analysis query hooks`, `refactor(chat): enhance query invalidation and processing state management`.

### 2.4 Интернационализация и локализация (i18next)
**Уровень:** уверенный

- Интеграция `i18next` / `react-i18next`: локализация интерфейса, файлы локалей, fallback-покрытие переводов.
- Добавление украинской языковой локали и интеграция с общим набором поддерживаемых локалей (`SUPPORTED_LOCALES`).
- Подтверждающие коммиты: `feat(i18n): add Ukrainian language support and update locale files`, `fix(i18n): complete role/task translation fallback coverage`, `merge main: add uk locale, integrate with shared SUPPORTED_LOCALES`.

### 2.5 Тестирование (Vitest + Testing Library)
**Уровень:** уверенный

- Юнит-тестирование React-компонентов и хуков с **Vitest** + `@testing-library/react` и `@testing-library/user-event`.
- Написание моков для хуков (`useChatComposerAttachments`, mocked hooks), стабилизация тестов (`test(chat-output-panel): stabilize mocked hook tests`).
- Покрытие кода тестами (`vitest --coverage`, `@vitest/coverage-v8`), запуск тестов в pre-push хуке и в CI.
- Подтверждающие коммиты: `test(chat-output-panel): stabilize mocked hook tests`, `test(toast): align close-button aria expectation`, `feat(chat): add mock for useChatComposerAttachments in tests`, `refactor(tests): streamline test setup and mocking for analysis chat and workspace controller`.

### 2.6 Качество кода, линтинг и CI/CD
**Уровень:** уверенный

- **ESLint 9** + `typescript-eslint` + `eslint-plugin-react-hooks` + `eslint-plugin-import`: строгий линтинг, автоисправление, импорт-резолвинг TypeScript.
- **Stylelint** + `stylelint-config-standard-scss` + `stylelint-scss`: контроль SCSS/стилей, порядок свойств.
- **Husky 9** с pre-commit (`lint && lint:styles`) и pre-push (`test:run`) хуками.
- **GitHub Actions CI** (`ci.yml`): typecheck, ESLint, Stylelint, unit-тесты, продакшн-билд Vite, сборка Storybook на `push`/`pull_request` в ветки `main` и `development`.
- Подтверждающие коммиты: `feat(eslint): enforce FSD layer hierarchy`, `chore(tooling): node engines, pre-commit + pre-push hooks, GitHub Actions CI`, `f2995c7 chore(husky): make hook scripts executable`.

### 2.7 Дизайн-система и UI-разработка (SCSS, CSS Modules, Storybook, Figma)
**Уровень:** уверенный

- Стилизация на **SCSS + CSS Modules**, дизайн-токены (цвета, типографика, отступы, радиусы, эффекты), перенесённые из Figma.
- Базовые UI-примитивы (`Text`, `Button`, `Card`, `Icon`) в слое `shared/ui`, построение интерфейса от токенов, а не от разрозненных значений.
- Компактная типографическая шкала, адаптивная вёрстка, обработка overflow, выравнивание, иконки (SVG).
- **Storybook** для изолированной разработки UI-компонентов и historias под разные размеры экранов (`build-storybook` в CI).
- Подтверждающие коммиты: `style(chat-widget): remove redundant text color styles from message cards`, `feat(typography): introduce compact UI typography scale for shell components`, `docs: resolve self-contradictions, document tokens, stack, entities gap`, `Update design system and foundational styles; restore Figma access and integrate design tokens`.

### 2.8 Роутинг и навигация (React Router DOM v7)
**Уровень:** уверенный

- Клиентский роутинг на `react-router-dom` v7, project-scoped роуты, интеграция с router API v2.
- Синхронизация фронтенда с контрактом роутер-API, обработка навигации и состояний страниц.
- Подтверждающие коммиты: `feat(router): integrate project-scoped router API v2`, `fix(router): align frontend with current router API contract`.

### 2.9 Интеграция с бэкендом и генерация API-клиента (OpenAPI)
**Уровень:** уверенный

- Генерация типизированного API-клиента из OpenAPI-спецификации через `@hey-api/openapi-ts` (`npm run api:generate`).
- Строгая типизация ответов API, извлечение данных из ответов, обработка структуры ответов.
- Работа с переменными окружения (`VITE_API_BASE_URL`, строгая валидация при старте).
- Подтверждающие коммиты: `feat(shared/api): iter-0 foundation — новые типы, API-клиенты, hooks`, `fix(config): strict env validation on boot`, `Refactor API response handling to improve data extraction`.

### 2.10 Мониторинг и отслеживание ошибок (Sentry)
**Уровень:** базовый / средний

- Интеграция `@sentry/react` v10: отслеживание ошибок на фронтенде, Sentry breadcrumbs для отладки потоков анализа.
- Подтверждающий коммит: `feat(iter-5): terminal banner, confirm dialog, history, parseRetryAfter, Sentry breadcrumbs, i18n cleanup`.

### 2.11 Аутентификация, безопасность и сессии
**Уровень:** уверенный

- Поток аутентификации: страницы входа/регистрации, управление сессией, email-верификация.
- Защита сессий (`fix(auth): harden session guard and production config`), отмена операций после размонтирования компонента (no post-unmount writes).
- Санитизация пользовательских данных (URL персоны как CSS background), защита от race conditions при загрузке файлов и топиков.
- Подтверждающие коммиты: `fix(auth): harden session guard and production config`, `fix(chat): don't attach analysis recovery to a wrong session`, `fix(persona): sanitize persona image URL used as CSS background`, `fix(api): return uploaded file from the store response (no racy re-list)`.

### 2.12 DevOps и инфраструктура (Docker, Node.js, npm)
**Уровень:** базовый / средний

- Написание `Dockerfile` и `.dockerignore` с поддержкой переменных окружения, `docker-compose.yml` для контейнеризации приложения.
- Требуемое окружение: Node.js ≥ 22.13, npm ≥ 10 (закреплено в `engines` и `.nvmrc`).
- Подтверждающие коммиты: `feat(docker): add Dockerfile and .dockerignore for containerization`, `feat(docker): enhance Dockerfile with environment variable support`, `refactor(docker): update container configuration in docker-compose.yml`.

### 2.13 AI-агенты и автоматизация разработки (OpenCode)
**Уровень:** базовый / средний

- Настройка конфигурации AI-агентов OpenCode (free-first конфигурация агентов) в репозитории `giga-monorepo`.
- Подтверждающий коммит: `feat: add free-first OpenCode agent configuration` (2026-10-16).

### 2.14 Git, монорепозитории и процессы разработки
**Уровень:** уверенный

- Работа с git-сабмодулями (`city-monorepo`, `nw-monorepo`) в монорепозитории.
- Feature-ветки, Pull Requests ( merge PR #11–#45), squash/merge в основные ветки (`main`, `development`).
- Коммит-сообщения по conventional commits (`feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `test` с scoping, например `feat(chat)`, `fix(api)`).
- Документирование архитектурных решений, технических спецификаций (Edwin service UI TZ v1.4 → v1.7), аудит покрытия сервер-фронтенд.
- Подтверждающие коммиты: `Add city-monorepo and nw-monorepo submodules`, `docs(audit): server-to-frontend coverage audit (2026-05-15)`, `docs(plans): add backend relay realignment 6-iteration plan`.

---

## 3. Стек технологий (таблица для резюме)

| Категория | Инструменты / технологии |
|-----------|--------------------------|
| Языки | TypeScript (строгий режим), JavaScript (ESM), SCSS |
| Фреймворк / библиотека UI | React 19, React DOM, React Router DOM v7 |
| Сборка / dev-сервер | Vite, npm (workspaces/engines) |
| Архитектура | Feature-Sliced Design (FSD) |
| Серверное состояние | TanStack Query / React Query v5 |
| i18n | i18next, react-i18next |
| Тестирование | Vitest, @testing-library/react, @testing-library/user-event, jsdom |
| Линтинг / статический анализ | ESLint 9, typescript-eslint, Stylelint, stylelint-scss |
| Pre-commit / pre-push | Husky 9 |
| CI/CD | GitHub Actions (typecheck, lint, stylelint, tests, vite build, storybook build) |
| Мониторинг ошибок | Sentry React SDK v10 |
| Документирование UI | Storybook 10 |
| Генерация API-клиента | @hey-api/openapi-ts (OpenAPI) |
| Контейнеризация | Docker, Dockerfile, docker-compose |
| Дизайн | Figma, дизайн-токены (цвета, типографика, отступы, радиусы, эффекты) |
| AI / автоматизация | OpenCode (конфигурация агентов) |
| Версии / процессы | Git, git submodules, Conventional Commits, PR workflow |

---

## 4. Ключевые области ответственности (для формулировок в резюме)

- Разработка и поддержка frontend-части корпоративного приложения (анализ, чат, сессии, персоны, задачи) на React 19 + TypeScript + Vite по архитектуре FSD.
- Внедрение и поддержка серверного состояния через TanStack Query v5 с отменой запросов, оптимистичными обновлениями и обработкой состояний загрузки/ошибок.
- Локализация интерфейса (i18next), включая добавление украинского языка и fallback-переводов.
- Настройка и поддержка системы качества кода: ESLint, Stylelint, TypeScript strict, Husky хуки, GitHub Actions CI.
- Написание юнит-тестов (Vitest + Testing Library) и поддержка покрытия кода.
- Разработка UI по дизайн-токенам из Figma, Storybook-компоненты, адаптивная вёрстка на SCSS/CSS Modules.
- Интеграция с бэкендом через типизированный OpenAPI-клиент, аутентификация и управление сессиями.
- Контейнеризация приложения (Docker, docker-compose).

---

## 5. Статистика коммитов (справочно)

- **Всего коммитов Станислава:** 187 (100 % analysed истории).
- **По репозиториям:** `starup` — 185, `giga-monorepo` — 2.
- **По типам (starup):** `feat` — 41, `fix` — 30, `refactor` — 12, `style` — 7, `chore` — 7, `docs` — 4, `test` — 3.
- **По месяцам (starup):** май 2026 — 101, июнь 2026 — 5, июль 2026 — 79.
- **По месяцам (giga-monorepo):** август 2026 — 1, октябрь 2026 — 1.

---

*Документ автоматически сформирован на основе истории коммитов каталогов `2026\giga-monorepo` и `2026\starup`. Предназначен для последующего оформления резюме.*
