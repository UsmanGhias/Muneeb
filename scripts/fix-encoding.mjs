import fs from "fs";
import path from "path";

function isUtf16Le(buf) {
  if (buf.length < 4) return false;
  if (buf[0] === 0xff && buf[1] === 0xfe) return true;
  let nulls = 0;
  const sample = Math.min(buf.length, 200);
  for (let i = 1; i < sample; i += 2) if (buf[i] === 0) nulls++;
  return nulls > sample / 4;
}

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (/\.(ts|tsx|css|mjs|json)$/.test(ent.name) && !p.includes("node_modules")) {
      const buf = fs.readFileSync(p);
      if (isUtf16Le(buf)) {
        let text = buf.toString(buf[0] === 0xff ? "utf16le" : "utf16le");
        if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);
        fs.writeFileSync(p, text, "utf8");
        console.log("fixed", p);
      }
    }
  }
}

walk("src");
