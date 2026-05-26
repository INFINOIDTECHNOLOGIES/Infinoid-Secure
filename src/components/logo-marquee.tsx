import { clients } from "@/data/site";

export function LogoMarquee() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-6">
      <div className="animate-marquee flex min-w-max items-center gap-10 px-6 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
        {[...clients, ...clients].map((client, index) => (
          <div key={`${client}-${index}`} className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/10 text-[11px] font-bold text-brand-primary">{client.slice(0, 2).toUpperCase()}</span>
            <span>{client}</span>
          </div>
        ))}
      </div>
    </section>
  );
}