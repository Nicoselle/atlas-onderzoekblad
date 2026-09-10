/**
 * Start/stop a background `vite preview` server (used by `npm run
 * preview:restart` / `preview:stop`).
 *
 * NOTE: This file is a reconstruction of a platform-injected harness module
 * that was not committed to this repository. It manages a single detached
 * preview process via a PID file under `.grok/`.
 */

import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync, openSync } from "node:fs";
import { dirname, join } from "node:path";
import { projectRoot } from "./with-app-env.mjs";

const ROOT = projectRoot();
const PID_FILE = join(ROOT, ".grok", "preview.pid");
const LOG_FILE = join(ROOT, ".grok", "preview.log");

function readPid() {
  try {
    const pid = Number.parseInt(readFileSync(PID_FILE, "utf8").trim(), 10);
    return Number.isFinite(pid) ? pid : null;
  } catch {
    return null;
  }
}

function isAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function stop() {
  const pid = readPid();
  if (pid && isAlive(pid)) {
    try {
      process.kill(pid, "SIGTERM");
      console.log(`[preview] stopped pid ${pid}`);
    } catch (err) {
      console.error(`[preview] could not stop pid ${pid}: ${err.message}`);
    }
  } else {
    console.log("[preview] no running preview server");
  }
  try {
    rmSync(PID_FILE, { force: true });
  } catch {
    /* ignore */
  }
}

function start() {
  mkdirSync(dirname(PID_FILE), { recursive: true });
  const out = openSync(LOG_FILE, "a");
  const child = spawn("npm", ["run", "preview"], {
    cwd: ROOT,
    detached: true,
    stdio: ["ignore", out, out],
    env: process.env,
    shell: true,
  });
  child.unref();
  writeFileSync(PID_FILE, String(child.pid), "utf8");
  console.log(`[preview] started pid ${child.pid} (logs: ${LOG_FILE})`);
}

function restart() {
  stop();
  start();
}

const command = process.argv[2];
switch (command) {
  case "restart":
    restart();
    break;
  case "stop":
    stop();
    break;
  case "start":
    if (readPid() && isAlive(readPid())) {
      console.log("[preview] already running");
      if (!existsSync(PID_FILE)) start();
    } else {
      start();
    }
    break;
  default:
    console.error("usage: node scripts/preview.mjs <start|restart|stop>");
    process.exit(2);
}
