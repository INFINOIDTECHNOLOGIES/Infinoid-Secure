"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setMessage("");

    const response = await fetch("/api/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "contact",
        name: formData.get("name"),
        company: formData.get("company"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      setStatus("error");
      setMessage(result.message || "Unable to submit your inquiry.");
      return;
    }

    form.reset();
    setStatus("success");
    setMessage("Inquiry submitted. Our team will respond shortly.");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <input name="name" required className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-primary" placeholder="Full name" />
      <input name="company" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-primary" placeholder="Company" />
      <input name="email" type="email" required className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-primary" placeholder="Email address" />
      <textarea name="message" required className="min-h-36 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-primary" placeholder="Tell us about your requirement" />
      <button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-5 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70">
        {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        {status === "sending" ? "Submitting..." : "Submit inquiry"}
      </button>
      {message ? (
        <p className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm ${status === "error" ? "bg-rose-50 text-rose-700" : "bg-emerald-50 text-emerald-700"}`}>
          <CheckCircle2 className="h-4 w-4" />
          {message}
        </p>
      ) : null}
    </form>
  );
}