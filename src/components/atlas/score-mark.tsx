import { formatScore } from "@/lib/atlas/format";
import { cn } from "@/lib/utils";

export function ScoreMark({
  value,
  size = "md",
  className,
}: {
  value: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dim = size === "lg" ? 112 : size === "sm" ? 56 : 80;
  const stroke = size === "lg" ? 7 : size === "sm" ? 4 : 5.5;
  const r = (dim - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value)) / 100;
  const dash = c * pct;

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: dim, height: dim }}
      aria-label={`Score ${formatScore(value)}`}
    >
      <svg width={dim} height={dim} viewBox={`0 0 ${dim} ${dim}`} className="-rotate-90">
        <circle
          cx={dim / 2}
          cy={dim / 2}
          r={r}
          fill="none"
          stroke="var(--color-rule)"
          strokeWidth={stroke}
        />
        <circle
          cx={dim / 2}
          cy={dim / 2}
          r={r}
          fill="none"
          stroke="var(--color-moss)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
        />
      </svg>
      <span
        className={cn(
          "absolute font-sans font-medium tabular-nums text-ink",
          size === "lg" && "text-2xl",
          size === "md" && "text-lg",
          size === "sm" && "text-xs",
        )}
      >
        {formatScore(value)}
      </span>
    </div>
  );
}
