export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6 text-center">
      <div className="rounded-3xl bg-white p-10 shadow-xl ring-1 ring-slate-200">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">404</p>
        <h1 className="mt-4 text-4xl font-black text-slate-900">Page not found</h1>
        <p className="mt-3 text-slate-600">This page is part of the School Portal MVP structure.</p>
      </div>
    </main>
  );
}
