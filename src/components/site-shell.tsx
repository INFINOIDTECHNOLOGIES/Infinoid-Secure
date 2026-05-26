import { ReactNode } from "react";

type SiteShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SiteShell({ eyebrow, title, description, children }: SiteShellProps) {
  return (
    <main className="bg-brand-background text-brand-text">
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-soft backdrop-blur-sm sm:p-10">
          {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary">{eyebrow}</p> : null}
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
        </div>
        <div className="mt-8">{children}</div>
      </section>
    </main>
  );
}