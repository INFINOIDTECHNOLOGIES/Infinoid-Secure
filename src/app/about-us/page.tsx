import Link from "next/link";
import { ArrowRight, BadgeCheck, Shield, Target, Users } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { stats } from "@/data/site";

const points = [
  { title: "Enterprise scale", description: "Designed around multi-site deployment, serviceability, and long-term customer trust.", icon: Users },
  { title: "AI security expertise", description: "Built on video analytics, event logic, and smart control workflows.", icon: Target },
  { title: "Support rigor", description: "Structured for SLA-backed service, integration support, and growth readiness.", icon: Shield },
  { title: "Quality focus", description: "A professional front-end presence that matches the seriousness of the solutions.", icon: BadgeCheck },
];

export default function AboutUsPage() {
  return (
    <SiteShell eyebrow="About Us" title="30+ Years of Security Innovation" description="Infinoid Secure is positioned as an enterprise security brand with practical expertise in CCTV, access control, attendance systems, and AI-driven monitoring.">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="rounded-[1.5rem] bg-slate-50 p-5">
                  <Icon className="h-6 w-6 text-brand-primary" />
                  <h2 className="mt-4 text-xl font-semibold text-brand-secondary">{point.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-[2rem] bg-brand-secondary p-8 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Company snapshot</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] bg-white/5 p-5">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
          <Link href="/contact-us" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow">
            Speak to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}