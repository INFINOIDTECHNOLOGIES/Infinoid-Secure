import { iconMap } from "@/data/site";
import { cn } from "@/lib/utils";

type ProductVisualProps = {
  icon: string;
  label: string;
  tone?: "light" | "dark";
};

export function ProductVisual({ icon, label, tone = "light" }: ProductVisualProps) {
  const Icon = iconMap[icon] ?? iconMap.camera;

  return (
    <div className={cn("relative flex h-full min-h-[240px] items-center justify-center overflow-hidden rounded-[1.75rem] border", tone === "dark" ? "border-white/10 bg-slate-950 text-white" : "border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 text-brand-secondary")}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,175,196,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(30,41,59,0.14),transparent_28%)]" />
      <div className="relative flex flex-col items-center gap-5 text-center">
        <div className={cn("flex h-24 w-24 items-center justify-center rounded-3xl border shadow-soft", tone === "dark" ? "border-white/10 bg-white/10" : "border-white/70 bg-white/85") }>
          <Icon className="h-12 w-12 text-brand-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-primary">Infinoid</p>
          <h3 className="mt-2 text-2xl font-semibold">{label}</h3>
          <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">Enterprise-grade visual mockup ready for camera, controller, or attendance device replacement.</p>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 rounded-full border border-brand-primary/20 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-primary shadow-sm">
        Infinoid Secure
      </div>
    </div>
  );
}