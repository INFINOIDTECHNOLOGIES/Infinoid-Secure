import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className }: BrandLogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)} aria-label="Infinoid Secure home">
      <span className="flex h-11 w-11 items-center justify-center rounded-[1.25rem] bg-brand-secondary shadow-soft sm:h-12 sm:w-12">
        <span className="h-6 w-1.5 rounded-full bg-white" />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.38em] text-brand-primary sm:text-[12px]">Infinoid Secure</span>
        {compact ? null : <span className="mt-1 block text-sm font-medium text-slate-500">Infinoid Technologies</span>}
      </span>
    </Link>
  );
}