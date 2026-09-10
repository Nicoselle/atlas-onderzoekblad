/**
 * Migration file naming + ordering, shared by `vite.config.ts`
 * (`hasGlobbedMigrations`) and `scripts/migrate.mjs`.
 *
 * NOTE: This file is a reconstruction of a platform-injected harness module
 * that was not committed to this repository. It implements the contract the
 * committed code depends on (`isMigrationFile`) plus the helpers the migration
 * runner needs. See the repository PR that added it for context.
 *
 * A migration file is `NNNN_name.sql` (four-plus leading digits, an underscore,
 * then a `.sql` suffix). Directory names such as `auth/` are intentionally NOT
 * migration files, so a `migrations/` tree that only holds domain sub-folders
 * reports "no globbed migrations" at the top level — matching how `db.ts`
 * globs a single, flat directory.
 */

const MIGRATION_FILE = /^(\d{4,})_.+\.sql$/;

/** True when `name` is a migration SQL file (not a directory or other asset). */
export function isMigrationFile(name) {
  return typeof name === "string" && MIGRATION_FILE.test(name);
}

/**
 * Numeric ordinal encoded in a migration file name (`0001_x.sql` → 1), or
 * `Number.POSITIVE_INFINITY` when the name is not a migration file so unknown
 * names sort last deterministically.
 */
export function migrationOrder(name) {
  const match = typeof name === "string" ? name.match(MIGRATION_FILE) : null;
  return match ? Number.parseInt(match[1], 10) : Number.POSITIVE_INFINITY;
}

/**
 * Sort migration file names by their numeric ordinal, breaking ties on the
 * full name so ordering is stable regardless of filesystem read order.
 */
export function sortMigrations(names) {
  return [...names].sort((a, b) => {
    const delta = migrationOrder(a) - migrationOrder(b);
    return delta !== 0 ? delta : a.localeCompare(b);
  });
}
