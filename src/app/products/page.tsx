import Link from "next/link";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { products } from "@/data/site";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <SiteShell eyebrow="Products" title="Security devices and platforms built for enterprise rollouts." description="A premium product gallery focused only on CCTV, access control, and attendance systems.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article key={product.slug} className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
            <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(180deg,rgba(245,247,250,0.9),rgba(226,232,240,1))]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,175,196,0.2),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(30,41,59,0.1),transparent_28%)]" />
              <Image src={product.image} alt={product.name} fill className="object-contain p-6 drop-shadow-[0_16px_30px_rgba(15,23,42,0.16)]" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-primary backdrop-blur-sm">
                Infinoid
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">{product.category}</p>
              <h2 className="mt-3 text-2xl font-semibold text-brand-secondary">{product.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
              <Link href={`/products/${product.slug}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-primary">
                Product details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}