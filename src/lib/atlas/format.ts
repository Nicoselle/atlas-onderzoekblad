export function formatScore(n: number, digits = 1) {
  return n.toFixed(digits).replace(".", ",");
}

export function formatNlDate(iso: string) {
  const months = [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${months[m - 1]} ${y}`;
}
