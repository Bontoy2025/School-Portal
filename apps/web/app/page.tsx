import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)] p-6 text-white">
      <div className="w-full max-w-5xl rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-2xl backdrop-blur">
        <div className="mb-8 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          School Portal
        </div>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Secure school operations for every role.</h1>
            <p className="mt-5 max-w-xl text-base text-slate-300 md:text-lg">
              Manage classes, attendance, announcements, and student data in one modular monolith designed for Admin, Teacher, Student, and Parent workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/login" className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">Login</Link>
              <Link href="/dashboard" className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">Dashboard</Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6">
            <h2 className="text-lg font-semibold text-white">Role access</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              <li className="rounded-xl bg-slate-700/70 px-3 py-2">Admin: full school management</li>
              <li className="rounded-xl bg-slate-700/70 px-3 py-2">Teacher: class and attendance tools</li>
              <li className="rounded-xl bg-slate-700/70 px-3 py-2">Student: personal academic records</li>
              <li className="rounded-xl bg-slate-700/70 px-3 py-2">Parent: linked child overview</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
