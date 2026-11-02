import Link from 'next/link';

export default function DashboardNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="rounded-3xl bg-white p-10 text-center shadow-xl ring-1 ring-slate-200">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">DepEd</p>
        <h1 className="mt-4 text-4xl font-black text-slate-900">Page unavailable</h1>
        <p className="mt-3 text-slate-600">The requested school module could not be found.</p>
        <Link href="/dashboard" className="mt-6 inline-block rounded-xl bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
          Return to Dashboard
        </Link>
      </div>
    </main>
  );
}
