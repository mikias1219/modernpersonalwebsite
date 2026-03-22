#!/usr/bin/env node
/**
 * Renames the linked Vercel project (shorter *.vercel.app host prefix).
 * Default new name: mikiasabatesite (must match [a-z0-9-], Vercel rules).
 *
 *   node scripts/rename-vercel-project.mjs [new-name]
 *
 * Requires VERCEL_TOKEN in env or .env.local
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function parseEnvFile(filePath) {
  if (!existsSync(filePath)) return {};
  const out = {};
  const raw = readFileSync(filePath, "utf8");
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const i = trimmed.indexOf("=");
    if (i <= 0) continue;
    const key = trimmed.slice(0, i).trim();
    let val = trimmed.slice(i + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

const newName = (process.argv[2] || "mikiasabatesite").trim().toLowerCase();
if (!/^[a-z0-9-]+$/.test(newName) || newName.length < 2 || newName.length > 100) {
  console.error("Invalid name: use lowercase letters, digits, hyphens only (2–100 chars).");
  process.exit(1);
}

const fileEnv = parseEnvFile(join(root, ".env.local"));
const token = process.env.VERCEL_TOKEN?.trim() || fileEnv.VERCEL_TOKEN?.trim();
if (!token) {
  console.error("Set VERCEL_TOKEN (env or .env.local).");
  process.exit(1);
}

const projectPath = join(root, ".vercel", "project.json");
if (!existsSync(projectPath)) {
  console.error("Missing .vercel/project.json — run: vercel link");
  process.exit(1);
}

const meta = JSON.parse(readFileSync(projectPath, "utf8"));
const { projectId, orgId: teamId } = meta;
if (!projectId || !teamId) {
  console.error("project.json needs projectId and orgId.");
  process.exit(1);
}

const params = new URLSearchParams({ teamId });
const url = `https://api.vercel.com/v9/projects/${encodeURIComponent(projectId)}?${params}`;

const res = await fetch(url, {
  method: "PATCH",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: newName }),
});

const text = await res.text();
if (!res.ok) {
  console.error(res.status, text);
  process.exit(1);
}

const updated = JSON.parse(text);
writeFileSync(
  projectPath,
  JSON.stringify(
    {
      projectId: updated.id || projectId,
      orgId: teamId,
      projectName: updated.name || newName,
    },
    null,
    2
  ) + "\n"
);

console.log(`Renamed Vercel project to "${updated.name || newName}".`);
console.log(`Deployment URLs will use the prefix: ${updated.name || newName}-…`);
console.log("If you use a custom domain in Vercel, it stays attached; set NEXT_PUBLIC_SITE_URL after.");
