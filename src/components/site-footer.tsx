import Link from "next/link";
import { Linkedin, Mail, MapPin, MessageCircleMore, Phone, ShieldCheck, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { FooterNewsletterForm } from "@/components/footer-newsletter-form";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-brand-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <BrandLogo compact />
            <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight">Security systems built for scale, clarity, and control.</h2>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-cyan-300" /><span>Delhi HQ: 22-A, Asaf Ali Road, Darya Ganj, Central Delhi, New Delhi, 110002</span></div>
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-cyan-300" /><span>Noida Technology Hub: B-1110, Sector 90, Bhutani Alphathum, Noida, Uttar Pradesh, 201305</span></div>
              <div className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-cyan-300" /><span>hello@infinoidsecure.com</span></div>
              <div className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-cyan-300" /><span>+91 98719 73348</span></div>
              <div className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-cyan-300" /><span>+91 92270 88395</span></div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Domains</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li><Link href="/solutions/video-surveillance">Video Surveillance</Link></li>
              <li><Link href="/solutions/access-control">Access Control</Link></li>
              <li><Link href="/solutions/time-attendance">Time Attendance</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/industries">Industries</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/support">Support</Link></li>
              <li><Link href="/resources/blogs">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Newsletter</h3>
            <p className="mt-5 text-sm leading-7 text-slate-300">Monthly updates on security deployment trends, product launches, and partner opportunities.</p>
            <FooterNewsletterForm />
            <div className="mt-6 flex gap-3 text-slate-300">
              <Link href="https://www.linkedin.com/company/infinoid-technologies-in/posts/?feedView=all" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></Link>
              <Link href="https://x.com/infinoid_tech" target="_blank" rel="noreferrer" aria-label="X"><X className="h-5 w-5" /></Link>
              <Link href="https://wa.me/919871973348" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircleMore className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-cyan-300" /> ISO-aligned processes</span>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Sitemap</Link>
          </div>
          <p>© 2026 Infinoid Secure. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}