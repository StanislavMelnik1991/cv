# PDF-резюме

Четыре PDF: frontend и Full-stack / AI-first, каждый на русском и английском, по две страницы A4. Встроены Noto Sans, активные ссылки на email, телефон и GitHub; текст можно выделять и извлекать. Русские версии — с фотографией, английские — без фотографии.

## Сборка

Из корня репозитория, Node.js 22+ и pnpm из package.json:

```sh
pnpm install --frozen-lockfile
NODE_OPTIONS="--max-old-space-size=1536" pnpm build:pdf
```

| Версия | Русский PDF | Английский PDF |
| --- | --- | --- |
| Frontend | [Melnik_Stanislau_Resume_2026.pdf](../pdf/frontend/Melnik_Stanislau_Resume_2026.pdf) | [Melnik_Stanislau_Resume_2026_EN.pdf](../pdf/frontend/Melnik_Stanislau_Resume_2026_EN.pdf) |
| AI-first | [Melnik_Stanislau_Resume_2026_AI_First.pdf](../pdf/ai-first/Melnik_Stanislau_Resume_2026_AI_First.pdf) | [Melnik_Stanislau_Resume_2026_AI_First_EN.pdf](../pdf/ai-first/Melnik_Stanislau_Resume_2026_AI_First_EN.pdf) |

Сборка выполняется последовательно, не использует браузер, внешние сервисы или загрузку шрифтов из сети. Зависимости закреплены в pnpm-lock.yaml. Шрифты Noto Sans Regular / SemiBold / Bold взяты из [notofonts/noto-fonts](https://github.com/notofonts/noto-fonts/tree/main/hinted/ttf/NotoSans); SIL Open Font License находится в [fonts/LICENSE.txt](fonts/LICENSE.txt).

## Источники и оформление

- [content.mjs](content.mjs) — явный реестр четырёх вариантов с путями исходников и PDF.
- [content/frontend.mjs](content/frontend.mjs) — сокращённые тексты frontend-версии. Полные тексты — в [resumes/frontend](../resumes/frontend/).
- [content/ai-first.mjs](content/ai-first.mjs) — сокращённые тексты новой версии. Полные тексты — в [resumes/ai-first](../resumes/ai-first/).
- [build.mjs](build.mjs) — общий макет, типографика, переносы, ссылки, фотография и PDF-метаданные. Должность и стек в заголовках, тема, ключевые слова и имя выходного файла задаются выбранной версией.
- [assets/StanislauMelnik.jpg](../assets/StanislauMelnik.jpg) — исходная фотография без изменений.
- [skills/hard_skills.md](../skills/hard_skills.md) и [skills/confirmations.md](../skills/confirmations.md) — сводка навыков, подтверждения и ограничения опыта.

Markdown и PDF-тексты редактируются вручную: автоматической синхронизации нет. После изменения фактов обновляйте соответствующие файлы обоих языков и пересобирайте PDF. PDF — краткая редакция полного Markdown, поэтому некоторые детали опущены для двухстраничного формата.

Frontend-версия сохраняет позиционирование Senior Frontend Developer и раскрывает самостоятельное ведение frontend CityOS и North Waterfront: архитектуру, реализацию, общие модули, проверки качества и CI/CD для деплоя. Claude / Codex и Laravel-кейс описаны кратко. В AI-first-версии вперёд вынесены самостоятельное ведение разработки, корпоративная платформа Claude / Codex, полный агентный цикл, серверный модуль чатов на PHP / Laravel и интеграции. Коммерческий backend в обеих версиях явно датирован 2026 годом. Должность CityOS остаётся Frontend Developer; шапки обозначают целевые роли.

Сохраняются все работодатели и даты. EdWin — проектный контракт; LLM Integrator и мартовский Twitch-прототип — этапы одного личного проекта. Не добавляются выдуманные метрики ускорения, авторство корпоративной агентной платформы, титул CTO в прежней работе, практический Python / ad-tech / биллинг или уровень английского выше B1. Общие модули и порталы не представляются независимыми разработками с нуля для каждого внедрения. Для поиска и откликов используйте текущие ограничения места работы из [AGENTS.md](../AGENTS.md): frontend-версия допускает удалёнку из Минска и офис / гибрид в Минске, AI-first — удалёнку из Минска.

## Проверка и превью

Сборка проверяет наличие ожидаемых мест работы в Markdown, поддержку символов шрифтом и выход текста за отведённую область. Проверку проходит каждая страница каждого PDF.

После изменений проверьте обе страницы каждого затронутого варианта. При изменении общего макета проверьте все четыре PDF. При наличии Poppler:

```sh
pdfinfo pdf/ai-first/Melnik_Stanislau_Resume_2026_AI_First.pdf
pdftotext pdf/ai-first/Melnik_Stanislau_Resume_2026_AI_First.pdf -
pdftoppm -scale-to 1200 -png pdf/frontend/Melnik_Stanislau_Resume_2026.pdf resume/previews/frontend/ru
pdftoppm -scale-to 1200 -png pdf/frontend/Melnik_Stanislau_Resume_2026_EN.pdf resume/previews/frontend/en
pdftoppm -scale-to 1200 -png pdf/ai-first/Melnik_Stanislau_Resume_2026_AI_First.pdf resume/previews/ai-first/ru
pdftoppm -scale-to 1200 -png pdf/ai-first/Melnik_Stanislau_Resume_2026_AI_First_EN.pdf resume/previews/ai-first/en
```

Проверьте две страницы A4, читаемость кириллицы, выделяемый текст, ссылки контактов и метаданные.

- Frontend: [RU 1](previews/frontend/ru-1.png), [RU 2](previews/frontend/ru-2.png), [EN 1](previews/frontend/en-1.png), [EN 2](previews/frontend/en-2.png).
- AI-first: [RU 1](previews/ai-first/ru-1.png), [RU 2](previews/ai-first/ru-2.png), [EN 1](previews/ai-first/en-1.png), [EN 2](previews/ai-first/en-2.png).
