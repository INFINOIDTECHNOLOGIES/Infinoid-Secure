import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { detailPages, resourceSlugs } from "@/data/site";
import { ArrowRight } from "lucide-react";

const resourceCards = [
  { title: "Blogs", href: "/resources/blogs", summary: detailPages.blogs.description },
  { title: "Case Studies", href: "/resources/case-studies", summary: detailPages["case-studies"].description },
  { title: "News", href: "/resources/news", summary: detailPages.news.description },
  { title: "Events", href: "/resources/events", summary: detailPages.events.description },
];

export default function ResourcesPage() {
  return (
    <SiteShell eyebrow="Resources" title="Insights, proof points, and enterprise updates." description="A single landing page for blogs, case studies, news, and events with professional corporate presentation.">
      <div className="grid gap-6 md:grid-cols-2">
        {resourceCards.map((card) => (
          <Link key={card.title} href={card.href} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">Resources</p>
            <h2 className="mt-3 text-2xl font-semibold text-brand-secondary">{card.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{card.summary}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
              Open section <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </SiteShell>
  );
}