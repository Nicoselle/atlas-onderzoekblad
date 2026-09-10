import type { StatusWord } from "@/lib/atlas/companies";
import { cn } from "@/lib/utils";

export function StatusBadge({
  status,
  className,
}: {
  status: StatusWord | string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-rule bg-paper px-2 py-0.5 font-sans text-[0.65rem] tracking-[0.16em] text-warn uppercase",
        className,
      )}
    >
      {status}
    </span>
  );
}
