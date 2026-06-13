"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Search, Shield, X } from "lucide-react";
import { industries, primaryNav, products } from "@/data/site";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/brand-logo";

type OpenMenu = "Solutions" | "Industries" | "Products" | "Partners" | "Support" | "Resources" | "About Us" | "Contact Us" | null;

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 24) {
        document.body.dataset.scrolled = "true";
      } else {
        delete document.body.dataset.scrolled;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!openMenu) return;
      const target = event.target as Node | null;
      if (target && headerRef.current && !headerRef.current.contains(target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openMenu]);

  const menuColumns = useMemo(() => ({
    Solutions: [
      {
        title: "Video Surveillance",
        links: [
          "Automatic Number Plate Recognition",
          "Centralized Video Surveillance",
          "Parking Management",
          "Perimeter Security",
          "Integration with Access Control",
          "Video Analytics",
          "AI Surveillance",
        ],
      },
      {
        title: "Access Control",
        links: [
          "Face Recognition Access",
          "Smart Door Control",
          "Visitor Management",
          "Elevator Access",
          "Multi-location Control",
        ],
      },
      {
        title: "Time Attendance",
        links: [
          "Biometric Attendance",
          "Cloud Attendance",
          "Employee Tracking",
          "Shift Management",
          "Payroll Integration",
        ],
      },
    ],
  }), []);

  const selectedIndustries = industries;
  const productGroups = [
    {
      title: "Video Surveillance",
      links: products.filter((item) => item.category === "Video Surveillance"),
    },
    {
      title: "Access Control",
      links: products.filter((item) => item.category === "Access Control"),
    },
    {
      title: "Time Attendance",
      links: products.filter((item) => item.category === "Time Attendance"),
    },
  ];

  const renderMegaMenu = () => {
    if (!openMenu) {
      return null;
    }

    if (openMenu === "Solutions") {
      return (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.985 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="w-full border-b border-slate-200 bg-slate-50 shadow-soft"
        >
          <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid gap-6 xl:grid-cols-4">
              <div className="rounded-[2rem] bg-slate-950 p-6 text-white xl:col-span-1">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Solutions</p>
              <h3 className="mt-4 text-2xl font-semibold">Enterprise security architecture for every operational layer.</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">A clean menu surface that mirrors the MatrixComsec experience while staying focused on security and surveillance.</p>
              <Link href="/solutions" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                Explore all solutions <ArrowRight className="h-4 w-4" />
              </Link>
              </div>
              {menuColumns.Solutions.map((column) => (
                <div key={column.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 transition hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">{column.title}</p>
                  <ul className="mt-5 space-y-3 text-sm text-slate-600">
                    {column.links.map((link) => (
                      <li key={link} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                        <span>{link}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
          </div>
        </motion.div>
      );
    }

    if (openMenu === "Industries") {
      return (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.985 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="w-full border-b border-slate-200 bg-slate-50 shadow-soft"
        >
          <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary">Industries</p>
                <h3 className="mt-2 text-2xl font-semibold text-brand-secondary">Deployment patterns for regulated and mission-critical sectors.</h3>
              </div>
              <Link href="/industries" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-brand-secondary transition hover:border-brand-primary hover:text-brand-primary">
                View all industries <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
              {selectedIndustries.map((industry) => (
                <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-brand-primary/40 hover:bg-white hover:shadow-glow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-brand-secondary">{industry.name}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{industry.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      );
    }

    if (openMenu === "Products") {
      return (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.985 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="w-full border-b border-slate-200 bg-slate-50 shadow-soft"
        >
          <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid gap-6 xl:grid-cols-4">
              <div className="grid gap-4 md:grid-cols-3 xl:col-span-3">
                {productGroups.map((group) => (
                  <div key={group.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 transition hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">{group.title}</p>
                    <ul className="mt-5 space-y-3">
                      {group.links.map((product) => (
                        <li key={product.slug}>
                          <Link href={`/products/${product.slug}`} className="group flex items-center justify-between gap-3 rounded-2xl px-3 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-brand-secondary">
                            <span>{product.name}</span>
                            <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="rounded-[2rem] bg-brand-secondary p-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)] xl:col-span-1">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Product stack</p>
                <h3 className="mt-4 text-2xl font-semibold">Purpose-built devices for surveillance, entry control, and workforce tracking.</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">The product menu stays focused on CCTV and security solutions only, with telecom removed end-to-end.</p>
                <Link href="/products" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-glow">
                  Browse products <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.985 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="w-full border-b border-slate-200 bg-slate-50 shadow-soft"
      >
        <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {openMenu && primaryNav.find((entry) => entry.label === openMenu)?.children.map((child) => (
              <Link key={child.label} href={child.href} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-brand-primary/40 hover:bg-white hover:shadow-glow">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">{openMenu}</p>
                <h3 className="mt-3 text-lg font-semibold text-brand-secondary">{child.label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{child.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 md:gap-8 lg:px-8 xl:gap-12">
        <BrandLogo compact className="shrink-0 lg:pr-4" />

        <nav className="hidden items-center justify-center gap-1 xl:flex">
            {primaryNav.map((item) => (
              <button
                key={item.label}
                type="button"
                className={cn(
                  "flex shrink-0 items-center gap-1 rounded-full px-2.5 py-2 text-[12.5px] font-medium whitespace-nowrap leading-none text-slate-700 transition hover:bg-slate-100 hover:text-brand-secondary",
                  openMenu === item.label && "bg-slate-100 text-brand-secondary"
                )}
                onClick={() => setOpenMenu(openMenu === item.label ? null : (item.label as OpenMenu))}
              >
                {item.label}
                <ChevronDown className="h-4 w-4" />
              </button>
            ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <button type="button" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-primary hover:text-brand-primary" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <Link href="/contact-us" className="inline-flex h-11 items-center rounded-full bg-brand-primary px-5 text-sm font-semibold whitespace-nowrap text-white shadow-glow transition hover:-translate-y-0.5">
            Quick Inquiry
          </Link>
        </div>

        <button type="button" onClick={() => setMobileOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 xl:hidden" aria-label="Open mobile menu">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {openMenu ? renderMegaMenu() : null}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }} transition={{ duration: 0.22 }} className="fixed inset-0 z-50 bg-white xl:hidden">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
                <BrandLogo compact />
                <button type="button" onClick={() => setMobileOpen(false)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700" aria-label="Close menu">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6">
                <div className="space-y-3">
                  {primaryNav.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <button type="button" onClick={() => setMobileSection(mobileSection === item.label ? null : item.label)} className="flex w-full items-center justify-between text-left text-base font-semibold text-brand-secondary">
                        <span>{item.label}</span>
                        <ChevronDown className={cn("h-4 w-4 transition", mobileSection === item.label && "rotate-180")} />
                      </button>
                      {mobileSection === item.label ? (
                        <div className="mt-3 space-y-2">
                          {item.children.map((child) => (
                            <Link key={child.label} href={child.href} className="block rounded-xl bg-white px-3 py-2 text-sm text-slate-600">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-3 pb-6">
                  <Link href="/contact-us" className="flex-1 rounded-full bg-brand-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-glow">
                    Quick Inquiry
                  </Link>
                  <button type="button" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-600">
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}