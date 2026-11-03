# Repository Guidelines

## Project Structure & Module Organization

This repository maintains bilingual résumés and evidence-backed skills summaries.

- Root `Melnik_Stanislau_Resume_2026*.md`: Russian and English source résumés; `_EN` identifies English.
- `hard_skills.md`: consolidated skills; `hard_skills_YYYY.md` and `hard_skills_selfprojects.md`: supporting analyses.
- `resume/content.mjs`: curated bilingual PDF text; `resume/build.mjs`: PDFKit layout and validation.
- `resume/fonts/`: bundled Noto Sans fonts and license; `StanislauMelnik.jpg`: source photograph.
- `pdf/`: generated résumés. Local `job-search/` and `.playwright-mcp/` contain research, application records, and browser artifacts.

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

Keep `.env`, `.config/`, `.uploads/`, and `node_modules/` untracked. Review job-search records and browser artifacts for credentials and private correspondence before staging. Preserve unrelated working-tree changes.
