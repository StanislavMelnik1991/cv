# Stanislau Melnik

**Lead Developer · Full-stack / AI-first**

TypeScript · React / Next.js · Node.js / NestJS · Claude / Codex

Minsk, Belarus · +375 (44) 733-66-60 · stanislavmelnik@gmail.com
[GitHub: StanislavMelnik1991](https://github.com/StanislavMelnik1991)

Remote work from Minsk. I can start within one week of receiving an offer.

---

## Profile

Software developer with **4+ years of commercial experience**. At CityOS, independently owned frontend development, from architecture and implementation to deployment CI/CD and the development lifecycle. In 2026, expanded my responsibilities to backend features and integrations, developing them alongside the frontend.

Work with **Claude and Codex through the company's agent platform**: define tasks, write specifications and implementation plans, delegate implementation, review results, prepare test cases, and have agents execute tests. Combine this workflow with hands-on development and engineering verification of technical decisions.

My core stack is TypeScript, React / Next.js, NestJS, and PostgreSQL. My experience also includes building a PHP / Laravel backend module with AI assistance, extending existing systems, access control, transactional operations, and commercial LLM integrations.

---

## Work Experience

### CityOS — Frontend Developer

**April 2024 — present** · Minsk
Since 2026, also responsible for backend features and integrations.

Property management platform with an admin application, resident portals, and services. Client deployments: CityOS, North Waterfront, Nuanu, and SunBridge.

**Independent development ownership and AI agents**

- Owned almost all frontend development, with occasional help from other developers: architecture, implementation, quality checks, deployment CI/CD, and the development lifecycle.
- Expanded my work to backend features in the existing system alongside the frontend. Use the company's platform built around Claude and Codex for the full agent workflow: task → specification → plan → implementation → review → test cases and test execution.
- Document business rules and API contracts in specifications and implementation plans; maintain the backlog. Set up repository rules and constraints for AI coding tools.

**Backend, data, and reliability**

- **Built a PHP / Laravel backend module for resident and staff messaging with AI assistance**, learning a new stack for the task. Worked on its integration with the existing CityOS and North Waterfront systems: conversation models, migrations, staff and resident APIs, access control, real-time events, and notifications.
- Implemented transactional message writes, request-key idempotency, handling of concurrent state changes, and data access boundaries by company and address. Published real-time events after transaction commit.
- Covered complex scenarios with functional tests. Fixed migrated tests with incorrect URL prefixes and checked that they exercised the application's actual routes.
- Contributed to the **NestJS** API gateway and chatbot for LLM and Telegram workflows. Extracted chatbot business logic from the gateway into a separate microservice and separated user JWT authentication from service-to-service access. Worked with PostgreSQL / TypeORM, migrations, transactions, and idempotent callbacks; Jest / Supertest.

**LLM and external integrations**

- Built a commercial **OpenRouter LLM service and a Telegram adapter with Telegraf**: prompts, conversation context, chat integration, and error and timeout handling.
- Integrated applications with legacy APIs, real-time communication through Centrifugo / WebSocket, and camera / intercom services. Added SSRF protection to the HLS proxy.

**Product interfaces and delivery**

- Designed a frontend platform with **30+ shared modules**: React / TypeScript, FSD, a UI library, shared types and API contracts, git submodules, and workspace packages.
- Built the North Waterfront portal with Next.js 16 / React 19: SSR, SEO, ru/en localization, authentication, and user journeys. Developed the CityOS version based on it.
- Set up type checks, linters, Jest / Testing Library, Storybook / Chromatic, and Sentry. Created and maintain integration repositories for applications and services; use Docker Compose and GitHub Actions for development, system integration testing (SIT), and production.

### EdWin — Frontend Developer · project contract

**May 2026 — July 2026**

- Built the frontend of an AI analytics service from scratch with React 19 / TypeScript / Vite, FSD, a design system, and Storybook; implemented chat, sessions, personas, and tasks.
- Set up TanStack Query v5, API client generation from OpenAPI, Sentry monitoring, Vitest / Testing Library, and CI with type checks, linting, tests, and builds. Prepared Docker containerization.

### ComDev.group — Frontend Developer

**April 2022 — December 2023**

- Developed a React / Redux Toolkit application with forms, MUI, localization, and Mapbox. Migrated the service from iSSR to Next.js and introduced FSD.
- Integrated Self-Sovereign Identity and verifiable credentials using owlmeans.

---

## Personal Project

### LLM Integrator — full-stack LLM bot platform for Twitch

**March 2026 — present**

- Develop the backend, client, and admin application with **NestJS, PostgreSQL / TypeORM, React, and Vite**. Integrate Twitch Helix API and LLMs; build bot settings, history, model spend charts, and error logs.
- Implemented error handling, message deduplication, and LLM request cost tracking. Jest / Supertest / Testcontainers tests; Docker, Nginx, and GitHub Actions.
- Started with a Next.js prototype with Twitch OAuth and a Telegram bot; have been developing separate applications since April. Migrated the project from Prisma to TypeORM.

## Core Skills

| Area | Practices and technologies |
| --- | --- |
| Agent-based development | Claude / Claude Code, Codex, Cursor; task definition, specifications, plans, reviews, test cases, and agent-executed tests |
| Architecture and integration | Modular applications, FSD, API contracts, REST / OpenAPI, service-to-service access, legacy integration |
| Backend and data | TypeScript, Node.js / NestJS, PostgreSQL / TypeORM; PHP / Laravel / MariaDB for the chat module; migrations, transactions, idempotency |
| LLM and real-time | OpenRouter, Telegram / Telegraf, Twitch API, WebSocket / Centrifugo |
| Frontend | React / Next.js, TanStack Query, Redux Toolkit, Ant Design / MUI, HTML / CSS, Tailwind, i18next |
| Quality and delivery | Jest, Vitest, Testing Library, Supertest, Testcontainers; Docker / Compose, GitHub Actions, Sentry |

## Education and Languages

Belarusian State Technological University, Minsk — undergraduate studies; degree not completed. PixelPlex — “Node.js: Theory and Practice”, 2022.

Belarusian — native · Russian — C2 · Ukrainian — C1 · English — B1.
