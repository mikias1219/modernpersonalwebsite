#!/usr/bin/env node
/**
 * Pushes RESEND_API_KEY, CONTACT_TO_EMAIL, and optional CONTACT_FROM_EMAIL
 * from .env.local to the linked Vercel project (production + preview + development).
 *
 * Requires:
 *   export VERCEL_TOKEN=...   (create at https://vercel.com/account/tokens)
 *
 * Usage:
 *   node scripts/sync-vercel-env.mjs
 *   node scripts/sync-vercel-env.mjs --github   # also set repo secrets for Actions (optional)
 */

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function parseEnvFile(filePath) {
  if (!existsSync(filePath)) return {};
  const out = {};
  const raw = readFileSync(filePath, "utf8");
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
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

const KEYS = ["RESEND_API_KEY", "CONTACT_TO_EMAIL", "CONTACT_FROM_EMAIL"];

async function vercelUpsert({ token, teamId, projectId, key, value }) {
  const params = new URLSearchParams({ teamId, upsert: "true" });
  const url = `https://api.vercel.com/v10/projects/${encodeURIComponent(projectId)}/env?${params}`;
  const body = {
    key,
    value,
    type: "encrypted",
    target: ["production", "preview", "development"],
    comment: "Synced via scripts/sync-vercel-env.mjs",
  };
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) {
    let err = text;
    try {
      err = JSON.stringify(JSON.parse(text), null, 2);
    } catch {
      /* keep text */
    }
    throw new Error(`Vercel API ${res.status}: ${err}`);
  }
  return JSON.parse(text);
}

function main() {
  const withGithub = process.argv.includes("--github");
  const envPath = join(root, ".env.local");
  const fileEnv = parseEnvFile(envPath);
  const token =
    process.env.VERCEL_TOKEN?.trim() || fileEnv.VERCEL_TOKEN?.trim() || "";

  if (!token) {
    console.error(
      "Missing VERCEL_TOKEN. Create one at https://vercel.com/account/tokens then run:\n" +
        "  export VERCEL_TOKEN='your_token'\n" +
        "  node scripts/sync-vercel-env.mjs\n" +
        "\nOr add VERCEL_TOKEN=... to .env.local (do not commit)."
    );
    process.exit(1);
  }

  const projectPath = join(root, ".vercel", "project.json");
  if (!existsSync(projectPath)) {
    console.error("Missing .vercel/project.json. Run: vercel link");
    process.exit(1);
  }

  const { projectId, orgId: teamId } = JSON.parse(readFileSync(projectPath, "utf8"));
  if (!projectId || !teamId) {
    console.error(".vercel/project.json must contain projectId and orgId (team).");
    process.exit(1);
  }

  const missing = [];
  for (const key of ["RESEND_API_KEY", "CONTACT_TO_EMAIL"]) {
    const v = fileEnv[key]?.trim();
    if (!v) missing.push(key);
  }
  if (missing.length) {
    console.error(
      `Missing in .env.local: ${missing.join(", ")}\nFill those, then run this script again.`
    );
    process.exit(1);
  }

  return { withGithub, fileEnv, token, teamId, projectId, envPath };
}

const cfg = main();

(async () => {
  const { withGithub, fileEnv, token, teamId, projectId } = cfg;

  for (const key of KEYS) {
    const value = fileEnv[key]?.trim();
    if (!value) {
      if (key === "CONTACT_FROM_EMAIL") continue;
      continue;
    }
    process.stdout.write(`Vercel: ${key} … `);
    await vercelUpsert({ token, teamId, projectId, key, value });
    console.log("ok");
  }

  console.log("\nDone. Redeploy on Vercel (Deployments → … → Redeploy) or push a commit so the new env is picked up.");

  if (withGithub) {
    const repo = "mikias1219/modernpersonalwebsite";
    for (const key of ["RESEND_API_KEY", "CONTACT_TO_EMAIL"]) {
      const value = fileEnv[key]?.trim();
      if (!value) continue;
      process.stdout.write(`GitHub secret ${key} … `);
      const r = spawnSync("gh", ["secret", "set", key, "-R", repo], {
        encoding: "utf8",
        input: value,
      });
      if (r.status !== 0) {
        console.error(r.stderr || r.stdout || "gh failed");
        process.exit(1);
      }
      console.log("ok");
    }
    console.log(
      "\nGitHub repo secrets set. Your current workflows do not pass these to Vercel runtime; Vercel env above is what the live site uses."
    );
  }
})().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
