import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-background px-4 text-center">
      <div className="max-w-xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-brand-secondary">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">The requested security page does not exist. Return to the homepage to continue exploring Infinoid Secure.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-glow">
          Back to home
        </Link>
      </div>
    </main>
  );
}