"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { products } from "@/data/site";

export function ProductCarousel() {
  return (
    <Swiper modules={[Navigation]} navigation spaceBetween={20} breakpoints={{ 0: { slidesPerView: 1.1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="product-swiper pb-12">
      {products.slice(0, 7).map((product) => (
        <SwiperSlide key={product.slug} className="h-auto">
          <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,23,42,0.12)]">
            <div className="flex items-center justify-between border-b border-slate-200 bg-[linear-gradient(180deg,rgba(245,247,250,0.95),rgba(255,255,255,1))] px-6 py-5">
              <div>
                <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-primary">{product.badge}</span>
                <h3 className="mt-4 text-2xl font-semibold text-brand-secondary">{product.name}</h3>
              </div>
              <div className="rounded-2xl bg-slate-950 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300 shadow-[0_12px_30px_rgba(15,23,42,0.16)]">
                Infinoid
              </div>
            </div>
            <div className="flex flex-1 flex-col border-t border-slate-200 p-6">
              <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                <span>{product.category}</span>
                <span>Enterprise Device</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
              <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary whitespace-nowrap">
                  View details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
                <Link href="/resources/blogs" className="inline-flex h-11 items-center rounded-full border border-slate-200 px-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 transition hover:border-brand-primary hover:text-brand-primary whitespace-nowrap">
                  Download Catalogue
                </Link>
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}