"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Video } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Enterprise Grade AI Surveillance Solutions",
    description: "Transform security operations with intelligent monitoring, perimeter awareness, and fast response orchestration.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Security Monitoring Rooms That See More",
    description: "Command-center visibility for campuses, plants, control rooms, and distributed enterprise estates.",
    image: "https://images.unsplash.com/photo-1555617117-08fda66e89f6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Smart Parking and Perimeter Intelligence",
    description: "ANPR, parking oversight, and automated incident detection for modern property and mobility networks.",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "AI Surveillance for Critical Operations",
    description: "Predictive analytics, access integration, and event-driven workflows designed for enterprise control.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Connected Security for Smart Cities and Campuses",
    description: "Unify surveillance, access, and attendance with a future-ready solution stack.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
  },
];

export function HeroCarousel() {
  return (
    <section className="relative overflow-hidden bg-brand-background">
      <Swiper modules={[Autoplay, Navigation, Pagination]} autoplay={{ delay: 5000, disableOnInteraction: false }} pagination={{ clickable: true }} navigation loop className="hero-swiper">
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative min-h-[760px]">
              <Image src={slide.image} alt={slide.title} fill priority className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88),rgba(15,23,42,0.5),rgba(15,23,42,0.12))]" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />
              <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
                <div className="max-w-4xl text-white">
                  <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 backdrop-blur-sm">
                    <Shield className="h-3.5 w-3.5" /> Infinoid Secure
                  </motion.p>
                  <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                    {slide.title}
                  </motion.h1>
                  <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                    {slide.description}
                  </motion.p>
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-8 flex flex-wrap gap-4">
                    <Link href="/solutions" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                      Know More <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/15">
                      Explore Products <Video className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}