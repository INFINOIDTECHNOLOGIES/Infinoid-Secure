import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { caseStudyMap, detailPages } from "@/data/site";

type DetailPageProps = {
  slug: string;
};

export function DetailPage({ slug }: DetailPageProps) {
  const detail = detailPages[slug];

  if (!detail) {
    return null;
  }

  return (
    <SiteShell eyebrow={detail.eyebrow} title={detail.title} description={detail.description}>
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2">
            {detail.sections.map((section) => (
              <div key={section.title} className="rounded-[1.5rem] bg-slate-50 p-5">
                <h2 className="text-lg font-semibold text-brand-secondary">{section.title}</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] bg-brand-secondary p-6 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Infinoid approach</p>
          <h3 className="mt-4 text-2xl font-semibold">Built for enterprise deployment, support, and scale.</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">This page acts as a reusable template for solution, product, industry, and resource subpages so every route feels consistent, polished, and production-ready.</p>
          {caseStudyMap[slug] ? (
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Related case study</p>
              <h4 className="mt-3 text-xl font-semibold">{caseStudyMap[slug].title}</h4>
              <p className="mt-2 text-sm text-slate-300">{caseStudyMap[slug].description}</p>
              <p className="mt-4 text-sm font-semibold text-cyan-200">{caseStudyMap[slug].impact}</p>
            </div>
          ) : null}
          <Link href="/contact-us" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow">
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}