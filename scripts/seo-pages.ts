// Post-build: writes a static HTML copy per program route with its own title/description/canonical,
// plus sitemap.xml and robots.txt, so crawlers on static hosting see per-page metadata.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { programs } from "../src/data/programs";

const SITE = "https://yrelo.com";
const base = readFileSync("dist/index.html", "utf8");
const attr = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const withMeta = (title: string, desc: string, url: string) =>
  base
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${attr(title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${attr(desc)}" />`)
    .replace(/<meta property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${attr(title)}" />`)
    .replace(/<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${attr(desc)}" />`)
    .replace("</head>", `  <link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />\n  </head>`);

writeFileSync("dist/index.html", withMeta(
  "Yrelo — иммиграционный центр: ВНЖ, визы талантов, гражданство",
  base.match(/name="description"\s+content="([^"]*)"/)?.[1] ?? "",
  `${SITE}/`,
));

for (const p of programs) {
  const dir = `dist/programmy/${p.slug}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, withMeta(p.seoTitle, p.seoDescription, `${SITE}/programmy/${p.slug}`));
}
mkdirSync("dist/spasibo", { recursive: true });
writeFileSync("dist/spasibo/index.html", base.replace("</head>", `  <meta name="robots" content="noindex" />\n  </head>`));

const urls = ["/", ...programs.map((p) => `/programmy/${p.slug}`)];
writeFileSync(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${SITE}${u}</loc></url>`)
    .join("\n")}\n</urlset>\n`,
);
writeFileSync("dist/robots.txt", `User-agent: *\nAllow: /\nDisallow: /spasibo\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`SEO pages written: ${programs.length}`);
