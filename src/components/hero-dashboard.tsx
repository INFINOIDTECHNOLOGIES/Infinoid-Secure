"use client";

import { motion } from "framer-motion";
import { Activity, AlertTriangle, Camera, Eye, MapPinned, Radar, ShieldCheck, Users } from "lucide-react";

const cameras = ["Gate 01", "Lobby 03", "Parking A2", "Perimeter W"];

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="pointer-events-none hidden w-full max-w-[480px] xl:block"
    >
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Security operations</p>
            <p className="mt-1 text-sm text-slate-300">Infinoid control dashboard</p>
          </div>
          <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Live
          </div>
        </div>

        <div className="grid gap-4 p-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {cameras.map((camera, index) => (
                <div key={camera} className="group overflow-hidden rounded-[1.3rem] border border-white/10 bg-white/5">
                  <div className="relative h-24 bg-[linear-gradient(135deg,rgba(148,163,184,0.18),rgba(0,175,196,0.18))]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.25),transparent_25%),linear-gradient(180deg,rgba(15,23,42,0.15),rgba(15,23,42,0.65))]" />
                    <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-slate-950/55 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white">
                      {camera}
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-slate-950/70 px-2.5 py-1 text-[10px] text-cyan-200">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
                      AI OK
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 text-[11px] text-slate-300">
                    <span>Stream {index + 1}</span>
                    <span className="text-cyan-300">98% uptime</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-cyan-300"><ShieldCheck className="h-4 w-4" /><span className="text-[11px] font-semibold uppercase tracking-[0.28em]">AI detections</span></div>
                <p className="mt-3 text-3xl font-semibold text-white">42</p>
                <p className="mt-1 text-sm text-slate-400">Active across 12 sites</p>
              </div>
              <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-cyan-300"><Users className="h-4 w-4" /><span className="text-[11px] font-semibold uppercase tracking-[0.28em]">Visitors today</span></div>
                <p className="mt-3 text-3xl font-semibold text-white">184</p>
                <p className="mt-1 text-sm text-slate-400">Cleared by access policy</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">Live alerts</p>
                <AlertTriangle className="h-4 w-4 text-amber-300" />
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="rounded-2xl bg-slate-900/70 p-3">Motion event at <span className="text-white">Parking A2</span></div>
                <div className="rounded-2xl bg-slate-900/70 p-3">ANPR match verified at <span className="text-white">Gate 01</span></div>
                <div className="rounded-2xl bg-slate-900/70 p-3">Visitor approved for <span className="text-white">Lobby 03</span></div>
              </div>
            </div>

            <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-cyan-300"><Radar className="h-4 w-4" /><span className="text-[11px] font-semibold uppercase tracking-[0.28em]">Analytics</span></div>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="mb-2 flex items-center justify-between text-xs text-slate-400"><span>Perimeter events</span><span>86%</span></div>
                  <div className="h-2 rounded-full bg-white/10"><div className="h-2 w-[86%] rounded-full bg-gradient-to-r from-cyan-400 to-teal-300" /></div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-xs text-slate-400"><span>Visitor throughput</span><span>72%</span></div>
                  <div className="h-2 rounded-full bg-white/10"><div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-cyan-400 to-teal-300" /></div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-xs text-slate-400"><span>Alert response</span><span>94%</span></div>
                  <div className="h-2 rounded-full bg-white/10"><div className="h-2 w-[94%] rounded-full bg-gradient-to-r from-cyan-400 to-teal-300" /></div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-cyan-300"><MapPinned className="h-4 w-4" /><span className="text-[11px] font-semibold uppercase tracking-[0.28em]">Command center</span></div>
              <p className="mt-3 text-sm leading-6 text-slate-300">Multi-site monitoring, AI-assisted triage, and policy-based access control in one premium interface.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-white/10 px-5 py-4 text-[11px] uppercase tracking-[0.28em] text-slate-400">
          <Camera className="h-4 w-4 text-cyan-300" /> 128 active cameras
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <Eye className="h-4 w-4 text-cyan-300" /> 24/7 monitoring
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <Activity className="h-4 w-4 text-cyan-300" /> Real-time analytics
        </div>
      </div>
    </motion.div>
  );
}