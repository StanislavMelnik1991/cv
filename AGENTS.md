# Repository Guidelines

## Project Structure & Module Organization

This repository maintains bilingual résumés and evidence-backed skills summaries.

- Root `Melnik_Stanislau_Resume_2026*.md`: Russian and English source résumés; `_EN` identifies English.
- `hard_skills.md`: consolidated skills; `hard_skills_YYYY.md` and `hard_skills_selfprojects.md`: supporting analyses.
- `resume/content.mjs`: curated bilingual PDF text; `resume/build.mjs`: PDFKit layout and validation.
- `resume/fonts/`: bundled Noto Sans fonts and license; `StanislauMelnik.jpg`: source photograph.
- `pdf/`: generated résumés. Local `job-search/` and `.playwright-mcp/` contain research, application records, and browser artifacts.

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
3. Apply through the method specified in the vacancy: for example, its platform form, email, Telegram, LinkedIn message, or external application form. Use the platform's standard application flow when no specific method is stated.
4. If the specified contact method is unavailable, prepare the complete message ready for the user to send, following the same vacancy requirements. Give the exact destination from the vacancy as a clickable link or address (for example, the recipient's Telegram profile), plus the subject line and required attachments where applicable. State that the application has not been sent and explain which access is missing. If the destination cannot be established, report that explicitly instead of guessing it.

## Build, Test, and Development Commands

Use Node.js 22+ and the pnpm version specified in `package.json`. Run commands from the repository root:

- `pnpm install --frozen-lockfile`: install dependencies using the committed lockfile.
- `pnpm build:pdf`: regenerate both PDFs; see `resume/README.md` for output names and layout details.
- `node --check resume/build.mjs` and `node --check resume/content.mjs`: check JavaScript syntax.

There is no development server or automated test script. Before builds, check `free -m`; keep Node memory bounded with `NODE_OPTIONS="--max-old-space-size=1536" pnpm build:pdf`.

## Coding Style & Naming Conventions

Follow existing JavaScript ES modules: two-space indentation, single quotes, semicolons, and camelCase functions. No formatter or linter is configured. Preserve existing résumé filenames and use `YYYY-MM-DD` for dated research folders.

Keep Russian and English facts aligned. Markdown changes require manual updates to `resume/content.mjs`; PDF text is not automatically synchronized. Preserve verified dates, titles, and proficiency levels; substantiate new claims.

## Testing Guidelines

No test framework or coverage threshold is configured. The PDF build checks expected source entries, font glyphs, and page overflow. After content or layout changes, rebuild and visually inspect both pages of each language. With Poppler installed, use `pdfinfo` to confirm two A4 pages and `pdftotext` to inspect selectable text and Cyrillic rendering. Check contact links manually.

## Commit & Pull Request Guidelines

Recent commits use concise `docs:` subjects, such as `docs: correct bilingual resume facts after review`. Keep changes focused. PRs should explain factual or layout changes, link relevant issues, report validation, and include page previews for layout changes. Include regenerated PDFs when changing their sources.

## Security & Configuration

Keep local environment files (`.env` and `.env.*`, except non-secret `.env.example` and `.env.template`), `.config/`, `.uploads/`, `custom_files/`, `node_modules/`, and `.pnpm-store/` untracked. `job-search/` and `.playwright-mcp/` are ignored local records that can contain private correspondence and browser artifacts; keep them out of commits. Preserve unrelated working-tree changes.
