"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from "@/data/site";

const avatarImages = [
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=format&fit=crop&w=800&q=80",
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=format&fit=crop&w=800&q=80",
  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=format&fit=crop&w=800&q=80",
];

export function TestimonialCarousel() {
  return (
    <Swiper modules={[Autoplay, Navigation]} autoplay={{ delay: 5500, disableOnInteraction: false }} navigation spaceBetween={20} breakpoints={{ 0: { slidesPerView: 1 }, 1024: { slidesPerView: 2 } }} className="testimonial-swiper pb-12">
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={testimonial.name} className="h-auto">
          <article className="h-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <p className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <Image src={avatarImages[index % avatarImages.length]} alt={testimonial.name} fill className="object-cover" sizes="56px" />
              </div>
              <div>
                <p className="font-semibold text-brand-secondary">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">{testimonial.company}</p>
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}