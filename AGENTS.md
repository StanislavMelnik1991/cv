# Repository Guidelines

## Project Structure & Module Organization

This repository maintains bilingual résumés and evidence-backed skills summaries.

- `resumes/frontend/{ru,en}/`: Russian and English frontend résumés; each language folder contains `Melnik_Stanislau_Resume.md` and `Melnik_Stanislau_Resume.pdf`.
- `resumes/ai-first/{ru,en}/`: Russian and English lead developer / full-stack / AI-first résumés, using the same Markdown and PDF filenames.
- `skills/`: consolidated `hard_skills.md`, dated analyses, and `confirmations.md` for verified clarifications and limits of experience.
- `resume/content.mjs`: PDF variant registry; `resume/content/frontend.mjs` and `resume/content/ai-first.mjs`: curated bilingual PDF text; `resume/build.mjs`: shared PDFKit layout and validation.
- `resume/fonts/`: bundled Noto Sans fonts and license; `assets/StanislauMelnik.jpg`: source photograph.
- PDFs are generated beside their Markdown sources. `resume/previews/frontend/` and `resume/previews/ai-first/` contain page images for review.
- Root `README.md`: entry point and links. Local `job-search/` and `.playwright-mcp/` contain private research, application records, and browser artifacts.

## Vacancy Monitoring & Account Access

Use **rabota.by**, **HeadHunter (hh.ru)**, and **LinkedIn** to monitor vacancies.

Account access was checked on **2026-11-03** through Playwright MCP in the **default browser context**. All three accounts opened using saved authenticated browser sessions; no password or one-time code was needed. Reuse this context for future checks; isolated contexts do not inherit these sessions.

