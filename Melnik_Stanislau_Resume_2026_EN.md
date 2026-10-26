# Stanislau Melnik

**Senior Frontend Developer** · React · Next.js · TypeScript

Minsk, Belarus · +375 (44) 733-66-60 · stanislavmelnik@gmail.com · [GitHub: StanislavMelnik1991](https://github.com/StanislavMelnik1991)

Open to remote, hybrid, or on-site work; willing to relocate and travel.

---

## About

Frontend developer with **4+ years of commercial experience** building software products. Focused on complex B2B admin applications and customer portals with **React / Next.js + TypeScript**, including modular architecture, real-time features, video surveillance, SEO, and internationalization.

My key strength is **designing scalable frontend architecture**. I designed the modular CityOS platform from scratch using **Feature-Sliced Design** and independent modules in separate repositories; it supports products for four clients. I maintain the shared UI library, establish quality checks and CI/CD, and define API contracts with the backend team. I also develop backend features and integrations with **NestJS, TypeORM, and PostgreSQL** at CityOS and in personal projects. I use Claude Code and OpenCode, with project rules and agent instructions.

---

## Work Experience

### LLC "SITIOS" (CityOS) — Frontend Developer
**April 2024 — present** · Minsk

CityOS is a platform for managing residential and commercial real estate: a web admin panel for staff, a resident portal, and mobile apps sharing a common backend. The platform is deployed for multiple clients: **CityOS**, **North Waterfront (Severny Bereg)**, **Nuanu**, **SunBridge**.

**Platform admin panel** (React 18, TypeScript, Vite, Ant Design, FSD)

- **Frontend platform architecture.** Designed and implemented a modular architecture from scratch: each client application (CityOS, North Waterfront, SunBridge) is assembled from **30+ independent domain modules**. Each module has a separate repository and review process, integrated through **git submodules and workspace packages**. Feature-Sliced Design defines the layers and boundaries, enforced by `eslint-plugin-boundaries`. Modules are reused across client products and support parallel development by the team.
- Developed and maintain key modules:
  - **real-time chats with residents** (**Centrifugo / WebSocket**): sessions and their archive, filtered history, assignee management, unread counters, chat settings;
  - **resident requests**: automatic assignee routing, filters, history, comments, permission checks;
  - **residents, staff, partners**: profiles, activity log, partner moderation and analytics;
  - **communications**: news, events, notifications, maintenance windows;
  - **security**: access control (ACS), video surveillance, intercoms;
  - **parcel lockers, parking, media, organizations, subscriptions**;
  - **roles and permissions**: role editor, restrictions by employee type.
- Maintain the shared **UI library** (shared / ui-kit) used across all modules and client builds: components, forms, types, and shared API contracts.
- Implemented filtering, sorting, pagination, context-based caching of organization reference data, and date and IP address validation; handled time zones and permissions in forms.
- Integrated the **Quill** rich-text editor, image and video uploads, and HTML sanitization for user-generated content.
- Integrated the new interface with the North Waterfront **legacy API**: typed clients, 422/503 error handling, error reporting to **Sentry**.
- Improved release reliability: the image keeps the last three builds, and when a chunk disappears from the server the app automatically reloads once (solving stale-chunk issues after deploys).
- Code quality: strict TypeScript, ESLint + Stylelint + Prettier, unit tests with **Jest + Testing Library**, **Storybook + Chromatic**, Husky pre-push (tsc, linters, tests).

**North Waterfront resident portal** (Next.js 16, React 19, App Router, Ant Design) — April–August 2026

- Built the portal following FSD: SSR, SEO (`generateMetadata`, canonical and alternate links, `sitemap`, `robots`), ru/en localization via URL segment with server-side rendering of translations.
- Built the **Security** section: camera viewing (**HLS / RTSP via go2rtc**, `hls.js`), intercom and access-point pages with remote door opening. Added HLS proxy parameter validation to mitigate **SSRF**, including rejection of `%2e`/`%2f`.
- Implemented parcel lockers (courier delivery confirmation), news, knowledge base, settings, and authentication.
- Configured deployment of the "Security" section via **Docker Compose** (web + go2rtc) with resource limits and parameters from CI.

**Backend services and integrations** (NestJS, TypeORM, PostgreSQL) — 2026

- Contributed to the API gateway, chatbot, and notification service: request proxying, DTO validation, file uploads, and asynchronous callbacks.
- Implemented separation of user **JWT authentication** and service-to-service access using guards and a service secret, startup configuration validation, and proxy route protection.
- Worked on migrations, transactions, and idempotent handling of repeated callbacks; wrote integration and end-to-end tests with **Jest / Supertest**.

**Infrastructure & processes**

- Created and maintain the North Waterfront **composition repository**, bringing together the admin panel, portal, backend, monitoring, and two Flutter apps through git submodules. The full stack runs locally via **Docker Compose**.
- Design API contracts with the backend team (Laravel): write specifications and implementation plans (e.g., for chats), maintain the backlog.
- Introduced AI-assisted development: agent instructions (`CLAUDE.md` / `AGENTS.md`), repository rules, OpenCode agent configurations.
- Work with feature branches and pull requests, Conventional Commits, dev / SIT / prod environments via GitHub Actions.

**Stack:** React 18/19, Next.js 16, TypeScript, Vite, Ant Design, FSD, i18next, Centrifugo, HLS.js, NestJS, TypeORM, PostgreSQL, Sentry, Jest, Supertest, Testing Library, Storybook, Chromatic, Docker, GitHub Actions, pnpm.

### Contract work — Frontend Developer, EdWin
**May 2026 — July 2026**

EdWin is an AI analytics service with a chat interface. Developed the frontend from scratch.

- Established the architecture: **React 19 + TypeScript (strict) + Vite**, FSD, a token-based design system from **Figma** (SCSS + CSS Modules), UI primitives in Storybook.
- Server state with **TanStack Query v5**: optimistic updates, cache invalidation, request cancellation via `AbortSignal`, chat recovery after transient errors.
- Typed API client generated from OpenAPI (`@hey-api/openapi-ts`), environment validated at startup, errors tracked in Sentry.
- Implemented the analysis chat, sessions, personas, task panel, project-scoped routing (React Router v7), authentication, and localization (i18next, including Ukrainian).
- Set up quality checks: **Vitest + Testing Library**, ESLint 9, Stylelint, Husky, **GitHub Actions** (typecheck, linters, tests, app and Storybook builds), Docker.

### ComDev.group — Frontend Developer
**April 2022 — December 2023** (1 year 9 months)

- Developed a client application with **React + Redux Toolkit** (MUI, Formik / Yup, react-hook-form, i18next, Mapbox).
- Migrated the service from **iSSR (`@issr/core`) to Next.js**.
- Integrated **SSI** (Self-Sovereign Identity, verifiable credentials) based on the **owlmeans** library.
- Introduced **Feature-Sliced Design** methodology into the project.

---

## Personal Projects

### LLM Integrator — an LLM bot platform for Twitch
**April 2026 — present** · full-stack

- **Backend:** NestJS 11, TypeORM, PostgreSQL. **Twitch Helix API** integration; an LLM service with reliability settings, structured responses, and echo-response protection; an error monitoring module; LLM request cost tracking. Tests: Jest, Supertest, Testcontainers.
- **Client and admin panel:** React 19, Vite, Ant Design, Recharts — bot settings, history and LLM spend charts, error log with attempt details, user management.
- **Infrastructure:** a composition repository with submodules (server, client, admin, OBS extension), Docker, Nginx (SPA fallback), CI/CD on GitHub Actions.

### LLM-powered Twitch bot (LLM Integrator prototype)
**March 2026** · Next.js 16, React 19, TypeORM, PostgreSQL, tmi.js, Telegraf, Docker

LLM responses in Twitch chat, Twitch OAuth, a Telegram bot for administration, message deduplication, reply threads. Migrated the project from Prisma to TypeORM.

### Wuthering Waves Championship — tournament website
**October 2024** · Next.js 14, React 18, FSD, SCSS

JWT authentication and Telegram login, personal account, character and weapon catalog, localization.

---

## Skills

| Category | Technologies |
|---|---|
| Languages & styling | TypeScript (strict), JavaScript (ES2022+), HTML5, CSS, Sass/SCSS, responsive layouts |
| Frontend | React 17–19, Next.js 13–16 (App Router, SSR), React Router v7, Redux Toolkit, TanStack Query v5 |
| Architecture | Feature-Sliced Design, modular applications, shared UI/API, separate repositories with git submodules, pnpm workspaces |
| UI | Ant Design, MUI, Storybook, Chromatic, CSS Modules, Tailwind CSS, design tokens, Figma, Quill |
| Forms & validation | Formik, react-hook-form, Zod, Yup |
| Real-time & media | Centrifugo, WebSocket, HLS (hls.js), go2rtc |
| Quality | Jest, Vitest, Testing Library, Supertest, Testcontainers, ESLint (boundaries, i18next), Stylelint, Prettier, Husky |
| i18n & SEO | i18next, server-side localization (Next.js), metadata, sitemap |
| Backend | Node.js, NestJS, Express, REST API, API Gateway, DTO validation |
| Databases | PostgreSQL, TypeORM, migrations, transactions, idempotent processing; Prisma-to-TypeORM migration |
| Authentication & authorization | JWT, bcrypt, OAuth, Telegram Login, roles and guards, service-to-service authentication |
| DevOps | Docker, Docker Compose, Nginx, GitHub Actions, Sentry, Vite, Webpack |
| Integrations | Swagger/OpenAPI, API client generation, Axios, Twitch API, Telegram Bot API (Telegraf), LLM API / OpenRouter |
| Tools | Git, Conventional Commits, Claude Code, OpenCode |

---

## Education

- **Belarusian State Technological University**, Minsk — incomplete higher education.
- **PixelPlex** — "Node.js: Theory and Practice" course (2022).

## Languages

Belarusian — native · Russian — C2 · Ukrainian — C1 · English — B1

## References

Available on request: backend developer at ComDev.group, author of the owlmeans library.
