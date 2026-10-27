import PDFDocument from 'pdfkit';
import { createWriteStream } from 'node:fs';
import { mkdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { resumes } from './content.mjs';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const OUT = path.join(ROOT, 'pdf');
const W = 595.28;
const H = 841.89;
const M = 42;
const CW = W - M * 2;
const BOTTOM = H - 51;
const C = {
  ink: '#182C36', body: '#2E414B', muted: '#536771',
  accent: '#087C75', rule: '#D5E2E1',
};

// Exact line layout keeps all text selectable and makes overflow a build error.
function richLines(doc, text, width, size, weight = 'Regular') {
  const lines = [];
  let line = [], length = 0, bold = false;
  function finish() {
    lines.push(line);
    line = [];
    length = 0;
  }
  for (const segment of text.split(/(\*\*|\n)/)) {
    if (segment === '**') { bold = !bold; continue; }
    if (segment === '\n') { finish(); continue; }
    const font = bold ? 'SemiBold' : weight;
    for (const word of segment.match(/\s+|[^\s]+/gu) ?? []) {
      const space = /^\s+$/u.test(word);
      if (space && !line.length) continue;
      const token = space ? ' ' : word;
      doc.font(font).fontSize(size);
      const tw = doc.widthOfString(token);
      if (!space && length + tw > width && line.length) {
        if (line.at(-1)?.text === ' ') line.pop();
        finish();
      }
      if (tw > width) throw new Error('Unbreakable word exceeds column width: ' + token);
      line.push({ text: token, font, width: tw });
      length += tw;
    }
  }
  if (line.at(-1)?.text === ' ') line.pop();
  if (line.length) finish();
  return lines;
}

function drawText(doc, text, x, y, width, options = {}) {
  const { size = 9.65, leading = 13.4, color = C.body, font = 'Regular' } = options;
  const lines = richLines(doc, text, width, size, font);
  for (let i = 0; i < lines.length; i++) {
    let dx = x;
    for (const run of lines[i]) {
      doc.font(run.font).fontSize(size).fillColor(color);
      for (const char of run.text) {
        if (!doc._font.font.hasGlyphForCodePoint(char.codePointAt(0))) {
          throw new Error('Unsupported font character: ' + char);
        }
      }
      doc
        .text(run.text, dx, y + i * leading, { lineBreak: false });
      dx += run.width;
    }
  }
  return y + lines.length * leading;
}

function rule(doc, y, x = M, width = CW, color = C.rule) {
  doc.moveTo(x, y).lineTo(x + width, y).strokeColor(color).lineWidth(0.65).stroke();
}

function section(doc, title, y) {
  y += 12;
  doc.font('SemiBold').fontSize(9).fillColor(C.accent)
    .text(title.toUpperCase(), M, y, { lineBreak: false });
  rule(doc, y + 18);
  return y + 29;
}

function bullet(doc, text, y, options = {}) {
  doc.circle(M + 2, y + 6.4, 1.45).fill(C.accent);
  return drawText(doc, text, M + 13, y, CW - 13, options) + 5;
}

function job(doc, entry, y, options = {}) {
  const { showBullets = true } = options;
  doc.font('Bold').fontSize(14).fillColor(C.ink)
    .text(entry.name, M, y, { lineBreak: false });
  doc.font('Regular').fontSize(8.8).fillColor(C.muted)
    .text(entry.date, M + 170, y + 4, { width: CW - 170, align: 'right', lineBreak: false });
  y += 21;
  y = drawText(doc, entry.role, M, y, CW, { size: 9.2, leading: 12.2, color: C.accent, font: 'SemiBold' }) + 8;
  if (showBullets) {
    for (const text of entry.bullets) y = bullet(doc, text, y);
  }
  return y;
}

function footer(doc, data, page) {
  rule(doc, H - 35);
  doc.font('Regular').fontSize(7.6).fillColor(C.muted)
    .text('STANISLAU MELNIK  /  ' + data.labels.footer, M, H - 26, { lineBreak: false });
  doc.font('SemiBold').fontSize(8).fillColor(C.accent)
    .text(page + ' / 2', W - M - 32, H - 27, { lineBreak: false });
}

function firstHeader(doc, data) {
  if (data.showPhoto) {
    // Photograph is clipped without modifying the source image.
    const photo = { x: W - M - 93, y: 37, size: 93 };
    doc.save().roundedRect(photo.x, photo.y, photo.size, photo.size, 8).clip()
      .image(path.join(ROOT, 'StanislauMelnik.jpg'), photo.x, photo.y, { width: photo.size, height: photo.size })
      .restore();
    doc.roundedRect(photo.x, photo.y, photo.size, photo.size, 8)
      .strokeColor(C.rule).lineWidth(0.7).stroke();
  }
  const headingWidth = data.showPhoto ? CW - 107 : CW;
  doc.rect(M, 36, 32, 3).fill(C.accent);
  drawText(doc, data.name, M, 48, headingWidth, { size: 25, leading: 32, font: 'Bold', color: C.ink });
  drawText(doc, 'Senior Frontend Developer', M, 87, headingWidth, { size: 12, leading: 16, color: C.accent, font: 'SemiBold' });
  drawText(doc, 'React  /  Next.js  /  TypeScript', M, 109, headingWidth, { size: 9.4, leading: 13, color: C.muted });
  const contactY = 143;
  const contacts = [
    { text: 'stanislavmelnik@gmail.com', x: M, link: 'mailto:stanislavmelnik@gmail.com' },
    { text: '+375 (44) 733-66-60', x: M + 170, link: 'tel:+375447336660' },
    { text: 'GitHub / StanislavMelnik1991', x: M + 320, link: 'https://github.com/StanislavMelnik1991' },
  ];
  for (const item of contacts) {
    doc.font('Regular').fontSize(8.8).fillColor(C.ink)
      .text(item.text, item.x, contactY, { lineBreak: false });
    doc.link(item.x, contactY, doc.widthOfString(item.text), 13, item.link);
  }
  drawText(doc, data.location + '  ·  ' + data.availability, M, 161, CW, { size: 8.6, leading: 12, color: C.muted });
  rule(doc, 184);
  return 196;
}

function secondHeader(doc, data) {
  doc.rect(M, 35, 24, 3).fill(C.accent);
  doc.font('SemiBold').fontSize(11).fillColor(C.ink)
    .text(data.name, M, 48, { lineBreak: false });
  doc.font('Regular').fontSize(8.5).fillColor(C.muted)
    .text('Senior Frontend Developer', M + 280, 50, { width: CW - 280, align: 'right', lineBreak: false });
  rule(doc, 72);
  return 80;
}

function assertFits(y, page, lang) {
  if (y > BOTTOM) throw new Error(`${lang} page ${page} overflows by ${(y - BOTTOM).toFixed(1)}pt (end ${y.toFixed(1)})`);
  console.log(`${lang.toUpperCase()} page ${page}: content ends at ${y.toFixed(1)} / ${BOTTOM.toFixed(1)}pt`);
}

async function build(lang, data) {
  const source = await readFile(path.join(ROOT, data.source), 'utf8');
  for (const expected of ['CityOS', 'EdWin', 'ComDev.group', 'LLM Integrator']) {
    if (!source.includes(expected)) throw new Error('Source MD missing expected experience: ' + expected);
  }
  const output = path.join(OUT, data.filename);
  const doc = new PDFDocument({
    size: 'A4', margin: 0, autoFirstPage: false, compress: true,
    info: {
      Title: data.name + ' — Senior Frontend Developer',
      Author: 'Stanislau Melnik',
      Subject: 'React, Next.js, TypeScript — Resume 2026',
      Keywords: 'React, Next.js, TypeScript, NestJS, FSD, PostgreSQL',
      Creator: 'Stanislau Melnik · resume/build.mjs',
    },
    lang: data.language,
    displayTitle: true,
  });
  const stream = createWriteStream(output);
  const done = new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
    doc.on('error', reject);
  });
  doc.pipe(stream);
  for (const weight of ['Regular', 'SemiBold', 'Bold']) {
    doc.registerFont(weight, path.join(ROOT, 'resume/fonts', `NotoSans-${weight}.ttf`));
  }

  doc.addPage();
  let y = firstHeader(doc, data);
  y = drawText(doc, data.summary, M, y, CW, { size: 10, leading: 14.5, color: C.ink });
  y = section(doc, data.labels.experience, y);
  y = job(doc, data.cityos, y, { showBullets: false });
  y = drawText(doc, data.cityos.intro, M, y, CW, { size: 9.2, leading: 13, color: C.muted }) + 9;
  for (const group of data.cityos.groups) {
    y = drawText(doc, group.title, M, y, CW, { size: 10.2, leading: 14, font: 'SemiBold', color: C.ink }) + 5;
    for (const text of group.bullets) y = bullet(doc, text, y);
    y += 5;
  }
  y = drawText(doc, data.cityos.closing, M, y, CW, { size: 9.1, leading: 12.8, color: C.muted });
  assertFits(y, 1, lang);
  footer(doc, data, 1);

  doc.addPage();
  y = secondHeader(doc, data);
  y = section(doc, data.labels.continued, y);
  y = job(doc, data.edwin, y) + 9;
  y = job(doc, data.comdev, y);
  y = section(doc, data.labels.projects, y);
  for (const project of data.projects) y = job(doc, project, y);
  y = section(doc, data.labels.skills, y);
  for (const [label, text] of data.skills) {
    const end = drawText(doc, text, M + 90, y, CW - 90, { size: 9.0, leading: 12.5 });
    drawText(doc, label, M, y, 85, { size: 9.0, leading: 12.5, color: C.accent, font: 'SemiBold' });
    y = end + 6;
  }
  y += 8;
  rule(doc, y);
  y += 12;
  const colWidth = 300;
  drawText(doc, data.labels.education.toUpperCase(), M, y, colWidth, { size: 8, leading: 12, color: C.accent, font: 'SemiBold' });
  drawText(doc, data.labels.languages.toUpperCase(), M + 324, y, CW - 324, { size: 8, leading: 12, color: C.accent, font: 'SemiBold' });
  y += 17;
  const eduEnd = drawText(doc, data.education, M, y, colWidth, { size: 8.5, leading: 12.0 });
  const langEnd = drawText(doc, data.languages, M + 324, y, CW - 324, { size: 8.5, leading: 12.0 });
  y = Math.max(eduEnd, langEnd);
  assertFits(y, 2, lang);
  footer(doc, data, 2);
  doc.end();
  await done;
  console.log(path.relative(ROOT, output));
}

await mkdir(OUT, { recursive: true });
for (const [lang, data] of Object.entries(resumes)) await build(lang, data);
