import { SiteShell } from "@/components/site-shell";
import { ClipboardList, Download, LifeBuoy, ShieldCheck } from "lucide-react";

const supportCards = [
  { title: "Service desk", description: "Ticketing, escalation, and SLA response paths.", icon: LifeBuoy },
  { title: "Downloads", description: "Catalogues, manuals, and support resources.", icon: Download },
  { title: "Warranty", description: "Coverage and replacement policy guidance.", icon: ShieldCheck },
  { title: "Training", description: "Deployment training and operational enablement.", icon: ClipboardList },
];

export default function SupportPage() {
  return (
    <SiteShell eyebrow="Support" title="Service, downloads, warranty, and enablement." description="Everything an enterprise buyer expects from a security platform partner, presented cleanly and professionally.">
      <div className="grid gap-6 md:grid-cols-2">
        {supportCards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
              <Icon className="h-6 w-6 text-brand-primary" />
              <h2 className="mt-4 text-2xl font-semibold text-brand-secondary">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
            </article>
          );
        })}
      </div>
    </SiteShell>
  );
}