import { writeFileSync } from 'node:fs';
import { apps } from '../data/portfolio.ts';

const escapePdf = (value) => String(value).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

function wrap(text, max = 84) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max) {
      if (line) lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function buildPdf(path, pages) {
  const objects = [];
  const add = (body) => {
    objects.push(body);
    return objects.length;
  };

  const fontRegular = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
  const fontBold = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
  const pageRefs = [];

  for (const page of pages) {
    const commands = ['BT'];
    let y = 780;
    for (const item of page) {
      if (item.gap) {
        y -= item.gap;
        continue;
      }
      const size = item.size || 10;
      const font = item.bold ? 'F2' : 'F1';
      const leading = item.leading || Math.ceil(size * 1.35);
      const x = item.x || 52;
      for (const line of wrap(item.text, item.max || 84)) {
        commands.push(`/${font} ${size} Tf`);
        commands.push(`${x} ${y} Td (${escapePdf(line)}) Tj`);
        commands.push(`${-x} ${-y} Td`);
        y -= leading;
      }
    }
    commands.push('ET');
    const contentRef = add(`<< /Length ${commands.join('\n').length} >>\nstream\n${commands.join('\n')}\nendstream`);
    const pageRef = add(`<< /Type /Page /Parent 0 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 ${fontRegular} 0 R /F2 ${fontBold} 0 R >> >> /Contents ${contentRef} 0 R >>`);
    pageRefs.push(pageRef);
  }

  const pagesRef = add(`<< /Type /Pages /Kids [${pageRefs.map((ref) => `${ref} 0 R`).join(' ')}] /Count ${pageRefs.length} >>`);
  const catalogRef = add(`<< /Type /Catalog /Pages ${pagesRef} 0 R >>`);

  for (const ref of pageRefs) {
    objects[ref - 1] = objects[ref - 1].replace('/Parent 0 0 R', `/Parent ${pagesRef} 0 R`);
  }

  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((body, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogRef} 0 R >>\nstartxref\n${xref}\n%%EOF`;
  writeFileSync(path, pdf);
}

const header = [
  { text: 'Muhammad Muneeb', size: 24, bold: true, max: 40 },
  { text: 'Flutter Mobile Developer and UI/UX Enthusiast', size: 13, bold: true },
  { text: 'Samundri, Pakistan | muhammadmuneeb1061@gmail.com | +92 305 1621117', size: 10 },
  { text: 'Portfolio: https://muneeb.codcrafters.org | GitHub: https://github.com/UsmanGhias/Muneeb', size: 10 },
  { gap: 18 },
];

const portfolioPages = [
  [
    ...header,
    { text: 'Portfolio Showcase', size: 20, bold: true },
    { text: 'A presentation of production Flutter applications crafted for lifestyle, fitness, business productivity, and studio services. Each product focuses on polished UI, reliable local data, practical workflows, and scalable architecture.', size: 11 },
    { gap: 12 },
    { text: 'Highlights', size: 15, bold: true },
    { text: '4+ years of experience, 20+ completed projects, 15+ happy clients, and 4+ apps on the Play Store.', size: 11 },
    { text: 'Core stack: Flutter, Dart, Riverpod, Hive, Firebase, REST APIs, Material 3, Android, Git, Figma, VS Code, and Postman.', size: 11 },
  ],
  ...apps.map((app) => ([
    { text: app.name, size: 21, bold: true },
    { text: app.tagline, size: 13, bold: true },
    { text: `${app.category} | ${app.platform} | ${app.version || 'Current release'}`, size: 10 },
    { gap: 12 },
    { text: app.description, size: 11 },
    { gap: 12 },
    { text: 'Key Features', size: 14, bold: true },
    ...app.features.slice(0, 8).map((feature) => ({ text: `• ${feature}`, size: 10, max: 90 })),
    { gap: 10 },
    { text: 'Tech Stack', size: 14, bold: true },
    { text: app.techStack.join(', '), size: 10 },
    { gap: 10 },
    { text: `Product link: ${app.website}`, size: 10 },
    ...(app.playStore ? [{ text: `Google Play: ${app.playStore}`, size: 10, max: 90 }] : []),
  ])),
];

const resumePages = [[
  ...header,
  { text: 'Professional Summary', size: 15, bold: true },
  { text: 'Flutter developer with 4+ years of experience building elegant, high performance mobile applications for Android and iOS from one codebase. Experienced with production apps, offline support, clean architecture, API integration, local databases, and polished interfaces.', size: 11 },
  { gap: 12 },
  { text: 'Experience', size: 15, bold: true },
  { text: 'Flutter Developer | CodCrafters | Samundri, Pakistan | 2023 to Present', size: 11, bold: true },
  { text: 'Built Noor Ul Haya, ForgeNFit, Clivora, and CODCrafters as production Flutter apps. Implemented Riverpod state management, Hive storage, REST APIs, Firebase, offline sync, push notifications, Material 3 UI, and platform adaptive widgets.', size: 10 },
  { text: 'Junior Flutter Developer | Startup Studio | Remote | 2022 to 2023', size: 11, bold: true },
  { text: 'Built mobile UI components, fixed bugs, improved app performance, joined code reviews, and learned Firebase integration, push notifications, and local storage.', size: 10 },
  { text: 'Freelance Mobile Developer | Fiverr and Upwork | 2021 to Present', size: 11, bold: true },
  { text: 'Delivered custom Flutter applications for international clients, handled planning, design, development, deployment, and app store publishing.', size: 10 },
  { gap: 12 },
  { text: 'Education', size: 15, bold: true },
  { text: 'Bachelor of Science in Computer Science | PUCIT | 2019 to 2023', size: 11, bold: true },
  { gap: 12 },
  { text: 'Skills', size: 15, bold: true },
  { text: 'Flutter, Dart, Riverpod, Hive, Firebase, REST APIs, Android, iOS, Material 3, local notifications, offline sync, MySQL, MongoDB, Git, GitHub, Figma, VS Code, Postman.', size: 10 },
  { gap: 12 },
  { text: 'Selected Projects', size: 15, bold: true },
  ...apps.map((app) => ({ text: `${app.name}: ${app.tagline}. ${app.website}`, size: 10, max: 90 })),
]];

buildPdf('public/docs/muhammad-muneeb-portfolio-showcase.pdf', portfolioPages);
buildPdf('public/docs/muhammad-muneeb-resume.pdf', resumePages);
