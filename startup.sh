#!/usr/bin/env bash
set -euo pipefail
if curl -sf http://127.0.0.1:8080/ >/dev/null; then
  exit 0
fi
npm run dev &
