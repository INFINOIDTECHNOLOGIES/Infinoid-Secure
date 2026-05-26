import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { solutions } from "@/data/site";

export default function SolutionsPage() {
  return (
    <SiteShell eyebrow="Solutions" title="Infinoid Secure solutions for surveillance, access, and attendance." description="A clean enterprise overview page that keeps the Matrix-inspired rhythm while replacing all telecom-oriented content with security-only offerings.">
      <div className="grid gap-6 lg:grid-cols-3">
        {solutions.map((solution) => (
          <article key={solution.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">{solution.title}</p>
            <h2 className="mt-4 text-2xl font-semibold text-brand-secondary">{solution.headline}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{solution.copy}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {solution.cards.map((card) => (
                <div key={card.title} className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-brand-primary"><CheckCircle2 className="h-4 w-4" /><span className="text-[11px] font-semibold uppercase tracking-[0.25em]">{card.title}</span></div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                </div>
              ))}
            </div>
            <Link href={solution.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
              Explore <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}