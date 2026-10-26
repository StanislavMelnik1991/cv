# PDF-резюме

Две версии по две страницы A4, с фотографией, встроенными шрифтами Noto Sans и активными ссылками на email, телефон и GitHub. Текст остаётся текстом: его можно выделять, искать и извлекать из PDF.

## Сборка

Нужны Node.js 22+ и pnpm:

```sh
pnpm install --frozen-lockfile
pnpm build:pdf
```

Готовые файлы:

- `pdf/Melnik_Stanislau_Resume_2026.pdf` — русский.
- `pdf/Melnik_Stanislau_Resume_2026_EN.pdf` — английский.

Сборка не использует браузер, внешние сервисы или загрузку шрифтов из сети. Зависимости закреплены в `pnpm-lock.yaml`; шрифты и их лицензия находятся в `fonts/`.

Noto Sans Regular / SemiBold / Bold взяты из [notofonts/noto-fonts](https://github.com/notofonts/noto-fonts/tree/main/hinted/ttf/NotoSans), лицензия SIL Open Font License 1.1 включена в репозиторий.

## Содержание и оформление

Источники фактов — `Melnik_Stanislau_Resume_2026.md`, `Melnik_Stanislau_Resume_2026_EN.md` и итоговый `hard_skills.md` в корне репозитория. Для PDF текст сокращён: близкие пункты объединены, длинные списки доменных модулей и повторяющиеся технологии сведены к основным. Сохранены все работодатели и личные проекты; рекомендации и готовность к командировкам остаются в полных Markdown-версиях.

- `content.mjs` — сокращённая редакция на двух языках. При изменении исходных MD нужно обновить соответствующие пункты здесь; автоматической синхронизации текста нет.
- `build.mjs` — макет, типографика, переносы, ссылки, фотография и метаданные PDF. Сборка завершается ошибкой, если содержимое выходит за отведённую область страницы.
- `../StanislauMelnik.jpg` — исходная фотография; используется без изменения файла.

После редактирования пересоберите PDF и проверьте обе страницы каждой версии визуально. При наличии Poppler:

```sh
pdfinfo pdf/Melnik_Stanislau_Resume_2026.pdf
pdftoppm -scale-to 1400 -png pdf/Melnik_Stanislau_Resume_2026.pdf /tmp/resume-ru
pdftotext pdf/Melnik_Stanislau_Resume_2026.pdf -
```
