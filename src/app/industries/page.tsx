import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { industries } from "@/data/site";
import { ArrowRight } from "lucide-react";

export default function IndustriesPage() {
  return (
    <SiteShell eyebrow="Industries" title="Sector-specific security solutions for enterprise environments." description="Dedicated industry pages and a strong grid presentation similar to the Matrix-style reference, but fully aligned with Infinoid Secure.">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry) => (
          <article key={industry.slug} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">Industry</p>
            <h2 className="mt-3 text-2xl font-semibold text-brand-secondary">{industry.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{industry.description}</p>
            <Link href={`/industries/${industry.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
              View industry page <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}