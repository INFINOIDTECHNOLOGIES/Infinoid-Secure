import { MapPin, Mail, Phone, Building2, Clock3 } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { ContactForm } from "@/components/contact-form";

export default function ContactUsPage() {
  return (
    <SiteShell eyebrow="Contact Us" title="Start your enterprise security conversation." description="Use this page for sales, support, and partner inquiries. The layout includes form, locations, and a practical embedded map." >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-brand-secondary">Inquiry form</h2>
          <ContactForm />
        </div>
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft"><Building2 className="h-5 w-5 text-brand-primary" /><p className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">Sales</p><p className="mt-2 text-lg font-semibold text-brand-secondary">+91 98719 73348</p><p className="mt-2 text-sm text-slate-600">Enterprise consultations and project discovery.</p></div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft"><Phone className="h-5 w-5 text-brand-primary" /><p className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">Support</p><p className="mt-2 text-lg font-semibold text-brand-secondary">+91 92270 88395</p><p className="mt-2 text-sm text-slate-600">Service desk and escalation support.</p></div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft"><Mail className="h-5 w-5 text-brand-primary" /><p className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">Email</p><p className="mt-2 text-lg font-semibold text-brand-secondary">hello@infinoidsecure.com</p><p className="mt-2 text-sm text-slate-600">General and enterprise inquiries.</p></div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft"><Clock3 className="h-5 w-5 text-brand-primary" /><p className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">Hours</p><p className="mt-2 text-lg font-semibold text-brand-secondary">Mon-Fri</p><p className="mt-2 text-sm text-slate-600">9:30 AM to 6:30 PM IST</p></div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
            <iframe
              title="Infinoid Secure location map"
              src="https://maps.google.com/maps?q=Asaf%20Ali%20Road%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-[360px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}