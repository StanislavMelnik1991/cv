# Stanislau Melnik

**Senior Frontend Developer** · React · Next.js · TypeScript

Minsk, Belarus · +375 (44) 733-66-60 · stanislavmelnik@gmail.com · [GitHub: StanislavMelnik1991](https://github.com/StanislavMelnik1991)

Open to remote, hybrid, or on-site work; willing to relocate and travel.

---

## Professional Summary

Frontend engineer with **4+ years of professional experience** building applications with React, Next.js, and TypeScript. Designed a frontend platform from scratch with **30+ domain modules** reused across four product implementations: CityOS, North Waterfront, Nuanu, and SunBridge.

Focused on complex B2B applications and customer portals: frontend architecture, shared UI libraries, real-time features, and release reliability. Define API contracts and implementation plans with the backend team and establish automated quality checks. Also develop services and integrations with NestJS and PostgreSQL.

---

## Work Experience

### CityOS — Frontend Developer
**April 2024 — present** · Minsk

Property management platform with an admin application for staff, a resident portal, and mobile apps sharing a common backend. Implementations: CityOS, North Waterfront (Severny Bereg), Nuanu, and SunBridge.

**Modular platform and admin application** · React, TypeScript, Vite, Ant Design

- **Designed and implemented the frontend architecture from scratch.** Shared domain modules are reused across implementations and enable parallel development. Architectural linting enforces Feature-Sliced Design boundaries; modules are integrated through git submodules and workspace packages.
- **Maintain the shared UI library** used across modules and applications: components, forms, types, and API contracts. Implemented filtering, sorting, pagination, and reference-data caching, accounting for time zones and permissions.
- **Built real-time resident chats** with Centrifugo / WebSocket: session history and archives, assignments, unread counters, and permissions. Developed modules for resident requests, residents, staff, communications, and access control.
- Integrated the interface with the North Waterfront legacy API using typed clients, error handling, and Sentry monitoring. Added recovery from stale-chunk errors after deployment by retaining the last three builds and reloading the application once.
- **Established automated quality checks:** strict TypeScript, linting, Jest / Testing Library unit tests, and Storybook / Chromatic. Integrated Quill and media uploads with HTML sanitization for user-generated content.

**North Waterfront resident portal** · Next.js 16, React 19, App Router · April–August 2026

- Built the portal with SSR, SEO, and server-side ru/en localization: metadata, canonical and alternate links, sitemap, and robots directives.
- Implemented camera streaming with HLS / RTSP and go2rtc, intercom interfaces, and remote door unlocking. Added HLS proxy parameter validation to mitigate SSRF.
- Implemented authentication, news, a knowledge base, settings, and parcel lockers. Configured Docker Compose deployment for the Security section with the web application and go2rtc.

**Backend and integrations** · NestJS, TypeORM, PostgreSQL · 2026

- Contributed to the API gateway, chatbot, and notification service: proxying, DTO validation, file uploads, JWT, and service-to-service authentication.
- Worked with migrations, transactions, and idempotent callbacks; wrote integration and backend end-to-end tests with Jest / Supertest.

**Collaboration and delivery**

- Define API contracts with the Laravel backend team, write specifications and implementation plans, and maintain the backlog.
- Created and maintain a repository coordinating North Waterfront applications and services; the full stack runs locally with Docker Compose. Use GitHub Actions for dev / SIT / prod environments.
- Set up repository rules and agent instructions for Claude Code and OpenCode. Use AI coding tools alongside type checks, linting, tests, and a pull request workflow.

### EdWin — Frontend Developer · project contract
**May 2026 — July 2026**

AI analytics service with a chat interface. Built the frontend from scratch.

- Established the architecture with React 19, TypeScript, Vite, and FSD. Built a design system using Figma tokens and UI components in Storybook.
- Implemented analysis chat, sessions, personas, and tasks. Configured TanStack Query v5 for optimistic updates, cache invalidation, request cancellation, and chat recovery after transient errors.
- Added project-scoped routing, authentication, and localization. Set up typed API client generation from OpenAPI and Sentry error monitoring.
- Set up Vitest / Testing Library and CI for type checks, linting, tests, application and Storybook builds; containerized the application with Docker.

### ComDev.group — Frontend Developer
**April 2022 — December 2023**

- Developed a React / Redux Toolkit application with MUI, forms, localization, and Mapbox integration.
- Migrated the service from iSSR to Next.js and introduced Feature-Sliced Design.
- Integrated Self-Sovereign Identity and verifiable credentials using owlmeans.

---

## Personal Project

### LLM Integrator — LLM bot platform for Twitch
**March 2026 — present** · full-stack

Started with a Next.js prototype in March 2026; have been developing the platform with a separate backend, client, and admin application since April.

- **Frontend:** React 19, Vite, Ant Design, Recharts — bot settings, history, LLM spend charts, error logs, and user management.
- **Backend:** NestJS, TypeORM, PostgreSQL, Twitch Helix API — LLM responses, structured outputs, error handling, echo-response protection, and request cost tracking. Tests: Jest / Supertest / Testcontainers.
- **Infrastructure:** Docker, Nginx, GitHub Actions; a repository coordinating the server, client, admin application, and OBS extension.
- Implemented Twitch OAuth, a Telegram administration bot, and message deduplication in the prototype; migrated data access from Prisma to TypeORM.

---

## Core Skills

| Area | Technologies and practices |
|---|---|
| Frontend | TypeScript, JavaScript, React, Next.js, App Router, SSR, React Router |
| Architecture | Feature-Sliced Design, modular applications, shared UI libraries, API contracts, pnpm workspaces |
| Data and UI | TanStack Query, Redux Toolkit, Ant Design, MUI, Formik, react-hook-form, Yup |
| Styling and localization | HTML, CSS, Sass/SCSS, CSS Modules, Tailwind CSS, responsive layouts, Figma, i18next, SEO |
| Real-time and integrations | WebSocket, Centrifugo, HLS, go2rtc, REST / OpenAPI, API client generation, LLM APIs |
| Testing | Jest, Vitest, Testing Library, Storybook, Chromatic; backend integration and end-to-end tests: Supertest, Testcontainers |
| Backend | Node.js, NestJS, Express, PostgreSQL, TypeORM, JWT, OAuth |
| Delivery and monitoring | Git, Docker, Docker Compose, Nginx, GitHub Actions, Sentry, Vite, Webpack |

---

## Education

- **Belarusian State Technological University**, Minsk — undergraduate studies; degree not completed.
- **PixelPlex** — “Node.js: Theory and Practice” course (2022).

## Languages

Belarusian — native · Russian — C2 · Ukrainian — C1 · English — B1
