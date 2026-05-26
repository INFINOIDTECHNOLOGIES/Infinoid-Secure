import Link from "next/link";
import { ArrowRight, Building2, Camera, CheckCircle2, ClipboardList, MapPin, Shield, Star, Video, Users } from "lucide-react";
import { HeroCarousel } from "@/components/hero-carousel";
import { LogoMarquee } from "@/components/logo-marquee";
import { ProductCarousel } from "@/components/product-carousel";
import { SectionHeading } from "@/components/section-heading";
import { SolutionsTabs } from "@/components/solutions-tabs";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { caseStudies, industries, mediaTiles, stats } from "@/data/site";

const industrySymbols = [Camera, Building2, Shield, Video, MapPin, ClipboardList, Users, Star, Shield, Building2, Camera, Video];

export function HomePage() {
  return (
    <main className="bg-brand-background text-brand-text">
      <HeroCarousel />
      <LogoMarquee />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Solutions" title="Security programs shaped like enterprise infrastructure." description="A MatrixComsec-inspired structure, rewritten entirely for Infinoid Secure and focused on CCTV, access, attendance, and analytics." />
        <div className="mt-10"><SolutionsTabs /></div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Products" title="A focused product stack for surveillance and secure entry." description="Designed to present product families with premium cards, carousel motion, and an enterprise catalogue call to action." />
        <div className="mt-10"><ProductCarousel /></div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Industries" title="Deployment-ready for sectors where visibility and control matter." description="Use the same premium grid language across all verticals, with dedicated pages for each industry." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industrySymbols[index % industrySymbols.length];
            return (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-glow">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-secondary">{industry.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{industry.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Case Studies" title="Clear, credible deployment stories for enterprise buyers." description="The style mirrors MatrixComsec-like trust-building layouts while staying focused on Infinoid Secure use cases." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {caseStudies.map((study) => (
            <article key={study.slug} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary"><CheckCircle2 className="h-5 w-5" /></div>
              <h3 className="mt-5 text-xl font-semibold text-brand-secondary">{study.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{study.description}</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-brand-primary">{study.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="Enterprise validation from security and operations leaders." description="A premium testimonial carousel with realistic corporate presentation and strong trust signals." />
        <div className="mt-10"><TestimonialCarousel /></div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <SectionHeading eyebrow="About" title="30+ Years of Security Innovation" description="Infinoid Secure is positioned as a long-range enterprise partner for CCTV, AI surveillance, access control, and time attendance." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] bg-slate-50 p-5">
                  <p className="text-3xl font-semibold text-brand-secondary">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {mediaTiles.map((tile) => (
              <article key={tile.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary">Media</p>
                <h3 className="mt-4 text-2xl font-semibold text-brand-secondary">{tile.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{tile.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-brand-secondary px-6 py-10 text-white shadow-soft sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Why Infinoid Secure</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">A premium security website that is ready for demos, sales, and enterprise conversations.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">The experience combines clean whitespace, teal accents, smooth motion, and a modular route structure so every page can scale cleanly.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "CCTV surveillance",
                "Access control",
                "Time attendance",
                "Video analytics",
                "AI surveillance",
                "Enterprise support",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-brand-secondary">Talk to Infinoid Secure about your next surveillance or access control deployment.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">Move from product discovery to consultation with a clear enterprise contact path, just like the Matrix-inspired reference structure.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3.5 text-sm font-semibold text-brand-secondary transition hover:border-brand-primary hover:text-brand-primary">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}