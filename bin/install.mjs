#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseArgs(argv) {
  const args = { targetDir: null, force: false, dryRun: false, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "-h" || a === "--help") args.help = true;
    else if (a === "--force") args.force = true;
    else if (a === "--dry-run") args.dryRun = true;
    else if (a === "--target" || a === "-t") args.targetDir = argv[++i] || null;
    else if (a && a.startsWith("--target=")) args.targetDir = a.split("=", 2)[1] || null;
    else if (a && a.startsWith("-t=")) args.targetDir = a.split("=", 2)[1] || null;
  }
  return args;
}

function printHelp() {
  const lines = [
    "codex-skill-ui-ux-codex-designer",
    "",
    "Installs the ui-ux-codex-designer skill into Codex.",
    "",
    "Usage:",
    "  npx codex-skill-ui-ux-codex-designer",
    "  pnpm dlx codex-skill-ui-ux-codex-designer",
    "  bunx codex-skill-ui-ux-codex-designer",
    "",
    "Options:",
    "  -t, --target <dir>   Install into a specific skills directory",
    "  --force              Overwrite existing installation",
    "  --dry-run            Print actions without writing",
    "  -h, --help            Show help",
    ""
  ];
  process.stdout.write(lines.join("\n"));
}

function resolveSkillsDir(userArgTarget) {
  if (userArgTarget) return path.resolve(userArgTarget);
  const codexHome = process.env.CODEX_HOME;
  if (codexHome && codexHome.trim()) return path.resolve(codexHome, "skills");
  // Common fallback used in many Codex setups.
  return path.join(os.homedir(), ".codex", "skills");
}

function ensureDir(p, dryRun) {
  if (dryRun) return;
  fs.mkdirSync(p, { recursive: true });
}

function copyDir(src, dst, { force, dryRun }) {
  if (!fs.existsSync(src)) throw new Error(`Source directory not found: ${src}`);

  if (fs.existsSync(dst)) {
    if (!force) {
      throw new Error(
        `Destination already exists: ${dst}\nRe-run with --force to overwrite.`
      );
    }
    if (!dryRun) fs.rmSync(dst, { recursive: true, force: true });
  }

  const walk = (s, d) => {
    if (dryRun) return;
    fs.mkdirSync(d, { recursive: true });
    for (const ent of fs.readdirSync(s, { withFileTypes: true })) {
      const sp = path.join(s, ent.name);
      const dp = path.join(d, ent.name);
      if (ent.isDirectory()) walk(sp, dp);
      else if (ent.isSymbolicLink()) {
        const link = fs.readlinkSync(sp);
        fs.symlinkSync(link, dp);
      } else {
        fs.copyFileSync(sp, dp);
      }
    }
  };

  walk(src, dst);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    process.exit(0);
  }

  const skillName = "ui-ux-codex-designer";
  const pkgRoot = path.resolve(__dirname, "..");
  const srcSkillDir = path.join(pkgRoot, skillName);
  const skillsDir = resolveSkillsDir(args.targetDir);
  const dstSkillDir = path.join(skillsDir, skillName);

  process.stdout.write(
    [
      `Installing ${skillName}`,
      `- From: ${srcSkillDir}`,
      `- To:   ${dstSkillDir}`,
      `- Mode: ${args.dryRun ? "dry-run" : "write"}`,
      ""
    ].join("\n")
  );

  ensureDir(skillsDir, args.dryRun);
  copyDir(srcSkillDir, dstSkillDir, {
    force: args.force,
    dryRun: args.dryRun
  });

  process.stdout.write(
    [
      "Installed.",
      "",
      "Next:",
      "- Restart Codex (or reload skills) and prompt: “Use ui-ux-codex-designer to …”",
      ""
    ].join("\n")
  );
}

try {
  main();
} catch (err) {
  process.stderr.write(String(err?.message || err) + "\n");
  process.exit(1);
}

