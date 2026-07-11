import fs from "fs";
const p = "src/components/Expertise.tsx";
let t = fs.readFileSync(p, "utf8");
t = t.replace(/\s*SiVscode,\n/, "\n");
t = t.replace(/\s*"VS Code": SiVscode,\n/, "\n");
fs.writeFileSync(p, t, "utf8");
console.log("fixed");
