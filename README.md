# Станислав Мельник — резюме

Две версии резюме на русском и английском: frontend и ведущий разработчик Full-stack / AI-first. В каждом PDF — две страницы A4, выделяемый текст, встроенные шрифты и активные контакты. Русские PDF используют фотографию, английские — без фотографии.

| Версия | Полный текст RU | Полный текст EN | PDF RU | PDF EN |
| --- | --- | --- | --- | --- |
| Senior Frontend | [Markdown](resumes/frontend/Melnik_Stanislau_Resume_2026.md) | [Markdown](resumes/frontend/Melnik_Stanislau_Resume_2026_EN.md) | [Скачать](pdf/frontend/Melnik_Stanislau_Resume_2026.pdf) | [Download](pdf/frontend/Melnik_Stanislau_Resume_2026_EN.pdf) |
| Ведущий разработчик · Full-stack / AI-first | [Markdown](resumes/ai-first/Melnik_Stanislau_Resume_2026_AI_First.md) | [Markdown](resumes/ai-first/Melnik_Stanislau_Resume_2026_AI_First_EN.md) | [Скачать](pdf/ai-first/Melnik_Stanislau_Resume_2026_AI_First.pdf) | [Download](pdf/ai-first/Melnik_Stanislau_Resume_2026_AI_First_EN.pdf) |

Frontend-версия раскрывает React / Next.js, сложные интерфейсы, UI-библиотеки и frontend-архитектуру. AI-first-версия раскрывает самостоятельное ведение разработки, полный цикл работы с Claude / Codex, серверные фичи, LLM-интеграции, проверки качества и поставку. Фактические должности, даты и языковые уровни согласованы; коммерческие backend-задачи в новой версии явно датированы 2026 годом.

## Хранение файлов

- `resumes/frontend/`, `resumes/ai-first/` — полные тексты каждой версии на двух языках.
- `skills/` — [сводка навыков](skills/hard_skills.md), годовые анализы и [подтверждённые уточнения](skills/confirmations.md).
- `pdf/frontend/`, `pdf/ai-first/` — готовые PDF с теми же базовыми именами, что и исходные Markdown.
- `resume/` — сборка PDF, сокращённые тексты, шрифты и превью страниц.
- `assets/` — исходная фотография.
- `job-search/`, `.playwright-mcp/` — игнорируемые локальные исследования, переписка, подтверждения откликов и браузерные артефакты.

## Сборка

Нужны Node.js 22+ и pnpm из `package.json`.

```sh
pnpm install --frozen-lockfile
NODE_OPTIONS="--max-old-space-size=1536" pnpm build:pdf
```

Команда собирает все четыре PDF. Полные Markdown и сокращённые PDF-тексты редактируются вручную: изменение одного источника не обновляет другой автоматически. [Инструкция сборки и проверки](resume/README.md).

## Выбор версии для отклика

Выбирать версию следует по фактическим задачам вакансии и требуемому языку. Перед отправкой нужно проверить выбранное резюме в форме и правильный PDF во вложении. Существующие резюме на площадках и подробные правила выбора перечислены в [AGENTS.md](AGENTS.md#resume-variant-selection).
