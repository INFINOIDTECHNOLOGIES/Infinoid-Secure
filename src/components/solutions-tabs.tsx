"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/data/site";
import { iconMap } from "@/data/site";
import { cn } from "@/lib/utils";

export function SolutionsTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = solutions[activeIndex];
  const ActiveIcon = iconMap[activeSolution.icon] ?? iconMap.video;

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft sm:p-6 lg:p-8">
      <div className="grid gap-5 xl:grid-cols-[260px_1fr] xl:items-start">
        <div className="space-y-3">
          {solutions.map((solution, index) => {
            const Icon = iconMap[solution.icon] ?? iconMap.video;
            return (
              <button
                key={solution.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-[1.5rem] border px-4 py-4 text-left transition",
                  index === activeIndex ? "border-brand-primary bg-brand-primary/10 shadow-glow" : "border-slate-200 bg-slate-50 hover:border-brand-primary/30 hover:bg-white"
                )}
              >
                <span className={cn("flex h-11 w-11 items-center justify-center rounded-2xl", index === activeIndex ? "bg-brand-primary text-white" : "bg-white text-brand-primary")}>
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-brand-secondary">{solution.title}</span>
                  <span className="mt-1 block text-xs text-slate-500">{solution.description.slice(0, 60)}...</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-5 grid gap-4 rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(245,247,250,0.7),rgba(255,255,255,1))] p-5 md:grid-cols-[1.05fr_0.95fr] lg:p-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
              <ActiveIcon className="h-3.5 w-3.5" /> {activeSolution.headline}
            </span>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary">{activeSolution.headline}</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{activeSolution.copy}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {activeSolution.cards.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-4 transition hover:bg-slate-50">
                  <p className="font-semibold text-brand-secondary">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[1.75rem] bg-brand-secondary p-6 text-white">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Solution summary</p>
              <div className="mt-5 grid gap-3">
                <div className="rounded-[1.25rem] bg-white/5 p-4"><p className="text-sm text-slate-300">Deployment focus</p><p className="mt-1 text-xl font-semibold">Scalable enterprise rollout</p></div>
                <div className="rounded-[1.25rem] bg-white/5 p-4"><p className="text-sm text-slate-300">Operations</p><p className="mt-1 text-xl font-semibold">Command-center ready</p></div>
                <div className="rounded-[1.25rem] bg-white/5 p-4"><p className="text-sm text-slate-300">Integrations</p><p className="mt-1 text-xl font-semibold">Video, access, attendance, analytics</p></div>
              </div>
            </div>
            <Link href={activeSolution.href} className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow">
              Explore {activeSolution.title} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
}