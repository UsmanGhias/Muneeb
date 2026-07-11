import fs from "fs";
import path from "path";

const root = path.resolve(".");

const sites = [
  { id: "noor-ul-haya", url: "https://noor-ul-haya.codcrafters.org/" },
  { id: "forgenfit", url: "https://forgenfit.codcrafters.org/" },
  { id: "clivora", url: "https://clivora.codcrafters.org/" },
  { id: "codcrafters", url: "https://codcrafters.org/" },
];

function extractImages(html, baseUrl) {
  const found = new Set();
  const patterns = [
    /(?:src|href)=["']([^"']+\.(?:png|jpg|jpeg|webp|svg)(?:\?[^"']*)?)["']/gi,
    /url\(["']?([^"')]+\.(?:png|jpg|jpeg|webp|svg)(?:\?[^"')]*)?)["']?\)/gi,
    /\/_next\/image\?url=([^&"']+)/gi,
  ];

  for (const re of patterns) {
    for (const m of html.matchAll(re)) {
      let u = decodeURIComponent(m[1]);
      if (u.startsWith("//")) u = "https:" + u;
      else if (u.startsWith("/")) u = new URL(u, baseUrl).href;
      found.add(u);
    }
  }

  return [...found];
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  return buf.length;
}

function fixUtf16(filePath) {
  const buf = fs.readFileSync(filePath);
  if (buf[0] === 0xff && buf[1] === 0xfe) {
    const text = buf.toString("utf16le");
    fs.writeFileSync(filePath, text, "utf8");
    return true;
  }
  return false;
}

// Fix encoding in src
for (const dir of ["src"]) {
  const walk = (d) => {
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, ent.name);
      if (ent.isDirectory()) walk(p);
      else if (/\.(ts|tsx|css)$/.test(ent.name)) {
        if (fixUtf16(p)) console.log("Fixed encoding:", p);
      }
    }
  };
  walk(dir);
}

for (const site of sites) {
  console.log("\n===", site.id, "===");
  const res = await fetch(site.url);
  const html = await res.text();
  const imgs = extractImages(html, site.url);
  const filtered = imgs.filter(
    (u) =>
      /screen|mockup|feature|phone|app|dashboard|hero|preview|gallery|showcase/i.test(u) ||
      (site.id === "noor-ul-haya" && /noor|haya|prayer/i.test(u)) ||
      (site.id === "forgenfit" && /forgen|fit|workout/i.test(u)) ||
      (site.id === "clivora" && /clivora|connect/i.test(u))
  );
  console.log("All images:", imgs.length);
  imgs.slice(0, 40).forEach((u) => console.log(" ", u));
  console.log("Filtered:", filtered.length);
  filtered.forEach((u) => console.log(" *", u));
}

// Try known asset paths
const candidates = [
  ["noor-ul-haya", "https://noor-ul-haya.codcrafters.org/og-image.png"],
  ["noor-ul-haya", "https://noor-ul-haya.codcrafters.org/og.png"],
  ["noor-ul-haya", "https://noor-ul-haya.codcrafters.org/screenshots/1.png"],
  ["noor-ul-haya", "https://noor-ul-haya.codcrafters.org/screenshots/prayer.png"],
  ["forgenfit", "https://forgenfit.codcrafters.org/screenshots/1.png"],
  ["forgenfit", "https://forgenfit.codcrafters.org/screenshots/home.png"],
  ["forgenfit", "https://forgenfit.codcrafters.org/og.png"],
  ["clivora", "https://clivora.codcrafters.org/screenshots/1.png"],
  ["clivora", "https://clivora.codcrafters.org/screenshots/dashboard.png"],
  ["codcrafters", "https://codcrafters.org/og-image.png"],
];

console.log("\n=== Probing candidate URLs ===");
for (const [app, url] of candidates) {
  try {
    const head = await fetch(url, { method: "HEAD" });
    console.log(head.ok ? "OK" : head.status, url);
  } catch (e) {
    console.log("ERR", url);
  }
}
