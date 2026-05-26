import Link from "next/link";
import { ArrowRight, Handshake, Layers3, Network } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const partnerTiers = [
  { title: "Channel partners", description: "Integrators and resellers delivering local support and enterprise deployments.", icon: Handshake },
  { title: "Technology partners", description: "Platform, software, and interoperability collaborators.", icon: Layers3 },
  { title: "Alliance partners", description: "Long-term ecosystem relationships for growth and coverage.", icon: Network },
];

export default function PartnersPage() {
  return (
    <SiteShell eyebrow="Partners" title="A partner ecosystem designed for enterprise reach." description="The page structure supports channel, technology, and alliance relationships without any telecom content.">
      <div className="grid gap-6 md:grid-cols-3">
        {partnerTiers.map((tier) => {
          const Icon = tier.icon;
          return (
            <article key={tier.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
              <Icon className="h-6 w-6 text-brand-primary" />
              <h2 className="mt-4 text-2xl font-semibold text-brand-secondary">{tier.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{tier.description}</p>
            </article>
          );
        })}
      </div>
      <div className="mt-8 rounded-[2rem] bg-brand-secondary p-8 text-white shadow-soft">
        <h2 className="text-2xl font-semibold">Join the Infinoid Secure partner network.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">Create regional coverage, lead generation, and deployment support opportunities through a simple enterprise partnership model.</p>
        <Link href="/contact-us" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow">
          Become a partner <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SiteShell>
  );
}