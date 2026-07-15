import fs from "fs";

const p = "src/data/portfolio.ts";
let t = fs.readFileSync(p, "utf8");

const clivoraModules = `    featureModules: [
      { title: "Command Center", description: "Revenue, outstanding invoices and active projects at a glance.", icon: "📊" },
      { title: "Client CRM", description: "Full client database with search, notes and contact management.", icon: "👤" },
      { title: "Invoicing", description: "Tax, discounts, and branded PDF export workflow.", icon: "📄" },
      { title: "CLIVORA Connect", description: "Private marketplace - contact hidden until mutual accept.", icon: "🔗" },
      { title: "CLIVORA AI", description: "Local business insights, follow-ups and revenue alerts.", icon: "✨" },
      { title: "File Vault", description: "Secure on-device storage for project assets.", icon: "🔒" },
    ],`;

const codcraftersModules = `    featureModules: [
      { title: "Mobile Products", description: "Flutter apps built by the CodCrafters studio.", icon: "📱" },
      { title: "Custom Software", description: "Bespoke web, mobile and cloud solutions.", icon: "⚙️" },
      { title: "Odoo ERP", description: "Business automation, accounting and inventory.", icon: "🏭" },
      { title: "AI & ML", description: "Intelligent products with modern AI integration.", icon: "🤖" },
      { title: "Case Studies", description: "Results from 185+ completed engagements.", icon: "📈" },
      { title: "Get a Quote", description: "Direct line to the team for free consultation.", icon: "💬" },
    ],`;

if (!t.includes('id: "clivora"') || t.match(/id: "clivora"[\s\S]*?featureModules/)) {
  console.log("clivora skip or exists");
} else {
  t = t.replace(
    /(id: "clivora"[\s\S]*?stats: \[[\s\S]*?\],\s*)/,
    `$1${clivoraModules}\n`
  );
}

if (t.match(/id: "clivora"[\s\S]*?featureModules/) && !t.match(/id: "codcrafters"[\s\S]*?featureModules/)) {
  t = t.replace(
    /(id: "codcrafters"[\s\S]*?stats: \[[\s\S]*?\],\s*)/,
    `$1${codcraftersModules}\n`
  );
}

// clivora - force add if missing
if (!t.match(/id: "clivora"[\s\S]*?featureModules/)) {
  t = t.replace(
    /(id: "clivora"[\s\S]*?stats: \[[^\]]*\],\s*)(\n\s*screenshots:)/,
    `$1\n${clivoraModules}\n$2`
  );
}

if (!t.match(/id: "codcrafters"[\s\S]*?featureModules/)) {
  t = t.replace(
    /(id: "codcrafters"[\s\S]*?stats: \[[^\]]*\],\s*)(\n\s*screenshots:)/,
    `$1\n${codcraftersModules}\n$2`
  );
}

fs.writeFileSync(p, t, "utf8");
console.log("done", {
  clivora: !!t.match(/id: "clivora"[\s\S]*?featureModules/),
  codcrafters: !!t.match(/id: "codcrafters"[\s\S]*?featureModules/),
});