| Platform | Verified account access | Login method |
| --- | --- | --- |
| [rabota.by](https://rabota.by/) | Станислав Мельник; [private profile](https://rabota.by/applicant/profile/me) and [settings](https://rabota.by/applicant/settings) opened. | Saved browser session. Settings confirm linked **Google** and **ВКонтакте** accounts and an existing password. |
| [HeadHunter (hh.ru)](https://hh.ru/) | Станислав Мельник; [private profile](https://hh.ru/applicant/profile/me) and [settings](https://hh.ru/applicant/settings) opened. | Saved browser session. Settings confirm linked **Google** and **ВКонтакте** accounts and an existing password. |
| [LinkedIn](https://www.linkedin.com/) | Stanislav Melnik ([profile](https://www.linkedin.com/in/stanislau-melnik/)); personalized [feed](https://www.linkedin.com/feed/) and [sign-in settings](https://www.linkedin.com/mypreferences/d/categories/sign-in-and-security) opened. | Saved browser session. Sign-in settings show an account email and password management. |

Fresh sign-in through a password or linked provider was not tested. Recheck access when monitoring vacancies, since saved sessions may expire. Keep passwords, one-time codes, cookies, and tokens out of this file and version control.

## Vacancy Application Rules

1. Before applying, read the full original vacancy, including the role requirements, cover-letter instructions, and application/contact instructions. Check any linked application instructions and accessible application-form questions before submitting. Search snippets and vacancy summaries are insufficient.
2. Tailor the application to the vacancy using verified résumé facts. Follow all stated cover-letter requirements, including language, format, length, required phrases, questions to answer, portfolio links, and requested attachments. If the vacancy requires a specific subject line or message structure, use it.
3. Apply through the method specified in the vacancy, such as its platform form, email, or an external application form. Follow rule 4 when the vacancy asks for a private message. Use the platform's standard application flow when no specific method is stated.
4. When the vacancy asks applicants to apply by private message in any messenger or platform inbox, prepare a complete application for the user to send.
   - Provide the full message ready to paste, with the wording, answers, and links requested in the vacancy.
   - Give a clickable direct chat link to the exact recipient named in the vacancy. Use the link provided or build one from the stated contact details using the service's supported format. For a Telegram `@username`, use `https://t.me/<username>`. If a direct link cannot be established, give any contact details stated in the vacancy and explain what is missing.
   - List the files to attach with exact filenames and clickable links to any available local files. Identify the variant and language of any résumé attachment. State explicitly when the message needs no attachments.
5. If another specified contact method is unavailable, prepare the complete message ready for the user to send, following the same vacancy requirements. Give the exact destination from the vacancy as a clickable link or address, plus the subject line and required attachments where applicable. State that the application has not been sent and explain which access is missing. If the destination cannot be established, report that explicitly instead of guessing it.

## Resume Variant Selection

Choose the résumé variant and language **before each application**, using the full vacancy and its instructions. Do not rely on the platform's default or last-used résumé.

| Variant | Use when | Local sources and PDFs | Existing rabota.by résumé |
| --- | --- | --- | --- |
| Frontend | The main work is React / Next.js interfaces, UI libraries, frontend architecture, and frontend delivery. | `resumes/frontend/ru/` and `resumes/frontend/en/`; Markdown and PDF together. | Russian **Senior Frontend-разработчик (React / Next.js / TypeScript)**, ID **213685095**, [open](https://rabota.by/resume/334a268dff0cbc93670039ed1f494d78447443). |
| AI-first / Full-stack | The role centers on independent product development, frontend plus backend features, engineering ownership, and the full coding-agent workflow. | `resumes/ai-first/ru/` and `resumes/ai-first/en/`; Markdown and PDF together. | Russian **Ведущий разработчик (Full-stack / AI-first)**, ID **292147733**, [open](https://rabota.by/resume/039dd9abff1169d2150039ed1f5473686d6e6f). |

- Follow an explicit user choice. Otherwise select the closest factual match to the role; a mention of AI alone does not require the AI-first version. A variant does not establish unverified Python, advertising, billing, or multi-year backend experience; consult `skills/confirmations.md`.
- Match the required language of the résumé and attachments. Both listed platform résumés are Russian; the existence of local English files does not establish an English platform version. Verify the actual language rather than inferring it from the job title.
- Immediately before submitting, verify the selected **title and résumé ID** in the form or its available data, and the exact variant/language of any PDF attachment. Send only the intended version.
- Preserve the other versions. rabota.by shares employment records through the profile; tailor a separate record and its résumé associations when different descriptions are required, rather than overwriting an entry used by another résumé. Keep actual titles and dates unchanged.
- Check existing applications across **all** résumé variants. Having an unused second résumé, or a global `alreadyApplied: false` flag, is not evidence that no application exists. Inspect the vacancy's negotiation/topic list and associated résumé IDs before sending; do not submit a duplicate just to change variants unless the user explicitly requests it.
- After submission, verify the delivered application uses the intended résumé ID and that the cover letter arrived. Record the variant, language, ID/hash, submission time, and evidence in ignored local `job-search/` records.

## Confirmed Candidate Availability

The candidate confirmed on **2026-11-03** that he is ready to start a new role **within one week of receiving an offer**.

- Russian: **«Готов приступить к работе в течение недели после получения оффера».**
- English: **“I can start within one week of receiving an offer.”**
- Use this fact directly in future applications and screening forms that ask when the candidate can start, unless he updates it. No repeated confirmation is needed.
- When offered the option **«Сразу / в течение недели»**, select it. This is a relative availability window, not an agreed calendar date.

## Current Vacancy Location Preference

On **2026-11-16**, the candidate asked to **skip roles that require relocation for now**. Apply this preference to future vacancy monitoring and applications until he updates it. Continue considering office / hybrid roles in Minsk and remote roles that can be performed from Minsk; if Belarus hiring is not stated, disclose the candidate's location and ask about eligibility. Do not treat a generic platform warning about applying to another country as an employer relocation requirement when the vacancy itself allows remote work.

## Build, Test, and Development Commands

Use Node.js 22+ and the pnpm version specified in `package.json`. Run commands from the repository root:

- `pnpm install --frozen-lockfile`: install dependencies using the committed lockfile.
- `pnpm build:pdf`: regenerate all four PDFs; see `resume/README.md` for output names and layout details.
- `node --check resume/build.mjs`, `node --check resume/content.mjs`, `node --check resume/content/frontend.mjs`, and `node --check resume/content/ai-first.mjs`: check JavaScript syntax.

There is no development server or automated test script. Before builds, check `free -m`; keep Node memory bounded with `NODE_OPTIONS="--max-old-space-size=1536" pnpm build:pdf`.

## Coding Style & Naming Conventions

Follow existing JavaScript ES modules: two-space indentation, single quotes, semicolons, and camelCase functions. No formatter or linter is configured. Use `Melnik_Stanislau_Resume.md` and `Melnik_Stanislau_Resume.pdf` inside `resumes/<variant>/<language>/`; the folder identifies the variant and language. Use `YYYY-MM-DD` for dated research folders.

Keep Russian and English facts aligned within each variant. Markdown changes require manual updates to the corresponding `resume/content/*.mjs`; PDF text is not automatically synchronized. Preserve verified dates, titles, and proficiency levels; substantiate new claims. Target-role headlines do not change historical job titles. Commercial backend work dates from 2026, and using the corporate Claude / Codex platform does not establish authorship of that platform.

## Testing Guidelines

No test framework or coverage threshold is configured. The PDF build checks expected source entries, font glyphs, and page overflow. After content or shared-layout changes, rebuild and visually inspect both pages of each affected variant and language. With Poppler installed, use `pdfinfo` to confirm two A4 pages and `pdftotext` to inspect selectable text and Cyrillic rendering. Check contacts and PDF metadata so the AI-first edition does not retain a frontend headline or subject. Validate relative links after moving files.

## Commit & Pull Request Guidelines

Recent commits use concise `docs:` subjects, such as `docs: correct bilingual resume facts after review`. Keep changes focused. PRs should explain factual or layout changes, link relevant issues, report validation, and include page previews for layout changes. Include regenerated PDFs when changing their sources.

## Security & Configuration

Keep local environment files (`.env` and `.env.*`, except non-secret `.env.example` and `.env.template`), `.config/`, `.uploads/`, `custom_files/`, `node_modules/`, and `.pnpm-store/` untracked. `job-search/` and `.playwright-mcp/` are ignored local records that can contain private correspondence and browser artifacts; keep them out of commits. Preserve unrelated working-tree changes.
