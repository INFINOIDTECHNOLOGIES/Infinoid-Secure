"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Loader2, MailCheck } from "lucide-react";

export function FooterNewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setStatus("sending");
    setMessage("");

    const response = await fetch("/api/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "newsletter",
        email: formData.get("email"),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      setStatus("error");
      setMessage(result.message || "Unable to subscribe.");
      return;
    }

    event.currentTarget.reset();
    setStatus("success");
    setMessage("Subscription saved.");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2">
        <input name="email" type="email" required placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400" />
        <button type="submit" disabled={status === "sending"} className="rounded-xl bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70">
          {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Join"}
        </button>
      </div>
      {message ? (
        <p className={`mt-3 flex items-center gap-2 text-xs ${status === "error" ? "text-rose-300" : "text-emerald-300"}`}>
          <MailCheck className="h-3.5 w-3.5" />
          {message}
        </p>
      ) : null}
    </form>
  );
}