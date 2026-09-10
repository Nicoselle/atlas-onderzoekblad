/**
 * Apply SQL migrations after a build (`npm run build` → `npm run db:migrate`).
 *
 * NOTE: This file is a reconstruction of a platform-injected harness module
 * that was not committed to this repository.
 *
 * Migrations live under `migrations/<domain>/NNNN_name.sql`. When a Postgres
 * connection string is configured (`DATABASE_URL`/`POSTGRES_URL`) this applies
 * any not-yet-applied migrations against it, tracking applied names in a
 * `_migrations` table. With no external Postgres configured — the default for
 * the shipped template, which uses embedded PGLite applied at runtime by
 * `src/lib/db.ts` — it logs the plan and exits 0 so the build stays green.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { projectRoot } from "./with-app-env.mjs";
import { isMigrationFile, sortMigrations } from "./migration-plan.mjs";

function collectMigrations(migrationsRoot) {
  const found = [];
  let entries;
  try {
    entries = readdirSync(migrationsRoot);
  } catch {
    return found;
  }
  for (const entry of entries) {
    const abs = join(migrationsRoot, entry);
    let stat;
    try {
      stat = statSync(abs);
    } catch {
      continue;
    }
    if (stat.isDirectory()) {
      for (const name of sortMigrations(readdirSync(abs).filter(isMigrationFile))) {
        found.push({ domain: entry, name, path: join(abs, name) });
      }
    } else if (isMigrationFile(entry)) {
      found.push({ domain: null, name: entry, path: abs });
    }
  }
  return found;
}

function connectionString() {
  return (
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.PG_CONNECTION_STRING ||
    ""
  );
}

async function applyWithPostgres(dsn, migrations) {
  const { default: pg } = await import("pg");
  const client = new pg.Client({ connectionString: dsn });
  await client.connect();
  try {
    await client.query(
      "CREATE TABLE IF NOT EXISTS _migrations (name text primary key, applied_at timestamptz not null default now())",
    );
    const { rows } = await client.query("SELECT name FROM _migrations");
    const applied = new Set(rows.map((r) => r.name));
    for (const migration of migrations) {
      const key = migration.domain ? `${migration.domain}/${migration.name}` : migration.name;
      if (applied.has(key)) continue;
      const sql = readFileSync(migration.path, "utf8");
      await client.query("BEGIN");
      try {
        await client.query(sql);
        await client.query("INSERT INTO _migrations (name) VALUES ($1)", [key]);
        await client.query("COMMIT");
        console.log(`[migrate] applied ${key}`);
      } catch (err) {
        await client.query("ROLLBACK");
        throw new Error(`[migrate] failed on ${key}: ${err.message}`);
      }
    }
  } finally {
    await client.end();
  }
}

async function main() {
  const migrationsRoot = join(projectRoot(), "migrations");
  const migrations = collectMigrations(migrationsRoot);

  if (migrations.length === 0) {
    console.log("[migrate] no migration files found; nothing to do");
    return;
  }

  const dsn = connectionString();
  if (!dsn) {
    console.log(
      `[migrate] no external Postgres configured (DATABASE_URL unset); ${migrations.length} migration(s) will be applied at runtime by PGLite:`,
    );
    for (const m of migrations) {
      console.log(`  - ${m.domain ? `${m.domain}/` : ""}${m.name}`);
    }
    return;
  }

  console.log(`[migrate] applying ${migrations.length} migration(s) to Postgres`);
  await applyWithPostgres(dsn, migrations);
  console.log("[migrate] done");
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
