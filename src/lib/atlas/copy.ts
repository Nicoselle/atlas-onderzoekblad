/** Exact Otium bridge — public-face, tip-banned. */
export const OTIUM_BRIDGE =
  "Vanuit het Otium-project: Atlas leest wie de productieve laag houdt, zodat tijd vrijkomt voor wat ertoe doet.";

export const BUTTONDOWN_PLACEHOLDER = "REPLACE_ME";

export function buttonDownUsername() {
  const fromEnv = import.meta.env.VITE_BUTTONDOWN_USERNAME;
  if (typeof fromEnv === "string" && fromEnv.trim().length > 0) {
    return fromEnv.trim();
  }
  return BUTTONDOWN_PLACEHOLDER;
}

export function isButtonDownWired(username = buttonDownUsername()) {
  return username !== BUTTONDOWN_PLACEHOLDER && username.length > 0;
}

export function buttonDownEmbedAction(username = buttonDownUsername()) {
  return `https://buttondown.com/api/emails/embed-subscribe/${encodeURIComponent(username)}`;
}
